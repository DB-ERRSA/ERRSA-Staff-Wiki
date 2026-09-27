# Staff permissions

Snapshot from the supplied LuckPerms group export, September 26, 2026. Group nodes and inheritance are shown as configured; individual user overrides are excluded. Tracks describe order, while `group.*` nodes determine actual inheritance.

| Group | Inherits | Direct positive nodes | Direct denied nodes |
|---|---|---:|---:|
| `mod` | `premperm`, `user` | 55 | 3 |
| `admin` | `mod` | 96 | 0 |
| `dev` | `admin` | 1 | 0 |
| `server-lead` | `dev` | 0 | 0 |

## Direct group assignments

These entries are raw LuckPerms nodes. A grant may also depend on plugin configuration, context, world, server, and user overrides.

### mod

| Node | Value | Scope |
|---|---|---|
| `tcf.mod` | grant | global |
| `essentials.togglejail` | grant | global |
| `essentials.getpos.others` | grant | global |
| `essentials.whois.ip` | grant | global |
| `essentials.banip.notify` | grant | global |
| `essentials.balance.others` | grant | global |
| `essentials.invsee.equip` | grant | global |
| `maintenance.bypass` | grant | global |
| `themis.notifications` | grant | global |
| `griefprevention.seeinactivity` | grant | global |
| `essentials.seen.whitelist` | grant | global |
| `essentials.ban` | deny | global |
| `essentials.mute.exempt` | grant | global |
| `essentials.seen.alts` | grant | global |
| `essentials.jails` | grant | global |
| `essentials.gc` | grant | global |
| `essentials.tempban.exempt` | grant | global |
| `essentials.near.others` | grant | global |
| `grim.alerts` | grant | global |
| `essentials.seen.location` | grant | global |
| `essentials.mute.notify` | grant | global |
| `essentials.chat.ignoreexempt` | grant | global |
| `essentials.kick.exempt` | grant | global |
| `group.premperm` | grant | global |
| `quickshop.alerts` | grant | global |
| `essentials.unban` | grant | global |
| `essentials.joinfullserver` | grant | global |
| `essentials.kick.notify` | grant | global |
| `essentials.kickall` | deny | global |
| `essentials.ban.exempt` | deny | global |
| `chatfilter.view` | grant | global |
| `essentials.seen.banreason` | grant | global |
| `tab.staff` | grant | global |
| `essentials.tempban` | grant | global |
| `essentials.ban.offline` | grant | global |
| `essentials.mute.offline` | grant | global |
| `tab.seevanished` | grant | global |
| `essentials.afk.kickexempt` | grant | global |
| `essentials.jump` | grant | global |
| `essentials.kickall.exempt` | grant | global |
| `essentials.version` | grant | global |
| `essentials.helpop.receive` | grant | global |
| `essentials.mute` | grant | global |
| `essentials.seen.uuid` | grant | global |
| `essentials.balancetop.force` | grant | global |
| `group.user` | grant | global |
| `essentials.playtime.others` | grant | global |
| `essentials.socialspy` | grant | global |
| `essentials.whois` | grant | global |
| `essentials.list.hidden` | grant | global |
| `essentials.invsee` | grant | global |
| `essentials.togglejail.offline` | grant | global |
| `griefprevention.notignorable` | grant | global |
| `essentials.ban.notify` | grant | global |
| `essentials.near` | grant | global |
| `essentials.kick` | grant | global |
| `essentials.chat.color` | grant | global |
| `essentials.seen.extra` | grant | global |
| `tcf.default` | grant | global |
| `warpgui.homes.admin` | grant | global |

### admin

