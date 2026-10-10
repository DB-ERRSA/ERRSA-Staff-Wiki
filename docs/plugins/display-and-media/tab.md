# TAB

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="TAB" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="TAB" data-server="survival" aria-live="polite"></div>

## What Is TAB?

TAB manages the player tab list, nametags, rank formatting, sorting, headers, footers, and related display features.

## ERRSA's Use

ERRSA uses TAB to present player ranks and server information consistently. It integrates with LuckPerms and PlaceholderAPI so displayed information follows the server's live permission and placeholder data.


## Dependencies

- [PlaceholderAPI](../server-and-infrastructure/placeholderapi.md)


## Required By

- [Guilds](../gameplay-and-progression/guilds.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="TAB" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |----------------|-------------|---------|
    | Prefix/suffix source | LuckPerms | Keep player rank formatting synchronized with permissions |
    | Header/footer | ERRSA branded | Display server/community information in the tab list |
    | Group sorting | Custom staff/player priority | Keep higher staff roles and configured groups ordered consistently |
    | Scoreboard teams / nametags | Enabled | Control nametag formatting and collision behavior |
    | Player-list objective | Enabled | Display ping information |
    | Scoreboard | Disabled | TAB is not used for the sidebar scoreboard |
    | Bossbar | Disabled | TAB is not used for persistent bossbar content |
    | Layout system | Disabled | Use the normal player list rather than a custom layout |

    !!! info "Dependencies"
        ERRSA's TAB presentation relies on LuckPerms and PlaceholderAPI for dynamic rank and server information.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="TAB" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/tab-was-taken){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/NEZNAMY/TAB/wiki){ .md-button .md-button--primary }
