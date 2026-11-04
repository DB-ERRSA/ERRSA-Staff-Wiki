---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 3 · Player Restoration & Recovery

After a griefing, theft, or accidental loss report, players often want their property returned as quickly as possible. Admins have tools to help, but restoring something incorrectly can create new problems or duplicate legitimate items.

The goal is to return the affected area or items to their appropriate state, without changing unrelated player progress.

---

## When Restoration Is Appropriate

Before restoring anything, determine what was actually lost and why.

Restoration may be appropriate when:

- A confirmed rule violation caused damage or item loss.
- Staff or a server issue accidentally changed player property.
- A documented correction is necessary to repair an earlier staff action.

It is not automatically appropriate whenever a player loses something. Ordinary gameplay losses, disputed ownership, and items that cannot be verified require judgment under the applicable procedure.

For griefing and theft, use [Section 3.2.7](../../documentation/standard-procedures.md#327-griefing-or-theft){ data-preview } to determine what can reasonably be restored.

!!! important "Investigate before restoring"
    Preserve the evidence first. Once blocks, containers, or inventories have been changed, it may be harder to reconstruct the original event.

---

## Restoring Builds With CoreProtect

A **rollback** reverses logged changes. A **restore** can reapply changes that were rolled back. These tools are helpful for griefing, but the wrong time, account, or area can undo legitimate work too.

### Example: A Damaged House

A Moderator has escalated a report of a broken wall. CoreProtect shows `ExamplePlayer` broke the wall, **but also legitimately built a porch nearby during the same hour**. Start beside the damaged wall. We need to recover the wall without undoing the porch.

**1. Review the actual changes.**

```text
/co lookup u:ExamplePlayer t:1h r:10 a:block
```

Check which blocks were placed or broken, when, and where. This first search includes both the wall damage and legitimate porch changes by the **same account**. Write down which entries are actually related to the griefing.

**2. Preview the correction.**

```text
/co rollback u:ExamplePlayer t:1h r:10 a:block #preview
```

The `#preview` option lets you inspect the proposed result before committing a rollback. On ERRSA's tested CoreProtect 23.0 setup, a pending preview can show **`Please select "/co apply" or "/co cancel".`** That is a decision prompt, **not approval** to change the world.

Check the affected blocks in the world, the number of matches, and any messages returned. **A preview completing successfully does not mean the selected changes are safe.** A preview showing **0 matching blocks** may mean your filters missed the damage; a unexpectedly large preview (such as the **1,007-block result** seen during training) is a reason to stop and review the scope, not to press Apply.

The **damaged wall and legitimate porch** above are a hypothetical training case. The screenshot below comes from a **separate ERRSA test**: it demonstrates the preview message and confirmation options, not that a porch was selected.

![Actual ERRSA CoreProtect preview showing time range 1 day, radius 10 blocks, 144 selected blocks, and apply or cancel prompt](../../assets/images/admin-training/coreprotect-live-preview-144.webp)

*Real ERRSA preview: **1 day**, **10-block radius**, **144 selected blocks**. CoreProtect asks for `/co apply` or `/co cancel`. The number alone does not tell you whether those changes are appropriate.*

**In the hypothetical wall-and-porch case**, a preview that includes the legitimate porch is **not acceptable**, even if it completed successfully. **Cancel that pending preview:**

```text
/co cancel
```

![CoreProtect confirmation that a pending preview was cancelled, leaving the nearby training build in place](../../assets/images/admin-training/coreprotect-live-preview-cancelled.webp)

*CoreProtect responds **“Cancelling preview…”** and **“Preview cancelled.”** This confirms that the pending selection was discarded; it does not change the world. The preview is no longer waiting to be applied.*

If the grief involved only blocks they **broke**, a narrower option to investigate is:

```text
/co lookup u:ExamplePlayer t:1h r:10 a:-block
/co rollback u:ExamplePlayer t:1h r:10 a:-block #preview
```

That excludes placed blocks, but can still catch unrelated blocks the same account legitimately broke. Compare the new selection to the verified damage. If the results are still mixed or you cannot tell what the preview would affect, **cancel and ask another Admin to review it**.

!!! tip "What to accept or reject"
    **Acceptable:** the preview corresponds only to confirmed damage, the area and time make sense, and no unrelated work is selected. **Reject:** legitimate work by the same player is included, too many blocks are selected, the wrong world or area is targeted, or the preview cannot be checked. A successful preview message does **not** decide this for you.

**3. Confirm or cancel the pending preview.**

If the exact pending preview has been checked, is limited to verified damage, and the restoration is authorized, use the option shown by CoreProtect:

```text
/co apply
```

The next screenshot is **another separate ERRSA test**, showing how the output changes after a pending preview is applied. It is not the fictional porch case or the 144-block preview above.

![Actual ERRSA CoreProtect result showing a preview with 211 blocks and 2 entities, followed by a completed rollback affecting 73 blocks and 2 entities](../../assets/images/admin-training/coreprotect-live-preview-applied.webp)

*In this test, the preview listed **211 blocks and 2 entities** within a 15-block radius. The completed rollback reported **73 blocks and 2 entities** modified across 4 chunks.*

!!! tip "Why are the numbers different?"
    **We cannot tell the exact reason from this screenshot alone.** The preview reports a proposed selection, while the completion message reports what CoreProtect says it modified. Do not assume every number in a preview will match the final count or invent an explanation for a difference. Check the actual area and ask the supervising Admin to review unexpected results; this is part of the hands-on restoration exercise.

If it is too broad, wrong, unclear, or **0 blocks** when you expected damage, do **not** apply it. Use:

```text
/co cancel
```

Then review the evidence and start a **new**, narrower preview if needed. Do **not** automatically rerun the rollback without `#preview` while a preview is pending. These confirmation commands reflect the behavior observed on ERRSA; if the server presents a different prompt, stop and verify rather than guessing.

**4. Inspect the wall again.** Confirm the missing blocks returned, nearby player work was not changed, and nothing remains unresolved. Record the selected filters, preview, decision, and result in the incident record.

### What a Completed Rollback Does—and Doesn't—Prove

The completion message confirms that CoreProtect changed blocks or entities. It does **not** confirm that the right property was restored. Always walk the affected area and compare the outcome with the original report.

??? example "Another rollback: checking the area before and after"
    This separate ERRSA training example shows **79 blocks changed across 2 chunks**. It is **not** the same preview as the 144-block or 211-block examples above.

    ![Actual ERRSA CoreProtect completion message showing 79 blocks changed across 2 chunks](../../assets/images/admin-training/coreprotect-live-rollback-completed.webp)

    The next two images show a diamond-block structure beside a house before the change and the same area afterward. The structure is no longer there. Whether removing it was appropriate depends on the verified report, not CoreProtect saying the rollback completed.

    **Before:**

    ![ERRSA test area before a rollback, with a diamond-block structure beside a house](../../assets/images/admin-training/coreprotect-live-rollback-before.webp)

    **After:**

    ![ERRSA test area after a rollback, with the diamond-block structure no longer visible beside the house](../../assets/images/admin-training/coreprotect-live-rollback-after.webp)

    This is why you check **both** the reported damage and any nearby player work. If you cannot account for a change, stop and get a second review before making further edits.

For large or complex corrections, ask a Developer or Server Lead to review the scope. If a rollback was incorrect, preserve what happened and get help before attempting `/co restore`; blindly reversing commands can make the issue worse. See the [CoreProtect command reference](https://docs.coreprotect.net/commands/){ target="_blank" }.

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

!!! example "Missing pickaxe"
    A player says they lost a named Netherite Pickaxe with several enchantments. A log indicating one netherite pickaxe moved does not, on its own, verify the name or every enchantment. Check any remaining copies, screenshots, or other supporting evidence, then document what can actually be confirmed.

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

The wiki does not currently contain an approved, exact ERRSA process for rebuilding complex shulkers or editing offline inventories. Until that process is documented, **learn the investigation and verification steps here, and practice actual delivery with a supervising Admin**. We should not present a guessed item-giving command as official recovery policy.

## Inventory Editing & Limited Creative Access

Admins have tools that can inspect or modify inventories and may use creative mode for appropriate repairs. These are staff recovery tools, **not conveniences for normal gameplay**.

When using them:

- Confirm the correct player and inventory before making changes.
- Avoid moving or deleting unrelated items.
- Do not keep, trade, or use recovered property personally.
- Keep staff-created items separate from normal player inventories until the recovery is verified.
- Return to normal gameplay mode and remove temporary investigation materials afterward.

Use the ERRSA [InvSee++ plugin reference](../../plugins/permissions-and-moderation/invseeplusplus.md){ data-preview } for `/invsee <player>` and `/endersee <player>`. Editing access is available, but offline inventories and world-specific inventories can behave differently. Verify the context before changing items; escalate any uncertainty about where the original inventory lives.

---

## Accidental Damage & Large Repairs

Damage is not always caused by malicious behavior. A staff WorldEdit mistake, an approved event, or a plugin problem may also require restoration.

For a small, verified change, an Admin may be able to repair the area directly. For a large edit, shared build, or event map, coordinate with a Developer or Server Lead before taking action. They may need to inspect backups, WorldEdit history, or other tools not available to Admins.

Do not restore an entire world or change server backups independently. A server-wide recovery can overwrite unrelated player progress.

---

## Recording the Restoration

The relevant Player or General record should explain:

- The original problem and supporting evidence.
- Which world, area, inventory, or items were affected.
- What was restored and which method was used.
- Any limitations, unresolved discrepancies, or player follow-up.

If another Admin needs to revisit the issue, they should be able to understand the correction without guessing what you changed.

!!! example "A careful recovery"
    A player reports a damaged wall and missing chest contents. CoreProtect confirms who broke the wall, but the container logs do not verify every item claimed. Restore the verified block changes, investigate the item movements separately, and document what can and cannot be confirmed before returning items.

---

## Check Your Understanding

You verified that a player damaged part of a house, but the CoreProtect rollback preview includes edits outside the reported wall. Should you run the rollback because the player is confirmed to have griefed?

??? tip "Suggested approach"
    No. Use `/co cancel` to reject the unsafe pending preview. Recheck the evidence, narrow the time or radius, and preview again only when you understand which changes require restoration. If you still cannot isolate the reported damage, ask another Admin or Developer to review it. After an authorized correction, inspect the area and document what changed.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod4/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 4 · Server Operations</strong><span>Learn how to read server status and handle routine operational issues.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
