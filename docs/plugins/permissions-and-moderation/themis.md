# Themis

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Themis" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Themis" data-server="survival" aria-live="polite"></div>

## What Is Themis?

Themis is an anti-cheat plugin that detects suspicious movement, combat, packet, and other gameplay behavior.

## ERRSA's Use

ERRSA uses Themis to automatically detect and block common cheats while giving staff alerts and player violation information for moderation review.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Themis" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting | ERRSA Value | Purpose |
    |---------|-------------|---------|
    | `default.enable` | `true` | Enables the standard detection checks. |
    | `default.block` | `true` | Allows Themis to actively block detected cheating behavior. |
    | `default.block-threshold` | `10.0` | Avoids acting on a single minor anomaly. |
    | `default.actions.notify.execution-threshold` | `10.0` | Starts staff notifications after meaningful suspicion. |
    | `default.actions.notify.repetition-threshold` | `5.0` | Reduces repeated alert spam. |
    | `default.actions.notify.repetition-delay` | `10.0` | Adds a delay between repeated notifications. |
    | `default.bedrock-only` | `false` | Runs checks for supported Java and Bedrock players. |
    | `default.max-ping` | `-1.0` | Does not disable checks solely because of high ping. |
    | `default.min-tps` | `-1.0` | Does not automatically disable checks at a TPS threshold. |
    | `default.violation-expiration` | `900.0` | Lets violation scores decay after 15 minutes. |

    !!! info "Interpreting alerts"
        Anti-cheat alerts are evidence for review, not automatic proof of cheating. Staff should consider ping, TPS, repeated detections, and observed player behavior.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Themis" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/themis-anti-cheat/versions){ .md-button .md-button--primary }
- [Plugin Page ↗](https://modrinth.com/plugin/themis-anti-cheat){ .md-button .md-button--primary }
