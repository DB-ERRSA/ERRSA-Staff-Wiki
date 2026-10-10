# Chunky

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Chunky" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Chunky" data-server="survival" aria-live="polite"></div>

## What Is Chunky?

Chunky is a performance utility plugin used to pre-generate world chunks, reducing server lag spikes caused by players exploring new terrain.

## ERRSA's Use

ERRSA currently does not use the functionality of Chunky directly, but it is a required dependency for [Chunky Border](chunkyborder.md "Click here to learn more about the plugin!").


## Required By

- [ChunkyBorder](chunkyborder.md)

---

??? note "Common Commands"

    Commands, permission links, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Chunky" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | `continue-on-restart` | `false` | Do not automatically resume an interrupted pregeneration job after restart |
    | `force-load-existing-chunks` | `false` | Avoid force-loading already-generated chunks during pregeneration |
    | `silent` | `false` | Keep normal Chunky progress/output visible |
    | `update-interval` | `1` | Use the configured progress update interval |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Chunky" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/chunky){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/pop4959/Chunky/wiki){ .md-button .md-button--primary }
