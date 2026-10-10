# ChatFilter

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="ChatFilter" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="ChatFilter" data-server="survival" aria-live="polite"></div>

## What Is ChatFilter?

ChatFilter filters unwanted chat content such as spam, advertisements, blocked words, repeated messages, and certain bypass attempts using special characters.

## ERRSA's Use

ERRSA uses ChatFilter as part of the server's chat moderation layer. It can filter chat and other text-entry surfaces while allowing staff to review or bypass filtering according to their permissions.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="ChatFilter" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    ChatFilter primarily uses these files:

    - `plugins/ChatFilter/config.yml` — core filter behavior and anti-spam settings
    - `plugins/ChatFilter/advertfilters.yml` — advertisement/IP/domain detection patterns
    - `plugins/ChatFilter/word filters.yml` — blocked words, phrases, and replacement rules
    - `plugins/ChatFilter/unicode.yml` — Unicode handling used to reduce filter bypasses

    !!! warning "Regex changes"
        Filter patterns can unintentionally block legitimate messages. Test significant regex or filter changes before using them in production.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="ChatFilter" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/chatfilter-zepsizola){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/ZepsiZola/ChatFilter){ .md-button .md-button--primary }
