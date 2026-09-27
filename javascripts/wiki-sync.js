(() => {
  function el(tag, value, parent, className) {
    const x = document.createElement(tag);
    if (value !== undefined && value !== null) x.textContent = String(value);
    if (className) x.className = className;
    if (parent) parent.appendChild(x);
    return x;
  }
  function table(parent, headings, rows) {
    const t=el('table',null,parent); const tr=el('tr',null,el('thead',null,t));
    headings.forEach(h=>el('th',h,tr)); const tbody=el('tbody',null,t);
    rows.forEach(row=>{const r=el('tr',null,tbody);row.forEach(cell=>el('td',cell,r));});
    return t;
  }
  async function render() {
    const root=document.getElementById('errsa-wiki-sync');if(!root || root.dataset.loaded==='true')return;
    root.dataset.loaded='true';root.replaceChildren();
    for (const server of ['survival','velocity']) {
      const section=el('section',null,root);
      el('h2',server==='survival'?'Survival · Paper':'Velocity · Proxy',section);
      try {
        const url=new URL(root.dataset.root+server+'.json',location.href);
        const response=await fetch(url); if(!response.ok)throw Error('HTTP '+response.status);
        const data=await response.json();
        if(!data.capturedAt){el('p','Awaiting first restart sync from '+server+'.',section);continue;}
        el('p','Software: '+(data.serverVersion||'Unknown')+(data.minecraftVersion?' · Minecraft '+data.minecraftVersion:'')+' · Captured: '+new Date(data.capturedAt).toLocaleString(),section);
        const search=el('input',null,section);search.type='search';search.placeholder='Search plugin name, version or permission';search.setAttribute('aria-label','Search '+server+' plugin inventory');
        const result=el('div',null,section);
        const draw=()=>{
          result.replaceChildren();const q=search.value.trim().toLowerCase();
          const plugins=(data.plugins||[]).filter(p=>[p.name,p.version,p.description,...(p.permissions||[]).map(x=>x.node)].join(' ').toLowerCase().includes(q));
          el('p',plugins.length+' installed plugins',result);
          for(const p of plugins){
            const details=el('details',null,result);el('summary',(p.name||'Unnamed')+' · '+(p.version||'Unknown version'),details);
            if(p.description)el('p',p.description,details);
            if(p.enabled==='false')el('p','Disabled at time of capture',details);
            if(p.permissions?.length)table(details,['Declared node','Description','Default'],p.permissions.map(n=>[n.node,n.description,n.default]));
            else el('p','No plugin metadata permissions reported.',details);
          }
          if(server==='survival' && data.registeredPermissions?.length){
            const d=el('details',null,result);el('summary','All registered Paper permissions ('+data.registeredPermissions.length+')',d);
            const entries=data.registeredPermissions.filter(n=>[n.node,n.description].join(' ').toLowerCase().includes(q));
            table(d,['Node','Description','Default'],entries.map(n=>[n.node,n.description,n.default]));
          }
        };
        search.addEventListener('input',draw);draw();
      }catch(err){el('p','Saved '+server+' snapshot could not be loaded ('+err.message+').',section);}
    }
  }
  if(typeof document$!=='undefined')document$.subscribe(render);
  else if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);
  else render();
})();
