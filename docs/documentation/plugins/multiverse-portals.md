!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Multiverse-Portals

## Purpose

**Category:** `Infrastructure`

Multiverse-Portals provides custom portal creation and routing between worlds using Multiverse-Core. On ERRSA MC, this plugin is **installed but not currently in use**.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `Multiverse-Core`

---

## Permissions Model

!!! note "Current state"
    No permissions are configured for Multiverse-Portals on ERRSA MC.

- No LuckPerms integration in use
- No player or staff access assigned
- Plugin is effectively inactive

---

## Common Commands

!!! note "Not in use"
    Commands are not part of ERRSA MC workflows at this time.

Examples (unused):

- `/mv create <name>` — create portal
- `/mv modify dest <world>` — set destination
- `/mv remove <name>` — delete portal

Refer to official docs if activation is planned.

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Multiverse-Portals/config.yml`
- `plugins/Multiverse-Portals/portals.yml`

### Current state
- `portals.yml` is empty:
  - `portals: {}`

- No active portals are defined on ERRSA MC

---

## ERRSA Defaults & Settings

!!! note "Current configuration (inactive use)"

Key settings from `config.yml`:

- `enforce-portal-access: true`
- `portal-cooldown: 1000`
- `portals-default-to-nether: false`
- `nether-animation: true`
- `teleport-vehicles: false`
- `use-on-move: true` 

### Important note
Although portal access enforcement is enabled, it has **no effect** because:

- No portals exist
- No permissions are assigned

---

## ERRSA Design Intent

!!! note "Why this plugin exists but is unused"

- Installed for **future flexibility**
- Could support:
  - custom event portals
  - lobby ↔ game world routing
  - controlled teleport systems

Currently replaced by:

- Skript-based portal systems
- Essentials / manual teleport workflows

---


_Last verified: 2026-03-20_  
_Server version: 1.21.4_
