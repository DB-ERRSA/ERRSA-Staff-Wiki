!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# WorldGuard Extra Flags

## Purpose

**Category:** `Protection`  

WorldGuard Extra Flags extends WorldGuard by adding additional region flags for more advanced control over gameplay behavior within protected areas.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper
- **Plugins:**
  - `WorldGuard`
  - `WorldEdit`


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.


### Dev permissions
- `worldguard.*` — required to manage regions and apply extra flags

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Dev commands
- `/rg flag <region> <flag> <value>` — apply extra flags to regions

---

## Configuration Files

!!! info "Primary config locations"
- None — this plugin does not generate configuration files

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- No configuration — plugin operates entirely through WorldGuard flag system  
- Flags are applied per-region as needed  

This section documents **intentional deviations from plugin defaults**.


---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
