!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# TAB

## Purpose

**Category:** `Cosmetics`  

TAB manages the tablist, nametags, prefixes, header/footer, and player sorting to display ranks and server information cleanly on ERRSA MC.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper
- **Plugins:**
  - `LuckPerms` (for prefixes/suffixes)
  - `PlaceholderAPI` (for dynamic placeholders)

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Player permissions
- None — formatting is automatic

### Mod permissions
- `tab.staff` — used for staff grouping 
- `tab.seevanished` — see players in tab that are /vanished

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/TAB/config.yml`
- `plugins/TAB/groups.yml`
- `plugins/TAB/users.yml`
- `plugins/TAB/animations.yml`
- `plugins/TAB/messages.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

### Rank Integration
- Uses LuckPerms for prefixes/suffixes:  
  `%luckperms-prefix%` and `%luckperms-suffix%` 

---

### Header & Footer
- Custom branded header:
  - ERAU + ERRSA branding
  - Player welcome message
  - Online player + staff count 

---

### Sorting System
- Custom group priority order:
  - `dev → admin → mod → advisor → execboard → execcoord → hallrep → legacy → premium → errsa → user → default` 

---

### Nametags & Tablist
- `scoreboard-teams.enabled: true` — enables nametags  
- `enable-collision: true` — collision control active  
- `anti-override: true` — prevents other plugins from overriding formatting 

---

### Playerlist Features
- `playerlist-objective.enabled: true` — shows ping in tablist  
- Fancy display: `"Ping: %ping%"` 

---

### Disabled Features
- Scoreboard: disabled  
- Bossbar: disabled  
- Layout system: disabled  

---

### Animations
- Custom animations for:
  - Header/footer effects  
  - Website display (`campusgroups.erau.edu/errsa`)  
  - Time/date rotation 

---

### User Customization
- Example:
  - Verified users receive suffix `"&b&lVerified"`

---

This section documents **intentional deviations from plugin defaults**.

---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
