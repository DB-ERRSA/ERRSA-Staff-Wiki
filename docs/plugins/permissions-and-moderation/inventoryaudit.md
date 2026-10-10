# InventoryAudit

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="InventoryAudit" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="InventoryAudit" data-server="survival" aria-live="polite"></div>

## What Is InventoryAudit?

InventoryAudit is a custom ERRSA plugin used for inventory-related moderation and auditing workflows on the Survival server.

## ERRSA's Use

ERRSA uses InventoryAudit as part of the staff moderation toolset. Live commands, permissions, and current plugin behavior should be treated as the authority until the internal repository documentation is added.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="InventoryAudit" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Console severity | `HIGH` | Only surface high-severity audit events in console |
    | File severity | `MEDIUM` | Write medium-and-higher incidents to the audit log |
    | Routine event logging | Disabled | Reduce noise in production logs |
    | Incident log | `audit/incidents.log` | Store detailed audit incidents separately |
    | Duplicate window | `100 ticks` | Suppress repeated duplicate detections in a short window |
    | Shulker overlap check | Enabled; minimum `16` items | Detect suspicious shulker-content overlap |
    | Fingerprint mirror threshold | `256` items | Flag large mirrored inventory fingerprints |
    | Respawn destination check | Enabled | Audit suspicious inventory changes around respawn movement |
    | Async file writer | Enabled; queue `10,000` | Keep audit disk writes off the main thread |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="InventoryAudit" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
