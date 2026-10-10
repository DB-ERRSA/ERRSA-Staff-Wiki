# Multiverse-Inventories

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Inventories" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Inventories" data-server="survival" aria-live="polite"></div>

## What Is Multiverse-Inventories?

Multiverse-Inventories separates or shares player inventory data between worlds and configured world groups.

## ERRSA's Use

ERRSA keeps it available for world-specific inventory control where separate gameplay spaces should not automatically share player items, armor, experience, or related state.


## Dependencies

- [Multiverse-Core](multiverse-core.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Inventories" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Gamemode share handling | Disabled | Do not automatically split/share inventory solely by gamemode |
    | Ungrouped worlds | Not shared by default | Avoid accidental inventory sharing for worlds outside groups |
    | Optional shares | Enabled for ungrouped worlds | Allow configured optional data sharing |
    | Bed/anchor validation | Enabled | Validate respawn locations when profiles move between worlds |
    | Last location on death | Not reset | Preserve configured last-location behavior |
    | Apply last location to teleports | Enabled | Use stored location data across relevant teleports |
    | Player profile cache | `6000`, expiry `60` | Reduce repeated profile disk access |
    | PAPI hook | Enabled | Expose supported Multiverse-Inventories placeholders |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        Inventory group membership itself is stored separately from this main config; verify live groups before changing world-sharing behavior.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Inventories" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/multiverse-inventories){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://mvplugins.org/inventories/){ .md-button .md-button--primary }
