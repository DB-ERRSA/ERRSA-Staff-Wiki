(() => {
  const snapshots = new Map();
  const norm = value => String(value || '').toLowerCase().replace(/[^a-z0-9]/g, '');
  const element = (tag, text, parent, className) => {
    const node = document.createElement(tag);
    if (text !== null && text !== undefined) node.textContent = String(text);
    if (className) node.className = className;
    if (parent) parent.appendChild(node);
    return node;
  };
  async function load(root, server) {
    const url = new URL(root + server + '.json', location.href).href;
    if (!snapshots.has(url)) snapshots.set(url, fetch(url).then(async r => {
      if (!r.ok) throw Error('HTTP ' + r.status);
      return r.json();
    }).catch(() => null));
    return snapshots.get(url);
  }
  function latestLookup(data, name, server) {
    const id = norm(name);
    const aliases = {quickshophikari:'quickshop', essentialschat:'essentialsxchat', essentials:'essentialsx', simplevoicechat:'voicechat', wildernesstp:'wild'};
    const key = (aliases[id] || id);
    return data?.plugins?.[server]?.[key] || data?.plugins?.[server]?.[id] || null;
  }
  function compareVersions(installed, latest) {
    const parse = value => {
      const match = String(value || '').match(/^(?:v)?(\d+(?:\.\d+){1,3})(?:[-+]b?(\d+))?/i);
      return match ? [...match[1].split('.').map(Number), Number(match[2] || 0)] : null;
    };
    const a = parse(installed), b = parse(latest);
    if (!a || !b) return false;
    for (let i = 0; i < Math.max(a.length,b.length); i++) {
      if ((b[i] || 0) !== (a[i] || 0)) return (b[i] || 0) > (a[i] || 0);
    }
    return false;
  }
  function lookup(data, name) {
    const id = norm(name);
    const aliases = { 'quickshophikari':['quickshop','quickshophikari'], 'essentialschat':['essentialsxchat','essentialschat'], 'essentials':['essentialsx','essentials'], 'simplevoicechat':['voicechat','simplevoicechat'], 'wildernesstp':['wild','wildernesstp'], 'wild':['wild','wildernesstp'], 'errsamccore':['errsamccore'], 'rankprogression':['rankprogression'] };
    const keys = aliases[id] || [id];
    return (data.plugins || []).find(p => keys.includes(norm(p.name)) || keys.includes(norm(p.id)));
  }

function badge(parent, data, name, server, expanded, latest) {
  const valid = data && data.capturedAt && Array.isArray(data.plugins);
  const plugin = valid && lookup(data, name);

  const txt = !valid
    ? 'Awaiting ' + server + ' startup sync'
    : !plugin
      ? 'No longer installed on ' + server
      : plugin.enabled === 'false'
        ? 'Installed but disabled · v' + (plugin.version || '?')
        : 'Installed · v' + (plugin.version || '?');

  const span = element(
    'span',
    txt,
    parent,
    'errsa-sync-badge ' +
      (!valid
        ? 'errsa-sync-pending'
        : !plugin || plugin.enabled === 'false'
          ? 'errsa-sync-missing'
          : 'errsa-sync-installed')
  );

  if (plugin && latest?.plugins?.[server]) {
    const releases = latest.plugins[server];

    const releaseKey = Object.keys(releases).find(
      key => norm(key) === norm(name)
    );

    const release = releaseKey && releases[releaseKey];

    if (release?.version) {
      const row = element(
        'div',
        null,
        parent,
        'errsa-latest-version'
      );

      element(
        'strong',
        'Latest available: ',
        row
      );

      if (release.url) {
        const link = element('a', release.version, row);
        link.href = release.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
      } else {
        element('span', release.version, row);
      }

      if (
        plugin.version &&
        norm(plugin.version) !== norm(release.version)
      ) {
        element(
          'span',
          ' · Different release available',
          row,
          'errsa-update-note'
        );
      }
    }
  }

  if (valid && expanded) {
    element(
      'small',
      'Last checked on server startup: ' +
        new Date(data.capturedAt).toLocaleString(),
      parent,
      'errsa-sync-time'
    );
  }

  return span;
}


  const commandMaps = new Map();
  async function loadCommandMap(root) {
    const url = new URL(root + 'command-permission-map.json', location.href).href;
    if (!commandMaps.has(url)) commandMaps.set(url, fetch(url).then(async r => {
      if (!r.ok) throw Error('HTTP ' + r.status);
      return r.json();
    }).catch(() => ({ plugins: {} })));
    return commandMaps.get(url);
  }
  function commandMapEntry(mapping, pluginName) {
    const plugins = mapping?.plugins || {};
    const key = Object.keys(plugins).find(k => norm(k) === norm(pluginName));
    return key ? plugins[key] : null;
  }

  const staffRoles = [
    { group: 'mod', label: 'MOD', className: 'tag-mod' },
    { group: 'admin', label: 'ADMIN', className: 'tag-admin' },
    { group: 'dev', label: 'DEV', className: 'tag-dev' },
    { group: 'server-lead', label: 'SERVER LEAD', className: 'tag-server-lead' }
  ];
  function groupMap(data) {
    return new Map((data?.luckPermsGroups || []).map(g => [String(g.name || '').toLowerCase(), g]));
  }
  function wildcardMatch(pattern, permission) {
    pattern = String(pattern || '').toLowerCase(); permission = String(permission || '').toLowerCase();
    if (pattern === '*') return true;
    if (!pattern.includes('*')) return pattern === permission;
    const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*');
    return new RegExp('^' + escaped + '$').test(permission);
  }
  function effectivePermission(groups, groupName, permission, seen = new Set()) {
    groupName = String(groupName || '').toLowerCase();
    if (seen.has(groupName)) return null;
    seen.add(groupName);
    const group = groups.get(groupName);
    if (!group) return null;
    const perms = (group.nodes || []).filter(n => n.type === 'permission' && wildcardMatch(n.node, permission));
    if (perms.length) {
      perms.sort((a,b) => String(b.node).replace(/\*/g,'').length - String(a.node).replace(/\*/g,'').length);
      return perms[0].value === 'true';
    }
    for (const n of (group.nodes || []).filter(n => n.type === 'inheritance' && n.value === 'true')) {
      const parent = String(n.node || '').replace(/^group\./i, '');
      const inherited = effectivePermission(groups, parent, permission, new Set(seen));
      if (inherited !== null) return inherited;
    }
    return null;
  }
  // The plugin snapshot only contains permissions registered by the plugin.
  // LuckPerms may include additional valid nodes that the plugin never registered.
  // Use the same prefix classification as the Staff Permissions overview.
  const permissionPrefixes = {
    essentials: ['essentials'], essentialsx: ['essentials'],
    essentialschat: ['essentialsxchat'], essentialsspawn: ['essentialsspawn'],
    quickshophikari: ['quickshop'], wildernesstp: ['wildernesstp'], wildrtp: ['wildernesstp'], wild: ['wildernesstp'],
    armorstandtools: ['astools'], silkspawnersv2: ['silkspawners'],
    tabcompletefilter: ['tcf'], simplevoicechat: ['voicechat'],
    playerinitialization: ['playerinit'], rankprogression: ['rankprogression']
  };
  function matchingLuckPermsNodes(data, pluginName) {
    const normalized = norm(pluginName);
    const prefixes = permissionPrefixes[normalized] || [normalized];
    const nodes = new Set();
    for (const group of (data?.luckPermsGroups || [])) {
      for (const entry of (group.nodes || [])) {
        if (entry.type !== 'permission') continue;
        const node = String(entry.node || '').toLowerCase();
        if (prefixes.some(prefix => node.startsWith(prefix + '.'))) nodes.add(entry.node);
      }
    }
    return [...nodes];
  }
  function permissionUniverse(plugin, mapEntry, data, pluginName) {
    const nodes = new Set((plugin?.permissions || []).map(p => p.node).filter(Boolean));
    for (const command of (plugin?.commands || [])) if (command.permission) nodes.add(command.permission);
    for (const command of (mapEntry?.commands || [])) if (command.permission) nodes.add(command.permission);
    for (const node of matchingLuckPermsNodes(data, pluginName || plugin?.name)) nodes.add(node);
    return [...nodes];
  }
  function pluginRoleAccess(data, pluginName, mapping) {
    const plugin = data?.plugins && lookup(data, pluginName);
    if (!plugin) return { plugin: null, roles: [] };
    const mapEntry = commandMapEntry(mapping, pluginName);
    const declared = permissionUniverse(plugin, mapEntry, data, pluginName);
    const groups = groupMap(data);
    const roles = staffRoles.map(role => {
      const nodes = declared.filter(node => effectivePermission(groups, role.group, node) === true);
      const group = groups.get(role.group);
      const wildcard = (group?.nodes || []).some(n => n.type === 'permission' && n.value === 'true' && n.node === '*');
      const inheritedWildcard = declared.length && effectivePermission(groups, role.group, declared[0]) === true && nodes.length === declared.length;
      return { ...role, nodes, hasAccess: nodes.length > 0, wildcard: wildcard || inheritedWildcard };
    }).filter(r => r.hasAccess);
    return { plugin, roles };
  }
  function displayCommand(command) {
    const value = String(command || '').trim();
    return value.startsWith('/') ? value : '/' + value;
  }
  function mergeCommands(plugin, mapEntry) {
    const byCommand = new Map();
    if (mapEntry?.includeAuto !== false) {
      for (const auto of (plugin?.commands || [])) {
        const command = displayCommand(auto.name);
        byCommand.set(command.toLowerCase(), {
          command,
          description: auto.description || auto.usage || '—',
          permission: auto.permission || null,
          aliases: auto.aliases || [],
          source: auto.permission ? 'Auto' : 'Unlinked'
        });
      }
    }
    for (const manual of (mapEntry?.commands || [])) {
      const command = displayCommand(manual.command);
      const existing = byCommand.get(command.toLowerCase()) || {};
      byCommand.set(command.toLowerCase(), {
        ...existing,
        command,
        description: manual.description || existing.description || '—',
        permission: manual.permission || existing.permission || null,
        aliases: manual.aliases || existing.aliases || [],
        source: 'Mapped'
      });
    }
    return [...byCommand.values()];
  }
  function roleAccessForPermission(data, permission) {
    if (!permission) return [];
    const groups = groupMap(data);
    return staffRoles.filter(role => effectivePermission(groups, role.group, permission) === true);
  }
  async function renderPluginRoles() {
    for (const root of document.querySelectorAll('.errsa-plugin-role-tags')) {
      root.replaceChildren();
      const server = root.dataset.server || 'survival';
      const [data, mapping] = await Promise.all([load(root.dataset.root, server), loadCommandMap(root.dataset.root)]);
      if (!data?.capturedAt) { element('span', 'Awaiting permission sync', root, 'errsa-sync-note'); continue; }
      const { roles } = pluginRoleAccess(data, root.dataset.plugin, mapping);
      if (!roles.length) {
        // Wiki editorial fallback: no detected access does not imply a confirmed LuckPerms grant.
        roles.push(...staffRoles.filter(role => role.group === 'dev' || role.group === 'server-lead'));
      }
      roles.forEach(role => {
        const tag = element('span', role.label, root, 'md-tag ' + role.className);
        tag.dataset.roleOrder = staffRoles.findIndex(r => r.group === role.group);
      });
    }
    for (const root of document.querySelectorAll('.errsa-plugin-commands')) {
      root.replaceChildren();
      const server = root.dataset.server || 'survival';
      const [data, mapping] = await Promise.all([load(root.dataset.root, server), loadCommandMap(root.dataset.root)]);
      if (!data?.capturedAt) { element('p', 'Awaiting command and permission sync.', root, 'errsa-sync-note'); continue; }
      const plugin = lookup(data, root.dataset.plugin);
      if (!plugin) { element('p', 'Plugin is not present in the latest ' + server + ' snapshot.', root, 'errsa-sync-note'); continue; }
      const mapEntry = commandMapEntry(mapping, root.dataset.plugin);
      const commands = mergeCommands(plugin, mapEntry);
      if (!commands.length) { element('p', 'No command metadata or manual mappings are available for this plugin.', root, 'errsa-sync-note'); continue; }
      const table = element('table', null, root, 'errsa-command-table');
      // The header and data rows share one explicit column layout.
      const columns = element('colgroup', null, table);
      for (let i = 0; i < 4; i++) element('col', null, columns);
      const head = element('thead', null, table), hr = element('tr', null, head);
      ['Command','Description','Permission','Staff Access'].forEach(h => element('th', h, hr));
      const body = element('tbody', null, table);
      commands.forEach(command => {
        const row = element('tr', null, body);
        const commandCell = element('td', null, row);
        element('code', command.command, commandCell);
        if (command.aliases?.length) element('small', 'Aliases: ' + command.aliases.map(displayCommand).join(', '), commandCell, 'errsa-sync-note');
        element('td', command.description || '—', row);
        const permissionCell = element('td', null, row);
        if (command.permission) element('code', command.permission, permissionCell); else element('span', 'Not linked', permissionCell, 'errsa-sync-note');
        const accessCell = element('td', null, row, 'errsa-command-access');
        const roles = roleAccessForPermission(data, command.permission);
        if (roles.length) roles.forEach(role => element('span', role.label, accessCell, 'md-tag ' + role.className));
        else element('span', command.permission ? 'No staff access detected' : 'Unknown', accessCell, 'errsa-sync-note');
      });
      element('small', 'Command-permission relationships are detected automatically when available; ERRSA mappings fill gaps. Staff access always comes from the latest LuckPerms snapshot.', root, 'errsa-sync-time');
    }
    for (const root of document.querySelectorAll('.errsa-plugin-permissions')) {
      root.replaceChildren();
      const server = root.dataset.server || 'survival';
      const [data, mapping] = await Promise.all([load(root.dataset.root, server), loadCommandMap(root.dataset.root)]);
      if (!data?.capturedAt) { element('p', 'Awaiting permission sync.', root, 'errsa-sync-note'); continue; }
      const { plugin, roles } = pluginRoleAccess(data, root.dataset.plugin, mapping);
      if (!plugin) { element('p', 'Plugin is not present in the latest ' + server + ' snapshot.', root, 'errsa-sync-note'); continue; }
      if (!roles.length) { element('p', 'No staff permissions are currently assigned through the synced LuckPerms staff groups.', root, 'errsa-sync-note'); continue; }

      const mapEntry = commandMapEntry(mapping, root.dataset.plugin);
      const declared = permissionUniverse(plugin, mapEntry, data, root.dataset.plugin).sort();
      const groups = groupMap(data);
      // Only show nodes explicitly assigned to one of the four staff groups.
      // Regular player groups (user, survival, premium, etc.) may be inherited
      // by staff and dev may have '*', but neither makes those player nodes
      // staff-specific permissions for this table.
      const staffAssigned = new Set();
      for (const role of staffRoles) {
        const group = groups.get(role.group);
        for (const entry of (group?.nodes || [])) {
          if (entry.type === 'permission' && entry.node && entry.node !== '*' && !entry.node.includes('*')) {
            staffAssigned.add(String(entry.node).toLowerCase());
          }
        }
      }
      const accessible = declared.filter(node => staffAssigned.has(String(node).toLowerCase()) && staffRoles.some(role => effectivePermission(groups, role.group, node) === true));
      if (!accessible.length) { element('p', 'No staff-accessible permission nodes were detected for this plugin.', root, 'errsa-sync-note'); continue; }

      const table = element('table', null, root, 'errsa-permission-matrix');
      const head = element('thead', null, table), tr = element('tr', null, head);
      ['Permission node','Description', ...staffRoles.map(role => role.label)].forEach(h => element('th', h, tr));
      const body = element('tbody', null, table);
      const byNode = new Map((plugin.permissions || []).map(p => [p.node, p]));
      accessible.forEach(node => {
        const p = byNode.get(node) || {};
        const row = element('tr', null, body);
        const nodeCell = element('td', null, row); element('code', node, nodeCell);
        element('td', p.description || '—', row);
        staffRoles.forEach(role => {
          const allowed = effectivePermission(groups, role.group, node) === true;
          const cell = element('td', allowed ? '✓' : '—', row, 'errsa-permission-access ' + (allowed ? 'is-allowed' : 'is-denied'));
          cell.setAttribute('aria-label', role.label + (allowed ? ' has access' : ' does not have access'));
        });
      });
      element('small', 'Permissions and role access are synced from the latest ' + server + ' startup snapshot: ' + new Date(data.capturedAt).toLocaleString(), root, 'errsa-sync-time');
    }
  }

  async function render() {
    // The release cache is a static file built by GitHub Actions; no browser or server API polling.
    const rootForReleases = document.querySelector('.errsa-plugin-status, #errsa-plugin-directory');
    const releases = rootForReleases ? await load(rootForReleases.dataset.root, 'latest') : null;
    
for (const root of document.querySelectorAll('.errsa-plugin-status')) {
  root.replaceChildren();

  const server = root.dataset.server || 'survival';

  const data = await load(root.dataset.root, server);
  const latest = await load(root.dataset.root, 'latest');

  badge(
    root,
    data,
    root.dataset.plugin,
    server,
    true,
    latest
  );
}

    const directory = document.getElementById('errsa-plugin-directory');
    if (directory) {
      const data = await load(directory.dataset.root, 'survival');
      directory.replaceChildren();
      if (!data?.capturedAt) element('p', 'Awaiting first Survival startup sync; installed status is not yet known.', directory, 'errsa-sync-note');
      for (const item of document.querySelectorAll('.plugin-item')) {
        item.querySelectorAll('.errsa-sync-badge').forEach(n => n.remove());
        const anchor = item.querySelector('.plugin-name'); if (anchor) badge(item, data, anchor.textContent, 'survival', false, releases);
      }
    }
    const permissions = document.getElementById('errsa-staff-permissions');
    if (permissions) {
      permissions.replaceChildren();
      const data = await load(permissions.dataset.root, 'survival');
      if (!data?.capturedAt) { element('p', 'Awaiting first Survival startup sync. The historical export is available below.', permissions, 'errsa-sync-note'); return; }
      const groups = data.luckPermsGroups;
      const staffOrder = ['mod', 'admin', 'dev', 'server-lead'];
      element('p', 'Survival snapshot: ' + new Date(data.capturedAt).toLocaleString(), permissions, 'errsa-sync-time');
      if (!Array.isArray(groups)) { element('p', 'This snapshot predates LuckPerms group synchronization. Restart Survival after installing the updated plugin.', permissions, 'errsa-sync-note'); return; }
      if (!groups.length) { element('p', 'No LuckPerms groups were available at server startup. The group list is not verified.', permissions, 'errsa-sync-note'); return; }
      // Names and URLs here match the plugin documentation titles; this affects
      // only the staff overview, not the individual plugin permission tables.
      const pluginDocs = {
        essentials: ['EssentialsX','server-and-infrastructure/essentials/'],
        griefprevention: ['GriefPrevention','permissions-and-moderation/griefprevention/'],
        silkspawners: ['SilkSpawners V2','gameplay-and-progression/silkspawners/'],
        themis: ['Themis','permissions-and-moderation/themis/'],
        wildernesstp: ['WildRTP','gameplay-and-progression/wild/'],
        astools: ['Armor Stand Tools','display-and-media/armorstandtools/'],
        pvptoggle: ['PvPToggle','gameplay-and-progression/pvptoggle/'],
        warpgui: ['WarpGUI','gameplay-and-progression/warpgui/'],
        coreprotect: ['CoreProtect','permissions-and-moderation/coreprotect/'],
        chatfilter: ['ChatFilter','permissions-and-moderation/chatfilter/'],
        eventbridge: ['EventBridge','server-and-infrastructure/eventbridge/'],
        guilds: ['Guilds','gameplay-and-progression/guilds/'],
        playerinit: ['PlayerInitialization','server-and-infrastructure/playerinitialization/'],
        rankprogression: ['Rank Progression','gameplay-and-progression/rank-progression/'],
        vipbridge: ['VIPBridge','server-and-infrastructure/vipbridge/'],
        voicechat: ['Simple Voice Chat','display-and-media/voicechat/'],
        tab: ['TAB','display-and-media/tab/'],
        tcf: ['TABCompleteFilter','server-and-infrastructure/tabcompletefilter/'],
        quickshop: ['QuickShop-Hikari','gameplay-and-progression/quickshop-hikari/']
      };
      const search = element('input',null,permissions);
      search.type = 'search';
      search.placeholder = 'Search a rank or plugin…';
      search.setAttribute('aria-label','Filter plugins by staff rank');
      const content = element('div',null,permissions);
      const draw = () => {
        content.replaceChildren();
        const query = search.value.toLowerCase().trim();
        for (const group of groups.filter(g=>staffOrder.includes(g.name.toLowerCase())).sort((a,b)=>staffOrder.indexOf(a.name.toLowerCase())-staffOrder.indexOf(b.name.toLowerCase()))) {
          const byPrefix = new Map();
          const inherited = [];
          const special = [];
          for (const assignment of group.nodes || []) {
            if (assignment.type === 'inheritance') {
              if (assignment.value === 'true') inherited.push(assignment.node.replace(/^group\./i,''));
              continue;
            }
            const node = String(assignment.node || '');
            const prefix = node.split('.')[0].toLowerCase();
            if (['displayname','prefix','suffix','weight'].includes(prefix)) continue;
            if (node === '*' || prefix === 'minecraft' || prefix === 'velocity' || prefix === 'maintenance' || prefix === 'grim' || !pluginDocs[prefix]) {
              special.push(node);
              continue;
            }
            if (!byPrefix.has(prefix)) byPrefix.set(prefix, []);
            byPrefix.get(prefix).push(assignment);
          }
          const entries = [...byPrefix.entries()].sort((a,b)=>pluginDocs[a[0]][0].localeCompare(pluginDocs[b[0]][0]));
          const matchGroup = group.name.toLowerCase().includes(query);
          const shown = entries.filter(([prefix])=>!query || matchGroup || pluginDocs[prefix][0].toLowerCase().includes(query) || prefix.includes(query));
          const shownSpecial = special.filter(node=>!query || matchGroup || node.toLowerCase().includes(query));
          if (query && !shown.length && !shownSpecial.length && !matchGroup) continue;
          const section = element('details',null,content,'errsa-sync-group'); section.open = true;
          element('summary',group.name+' · '+entries.length+' plugins',section);
          if (shown.length) {
            const table=element('table',null,section),head=element('thead',null,table),tr=element('tr',null,head);
            ['Plugin','Direct assignments'].forEach(t=>element('th',t,tr));
            const body=element('tbody',null,table);
            for (const [prefix, assignments] of shown) {
              const row=element('tr',null,body);
              const name=pluginDocs[prefix][0], path=pluginDocs[prefix][1];
              const cell=element('td',null,row);
              const link=element('a',name,cell);
              link.href = new URL('../'+path,location.href).href;
              element('td',String(assignments.length),row);
            }
          } else if (!query) element('p','No plugin-specific permissions assigned directly.',section);
          if (inherited.length && (!query || matchGroup)) element('p','Inherits: '+inherited.join(', '),section,'errsa-sync-note');
          if (shownSpecial.length) {
            element('p', 'Other permissions: '+shownSpecial.map(n=>n==='*'?'* (all permissions)':n).join(', '),section,'errsa-sync-note');
          }
        }
        if (!content.children.length) element('p','No matching plugins or staff ranks.',content);
      };
      search.addEventListener('input',draw);draw();
    }
    await renderPluginRoles();
  }
  if (typeof document$ !== 'undefined') document$.subscribe(render);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
