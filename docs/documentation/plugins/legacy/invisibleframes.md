!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# InvisibleFrames

## Purpose

   **Category:** `Cosmetics`  

   Allows players to toggle item frames between visible and invisible using a simple in-game interaction.  
   On ERRSA MC, this is used as a small quality-of-life feature for decorating builds without requiring admin intervention.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot

---


## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Player permissions
- `invisibleframes.toggleframes` — allows the player to shift-right-click an item frame to toggle it visible/invisible



---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

This plugin does **not** provide normal player/admin commands for ERRSA workflows.  
Its functionality is interaction-based.

### Player actions
- **Shift + Right Click item frame** — toggles the frame between visible and invisible


---

## Configuration Files

!!! info "Primary config locations"
- `plugins/InvisibleFrames/config.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `lock-frame: true` — invisible item frames are locked while hidden so they cannot be easily broken or knocked off by accident
- `toggle-empty: false` — prevents players from creating random invisible empty frames around the server
- `blacklisted-items: []` — no item blacklist is currently configured
- `Permission granted:` `invisibleframes.toggleframes` — assigned to the `user` group so normal players can use the feature for building/decorating



---

_Last verified: 2026-03-10_  
_Server version: 1.21.4_
