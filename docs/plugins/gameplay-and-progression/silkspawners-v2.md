---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

## What Is SilkSpawners_v2?

SilkSpawners allows mob spawners to be broken and picked up, then placed again later as items. On ERRSA MC, this gives players controlled access to moving spawners while keeping configuration and administrative spawner editing restricted to staff.

## ERRSA's Use

ERRSA documents **SilkSpawners_v2** as part of the **Gameplay And Progression** plugin group on the Survival server.

---

??? note "Common Commands"

    | Command | Description | Who Can Use It |
    |---------|-------------|----------------|
    | `/silkspawners give <player> <mob> [amount]` | gives a player a spawner item | Admin |
    | `/silkspawners set <mob>` | changes the targeted spawner to a specified mob type | Admin |
    | `/silkspawners version` | shows plugin version info | Admin |
    | `/silkspawners locale` | locale / language command access | Admin |

---

??? note "Plugin Configuration"

    | ERRSA Setting | Purpose / Recorded Value |
    |---------------|--------------------------|
    | `messages.locale: en` | ERRSA uses English as the active plugin language |
    | `spawner.dropChance: 100` | spawners always drop when valid break conditions are met |
    | `spawner.destroyable: true` | spawners can be broken |
    | `spawner.pickaxeRequired: true` | players must use a pickaxe to break spawners properly |
    | `spawner.silktouchRequired: true` | Silk Touch is required to obtain the spawner item |
    | `spawner.item.name: $dSpawner` | dropped spawner items use the configured custom display name |
    | `spawner.explosion.normal: 0` | normal explosions do not drop spawners |
    | `spawner.explosion.silktouch: 0` | Silk Touch does not change explosion behavior; explosions do not yield spawners |
    | `spawner.message.denyDestroy: true` | players receive feedback if breaking is denied |
    | `spawner.message.denyPlace: true` | players receive feedback if placing is denied |
    | `spawner.message.denyChange: true` | players receive feedback if spawner type change is denied |
    | `spawner.permission.disableDestroy: false` | permissions are allowed to control destruction access |
    | `spawner.permission.disablePlace: false` | permissions are allowed to control placement access |
    | `spawner.permission.disableChange: false` | permissions are allowed to control spawner changing access |
    | `update.check.enabled: true` | update checks are enabled |
    | `update.check.interval: 24` | plugin checks for updates every 24 hours |

    !!! warning "Legacy settings"
        These settings came from the older ERRSA guide and should be checked against the live configuration before making changes.

---

??? note "Permissions"

    | Permission | Description | Granted To |
    |------------|-------------|------------|
    | `silkspawners.break.*` | allows players to break supported spawners | Player |
    | `silkspawners.place.*` | allows players to place supported spawner items | Player |
    | `silkspawners.command.give.*` | allows admins to give spawners by command | Admin |
    | `silkspawners.command.set.*` | allows admins to set / convert spawner types by command | Admin |
    | `silkspawners.command.give` | base give command access | Admin |
    | `silkspawners.command.set` | base set command access | Admin |
    | `silkspawners.command.locale` | allows locale-related command usage | Admin |
    | `silkspawners.command.version` | allows version / plugin info command usage | Admin |
    | `silkspawners.command.locale` | Direct LuckPerms assignment (`grant`, global) | admin |
    | `silkspawners.command.set` | Direct LuckPerms assignment (`grant`, global) | admin |
    | `silkspawners.command.give.*` | Direct LuckPerms assignment (`grant`, global) | admin |
    | `silkspawners.command.version` | Direct LuckPerms assignment (`grant`, global) | admin |
    | `silkspawners.command.give` | Direct LuckPerms assignment (`grant`, global) | admin |
    | `silkspawners.command.set.*` | Direct LuckPerms assignment (`grant`, global) | admin |

    !!! info "Permission inheritance"
        Direct group assignments were carried over from the September 26, 2026 staff permission export. Check live LuckPerms inheritance and contexts before changing access.

---

## Related Resources

No approved external resource URL was present in the older plugin files.

### ERRSA Source Note

This page was consolidated from the older ERRSA single-plugin guide plus the September 2026 inventory/permission export.
