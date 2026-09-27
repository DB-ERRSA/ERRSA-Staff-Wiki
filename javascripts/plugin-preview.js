(function () {
  const scriptUrl = document.currentScript && document.currentScript.src;
  const metadataUrl = new URL('../assets/plugin-previews.json', scriptUrl);
  let metadataPromise;
  let popup;
  let hideTimer;
  function getData() {
    if (!metadataPromise) metadataPromise = fetch(metadataUrl).then(response => response.json());
    return metadataPromise;
  }
  function slugFromLink(link) {
    const url = new URL(link.href, location.href);
    const found = url.pathname.match(/\/documentation\/plugins\/([^/]+)\/(?:index\/|commands\/|references\/)?$/);
    return found && found[1];
  }
  function close() { if (popup) popup.hidden = true; }
  function scheduleClose() { clearTimeout(hideTimer); hideTimer = setTimeout(close, 600); }
  function show(link, info) {
    clearTimeout(hideTimer);
    if (!popup) {
      popup = document.createElement('div');
      popup.className = 'wiki-plugin-preview';
      popup.setAttribute('role', 'tooltip');
      popup.addEventListener('pointerenter', () => clearTimeout(hideTimer));
      popup.addEventListener('pointerleave', scheduleClose);
      document.body.appendChild(popup);
    }
    popup.replaceChildren();
    const heading = document.createElement('strong'); heading.textContent = info.name;
    const summary = document.createElement('p'); summary.textContent = info.summary;
    const category = document.createElement('small'); category.textContent = info.category;
    const links = document.createElement('div'); links.className = 'wiki-plugin-preview__links';
    const overview = document.createElement('a'); overview.href = link.href; overview.textContent = 'Overview →';
    links.appendChild(overview);
    if (info.external) {
      const external = document.createElement('a'); external.href = info.external;
      external.textContent = 'External docs ↗'; external.target = '_blank'; external.rel = 'noopener';
      links.appendChild(external);
    }
    popup.append(heading, summary, category, links);
    const rect = link.getBoundingClientRect();
    const width = Math.min(330, window.innerWidth - 24);
    popup.style.width = width + 'px';
    popup.style.left = Math.max(12, Math.min(rect.right + 1, window.innerWidth - width - 12)) + 'px';
    popup.style.top = Math.max(12, Math.min(rect.top, window.innerHeight - 180)) + 'px';
    popup.hidden = false;
  }
  function init() {
    document.querySelectorAll(".tool-remote-logo").forEach(img => {
      img.addEventListener("error", () => { img.hidden = true; });
    });
    document.querySelectorAll('.md-nav__link[href*="/plugins/"]').forEach(link => {
      if (link.dataset.wikiPreview) return;
      const slug = slugFromLink(link);
      if (!slug) return;
      link.dataset.wikiPreview = 'true';
      link.addEventListener('pointerenter', async () => {
        try { const info = (await getData())[slug]; if (link.matches(':hover') && info) show(link, info); } catch (_) { /* Native links remain usable. */ }
      });
      link.addEventListener('focus', async () => {
        try { const info = (await getData())[slug]; if (document.activeElement === link && info) show(link, info); } catch (_) {}
      });
      link.addEventListener('pointerleave', scheduleClose);
      link.addEventListener('blur', scheduleClose);
    });
  }
  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else document.addEventListener('DOMContentLoaded', init);
})();
