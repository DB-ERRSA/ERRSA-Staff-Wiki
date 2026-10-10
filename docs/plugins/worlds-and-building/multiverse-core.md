# Multiverse-Core

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Core" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Core" data-server="survival" aria-live="polite"></div>

## What Is Multiverse-Core?

Multiverse-Core manages multiple Minecraft worlds and their world-specific properties, loading, teleportation, and respawn behavior.

## ERRSA's Use

ERRSA uses it as the world-management layer for the main survival worlds and controlled-purpose worlds such as `Lobby`, `PlayerInit`, and `LegacyLake`.


## Required By

- [Multiverse-Inventories](multiverse-inventories.md)
- [Multiverse-Portals](multiverse-portals.md)
- perworldinventory

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Core" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |----------------|-------------|---------|
    | Auto-import default / third-party worlds | Enabled | Keep managed worlds available automatically |
    | Enforce gamemode | Enabled | Apply each world's intended gameplay mode |
    | Enforce flight | Enabled | Keep flight state consistent across worlds |
    | Fine teleport permissions | Enabled | Allow tighter control of world teleport access |
    | Teleport intercept | Enabled | Keep Multiverse aware of teleport routing |
    | Concurrent teleport limit | `50` | Limit simultaneous teleport work |
    | Default respawn in overworld | Enabled | Provide a safe fallback |
    | Respawn within same world | Enabled | Keep world-aware respawn behavior |
    | Respawn at world spawn | Enforced | Keep controlled worlds predictable |
    | Command confirmation | Enabled with OTP | Add protection around destructive actions |

    !!! info "Managed worlds"
        ERRSA uses Multiverse for both normal survival worlds and controlled-purpose worlds. Verify a world's live properties before changing its gamemode, difficulty, spawn, PvP, or respawn behavior.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Multiverse-Core" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/multiverse-core){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://mvplugins.org/core/){ .md-button .md-button--primary }
