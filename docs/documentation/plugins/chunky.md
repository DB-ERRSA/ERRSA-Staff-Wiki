!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Chunky

## Purpose

**Category:** `Infrastructure`

Chunky is a performance utility plugin used to **pre-generate world chunks** ahead of time. On ERRSA MC, it is used to reduce lag spikes caused by players exploring new terrain by generating chunks in advance.


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.



### Dev permissions
- Chunky is controlled via **console or OP-level access only**

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Dev commands
- `/chunky start` — begin chunk generation
- `/chunky pause` — pause generation
- `/chunky continue` — resume generation
- `/chunky cancel` — cancel generation
- `/chunky radius <blocks>` — set generation radius
- `/chunky world <world>` — select world
- `/chunky shape <shape>` — set shape (square, circle, etc.)
- `/chunky center` — set center point
- `/chunky progress` — view progress
- `/chunky reload` — reload config

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Chunky/config.yml`
- `plugins/Chunky/tasks/`

### Notes
- `tasks/` stores saved Chunky generation task data when tasks exist
- On ERRSA MC, the `tasks/` folder currently exists but is **empty**
- An empty `tasks/` folder is normal if no saved/persistent Chunky tasks are currently present

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `version: 2` — current config version
- `language: en` — English output
- `continue-on-restart: false` — generation does NOT resume automatically after restart
- `force-load-existing-chunks: false` — avoids reprocessing already generated chunks
- `silent: false` — logs progress to console
- `update-interval: 1` — frequent progress updates

### Design intent
- Chunk generation is **manual and controlled**, not automatic
- Prevents unexpected load on restart
- Keeps visibility into progress during generation


---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
