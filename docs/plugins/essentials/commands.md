---
title: Essentials commands and permissions
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← Essentials overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/spawn` — return to spawn
- `/home` — teleport home
- `/tpa <player>` — request teleport
- `/pay <player> <amount>` — send money
- `/bal` — check balance
- `/rules` — view rules
- `/kick <player>` — remove player
- `/mute <player>` — mute player
- `/jail <player>` — jail player
- `/invsee <player>` — inspect inventory
- `/gamemode <mode>` — change gamemode
- `/fly` — toggle flight
- `/give <item>` — give items
- `/eco give/take` — manage economy
- `/setspawn` — set spawn
- `/ess reload` — reload config
- `/eco reset` — reset balances
- `/setworth` — modify item values

## Direct staff group nodes

| Group | Node | Value | Scope |
|:--|:--|:--|:--|
| `mod` | `essentials.togglejail` | grant | global |
| `mod` | `essentials.getpos.others` | grant | global |
| `mod` | `essentials.whois.ip` | grant | global |
| `mod` | `essentials.banip.notify` | grant | global |
| `mod` | `essentials.balance.others` | grant | global |
| `mod` | `essentials.invsee.equip` | grant | global |
| `mod` | `essentials.seen.whitelist` | grant | global |
| `mod` | `essentials.ban` | deny | global |
| `mod` | `essentials.mute.exempt` | grant | global |
| `mod` | `essentials.seen.alts` | grant | global |
| `mod` | `essentials.jails` | grant | global |
| `mod` | `essentials.gc` | grant | global |
| `mod` | `essentials.tempban.exempt` | grant | global |
| `mod` | `essentials.near.others` | grant | global |
| `mod` | `essentials.seen.location` | grant | global |
| `mod` | `essentials.mute.notify` | grant | global |
| `mod` | `essentials.chat.ignoreexempt` | grant | global |
| `mod` | `essentials.kick.exempt` | grant | global |
| `mod` | `essentials.unban` | grant | global |
| `mod` | `essentials.joinfullserver` | grant | global |
| `mod` | `essentials.kick.notify` | grant | global |
| `mod` | `essentials.kickall` | deny | global |
| `mod` | `essentials.ban.exempt` | deny | global |
| `mod` | `essentials.seen.banreason` | grant | global |
| `mod` | `essentials.tempban` | grant | global |
| `mod` | `essentials.ban.offline` | grant | global |
| `mod` | `essentials.mute.offline` | grant | global |
| `mod` | `essentials.afk.kickexempt` | grant | global |
| `mod` | `essentials.jump` | grant | global |
| `mod` | `essentials.kickall.exempt` | grant | global |
| `mod` | `essentials.version` | grant | global |
| `mod` | `essentials.helpop.receive` | grant | global |
| `mod` | `essentials.mute` | grant | global |
| `mod` | `essentials.seen.uuid` | grant | global |
| `mod` | `essentials.balancetop.force` | grant | global |
| `mod` | `essentials.playtime.others` | grant | global |
| `mod` | `essentials.socialspy` | grant | global |
| `mod` | `essentials.whois` | grant | global |
| `mod` | `essentials.list.hidden` | grant | global |
| `mod` | `essentials.invsee` | grant | global |
| `mod` | `essentials.togglejail.offline` | grant | global |
| `mod` | `essentials.ban.notify` | grant | global |
| `mod` | `essentials.near` | grant | global |
| `mod` | `essentials.kick` | grant | global |
| `mod` | `essentials.chat.color` | grant | global |
| `mod` | `essentials.seen.extra` | grant | global |
| `admin` | `essentials.exp.give` | grant | global |
| `admin` | `essentials.skull.modify` | grant | global |
| `admin` | `essentials.sudo` | grant | global |
| `admin` | `essentials.exp.others` | grant | global |
| `admin` | `essentials.gamemode` | grant | global |
| `admin` | `essentials.mute.unlimited` | grant | global |
| `admin` | `essentials.editsign.unlimited` | grant | global |
| `admin` | `essentials.exp` | grant | global |
| `admin` | `essentials.updatecheck` | grant | global |
| `admin` | `essentials.break.bedrock` | grant | global |
| `admin` | `essentials.enderchest.modify` | grant | global |
| `admin` | `essentials.essentials` | grant | global |
| `admin` | `essentials.afk.others` | grant | global |
| `admin` | `essentials.gamemode.all` | grant | global |
| `admin` | `essentials.chat.spy.exempt` | grant | global |
| `admin` | `essentials.fly` | grant | global |
| `admin` | `essentials.god` | grant | global |
| `admin` | `essentials.potions.[potionName]` | grant | global |
| `admin` | `essentials.exp.give.others` | grant | global |
| `admin` | `essentials.signs.trade.override` | grant | global |
| `admin` | `essentials.speed` | grant | global |
| `admin` | `essentials.editsign` | grant | global |
| `admin` | `essentials.chat.spy` | grant | global |
| `admin` | `essentials.spawner.delay` | grant | global |
| `admin` | `essentials.eco` | grant | global |
| `admin` | `essentials.skull.others` | grant | global |
| `admin` | `essentials.skull.spawn` | grant | global |
| `admin` | `essentials.exp.set.others` | grant | global |
| `admin` | `essentials.item` | grant | global |
| `admin` | `essentials.spawnmob` | grant | global |
| `admin` | `essentials.break` | grant | global |
| `admin` | `essentials.vanish` | grant | global |
| `admin` | `essentials.itemspawn.exempt` | grant | global |
| `admin` | `essentials.chat.receive.shout` | grant | global |
| `admin` | `essentials.remove` | grant | global |
| `admin` | `essentials.near.maxexempt` | grant | global |
| `admin` | `essentials.invsee.modify` | grant | global |
| `admin` | `essentials.powertool` | grant | global |
| `admin` | `essentials.ban` | grant | global |
| `admin` | `essentials.spawnmob.*` | grant | global |
| `admin` | `essentials.socialspy` | grant | global |
| `admin` | `essentials.spawner` | grant | global |
| `admin` | `essentials.gamemode.others` | grant | global |
| `admin` | `essentials.give` | grant | global |
| `admin` | `essentials.exp.set` | grant | global |
| `admin` | `essentials.potion.apply` | grant | global |
| `admin` | `essentials.invsee` | grant | global |
| `admin` | `essentials.spawner.*` | grant | global |
| `admin` | `essentials.powertooltoggle` | grant | global |
| `admin` | `essentials.enchant` | grant | global |
| `admin` | `essentials.world` | grant | global |
| `admin` | `essentials.enchantments.allowunsafe` | grant | global |
| `admin` | `essentials.signs.protection.override` | grant | global |
| `admin` | `essentials.signs.trade.override.collect` | grant | global |
| `admin` | `essentials.skull` | grant | global |

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../staff-permissions.md) and live LuckPerms contexts before changing access.
