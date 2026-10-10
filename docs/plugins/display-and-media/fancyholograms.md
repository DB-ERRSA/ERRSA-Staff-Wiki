# FancyHolograms

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="FancyHolograms" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="FancyHolograms" data-server="survival" aria-live="polite"></div>

## What Is FancyHolograms?

FancyHolograms creates floating text, item, and block displays without requiring physical entities or signs.

## ERRSA's Use

ERRSA uses FancyHolograms for navigation, labels, instructions, decorative displays, and visual elements around server builds. Holograms may also be used alongside NPCs to make interactive areas easier to understand.


## Dependencies

- [PlaceholderAPI](../server-and-infrastructure/placeholderapi.md)
- [FancyNPCs](fancynpcs.md)


## Required By

- [VIPBridge](../server-and-infrastructure/vipbridge.md)
- [Guilds](../gameplay-and-progression/guilds.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="FancyHolograms" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Autosave | Enabled | Persist hologram changes automatically |
    | Autosave interval | `15 min` | Limit the amount of unsaved hologram work |
    | Save on change | Enabled | Write hologram edits when they are changed |
    | Visibility distance | `20` blocks | Limit default hologram render distance |
    | Command registration | Enabled | Expose FancyHolograms management commands |
    | Log level | `INFO` | Keep normal production logging without debug spam |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="FancyHolograms" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/fancyholograms){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://fancyinnovations.com/docs/minecraft-plugins/fancyholograms){ .md-button .md-button--primary }
