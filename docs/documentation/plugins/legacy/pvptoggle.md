!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# PvPToggle

## Purpose

**Category:** `Gameplay`  

PvPToggle allows players to manually enable or disable PvP, preventing unwanted combat while still allowing opt-in PvP gameplay.

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
This plugin follows the **parallel permission track model**.  
Access is granted by role, not convenience.

### Player permissions
- `pvptoggle.pvp` — toggle personal PvP on/off  
- `pvptoggle.pvpstatus` — check PvP status  



### Admin permissions
- `pvptoggle.pvp.others` — toggle PvP for other players  
- `pvptoggle.reload` — reload plugin config  



---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- `/pvp` — toggle PvP on/off  
- `/pvpstatus` — view PvP state  


### Admin commands
- `/pvp <player>` — toggle PvP for another player  
- `/pvptoggle reload` — reload config  



---

## Configuration Files

!!! info "Primary config locations"
- `plugins/PvPToggle/config.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `default-pvp`: `false` — players are **protected by default**  

- `cooldown`: `120` seconds — prevents rapid PvP toggling 

- `anti-abuse`: `true` — players cannot disable PvP during combat

- `protect-pets`: `true` — prevents killing pets of protected players

- `friendly-fire`: `false` — prevents players from hitting their own entities 
- `hit-self`: `true` — allows self-damage interactions (non-combat use cases) 

- `particles`: `true` — visual feedback when hits are blocked 

- `feedback`: `true` — players are notified when PvP is blocked 

- `death-status-reset`: `false` — PvP state persists through death 

- `prefix`: `"§4PvP »"` — consistent messaging branding

- `enabled/disabled states`:
  - Enabled = `"§cVulnerable"`  
  - Disabled = `"§aProtected"` 


---

_Last verified: 2026-02-13_  
_Server version: 1.21.4_
