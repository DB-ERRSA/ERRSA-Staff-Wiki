---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# 4. Staff Actions & Records

Almost all staff actions & records go through the **MC Staff Action Center** in Discord for formal player communication and logging. The ERRSA MC Discord bot implements `/staff email` for members with the **MC Staff** Discord role. It will collect information from you and send the request to Power Automate, which connects to our database with player's emails, and reports whether the email was sent successfully.

---

## 4.1 Investigate and Decide

When taking action, collect the facts, relevant screenshots, logs, and witnesses' input. Check the [standard procedures](standard-procedures.md#32-situation-specifics){ data-preview } for the specific situation and escalate through the [chain of command](staff-roles-responsibilities.md#21-chain-of-command){ data-preview } when needed. Keep evidence in the approved staff record location; the email bot form is for composing a notice, not uploading evidence.

---

## 4.2 Send a Written Warning

1. In the staff channel on Discord, run `/staff email` and choose **Warning**.
2. Fill out the information in **Player Username**, **Incident**, **Relevant Action**, **Course of Action**, and **Campus Official**.
3. Review the preview carefully, including the action expected of the player and the name of the campus official sending the email.
4. Submit and wait for **Email sent successfully**. If Discord reports a failure, notify the responsible staff member and resolve it before treating the email as delivered.

A warning should explain the rule, the observed behavior, and the requested correction. [Check prior staff records](logging-documentation.md#44-incident-records){ data-preview } before describing it as a first warning. Only an authorized campus official should approve or send official correspondence; entering a name in the bot is not authorization.

---

## 4.3 Send a Disciplinary Action Notice

Following similar steps as [sending a written warning](logging-documentation.md#42-send-a-written-warning){ data-preview }, run `/staff email` and choose **Action** for a formal notice of a ban, kick, mute, or other disciplinary action. The form asks for **Player Username**, **Incident**, **Occurrence**, **Length of Action**, **Next Length of Action**, **Course of Action**, and **Campus Official**. Confirm the action and duration match what was actually approved and applied before submitting. Wait for the success confirmation.

---

## 4.4 Incident Records

Record the evidence, action taken, responsible staff, dates, and any other relevant information in the staff channel on Discord. You can also use `/staff search <username>` to view previous warnings and actions associated with that username. Do not rely on a successful email response as proof that a complete incident file exists.

---

## 4.5 Student Conduct Escalation

For a serious incident or suspected honor code violation, preserve the player's username and UUID where available, relevant evidence, timeline, and staff actions. The Server Lead should bring the case to the ERRSA advisor or the appropriate Housing and Residence Life professional staff for guidance on a formal report. Avoid sharing sensitive details in public channels.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../server-version/">
    <span class="handbook-next__copy"><small>Next section</small><strong>5. Server versions</strong><span>Understand release numbers and read the changelog.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
