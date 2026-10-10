# EssentialsX

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Essentials" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Essentials" data-server="survival" aria-live="polite"></div>

## What Is EssentialsX?

EssentialsX is the server's core utility plugin for common player, economy, teleportation, server-information, and moderation functions.

## ERRSA's Use

ERRSA uses EssentialsX as a central utility layer for everyday server commands and economy features. Access varies substantially by staff role, so the live permissions matrix is the authority for staff access.


## Required By

- [ERRSA-MC-Core](errsa-mc-core.md)
- [EssentialsX Chat](../display-and-media/essentialschat.md)
- [EssentialsX Spawn](essentialsspawn.md)
- [VIPBridge](vipbridge.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Essentials" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Teleport safety | Enabled | Use Essentials safety checks for teleports |
    | Teleport cooldown | `0 s` | Do not add a post-teleport cooldown |
    | Teleport delay | `3 s` | Delay standard teleports briefly |
    | Starting balance | `$0` | Start new economy accounts at zero |
    | Currency symbol | `$` | Use dollars for displayed balances |
    | Maximum balance | `10,000,000,000,000` | Set the upper economy balance cap |
    | Minimum balance | `-$10,000` | Allow balances to go negative to the configured floor |
    | Chat format | `{DISPLAYNAME}: {MESSAGE}` | Use the configured EssentialsChat base format |
    | Respawn at home | Enabled | Prefer player home for applicable respawn behavior |
    | Spawn on join | Disabled | Do not force returning players to spawn on every join |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Essentials" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/essentialsx){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://essentialsx.net/wiki/introduction){ .md-button .md-button--primary }
