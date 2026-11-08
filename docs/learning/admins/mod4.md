---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 4 · Item & Inventory Recovery

A stolen item, missing shulker, or incorrect inventory may require a different investigation than a damaged build. Before issuing a replacement, check whether the original reported item still exists and where it may have gone. Creating replacement items without locating or accounting for the originals can unintentionally duplicate property.

Begin with the [evidence methods in Module 2](mod2.md){ data-preview } and apply the [griefing and theft procedure](../../documentation/standard-procedures.md#327-griefing-or-theft){ data-preview } if appropriate.

---

## Recovering Stolen or Missing Items

Item restoration is different from rebuilding a damaged wall. Replacing an item without checking where the original went can create an unintended duplicate.

First try to determine:

- What item was lost, including quantity and relevant metadata.
- Whether it was moved through a chest, hopper, inventory, or other container.
- Whether the original item still exists somewhere else.
- Who had access and whether the movement was authorized.

Use container logs, relevant inventory tools, and player statements to build the clearest account available. If the original item is recoverable, prefer returning it over creating a replacement.

If replacement is justified, match only what can reasonably be verified. Do not add extra items as compensation or rely solely on a player's estimated inventory value.

### Checking Item Details

When an item is still available for inspection, hover over it in an inventory and check its **item type, quantity, name, enchantments, durability, and description (lore)**. For a shulker box or another container item, its contents may need separate inspection. Record screenshots of the relevant item details before making any edits.

CoreProtect's container logs can help verify *what type and how many* items moved, but they may not establish every enchantment or custom item property from an earlier loss. If an original item is gone and there is no reliable screenshot, matching example, or other evidence, **do not assume a normal item and a specially modified item are equivalent**. Refer complicated custom-data or offline-inventory cases to a Developer before attempting to recreate them.

**Example: a missing pickaxe:** A log showing one netherite pickaxe moved does not verify its name and enchantments. Check screenshots, remaining copies, or other reliable evidence before reconstructing a custom item.

!!! tip "Not everything can be proven exactly"
    Sometimes logs confirm that items were removed but cannot establish every enchantment or exact quantity. Explain the uncertainty in the record and use reasonable judgment; involve the Server Lead when the amount or impact is significant.

---

### Example: A Missing Shulker With Enchanted Tools

A player says a shulker containing enchanted tools disappeared. Before making a replacement:

1. Confirm the **last known location and method of loss**. Was it placed in a chest, dropped as an item, moved through a portal, or lost with the player's inventory?
2. Follow the relevant history. Container transactions, player inventory events, and direct observation may each answer different parts of the report. The original shulker or tools could still exist elsewhere.
3. Verify the **contents and custom properties** separately. One shulker entry in a log does not automatically prove everything the player says was inside. Ask for screenshots or other reliable records when details are missing.
4. Escalate **offline inventory editing, unclear world inventories, and custom-item reconstruction** to the Developer or Server Lead. Do not improvise commands that could replace or duplicate player property.
5. Record whether the original items were located, what can be verified, who approved the final correction, and how the player received it.

!!! warning "Complex item recovery requires authorization"
    Custom shulkers, offline inventories, and items with unusual data need careful verification. Preserve the evidence and have a Developer or Server Lead approve any reconstruction rather than guessing at item-giving or NBT commands.

---

## Inventory Editing & Limited Creative Access

Admins have tools that can inspect or modify inventories and may use creative mode for appropriate repairs. These are staff recovery tools, **not conveniences for normal gameplay**.

When using them:

- Confirm the correct player and inventory before making changes.
- Avoid moving or deleting unrelated items.
- Do not keep, trade, or use recovered property personally.
- Keep staff-created items separate from normal player inventories until the recovery is verified.
- Return to normal gameplay mode and remove temporary investigation materials afterward.

Use the ERRSA [InvSee++ plugin reference](../../plugins/permissions-and-moderation/invseeplusplus.md#what-is-invsee){ data-preview } for `/invsee <player>` and `/endersee <player>`. Editing access is available, but offline inventories and world-specific inventories can behave differently. Verify the context before changing items; escalate any uncertainty about where the original inventory lives.

---

## Record the Item Outcome

Document the reported items, what logs and inventory inspection established, whether originals were found, the approved restoration method, who made the change, and whether anything remains disputed. Never use `/give` or `/item` merely to estimate compensation.

## Check Your Understanding

A player reports a lost enchanted shulker, but the log only proves one shulker was removed. What can you restore immediately?

??? tip "Suggested approach"
    Nothing beyond what the evidence and approved recovery procedure justify. First establish whether the original can be located and whether its contents can be independently verified. Escalate custom-data reconstruction instead of guessing.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod5/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 5 · Server Operations</strong><span>Learn how to evaluate server health and collect diagnostic evidence.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
