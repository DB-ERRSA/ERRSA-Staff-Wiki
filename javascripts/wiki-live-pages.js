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
  function lookup(data, name) {
    const id = norm(name);
    const aliases = { 'quickshophikari':['quickshop','quickshophikari'], 'essentialschat':['essentialsxchat','essentialschat'], 'essentials':['essentialsx','essentials'], 'simplevoicechat':['voicechat','simplevoicechat'], 'wildernesstp':['wild','wildernesstp'], 'wild':['wild','wildernesstp'], 'errsamccore':['errsamccore'], 'rankprogression':['rankprogression'] };
    const keys = aliases[id] || [id];
    return (data.plugins || []).find(p => keys.includes(norm(p.name)) || keys.includes(norm(p.id)));
  }
  function badge(parent, data, name, server, expanded) {
    const valid = data && data.capturedAt && Array.isArray(data.plugins);
    const plugin = valid && lookup(data, name);
    const txt = !valid ? 'Awaiting ' + server + ' startup sync' : !plugin ? 'No longer installed on ' + server : plugin.enabled === 'false' ? 'Installed but disabled · v' + (plugin.version || '?') : 'Installed · v' + (plugin.version || '?');
    const span = element('span', txt, parent, 'errsa-sync-badge ' + (!valid ? 'errsa-sync-pending' : !plugin || plugin.enabled === 'false' ? 'errsa-sync-missing' : 'errsa-sync-installed'));
    if (valid && expanded) element('small', 'Last checked on server startup: ' + new Date(data.capturedAt).toLocaleString(), parent, 'errsa-sync-time');
    return span;
  }
  async function render() {
    for (const root of document.querySelectorAll('.errsa-plugin-status')) {
      root.replaceChildren(); const server = root.dataset.server || 'survival';
      badge(root, await load(root.dataset.root, server), root.dataset.plugin, server, true);
    }
    const directory = document.getElementById('errsa-plugin-directory');
    if (directory) {
      const data = await load(directory.dataset.root, 'survival');
      directory.replaceChildren();
      if (!data?.capturedAt) element('p', 'Awaiting first Survival startup sync; installed status is not yet known.', directory, 'errsa-sync-note');
      for (const item of document.querySelectorAll('.plugin-item')) {
        item.querySelectorAll('.errsa-sync-badge').forEach(n => n.remove());
        const anchor = item.querySelector('.plugin-name'); if (anchor) badge(item, data, anchor.textContent, 'survival', false);
      }
    }
    const permissions = document.getElementById('errsa-staff-permissions');
    if (permissions) {
      permissions.replaceChildren();
      const data = await load(permissions.dataset.root, 'survival');
      if (!data?.capturedAt) { element('p', 'Awaiting first Survival startup sync. The historical export is available below.', permissions, 'errsa-sync-note'); return; }
      const groups = data.luckPermsGroups;
      element('p', 'Survival snapshot: ' + new Date(data.capturedAt).toLocaleString(), permissions, 'errsa-sync-time');
      if (!Array.isArray(groups)) { element('p', 'This snapshot predates LuckPerms group synchronization. Restart Survival after installing the updated plugin.', permissions, 'errsa-sync-note'); return; }
      if (!groups.length) { element('p', 'No LuckPerms groups were available at server startup. The group list is not verified.', permissions, 'errsa-sync-note'); return; }
      const search=element('input',null,permissions); search.type='search';search.placeholder='Search group or permission node…';search.setAttribute('aria-label','Filter staff permissions');
      const content=element('div',null,permissions);
      const draw=()=>{
        content.replaceChildren(); const query=search.value.toLowerCase().trim();
        for(const group of groups.filter(g=>['mod','admin','dev','server-lead'].includes(g.name.toLowerCase()))) {
          const nodes=(group.nodes||[]).filter(n => !query || [group.name,n.node,n.context].join(' ').toLowerCase().includes(query));
          if(query && !nodes.length)continue;
          const section=element('details',null,content,'errsa-sync-group');section.open=true;
          element('summary',group.name+' · '+(group.nodes||[]).length+' direct assignments',section);
          if(!nodes.length){element('p','No direct assignments.',section);continue;}
          const table=element('table',null,section),head=element('thead',null,table),tr=element('tr',null,head);
          ['Node / group inheritance','Value','Context'].forEach(t=>element('th',t,tr));
          const body=element('tbody',null,table);
          nodes.sort((a,b)=>a.node.localeCompare(b.node)).forEach(n=>{
            const row=element('tr',null,body);
            element('td',(n.type==='inheritance'?'Inherits: ':'')+n.node,row);
            element('td',n.value==='true'?'Grant':'Deny',row);
            element('td',n.context==='[]'?'Global':n.context,row);
          });
        }
        if (!content.children.length) element('p','No matching staff group assignments.',content);
      };
      search.addEventListener('input',draw);draw();
    }
  }
  if (typeof document$ !== 'undefined') document$.subscribe(render);
  else if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
