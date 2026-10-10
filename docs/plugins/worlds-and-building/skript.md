# Skript

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Skript" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Skript" data-server="survival" aria-live="polite"></div>

## What Is Skript?

Skript provides lightweight server-side automation and custom gameplay logic without requiring every small feature to be compiled as a Java plugin.

## ERRSA's Use

ERRSA uses Skript for custom portal and teleport workflows, warp corrections, and other small server behaviors. Current scripted systems include portal cooldown, portal locking, destination handling, effects, and region-triggered teleport logic.


## Required By

- [SkBee](skbee.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Skript" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |----------------|-------------|---------|
    | Language | `english` | Keep scripts and errors consistent for maintainers |
    | Release channel | `stable` | Avoid prerelease builds on production |
    | Effect commands | Disabled | Prevent high-risk ad-hoc effect execution |
    | OP effect-command bypass | Disabled | Prevent operator status from bypassing that restriction |
    | Player UUID variables | Enabled | Improve long-term variable stability |
    | Verbosity | `normal` | Keep production logging readable |
    | Plugin priority | `high` | Improve event compatibility with protection/integration plugins |
    | Timings | Disabled | Avoid unnecessary overhead |
    | Variable storage | CSV | Persist current Skript variables |

    !!! info "Current scripted systems"
        ERRSA currently uses Skript for custom portal/teleport behavior and related movement/warp handling. Changes should be tested against the affected worlds before production use.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Skript" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/skript){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://docs.skriptlang.org/){ .md-button .md-button--primary }
