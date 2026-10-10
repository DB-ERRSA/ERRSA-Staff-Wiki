# GriefPrevention

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="GriefPrevention" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="GriefPrevention" data-server="survival" aria-live="polite"></div>

## What Is GriefPrevention?

GriefPrevention lets players claim land and protects builds, containers, animals, and other property from unauthorized changes.

## ERRSA's Use

ERRSA uses GriefPrevention as the primary land-claim and anti-grief system on Survival. It supports normal player claims as well as staff-managed administrative claims.


## Required By

- [AutoUnlockPvPDrops](../gameplay-and-progression/autounlockpvpdrops.md)
- [Guilds](../gameplay-and-progression/guilds.md)
- [PlayerQuests](../gameplay-and-progression/playerquests.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="GriefPrevention" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Initial claim blocks | `500` | Give new players a starting claim allowance |
    | Accrual | `50` blocks/hour | Grow claim capacity during play |
    | Maximum accrued blocks | `100,000` | Cap passive claim-block accumulation |
    | Claim expiration | `1000` inactive days | Effectively retain established claims for long periods |
    | Minimum claim | Width `5`; area `100` | Prevent extremely small claims |
    | WorldGuard build permission | Required | Integrate claim creation with protected-world access |
    | PvP worlds | world, Nether, End, PlotWorld, workshop | Apply GriefPrevention PvP handling only in configured worlds |
    | PvP timeout | `10 s` | Keep combat restrictions active briefly after engagement |
    | Claims protect PvP | Player/admin claims protected | Block PvP inside protected land |
    | Claim explosions | Blocked | Prevent land-claim explosion damage |
    | Fire spread / destruction | Disabled | Prevent fire griefing globally through GriefPrevention |
    | Claim block purchase | `$2` per block | Allow economy-based claim expansion |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        World-specific PvP and claim modes are live gameplay controls. Review both GriefPrevention and PvP-related plugins before changing them.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="GriefPrevention" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/griefprevention){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://docs.griefprevention.com/){ .md-button .md-button--primary }
