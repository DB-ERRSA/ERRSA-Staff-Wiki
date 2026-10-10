# VIPBridge

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="VIPBridge" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="VIPBridge" data-server="survival" aria-live="polite"></div>

## What Is VIPBridge?

VIPBridge is a custom ERRSA plugin used as part of the Minecraft server's VIP integration.

## ERRSA's Use

ERRSA uses it to support the server-side VIP workflow and future store integration. Treat changes as production changes because they can affect player entitlements or connected services.


## Dependencies

- [FancyNPCs](../display-and-media/fancynpcs.md)
- [FancyHolograms](../display-and-media/fancyholograms.md)
- [ImageFrame](../display-and-media/imageframe.md)
- [LuckPerms](../permissions-and-moderation/luckperms.md)
- [Vault](vault.md)
- [EssentialsX](essentials.md)
- [Floodgate](floodgate.md)
- [PlaceholderAPI](placeholderapi.md)
- [HeadDB](../gameplay-and-progression/headdb.md)

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="VIPBridge" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | VIP promotion | LuckPerms `promote main` | Grant the configured VIP progression rank |
    | Duplicate grants | Prevented | Avoid issuing the same VIP grant repeatedly |
    | Reset/demotion commands | Enabled | Support controlled VIP reset behavior |
    | Reward forms | Custom map, custom music, catchphrase enabled | Send custom reward requests through ERRSA forms |
    | Bedrock prefix | `.` | Detect Floodgate/Bedrock usernames consistently |
    | Token shop | Enabled | Allow players to buy supported reward tokens |
    | Token prices | Map `$3,200`; Music `$4,800`; HeadDB `$100` | Set live token-shop economy prices |
    | VIP onboarding | Enabled | Show the VIP quick guide |
    | VIP shoutout | Enabled; bossbar `8 s` | Announce new VIP grants |
    | Music upload cap | `25 MB`, `.mp3` | Limit custom-music source files |
    | Music processing | Mono; independent capture enabled | Use the configured URLCustomDiscs delivery workflow |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        Token counts, secrets, and sensitive processing details are intentionally omitted. Test reward redemption end-to-end after changing forms or music settings.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="VIPBridge" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
