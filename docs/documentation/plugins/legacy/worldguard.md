!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# WorldGuard

## Purpose

**Category:** `Protection`  

WorldGuard protects regions from griefing and controls player interactions (building, PvP, explosions, etc.) within defined areas on ERRSA MC.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper
- **Plugins:**
  - `WorldEdit`


---

## Permissions Model

### Dev commands
- `//wand` — select region (via FAWE)
- `/rg define <name>` — create region
- `/rg flag <region> <flag> <value>` — set region behavior
- `/rg addmember <region> <player>` — grant access
- `/rg remove <region>` — delete region

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/WorldGuard/config.yml`
- `plugins/WorldGuard/worlds/` (region data per world)
- `plugins/WorldGuard/cache/`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `op-permissions: true` — OPs automatically bypass protection  
- `build-permission-nodes.enable: false` — no permission-based building, region-only  
- `max-region-count-per-player.default: 7` — limits region claims  
- `max-claim-volume: 30000` — caps region size  
- `nether-portal-protection: true` — prevents portal abuse  
- `block-plugin-spawning: true` — prevents unintended mob spawning  

This section documents **intentional deviations from plugin defaults**.

---


_Last verified: 2026-03-20_  
_Server version: 1.21.4_
