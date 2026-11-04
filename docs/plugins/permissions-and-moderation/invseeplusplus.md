# InvSee++

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="InvSeePlusPlus" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="InvSeePlusPlus" data-server="survival" aria-live="polite"></div>

## What Is InvSee++?

InvSee++ lets authorized staff view player inventories and ender chests, including when a player is offline if the server is configured to support it. It can also edit those inventories, so treat it as an investigation and recovery tool rather than a normal player convenience.

## ERRSA's Use

On ERRSA Survival, **InvSee++ handles `/invsee` and `/endersee`**. Use it to check inventory evidence during a player report or to carry out an approved recovery. The November 3 Wiki Sync snapshot reports **InvSeePlusPlus 0.30.15**. The `mod` group has `invseeplusplus.view`, and `admin` inherits Moderator access and has `invseeplusplus.edit`.

!!! important "View first; edit only when authorized"
    Opening an inventory to investigate is not permission to take, move, or replace items. Check the **exact account, current world, and relevant inventory** before making any changes. Preserve evidence and record approved edits. Offline and world-separated inventory recovery needs additional care; escalate uncertain cases to a Developer or Server Lead.

### Essential commands

| Command | What it does |
| --- | --- |
| `/invsee <player>` | Opens the player's inventory for inspection. |
| `/endersee <player>` | Opens the player's ender chest for inspection. |

If the target is offline, confirm you are viewing the intended saved inventory before acting. **Do not assume a single inventory view represents every world or inventory group.**

!!! tip "Why the plugin name matters"
    EssentialsX also registers some inventory-related command names. ERRSA's confirmed operational interface is InvSee++; if an unexpected interface appears after an update, stop before editing and ask a Developer to check the command routing.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="InvSeePlusPlus" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Area | What is verified |
    | --- | --- |
    | Installed version | `0.30.15` in the November 3 Survival snapshot |
    | Normal inventory and ender chest commands | Registered by InvSee++ |
    | Offline inventory support | Available in the plugin; live ERRSA settings not provided |
    | World-specific inventory integration | Not verified from the snapshot |
    | Inventory edit logging | Plugin supports configurable logging; ERRSA's active settings not verified |

    The snapshot confirms the installed plugin and registered command nodes, but does not contain InvSee++'s configuration file. Do not assume optional features or logging settings are enabled.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="InvSeePlusPlus" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

- [Admin Module 2 — Player Investigations](../../learning/admins/mod2.md){ data-preview }
- [Admin Module 3 — Restoration & Recovery](../../learning/admins/mod3.md){ data-preview }

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/invsee%2B%2B){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/Jannyboy11/InvSee-plus-plus/blob/master/README.md){ .md-button .md-button--primary }
