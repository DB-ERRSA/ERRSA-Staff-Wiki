# ERRSA Staff Wiki — optional public releases and staff order

## Install (website only)

Copy the files from this patch into the **existing** ERRSA-Staff-Wiki Git repository, preserving the existing `.git`, `deploy.yml`, and the real `survival.json` and `velocity.json`. This patch ZIP **does not include** server snapshots or Minecraft JARs. Commit and push to `main`.

The Staff Permissions page sorts the four groups `mod`, `admin`, `dev`, `server-lead`. It now uses the correct GitHub Pages relative path, as does Live Server Inventory.

Plugin pages show installed version as before. `Latest available for Paper 1.21.4` appears **only** if GitHub Actions successfully looks up an explicitly approved project release for that exact Minecraft version on Modrinth. Velocity looks up the Velocity loader. If a public release cannot be found, the entire latest-version row is omitted. Removed/disabled plugin warnings remain unchanged. The `Newer compatible release listed` label is a listing based on publisher-supplied Modrinth compatibility and a numeric version comparison; always review release notes before installing.

## Turn on latest-version lookups

GitHub → repository → Actions → `Check compatible plugin releases` → `Run workflow`. The scheduled workflow also runs daily at 09:23 UTC. When it finishes, check `docs/assets/wiki-sync/latest.json` for matched records; the release-check workflow directly builds and deploys Pages when the snapshot changes (a commit made with `GITHUB_TOKEN` does not trigger a separate Pages workflow). The initial `latest.json` is intentionally empty: no fictional versions are shown before the first check.

The approved `wiki-sync/release-sources.json` starts with CoreProtect, GriefPrevention, LuckPerms, ViaVersion and Geyser. To add another **verified matching** Modrinth project, add its exact project slug and `server` / `loader`. Never automatically search by a plugin name or map custom ERRSA plugins to an unverified project. For plugins that have no matching public source, nothing extra is displayed.

Only GitHub Actions calls Modrinth. Neither the Minecraft servers nor the GitHub Pages browser makes release API requests. This adds **no Render resources**. Minecraft plugin JARs and credentials are unchanged; **no Minecraft restart** required.

If a workflow push is denied, check repository Settings → Actions → General → Workflow permissions → Read and write permissions; some org policies may override this. The workflow uses its GitHub Actions token, **not the Minecraft PAT**. If the repo contains a different Pages workflow, keep it; do not replace it with the old deploy.yml from an earlier ZIP.
