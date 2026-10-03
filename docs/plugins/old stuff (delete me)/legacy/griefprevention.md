!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# GriefPrevention

## Purpose

**Category:** Protection

GriefPrevention allows players to **claim land and protect their builds, chests, and structures from modification by other players**. On ERRSA MC, it serves as the primary system preventing violations of **Rule [4] — Do not destroy, steal, or damage another player's builds, property, or creations.**

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

### Player permissions
- `griefprevention.claims` — Allows players to use the claim system.
- `griefprevention.createclaims` — Allows players to create land claims.
- `griefprevention.abandonclaim` — Allows players to remove their current claim.
- `griefprevention.abandonallclaims` — Allows players to delete all of their claims.
- `griefprevention.buyclaimblocks` — Allows players to purchase additional claim blocks.
- `griefprevention.seeclaimsize` — Shows claim size information when inspecting claims.
- `griefprevention.transferclaim` — Allows players to transfer claim ownership.
- `griefprevention.trapped` — Allows players to use `/trapped` if stuck inside a claim.
- `griefprevention.visualizenearbyclaims` — Allows visualization of nearby claims.
- `griefprevention.lava` — Allows lava placement according to server rules.

### Mod permissions
- `griefprevention.notignorable` — 	Makes a player immune to the /ignore command.
- `griefprevention.seeinactivity` — Allows moderators to see claim inactivity data (useful for identifying abandoned claims).

### Admin permissions
- `griefprevention.adminclaims` — Allows creation and management of **admin-owned claims**.
- `griefprevention.claimlistother` — Allows viewing claims owned by other players.
- `griefprevention.deleteclaims` — Allows deletion of any claim.
- `griefprevention.ignoreclaims` — Allows admins to bypass claim protections.
- `griefprevention.overrideclaimcountlimit` — Allows admins to exceed normal claim limits.
- `griefprevention.restorenature` — Allows restoring terrain in abandoned or modified areas.


---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"

### Player commands
- `/claim` — Creates a land claim around the player using their available claim blocks.
- `/abandonclaim` — Deletes the claim the player is currently standing in.
- `/abandonallclaims` — Removes all claims owned by the player.
- `/trust <player>` — Grants another player build access inside the claim.
- `/untrust <player>` — Removes a player’s access to the claim.
- `/accesstrust <player>` — Allows a player to open containers (chests, doors, etc.).
- `/containertrust <player>` — Allows a player to access containers but not modify blocks.
- `/trapped` — Teleports the player out of a claim if they are stuck.
- `/claimslist` — Shows all claims owned by the player.
- `/claimlist` — Alternative command showing player claims.



### Admin commands
- `/adminclaims` — Toggles admin claim mode for creating protected server claims.
- `/deleteclaim` — Deletes the claim the admin is standing in.
- `/restorenature` — Restores terrain in an abandoned or griefed area.
- `/claimslist <player>` — View claims belonging to a specific player.
- `/ignoreclaims` — Temporarily bypass claim protections for moderation tasks.


---

## Configuration Files IMPORTANT PLUGIN CONFIG TO KNOW

!!! info "Primary config locations"
- `plugins/GriefPrevention/config.yml` — Main plugin configuration for claims, anti-grief protections, PvP rules, economy, expiration, and admin behavior.
- `plugins/GriefPrevention/messages.yml` — Customizable player-facing messages shown for claim actions, trust messages, warnings, and protection notices.
- `plugins/GriefPrevention/ClaimData/` — Stores land claim records and subdivision data.
- `plugins/GriefPrevention/PlayerData/` — Stores per-player claim block totals, accrued blocks, and other player claim metadata.
- `plugins/GriefPrevention/Logs/` — Contains GriefPrevention log output used for troubleshooting and moderation review.
- `plugins/GriefPrevention/bannedWords.txt` — Optional banned word list for GriefPrevention chat moderation features.
- `plugins/GriefPrevention/softMute.txt` — Stores soft-muted players if that feature is used.

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `Claims.Mode`:
  - `world: Survival`
  - `world_nether: Survival`
  - `world_the_end: Survival`
  - `LegacyLake: Survival`
  - `PlayerInit: Survival`
  - `Lobby: Survival`
  - `world_my_void_void_end: Disabled`  
  — Claims are enabled in the playable survival worlds and disabled in the void/end utility world.

