# WorldGuard

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="WorldGuard" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="WorldGuard" data-server="survival" aria-live="polite"></div>

## What Is WorldGuard?

WorldGuard protects defined regions and controls what players, entities, and game mechanics can do inside those regions.

## ERRSA's Use

ERRSA uses WorldGuard to protect important areas and apply region-specific behavior such as building restrictions, PvP settings, explosion rules, and other gameplay controls.


## Dependencies

- [FastAsyncWorldEdit](fastasyncworldedit.md)

## Required By

- [WorldGuard Extra Flags](worldguard-extraflags.md)
- [WorldGuard Extra Flags](worldguardextraflags.md)
- [Guilds](../gameplay-and-progression/guilds.md)
- [PlayerQuests](../gameplay-and-progression/playerquests.md)
- [ShulkerReroute](../gameplay-and-progression/shulkerreroute.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="WorldGuard" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |----------------|-------------|---------|
    | OP permissions | Enabled | Allow authorized operators to manage protected regions |
    | Build permission nodes | Disabled | Keep normal build control region-based |
    | Max regions per player | `7` | Limit player-owned region count where applicable |
    | Max claim volume | `30,000` | Limit oversized claims |
    | Nether portal protection | Enabled | Reduce portal-related bypass or abuse |
    | Plugin mob spawning block | Enabled | Prevent unintended plugin-driven spawning |

    !!! warning "Protection changes"
        Region and flag changes can immediately affect building, PvP, explosions, interaction, and other live gameplay behavior.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="WorldGuard" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/worldguard){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://worldguard.enginehub.org/en/latest/){ .md-button .md-button--primary }
