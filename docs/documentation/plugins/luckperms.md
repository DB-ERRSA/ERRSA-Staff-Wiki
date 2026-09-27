!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# LuckPerms

## Purpose

**Category:** `Infrastructure`  

LuckPerms is the **core permission management system** for ERRSA MC. It controls all ranks, roles, and access to commands across the entire server.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper  
- **Plugins:**
  - Vault (for economy/chat integration)
- **External services (if any):**
  - MySQL database (Apex Hosting)

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
This plugin follows the **parallel permission track model**.  
Access is granted by role, not convenience.
 

### Dev permissions
- `luckperms.*` — full backend control  
- `luckperms.sync` — force network sync  
- `luckperms.verbose` — debug permission checks  

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Dev commands
- `/lp user <player> info` — view player permissions  
- `/lp user <player> parent add <group>` — promote  
- `/lp user <player> parent remove <group>` — demote
- `/lp editor` — open web editor  
- `/lp group <group> permission set <node>` — assign permissions  
- `/lp user <player> permission set <node>` — direct permission assignment  
- `/lp sync` — sync permissions across servers  
- `/lp verbose` — debug permission checks  
- `/lp networksync` — force database sync  

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/LuckPerms/config.yml`
- `plugins/LuckPerms/contexts.json`
- `plugins/LuckPerms/editor-keystore.json`
- `plugins/LuckPerms/luckperms-h2-v2.mv.db` *(fallback/local DB)*

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `server`: `survival` — enables server-specific permission contexts  
- `storage-method`: `mysql` — centralized permission storage across servers  
- `database`: Apex-hosted MySQL — shared across network for consistency  

- `messaging-service`: `auto` — enables automatic sync (SQL-based likely)  
- `sync-minutes`: `-1` — disables polling (rely on messaging instead)  

- `auto-push-updates`: `true` — instant propagation of permission changes  

- `primary-group-calculation`: `parents-by-weight` — ranks determined by weight system  

- `meta-formatting.prefix`:  
  - Tracks: `staff`, `errsa`, `main` — structured rank display system  

- `apply-wildcards`: `true` — allows wildcard permissions like `essentials.*`  

- `enable-ops`: `true` — OP system still active (not replaced by LP auto-op)  
- `auto-op`: `false` — OP not tied to permissions system  

- `apply-bukkit-permissions`: `true` — ensures plugin compatibility  

---

## Common Issues & Fixes


### Issue: Player has wrong rank or no permissions

**Likely cause:**  
- Incorrect group assignment  
- Context mismatch (server/world)

**Fix:**  
- Check `/lp user <player> info`  
- Verify group inheritance  

**Escalate if:**  
- Data not saving to MySQL  

---

### Issue: Web editor changes not applying

**Likely cause:**  
- Sync not triggered  

**Fix:**  
- Click **Apply Changes** in editor  
- Run `/lp sync`  

**Escalate if:**  
- Editor fails to generate link  


---

_Last verified: 2026-02-13_  
_Server version: 1.21.4_