- `Claims.PreventTheft: true` — Containers and stored items are protected inside claims to enforce **Rule [4]**.

- `Claims.ProtectCreatures: true` — Animals and protected mobs inside claims cannot be harmed by unauthorized players.

- `Claims.PreventButtonsSwitches: true` — Prevents unauthorized use of redstone-interaction objects in claims.

- `Claims.LockWoodenDoors: false` — Wooden doors are intentionally left less restrictive for usability and normal shared-base flow.

- `Claims.LockTrapDoors: false` — Trapdoors are also left unlocked for convenience and build usability.

- `Claims.LockFenceGates: true` — Fence gates remain protected to reduce unwanted entry into enclosed builds or animal areas.

- `Claims.EnderPearlsRequireAccessTrust: true` — Prevents players from bypassing claim boundaries using ender pearls.

- `Claims.RaidTriggersRequireBuildTrust: true` — Raid-triggering actions inside claims require trust to prevent grief or accidental disruption.

- `Claims.InitialBlocks: 500` — New players receive a reasonable starting amount of claim blocks so they can protect early builds quickly.

- `Claims.Claim Blocks Accrued Per Hour.Default: 50` — Players steadily earn more protection area through normal play.

- `Claims.Max Accrued Claim Blocks.Default: 100000` — High cap allows long-term players to expand large legitimate projects.

- `Claims.AutomaticNewPlayerClaimsRadius: 4` — New players can receive a small automatic starter claim around their first chest.

- `Claims.ExtendIntoGroundDistance: 10` — Claims extend below the surface to protect underground portions of bases.

- `Claims.MinimumWidth: 5` — Prevents extremely narrow or abusive micro-claims.

- `Claims.MinimumArea: 100` — Ensures claims are meaningful and not used to clutter land with tiny protections.

- `Claims.InvestigationTool: WOODEN_HOE` — Staff/player inspection uses the wooden hoe.
- `Claims.ModificationTool: STICK` — Claim resizing and editing uses the stick.

- `Claims.Expiration.ChestClaimDays: 180` — Inactive chest claims expire after a long grace period.
- `Claims.Expiration.UnusedClaimDays: 180` — Unused claims also expire after extended inactivity.
- `Claims.Expiration.AllClaims.DaysInactive: 180` — Full claims are eligible for expiration after 180 days inactive.  
  — ERRSA keeps a long inactivity window to respect semester schedules and returning players.

- `Claims.Expiration.AutomaticNatureRestoration.SurvivalWorlds: false` — Nature restoration is disabled so old claim removal does not unexpectedly alter player areas.

- `Claims.AllowTrappedInAdminClaims: false` — Players cannot use `/trapped` to escape admin claims.

- `Claims.MaximumNumberOfClaimsPerPlayer: 0` — No hard numeric limit on claim count; protection is controlled by available claim blocks.

- `Claims.CreationRequiresWorldGuardBuildPermission: true` — Claim creation respects external build-permission systems where applicable.

- `Claims.VillagerTradingRequiresPermission: true` — Prevents players from using villager setups inside another player’s protected area without access.

- `Claims.CommandsRequiringAccessTrust: /sethome` — Players must have access trust before setting homes inside another player’s claim.

- `Claims.DeliverManuals: true` — GriefPrevention help material is delivered to help onboard players.
- `Claims.ManualDeliveryDelaySeconds: 30` — Manual/help delivery is slightly delayed to avoid overwhelming new joins immediately.

- `Claims.RavagersBreakBlocks: false` — Disables ravager block damage to protect builds.

- `Claims.FireSpreadsInClaims: false` and `Claims.FireDamagesInClaims: false` — Fire cannot spread or damage builds inside claims.

- `Claims.LecternReadingRequiresAccessTrust: true` — Reading lecterns in claims requires permission, protecting written materials and interactive builds.

- `Spam.Enabled: false` — GriefPrevention’s spam system is intentionally disabled, likely because chat moderation is handled by a dedicated plugin.

