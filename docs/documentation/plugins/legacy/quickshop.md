!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Quickshop Hikari

## Purpose

   **Category:** `Gameplay` / `Economy`

   QuickShop-Hikari allows players to create chest-based player shops for buying and selling items through the in-game economy.  
   On ERRSA MC, it is used to support a simple player-driven marketplace while still preserving shop protection, logging, and staff visibility into suspicious activity.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - Vault
  - An economy plugin compatible with Vault
- **External services:**
  - None on ERRSA (currently using local database, not MySQL)

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Player permissions
- `quickshop.player` — allows normal player shop creation and use

### Mod permissions
- `quickshop.alerts` — receives QuickShop protection / exploit-related alerts


---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- `/shop` — main QuickShop command alias
- `/qs` — alternate main QuickShop command alias
- `/cshop` — alternate main QuickShop command alias
- `/chestshop` — alternate main QuickShop command alias
- Shop creation is primarily done in-game by interacting with a valid container while holding an item


---

## Configuration Files

!!! info "Primary config locations"
- `plugins/QuickShop/config.yml`
- `plugins/QuickShop/group.yml`
- `plugins/QuickShop/interaction.yml`
- `plugins/QuickShop/price-restriction.yml`
- `plugins/QuickShop/items-lookup.yml`
- `plugins/QuickShop/color-scheme.yml`
- `plugins/QuickShop/overrides/`
- `plugins/QuickShop/qs.log`
- `plugins/QuickShop/shops.mv.db`
- `plugins/QuickShop/shops.trace.db`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `tax: 0.0` — no transaction tax is taken from player trades
- `tax-account: tax` — reserved tax account is still defined for compatibility / future use
- `database.mysql: false` — ERRSA currently uses the local H2 database rather than MySQL
- `logging.enable: true` — trade and shop activity logging is enabled
- `logging.log-actions: true` — shop creation / trade actions are recorded
- `logging.log-balance: true` — balance before/after trade is logged for audit visibility
- `logging.location: 1` — logging is written to database storage
- `shop.cost: 10` — players pay $10 to create a shop
- `shop.refund: false` — shop creation cost is not refunded when a shop is removed
- `shop.lock: true` — shop containers are protected against unauthorized interaction
- `shop.auto-sign: true` — signs are generated automatically for easier shop setup
- `shop.display-items: true` — shops visually display their item
- `shop.display-type: 2` — virtual display items are used for better presentation / lower physical entity issues
- `shop.disable-quick-create: false` — quick shop creation is enabled
- `shop.pay-unlimited-shop-owners: false` — unlimited shop owners are not paid
- `shop.finding.distance: 45` — nearby shop search range is limited to 45 blocks
- `shop.finding.limit: 10` — results shown are capped at 10 nearby shops
- `shop.finding.global: false` — shop finding is local, not global
- `shop.allow-shop-without-space-for-sign: false` — valid sign placement space is required
- `shop.maximum-digits-in-price: -1` — no decimal digit cap is enforced
- `shop.blacklist-lores:` `SoulBound` — SoulBound items cannot be sold
- `shop.allow-stacks: true` — multi-item transactions are enabled
- `shop.use-cache: true` — caching is enabled for performance
- `protect.explode: true` — shops are protected from explosions
- `protect.hopper: true` — hopper interaction protection is enabled
- `protect.entity: true` — entity-based protection is enabled
- `limits.use: false` — player shop count limits are currently disabled
- `purge.enabled: false` — automatic inactive-shop purging is disabled
- `send-display-item-protection-alert: false` — display-item exploit alerts are disabled
- `send-shop-protection-alert: false` — shop theft/protection alerts are disabled at config level
- `quickshop.alerts` granted to `mod` group — moderation visibility is handled through permissions
- `quickshop.player` granted to `user` group — all normal users can participate in the shop system

This section documents **intentional deviations from plugin defaults**.




---

_Last verified: 2026-03-10_  
_Server version: 1.21.4_
