# FastAsyncVoxelSniper

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncVoxelSniper" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncVoxelSniper" data-server="survival" aria-live="polite"></div>

## What Is FastAsyncVoxelSniper?

FastAsyncVoxelSniper is a high-performance brush-based terrain editing tool built for large-scale world shaping.

## ERRSA's Use

ERRSA uses it for advanced terrain design and development work where brush-based editing is faster than normal block-by-block building.


## Dependencies

- [FastAsyncWorldEdit](fastasyncworldedit.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncVoxelSniper" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |----------------|-------------|---------|
    | Session persistence | Enabled | Preserve brush settings between sessions |
    | Default brush size | `3` | Keep the starting brush conservative |
    | LiteSniper max brush size | `7` | Restrict lighter-use brush size |
    | Brush warning threshold | `100` | Warn before very large edits |
    | Copy/Paste block limit | `10,000` | Limit extremely large copy operations |
    | Large-edit safety caps | `5,000,000` blocks | Prevent unbounded destructive edits |
    | Restricted materials | `barrier`, `bedrock` | Reduce accidental edits to critical blocks |

    !!! warning "High-impact tool"
        Large brushes can modify huge areas quickly. Test unfamiliar brushes in a safe area first.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="FastAsyncVoxelSniper" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/fastasyncvoxelsniper){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://intellectualsites.gitbook.io/fastasyncvoxelsniper){ .md-button .md-button--primary }
