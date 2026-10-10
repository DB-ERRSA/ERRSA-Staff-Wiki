# QuickShop-Hikari

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="QuickShop-Hikari" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="QuickShop-Hikari" data-server="survival" aria-live="polite"></div>

## What Is QuickShop-Hikari?

QuickShop-Hikari lets players create chest-based shops for buying and selling items through the in-game economy.

## ERRSA's Use

ERRSA uses QuickShop-Hikari to support the player marketplace while preserving shop protection, logging, and staff visibility into shop activity.


## Dependencies

- [ProtocolLib](../server-and-infrastructure/protocollib.md)
- [Vault](../server-and-infrastructure/vault.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="QuickShop-Hikari" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Transaction tax | `0%` | Do not charge the active basic transaction tax |
    | Tax target | Player | Apply tax logic to the interacting player when enabled |
    | Logging | Enabled; actions + balances | Keep shop activity auditable |
    | Log storage | Database | Store QuickShop logs in the configured database backend |
    | Database backend | MySQL — credentials omitted | Use the hosted SQL database rather than local H2 |
    | Database pool | Max `10`, minimum idle `2` | Use the configured production connection pool |
    | Economy provider | Vault (`0`) | Integrate shop payments with the server economy |
    | Shop limits | Disabled | Do not enforce QuickShop ownership limits |
    | Allowed shop blocks | Chest, trapped chest, barrel, brewing stand | Define containers that may become shops |
    | Updater | Enabled via Modrinth | Check for QuickShop releases |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        QuickShop stores live shop/economy data in MySQL. Do not expose credentials; stop the affected server before direct database edits.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="QuickShop-Hikari" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/quickshop-hikari){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://quickshop-community.github.io/QuickShop-Hikari-Documents/docs/intro){ .md-button .md-button--primary }
