# EventBridge

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="EventBridge" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="EventBridge" data-server="survival" aria-live="polite"></div>

## What Is EventBridge?

EventBridge is a custom ERRSA plugin used to pass server event information into supporting ERRSA systems.

## ERRSA's Use

ERRSA uses it for server-side event integration. Staff access and available commands are shown from the live permission snapshot when the plugin exposes them.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="EventBridge" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Legacy forced event world | Disabled | Use destination-based navigation instead of forced join placement |
    | Main destinations | Survival, Creative, Legacy Lake, Build Workshop | Expose primary server destinations in `/servers` |
    | Workshop visibility | `ACCESS_ONLY` | Keep the staff build world out of public navigation |
    | Event destinations | Lobby open; Hunger Games/Spleef closed | Keep event choices visible while controlling availability |
    | Backup destination | Sandbox | Expose the backup/test destination when appropriate |
    | Kick hub | `main` | Return players to the main server when using hub fallback behavior |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="EventBridge" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