- `PvP.RulesEnabledInWorld`:
  - `world: true`
  - `world_nether: true`
  - `world_the_end: true`
  - `world_my_void_void_end: true`
  - `Lobby: false`
  - `LegacyLake: false`
  - `PlayerInit: false`  
  — PvP protections are only active where relevant and disabled in lobby/onboarding spaces.

- `PvP.ProtectFreshSpawns: true` — New spawns receive temporary protection.
- `PvP.PunishLogout: true` — Combat logging is penalized.
- `PvP.CombatTimeoutSeconds: 10` — Defines the combat-tag duration.
- `PvP.AllowCombatItemDrop: false` — Prevents item dropping exploits during combat.
- `PvP.BlockedSlashCommands: /home;/vanish;/spawn;/tpa` — Prevents escape-by-command during combat.

- `PvP.ProtectPlayersInLandClaims.PlayerOwnedClaims: true`
- `PvP.ProtectPlayersInLandClaims.AdministrativeClaims: true`
- `PvP.ProtectPlayersInLandClaims.AdministrativeSubdivisions: true`  
  — Claims are treated as protected spaces during PvP contexts.

- `Economy.ClaimBlocksPurchaseCost: 2.0` — Claim blocks can be purchased at a defined cost.
- `Economy.ClaimBlocksSellValue: 0.0` — Players cannot sell claim blocks back for money, preventing economy abuse.
- `Economy.ClaimBlocksMaxBonus: 0` — Bonus claim blocks are not economy-expanded beyond normal settings.

- `ProtectItemsDroppedOnDeath.PvPWorlds: true`
- `ProtectItemsDroppedOnDeath.NonPvPWorlds: true`  
  — Death drops are protected in all worlds.

- `BlockLandClaimExplosions: true` — Explosions cannot damage claimed land.
- `BlockSurfaceCreeperExplosions: true` — Creeper grief is blocked on the surface.
- `BlockSurfaceOtherExplosions: true` — Other surface explosion grief is also blocked.

- `PistonMovement: EVERYWHERE_SIMPLE` — Pistons are allowed with simplified protection handling.

- `FireSpreads: false` and `FireDestroys: false` — Global fire spread/destruction is disabled to reduce accidental world damage.

- `AdminsGetWhispers: true` — Admins receive whisper visibility for moderation awareness.
- `AdminsGetSignNotifications: true` — Admins are notified of suspicious or relevant sign activity.

- `SmartBan: false` — Automatic smart-ban behavior is disabled; enforcement is handled manually by staff.
- `Mute New Players Using Banned Words: false` — New players are not auto-muted by this plugin.

- `MaxPlayersPerIpAddress: 0` — No IP-based player cap is enforced through GriefPrevention.

- `Siege.Worlds: []` — Siege mechanics are fully disabled on ERRSA MC.

- `EndermenMoveBlocks: false` — Prevents enderman grief.
- `SilverfishBreakBlocks: false` — Prevents silverfish grief.
- `CreaturesTrampleCrops: false` — Protects farms from mob trampling.
- `RabbitsEatCrops: false` — Prevents rabbit crop damage.
- `HardModeZombiesBreakDoors: false` — Prevents zombie door-breaking grief.
- `MobProjectilesChangeBlocks: false` — Prevents mob projectile terrain/block changes.

- `Database.URL: ''` — External database integration is not used; default file-based storage is sufficient.

- `Abridged Logs.Days To Keep: 7` — Short rolling log retention keeps useful operational logs without unnecessary buildup.

This section documents **intentional deviations from plugin defaults**.
---

## Common Issues & Fixes

### Issue: "My chest / house / farm got griefed even though I thought it was protected"

**Likely cause:**  
The area was **not actually claimed**, the claim was too small, or the affected part of the build was placed **outside the claim boundary**.

**Fix:**  
1. Have the player hold the **stick** to view claim boundaries.  
2. Confirm the build is fully inside the claim.  
3. If needed, tell the player to expand the claim or create a new one with `/claim`.  
4. If damage already occurred, investigate with CoreProtect.

**Escalate if:**  

