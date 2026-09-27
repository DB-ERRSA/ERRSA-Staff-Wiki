!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Multiverse-Core

## Purpose

**Category:** `Infrastructure`

Multiverse-Core manages multiple worlds on ERRSA MC, including world loading, world-specific gameplay rules, respawn behavior, teleport handling, and per-world environment settings. On ERRSA MC, it is used to maintain the main survival worlds as well as controlled-purpose worlds like `Lobby`, `PlayerInit`, and `LegacyLake`. 

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `Multiverse-Core`


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.


### Dev permissions
- Multiverse-Core access is restricted to **dev/trusted infrastructure staff only**

!!! warning
    World creation, import, teleport routing, and respawn configuration can affect the entire server.  
    Treat Multiverse-Core as a restricted infrastructure tool.

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Dev commands
- `/mv list` — list imported worlds
- `/mv info <world>` — inspect a world's Multiverse settings
- `/mv tp <world>` — teleport to a world
- `/mv spawn <world>` — teleport to a world spawn
- `/mv import <world>` — import an existing world
- `/mv create <world>` — create a world
- `/mv delete <world>` — remove a world from Multiverse / delete world if intended
- `/mv modify set <property> <value> <world>` — change world properties
- `/mv reload` — reload Multiverse config

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Multiverse-Core/config.yml`
- `plugins/Multiverse-Core/worlds.yml`
- `plugins/Multiverse-Core/anchors.yml`

### File roles
- `config.yml` — global Multiverse behavior, teleport rules, respawn handling, command safeguards
- `worlds.yml` — per-world settings such as gamemode, difficulty, PvP, spawn flags, and respawn behavior
- `anchors.yml` — saved anchors; currently empty on ERRSA MC

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

### Global world behavior
- `auto-import-default-worlds: true`
- `auto-import-3rd-party-worlds: true`
- `enforce-access: false`
- `enforce-gamemode: true`
- `enforce-flight: true`
- `auto-purge-entities: false` 

### Teleport behavior
- `use-finer-teleport-permissions: true`
- `teleport-intercept: true`
- `passenger-mode: default`
- `concurrent-teleport-limit: 50`
- safe-location search radius:
  - horizontal: `3`
  - vertical: `3` 

### Spawn / respawn behavior
- `first-spawn-override: false`
- `enable-join-destination: false`
- `default-respawn-in-overworld: true`
- `default-respawn-within-same-world: true`
- `enforce-respawn-at-world-spawn: true` 

### Portal and messaging behavior
- `use-custom-portal-search: false`
- `enable-chat-prefix: false`
- `register-papi-hook: true`
- `default-locale: en`
- `per-player-locale: true`

### Command safety
- `resolve-alias-name: true`
- `confirm-mode: enable`
- `use-confirm-otp: true`
- `confirm-timeout: 30`
- `show-legacy-aliases: false` 

### Event priorities / debug
- `player-portal: high`
- `player-respawn: low`
- `player-spawn-location: normal`
- `player-teleport: highest`
- `global-debug: 0`
- `debug-permissions: false`
- `silent-start: false` 
---

## Imported Worlds on ERRSA MC

### Main survival stack
- `world` — survival, hard difficulty, PvP enabled, hunger enabled, spawn memory kept, portals allowed
- `world_nether` — survival nether, hard difficulty, PvP enabled, scale `8.0`
- `world_the_end` — survival end, hard difficulty, PvP enabled, scale `16.0` 

### Controlled / custom worlds
- `Lobby` — adventure mode, PvP off, monsters/animals/misc spawning disabled, weather allowed, keep spawn in memory enabled
- `PlayerInit` — adventure mode, peaceful, hunger off, PvP off, respawn-world set to `PlayerInit`
- `LegacyLake` — adventure mode, peaceful, hunger off, PvP off, weather off, keep spawn in memory disabled 

### Anchors
- `anchors.yml` is currently empty: `anchors: {}`.

---

## ERRSA Design Intent

!!! note "Why these settings exist"

- Multiverse is being used as a **world governance layer**, not as a general player utility plugin
- Main worlds preserve normal survival gameplay
- Purpose-built worlds like `Lobby`, `PlayerInit`, and `LegacyLake` are locked down with adventure mode, low/no hostile pressure, and reduced survival mechanics
- Join-spawn override is disabled globally, so Multiverse is not forcing all login routing by itself
- Respawn logic is conservative and world-aware, with overworld fallback enabled and respawn-at-world-spawn enforced globally unless world properties override it 

---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_

