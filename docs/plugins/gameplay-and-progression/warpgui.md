# WarpGUI

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="WarpGUI" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="WarpGUI" data-server="survival" aria-live="polite"></div>

## What Is WarpGUI?

WarpGUI is a custom ERRSA plugin that provides server-specific warp and teleport interfaces.

## ERRSA's Use

ERRSA uses WarpGUI to support player and staff warp workflows through a custom interface. Administrative warp functions remain permission-controlled.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="WarpGUI" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Teleport delay | `5 s` | Add a short delay before teleporting |
    | Warp cooldown | `300 s` | Limit repeated normal warp use |
    | Admin warp cooldown | `0 s` | Allow unrestricted administrative warp use |
    | Home cooldown | `300 s` | Limit repeated home teleports |
    | Warp cost | `$0` | Keep normal warp use free |
    | Set-warp cost | `$500` | Charge for creating a warp |
    | Set-home cost | `$0` | Keep home creation free |
    | Home limits | Default `1`, VIP `3`, Admin `10` | Scale home capacity by role |
    | Warp categories | `9` configured | Organize warps into curated menu categories |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="WarpGUI" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
