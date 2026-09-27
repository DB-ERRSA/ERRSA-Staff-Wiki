/* Preview handbook sections without trapping the pointer or keyboard focus. */
(function () {
  let activeLink = null;
  let card = null;
  let timer = null;
  let request = 0;
  const cache = new Map();

  function closeSoon() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (card) card.remove();
      card = null;
      activeLink = null;
      request++;
    }, 300);
  }

  async function show(link) {
    clearTimeout(timer);
    const url = new URL(link.href);
    const id = ++request;
    activeLink = link;
    if (card) card.remove();
    card = document.createElement('aside');
    card.className = 'wiki-section-preview';
    card.setAttribute('aria-label', 'Section preview');
    card.addEventListener('pointerenter', () => clearTimeout(timer));
    card.addEventListener('pointerleave', closeSoon);
    card.addEventListener('focusin', () => clearTimeout(timer));
    card.addEventListener('focusout', () => setTimeout(() => {
      if (card && !card.contains(document.activeElement) && document.activeElement !== activeLink) closeSoon();
    }, 0));
    const heading = document.createElement('strong');
    heading.textContent = 'Loading section…';
    card.append(heading);
    document.body.append(card);
    const rect = link.getBoundingClientRect();
    card.style.left = Math.max(12, Math.min(rect.left, window.innerWidth - Math.min(350, window.innerWidth - 24) - 12)) + 'px';
    card.style.top = Math.min(rect.bottom + 8, window.innerHeight - 240) + 'px';
    try {
      let page = cache.get(url.pathname);
      if (!page) {
        const response = await fetch(url.pathname);
        if (!response.ok) throw new Error('Preview unavailable');
        page = new DOMParser().parseFromString(await response.text(), 'text/html');
        cache.set(url.pathname, page);
      }
      if (id !== request || activeLink !== link) return;
      const root = page.querySelector('.md-content .md-typeset');
      const target = url.hash ? page.getElementById(decodeURIComponent(url.hash.slice(1))) : root?.querySelector('h1');
      if (!target || !root?.contains(target)) throw new Error('Preview unavailable');
      const excerpt = [];
      let node = target.nextElementSibling;
      while (node && excerpt.length < 2 && !/^H[1-3]$/.test(node.tagName)) {
        if (node.matches('p, ul, ol')) excerpt.push(node.textContent.trim());
        node = node.nextElementSibling;
      }
      heading.textContent = target.textContent.trim();
      const summary = document.createElement('p');
      const words = excerpt.join(' ').split(/\s+/);
      summary.textContent = words.slice(0, 85).join(' ') + (words.length > 85 ? '…' : '');
      const open = document.createElement('a');
      open.href = link.href;
      open.textContent = 'Open full section ↗';
      card.append(summary, open);
    } catch (error) {
      if (id === request && card) heading.textContent = 'Preview unavailable — open the link to read this section.';
    }
  }

  function init() {
    if (!location.pathname.includes('/documentation/staff-documents/')) return;
    document.querySelectorAll('.md-content .md-typeset a[href]').forEach(link => {
      if (link.closest('.section-card, .handbook-resource, .md-content__button')) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || !url.pathname.includes('/documentation/')) return;
      link.addEventListener('pointerenter', () => show(link));
      link.addEventListener('pointerleave', closeSoon);
      link.addEventListener('focus', () => show(link));
      link.addEventListener('blur', closeSoon);
    });
  }
  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else document.addEventListener('DOMContentLoaded', init);
})();
