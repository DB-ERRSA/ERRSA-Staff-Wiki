!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# WildernessTP (Wild)

## Purpose

   **Category:** `Gameplay`  

   WildernessTP allows players to teleport to a random safe location in the survival world using the `/wild` command.  
   On ERRSA MC this is used to distribute players across the map to encourage exploration and reduce spawn-area congestion.

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
- `wildernesstp.command.wild` — allows players to teleport to a random wilderness location
- `wildernesstp.sign.use` — allows players to use `[Wild]` teleport signs

### Admin permissions
- `wildernesstp.bypass.limit` — bypass usage limits
- `wildernesstp.command.create` — create wilderness portals
- `wildernesstp.command.destroy` — remove wilderness portals
- `wildernesstp.command.reload` — reload plugin configuration
- `wildernesstp.command.setup` — run plugin setup commands
- `wildernesstp.sign.create` — create wilderness teleport signs

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- `/wild` — teleports the player to a random safe location in the survival world

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Wild/config.yml`
- `plugins/Wild/Portals.yml`
- `plugins/Wild/Users.yml`
- `plugins/Wild/lang/`


---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `language: english` — server messages use English
- `blacklisted-biomes: [OCEAN]` — players will not be teleported into oceans
- `distance: 20` — safety check radius used to verify teleport location
- `retry_limit: 10` — plugin attempts up to 10 times to find a safe location
- `delay: 5` — teleport delay before execution
- `TeleportNewbies: false` — new players are not automatically teleported
- `cooldown: 10` — players must wait 10 seconds between uses
- `limit_usage: false` — no per-player usage limit is enforced
- `teleport_on_respawn: false` — players are not auto-teleported after death
- `doCountdown: true` — teleport countdown is enabled
- `regions.world.minX: -2500`
- `regions.world.maxX: 2500`
- `regions.world.minZ: -2500`
- `regions.world.maxZ: 2500`

This restricts wilderness teleports to a **5000×5000 block square centered around spawn**, keeping players within the server’s active exploration area.

This section documents **intentional deviations from plugin defaults**.

---

_Last verified: 2026-03-10_  
_Server version: 1.21.4_
