---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 6 · Claims, Worlds & Player Management

ERRSA uses different protections for player claims, spawn areas, and Creative plots. Before helping a player, confirm which server and world they are in, then identify the protection system involved.

## Understanding the Different Systems

| Plugin | Used for |
| --- | --- |
| [GriefPrevention](../../plugins/permissions-and-moderation/griefprevention.md#what-is-griefprevention){ data-preview } | Player claims and trust in Survival. |
| [WorldGuard](../../plugins/worlds-and-building/worldguard.md#what-is-worldguard){ data-preview } | Protected regions such as Survival spawn and the tutorial areas. |
| [Multiverse](../../plugins/worlds-and-building/multiverse-core.md#what-is-multiverse-core){ data-preview } | Multiple worlds on one server, including world-specific game modes and inventory separation. |
| [PlotSquared](../../plugins/worlds-and-building/plotsquared.md#what-is-plotsquared){ data-preview } | Player plots in the Creative world (`PlotWorld`). |

---

## GriefPrevention Claims

[GriefPrevention](../../plugins/permissions-and-moderation/griefprevention.md#what-is-griefprevention){ data-preview } protects player land in Survival. Claim ownership and trust levels determine who can build or use containers.

### Inspecting a Claim

1. Go to the reported location and use the **wooden hoe** to inspect the claim.
2. Check the claim owner and boundaries.
3. Stand inside the claim and run `/trustlist` to review access.
4. Use `/claimslist <player>` when you need to review the player's other claims.

### Example: A Friend Cannot Open a Chest

A player says their friend can enter their house but cannot open a chest. Inspect the claim and check `/trustlist` to see which level of access the friend has.

| Trust level | What it allows |
| --- | --- |
| `/accesstrust <player>` | Basic access, such as using buttons and levers. |
| `/containertrust <player>` | Opening protected containers. |
| `/trust <player>` | Building and breaking blocks. |

If the friend only has AccessTrust, explain that the claim owner can grant ContainerTrust. If they already have ContainerTrust, check whether the chest is in a subdivision or another protected area.

### Admin Claim Tools

| Command | Purpose |
| --- | --- |
| `/claimslist [player]` | List a player's claims. |
| `/ignoreclaims` | Toggle claim protection bypass for an investigation. |
| `/transferclaim <player>` | Transfer ownership of the claim you are standing in. |
| `/deleteclaim` | Delete the claim at your location. |
| `/deleteallclaims <player>` | Delete all claims owned by a player. |
| `/restorenature` | Restore terrain in a selected area. |

!!! danger "Changes to player property"
    Confirm the claim owner and exact location before transferring or removing a claim. Deleting all claims or restoring terrain can affect multiple builds. Obtain the necessary authorization and record changes to player property.

---

## WorldGuard Regions

[WorldGuard](../../plugins/worlds-and-building/worldguard.md#what-is-worldguard){ data-preview } controls protected areas through **regions**. Each region can have **flags** that determine what players or game mechanics can do there.

ERRSA uses WorldGuard in several worlds. The following are examples of regions and protections on the Survival world, not a complete list of regions or flags. Regions can also be used for portal areas where entering a region triggers a scripted teleport.

| Region | Protection in use |
| --- | --- |
| `spawn` | PvP, mob spawning, TNT, creeper explosions, and ender pearls are blocked. |
| `tutorial_dojo` | PvP and mob spawning are blocked, and players are protected from several forms of damage. |
| `tj_claim_book` | Interaction is allowed in this region while other protections still apply. |
| `legacy_lake_entrance` | PvP and mob damage are blocked. |

**Example:** A player reports that they cannot use an ender pearl at spawn. That is expected because the `spawn` region blocks ender pearls. It is not automatically a player-permission problem.

If someone reports a restriction, establish the world and coordinates, identify the affected region, and compare what happened with the region's intended behavior. [WorldGuard's plugin page](../../plugins/worlds-and-building/worldguard.md#what-is-worldguard){ data-preview } explains region protection and available commands.

---

## Multiverse & World Inventories

[Multiverse-Core](../../plugins/worlds-and-building/multiverse-core.md#what-is-multiverse-core){ data-preview } manages multiple worlds within a single Minecraft backend server. It does not connect worlds or inventories between separate backend servers. The **Test server and Event server** run their own Multiverse instances, separate from the **main Survival server**.

Within the main server, [Multiverse-Inventories](../../plugins/worlds-and-building/multiverse-inventories.md#what-is-multiverse-inventories){ data-preview } controls which worlds share inventories:

| Worlds | Inventory behavior |
| --- | --- |
| `world`, `world_nether`, `world_the_end` | Share the Survival inventory. |
| `workshop` | Has its own inventory group. |
| `PlotWorld` | Separate from the Survival and Workshop groups. |

**Example:** A player returns from Workshop to Survival and thinks their inventory has disappeared. First check which world they are in. Items in separate world-inventory groups do not automatically follow the player between those worlds.

### Investigating a Missing Inventory

1. Ask which backend server and world the player was in when they last saw the items.
2. Check whether they changed to a world with a separate inventory.
3. Review the inventory in the appropriate world before concluding items are missing.
4. If the inventory still appears incorrect, record the worlds and approximate time of the change for further investigation.

---

## PlotSquared & Creative Worlds

ERRSA uses [PlotSquared](../../plugins/worlds-and-building/plotsquared.md#what-is-plotsquared){ data-preview } in `PlotWorld`, the Creative plot world. It is different from Survival claims managed by GriefPrevention.

`PlotWorld` uses **125 × 125 block plots** separated by **7-block roads**. Plots do not merge automatically, and automatic plot clearing is disabled. PlotSquared's in-game economy is also disabled, so its stored plot price is not a charge to players.

### Example: A Player Cannot Build on a Plot

1. Confirm the player is in `PlotWorld`, not Survival or Workshop.
2. Have the player stand on the affected plot and use `/plot info` to check ownership and membership.
3. Find out whether the player owns the plot or has been granted building access.
4. If it belongs to someone else, explain that the owner needs to grant access. Do not treat the plot boundary as a server error.
5. If the owner still cannot build, record the plot location and the exact action that failed.

PlotSquared restricts WorldEdit to plot boundaries, so a player may be able to edit their plot without being able to change nearby roads or another player's plot.

### Workshop Is a Separate Building World

`workshop` is a world used by **ERRSA MC staff** for building projects and other staff work. It is separate from the public Creative plot world and does not use PlotSquared plots. For building or access questions, check the Workshop world and the relevant staff permissions rather than looking for a plot owner.

---

## Recap: Building and Access Reports

When a player says they cannot build or open a container, use the checks from this module:

1. **Where are they?** Confirm the backend server, world, and exact location.
2. **Which system applies?** GriefPrevention claim, WorldGuard region, or PlotSquared plot.
3. **Who owns it?** Check the relevant owner and access level.
4. **Is the restriction expected?** Compare the behavior with the appropriate protection.
5. **What needs to happen?** Explain the correct owner-managed action or escalate an unexplained issue with the information you gathered.

For theft or griefing, use [Module 2](mod2.md){ data-preview } for the investigation, [Module 3](mod3.md){ data-preview } for land recovery, and [Module 4](mod4.md){ data-preview } for item recovery.

---

## Check Your Understanding

A player reports that their friend cannot open a chest in Survival. The claim owner has given the friend AccessTrust only. What would you recommend?

??? tip "Suggested approach"
    Explain that AccessTrust does not allow access to protected containers. The claim owner can grant `/containertrust <friend>` for the correct claim.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod7/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 7 · Handling Major Incidents</strong><span>Learn to contain serious issues and coordinate with the rest of the staff team.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
