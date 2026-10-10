# PlotSquared

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="PlotSquared" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="PlotSquared" data-server="survival" aria-live="polite"></div>

## What Is PlotSquared?

PlotSquared is a plot-management plugin for creating and managing protected player or builder plots.

## ERRSA's Use

ERRSA has PlotSquared installed as part of the worlds-and-building toolset. A verified ERRSA-specific production workflow has not yet been documented, so treat the live server configuration as the authority before using or changing it.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="PlotSquared" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Debug logging | Enabled | Keep detailed PlotSquared diagnostics available |
    | High-frequency listener | Enabled | Process relevant high-frequency events |
    | Redstone in unoccupied plots | Disabled | Reduce unnecessary redstone activity |
    | Redstone in offline-owned plots | Disabled | Reduce background redstone activity |
    | WorldEdit restrictions | Enabled | Keep edits within PlotSquared permission/plot boundaries |
    | Economy component | Disabled | Do not use PlotSquared economy features |
    | Plot expiry | Disabled | Do not automatically expire plots |
    | External placeholders | Enabled | Expose PlotSquared data to placeholder integrations |
    | Default locale | `en` | Use English plugin messages |
    | Auto-clear threshold | `-1` | Keep automatic plot clearing effectively disabled |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        Plot world definitions and per-world plot settings are stored separately from the main `settings.yml`; review those files before changing plot geometry or ownership behavior.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="PlotSquared" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://www.spigotmc.org/resources/plotsquared-v7.77506/){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://intellectualsites.gitbook.io/plotsquared){ .md-button .md-button--primary }
