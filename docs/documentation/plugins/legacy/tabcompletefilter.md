!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# TABCompleteFilter

## Purpose

**Category:** `Moderation`  

TABCompleteFilter controls which commands appear in tab-complete for players, helping reduce clutter and prevent exposure of sensitive or admin-only commands.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper  
- **Plugins:**
  - *(None required — integrates with all commands automatically)*
- **External services (if any):**
  - None

---


## Configuration Files

!!! info "Primary config locations"
- `plugins/TABCompleteFilter/config.yml`
- `plugins/TABCompleteFilter/args.yml`
- `plugins/TABCompleteFilter/lang.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `op-player-filter-bypass`: `false` — OP players are still filtered (forces proper permission structure) 

- `groups.default`: **Extensive curated command whitelist** — only approved commands appear in tab-complete
  - Includes essentials commands (`/spawn`, `/home`, `/warp`, etc.)  
  - Includes moderation commands (`/report`, `/feedback`)  
  - Includes claim + gameplay commands  

- `Command visibility is whitelist-based` — commands not listed are hidden from players  

- `custom-args.enabled`: `true` — enables controlled tab suggestions
  - `/warp` → suggests `spawn`, `tutorial`, `legacy-lake`  
  - `/help` → limited predefined suggestions  

- `Permission-based command visibility` — players must still have actual command permission even if shown  

- `lang.yml customized` — consistent formatting and messaging prefix (`&6&lTCF`) 

---



_Last verified: 2026-03-20_  
_Server version: 1.21.4_
