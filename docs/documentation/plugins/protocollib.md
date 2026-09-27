!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# ProtocolLib

## Purpose

**Category:** `Infrastructure`  

ProtocolLib is a low-level packet API that allows other plugins to intercept, modify, and listen to Minecraft network packets. It does not provide gameplay features directly but is required by many advanced plugins.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper  
- **Plugins:**
  - *(None required — acts as a dependency for other plugins)*
- **External services (if any):**
  - None

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/ProtocolLib/config.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `auto updater.notify`: `true` — alerts for new versions 
- `auto updater.download`: `false` — prevents automatic updates (manual control)

- `metrics`: `true` — allows anonymous usage stats

- `chat warnings`: `true` — surfaces protocol issues to admins

- `background compiler`: `true` — improves performance for packet handling

- `debug`: `false` — prevents console spam  
- `detailed error`: `false` — avoids excessive stack traces 

- `script engine`: `JavaScript` — default packet filter scripting engine 

- `No direct gameplay usage` — used only as a dependency layer for other plugins  


---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
