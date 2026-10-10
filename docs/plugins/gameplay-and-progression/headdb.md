# HeadDB

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="HeadDB" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="HeadDB" data-server="survival" aria-live="polite"></div>

## What Is HeadDB?

HeadDB provides a searchable library of decorative Minecraft heads that can be browsed and used in builds or other server features.

## ERRSA's Use

ERRSA uses HeadDB as a decorative and building resource. Staff permissions determine access to any administrative functionality beyond normal player use.


## Required By

- [VIPBridge](../server-and-infrastructure/vipbridge.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="HeadDB" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Database updater | Enabled | Refresh the local head database automatically |
    | Update interval | `24 h` | Check for database/plugin updates daily |
    | Preload all heads | Disabled | Avoid large startup memory/time cost |
    | Remember last page | Enabled | Return players to their prior menu page |
    | Maximum bulk purchase | `2304` heads | Cap one purchase operation |
    | Economy provider | `NONE` | HeadDB itself is not charging through Vault |
    | Indexing | Enabled by ID, texture, category, and tags | Improve lookup/search performance |
    | Player-data save interval | `1800 s` | Persist HeadDB player data periodically |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="HeadDB" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/hdb){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://wiki.headsdb.com/){ .md-button .md-button--primary }
