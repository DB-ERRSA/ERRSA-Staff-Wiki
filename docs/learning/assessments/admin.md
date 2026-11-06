---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Admin Assessment

These situations are designed to check whether you can use the Admin modules, not whether you memorized every plugin command. Work through each scenario using the wiki. Explain what you would do, what you would check, and when you would ask for help.

!!! info "How to complete this"
    Discuss the scenarios with an experienced Admin or the Server Lead. Use a test area or example results for commands that change the world, player data, or server state. If a trainee does not have permission to run an exercise, use an approved test environment or supervised temporary access authorized by the Server Lead, then remove that access afterward. Do not use live players or property for training exercises without authorization.

---

## 1. Investigating a Theft Report

A Moderator escalates a report: 20 diamonds are missing from a chest in Survival. The owner noticed the loss about an hour ago, but does not know who took them.

Explain how you would verify the chest and search CoreProtect **without naming a suspect at first**. Which results would you focus on? What would you check before determining that theft occurred? What would you put in the staff record?

??? tip "Suggested approach"
    Get the world, coordinates, time, and shared-access context. Use `/co i` to inspect the specific chest's Container Transactions first; navigate pages with the arrows or `/co l <page#>`. Use `/co lookup t:2h r:10 a:container` only when a filtered or broader view is needed, checking that nearby-container results belong to the exact chest. Read removal entries, narrow to the account if found, verify whether access was authorized, and record both findings and uncertainties. Do not issue punishment or replace items on the original allegation alone.

---

## 2. Restoring a Damaged Build

CoreProtect shows `ExamplePlayer` broke part of a player's house, **and that same account also built a legitimate porch nearby during the same hour**.

Show how you would scope the lookup, preview a rollback, and decide whether it is safe. What would make you stop? What should you verify afterward?

??? tip "Suggested approach"
    Confirm the responsible account, affected world, time, and radius. Look up all changes by `ExamplePlayer`, then preview the rollback. Because **the same account** made both changes, filtering by user alone is insufficient. Consider narrowing the time, area, and action (`a:-block` only if the griefing was breaking blocks). On ERRSA, **`/co cancel`** rejects a pending unsafe preview, while **`/co apply`** confirms only a fully reviewed and authorized one. A reported 0-block preview is not proof the damage was corrected. Inspect the building and record the exact filters, decision, and result.

---

## 3. Resolving a Player-Access Problem

A player says their friend is trusted but cannot open a chest in their Survival house. The friend can use a button near the door.

How would you confirm the claim owner and trust? What would you recommend to the owner? When would you suspect another protection system?

??? tip "Suggested approach"
    Use the wooden hoe to inspect the claim, then `/trustlist` while standing inside it. AccessTrust may explain button access without chest access; the owner can use `/containertrust <friend>` if they want to allow it. If the expected trust already exists, check subdivisions or WorldGuard before changing anything. Do not delete the claim or use bypass as a shortcut.

---

## 4. Responding to a Major Incident

Several players report identical unusual items. A Moderator suspects a duplication exploit, and the server begins lagging. Nobody has identified the cause.

What is your immediate priority? Which tools can help you understand the impact? Which staff roles need to be involved? What should **not** be done before the facts are established?

??? tip "Suggested approach"
    Identify the affected players, worlds, items, and time window; preserve screenshots and other evidence; gather non-destructive performance readings with `/spark tps` and `/spark health`; and promptly involve a Developer and Server Lead. Do not clear inventories, restart repeatedly, publish exploit details, or blame a player without evidence. Track who is investigating and what happens next.

---

## 5. Releasing a Player From Jail

An Admin temporarily jailed `TestPlayer` during an investigation. The report is now resolved, but the player still appears confined. Explain what you would verify before releasing the account, which command you would use, and how you would confirm that release worked. What should you do if the command errors or the player is offline? Where do you check whether the original jail was permitted and whether a deadline applies?

??? tip "Suggested approach"
    Confirm the correct account and actual jail state, use `/unjail TestPlayer` when the account is jailed, and verify the player is no longer confined. Record the result. Do not repeatedly toggle the jail state if the actual status is uncertain. For errors, offline cases, or different-world behavior, preserve the error and involve an experienced Admin or Developer rather than experimenting. Consult the [Investigative Jailing Policy](../../documentation/investigative-jailing-policy.md){ data-preview } to determine the evidence requirements and applicable release deadline.

---

## What Happens After These Scenarios?

Complete the supervised practical exercises with an experienced Admin or Server Lead. The list, required record fields, reviewer responsibilities, and final decision process are maintained in the [Assessment Process](process.md){ data-preview }, **not** on this trainee-facing page. Written answers alone do not authorize a promotion or unsupervised restoration.

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
    Review uncertain scenarios with the supervisor. The reviewer records the results privately following the [Assessment Process](process.md){ data-preview }. Continue using [Standard Procedures](../../documentation/standard-procedures.md){ data-preview } as the source of truth for disciplinary decisions.
