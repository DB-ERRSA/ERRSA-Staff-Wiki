!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Floodgate

## Purpose

**Category:** `Core & Infrastructure`

Floodgate enables **Bedrock Edition players** to join the ERRSA MC Java server through Geyser.  
It handles Bedrock player authentication, identity mapping, and Bedrock-specific permission handling.


---

## Dependencies

!!! info "Required for this plugin to function"
    - **Server:** Paper 1.21.4
    - **Plugins:**
      - `Geyser-Spigot`

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    Floodgate integrates with the **parallel permission track model**.  
    Bedrock players are treated as normal players after initialization.

### Player permissions
- Bedrock players receive the **same MAIN-track permissions** as Java players
- Permissions are applied after PlayerInitialization completes

Floodgate does **not** define gameplay permissions directly.

---

### Mod permissions
- None

Mods do not manage Floodgate behavior or Bedrock access.

---

### Admin permissions
- None

Admins do not configure Floodgate directly.

---

### Dev permissions
- Full configuration and maintenance
- Bedrock authentication settings
- UUID and prefix handling

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- *(No Floodgate-specific player commands)*

---

### Mod commands
- *(None)*

---

### Admin commands
- *(None)*

---

### Dev commands
- `/floodgate reload` — reload Floodgate configuration
- `/floodgate dump` — generate diagnostic information

---

## Configuration Files

!!! info "Primary config locations"
    - `plugins/floodgate/config.yml`
    - `plugins/floodgate/data/`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
    - **Online mode:** Enabled — prevents spoofing
    - **Username prefix:** Enabled for Bedrock users — avoids name collisions
    - **Auto-login:** Disabled — authentication handled via PlayerInitialization
    - **Command restrictions:** Enforced until verification completes

These settings ensure Bedrock players follow the **same lifecycle and verification flow** as Java players.

---


_Last verified: 2025-12-30_  
_Server version: 1.21.4_