- The player insists the build was inside a claim  
- Multiple protection systems appear to be conflicting  
- Claim boundaries are behaving incorrectly

---

### Issue: "I can't open a chest / door / gate in someone else's claim"

**Likely cause:**  
The player does not have the required **trust level** in that claim.

**Fix:**  

- Claim owner should use the correct trust command:
  - `/trust <player>` — build access
  - `/containertrust <player>` — container access
  - `/accesstrust <player>` — access to doors, buttons, etc.
- If the player is only visiting, this is normal protection behavior.

**Escalate if:**  

- The player should already have trust but still cannot interact  
- Permissions fail after being re-applied

---

### Issue: "I’m stuck inside someone’s claim"

**Likely cause:**  
The player entered or spawned into a protected area without access.

**Fix:**  

- Have the player use `/trapped` if available.
- If they remain stuck, staff can assist manually.

**Escalate if:** 

- `/trapped` fails
- The player is stuck in an **admin claim**
- The issue happens repeatedly in the same location

---

### Issue: "I can’t place lava / use ender pearls / trigger raids near claims"

**Likely cause:**  
ERRSA MC intentionally restricts some actions in or near claims to prevent bypassing **Rule [4]** protections.

**Fix:**  

- Explain that this is expected behavior:
  - Ender pearls require access trust
  - Raid triggers require build trust
  - Claim protections block many grief-prone actions

**Escalate if:** 

- The restriction is happening in the player’s **own** claim unexpectedly  
- The blocked action is preventing a legitimate server-approved activity

---

### Issue: "My animals / villagers / farm are protected, but someone still messed with them"

**Likely cause:**  
The build may be partially unclaimed, or the action involved something outside the normal claim boundary or trust setup.

**Fix:**  

1. Verify the area is fully claimed.
2. Confirm the player did not grant trust to the wrong person.
3. Use CoreProtect if blocks or containers were affected.
4. For entity-related incidents, verify claim coverage and nearby access points.

**Escalate if:**  

- Protected animals or villagers were affected inside a valid claim  
- The issue suggests claim protections are not being enforced correctly

---

### Issue: "My claim disappeared"

**Likely cause:**  
The claim may have expired due to long inactivity, been abandoned, or been removed by staff.

**Fix:**  

- Check claim ownership and inactivity history.
- Confirm whether the claim was abandoned manually or expired under inactivity rules.
- If needed, review staff actions and logs.

**Escalate if:**  

- The player was active recently
- The claim appears to have been removed unexpectedly
- A staff action may need review

---

### Issue: "I can’t create a claim"

**Likely cause:**  
The player may not have enough claim blocks, may be in a world where claims are disabled, or the location may conflict with another protected area.

**Fix:**  

1. Confirm the player is in a claim-enabled world.
2. Have them check whether the land overlaps another claim.
3. Verify they have enough claim blocks available.
4. Have them try again in a different open area.

**Escalate if:**  

- Claim creation fails in normal survival areas with enough blocks available  
- Multiple players report the same issue

---

### Issue: "Explosions / fire / creepers aren’t damaging builds"

**Likely cause:**  
This is intentional. ERRSA MC disables many environmental grief sources to protect player builds and property.

**Fix:** 

- Explain that this is expected server behavior:
  - Claim explosions are blocked
  - Surface creeper and other explosions are blocked
  - Fire spread and fire destruction are disabled

**Escalate if:**  

- Explosions or fire are damaging protected builds when they should not be  
- Damage occurs inconsistently between worlds

---

### Issue: "A player says someone is bypassing protections"

**Likely cause:**  
The suspected player may have been trusted, may be using an allowed interaction type, or staff/admin permissions may be involved.

**Fix:**  

1. Verify the trust list for the claim.
2. Confirm what type of interaction occurred.
3. Check whether the player had legitimate access.
4. If actual grief occurred, handle it under **Rule [4]** and investigate with CoreProtect.

**Escalate if:**  

- Claim protections appear to be bypassed without trust  
- The issue involves admin claims or staff permissions  
- Multiple reports suggest a plugin/config problem


---

_Last verified: 2026-03-06_  
_Server version: 1.21.4_
