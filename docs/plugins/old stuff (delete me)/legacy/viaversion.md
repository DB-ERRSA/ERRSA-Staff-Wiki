!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# ViaVersion

## Purpose

**Category:** `Infrastructure`  

ViaVersion allows players using different Minecraft versions to join the server by translating network packets between client and server versions.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper  
- **Plugins:**
  
  - *(None required — standalone compatibility layer)*
- **External services (if any):**
  
  - None

---


## Configuration Files

!!! info "Primary config locations"
- `plugins/ViaVersion/config.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `check-for-updates`: `true` — ensures compatibility patches are applied regularly 

- `block-versions`: `[]` — all Minecraft versions allowed to join

- `blockconnection-method`: `packet` — stable and safe block connection handling
- `serverside-blockconnections`: `true` — ensures consistent visuals across versions

- `shield-blocking`: `true` — enables combat compatibility for newer clients  

- `armor-toggle-fix`: `true` — prevents desync when swapping armor   

- `fix-1_21-placement-rotation`: `true` — fixes block placement issues for newer clients 

- `packet-limiter.enabled`: `true` — protects against packet spam / exploits
  - `max-per-second`: `800`  
  - `sustained-max-per-second`: `200`  

- `prevent-collision`: `true` — prevents version-based collision bugs 

- `simulate-pt`: `true` — fixes eating, portals, and movement inconsistencies

- `enforce-secure-chat`: `false` — avoids chat disconnect issues on mixed versions 

---

## Common Issues & Fixes

### Issue: Players get kicked for unsupported version

**Likely cause:**  

- Version blocked in config  

**Fix:**  

- Check `block-versions` and `block-protocols`  

**Escalate if:**  

- Players on common versions (1.20+) are blocked  

---

### Issue: Visual bugs (blocks, hitboxes, shields)

**Likely cause:** 

- Version translation mismatch  

**Fix:**  

- Verify:
  
  - `serverside-blockconnections = true`
  - `shield-blocking = true`  

**Escalate if:**  

- Issues persist across all players  

---

### Issue: Players kicked for packet spam

**Likely cause:**  

- Packet limiter triggered  

**Fix:**  

- Adjust:
  
  - `max-per-second`
  - `sustained-max-per-second`  

**Escalate if:**  

- Legit players are consistently kicked  

---


_Last verified: 2026-03-20_  
_Server version: 1.21.4_
