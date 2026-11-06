---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 2 · Player Investigations

One of the most important Admin responsibilities is figuring out what actually happened when a report cannot be resolved from the player's description alone.

Investigation tools give you access to information that ordinary players and Moderators may not have. That makes them useful, but it also means you need to interpret the results carefully.

---

## Building an Evidence Timeline

Start with the basic questions: **who, what, where, and when?**

For example, if a player reports that items disappeared from a chest, establish the world, chest coordinates, approximate last known time the items were present, and who had access.

A useful timeline separates three types of information:

| Type | Example |
| --- | --- |
| **Reported** | A player says 20 diamonds were taken overnight. |
| **Verified** | Container logs show another account removing items at a specific time. |
| **Unknown** | Whether the removal was authorized by the chest owner. |

Work from the smallest relevant time window and location. Widen the search only when the evidence indicates that you should.

!!! tip "Record times clearly"
    Console events, plugin logs, and Discord reports may use different timestamps or time zones. Record the time zone when it matters so later staff members do not accidentally compare unrelated events.

---

## Investigating With CoreProtect

[CoreProtect](../../plugins/permissions-and-moderation/coreprotect.md#what-is-coreprotect){ data-preview } records block changes, container transactions, and other supported actions. It is the main tool for verifying griefing and theft reports. Start at the reported location instead of searching the whole server.

### Using the Inspector

Turn on the inspector with:

```text
/co i
```

While it is enabled, **left-click a block** to check its placement history and **right-click a block** to inspect its removal history. For a reported chest, **right-click the chest**. On ERRSA, this can display the chest's **Container Transactions** directly, including items added and removed. You do not need to start with a broader lookup just to read that chest's history.

If several pages appear, use the **clickable arrows** or `/co l <page#>` to browse them. A real ERRSA example appears below.

CoreProtect may also show **clickable coordinates** beside entries. They can teleport you to the logged event, but always check that it is the reported chest.

Run `/co i` again when you finish to turn the inspector off. Inspector mode changes how clicks behave.

### Using CoreProtect Lookup Filters

Use a lookup when you need to restrict the time, action, player, or area beyond the exact block-inspector history. The main filters used below are:

| Filter | Meaning |
| --- | --- |
| `t:2h` | Previous two hours |
| `r:10` | Ten blocks around **your current location**, not the selected chest |
| `u:ExamplePlayer` | Only that account's events |
| `a:container` | Items added to or removed from containers |
| `a:-container` | Items removed from containers |
| `a:+container` | Items added to containers |
| `a:block` | Block placements and breaks |

A radius lookup may include nearby chests. **Confirm the exact coordinates** before claiming a transaction belongs to the reported container. Leave out `u:` when the responsible player is not yet known.

---

### Example: A Chest With Missing Items

A player says someone took diamonds from a chest while they were offline. You are standing beside the chest in Survival, and the owner estimates it happened within the last two hours. **You do not know who did it yet.**

1. **Confirm the basics.** Ask which chest, when they last saw the items, and whether anyone was allowed to use it. Record the world and coordinates.
2. **Inspect the exact chest first.** Run `/co i` and right-click the chest to see its Container Transactions. Look at the time, account, item, amount, and whether items were added or removed. Use the arrows or `/co l 2` if there are more pages. Turn the inspector off with `/co i` afterward.
3. **Use a wider lookup only when needed.** If the chest history does not cover the reported time, you need to check nearby containers, or you need to filter results, stand beside the reported chest and run:

    ```text
    /co lookup t:2h r:10 a:container
    ```

4. **Check the location on each result.** This lookup covers nearby containers, **not only the chest you clicked**. Compare coordinates before connecting an entry to the report. Click a listed location to teleport to it when you need to verify where the activity occurred.
5. **Narrow the search.** If the records point to an account such as `ExamplePlayer`, run:

    ```text
    /co lookup u:ExamplePlayer t:2h r:10 a:-container
    ```

6. **Check the explanation.** Compare the results with the owner's permissions, shared-storage arrangements, and any statements from the involved players. Record the finding before returning items or taking disciplinary action.

### Interpreting Incomplete Results

A removal entry confirms items left a container; it does **not** prove theft. Check the world, exact chest, timestamps, access permissions, and context. Use the clickable history arrows or `/co l <page#>` to view another page of the **same** result set.

If you get **no results**, recheck the world and chest, then evaluate whether the time window, radius, or action filter missed the incident. Widen carefully and record what was checked. A blank lookup is not proof the player's report was false.

!!! warning "Keep lookups narrow"
    Broad lookups can produce unrelated events. Start at the reported location with the smallest useful time window; do not roll back while gathering evidence.

For the full syntax, see the [CoreProtect command reference](https://docs.coreprotect.net/commands/){ target="_blank" }.

## Reading CoreProtect Results

### Reading the Container Results

The example below is a **real ERRSA inspector result**, captured by right-clicking a chest with `/co i` enabled.

![ERRSA CoreProtect Container Transactions showing StoutFerret2678 removing 32 diamonds and DaBeans24 adding 12 and 20 diamonds](../../assets/images/admin-training/coreprotect-live-inspector.webp)

*The red `−` shows 32 diamonds removed; the green `+` shows 12 and 20 diamonds added. CoreProtect also gives the account and how long ago the action happened.*

These entries show **item movement**, not necessarily theft. The fact that the two additions add up to 32 does not prove the same diamonds were later removed, and it does not tell you whether the person who removed them had permission. Check the exact chest, timing, and any transactions between the visible entries.

### Moving Between History Pages

![ERRSA CoreProtect page 2 and page 3 with arrows highlighted and the /co l 3 command entered](../../assets/images/admin-training/coreprotect-live-pages.webp)

*The red boxes highlight both ways to move through the current results: click the chat arrows or enter `/co l <page#>` (here, `/co l 3`). The arrow's hover text may show `/co page 3`; both navigation methods open page 3 of that history.*

You can also click a page number shown in chat. If you start a **new** lookup, the pages will belong to those **new results**, not the chest history you were previously reading. Recheck what the title says before drawing conclusions.

### Opening Logged Coordinates

![ERRSA CoreProtect result with a location hovered to display /co teleport world 2373 129 1204](../../assets/images/admin-training/coreprotect-live-coordinate-teleport.webp)

*Hover over a logged coordinate to see the CoreProtect teleport action. Clicking the location takes you to that event's coordinates, provided the command is permitted.*

This is particularly helpful when a radius lookup returns records from several nearby chests. **Teleporting shows where the event occurred; it does not prove the event belongs to the chest in the original report.** Confirm the world, location, and container before treating it as evidence.

---

### Practice: Reading a Shared Chest

`ExamplePlayer` removed diamonds from a chest that several guild members share. What does the log establish, and what is still missing?

??? tip "Suggested approach"
    It establishes a recorded removal from that container, not whether it was authorized. Confirm the chest, account, time, and the guild's shared-storage rules before drawing a conclusion.


## Writing a Useful Finding

A staff record should make it clear what was **reported**, what you **verified**, and what remains **uncertain**. For example:

> Player reported missing diamonds from a chest at Survival `x, y, z`. CoreProtect container history shows `ExamplePlayer` removing items at approximately 8:15 PM. The chest owner says this player was not authorized to take them. I have not yet confirmed where the items went; further inventory review is needed.

This is more useful than writing only "CoreProtect says they stole it." It lets another staff member continue without restarting the investigation.

---

## Inventory & Anti-Cheat Investigations

A suspected duplicate, unusual stack, or cheating alert needs more than a screenshot. Admins can use a few commands to compare the report with the actual evidence:

| Command | What it tells you |
| --- | --- |
| `/invsee <player>` | View the player's current inventory, including relevant item quantities. |
| `/endersee <player>` | Inspect the player's ender chest. |
| `/themis info <player>` | View Themis violation scores and check information for that account. |

### Checking a Player's Inventory

Use **InvSee++** to inspect the correct player's inventory or ender chest. Compare the item types, quantities, and any unusual properties with the report. See the [InvSee++ command reference](../../plugins/permissions-and-moderation/invseeplusplus.md#what-is-invsee){ data-preview }.

Admins can also edit inventories, but an investigation begins with inspection. Record what you find before making any changes.

### Reviewing Anti-Cheat Alerts

Themis alerts help identify activity worth investigating, but an alert alone does not prove cheating. Compare the alert with player activity, [CoreProtect records](../../plugins/permissions-and-moderation/coreprotect.md#what-is-coreprotect){ data-preview }, and any available observations. Consider lag or differences between Java and Bedrock clients.

Admin accounts have `themis.bypass`, so testing suspected cheats on your own Admin account is not a reliable way to check detection. Controlled tests should use an appropriate test account.

!!! warning "Preserve evidence first"
    Do not delete suspicious items, clear inventories, or confiscate property based only on an alert. If you find evidence of an active exploit, follow the [cheating procedure](../../documentation/standard-procedures.md#326-cheating-hacking-or-exploiting){ data-preview } and notify a Developer when the server itself may be affected.

---

## When the Problem Is Not Misconduct

A player who cannot open a chest or who sees a different inventory after changing worlds may be encountering a claim, region flag, or intentional world-inventory separation rather than a punishment or theft.

Confirm the **world, coordinates, claim owner, player access, and expected behavior** before changing anything. [Module 6](mod6.md){ data-preview } covers claims, protected regions, and the difference between worlds on ERRSA.

---

## Reaching a Conclusion

Once enough information is available, distinguish between:

- **Confirmed:** Multiple reliable sources support the finding, or the available record directly establishes the relevant action.
- **Likely:** The evidence points toward an explanation but leaves some uncertainty.
- **Unresolved:** The evidence is insufficient or conflicting.

ERRSA uses a "what most likely happened" approach for certain property disputes, but that does not mean inventing missing evidence or treating a suspicion as certainty.

Document the sources checked, findings, uncertainty, and any further work in the existing Player record. If you need to restore anything, proceed to [Module 3](mod3.md){ data-preview } for land or [Module 4](mod4.md){ data-preview } for items after preserving the investigation results.

---

## Check Your Understanding

A player reports stolen items, but you only know which chest was affected and approximately when. Where would you start, and what would you check before calling it theft?

??? tip "Suggested approach"
    Go to the reported chest, run `/co i`, and **right-click that exact chest** to read its Container Transactions. Check the time, account, item, quantity, and any removals. If there are more pages, use the clickable arrows or `/co l <page#>`; turn the inspector off when finished. If you need to filter by time or search nearby containers, use `/co lookup t:2h r:10 a:container` while standing near the chest, then confirm the coordinates belong to the correct container. Finally, check who was allowed to use it before treating the removal as theft.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod3/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 3 · Land & Build Restoration</strong><span>Learn how to restore verified damaged builds without affecting nearby legitimate work.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
