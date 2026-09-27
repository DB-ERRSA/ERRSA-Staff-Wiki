# ERRSA Staff Wiki

Run `pip install -r requirements.txt` and `mkdocs serve`. GitHub Actions deploys the site on pushes to main. To enable edit links, set `repo_url` and `edit_uri` to the verified repository URL.

The supplied LuckPerms user export and moderation log are deliberately not published. The staff handbook is dated August 2025 and retained as source text for review. Plugin guides from the original repo are flagged for verification.

## Edit the changelog

On the deployed wiki, use **Edit changelog here** on the changelog page. Saving requires a GitHub fine-grained token with Contents read and write access to this repository. The token stays in the current browser form and is cleared after saving; it is not stored by the site. The editor checks for concurrent changes, commits to `main`, then GitHub Pages redeploys. In local preview, the editor can download the Markdown; replace `docs/documentation/changelog/server.md` with that file to keep the edit. The deployment environment supplies `GITHUB_REPOSITORY`. Adjust `hooks.py` and the GitHub Action if your production branch is not `main`.

## Plugin pages

Each plugin has an overview, a commands and permissions page, and references. The legacy guide is linked from References. New pages are normal Markdown files under `docs/documentation/plugins/`; add or remove entries in `mkdocs.yml` when the inventory changes. Unknown versions and links are left unfilled until verified.

## Startup-only plugin inventory

See [`wiki-sync/README.md`](wiki-sync/README.md) for the lightweight Paper/Velocity wiki sync setup.
