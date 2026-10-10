# FastAsyncWorldEdit

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncWorldEdit" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncWorldEdit" data-server="survival" aria-live="polite"></div>

## What Is FastAsyncWorldEdit?

FastAsyncWorldEdit (FAWE) is the high-performance world-editing engine used for large selections, schematics, terrain changes, and undoable development work.

## ERRSA's Use

ERRSA uses FAWE for infrastructure, event-map, and large-scale build work where normal building tools would be too slow or impractical.


## Required By

- [FastAsyncVoxelSniper](fastasyncvoxelsniper.md)
- [WorldGuard](worldguard.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncWorldEdit" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |----------------|-------------|---------|
    | Region restrictions | Enabled | Keep edits compatible with protected regions |
    | Safe-range restriction | Enabled | Prevent edits outside safe world bounds |
    | Disk-backed clipboard | Enabled | Reduce memory pressure from large clipboards |
    | Clipboard cleanup | `1 day` | Remove stale clipboard data quickly |
    | Clipboard NBT persistence | Enabled | Preserve block/entity data in saved clipboards |
    | Async lighting | Enabled | Reduce lighting-related main-thread load |
    | Parallel threads | `6` | Provide controlled parallel edit processing |
    | Region-safe history | Enabled | Keep undo/redo behavior bounded to allowed regions |

    !!! warning "High-impact tool"
        FAWE can change very large areas quickly. Verify selections and preserve undo history before major production edits.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncWorldEdit" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/fastasyncworldedit){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://intellectualsites.gitbook.io/fastasyncworldedit){ .md-button .md-button--primary }
