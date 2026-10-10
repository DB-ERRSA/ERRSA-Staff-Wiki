# TABCompleteFilter

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="TabCompleteFilter" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="TabCompleteFilter" data-server="survival" aria-live="polite"></div>

## What Is TABCompleteFilter?

TABCompleteFilter controls which commands and command arguments are exposed through Minecraft tab completion.

## ERRSA's Use

ERRSA uses it to reduce command clutter and avoid advertising commands that players should not normally see, while actual command authorization remains controlled by permissions.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="TabCompleteFilter" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Behavior | ERRSA Value | Purpose |
    |--------------------|-------------|---------|
    | OP filter bypass | Disabled | Keep command visibility controlled consistently |
    | Default command visibility | Curated whitelist | Show only approved player-facing commands |
    | Custom argument suggestions | Enabled | Provide controlled suggestions for selected commands |
    | Permission checks | Required | Visibility does not replace actual command permissions |

    !!! info "Visibility is not permission"
        Hiding or showing a command in tab completion does not grant access. LuckPerms remains the authority for command permissions.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="TabCompleteFilter" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://www.spigotmc.org/resources/tabcompletefilter.75208/){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://lees-plugins.gitbook.io/tabcompletefilter){ .md-button .md-button--primary }
