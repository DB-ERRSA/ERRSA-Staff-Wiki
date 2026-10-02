!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Simple Voice Chat

## Purpose

**Category:** `Infrastructure`

Simple Voice Chat adds proximity-based voice communication to the Minecraft server using a separate UDP voice service. On ERRSA MC, it is used to let players talk naturally in-game while keeping administrative voice controls limited to staff.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot (Bukkit build in use on ERRSA MC)
- **External services (if any):**
  - Open UDP port for voice traffic (`8733` on ERRSA MC)
  - Client-side **Simple Voice Chat mod** installed by players who want to use voice

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Player permissions
- `voicechat.listen` — allows players to hear nearby voice audio
- `voicechat.speak` — allows players to transmit voice audio
- `voicechat.groups` — allows players to join and use voice chat groups

### Admin permissions
- `voicechat.admin` — administrative access for voice chat management and testing functions

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- Voice chat use is primarily handled through the client mod UI and keybinds
- Group voice features are available to players because `voicechat.groups` is enabled

### Admin commands
- `/voicechat test <player>` — used for administrative testing and troubleshooting of voice chat connectivity


---

## Configuration Files

!!! info "Primary config locations"
- `voicechat-server.properties`


---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `port`: `8733` — dedicated UDP port for voice traffic; kept separate from the main Minecraft port
- `bind_address`: blank — allows plugin to use the server IP from main server settings
- `max_voice_distance`: `48.0` — standard local proximity range
- `whisper_distance`: `24.0` — whisper is intentionally half normal voice range
- `codec`: `VOIP` — optimized for voice communication
- `mtu_size`: `1024` — stable packet size for typical hosting/network conditions
- `keep_alive`: `1000` — standard keep-alive interval for connection stability
- `enable_groups`: `true` — players are allowed to create/use group voice chats
- `allow_recording`: `true` — recording support remains enabled
- `spectator_interaction`: `false` — spectators cannot freely talk to active players
- `spectator_player_possession`: `false` — spectators cannot talk through spectated players
- `force_voice_chat`: `false` — players without the mod are **not** kicked from the server
- `login_timeout`: `10000` — retained default check timeout if forced voice is ever enabled later
- `broadcast_range`: `-1.0` — uses the normal max voice distance instead of a custom broadcast override
- `allow_pings`: `true` — server responds to external voice chat pings for connectivity checks

This section documents **intentional deviations from plugin defaults**.

---

## Common Issues & Fixes

### Issue: Player cannot hear or speak in voice chat

**Likely cause:** Player does not have the Simple Voice Chat mod installed, voice permissions are missing, or UDP voice traffic is not reaching port `8733`  

**Fix:**  
- Confirm the player has the correct client mod installed  
- Verify the player group includes:
  - `voicechat.listen`
  - `voicechat.speak`
  - `voicechat.groups`
- Confirm the host/server firewall allows UDP on port `8733`

**Escalate if:** Multiple players are affected at once, or permissions are correct but nobody can connect to voice

---

### Issue: Voice chat plugin is installed but nobody can connect

**Likely cause:** UDP port is closed, blocked, or not forwarded correctly  

**Fix:**  
- Verify `port=8733` in `voicechat-server.properties`
- Check the hosting panel/network settings to ensure UDP `8733` is open
- Restart the server after changes

**Escalate if:** Hosting provider/network configuration may be blocking UDP traffic externally

---


_Last verified: 2026-03-20_  
_Server version: 1.21.4_
