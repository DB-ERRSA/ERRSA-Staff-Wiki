(function () {
  function decodeBase64Utf8(value) {
    const bytes = Uint8Array.from(atob(value), character => character.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  function encodeBase64Utf8(value) {
    const bytes = new TextEncoder().encode(value);
    let binary = '';
    for (let i = 0; i < bytes.length; i += 32768) {
      binary += String.fromCharCode(...bytes.subarray(i, i + 32768));
    }
    return btoa(binary);
  }
  function init() {
    const root = document.getElementById('wiki-editor');
    if (!root || root.dataset.bound === 'true') return;
    root.dataset.bound = 'true';
    const panel = root.querySelector('#wiki-edit-panel');
    const editor = root.querySelector('#wiki-edit-text');
    const token = root.querySelector('#wiki-edit-token');
    const status = root.querySelector('#wiki-edit-status');
    const repo = root.dataset.repo;
    const path = root.dataset.path;
    const api = `https://api.github.com/repos/${repo}/contents/${path}`;
    const original = decodeBase64Utf8(root.dataset.source);
    editor.value = original;
    root.querySelector('#wiki-edit-open').onclick = async () => {
      panel.hidden = false;
      status.textContent = repo
        ? 'Edit below. Enter a repository token only when you are ready to save.'
        : 'Local preview: you can edit and download Markdown. Publishing is available on the deployed wiki.';
      editor.focus();
    };
    root.querySelector('#wiki-edit-cancel').onclick = () => {
      panel.hidden = true;
      token.value = '';
      status.textContent = '';
    };
    root.querySelector('#wiki-edit-download').onclick = () => {
      const blob = new Blob([editor.value], {type: 'text/markdown;charset=utf-8'});
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'server.md';
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    };
    root.querySelector('#wiki-edit-save').onclick = async () => {
      if (!repo) { status.textContent = 'Publish from the deployed wiki, or download your Markdown here.'; return; }
      const credential = token.value.trim();
      if (!credential) { status.textContent = 'Enter your repository token to save.'; return; }
      const button = root.querySelector('#wiki-edit-save');
      button.disabled = true;
      status.textContent = 'Checking the current file…';
      const headers = {Authorization: `Bearer ${credential}`, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28'};
      try {
        const currentResponse = await fetch(api, {headers, cache: 'no-store'});
        if (!currentResponse.ok) throw new Error(`Could not read the repository file (${currentResponse.status}). Check token access and repository settings.`);
        const current = await currentResponse.json();
        if (decodeBase64Utf8(current.content.replace(/\s/g, '')) !== original) {
          throw new Error('The changelog changed since this page loaded. Refresh and merge your edits before saving.');
        }
        status.textContent = 'Saving your update…';
        const saveResponse = await fetch(api, {
          method: 'PUT', headers: {...headers, 'Content-Type': 'application/json'},
          body: JSON.stringify({message: 'Update server changelog', content: encodeBase64Utf8(editor.value), sha: current.sha, branch: 'main'})
        });
        if (!saveResponse.ok) throw new Error(`Save failed (${saveResponse.status}). Your text is still in the editor.`);
        token.value = '';
        status.textContent = 'Saved to GitHub. The wiki will update after its deployment finishes.';
        root.dataset.source = encodeBase64Utf8(editor.value);
      } catch (error) {
        status.textContent = error.message;
      } finally {
        token.value = '';
        button.disabled = false;
      }
    };
  }
  if (typeof document$ !== 'undefined') document$.subscribe(init);
  else document.addEventListener('DOMContentLoaded', init);
})();
