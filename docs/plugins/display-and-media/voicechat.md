# Simple Voice Chat

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="voicechat" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="voicechat" data-server="survival" aria-live="polite"></div>

## What Is Simple Voice Chat?

Simple Voice Chat adds proximity and group voice communication to Minecraft for players using the compatible client mod.

## ERRSA's Use

ERRSA uses Simple Voice Chat for optional proximity voice communication. Players are not required to install the client mod to join the server.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="voicechat" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |----------------|-------------|---------|
    | UDP port | `8733` | Keep voice traffic separate from the Minecraft server port |
    | Maximum voice distance | `48` | Set normal proximity voice range |
    | Whisper distance | `24` | Keep whisper range shorter than normal speech |
    | Codec | `VOIP` | Optimize audio for voice communication |
    | Groups | Enabled | Allow group voice chats |
    | Force voice chat | Disabled | Do not require the client mod to join |
    | Spectator interaction | Disabled | Prevent spectators from freely communicating with active players |
    | External pings | Enabled | Allow voice connectivity checks |

    !!! warning "Network dependency"
        Voice traffic uses UDP port `8733`. Connectivity problems may be caused by hosting or firewall configuration even when the Minecraft server itself is online.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="voicechat" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/simple-voice-chat){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://modrepo.de/minecraft/voicechat/wiki/server_setup){ .md-button .md-button--primary }
