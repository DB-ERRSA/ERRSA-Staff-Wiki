!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# EssentialsX

## Purpose

**Category:** `Core / Economy / Utility`

EssentialsX is the **primary core plugin** on ERRSA MC, handling:

- Player commands (teleport, homes, messaging)
- Economy system (balance, pay, server shop integration)
- Moderation tools (kick, mute, jail)
- Server information (rules, motd, info pages)

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper
- **Plugins:**
  - `Vault` (economy integration)
  - `LuckPerms` (permissions)
  - `EssentialsChat` (chat formatting)


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.

---

### Player permissions
- `essentials.spawn` — teleport to spawn  
- `essentials.home` — set and use homes  
- `essentials.tpa` / `tpaccept` — teleport requests  
- `essentials.msg` — private messaging  
- `essentials.pay` — send money  
- `essentials.balance` — view balance  
- `essentials.rules` — view server rules  
- `essentials.motd` — view MOTD  
- `essentials.info` — view server info  
- `essentials.warp` — use warps  


---

### Mod permissions
- `essentials.kick` — remove players  
- `essentials.mute` — mute players  
- `essentials.tempban` — temporary bans  
- `essentials.jail` — jail players  
- `essentials.socialspy` — monitor messages  
- `essentials.invsee` — view inventories  
- `essentials.near` — find nearby players  
- `essentials.seen` — lookup player activity  


---

### Admin permissions
- `essentials.gamemode` — change gamemode  
- `essentials.fly` — enable flight  
- `essentials.give` — spawn items  
- `essentials.eco` — manage economy  
- `essentials.setspawn` — set spawn  
- `essentials.setwarp` — manage warps  
- `essentials.enchant` — apply enchantments  
- `essentials.item` — spawn items  
- `essentials.exp.*` — manage XP  

---

### Dev permissions
- Full access to all `essentials.*` nodes  
- Used for debugging, economy tuning, and system testing  

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- `/spawn` — return to spawn  
- `/home` — teleport home  
- `/tpa <player>` — request teleport  
- `/pay <player> <amount>` — send money  
- `/bal` — check balance  
- `/rules` — view rules  


---

### Mod commands
- `/kick <player>` — remove player  
- `/mute <player>` — mute player  
- `/jail <player>` — jail player  
- `/invsee <player>` — inspect inventory  

---

### Admin commands
- `/gamemode <mode>` — change gamemode  
- `/fly` — toggle flight  
- `/give <item>` — give items  
- `/eco give/take` — manage economy  
- `/setspawn` — set spawn  

---

### Dev commands
- `/ess reload` — reload config  
- `/eco reset` — reset balances  
- `/setworth` — modify item values  

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/Essentials/config.yml`
- `plugins/Essentials/worth.yml`
- `plugins/Essentials/kits.yml`
- `plugins/Essentials/spawn.yml`
- `plugins/Essentials/tpr.yml`
- `plugins/Essentials/jail.yml`
- `plugins/Essentials/messages/`
- `plugins/Essentials/userdata/`

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"

---

## Economy & Balances

- `starting-balance`: `0` — prevents inflation and enforces participation in the player-driven economy  
- `currency-symbol`: `$` — standard readable currency format  
- `max-money`: `10000000000000` — effectively uncapped economy ceiling  
- `min-money`: `0` — prevents negative balances and debt systems  

---

## Teleportation & Movement

- `teleport-delay`: `3` — prevents combat escape abuse  
- `teleport-invulnerability`: `3` — protects players briefly after teleport  
- `teleport-cooldown`: `0` — allows frequent travel for accessibility  
- `teleport-to-center`: `true` — ensures safe and consistent teleport positioning  
- `tp-accept-cancel-timeout`: `120` — reasonable window for teleport request handling  

---

## Player Interaction & Awareness

- `near-radius`: `200` — balanced visibility range for social awareness  
- `chat.radius`: `0` — global chat enabled for full server communication  

---

## AFK Management

- `auto-afk`: `300` — marks players AFK after 5 minutes  
- `auto-afk-kick`: `900` — removes inactive players after 15 minutes to free slots  

---

## Join / Quit Messaging

- `custom-join-message`: enabled — standardized clean join message  
- `custom-quit-message`: enabled — consistent leave formatting  

---

## World & Player State Management

- `world-change-fly-reset`: `true` — prevents unintended flight carryover between worlds  
- `world-change-speed-reset`: `true` — enforces fair movement speeds across worlds  

- `spawn-on-join`: `false` — preserves player location continuity between sessions  
- `respawn-at-home`: `true` — improves player experience after death  

---

## Economy Shop Behavior

- `allow-bulk-buy-sell`: `true` — improves economy usability and reduces repetitive actions  
- `allow-selling-named-items`: `false` — prevents accidental loss of valuable/custom items  

---

## Warp System

- `per-warp-permission`: `false` — simplifies warp access system for players  

---

## World Protection

- `protect.prevent.creeper-explosion`: `false` — explosions allowed for survival gameplay balance  
- `protect.prevent.tnt-explosion`: `false` — TNT enabled for gameplay mechanics  
- `protect.prevent.enderdragon-blockdamage`: `true` — preserves vanilla boss behavior  

---

## System Behavior
- `update-check`: `false` — prevents unnecessary console/API usage on production server
  
---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
