# BannerBuilder

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="BannerBuilder" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="BannerBuilder" data-server="survival" aria-live="polite"></div>

## What Is BannerBuilder?

BannerBuilder is a custom ERRSA plugin for server-specific banner creation or banner-related gameplay features.

## ERRSA's Use

ERRSA uses BannerBuilder as part of the custom gameplay stack. Because it is internally maintained, rely on live command and permission data for current staff access.


## Dependencies

- [Vault](../server-and-infrastructure/vault.md)


## Required By

- [Guilds](guilds.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="BannerBuilder" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Maximum patterns | `16` | Cap total banner layers |
    | Pricing | Enabled — `VANILLA_PLUS` | Charge for advanced banner creation |
    | Free layers | `3` | Allow basic designs before paid layers begin |
    | Paid layer cost | `$10` per layer | Charge economy balance for additional layers |
    | Consume dyes | Enabled | Require dye materials for banner creation |
    | Reset cost | `$10` + base-color dye | Charge for resetting an existing banner |
    | VIP / MVP discounts | `20%` / `35%` | Apply rank-based banner discounts |
    | Admin discount | `100%` | Allow administrative use without economy cost |
    | Loom integration | Enabled; sneak required | Open BannerBuilder through configured loom interaction |
    | Bedrock visible-layer cap | `6` | Keep Bedrock presentation within supported limits |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="BannerBuilder" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
