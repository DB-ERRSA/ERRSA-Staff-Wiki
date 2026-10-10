---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# 4. Staff Actions & Records

**This section explains how to investigate incidents, send official player notices, and keep staff records organized.** You’ll learn which Discord bot command to use, what information to enter, where to save evidence, and how to find, update, and close existing records. Start in **Discord → MC Staff Action Center** using `/staff log`, `/staff email`, or `/staff search`.

!!! tip "What should I use?"
    | What happened? | Record it here | Why? |
    | --- | --- | --- |
    | Player report, investigation, appeal, restoration, or staff follow-up | `/staff log` → **Player** | Keep a history attached to the player |
    | Plugin bug, failed update, configuration change, or technical follow-up | `/staff log` → **Plugin** | Keep an issue history attached to the plugin |
    | Server outage, cross-plugin problem, general staff task, or system change | `/staff log` → **General** | Track work that has no single player or plugin |
    | Official warning, ban notice, or other approved player email | `/staff email` → **Warning**, **Action**, or **Custom** | Send communication and record the notice |
    | Find a prior case or follow up on an open issue | `/staff search` | Search player records, plugin records, general logs, and unresolved items |

**Rule of thumb:** Create **one main log per issue**, then add notes as work progresses. Do not create a new record for every update. Send official emails separately when required; cross-reference the related log using its existing bot record ID (if shown) or its exact title. For incidents involving multiple record types, use the shared case reference described in [4.4](#44-incident-records).

**Keep the record in the bot; keep evidence in secure storage.** The bot brings staff logs and communication history together, but it does not store evidence files. Save screenshots, exported logs, and other sensitive files in an **approved location accessible only to authorized staff**. Then add a short description and a reference to that evidence in the relevant staff log. If you’re unsure where a file belongs, ask the Server Lead before uploading it.

---

## 4.1 Investigate and Decide

1. **Check history:** `/staff search` for the player or plugin, plus similar unresolved reports.
2. **Verify facts:** Capture dates, server/world, what happened, evidence references, and what has already been attempted.
3. **Choose an action:** Follow [standard procedures](standard-procedures.md#32-situation-specifics){ data-preview } and the [chain of command](staff-roles-responsibilities.md#21-chain-of-command){ data-preview }.
4. **Record it:** Create or update the appropriate staff log under [4.4](#44-incident-records). Do not assume an email or a chat message replaces the log.

Keep factual observations separate from suspicions. Never paste registration details, private contact information, credentials, or sensitive evidence into public channels.

---

## 4.2 Send a Written Warning

Use this when an **authorized campus official** has approved a written warning.

1. Run `/staff email` → **Warning**.
2. Enter **Player Username**, **Incident**, **Relevant Action**, **Course of Action**, and **Campus Official**.
3. Check the preview: correct player, accurate facts, expected correction, and approved sender.
4. Submit. Confirm **Email sent successfully**; a failed response does **not** mean delivered.
5. Add a note to the related **Player** log explaining the warning and outcome, or create a player log if the incident has not been recorded.

Check [prior staff records](#44-incident-records) before calling something a first warning. Entering a campus official's name does not grant permission to send on their behalf.

---

## 4.3 Send a Disciplinary Action Notice

For an approved ban, kick, mute, or other disciplinary action:

1. Apply or confirm the **approved** action and duration.
2. Run `/staff email` → **Action**.
3. Complete **Player Username**, **Incident**, **Occurrence**, **Length of Action**, **Next Length of Action**, **Course of Action**, and **Campus Official**.
4. Review the preview and confirm **Email sent successfully**.
5. Update the existing Player log with the action taken, dates/duration, and notice outcome.

Use [4.2](#42-send-a-written-warning) for the same delivery and approval safeguards.

---

## 4.4 Incident Records

**Use `/staff log` for internal work.** Choose **Player**, **Plugin**, or **General**. Every new log starts **Unresolved** and is not emailed to a player.

### Create a record

1. In the MC Staff Action Center, run `/staff log`.
2. Pick the record type using the table at the top of this page.
3. Select a player username or plugin when prompted. Add a **short, searchable title** and **clear details**.
4. Submit and confirm that the bot says the log was created.
5. Save the bot record ID (if shown) or exact title. For a related incident, put the same **case reference** in each record as described below.
6. Revisit the record through `/staff search` to add updates, resolve it, or reopen it if the problem returns.

**A good record answers:** What happened? Where and when? Who handled it? What evidence was checked? What was changed or communicated? What happens next?

!!! example "Good titles and concise notes"
    **Player:** `Grief report — spawn shops — 10 Oct`  
    **Plugin:** `QuickShop — purchase errors after restart`  
    **General:** `Survival — unplanned restart — 10 Oct`

    **Details:** `Reported 14:10 ET on Survival. Reproduced error when buying from a player shop. Relevant console lines archived in approved evidence storage (reference: QS-2026-10-10). Assigned to Developer for review.`

### Keep records organized

| Information | Source of truth | What belongs in the staff log? |
| --- | --- | --- |
| Player reports, staff investigations, disciplinary decisions | **Player log** | Timeline, verified facts, staff actions, evidence references, and follow-ups |
| Warnings and formal notices | **Email communication record** via `/staff email` | Brief cross-reference from the Player log; do not send duplicate emails just to make a record |
| Plugin issues, patches, updates, and configuration decisions | **Plugin log** | Symptoms, affected servers, plugin/version, resolution, and relevant file/console references |
| Server-wide issues, procedures, general operations | **General log** | Scope, responsible staff, decision, work done, and outstanding actions |
| Raw console output, CoreProtect data, files, screenshots, backups | **Their approved technical or restricted evidence storage** | A link, reference ID, location, and concise summary; not full dumps or confidential data |
| Long-term how-to instructions and approved standing policy | **Staff Wiki** | Link to the relevant wiki page; logs capture individual cases and changes, not replacement procedures |

### Discord bot input reference

Use this table when completing `/staff email`, `/staff log`, or `/staff search`. **Only enter verified information.** The bot presents fields based on the option selected; not every field appears in every form.

| Input | Used in | What to enter |
| --- | --- | --- |
| **Player Username** | Email: Warning, Action, Custom; Player log; Player search; Assign to Player | The player's exact Java or Bedrock username. Check spelling before submitting. |
| **Incident** | Email: Warning, Action | A short, factual summary of what happened, including relevant context. |
| **Relevant Action** | Email: Warning | The behavior or potential disciplinary action addressed by the written warning. |
| **Course of Action** | Email: Warning, Action | What the player must do or change next. Keep it clear and specific. |
| **Campus Official** | Email: Warning, Action, Custom | Name of the authorized campus official responsible for the message. |
| **Occurrence** | Email: Action | Whether this is the first, second, third, etc. documented occurrence; check prior records. |
| **Length of Action** | Email: Action | Exact approved punishment or restriction and its duration, such as `24-hour ban`. |
| **Next Length of Action** | Email: Action | The stated consequence for another occurrence, if approved. |
| **Subject** | Email: Custom | A clear, concise email subject line. |
| **Message** | Email: Custom | The approved message to send to the player. |
| **Record Type** | New log | Choose **Player**, **Plugin**, or **General** based on the issue. |
| **Plugin** | Plugin log; Plugin search; Assign to Plugin | Select the affected plugin; plugin search accepts part of its name. |
| **Title** | New log | A short, searchable summary of the issue; add a case reference when applicable. |
| **Details** | New log | What happened, when and where, evidence references, steps taken, and next steps. |
| **Search Query** | Plugin search | All or part of the plugin name to locate relevant records. |
| **Note** | Add note to existing log | A dated factual update, action, decision, reference, or follow-up. |
| **Resolution / Reopen Note** | Resolve or reopen log | Why the issue is finished or why further work is needed; this field is optional in the current bot. |

!!! note "Case references are not bot input fields yet"
    Until automatic case linking is implemented, add the shared case reference to a log's **Title**, **Details**, or **Note**. The existing `/staff email` forms do not have a dedicated case-reference field.

### Case references and related records

**Goal:** Give one incident a single reference so staff can find its player, plugin, general, and email history together, even if those records stay separate.

!!! info "Planned bot improvement — not automatic yet"
    The current bot has record searching and notes, but **automatic case-ID assignment and linked-case search are proposed features**. Until the bot is updated, staff must enter and search case references manually. Do not assume a case reference automatically connects records in the database.

**Use these rules now:**

1. **Start with an existing record.** Search `/staff search` before opening a new case. If the issue already has a record, update it rather than creating a duplicate.
2. **Choose one case reference.** If the bot provides a stable record ID, use `CASE-<record ID>` as the shared reference. Otherwise, the staff member coordinating the incident assigns a temporary reference such as `CASE-20261010-001`, after checking existing records to avoid reuse. Treat this as a *manual label*, not a system-generated ID.
3. **Put the reference in each related record.** Include `Case: CASE-...` at the start of the title or first note, and list the other record IDs or exact titles under `Related records:`. Keep one **primary** record for the incident and only make additional Player, Plugin, or General records if they serve a distinct purpose.
4. **Cross-reference formal notices.** When sending `/staff email`, add the case reference to the corresponding Player log notes with the notice type, date, and communication record ID if available. **Do not assume the current email form has a case-ID field.**
5. **Close the case deliberately.** Resolve the primary record when no action remains. Check related records individually and resolve them only when their work is complete; a shared label does not automatically update their statuses.

| Situation | Primary record | Related records only if needed |
| --- | --- | --- |
| Player exploit caused by a plugin defect | **Player** for the investigation | **Plugin** for technical diagnosis and fix |
| Server outage affecting several plugins | **General** for the incident timeline | **Plugin** for separate repair tasks |
| Formal warning after a player report | **Player** for facts and outcome | `/staff email` communication record for the notice |

!!! example "One incident, linked manually"
    **Case:** `CASE-20261010-001` *(illustrative; confirm it is unused before assigning)*  
    **Primary Player log:** `CASE-20261010-001 — Item duplication report`  
    **Related Plugin log:** `CASE-20261010-001 — Inventory plugin exploit fix`  
    **Player log note:** `Related records: Plugin log "CASE-20261010-001 — Inventory plugin exploit fix". Warning email sent 10 Oct; see communication history.`

### Search, update, and close

- Run `/staff search` → **Player**, **Plugin**, **General**, or **All Unresolved**.
- Open an existing log, then **add notes** as the issue develops. Use **Resolve** when finished, with a short closure explanation. Use **Reopen** if new work is needed.
- Reassign a general log to a **Player** or **Plugin** when the actual subject becomes clear.
- Use Discord channels to discuss and coordinate work, then add important updates, decisions, and final outcomes to the existing bot record so other staff can find the full history in one place.

!!! note "Two types of records"
    `/staff email` records **formal communications**; `/staff log` records **internal investigation and operational work**. `/staff search` brings both into the staff search workflow. Creating a log does not send an email, and sending an email does not automatically document the full investigation.

---

## 4.5 Student Conduct Escalation

For a serious incident or suspected honor code violation:

1. Preserve the **username and UUID** (where available), factual timeline, staff actions, and evidence references.
2. Create or update a **Player** log; limit sensitive details to approved restricted locations.
3. Escalate to the **Server Lead**, who coordinates with the ERRSA advisor or the appropriate Housing and Residence Life professional staff.
4. Log the handoff and any authorized follow-up. Do not investigate beyond your role or post sensitive case details publicly.

---

## 4.6 Discord Bot Downtime

If `/staff email` is unavailable, the **Server Lead or a Developer** may use the approved email template pinned in the staff channel. If `/staff log` or `/staff search` is also unavailable, keep a temporary restricted handoff note and backfill the records when service returns.

### 4.6.1 Sending the Email

1. A Developer or the Server Lead retrieves the correct address from the player registration database.
2. Use the approved template and obtain any required authorization.
3. **CC the Server Lead and `dberrsa@erau.edu`** for receipt and recordkeeping.
4. Send once and verify successful delivery.

### 4.6.2 Recording the Action

In the designated **staff-restricted channel**, make one temporary handoff containing:

- Player username; notice type; date/time; sender; delivery status.
- A reference to the sent message or approved email archive, plus relevant incident context and evidence references.
- The related log title/ID if one already exists and who is responsible for backfilling.

Follow the existing staff recordkeeping requirement to retain the **full email contents** in the approved restricted record. Do not repost private registration information or sensitive attachments in general chat, and do not use a public Discord channel as an evidence archive.

### 4.6.3 Restoring Records After Downtime

1. Backfill the **sent communication** into the communication database using the approved administrative process.
2. Create or update the appropriate **Player**, **Plugin**, or **General** log with the investigation, action, and evidence reference.
3. Use `/staff search` to verify the records are present; mark the temporary handoff as complete.

!!! warning "Do not resend"
    **Do not send a second email** just to restore the database record. Record the email that was already sent. If you cannot safely backfill it, escalate to the Server Lead or Developer.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../server-version/">
    <span class="handbook-next__copy"><small>Next section</small><strong>5. Server versions</strong><span>Understand release numbers and read the changelog.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
