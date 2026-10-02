!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# FancyNPCs

## Purpose

**Category:** `Gameplay`  

FancyNPCs is used to create interactive NPCs that guide players, teach mechanics, and act as immersive interfaces for server systems (economy, claims, shops, etc.) across ERRSA MC.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper
- **External services (if any):**
  - MineSkin API (for skin loading)

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Dev commands
- `/npc create <name>` — create NPC  
- `/npc edit <name>` — modify NPC  
- `/npc remove <name>` — delete NPC  
- `/npc movehere <name>` — reposition NPC  

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/FancyNpcs/config.yml`
- `plugins/FancyNpcs/npcs.yml`
- `plugins/FancyNpcs/featureFlags.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `visibility_distance: 20` — reduces render load globally
- `autosave_interval: 15` — prevents loss of NPC edits
- `turn_to_player_distance: 5` — improves immersion (NPCs look at players) 
- `player-npcs: false` — prevents players from creating NPCs
- `blocked_commands: op, ban` — prevents dangerous execution via NPCs 

---

### Implementation Notes (ERRSA Usage)

- NPCs are heavily used in the **Tutorial Dojo** to teach systems:
  - Economy (`/sell`, diamonds = $50)
  - Claims (`/trust`, `/claimlist`, `/buyclaimblocks`)
  - PvP (`/pvp`)
  - Shops (QuickShop flow)

- NPCs primarily use:
  - `ANY_CLICK → message + sound + delay chains`
  - `LEFT_CLICK → command execution` (e.g., sell diamonds)   

- Example systems:
  - **DiamondTrader** → runs `/sell` on click  
  - **ClaimBlockTrader** → runs `/buyclaimblocks`  
  - **Tutorial NPCs** → multi-step guided dialogue chains  

- NPCs are:
  - `turnToPlayer: true` for immersion  
  - `collidable: true/false` depending on use  
  - `visibility_distance: ~25–35` locally tuned 

---


_Last verified: 2026-02-13_  
_Server version: 1.21.4_
