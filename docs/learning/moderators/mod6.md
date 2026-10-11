---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 6 · Moderation Records & Disciplinary Actions

This module teaches you **how to use the ERRSA MC Discord bot** to investigate an issue, review history, send an approved notice, create or update a staff record, and hand off unresolved work. The governing rules remain in [Documentation → Section 4: Staff Actions & Records](../../documentation/logging-documentation.md){ data-preview }; this page is the practical walkthrough.

!!! tip "Start here"
    In Discord, open **MC Staff Action Center**. The three entry points are `/staff search` (find history and existing cases), `/staff log` (create or maintain internal records), and `/staff email` (send approved official notices). Check the actual bot prompts before submitting, since options can vary by workflow.

## The Staff Action Process

1. **Investigate:** Verify what occurred and preserve evidence in approved restricted storage.
2. **Review history:** Search for previous records and any existing unresolved issue.
3. **Decide:** Follow the [situation-specific procedures](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview }; seek approval when required.
4. **Communicate:** Send the appropriate approved player notice when necessary.
5. **Document:** Create or update the internal record, including evidence references, decisions, and next steps.
6. **Follow up:** Revisit unresolved cases, hand off work, and resolve the record only when complete.

## Review the Player's History

In **MC Staff Action Center**, run:

```text
/staff search
```

Choose the relevant search option. For a player matter, select **Player** and enter or select the exact Minecraft username as prompted. Check previous warnings, disciplinary actions, incident logs, and unresolved records before deciding whether this is a repeat issue. You can also search **Plugin**, **General**, or **All Unresolved** records when investigating operational issues.

!!! important "History informs, but does not decide"
    A prior record helps establish context; it does not automatically justify a stronger penalty. Confirm that the history is relevant and that any required escalation or approval has occurred.

## Determine and Apply the Appropriate Action

Use the [staff standard procedures](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview } to determine whether a warning, mute, jail, kick, temporary ban, permanent ban, or no punishment is appropriate. An immediate risk may require prompt intervention; otherwise, when uncertain, ask an Admin or the Server Leads before applying a disruptive action. Note the action, decision-maker, and duration in the incident record.

## Send the Appropriate Communication

Run:

```text
/staff email
```

The bot offers **Warning**, **Action** (administrative/disciplinary notice), and **Custom** communication types. Pick the one that fits the approved decision, complete the fields, and review the preview carefully. The bot sends communications through the associated Power Automate workflow using the registration system; do not disclose or copy private registration details into staff chat.

**Always verify that the bot reports successful sending.** A failed submission must not be described as delivered. A sent email creates a communication record but does not automatically replace the full internal staff log.

## Official Written Warnings

