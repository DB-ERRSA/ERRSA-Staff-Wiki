!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# SkBee

## Purpose

**Category:** `Infrastructure`

SkBee is a Skript add-on that extends Skript with modern Paper-compatible features, advanced events, NBT handling, particles, scoreboards, bounds, text components, and many other utilities. On ERRSA MC, it is currently important because it provides the **bound/region-style event support** used by custom Skript systems such as portal detection and teleport workflows.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `Skript`

!!! note
    SkBee is an **addon to Skript**, not a standalone scripting platform.  
    If Skript fails to load, SkBee-based scripts and features will also fail.


---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Dev commands
- `/skript reload <script>` — reload scripts that use SkBee syntax/effects/events
- `/skript reload all` — reload all scripts after SkBee-related edits

!!! note
    SkBee functionality on ERRSA MC is primarily used through **Skript code**, not through direct player/admin commands.

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/SkBee/config.yml`

SkBee behavior is also functionally tied to any Skript files that use its features, such as:

- `plugins/Skript/scripts/Custom_Portal.sk`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `debug: false` — verbose debugging is disabled in production
- `update-checker.enabled: true` — update checks remain enabled
- `update-checker.async: false` — update checks run synchronously
- `use-paper-schedulers: false` — left disabled
- `fastboard-reverse-lines: false` — standard scoreboard line order retained
- `allow-unsafe-nbt-operations: false` — intentionally disabled for safety/stability

### Enabled feature modules
- `advancement: true`
- `boss-bar: true`
- `bound: true`
- `chunk-generator: true`
- `damage-source: true`
- `display-entity: true`
- `fastboard: true`
- `fishing: true`
- `game-event: true`
- `item-component: true`
- `nbt: true`
- `particle: true`
- `property: true`
- `raytrace: true`
- `recipe: true`
- `scoreboard: true`
- `statistic: true`
- `structure: true`
- `switch-case: true`
- `text-component: true`
- `tick-manager: true`
- `villager: true`
- `world-border: true`
- `world-creator: true`
- `auto-load-custom-worlds: true`

### Disabled feature modules
- `virtual-furnace: false` — intentionally disabled, likely because it is semi-experimental and not needed on ERRSA MC

### Bound event listeners enabled
These are especially important because they support region/bound entry-exit logic for custom scripts:
- `player-move: true`
- `player-teleport: true`
- `player-respawn: true`
- `player-bed-enter: true`
- `player-bed-leave: true`
- `entity-mount: true`
- `entity-dismount: true`
- `vehicle-enter: true`
- `vehicle-exit: true`
- `vehicle-move: true`
- `vehicle-destroy: true`

### NBT cleanup listeners enabled
- `block-break: true`
- `piston-extend: true`
- `entity-change-block: true`
- `block-explode: true`
- `entity-explode: true`

### Runtime settings
- `disable-errors: false` — runtime errors remain visible
- `disable-warnings: false` — runtime warnings remain visible

### Special
- `on-the-flip-side: true`

This section documents **intentional deviations from plugin defaults**.

---

## ERRSA MC Role in Current Systems

!!! note "How ERRSA MC currently uses SkBee"
    SkBee is currently important because it provides the **bound event support** used by custom Skript systems.

### Current known usage
- Custom portal/teleport detection
- Region or bound-based movement triggers
- Particle-related Skript effects
- Compatibility layer for modern Skript features on current server versions

### Practical dependency
The `Custom_Portal.sk` workflow depends on SkBee-style bound/region event support such as:
- entering a bound/region
- leaving a bound/region
- movement-triggered checks
- teleport-triggered checks

If bound support stops working, the custom portal network will likely fail even if the Skript file itself still loads.

---


## Notes for ERRSA MC Maintainers

!!! warning "Important maintenance note"
    SkBee expands Skript significantly, but that also means more syntax/features can break after version changes.  
    Treat SkBee updates carefully on a production server.

### Current operational importance
- SkBee is not just “nice to have” on ERRSA MC
- It is part of the infrastructure supporting:

  - scripted portals
  - bound/region triggers
  - modern Skript syntax/features

### Recommended maintenance practice
- Avoid changing SkBee config in production without documenting why
- Test portal and region scripts after:
  - SkBee updates
  - Skript updates
  - Paper updates
- Keep `allow-unsafe-nbt-operations` disabled unless there is a very specific reason to change it

### Recommended documentation note
If you keep a separate page for `Custom_Portal.sk`, explicitly note that it depends on:

- `Skript`
- `SkBee`
- active bound event listeners

---


_Last verified: 2026-03-20_  
