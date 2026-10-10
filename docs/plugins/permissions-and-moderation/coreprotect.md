# CoreProtect

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="CoreProtect" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="CoreProtect" data-server="survival" aria-live="polite"></div>

## What Is CoreProtect?

CoreProtect logs block changes, container activity, commands, sessions, and other player actions so staff can investigate incidents and restore changes when needed.

## ERRSA's Use

ERRSA uses CoreProtect for moderation investigations, grief/theft review, and targeted rollback or restoration of player and WorldEdit changes.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="CoreProtect" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting | ERRSA Value | Purpose |
    |---------|-------------|---------|
    | `use-mysql` | `false` | Uses the local SQLite database for CoreProtect logging. |
    | `default-radius` | `10` | Reduces the risk of accidentally broad lookups or rollbacks. |
    | `max-radius` | `100` | Limits very large operations that could create mistakes or lag. |
    | `rollback-items` | `true` | Allows container/item changes to be included in rollbacks. |
    | `rollback-entities` | `true` | Allows supported entity changes to be restored. |
    | `item-transactions` | `true` | Logs chest and other container interactions. |
    | `hopper-transactions` | `true` | Logs automated item movement through hoppers. |
    | `worldedit` | `true` | Logs WorldEdit changes for accountability and rollback. |
    | `player-messages` | `true` | Retains chat activity for moderation review when needed. |
    | `player-commands` | `true` | Logs player command activity. |
    | `player-sessions` | `true` | Tracks login/logout sessions for investigations. |

    !!! warning "Rollback scope"
        Verify the player, time window, radius, and action filters before running a rollback or restore. Broad CoreProtect actions can remove legitimate changes.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="CoreProtect" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/coreprotect){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://docs.coreprotect.net/){ .md-button .md-button--primary }
