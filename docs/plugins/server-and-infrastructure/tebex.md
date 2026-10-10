# Tebex

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Tebex" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Tebex" data-server="survival" aria-live="polite"></div>

## What Is Tebex?

Tebex is the server-side connector for the Tebex storefront platform, allowing configured purchases to deliver commands or rewards to a Minecraft server.

## ERRSA's Use

ERRSA has the server-side integration available for a future player store, including potential VIP purchases. The storefront is not currently configured for normal player purchases, so changes should be coordinated as infrastructure work.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Tebex" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | `/buy` command | Enabled | Expose the Tebex storefront command in-game |
    | Update checks | Enabled | Surface plugin updates |
    | Automatic reporting | Enabled | Allow Tebex diagnostic reporting |
    | Verbose logging | Disabled | Avoid unnecessary production logging |
    | GUI title | `Server Shop` | Use the configured in-game store menu title |
    | Proxy mode | Disabled | Run this instance as a normal backend server integration |
    | Server secret | Configured — omitted | Authenticate the server to Tebex without exposing the secret |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        The plugin is configured for integration, but storefront/package availability is controlled from Tebex and may remain inactive.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Tebex" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/tebex/versions){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://docs.tebex.io/creators/tebex-control-panel/game-servers/minecraft-java-edition){ .md-button .md-button--primary }
