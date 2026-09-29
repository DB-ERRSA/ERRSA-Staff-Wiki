!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# MiniMOTD

## Purpose

**Category:** `Infrastructure`  

MiniMOTD controls the server list display shown in the Minecraft multiplayer menu, including the MOTD text, server icon, and displayed max player count for ERRSA MC.
---

## Configuration Files

!!! info "Primary config locations"
- `plugins/MiniMOTD/main.conf`
- `plugins/MiniMOTD/icons/` (if applicable)
- `plugins/MiniMOTD/extra-configs/` (if applicable)

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `icon-enabled: true` — server list icon is enabled  
- `motd-enabled: true` — custom MOTD is enabled  
- `max-players: 500` — displayed max player count is set to 500  
- `max-players-enabled: true` — custom max player count override is active  
- `fake-players-enabled: false` — player count is not artificially inflated  
- `disable-player-list-hover: false` — player hover list remains visible  
- `hide-player-count: false` — player count is shown normally  
- `update-checker: true` — plugin checks GitHub for updates at launch  

This section documents **intentional deviations from plugin defaults**.

---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
