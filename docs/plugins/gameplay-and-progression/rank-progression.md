# Rank Progression

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Rank-Progression" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Rank-Progression" data-server="survival" aria-live="polite"></div>

## What Is Rank Progression?

Rank Progression is a custom ERRSA plugin that supports server-specific progression and rank-related workflows.

## ERRSA's Use

ERRSA uses Rank Progression for progression logic that is specific to the Minecraft server. Staff access and any administrative actions are controlled through live permissions.


!!! note "Operational requirement"
    Rank Progression does not declare a hard dependency on LuckPerms, but its configured `/lp` commands require [LuckPerms](../permissions-and-moderation/luckperms.md) to function.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Rank-Progression" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Server context | `main` | Apply progression against the production server context |
    | Check interval | `1` | Evaluate progression on the configured short interval |
    | Promotions | Enabled | Allow eligible players to progress automatically |
    | Promotion broadcasts | Enabled | Announce successful promotions |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Rank-Progression" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
