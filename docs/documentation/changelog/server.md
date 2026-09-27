---
hide:
  - navigation
  - toc
---

# Server changelog

Read the latest documented server releases below. Staff can update this page using the [editor](#edit-changelog) at the end.

## Version 1.3.2 - Released 9/9/2026

### Tweaks and Changes

- Added an auto-updater for geyser, floodgate, and via-version to proxy, and for floodgate on paper
- Fixed various minor bugs with guilds and quests

## Version 1.3.1 - Released 8/31/2026

### Tweaks and Changes

- Bedrock players can now see blocks placed on the nether roof
- Fixed tab menu to properly sort by rank
- Added tab-complete for a few commands that were missing
- Fixed rank progression trying to access rank info for index –1, causing console errors
- Fixed issue with guild creation menu where GUI items were obtainable
- Fixed various minor bugs with guilds and quests

## Version 1.3.0 - Released 8/28/2026

### Major Additions

- Added custom player level plugin that grants titles and rewards for playtime on the server.
- Added /progression, /pt, /pt top, /syncrankprogression, and /exportplaytimedata
- Added guild system and guild hall
- Added /guilds
- Added creative plot world
- Added player quests
- Created online world map
- Created a new server website
- Added banner builder
- Added token shop system for custom heads, maps and music
- Added new East and West wing to tutorial dojo

### Minor Additions

- Added “Server Lead” role for the MC committee lead (same permissions as Dev)
- Migrated Maintenance plugin to proxy from survival server
- Overhaled ERRSA Core to V2
- Added /map, /website, and /menu
- Added portal to and from guild hall
- Finished rank implementation of VIP
- Still not setup on Apex purchasing end

### Tweaks and Changes

- Added TAB sorting for new player ranks to display in correct order
- Updated all Luck Perm rank weights to add more spacing between tracks and clearer ordering
- Added all new commands to tab-complete
- Added 8 new broadcast messages

## Version 1.2.1 - Released 5/11/2026

- Update Geyser plugin (Velocity & Proxy) to allow v.26.0
- Fixed Playerinit bug that assigned an additional default role (server: Survival) and skip user promotion

## Version 1.2.0 - Released 1/31/2026

- Bought 2 additional servers and a proxy to connect them
- Added the ability to allow shulkers to travel into the Overworld - [ShulkerReroute]
- Made solution that automatically unlocks loot drops from players who died in a pvp battle rather than needing `/unlockdrops` from victims - [AutoUnlockPVPDrops]
- Fixed the maitenance ‘can’t access maintenance.png’ bug - [Maintenance]
- Changed the cost of `/warp` from $50 to $0 - [WarpGUI]
- Changed the cost of `/sethoome` from $250 to $0 - [WarpGUI]
- Changed admin warp cooldown from 300 seconds to 0 seconds - [WarpGUI]
- Added `/bypasstpcooldown` - ability to bypass warp cooldown for $15 - [WarpGUI]
- Added velocity to proxy and connected all 3 servers - [Velocity]
- Moved LuckPerms database to SQL to connect server - [LuckPerms]
- Created Github developer page
- Added ShulkerReroute and AutoUnlockPVPDrops plugin file structure to ERRSA Github

## Version 1.1.3 - Released 9/26/2025

- Fixed the bug which would spam chat with welcome messages. - [PlayerInit]

## Version 1.1.2 - Released 9/19/2025

- Enabled TNT dupers - [Paper]

## Version 1.1.1 - Released 9/5/2025

- Changed the cost of ‘/warp’ from $100 to $50 – [WarpGUI]
- Added Bedrock support for ‘/report’ and ‘/feedback’ - [ERRSA-MC-Core]
- Re-added SkBee plugin to fix portal skript issues
- Added World Guard Flags plugin for LegacyLake floating effect

## Version 1.1.0 - Released 9/1/2025

- Changed the cost of ‘/home’ from $50 to $0 – [WarpGUI]
- Updated CoreProtect from v22.4 to v23.0 – [CoreProtect]
- Updated Maintenance MOTD from server release message to “Closed for Maintenance” – [Maintenance]
- Enabled the buying of stacks in shops - [QuickShop-Hikari]
- Allowed Piston movement outside of claims – [GriefPrevention]
- Added Simple Voice Chat Plugin – [VoiceChat]

## Version 1.0.0 - Released 8/29/2025

- Initial server release
- Yippie!!

## Edit changelog

Authorized staff can save changes to the wiki repository. Wait about 30 seconds before refreshing page to see changes.

<!-- WIKI_EDITOR -->
