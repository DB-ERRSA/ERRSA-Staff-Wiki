!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Skript

## Purpose

**Category:** `Infrastructure`

Skript provides lightweight server-side automation and custom gameplay logic without requiring a compiled Java plugin. On ERRSA MC, it is currently used to run custom portal/teleport workflows, warp corrections, and other small scripted systems that would otherwise require a dedicated plugin.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `SkBee` (used for bound/region-style event support in current ERRSA MC scripts)
- **External services (if any):**
  - `None required for current ERRSA MC usage`

!!! note
    The current portal script depends on **region enter/leave events** working correctly.  
    If those events stop firing, the portal system will not function even if Skript itself is loaded.

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- `/warp TutorialDojo` — sets temporary portal lock handling for this specific warp
- `/warp TutorialDojoEntrance` — sets temporary portal lock handling for this specific warp

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Skript/config.sk`
- `plugins/Skript/features.sk`
- `plugins/Skript/variables.csv`
- `plugins/Skript/scripts/`
- `plugins/Skript/scripts/Custom_Portal.sk`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `language: english` — standard language setting for maintainability
- `check for new version: true` — update notices remain enabled for admin awareness
- `release channel: stable` — avoids prerelease builds on production
- `enable effect commands: false` — intentionally disabled for safety
- `allow ops to use effect commands: false` — prevents bypass through operator status
- `player variable fix: true` — helps avoid stale player object issues on reconnect
- `use player UUIDs in variable names: true` — improves long-term variable stability
- `verbosity: normal` — keeps logging readable without excessive spam
- `plugin priority: high` — improves compatibility with other protection/event plugins
- `listen to cancelled events by default: false` — preserves normal event behavior
- `case sensitive: false` — keeps parsing flexible
- `case-insensitive variables: true` — reduces naming mismatch issues
- `enable timings: false` — left disabled
- `script loader thread size: 0` — script loading stays synchronous for safety
- `variable changes until save: 1000` — default save batching retained
- `variables storage: CSV` — variables currently save to `plugins/Skript/variables.csv`
- `effect commands disabled` — intentional hardening decision because effect commands can be abused heavily

### Active ERRSA MC scripted systems
- **Portal cooldown variable:** `{portal_cooldown} = 1 second`
- **Portal lock tracking:** `{portal_lock::%player%}`
- **Portal readiness tracking:** `{player_ready::%player%}`
- **Custom teleport destinations:**
  - `{tp_tutorial_dojo}`
  - `{tp_tutorial_dojo_entrance}`
  - `{tp_legacy_lake_interior}`
  - `{tp_legacy_lake_exterior}`

### Portal script behavior
- Teleport regions are triggered through **region enter events**
- Leaving a portal region before completion cancels teleport
- Portal lock is used to prevent immediate re-trigger loops
- Warp commands for certain destinations set portal lock manually to avoid bad portal interaction after warping
- Teleport feedback includes:
  - sound effects
  - particles
  - delayed confirmation
  - optional player push for exit flow

This section documents **intentional deviations from plugin defaults**.


---


_Last verified: 2026-03-20_  

