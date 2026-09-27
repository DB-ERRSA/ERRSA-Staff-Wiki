!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# PlaceholderAPI

## Purpose

**Category:** `Infrastructure`  

PlaceholderAPI provides a unified system for dynamic placeholders (e.g., `%player_name%`, `%vault_balance%`) used across plugins like TAB, scoreboards, chat, holograms, and GUIs.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper  
- **Plugins:**
  - Vault (for economy placeholders)
  - Any plugin that uses placeholders (TAB, Holograms, etc.)
- **External services (if any):**
  - PlaceholderAPI eCloud (for downloading expansions)

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/PlaceholderAPI/config.yml`
- `plugins/PlaceholderAPI/expansions/`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `Installed expansions`:
  
  - `luckperms` — used for rank/prefix placeholders (TAB, chat)
  - `player` — used for player stats (ping, name, etc.)
  - `vault` — used for economy placeholders (balance, etc.)
  — minimal expansion set for performance and clarity

- `check_updates`: `true` — keeps expansions and plugin up to date  
- `cloud_enabled`: `true` — allows expansion downloads via eCloud  
- `cloud_sorting`: `name` — easier expansion browsing  

- `debug`: `false` — avoids console spam  

- `boolean.true`: `yes` — cleaner display in UI  
- `boolean.false`: `no` — consistent formatting  

- `date_format`: `MM/dd/yy HH:mm:ss` — standardized timestamp formatting  

- `vault.formatting`:
 
  - `k, M, B, T, Q` — compact economy display for UI  

- `player.ping thresholds`:
   
  - Low: `<50` (green)  
  - Medium: `50–100` (yellow)  
  - High: `100+` (red)  
  — improves readability in TAB/scoreboards  

- `No unnecessary expansions installed` — reduces overhead and avoids conflicts

---

_Last verified: 2026-02-13_  
_Server version: 1.21.4_
