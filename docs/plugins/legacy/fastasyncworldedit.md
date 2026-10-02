!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# FastAsyncWorldEdit (FAWE)

## Purpose

**Category:** `Infrastructure`

FastAsyncWorldEdit (FAWE) is the high-performance world editing engine used on ERRSA MC for large terrain edits, schematic work, mass block operations, undo history, and builder tooling. It replaces standard WorldEdit behavior with faster, safer, and more scalable editing for development and event map work.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
- **Plugins:**
  - `FastAsyncWorldEdit`
- **External services (if any):**
  - Optional schematic web backend used by FAWE
  - Optional region plugins for edit restrictions (such as WorldGuard-compatible region systems)

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.



### Dev permissions
- Access is restricted operationally:
  - OP status
  - Console
  - Trusted builders / developers only

!!! warning
    FAWE is a high-impact administrative build tool.  
    It should never be available to normal players or general staff.

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Dev commands
- Full FAWE / WorldEdit command suite for trusted build and infrastructure work
- `//wand` — get selection wand
- `//pos1` / `//pos2` — set selection points
- `//set <block>` — fill selection
- `//replace <from> <to>` — replace blocks
- `//copy` — copy selection
- `//paste` — paste clipboard
- `//undo` — undo last edit
- `//redo` — redo last undone edit
- `//schem save <name>` — save schematic
- `//schem load <name>` — load schematic
- `//rotate <degrees>` — rotate clipboard
- `//stack <count>` — repeat selection
- `//move <distance>` — move selection
- `//smooth` — smooth terrain
- `//regen` — regenerate area
- `/wea` — bypass some FAWE restrictions if authorized
  
---

## Configuration Files

!!! info "Primary config locations"
- `plugins/FastAsyncWorldEdit/config.yml`
- `plugins/FastAsyncWorldEdit/worldedit-config.yml`

### Supporting directories
- `plugins/FastAsyncWorldEdit/clipboard/`
- `plugins/FastAsyncWorldEdit/history/`
- `plugins/FastAsyncWorldEdit/lang/`
- `plugins/FastAsyncWorldEdit/schematics/`
- `plugins/FastAsyncWorldEdit/sessions/`

### Directory roles
- `clipboard/` — stored clipboards
- `history/` — undo/redo history on disk
- `lang/` — language resources
- `schematics/` — saved schematics
- `sessions/` — player editing session data

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

### Core safety and restriction behavior
- `region-restrictions: true` — edits are restricted by supported region systems
- `max-memory-percent: 95` — FAWE cancels non-admin edits if memory usage gets too high
- `restrict-to-safe-range: true` — prevents edits outside safe world bounds
- `region-restrictions-options.mode: MEMBER` — region members may edit where supported
- `restrict-history-to-regions: true` — undo/redo stays region-safe

### Clipboard handling
- `clipboard.use-disk: true` — clipboards are stored on disk instead of memory
- `clipboard.compression-level: 1` — light compression for stored clipboards
- `clipboard.delete-after-days: 1` — old clipboards are cleaned quickly
- `clipboard.delete-on-logout: false` — clipboard persists through logout
- `clipboard.save-clipboard-nbt-to-disk: true` — NBT is preserved in stored clipboards

### Lighting behavior
- `lighting.delay-packet-sending: true` — waits for relight before packet send
- `lighting.async: true` — asynchronous lighting
- `lighting.mode: 1` — optimal relighting mode
- `lighting.remove-first: true` — existing lighting cleared before relight

### Queue / performance settings
- `parallel-threads: 6` — FAWE uses 6 parallel threads
- `target-size: 48` — placement begins before full calculation at large scale
- `extra-time-ms: 0` — balanced default queue timing
- `preload-chunk-count: 512` — chunks are heavily preloaded for edit performance
- `pool: true` — memory pooling enabled for better performance

### History settings
- `history.use-disk: true` — history is written to disk
- `history.use-database: true` — summaries stored for rollback/inspection support
- `history.combine-stages: true` — faster history recording
- `history.send-before-history: true` — edits can send before disk write completes
- `history.compression-level: 3` — moderate compression
- `history.delete-after-days: 7` — history kept for one week
- `history.delete-on-logout: true` — in-memory history cleared on logout
- `history.delete-disk-on-logout: false` — disk history persists
- `history.enable-for-console: true` — console edits still tracked
- `history.store-redo: true` — redo is enabled

### General editing limits
Under `limits.default`:

- `max-actions: 1`
- `max-changes: 50000000`
- `max-checks: 50000000`
- `max-fails: 50000000`
- `max-iterations: 1000`
- `max-entities: 1337`
- `max-radius: -1`
- `max-super-pickaxe-size: 5`
- `max-brush-radius: 100`
- `max-blockstates: 1337`
- `confirm-large: true`
- `fast-placement: true`
- `inventory-mode: 0`
- `universal-disallowed-blocks: true`

### Disallowed blocks
The following blocks are intentionally disallowed in edits:

- `minecraft:wheat`
- `minecraft:fire`
- `minecraft:redstone_wire`

These are present in both:

- `config.yml`
- `worldedit-config.yml`

### WorldEdit compatibility settings
From `worldedit-config.yml`:

- `use-inventory.enable: false`
- `logging.log-commands: false`
- `history.size: 15`
- `history.expiration: 10`
- `wand-item: minecraft:wooden_axe`
- `navigation-wand.item: minecraft:compass`
- `server-side-cui: true`
- `no-op-permissions: false`
- `show-help-on-first-use: true`

This section documents **intentional deviations from plugin defaults**.

---

## ERRSA Design Intent

!!! note "Why these settings exist"

- FAWE is configured for **large but controlled edits**
- Disk-backed clipboard and history reduce RAM pressure
- Region restrictions help prevent editing outside approved areas
- Undo/redo persistence gives builders recovery options
- Block restrictions help prevent accidental placement of problematic blocks
- Large edits require confirmation to reduce catastrophic mistakes

### Operational philosophy
- Fast enough for serious event/world work
- Safe enough to avoid accidental server-wide damage
- Persistent enough to recover from mistakes

---


_Last verified: 2026-03-20_  
_Server version: 1.21.4_
