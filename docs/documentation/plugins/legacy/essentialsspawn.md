!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# EssentialsX Spawn

## Purpose

**Category:** `Infrastructure`

EssentialsX Spawn handles player spawn management, including join spawn, `/spawn`, and respawn behavior. On ERRSA MC, it is used to control where players are placed when they join the server or use spawn-related commands.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `EssentialsX`


---

## Permissions Model

!!! note "Managed through EssentialsX"
    All permissions for this plugin are handled within the **EssentialsX permission structure**.

- Permissions are **not managed separately**
- Refer to the **EssentialsX knowledgebase page** for:
  - Player permissions
  - Staff permissions
  - Admin overrides

---

## Common Commands

!!! note "Merged with EssentialsX"
    All commands related to spawn are part of the **EssentialsX command system**.

Refer to the **EssentialsX knowledgebase page** for:

- `/spawn`
- Respawn behavior commands

---

## Configuration Files

!!! info "Configuration is integrated"
- EssentialsX Spawn does not maintain independent configuration logic

All configuration is handled within:

- `plugins/Essentials/config.yml`
- Essentials spawn-related settings

---

## ERRSA Defaults & Settings

!!! note "Defined within EssentialsX"
    All spawn behavior is configured through the main Essentials configuration.

This includes:

- Join spawn behavior
- Respawn handling
- Spawn command behavior

Refer to the **EssentialsX knowledgebase page** for full details.

---

## Notes for ERRSA MC Maintainers

!!! warning "Centralized management"
    EssentialsX Spawn is **not managed as a standalone system**.

### Key points
- All logic is centralized in EssentialsX
- Do not attempt to configure this plugin independently
- Always modify spawn behavior through:
  - Essentials config
  - Essentials commands

### Best practice
- Treat EssentialsX Spawn as a **module of Essentials**, not a separate plugin

---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
