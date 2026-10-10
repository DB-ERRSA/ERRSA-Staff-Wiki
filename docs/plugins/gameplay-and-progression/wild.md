# WildRTP

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Wild" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Wild" data-server="survival" aria-live="polite"></div>

## What Is WildRTP?

WildRTP teleports players to randomly selected safe wilderness locations.

## ERRSA's Use

ERRSA uses `/wild` to distribute exploration across the Survival world.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Wild" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

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

??? note "Permissions"

    Access is populated from the latest LuckPerms Wiki Sync snapshot.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Wild" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/wildrtp){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/LasaJoniHD/WildRTP/wiki/Server-Owner-Guide){ .md-button .md-button--primary }
