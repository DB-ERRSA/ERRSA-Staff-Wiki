!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# [Armor Stand Tools](https://www.spigotmc.org/resources/armor-stand-tools.2237/)

## Purpose

   **Category:** `Gameplay` 

   Armor Stand Tools (AST) gives trusted staff a safe, in-game GUI/toolset to pose, customize, and manage armor stands for builds, displays, and lobby setpieces—without needing summon commands or NBT editing.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot 
- **Plugins:** _(none required)_

  - `WorldGuard` - optional


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Player permissions
- `astools.use` — allows access to standard AST GUI


---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player controls
- `SHIFT + RIGHT CLICK` — opens AST GUI



---

## Configuration Files

!!! info "Primary config locations"
- `plugins/ArmorStandTools/config.yml`
- `plugins/ArmorStandTools/language.yml`



---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `integrateWithWorldGuard`: `true` — Forces AST to respect regions; prevents tampering in protected builds


This section documents **intentional deviations from plugin defaults**.

---

## Common Issues & Fixes

_None reported or witnessed_


---

_Last verified: 2026-02-13_  
_Server version: 1.21.4_
