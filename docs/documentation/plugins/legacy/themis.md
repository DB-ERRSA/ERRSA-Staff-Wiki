!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Themis

## Purpose

**Category:** Moderation  

Themis is an **anti-cheat plugin** that detects and prevents common hacks such as fly, speed, reach, and combat cheats. On ERRSA MC it helps staff maintain fair gameplay by **automatically flagging suspicious behavior for review**.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot
 
---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.


### Mod permissions
- `themis.notifications` — Receive anti-cheat detection alerts for suspicious player behavior.

### Admin permissions
- `themis.bypass` — Bypass all Themis checks.
- `themis.command.base` — Use `/themis` to confirm the plugin is running and view version info.
- `themis.command.help` — Use `/themis help`.
- `themis.command.info` — Use `/themis info <player>` to review a player’s violation information.
- `themis.command.reload` — Use `/themis reload` to apply config changes.
- `themis.technical` — Receive technical notifications such as update or problem notices.

### Dev permissions
- `themis.bypass` — Full anti-cheat bypass for controlled testing.
- `themis.command.base` — Access base status command.
- `themis.command.help` — Access help output.
- `themis.command.info` — Review player violation data during debugging.
- `themis.command.reload` — Reload configuration during maintenance.
- `themis.technical` — Receive technical/debug notices.
- `themis.silent` — Make checks silent for testing so detections do not actively block.
- `themis.silent.<checkName>` — Make a specific check silent during troubleshooting.
- `themis.bypass.<checkName>` — Bypass a specific check for targeted testing.

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Mod commands
- `/themis notifications on` — Enable anti-cheat alerts.
- `/themis notifications off` — Disable anti-cheat alerts.
- `/themis notifications` — Check current anti-cheat notification status.

### Admin commands
- `/themis` — Confirm Themis is running and view installed version.
- `/themis help` — List available Themis commands and descriptions.
- `/themis info <player>` — View a player’s violation scores and anti-cheat information.
- `/themis reload` — Reload Themis configuration after config changes.

### Dev commands
- `/themis` — Verify plugin status/version during maintenance.
- `/themis help` — Review available command set.
- `/themis info <player>` — Inspect violations while debugging detections or false positives.
- `/themis reload` — Reload configuration safely after edits.

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Themis/config.yml` — Main anti-cheat configuration file controlling default detection behavior, thresholds, actions, and per-check overrides.
- `plugins/Themis/` — Plugin folder containing the active config and any generated plugin files.
- `plugins/Themis/logs/` *(if present)* — Used for troubleshooting or plugin-specific diagnostic output.

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `default.enable: true` — All standard Themis checks are enabled by default so common movement and combat cheats are actively monitored.

- `default.block: true` — Themis is configured to actively **block** cheats, not just log them. This helps stop obvious unfair gameplay immediately.

- `default.block-threshold: 10.0` — Blocking begins once a player reaches a moderate violation score, helping reduce instant punishment from single anomalous movements.

- `default.actions.notify.execution-threshold: 10.0` — Staff notifications begin once behavior is sufficiently suspicious to matter operationally.

- `default.actions.notify.repetition-threshold: 5.0` — Repeat alerts require additional violations so staff are not flooded by identical spam.

- `default.actions.notify.repetition-delay: 10.0` — Notifications are throttled to avoid excessive anti-cheat alert noise during continuous detections.

- `default.actions.notify.commands`:
  - `themis notify §5[Themis] §4%player_name% §cwas flagged for §4%detection_type% §chacks!\n§c[Score: §4%score% §c| Ping: §4%ping% §c| TPS: §4%tps%§c]`  
  — Sends formatted alert messages to staff with relevant investigation context.

- `default.bedrock-only: false` — Themis checks all supported players rather than only Bedrock clients.

- `default.max-ping: -1.0` — No ping cutoff is used. High-ping players are still checked, preventing simple ping-based bypasses.

- `default.min-tps: -1.0` — Checks remain active regardless of server TPS. This maximizes coverage, though staff should interpret alerts carefully during lag.

- `default.violation-expiration: 900.0` — Violations expire after 15 minutes, allowing suspicious behavior to decay over time instead of permanently stacking through normal play.

- `boat_movement: {}` — Uses default behavior for boat-related movement cheats such as BoatFly or BoatSpeed.

- `elytra_flight: {}` — Uses default behavior for Elytra-related movement exploits.

- `horizontal_movement: {}` — Uses default behavior for standard speed and movement checks.

- `illegal_packets: {}` — Uses default behavior for impossible or malformed packet detection.

- `packet_spoof: {}` — Uses default behavior for spoofed packet checks tied to movement exploits like NoFall or Jesus.

- `reach: {}` — Uses default behavior for combat reach detection.

- `tickrate: {}` — Uses default behavior for timer/blink style cheats.

- `vertical_movement: {}` — Uses default behavior for flight, glide, high-jump, and vertical movement checks.

This section documents **intentional deviations from plugin defaults**.

---

## Common Issues & Fixes

### Issue: "Themis keeps flagging a player, but they might just be lagging"

**Likely cause:**  
High ping, packet loss, or temporary server lag is causing movement or combat behavior that looks suspicious to the anti-cheat.

**Fix:**  
1. Check the alert details shown in the notification, especially **ping** and **TPS**.  
2. Watch the player directly before taking action.  
3. Use `/themis info <player>` to see whether violations are isolated or continuing to build.  
4. Treat single or inconsistent flags as **watchlist behavior**, not immediate proof of cheating.

**Escalate if:**  
- The player is repeatedly flagged across multiple check types  
- Flags continue even when server performance looks normal  
- Staff are unsure whether the behavior is cheat-related or a false positive

---




---

_Last verified: 2026-03-06_  
_Server version: 1.21.4_
