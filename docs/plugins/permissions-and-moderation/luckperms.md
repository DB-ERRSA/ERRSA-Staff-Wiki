# LuckPerms

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="LuckPerms" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="LuckPerms" data-server="survival" aria-live="polite"></div>

## What Is LuckPerms?

LuckPerms is the permission-management system that controls which players and staff groups can use plugin features and commands.

## ERRSA's Use

ERRSA uses LuckPerms as the central source of staff and player permission assignments. The Staff Wiki also uses LuckPerms data from Wiki Sync to determine live role access on plugin pages.


## Required By

- [PlayerInitialization](../server-and-infrastructure/playerinitialization.md)
- [Guilds](../gameplay-and-progression/guilds.md)
- [VIPBridge](../server-and-infrastructure/vipbridge.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="LuckPerms" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Server context | `main` | Use the production server-specific permission context |
    | Storage | MySQL — credentials omitted | Store permission data in the shared database |
    | Messaging service | `auto` | Automatically choose the available cross-instance messaging transport |
    | Sync interval | `-1` | Rely on messaging rather than scheduled polling |
    | Auto-push updates | Enabled | Propagate permission changes to connected instances |
    | Primary group calculation | `parents-by-weight` | Determine primary group from weighted inheritance |
    | Wildcards | Enabled | Support wildcard nodes used by staff roles |
    | Bukkit OP support | Enabled | Keep Bukkit operator permissions available |
    | Auto-OP | Disabled | Do not automatically tie operator status to LuckPerms |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        Database credentials are intentionally omitted. Permission changes can affect access across the server and should be reviewed for inheritance/context scope.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="LuckPerms" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/luckperms){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://luckperms.net/wiki/Home){ .md-button .md-button--primary }
