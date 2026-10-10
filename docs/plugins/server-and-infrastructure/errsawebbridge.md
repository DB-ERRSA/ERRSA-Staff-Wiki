# ERRSAWebBridge

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="ERRSAWebBridge" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="ERRSAWebBridge" data-server="survival" aria-live="polite"></div>

## What Is ERRSAWebBridge?

ERRSAWebBridge is a custom ERRSA integration plugin that connects the Minecraft server with ERRSA web services.

## ERRSA's Use

ERRSA uses it as a bridge between the live Paper server and supporting web infrastructure. Its behavior should be treated as production integration logic rather than a player-facing feature.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="ERRSAWebBridge" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Sync interval | `15 s` | Refresh website data frequently |
    | Guild database | `plugins/Guilds/guilds.db` | Read guild state for the web snapshot |
    | Quest database | `plugins/PlayerQuests/quests.db` | Read quest state for the web snapshot |
    | Core output | `plugins/dynmap/web/errsa-paper.json` | Publish the main website/Dynmap bridge snapshot |
    | Additional outputs | EventBridge + shop-stock JSON | Publish event/navigation and shop inventory snapshots |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="ERRSAWebBridge" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
