!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# PerWorldInventory

## Purpose

**Category:** `Infrastructure`  

Separates player inventories, stats, and economy between worlds to prevent item transfer, duplication, and cross-world gameplay interference on ERRSA MC.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper
- **Plugins:**
  - `Vault` (for economy separation)


---


## Configuration Files

!!! info "Primary config locations"
- `plugins/PerWorldInventory/config.yml`
- `plugins/PerWorldInventory/worlds.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `separate-gamemode-inventories: true` — prevents cross-gamemode item transfer  
- `share-if-unconfigured: false` — ensures unlisted worlds do NOT share inventories  
- `player.economy: true` — separates balances per world group  
- `player.inventory: true` — full inventory isolation  
- `manage-gamemodes: false` — handled by Multiverse instead  

This section documents **intentional deviations from plugin defaults**.

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
