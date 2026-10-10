# URLCustomDiscs

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="URLCustomDiscs" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="URLCustomDiscs" data-server="survival" aria-live="polite"></div>

## What Is URLCustomDiscs?

URLCustomDiscs adds custom music-disc functionality using externally hosted audio or media URLs.

## ERRSA's Use

ERRSA uses URLCustomDiscs for custom audio experiences tied to server content. Because custom media can depend on external URLs or resource-pack assets, avoid moving or deleting referenced files without checking where they are used.


## Dependencies

- [ProtocolLib](../server-and-infrastructure/protocollib.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="URLCustomDiscs" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Plugin mode | `api` | Use the API-based processing workflow |
    | Resource-pack access | `local` | Serve the generated resource pack through the configured local workflow |
    | Local yt-dlp | Disabled | Do not use the plugin host for direct yt-dlp processing |
    | Resource-pack ZIP | `C:/Apache24/htdocs/URLCustomDiscsPack.zip` | Write the generated pack to the configured web-server path |
    | API authentication | Configured — secret omitted | Authenticate requests without exposing the production token |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        Changes can affect music token delivery and the generated resource pack. Test the full create/download/resource-pack flow after edits.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="URLCustomDiscs" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/url-custom-discs){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/TheoDgb/URLCustomDiscs){ .md-button .md-button--primary }
