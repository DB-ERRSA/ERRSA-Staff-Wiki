# PlayerInitialization

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="PlayerInitialization" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="PlayerInitialization" data-server="survival" aria-live="polite"></div>

## What Is PlayerInitialization?

PlayerInitialization is a custom ERRSA plugin that handles the server-side player initialization workflow.

## ERRSA's Use

ERRSA uses it to support player initialization and ERAU-affiliation verification before players are fully integrated into the server. It also participates in the Power Automate workflow used by that process.


## Dependencies

- [LuckPerms](../permissions-and-moderation/luckperms.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="PlayerInitialization" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Track | `main` | Initialize players for the main progression track |
    | Discord invite | Configured | Direct new players to the ERRSA Discord |
    | Database | MySQL — credentials omitted | Persist initialization/verification state |
    | Initialization world | `PlayerInit` | Place new players in the controlled initialization world |
    | Spawn | `0.5, 0, 0.5`, yaw `90°` | Use the configured PlayerInit arrival location |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        Database credentials are production secrets and are intentionally excluded from the wiki.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="PlayerInitialization" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
