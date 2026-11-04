---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 5 · Claims, Worlds & Player Management

Not every building or access problem is caused by a rule violation. ERRSA uses several systems to manage land claims, plots, protected regions, and different worlds. An Admin needs to understand which system is responsible before attempting to fix the issue.

The most important distinction is that a player's permissions, the rules of the current world, and the protection placed on a specific area can all affect what they are allowed to do.

---

## Understanding the Different Systems

| System | Primary purpose |
| --- | --- |
| [GriefPrevention](../../plugins/permissions-and-moderation/griefprevention.md){ data-preview } | Player land claims, trusted access, and claim protections on Survival. |
| [WorldGuard](../../plugins/worlds-and-building/worldguard.md){ data-preview } | Protected regions and rules for building, PvP, interactions, and other behavior. |
| [PlotSquared](../../plugins/worlds-and-building/plotsquared.md){ data-preview } | Plot ownership and building permissions in plot-based worlds. |
| [Multiverse-Core](../../plugins/worlds-and-building/multiverse-core.md){ data-preview } | World management, teleportation, and world-specific properties. |
| [Multiverse-Inventories](../../plugins/worlds-and-building/multiverse-inventories.md){ data-preview } | Inventory grouping and separation across configured worlds. |

These systems can overlap. A player may be allowed by one plugin but restricted by another, so changing the first permission you find may not solve the problem.

---

## GriefPrevention Claims

[GriefPrevention](../../plugins/permissions-and-moderation/griefprevention.md){ data-preview } protects Survival claims. A player's ability to **enter an area, open a chest, or build** may be different depending on which trust level the owner gave them.

### Inspecting a Claim

1. Go to the reported location in Survival and hold a **stick** (the default GriefPrevention inspection tool).
2. **Right-click** a block or the ground to check who owns the claim and display its boundary information. You may see the claim outlined with temporary markers.
3. Stand **inside that claim** and run `/trustlist`. This shows which players have been given access and at what level.
4. Use `/claimslist <player>` if you need to confirm the player's overall claim information. Remember that the world and exact spot matter.

If the stick does nothing, confirm that you are in the intended world and that the server's configured tool is still the default. Ask a Developer rather than guessing at the claim owner.

### Example: A Friend Cannot Open a Chest

A player says their friend can enter their house but cannot open a chest. Start by asking **which world, which chest, and who owns the claim**. Inspect the location with the stick, then check `/trustlist` while standing inside it.

| Trust level | What it generally allows |
| --- | --- |
| `/accesstrust <player>` | Basic access such as buttons, levers, and beds. |
| `/containertrust <player>` | Container access, along with basic access. |
| `/trust <player>` | Building and breaking blocks as well as the lower access levels. |

A player with only **AccessTrust** may be able to use a button but **not open a protected chest**. If the owner wants to allow chest access, explain that *the owner* can use `/containertrust <friend>` while standing in the correct claim. Do not grant or remove another player's trust without their permission or an authorized reason.

If the friend already has the necessary trust, check whether the chest is inside a **subdivision** or another protected region. WorldGuard can restrict interactions even when GriefPrevention allows them. Escalate region changes rather than removing protections to make the problem disappear.

### Admin Claim Tools

| Command | Purpose |
| --- | --- |
| `/ignoreclaims` | Temporarily bypass claim protection during an approved investigation. Run it again to turn the bypass off. |
| `/adminclaims` | Switch the claim tool into administrative-claim mode when an authorized staff claim is required. Use `/basicclaims` afterward. |
| `/deleteclaim` | Delete the claim at your location only after verifying the correct claim and approval for removal. |

These are not normal solutions to a player-access issue. A chest-access complaint usually begins with ownership and trust checks, not claim deletion or bypass.

!!! warning "Claim bypass is temporary"
    Turn `/ignoreclaims` off after use. Claim deletion or transfer can permanently affect player property. Record the world, coordinates, previous owner, approval, and any changes made. See the [GriefPrevention command reference](https://legacy.griefprevention.com/commands/){ target="_blank" }.

---

## WorldGuard Regions

WorldGuard applies rules to defined regions. Depending on the region, these may control building, PvP, explosions, doors, containers, or other interactions.

A problem that seems like a missing permission may actually be a region flag or membership rule.

For example, if someone can build normally in Survival but cannot place a block at spawn, that restriction may be intentional. Check whether they are in a protected region before investigating their LuckPerms group.

Admins should **recognize** region-related issues and collect the affected coordinates, world, action, and expected behavior. Your listed Admin permissions do not by themselves grant broad WorldGuard region-editing rights; escalate changes to protected regions rather than attempting an unsupported command.

!!! warning "Protected regions serve a purpose"
    Do not bypass or remove a protection to resolve a single player's complaint without confirming why the protection exists. Region changes may affect many players at once.

---

## PlotSquared & Creative Worlds

PlotSquared manages plots for building, with ownership and trust rules separate from ordinary Survival claims.

When a player cannot build on a plot, check whether:

- They are in the correct plot or world.
- They own the plot or have been trusted by the owner.
- The plot's restrictions are behaving as intended.
- They are trying to use a feature restricted to a different role.

Do not assume an Admin can clear, reassign, or merge any plot. If the issue needs a plot ownership or configuration change, escalate it with the location and evidence.

The **Workshop** is also a separate creative-building environment. Access to WorldEdit or another creative tool there does not mean that permission is available in Survival or can be used for unrestricted changes elsewhere.

---


## Multiverse & World-Specific Behavior

Multiverse controls properties of multiple worlds, including world-aware teleportation and gameplay settings. Other plugins may separately control inventory groups, permissions, or the way players move between worlds.

A player who loses access to items after changing worlds may be encountering intended inventory separation rather than actual item deletion.

Before attempting a recovery:

1. Identify the original and destination worlds.
2. Determine whether the inventory should carry between them.
3. Check the player's inventory again in the appropriate world or context.
4. Escalate any unexpected inventory transfer, duplication, or world configuration problem.

!!! important "World changes are technical changes"
    Creating, deleting, importing, or changing world properties can affect spawns, inventories, portals, and protection rules. These tasks should be coordinated with a Developer or Server Lead rather than performed as routine Admin troubleshooting.

---

## Handling Building & Protection Issues

For a typical building-related report, use this order:

1. Confirm the world, location, and exact action that is failing.
2. Identify the relevant protection system.
3. Check the owner, trust or membership settings, and intended server rules.
4. Determine whether the restriction is intentional, a player-access issue, or a technical malfunction.
5. Apply an authorized small correction or escalate with the findings.

If the issue involves griefing or stolen property, investigate it before making permission or ownership changes. Refer to [Module 2](mod2.md){ data-preview } for evidence gathering and [Module 3](mod3.md){ data-preview } for restoration.

---

## Check Your Understanding

A player says their friend cannot open a chest. The stick shows it is the player's claim, and `/trustlist` shows only AccessTrust for the friend. What should you suggest?

??? tip "Suggested approach"
    Explain the difference between AccessTrust and ContainerTrust. If the owner approves, they can use `/containertrust <friend>` in the correct claim. Do not use `/ignoreclaims` or delete the claim to solve this.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod6/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 6 · Handling Major Incidents</strong><span>Learn to contain serious issues and coordinate with the rest of the staff team.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
