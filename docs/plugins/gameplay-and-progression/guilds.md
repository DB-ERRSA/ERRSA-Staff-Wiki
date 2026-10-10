# Guilds

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Guilds" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Guilds" data-server="survival" aria-live="polite"></div>

## What Is Guilds?

Guilds is a custom ERRSA plugin that provides the server's guild system and related gameplay features.

## ERRSA's Use

ERRSA uses Guilds to support player guilds and guild-related progression on the Survival server. The plugin is maintained internally, so live behavior and permissions are the authority for staff access.


## Dependencies

- [PlaceholderAPI](../server-and-infrastructure/placeholderapi.md)
- [Vault](../server-and-infrastructure/vault.md)
- [LuckPerms](../permissions-and-moderation/luckperms.md)
- [GriefPrevention](../permissions-and-moderation/griefprevention.md)
- [TAB](../display-and-media/tab.md)
- [FancyNPCs](../display-and-media/fancynpcs.md)
- [FancyHolograms](../display-and-media/fancyholograms.md)
- [WorldGuard](../worlds-and-building/worldguard.md)
- [BannerBuilder](bannerbuilder.md)


## Required By

- [PlayerQuests](playerquests.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Guilds" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Storage | SQLite (`guilds.db`) | Store guild data locally |
    | Guild name length | `3–24` characters | Constrain guild names |
    | Guild tag length | `2–4` characters | Keep tags short for chat/display use |
    | Invite expiration | `10 min` | Expire stale invitations |
    | Guild bank | Enabled | Allow guild banking features |
    | Guild chat | Enabled | Provide guild-only chat |
    | Open membership default | Disabled | New guilds are invitation-only unless changed |
    | LuckPerms integration | Enabled — context `main`, priority `350` | Publish guild tags into the live permission/meta system |
    | Claims | Enabled; minimum `5×5` | Allow guild claim features with a minimum footprint |
    | Leaderboard checks | Every `10 s` | Detect ranking changes for announcements |
    | Claim-block shop | `500` blocks for `$10,000`; +`$5,000` each purchase; cap `5,000` bonus | Provide a controlled late-game claim expansion sink |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        Guilds is authoritative for guild data; the LuckPerms prefix is an integration output, not the source of guild membership.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Guilds" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
