import base64
import html
import os

RELEASE_FILE = "docs/documentation/changelog/server.md"

from pathlib import Path

def on_config(config):
    repository = os.environ.get("GITHUB_REPOSITORY", "")
    if repository and "/" in repository:
        config["repo_url"] = "https://github.com/" + repository
        config["edit_uri"] = "edit/main/docs/"
        owner, name = repository.split("/", 1)
        config["site_url"] = f"https://{owner}.github.io/{name}/"
    else:
        config["site_url"] = "http://127.0.0.1:8000/"
    config["site_url"] = os.environ.get("WIKI_SITE_URL", config["site_url"])
    config.extra["wiki_repository"] = repository
    return config


def on_page_markdown(markdown, page, config, files):
    if page.file.src_uri != "documentation/changelog/server.md":
        return markdown
    repository = config.extra.get("wiki_repository", "")
   encoded = base64.b64encode(
    Path(page.file.abs_src_path).read_bytes()
).decode("ascii")
    widget = (
        '<div class="wiki-editor" id="wiki-editor" '
        f'data-repo="{html.escape(repository, quote=True)}" '
        f'data-source="{encoded}" '
        f'data-path="{RELEASE_FILE}">'
        '<button type="button" class="md-button md-button--primary" id="wiki-edit-open">Edit changelog here</button>'
        '<div id="wiki-edit-panel" hidden>'
        '<p class="wiki-edit-hint">Edit the Markdown below. Saving commits to the wiki repository and publishes through GitHub Pages.</p>'
        '<label for="wiki-edit-text">Changelog Markdown</label>'
        '<textarea id="wiki-edit-text" spellcheck="false"></textarea>'
        '<div class="wiki-edit-controls">'
        '<label for="wiki-edit-token">GitHub fine-grained token with Contents read and write access to this repository</label>'
        '<input id="wiki-edit-token" type="password" autocomplete="off" placeholder="Paste token for this session">'
        '<button type="button" class="md-button md-button--primary" id="wiki-edit-save">Save and publish</button>'
        '<button type="button" class="md-button" id="wiki-edit-download">Download Markdown</button>'
        '<button type="button" class="md-button" id="wiki-edit-cancel">Close</button>'
        '</div><p role="status" aria-live="polite" id="wiki-edit-status"></p>'
        '</div></div>'
    )
    return markdown.replace("<!-- WIKI_EDITOR -->", widget, 1)