| Node | Value | Scope |
|---|---|---|
| `essentials.exp.give` | grant | global |
| `essentials.skull.modify` | grant | global |
| `essentials.sudo` | grant | global |
| `essentials.exp.others` | grant | global |
| `wildernesstp.command.setup` | grant | global |
| `silkspawners.command.locale` | grant | global |
| `essentials.gamemode` | grant | global |
| `pvptoggle.pvp.others` | grant | global |
| `coreprotect.*` | grant | global |
| `essentials.mute.unlimited` | grant | global |
| `wildernesstp.bypass.limit` | grant | global |
| `essentials.editsign.unlimited` | grant | global |
| `essentials.exp` | grant | global |
| `essentials.updatecheck` | grant | global |
| `wildernesstp.command.create` | grant | global |
| `themis.command.help` | grant | global |
| `essentials.break.bedrock` | grant | global |
| `essentials.enderchest.modify` | grant | global |
| `essentials.essentials` | grant | global |
| `maintenance.admin` | grant | global |
| `essentials.afk.others` | grant | global |
| `essentials.gamemode.all` | grant | global |
| `essentials.chat.spy.exempt` | grant | global |
| `essentials.fly` | grant | global |
| `essentials.god` | grant | global |
| `essentials.potions.[potionName]` | grant | global |
| `warpgui.admindelwarp` | grant | global |
| `essentials.exp.give.others` | grant | global |
| `essentials.signs.trade.override` | grant | global |
| `essentials.speed` | grant | global |
| `essentials.editsign` | grant | global |
| `essentials.chat.spy` | grant | global |
| `silkspawners.command.set` | grant | global |
| `essentials.spawner.delay` | grant | global |
| `essentials.eco` | grant | global |
| `themis.command.info` | grant | global |
| `themis.technical` | grant | global |
| `essentials.skull.others` | grant | global |
| `essentials.skull.spawn` | grant | global |
| `essentials.exp.set.others` | grant | global |
| `wildernesstp.command.reload` | grant | global |
| `silkspawners.command.give.*` | grant | global |
| `essentials.item` | grant | global |
| `essentials.spawnmob` | grant | global |
| `group.mod` | grant | global |
| `essentials.break` | grant | global |
| `essentials.vanish` | grant | global |
| `griefprevention.adminclaims` | grant | global |
| `griefprevention.claimslistother` | grant | global |
| `themis.command.reload` | grant | global |
| `astools.bypass-wg-flag` | grant | global |
| `essentials.itemspawn.exempt` | grant | global |
| `essentials.chat.receive.shout` | grant | global |
| `silkspawners.command.version` | grant | global |
| `voicechat.admin` | grant | global |
| `themis.command.base` | grant | global |
| `chatfilter.bypass` | grant | global |
| `themis.bypass` | grant | global |
| `essentials.remove` | grant | global |
| `playerinit.cancelpolling` | grant | global |
| `silkspawners.command.give` | grant | global |
| `essentials.near.maxexempt` | grant | global |
| `essentials.invsee.modify` | grant | global |
| `warpgui.createadminwarp` | grant | global |
| `wildernesstp.sign.create` | grant | global |
| `griefprevention.restorenature` | grant | global |
| `minecraft.command.ban` | grant | global |
| `wildernesstp.command.destroy` | grant | global |
| `essentials.powertool` | grant | global |
| `essentials.ban` | grant | global |
| `silkspawners.command.set.*` | grant | global |
| `griefprevention.ignoreclaims` | grant | global |
| `essentials.spawnmob.*` | grant | global |
| `essentials.socialspy` | grant | global |
| `essentials.spawner` | grant | global |
| `essentials.gamemode.others` | grant | global |
| `essentials.give` | grant | global |
| `essentials.exp.set` | grant | global |
| `essentials.potion.apply` | grant | global |
| `essentials.invsee` | grant | global |
| `pvptoggle.reload` | grant | global |
| `essentials.spawner.*` | grant | global |
| `essentials.powertooltoggle` | grant | global |
| `griefprevention.overrideclaimcountlimit` | grant | global |
| `essentials.enchant` | grant | global |
| `essentials.world` | grant | global |
| `essentials.enchantments.allowunsafe` | grant | global |
| `essentials.signs.protection.override` | grant | global |
| `essentials.signs.trade.override.collect` | grant | global |
| `griefprevention.deleteclaims` | grant | global |
| `astools.reload` | grant | global |
| `essentials.skull` | grant | global |
| `velocity.command.server` | grant | global |
| `eventbridge.admin` | grant | global |
| `rankprogression.exportplaytimedata` | grant | global |
| `guilds.admin` | grant | global |
| `griefprevention.transferclaim` | grant | global |

### dev

| Node | Value | Scope |
|---|---|---|
| `*` | grant | global |
| `group.admin` | grant | global |

### server-lead

| Node | Value | Scope |
|---|---|---|
| `group.dev` | grant | global |
