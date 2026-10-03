!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Maintenance

## Purpose

**Category:** `Infrastructure`  

Maintenance mode plugin used to temporarily lock the server, display a maintenance MOTD, and restrict access to approved staff during updates or downtime on ERRSA MC.

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.


### Mod permissions
- `maintenance.bypass` — allows joining during maintenance

### Admin permissions
- `maintenance.admin` — full maintenance control

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Admin commands
- `/maintenance on` — enable maintenance mode  
- `/maintenance off` — disable maintenance mode  
- `/maintenance add <player>` — whitelist player  
- `/maintenance remove <player>` — remove whitelist  

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Maintenance/config.yml`
- `plugins/Maintenance/whitelistedPlayers.yml`
- `plugins/Maintenance/maintenance-icon.png`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `maintenance-enabled: false` — server normally open :contentReference
- `custom-maintenance-icon: true` — uses custom ERRSA icon during maintenance 
- `kick-online-players: true` — clears server when maintenance starts :contentReference
- `send-join-notification: true` — alerts staff when players attempt to join :contentReference
- `player-count-message.enabled: true` — shows “Maintenance” instead of player count :contentReference
- `fake-players-enabled: false` — no fake player counts used  

### Whitelist Behavior
- Players can be manually added via command or file  
- Format:  
  `UUID: username` 

This section documents **intentional deviations from plugin defaults**.  

---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
