---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

## What Is QuickShop-Hikari?

QuickShop-Hikari allows players to create chest-based player shops for buying and selling items through the in-game economy. On ERRSA MC, it is used to support a simple player-driven marketplace while still preserving shop protection, logging, and staff visibility into suspicious activity.

## ERRSA's Use

ERRSA documents **QuickShop-Hikari** as part of the **Gameplay And Progression** plugin group on the Survival server.

---

??? note "Common Commands"

    | Command | Description | Who Can Use It |
    |---------|-------------|----------------|
    | `/shop` | main QuickShop command alias | Player |
    | `/qs` | alternate main QuickShop command alias | Player |
    | `/cshop` | alternate main QuickShop command alias | Player |
    | `/chestshop` | alternate main QuickShop command alias | Player |

---

??? note "Plugin Configuration"

    | ERRSA Setting | Purpose / Recorded Value |
    |---------------|--------------------------|
    | `tax: 0.0` | no transaction tax is taken from player trades |
    | `tax-account: tax` | reserved tax account is still defined for compatibility / future use |
    | `database.mysql: false` | ERRSA currently uses the local H2 database rather than MySQL |
    | `logging.enable: true` | trade and shop activity logging is enabled |
    | `logging.log-actions: true` | shop creation / trade actions are recorded |
    | `logging.log-balance: true` | balance before/after trade is logged for audit visibility |
    | `logging.location: 1` | logging is written to database storage |
    | `shop.cost: 10` | players pay $10 to create a shop |
    | `shop.refund: false` | shop creation cost is not refunded when a shop is removed |
    | `shop.lock: true` | shop containers are protected against unauthorized interaction |
    | `shop.auto-sign: true` | signs are generated automatically for easier shop setup |
    | `shop.display-items: true` | shops visually display their item |
    | `shop.display-type: 2` | virtual display items are used for better presentation / lower physical entity issues |
    | `shop.disable-quick-create: false` | quick shop creation is enabled |
    | `shop.pay-unlimited-shop-owners: false` | unlimited shop owners are not paid |
    | `shop.finding.distance: 45` | nearby shop search range is limited to 45 blocks |
    | `shop.finding.limit: 10` | results shown are capped at 10 nearby shops |
    | `shop.finding.global: false` | shop finding is local, not global |
    | `shop.allow-shop-without-space-for-sign: false` | valid sign placement space is required |
    | `shop.maximum-digits-in-price: -1` | no decimal digit cap is enforced |
    | `shop.allow-stacks: true` | multi-item transactions are enabled |
    | `shop.use-cache: true` | caching is enabled for performance |
    | `protect.explode: true` | shops are protected from explosions |
    | `protect.hopper: true` | hopper interaction protection is enabled |
    | `protect.entity: true` | entity-based protection is enabled |
    | `limits.use: false` | player shop count limits are currently disabled |
    | `purge.enabled: false` | automatic inactive-shop purging is disabled |
    | `send-display-item-protection-alert: false` | display-item exploit alerts are disabled |
    | `send-shop-protection-alert: false` | shop theft/protection alerts are disabled at config level |

    !!! warning "Legacy settings"
        These settings came from the older ERRSA guide and should be checked against the live configuration before making changes.

---

??? note "Permissions"

    | Permission | Description | Granted To |
    |------------|-------------|------------|
    | `quickshop.player` | allows normal player shop creation and use | Player |
    | `quickshop.alerts` | receives QuickShop protection / exploit-related alerts | Mod |
    | `quickshop.alerts` | Direct LuckPerms assignment (`grant`, global) | mod |

    !!! info "Permission inheritance"
        Direct group assignments were carried over from the September 26, 2026 staff permission export. Check live LuckPerms inheritance and contexts before changing access.

---

## Related Resources

No approved external resource URL was present in the older plugin files.

### ERRSA Source Note

This page was consolidated from the older ERRSA single-plugin guide plus the September 2026 inventory/permission export.
