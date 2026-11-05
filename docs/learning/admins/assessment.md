---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Admin Practical Assessment

These situations are designed to check whether you can use the Admin modules, not whether you memorized every plugin command. Work through each scenario using the wiki. Explain what you would do, what you would check, and when you would ask for help.

!!! info "How to complete this"
    For certification, complete these with a more experienced Admin or the Server Lead. Use a test area or example results for commands that change the world, player data, or server state. If a Moderator does not have permission to run an exercise, use an approved test environment or supervised temporary access authorized by the Server Lead, then remove that access afterward. Do not use live players or property for training exercises without authorization.

---

## 1. Investigating a Theft Report

A Moderator escalates a report: 20 diamonds are missing from a chest in Survival. The owner noticed the loss about an hour ago, but does not know who took them.

Explain how you would verify the chest and search CoreProtect **without naming a suspect at first**. Which results would you focus on? What would you check before determining that theft occurred? What would you put in the staff record?

??? tip "What an experienced Admin should look for"
    Get the world, coordinates, time, and shared-access context. Use `/co i` to inspect the specific chest's Container Transactions first; navigate pages with the arrows or `/co l <page#>`. Use `/co lookup t:2h r:10 a:container` only when a filtered or broader view is needed, checking that nearby-container results belong to the exact chest. Read removal entries, narrow to the account if found, verify whether access was authorized, and record both findings and uncertainties. Do not issue punishment or replace items on the original allegation alone.

---

## 2. Restoring a Damaged Build

CoreProtect shows `ExamplePlayer` broke part of a player's house, **and that same account also built a legitimate porch nearby during the same hour**.

Show how you would scope the lookup, preview a rollback, and decide whether it is safe. What would make you stop? What should you verify afterward?

??? tip "What an experienced Admin should look for"
    Confirm the responsible account, affected world, time, and radius. Look up all changes by `ExamplePlayer`, then preview the rollback. Because **the same account** made both changes, filtering by user alone is insufficient. Consider narrowing the time, area, and action (`a:-block` only if the griefing was breaking blocks). On ERRSA, **`/co cancel`** rejects a pending unsafe preview, while **`/co apply`** confirms only a fully reviewed and authorized one. A reported 0-block preview is not proof the damage was corrected. Inspect the building and record the exact filters, decision, and result.

---

## 3. Resolving a Player-Access Problem

A player says their friend is trusted but cannot open a chest in their Survival house. The friend can use a button near the door.

How would you confirm the claim owner and trust? What would you recommend to the owner? When would you suspect another protection system?

??? tip "What an experienced Admin should look for"
    Use the stick to inspect the claim, then `/trustlist` while standing inside it. AccessTrust may explain button access without chest access; the owner can use `/containertrust <friend>` if they want to allow it. If the expected trust already exists, check subdivisions or WorldGuard before changing anything. Do not delete the claim or use bypass as a shortcut.

---

## 4. Responding to a Major Incident

Several players report identical unusual items. A Moderator suspects a duplication exploit, and the server begins lagging. Nobody has identified the cause.

What is your immediate priority? Which tools can help you understand the impact? Which staff roles need to be involved? What should **not** be done before the facts are established?

??? tip "What an experienced Admin should look for"
    Identify the affected players, worlds, items, and time window; preserve screenshots and other evidence; gather non-destructive performance readings with `/spark tps` and `/spark health`; and promptly involve a Developer and Server Lead. Do not clear inventories, restart repeatedly, publish exploit details, or blame a player without evidence. Track who is investigating and what happens next.

---

## 5. Releasing a Player From Jail

A Moderator used `/jail TestPlayer void` during an investigation. The report is now resolved, but the player still appears confined. Explain what you would verify before releasing the account, which command you would use, and how you would confirm the release actually worked. What should you do if the command errors or the player is offline?

??? tip "What an experienced Admin should look for"
    Confirm the correct account and actual jail state, use `/essentials:unjail TestPlayer` when the account is jailed, and verify the player is no longer confined. Record the result. Because Essentials' aliases share a toggle implementation, do not repeatedly run the command when the jail state is uncertain. For errors, offline cases, or different-world behavior, preserve the error and involve an experienced Admin or Developer rather than experimenting.

---

## Supervised Practice Check

These scenarios assess your judgment, but a written answer is not the same as having used the tools. To complete the required Admin certification, demonstrate the supervised exercises below. Independent restorations and complex item recovery still require separate approval:

- Read a real or test **CoreProtect container history**, identify the account, item, quantity, timestamp, and location, and explain what the log does **not** prove.
- Preview a rollback on a **test build**, point out which changes would be affected, and demonstrate `/co cancel` for an unsafe pending preview. With authorization and supervision, use `/co apply` only for a correctly scoped test preview. Do not apply a rollback to player property for practice.
- Inspect a test claim and explain why AccessTrust does not necessarily grant chest access.
- Record a short `/spark tps` reading and distinguish server lag from a player's low FPS.
- Jail and release a consenting test account, and verify the final state.

A supervising Admin or Server Lead should confirm the trainee can **interpret the output and recognize when to stop**. Some cases, especially offline inventory recovery, need a separately approved procedure rather than trial and error.

### Training Sign-Off

Keep a brief completion record after the supervised session. Mark each exercise **Demonstrated**, **Needs practice**, or **Not yet tested**. A written answer alone does not authorize independent world restoration.

| Exercise | Result | Reviewer / date |
| --- | --- | --- |
| CoreProtect chest history and result navigation | Not yet tested | — |
| Safe versus unsafe rollback preview; cancel/apply on test build | Not yet tested | — |
| Claim ownership and trust check | Not yet tested | — |
| TPS/MSPT interpretation | Not yet tested | — |
| Jail and release test account | Not yet tested | — |

**Independent restoration approved?** Record **Yes / No**, the approving Admin or Server Lead, and the date. A trainee can be cleared for basic investigations while still requiring supervision for restorations.

### Final Certification

After reviewing the five scenarios and practical exercises, the supervising Admin completes the [Admin Certification & Training Record](certification.md){ data-preview }. **The Server Lead must approve certification before a new Admin promotion**, and must also arrange certification for existing Admins. Independent restoration authorization is a separate decision recorded on the same form. **Certification does not guarantee promotion or unrestricted restoration access.**

---


## Reviewing Readiness

A trainee should be able to:

- Explain which evidence supports a conclusion and what remains uncertain.
- Choose a sensible first command for the situation and interpret the results.
- Identify when a change could affect unrelated players or the wider server.
- State when a Developer or Server Lead needs to become involved.
- Record the action and outcome clearly enough for another staff member to follow.

If you need to look up a command while completing the assessment, that is fine. **Using the correct procedure matters more than memorizing syntax.**

!!! info "After the assessment"
    Review any uncertain scenarios with an experienced Admin, then record the result using the [certification form](certification.md){ data-preview }. Continue using [Standard Procedures](../../documentation/standard-procedures.md){ data-preview } as the source of truth for disciplinary decisions.
