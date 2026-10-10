# ImageFrame

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="ImageFrame" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="ImageFrame" data-server="survival" aria-live="polite"></div>

## What Is ImageFrame?

ImageFrame displays external images on Minecraft maps and item frames, allowing custom graphics to appear inside the game.

## ERRSA's Use

ERRSA uses ImageFrame for custom images and visual displays within server builds. Imported images can affect map IDs and world presentation, so staff should avoid deleting or replacing active image data without checking where it is used.


## Required By

- [VIPBridge](../server-and-infrastructure/vipbridge.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="ImageFrame" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Language | `en_us` | Use English plugin messages |
    | Empty maps required | Enabled | Require map items for image-map creation outside Creative |
    | Maximum image-map size | `100` | Limit oversized image-map creations |
    | Maximum image file size | `50 MiB` | Reject excessively large source images |
    | Processing timeout | `60 s` | Stop image processing that takes too long |
    | Parallel processing | `1` | Limit simultaneous image processing work |
    | Creation limits | Default `10`, VIP `15`, Moderator `20` | Cap image-map ownership by permission group |
    | Upload service | Enabled on port `8517` | Provide ImageFrame upload handling |
    | Storage | File-based | Store ImageFrame data locally; database credentials are not used for active storage |
    | Updater | Enabled | Check for plugin updates |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="ImageFrame" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/imageframe){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://modrinth.com/plugin/imageframe){ .md-button .md-button--primary }
