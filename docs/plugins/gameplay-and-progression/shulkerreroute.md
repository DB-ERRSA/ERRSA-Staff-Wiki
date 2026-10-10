# ShulkerReroute

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="ShulkerReroute" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="ShulkerReroute" data-server="survival" aria-live="polite"></div>

## What Is ShulkerReroute?

ShulkerReroute is a custom ERRSA plugin for server-specific shulker-related item or inventory routing behavior.

## ERRSA's Use

ERRSA uses ShulkerReroute as part of its custom gameplay stack. The exact routing behavior is maintained internally and should be verified against the live server before changes.


## Dependencies

- [WorldGuard](../worlds-and-building/worldguard.md)


---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="ShulkerReroute" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Safe destination | World `world` at `772, 64, 1533` | Reroute affected shulkers to the configured safe location |
    | Search radius | `8` blocks | Search locally when evaluating reroute behavior |
    | WorldGuard-only trigger | Enabled | Only reroute when WorldGuard is the blocking condition |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="ShulkerReroute" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
