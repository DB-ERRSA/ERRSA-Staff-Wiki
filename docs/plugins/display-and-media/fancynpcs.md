# FancyNPCs

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="FancyNpcs" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="FancyNpcs" data-server="survival" aria-live="polite"></div>

## What Is FancyNPCs?

FancyNPCs creates configurable non-player characters that can display skins, face players, send messages, and trigger configured actions.

## ERRSA's Use

ERRSA uses FancyNPCs as an interface for tutorials and server systems. NPCs are used to guide players through features such as economy, claims, shops, and other server mechanics.


## Required By

- [VIPBridge](../server-and-infrastructure/vipbridge.md)
- [FancyHolograms](fancyholograms.md)
- [Guilds](../gameplay-and-progression/guilds.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="FancyNpcs" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Autosave | Enabled | Persist NPC changes automatically |
    | Autosave interval | `15 min` | Limit the amount of unsaved NPC work |
    | NPC placeholder refresh | `30 s` | Refresh placeholder-backed skins/display names periodically |
    | Visibility refresh | `20 ticks` | Re-evaluate NPC visibility once per second |
    | Visibility distance | `20` blocks | Limit default NPC render distance |
    | Turn-to-player distance | `5` blocks | Allow nearby NPCs to face players |
    | Blocked NPC commands | `op`, `ban` | Prevent high-risk commands from being attached to NPC actions |
    | Skin API | Configured — key omitted | Allow faster skin loading without exposing the production API key |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        NPC actions can execute commands. Review the action chain before changing NPCs tied to live systems.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="FancyNpcs" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/fancynpcs){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://fancyinnovations.com/docs/minecraft-plugins/fancynpcs){ .md-button .md-button--primary }
