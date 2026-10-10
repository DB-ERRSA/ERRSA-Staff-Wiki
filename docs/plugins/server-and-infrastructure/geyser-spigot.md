!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Geyser

## Purpose

**Category:** `Core & Infrastructure`

Geyser allows **Bedrock Edition clients** to connect to the ERRSA MC Java server by translating Bedrock network traffic into Java-compatible packets.

Geyser does not modify gameplay rules, permissions, or authority; it only provides protocol compatibility.


---

### Player permissions
- Bedrock players receive the **same MAIN-track permissions** as Java players
- Permissions are applied after PlayerInitialization completes

---

### Mod permissions
- None

Mods do not interact with Geyser.

---

### Admin permissions
- None

Admins do not manage Geyser configuration.

---

### Dev permissions
- Full configuration and maintenance
- Protocol compatibility settings
- Client feature toggles

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- *(No Geyser-specific player commands)*

---

### Mod commands
- *(None)*

---

### Admin commands
- *(None)*

---

### Dev commands
- `/geyser reload` — reload Geyser configuration
- `/geyser dump` — generate diagnostic output

---

## Configuration Files

!!! info "Primary config locations"
    - `plugins/Geyser/config.yml`
    - `plugins/Geyser/locales/`
    - `plugins/Geyser/data/`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
    - **Auth type:** Floodgate
    - **Bedrock movement authority:** Server-side
    - **Command restrictions:** Enforced until verification completes
    - **Player skins:** Enabled via Floodgate
    - **Client feature parity:** Limited to avoid gameplay advantage

These settings ensure Bedrock players integrate cleanly without bypassing gameplay balance or security controls.

---

_Last verified: 2025-12-30_  
_Server version: 1.21.4_
