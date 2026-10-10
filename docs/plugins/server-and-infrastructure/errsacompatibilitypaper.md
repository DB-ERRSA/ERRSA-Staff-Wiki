# ERRSACompatibilityPaper

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="ERRSACompatibilityPaper" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="ERRSACompatibilityPaper" data-server="survival" aria-live="polite"></div>

## What Is ERRSACompatibilityPaper?

ERRSACompatibilityPaper is a custom ERRSA plugin used to support server compatibility monitoring and related integration on the Paper server.

## ERRSA's Use

ERRSA uses it as part of the Minecraft compatibility system that helps staff track compatibility-related plugin state on the Survival server.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="ERRSACompatibilityPaper" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Compatibility endpoint | ERRSA Render endpoint | Send compatibility reports to the Discord/handbook service |
    | Report interval | `300 s` | Publish compatibility state every five minutes |
    | Shared secret | Configured — omitted | Authenticate reports without exposing the production secret |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="ERRSACompatibilityPaper" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
