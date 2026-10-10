# Dynmap

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="dynmap" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="dynmap" data-server="survival" aria-live="polite"></div>

## What Is Dynmap?

Dynmap renders Minecraft worlds as a web-based map that can be viewed outside the game.

## ERRSA's Use

ERRSA uses Dynmap to provide a visual map of server worlds and player-accessible areas. Administrative settings affect map rendering, web access, and server resource usage.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="dynmap" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Default map template | `lowres` | Use the lower-resolution template as the default render profile |
    | Generated textures | Enabled | Use generated block textures for map rendering |
    | Web server | Enabled on port `8123` | Serve the Dynmap web interface directly |
    | Login requirement | Disabled | Allow the map to load without Dynmap account authentication |
    | Player faces | Enabled | Show player faces in the player list/map UI |
    | Banned-IP checks | Enabled | Respect server bans in Dynmap web access |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="dynmap" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/dynmap){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/webbukkit/dynmap/wiki){ .md-button .md-button--primary }
