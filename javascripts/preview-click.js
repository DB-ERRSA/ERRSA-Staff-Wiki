/* Click the body of a native Material section preview to open its source. */
(function () {
  let previewLink = null;
  document.addEventListener('pointerover', event => {
    const link = event.target.closest?.('.md-content a');
    if (link) previewLink = link.hasAttribute('data-preview') ? link.href : null;
  });
  document.addEventListener('click', event => {
    const tooltip = event.target.closest?.('.md-tooltip');
    if (!tooltip || !previewLink || event.target.closest('a, button, input, textarea, select')) return;
    if (!tooltip.querySelector('.md-tooltip__inner h1, .md-tooltip__inner h2, .md-tooltip__inner h3')) return;
    const target = new URL(previewLink);
    if (target.origin === location.origin) location.assign(target.href);
  });
})();
