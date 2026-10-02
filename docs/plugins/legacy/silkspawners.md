!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# SilkSpawners V2

## Purpose

   **Category:** `Gameplay`  

   SilkSpawners allows mob spawners to be broken and picked up, then placed again later as items.  
   On ERRSA MC, this gives players controlled access to moving spawners while keeping configuration and administrative spawner editing restricted to staff.

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
- `silkspawners.break.*` — allows players to break supported spawners
- `silkspawners.place.*` — allows players to place supported spawner items

### Admin permissions
- `silkspawners.command.give.*` — allows admins to give spawners by command
- `silkspawners.command.set.*` — allows admins to set / convert spawner types by command
- `silkspawners.command.give` — base give command access
- `silkspawners.command.set` — base set command access
- `silkspawners.command.locale` — allows locale-related command usage
- `silkspawners.command.version` — allows version / plugin info command usage

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Admin commands
- `/silkspawners give <player> <mob> [amount]` — gives a player a spawner item
- `/silkspawners set <mob>` — changes the targeted spawner to a specified mob type
- `/silkspawners version` — shows plugin version info
- `/silkspawners locale` — locale / language command access

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/SilkSpawners/config.yml`
- `plugins/SilkSpawners/locale/`
- `plugins/SilkSpawners/locale/messages_en.properties`
- `plugins/SilkSpawners/locale/messages_de.properties`
- `plugins/SilkSpawners/locale/messages_id.properties`
- `plugins/SilkSpawners/locale/messages_tr.properties`


---

## ERRSA Defaults & Settings

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `messages.locale: en` — ERRSA uses English as the active plugin language
- `spawner.dropChance: 100` — spawners always drop when valid break conditions are met
- `spawner.destroyable: true` — spawners can be broken
- `spawner.pickaxeRequired: true` — players must use a pickaxe to break spawners properly
- `spawner.silktouchRequired: true` — Silk Touch is required to obtain the spawner item
- `spawner.item.name: $dSpawner` — dropped spawner items use the configured custom display name
- `spawner.explosion.normal: 0` — normal explosions do not drop spawners
- `spawner.explosion.silktouch: 0` — Silk Touch does not change explosion behavior; explosions do not yield spawners
- `spawner.message.denyDestroy: true` — players receive feedback if breaking is denied
- `spawner.message.denyPlace: true` — players receive feedback if placing is denied
- `spawner.message.denyChange: true` — players receive feedback if spawner type change is denied
- `spawner.permission.disableDestroy: false` — permissions are allowed to control destruction access
- `spawner.permission.disablePlace: false` — permissions are allowed to control placement access
- `spawner.permission.disableChange: false` — permissions are allowed to control spawner changing access
- `update.check.enabled: true` — update checks are enabled
- `update.check.interval: 24` — plugin checks for updates every 24 hours
- `silkspawners.break.*` granted to `user` group — all normal users may break supported spawners if tool requirements are met
- `silkspawners.place.*` granted to `user` group — all normal users may place supported spawner items
- Command permissions restricted to `admin` group — administrative spawning and spawner editing remain staff-only

This section documents **intentional deviations from plugin defaults**.



---

_Last verified: 2026-03-10_  
_Server version: 1.21.4_
