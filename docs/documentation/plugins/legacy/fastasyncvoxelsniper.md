!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# FastAsyncVoxelSniper

## Purpose

**Category:** `Infrastructure`

FastAsyncVoxelSniper (FAVS) is a high-performance terrain editing tool built on FAWE. On ERRSA MC, it is used for **advanced world shaping, terrain design, and large-scale edits** beyond what standard WorldEdit provides.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `FastAsyncWorldEdit (FAWE)`


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Dev permissions
- Access is restricted operationally:
  - OP status
  - Console


---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Dev commands
- Full brush and editing control via `/vs` system
- `/vs` — base VoxelSniper command
- `/b <brush>` — select brush
- `/v <block>` — set voxel material
- `/vr <block>` — set replace material
- `/b <size>` — set brush size

!!! warning
    These commands can modify **millions of blocks instantly**.  
    Do not grant access to untrusted users.

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/FastAsyncVoxelSniper/config.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

### Core Behavior
- `persist-sessions-on-logout: true` — brush settings persist between sessions
- `default-brush-size: 3` — safe default
- `litesniper-max-brush-size: 7` — restricted tier limit
- `brush-size-warning-threshold: 100` — warns on dangerous sizes

---

### Safety Limits
- `Copy Pasta block-limit: 10000`
- `Move max-block-count: 5000000`
- `Set selection-size-max: 5000000`
- `Shell Set max-size: 5000000`
- `Stencil max-area-volume: 5000000`

!!! note
    These limits are intentionally high for development use but still prevent catastrophic edits.

---

### Restricted Materials
- `minecraft:barrier`
- `minecraft:bedrock`

!!! note
    Prevents accidental or destructive edits to critical blocks.

---

### Default Editing Behavior
- `default-block-material: air`
- `default-replace-block-material: air`
- `default-voxel-height: 1`

---

### Brush System Defaults (Important Highlights)
Only notable ones for ERRSA MC usage:

- **Copy/Paste system limited to 10k blocks**
- **Tree generation defaults to oak**
- **Entity brush defaults to zombie**
- **Ocean/terrain brushes capped within safe Y ranges**
- **Punish/utility brushes exist but should not be used in production gameplay**

---

## ERRSA Design Intent

!!! note "Why these settings exist"

- Keep **default usage safe**
- Allow **large-scale edits when needed**
- Prevent:
  - accidental massive edits
  - editing bedrock/barrier
- Maintain **performance stability**

---

### Operational guidelines

- Always:
  - Test brushes in a safe area first
  - Start with small sizes
- Before large edits:
  - Ensure FAWE undo history is available
- Avoid:
  - Using extremely large brush sizes (>100) unless necessary

---

### Relationship to other plugins

- **FAWE** → handles actual block changes and undo system  
- **FAVS** → provides brush-based editing interface  

---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
