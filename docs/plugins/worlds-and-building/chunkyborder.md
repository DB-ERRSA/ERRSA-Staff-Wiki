# ChunkyBorder

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="ChunkyBorder" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="ChunkyBorder" data-server="survival" aria-live="polite"></div>

## What Is ChunkyBorder?

ChunkyBorder adds persistent world boundaries that work alongside Chunky-generated regions.

## ERRSA's Use

ERRSA uses ChunkyBorder to keep players inside defined world limits. The main survival worlds use large borders, while controlled-purpose worlds use smaller boundaries to prevent unintended exploration and chunk generation.


## Dependencies

- [Chunky](chunky.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="ChunkyBorder" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Survival / Nether / End radius | `10,000` blocks | Bound the main survival dimensions |
    | PlayerInit radius | `500` blocks | Contain the initialization world |
    | LegacyLake radius | `500` blocks | Contain the legacy tribute world |
    | PlotWorld radius | `796` blocks | Match the configured creative plot-world footprint |
    | Border center | `0, 0` | Keep all configured borders centered on origin |
    | Shape / wrap | `square` / `none` | Use hard square borders without wraparound |
    | Teleport bypass protection | Ender pearl + chorus fruit blocked | Prevent common teleport methods from crossing the border |
    | Mob spawns at border | Prevented | Avoid border-edge mob spawning issues |
    | Visualizer | Enabled; range `8` | Show approaching players the configured world edge |
    | Dynmap border layer | Enabled | Publish the border to Dynmap |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="ChunkyBorder" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/chunkyborder){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/pop4959/ChunkyBorder/wiki){ .md-button .md-button--primary }
