!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# Core Protect

## Purpose

**Category:** `Moderation`

CoreProtect logs player interactions with the world (block breaks, placements, container access, etc.) so staff can **investigate grief, identify who made changes, and roll back damage** if needed. This tool is by far one of the **most important tools for admins**.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper / Spigot

---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.


### Admin permissions
- `coreprotect.*` — Full access to all CoreProtect commands including rollback, restore, purge, and advanced lookups.



---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Admin commands
- `/co inspect` — Toggle inspection mode. Left/right click blocks to see **who placed or broke them and when**.
- `/co lookup` — View block/container history in the area you are standing.
---
- `/co l r:<radius> t:<time>` — Lookup changes within a radius and time window.
  - Example: `/co l r:5 t:1h` — Shows activity within 5 blocks in the last hour.
---
- `/co l a:<player>` — Shows actions performed by a specific player.
  - Example: `/co l a:Steve t:30m` — Steve’s actions in the last 30 minutes.
---
- `/co l a:container r:<radius> t:<time>` — Shows chest/container transactions nearby.
- `/co rollback <params>` — Roll back changes matching a lookup query.
  - Example: `/co rollback a:Steve t:2h r:10` — Reverts Steve’s changes in a 10 block radius over the last 2 hours.
---
- `/co restore <params>` — Restores a previously rolled-back area.
- `/co status` — Displays database connection and queue status.
- `/co consumer` — Shows logging queue status and processing speed.



## Configuration Files

!!! info "Primary config locations"
- `plugins/CoreProtect/config.yml` — Main configuration controlling logging scope, database settings, and rollback limits.
- `plugins/CoreProtect/database.db` — SQLite database storing all logged player actions (used when MySQL is disabled).
- `plugins/CoreProtect/logs/` — Debug and operational logs for troubleshooting.

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

- `use-mysql: false` — The server uses **SQLite** since the database size and player count are manageable. This avoids unnecessary MySQL infrastructure.
- `default-radius: 10` — Prevents accidental **global rollbacks** when staff forget to specify a radius.
- `max-radius: 100` — Limits rollback scope to prevent large-scale mistakes or server lag from extremely large rollbacks.
- `rollback-items: true` — Ensures **chest and container grief** can be fully reversed.
- `rollback-entities: true` — Allows restoration of **killed mobs or animals** during grief incidents.
- `skip-generic-data: true` — Prevents logging unnecessary environmental events (e.g., zombies burning in daylight) to **reduce database size and log spam**.
- `item-transactions: true` — Enables full tracking of **chest, furnace, and container interactions**, critical for theft investigations.
- `hopper-transactions: true` — Tracks **automated item movement** to detect hopper-based theft or automation abuse.
- `worldedit: true` — Logs WorldEdit changes to ensure **large-scale builds or edits remain traceable and reversible**.
- `player-messages: true` — Chat messages are logged for **moderation investigations if needed**.
- `player-commands: true` — Commands are logged to track potential **exploit attempts or misuse of commands**.
- `player-sessions: true` — Tracks logins/logouts to help correlate activity during incidents.

---

!!! tip
    CoreProtect is the **primary grief investigation tool** on ERRSA MC.  
    Staff should always **inspect first (`/co inspect`) before performing rollbacks**.

## Common Issues & Fixes

### Issue: "Someone destroyed or damaged my build"

**Likely cause:**  
A player broke blocks belonging to another player, violating **Rule [4] — Do not destroy, steal, or damage another player's builds, property, or creations.**

**Fix:**  

1. Run `/co inspect`  
2. Click the destroyed block to identify who broke it.  
3. Confirm the timestamp of the action.  
4. Restore the damage if necessary:

`/co rollback a:<player> r:10 t:2h`

Example:
`/co rollback a:Steve r:10 t:1h`

This restores blocks placed or broken by the player within the radius and time window.

**Escalate if:**

- The grief spans **multiple builds or large areas**  
- The rollback would exceed **r:50**  
- Multiple players are involved

---

### Issue: "Items were stolen from my chest"

**Likely cause:**  
A player accessed a container and removed items, violating **Rule [4] property protections**.

**Fix:**  

1. Look directly at the chest or container.  
2. Run:

`/co l a:container t:24h`

3. Identify the player who removed the items.  
4. Restore the items if needed using a rollback:

`/co rollback a:<player> t:24h`

**Escalate if:**  

- The theft involves **large amounts of valuables**
- The chest belongs to **a community build or server structure**

---

### Issue: "Someone placed blocks inside my build"

**Likely cause:**  
Another player modified the structure (grief, trolling, or unwanted edits).

**Fix:**  

1. Run `/co inspect`  
2. Click the placed blocks to identify the player.  
3. Roll back the block placement:

`/co rollback a:<player> r:10 t:1h`

**Escalate if:**

- The player repeatedly modifies builds after warnings  
- The grief spans multiple locations

---

### Issue: "We can't identify who did the damage"

**Likely cause:**  
The lookup radius or time window is too small.

**Fix:**  
Run a wider lookup:

`/co l r:15 t:12h`

Increase time or radius until the responsible player appears.

**Escalate if:**  

- No logs appear for the changes  
- The damage occurred **several days ago**

---

### Issue: "Rollback removed too much"

**Likely cause:**  
Rollback radius or time range was too large.

**Fix:**  
Restore the changes:

`/co restore a:<player> r:<radius> t:<time>`

Then run a **smaller rollback** with more precise parameters.

**Escalate if:**  

- The rollback affected **multiple players' builds**
- The correct restore parameters are unclear


---

_Last verified: 2026-03-06_  
_Server version: 1.21.4_