1. Verify the player, the incident, prior history, and required authorization under [Section 4.2](../../documentation/logging-documentation.md#42-send-a-written-warning){ data-preview }.
2. Run `/staff email` and choose **Warning**.
3. Complete **Player Username**, **Incident**, **Relevant Action**, **Course of Action**, and **Campus Official** as the bot requests.
4. Review the preview for factual accuracy, expected behavior, correct recipient, and authorized sender.
5. Submit once; confirm a successful result and update the related Player record.

A helpful warning tells the player what occurred, what expectation applies, and what to do differently without hostility or speculation.

## Disciplinary Action Notices

1. Confirm the action is authorized, its duration, and the applicable [procedure](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview }.
2. Apply or verify the action as appropriate, then run `/staff email` and choose **Action**.
3. Complete **Player Username**, **Incident**, **Occurrence**, **Length of Action**, **Next Length of Action**, **Course of Action**, and **Campus Official**, using only verified and approved information.
4. Review and submit the preview; check the bot's delivery result.
5. Record the punishment, dates, duration, approving staff member, and email outcome in the existing Player log.

See [Section 4.3](../../documentation/logging-documentation.md#43-send-a-disciplinary-action-notice){ data-preview } for the policy governing these notices.

## Custom Communications

Use **Custom** for an approved message that is not a written warning or disciplinary action, such as an operational notice to a player.

1. Run `/staff email` → **Custom**.
2. Enter **Player Username**, **Subject**, **Message**, and **Campus Official** when prompted.
3. Review the recipient, wording, and approval; submit and confirm successful sending.
4. Reference the communication in the relevant staff log when it is part of an ongoing matter.

Custom messages are still official communications. Follow [Section 4.7](../../documentation/logging-documentation.md#47-sending-custom-communications){ data-preview } and do not use this option to bypass required authorization.

## Creating and Managing Staff Records

### Choose the right record type

Open Discord's **MC Staff Action Center** and run:

```text
/staff log
```

| Type | Use it for | Example title |
| --- | --- | --- |
| **Player** | Reports, investigations, player behavior, appeals, restoration | `Grief report — spawn shops — 10 Oct` |
| **Plugin** | Bugs, updates, configuration and technical investigations | `QuickShop — purchase errors after restart` |
| **General** | Outages, cross-plugin issues, staff and server-wide operations | `Survival — unexpected restart — 10 Oct` |

An internal log is **not emailed to the player**. Newly created records begin **Unresolved**.

### Create a record

1. Search first with `/staff search` to avoid duplicating an existing issue.
2. Run `/staff log` and select **Player**, **Plugin**, or **General**.
3. Choose the username or plugin if prompted; enter a short, searchable **Title** and clear **Details**.
4. Include the factual timeline, server/world, evidence references, what was verified, what was done, and next steps. Identify the staff member responsible for follow-up when possible.
5. Submit, confirm creation, and retain the record ID if the bot shows it (otherwise use the exact title).
6. Return to the existing record for updates, resolution, or reopening instead of creating a fresh log for every note.

!!! example "A useful staff note"
    **Title:** `QuickShop — purchase errors after restart`
    **Details:** `Reported 14:10 ET on Survival. Purchase error reproduced at a player shop. Relevant console lines saved in approved restricted evidence storage (ref: QS-2026-10-10). Assigned to Developer for review; resolution pending.`

### Discord bot input reference

The bot shows the fields appropriate to the selected action; **not all fields appear together**.

| Input | Used in | What to enter |
| --- | --- | --- |
| **Player Username** | Email, Player log/search, assignment | Exact Java or Bedrock username; confirm spelling. |
| **Incident** | Warning, Action email | Brief, factual account of the incident. |
| **Relevant Action** | Warning email | Behavior or potential action being addressed. |
| **Course of Action** | Warning, Action email | Clear expected correction or next step. |
| **Campus Official** | Warning, Action, Custom email | Authorized official associated with the communication; not a substitute for approval. |
| **Occurrence** | Action email | Verified first, second, third, etc. occurrence based on prior records. |
| **Length of Action** | Action email | Exact approved punishment and duration. |
| **Next Length of Action** | Action email | Approved consequence for a future recurrence, if applicable. |
| **Subject** | Custom email | Concise official email subject. |
| **Message** | Custom email | Approved player-facing message. |
| **Record Type** | New log | Player, Plugin, or General. |
| **Plugin** | Plugin log/search, assignment | Affected plugin; searches may accept part of the name. |
| **Title** | New log | Short, searchable issue summary. |
| **Details** | New log | Timeline, facts, staff action, evidence reference, follow-up. |
| **Search Query** | Plugin search | All or part of the plugin name. |
| **Note** | Existing log | Factual progress, decision, action, or handoff. |
| **Resolution / Reopen Note** | Resolve/reopen | Why work is finished or further work is required; currently optional. |

### Where information belongs

| Information | Source of truth | What belongs in the log |
| --- | --- | --- |
| Player report or discipline | **Player log** | Facts, decisions, evidence references and follow-up |
| Formal player notice | **Email communication record** | Cross-reference and communication outcome |
| Technical issue | **Plugin log** | Affected software, symptoms, investigation and fix |
| Server-wide incident | **General log** | Scope, response, owners and unresolved work |
| Raw screenshots, CoreProtect output, exports or backups | **Approved restricted storage** | Reference/location and brief explanation, not confidential file contents |
| Standing rules and procedures | **Staff Wiki** | Link to policy; logs record the individual case |

### Case references and related records

When one incident involves multiple logs, choose **one primary record** and only add other types when they capture distinct work. Search existing records before assigning a shared case reference.

1. If a stable bot record ID is shown, you may use `CASE-<record ID>` as the shared label. Otherwise coordinate a unique temporary label such as `CASE-20261010-001` after checking for duplicates.
2. Put the shared label in the **Title**, **Details**, or **Note**, and note related log IDs or exact titles.
3. After sending an email, add its date, type, and communication ID (if available) to the Player log.
4. Resolve each related record individually when its work is finished.

!!! warning "Manual references, not automatic linking"
    The current bot does **not** automatically assign linked case IDs or search related records as a unified case. Shared labels are entered and maintained by staff. Email forms do not currently have a dedicated case-reference field.

### Search, update, resolve, or reopen

Use `/staff search`, select **Player**, **Plugin**, **General**, or **All Unresolved**, and open the relevant record. Add a **Note** for new findings, decisions, or handoffs. Choose **Resolve** and explain the outcome when all relevant work is complete. Use **Reopen** if investigation or remediation resumes. A general log can be reassigned to a Player or Plugin if the subject becomes clear.

For privacy, documentation quality, and record retention expectations, refer to [Section 4.4](../../documentation/logging-documentation.md#44-incident-records){ data-preview }.

## ERRSA MC Bot Downtime

When the bot is offline, follow the temporary process in [Section 4.6](../../documentation/logging-documentation.md#46-discord-bot-downtime){ data-preview }:

1. **Escalate to a Server Lead or Developer.** Only authorized staff should send manual notices using the approved template and registration data.
2. **Send the approved message once**, with the required CC to the Server Lead and `dberrsa@erau.edu`; verify its delivery.
3. **Keep a restricted handoff** with the username, date, sender, message type, result, related issue and secure evidence references. Preserve the complete sent message in the approved restricted record.
4. **Restore the records** using the approved administrative process when service resumes, adding both the original communication and internal incident details as appropriate.
5. **Verify via `/staff search`** that the entries exist, and mark the handoff complete. Never resend an email simply to create a database record.

If safe restoration is not possible, consult a Server Lead or Developer rather than improvising.

## Moderator Reference

Before closing your incident, check: Is the history reviewed? Are factual claims verified? Does the chosen action match procedure and approval? Was the player notified if required? Does the internal record show what happened and what comes next? Are sensitive evidence files securely retained? Has unresolved work been assigned?

---

!!! success "Moderator section complete"
    You have completed the core Moderator learning section. Continue using Staff Documentation for policy, and Plugin, Tool, and Troubleshooting references as needed.
