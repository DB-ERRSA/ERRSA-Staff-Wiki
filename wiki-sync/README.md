# ERRSA Wiki Sync — startup-only, no Render backend

## Architecture

Paper and Velocity each publish **one JSON snapshot per server startup**, directly to the GitHub Contents API. Your existing `main` push workflow builds the static MkDocs site; the new **Documentation → Plugins → Live server inventory** page reads the saved JSON from the static site. No Render database, timer, extra web service, server polling or GitHub scheduled action is required. Existing plugin guides are preserved and now show live snapshot-derived versions and red notices when documented plugins are absent. The Staff permissions page reads direct LuckPerms group nodes from the Survival snapshot.

The repo must be connected to GitHub Actions/GitHub Pages or your Render **static site** must deploy on pushes to `main`. The included `deploy.yml` already deploys GitHub Pages. If Render uses the same GitHub repo for a static deploy, configure its auto-deploy on push. Render free-tier build-minute usage and GitHub Action runs may still apply **once per successful update**. If both servers restart together, there can be two commits/builds.

## Build (requires JDK 21 and Maven)

From `wiki-sync/paper`: `mvn -B package` → `target/errsa-wiki-sync-paper-1.0.0.jar`.
From `wiki-sync/velocity`: `mvn -B package` → `target/errsa-wiki-sync-velocity-1.0.0.jar`.

Paper targets Paper API `1.21.4-R0.1-SNAPSHOT`. Velocity is built against Velocity API `3.4.0-SNAPSHOT` **without assuming that is your installed proxy version**; the running version is obtained from Velocity at startup. Verify the actual proxy is a compatible Velocity 3.x build before installing. `config version 2.8` alone does not establish its running software version; check Velocity startup log or console `velocity version`.

## Configure GitHub authentication

Create a **fine-grained GitHub personal access token** limited to the **wiki repository only**, with **Contents: read and write**. Avoid broader account/repo access. The token lets a Minecraft server modify repository content; protect its configuration backups and limit who can view Apex files. Do not commit configured tokens into Git. Never include them in public wiki pages.

Install the Paper JAR in Survival `/plugins`, restart to create `plugins/ERRSAWikiSync/config.yml`, edit `github.owner`, `github.repo`, `github.branch` (`main`) and `github.token`, then restart again to publish. Install Velocity JAR in proxy `/plugins`, restart to create `plugins/errsa-wiki-sync/config.properties`, edit `github.owner`, `github.repo`, `github.branch` and `github.token`, then restart again. **Restart only one server at a time during initial configuration.**

Watch logs for `Wiki Sync uploaded ... snapshot to GitHub`. Verify files appear at `docs/assets/wiki-sync/survival.json` and `velocity.json`, then check the live inventory page after the static-site deploy finishes. The plugin sends inventory asynchronously and makes no repeat requests until another restart; network failures are logged and retried only at next startup. Github content conflicts are retried at most twice immediately.

## Scope / accuracy

* Inventory and versions are automatically collected on both servers. Each existing Survival plugin overview and the directory displays installed version or a red absent notice, based on a valid Survival startup snapshot.
* Paper metadata-declared and registered permission nodes are collected, including descriptions/defaults when exposed. These are **not** a complete list of all dynamically checked permissions and defaults are **not actual LuckPerms group grants**.
* Velocity plugin metadata does not provide a complete permission-node inventory. This component lists the plugin IDs/versions but does not invent their nodes.
* `Staff permissions` now renders direct LuckPerms group nodes from Survival startup. The old September 26 export is archived. It shows grants, denies, context and group inheritance nodes, **not effective permissions**, user overrides or resolved wildcards. Velocity group updates are not yet collected; if LuckPerms groups are shared in the same database, ensure Survival loads all relevant groups.
* This inventory page is static and public to anyone with the wiki URL. Do not add secrets, player identifiers, IPs or private role exports to the snapshots.

## Status display notes

Plugin badges match documented titles to the reported name or ID (with a small alias map in `docs/javascripts/wiki-live-pages.js`). If an installed plugin has a different metadata name from its wiki title, add an alias before treating a red badge as a confirmed removal. A red badge means absent from the last **successful** server startup snapshot, not that it disappeared in real time. Only plugins listed as Survival in their overview currently receive Survival status.
