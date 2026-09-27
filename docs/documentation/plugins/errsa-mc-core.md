!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# ERRSA-MC-Core

## Purpose

   **Category:** `Gameplay` 

   ERRSA-MC-Core is our in-house, all-in-one, plugin that provides essential server commands players actually use: selling diamonds for money, quick links to Discord/feedback/report forms, a tutorial warp command, and a reset schedule command.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot - `api-version: 1.21`
- **Plugins:**
  - `Vault`
  - `EssentialsX`


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

### Unregistered player permissions 
- `errsamccore.discord` — allows viewing the Discord invite link

### Player permissions
- `errsamccore.feedback` — allows viewing the feedback form link
- `errsamccore.report` — allows viewing the report form link
- `errsamccore.resetschedule` — allows seeing next planned reset date
- `errsamccore.sell` — allows selling diamonds for in-game money
- `errsamccore.tutorial` — warps user to the tutorial area


---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Unregistered player commands
- `/discord` — allows viewing the Discord invite link
### Player commands
- `/feedback` — allows viewing the feedback form link
- `/report` — allows viewing the report form link
- `/resetschedule` — allows seeing next planned reset date
- `/sell` — allows selling diamonds for in-game money
- `/tutorial` — warps user to the tutorial area


---

## Configuration Files

!!! info "Primary config locations"
- `plugins/errsa-mc-core/config.yml`



---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `<Setting>`: `<value>` — reason
- `<Setting>`: `<value>` — reason
- `<Feature disabled>` — why we disable it

- `sell-price`: `50.0` — sell price of diamonds
- `discord-link`: `https://discord.com/invite/XvKYDe3pGX` — ERRSA discord invite link
- `feedback-link`: `https://forms.fillout.com/t/s2oKYJtMGDus` — Fillout form link to collect server feedback
- `report-link`: `https://forms.fillout.com/t/eRqvr1KnD4us` — Fillout form link to collect server reports
- `tutorial`:    — Coordinates, rotation, world, and delay time
  `x: -53.5
  y: -35
  z: 3.5
  yaw: -180.0
  pitch: 0.0
  world: "world"
  delay-seconds: 3`
- `reset-schedule`:    — Note the date and cycle are strings, any format can be typed such as "xx/xx/xxxx" or "August of 20XX"
  `reset_date: "August 2028"
  reset_cycle: "3"`
  

This section documents **intentional deviations from plugin defaults**.

---

## Common Issues & Fixes

### Issue: Bedrock players can’t click links (Discord/Feedback/Report).
**Likely cause:** Expected behavior-Bedrock is given plain text links by design.

**Fix:** Tell Bedrock players to copy/paste the link into a browser; keep links short and stable.

**Escalate if:** Java players also lose clickability-check chat formatting plugins that might strip click events.



---

_Last verified: 2026-02-13_  
_Server version: 1.21.4_
