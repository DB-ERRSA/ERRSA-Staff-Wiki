---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# 4. Staff actions & records

Use the **MC Staff Action Center** in Discord for formal player warning and disciplinary action emails. The attached bot implements `/staff email` for members with the **MC Staff** Discord role. Its form sends the request to Power Automate and reports whether the service confirms success.

## 4.1 Investigate and decide

Collect the facts, relevant screenshots, logs, and witness input. Check the [standard procedures](standard-procedures.md) for the situation and escalate through the chain of command ([Section 2.1](staff-roles-responsibilities.md#21-chain-of-command){ data-preview }) when needed. Keep evidence in the approved staff record location; the email bot form is for composing a notice, not uploading evidence.

## 4.2 Send a written warning

1. In the staff Discord, run `/staff email` and choose **Warning**.
2. Complete **Player Username**, **Incident**, **Relevant Action**, **Course of Action**, and **Campus Official**.
3. Review the preview carefully, including the action expected of the player and the name of the campus official sending the email.
4. Submit and wait for **Email sent successfully**. If Discord reports a failure, notify the responsible staff member and resolve it before treating the email as delivered.

A warning should explain the rule, the observed behavior, and the requested correction. Check prior staff records before describing it as a first warning. Only an authorized campus official should approve or send official correspondence; entering a name in the bot is not authorization.

## 4.3 Send a disciplinary action notice

Run `/staff email` and choose **Action** for a formal notice of a ban, kick, mute, or other disciplinary action. The form asks for **Player Username**, **Incident**, **Occurrence**, **Length of Action**, **Next Length of Action**, **Course of Action**, and **Campus Official**. Confirm the action and duration match what was actually approved and applied before submitting. Wait for the success confirmation.

## 4.4 Keep an incident record

Record the evidence, action taken, responsible staff, dates, and the bot's delivery outcome in your approved staff record location. The attached bot only implements `/staff email`; its source does not show a `/staff search` command, database storage, or a staff log channel. Check the Power Automate flow separately for any downstream storage. Do not rely on a successful email response as proof that a complete incident file exists.

## 4.5 Student conduct escalation

For a serious incident or suspected honor code violation, preserve the player's username and UUID where available, relevant evidence, timeline, and staff actions. Bring the case to the ERRSA advisor or the appropriate Housing and Residence Life professional staff for guidance on a formal report. Avoid sharing sensitive details in public channels.
<nav class="handbook-next" aria-label="Continue reading">
  <a href="../server-version/">
    <span class="handbook-next__copy"><small>Next section</small><strong>5. Server versions</strong><span>Understand release numbers and read the changelog.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
