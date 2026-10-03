!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# ChunkyBorder

## Purpose

**Category:** `Infrastructure`

ChunkyBorder enforces hard world boundaries using Chunky-generated regions. On ERRSA MC, it is used to **prevent players from traveling beyond defined world limits**, ensuring performance stability and keeping gameplay within designed areas.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `Chunky` (used to pre-generate the same regions)
- **External services (if any):**
  - Optional map plugins (Dynmap, BlueMap, Squaremap, etc.)

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Dev permissions
- Border management is done via:
  - Config files (`borders.json`)
  - Console/admin commands (if used)

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/ChunkyBorder/config.yml` → behavior settings (messages, effects, restrictions)
- `plugins/ChunkyBorder/borders.json` → actual world border definitions

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

### Border Definitions (`borders.json`)
- **Main worlds:**
  - `world` → 10,000 block radius (square)
  - `world_nether` → 10,000 block radius (square)
  - `world_the_end` → 10,000 block radius (square)

- **Custom worlds:**
  - `PlayerInit` → 500 block radius (square)
  - `LegacyLake` → 500 block radius (square)

- **Center:** `(0, 0)` for all worlds
- **Shape:** `square`
- **Wrap:** `none` (players are stopped, not teleported to opposite side)

---

### Border Behavior (`config.yml`)
- `check-interval: 20` — checks every second (20 ticks)
- `message: '&cYou have reached the edge of this world.'` — user feedback
- `use-action-bar: true` — message shown in action bar instead of chat
- `effect: ender_signal` — visual feedback
- `sound: entity_enderman_teleport` — audio feedback

### Movement Restrictions
- `prevent-mob-spawns: true` — mobs cannot spawn outside border
- `prevent-enderpearl: true` — blocks teleport bypass
- `prevent-chorus-fruit: true` — blocks teleport bypass

### Visual Border System
- `visualizer-enabled: true` — shows border visually when nearby
- `visualizer-range: 8` — activates within 8 blocks
- `visualizer-color: 20A0FF` — light blue border

### Map Integration
- Enabled for:
  - `bluemap`
  - `dynmap`
  - `pl3xmap`
  - `squaremap`
- `color: FF0000` — red border on maps
- `label: World Border`
- `hide-by-default: false`

---

## ERRSA Design Intent

!!! note "Why these settings exist"

- **10,000 radius (main worlds):**
  - Large enough for exploration
  - Small enough to prevent infinite chunk generation

- **500 radius (custom worlds):**
  - Keeps controlled environments (tutorials, events)
  - Prevents players escaping designed areas

- **Square shape:**
  - Matches Chunky generation patterns
  - Maximizes usable area vs circle

- **Teleport prevention:**
  - Prevents bypass using:
    - Ender pearls
    - Chorus fruit

- **Visualizer enabled:**
  - Improves player clarity instead of “invisible wall confusion”
---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
