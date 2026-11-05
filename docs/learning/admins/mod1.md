---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 1 · Advanced Moderation

Admins often receive the cases that Moderators could not resolve on their own. These may involve conflicting stories, repeated violations, significant harm, or a decision that could affect a player's access to the server.

The main difference from ordinary moderation is not the severity of the punishment. It is the amount of investigation and responsibility involved in reaching a fair decision.

---

## Handling Moderator Escalations

When another staff member brings you an issue, begin with what they have already found rather than restarting the entire process.

Ask for:

- A brief summary of the report and who is involved.
- The world, location, and approximate time of the incident.
- Any screenshots, logs, or other evidence already gathered.
- Actions taken so far, including warnings, jails, or temporary restrictions.
- What they could not determine or why they escalated.

Then decide whether you can resolve the issue, need additional investigation, or should involve a Developer or Server Lead.

!!! tip "Give the Moderator an answer too"
    Once the case is resolved, explain the outcome and reasoning to the staff member who escalated it. They should learn what to look for next time, even if they did not have permission to perform the investigation themselves.

---

## Serious Rule Violations

A report of cheating, substantial theft, harassment, or deliberate disruption needs more care than a routine warning.

Before deciding on a punishment:

1. **Establish the facts.** Separate verified events from player statements and suspicions.
2. **Check history.** Review relevant prior records through `/staff search` in Discord.
3. **Assess impact.** Consider the damage, intent, repetition, and whether the behavior is continuing.
4. **Follow procedure.** Use [Section 3.2 of Standard Procedures](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview } for the correct action and duration.
5. **Document the decision.** Include the evidence, reasoning, staff involved, and any remaining work.

In some cases, the first action is simply to stop ongoing harm while an investigation continues. For example, the cheating and theft procedures permit jailing suspects while evidence is reviewed. This is a temporary measure, not a finding of guilt.

!!! important "Do not punish based on an accusation alone"
    Reports, anticheat alerts, and suspicious inventories can justify an investigation. They do not by themselves establish that a player broke the rules.

### Temporary Jailing During Cheating Investigations

[Section 3.2.6](../../documentation/standard-procedures.md#326-cheating-hacking-or-exploiting){ data-preview } currently instructs staff to jail identified potential suspects while an investigation continues. First collect the initial evidence and establish a reasonable connection between the player and the reported behavior. One generic report or isolated Themis alert is a reason to check, not an automatic finding of misconduct.

When the connection is unclear, ask the Server Lead before deciding whether temporary containment is appropriate. If jailing is necessary under the procedure, explain the investigative reason in the staff record, continue reviewing evidence promptly, and release everyone when the investigation ends, including players who receive bans. A jail is temporary; it is not a substitute for deciding whether a violation occurred.

!!! warning "Procedure clarification pending"
    The current procedure does not specify an exact evidence threshold or approval requirement for investigative jailing. The [Investigative Jailing Policy](../../documentation/investigative-jailing-policy.md){ data-preview } is intentionally blank and **not yet approved**. Until the Server Lead decides, follow the existing procedure and escalate uncertain cases rather than creating a new rule from a single alert.

---

## Admin Enforcement Tools

The Moderator section already covers `/jail`, `/tempban`, `/mute`, and how to record punishments. Admins should also understand the additional commands they may need for serious cases:

| Command | When it is useful |
| --- | --- |
| `/ban <player> [reason]` | A permanent ban is authorized under the applicable procedure. Check the exact account, evidence, and approval first. |
| `/unban <player>` | Reversing an incorrect or formally lifted ban. Confirm the decision and clear any related jail state. |
| `/vanish` | Quietly observing an active incident when your presence could affect what happens. Turn it off after the investigation. |

These are not shortcuts around the [standard procedures](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview }. If you need to contain an incident, use the least disruptive authorized action and document why it was necessary.

!!! warning "A permanent ban is not a stronger temporary ban"
    Confirm the intended duration. If the procedure calls for a temporary ban, use `/tempban` instead; do not use `/ban` and assume it will expire.

---

### Releasing a Player From Jail

Jailing is temporary, so finishing the investigation also means checking that every jailed player was actually released. EssentialsX registers `/unjail` as an alias of the same underlying **jail toggle** command. The explicit Essentials command is:

```text
/essentials:unjail <player>
```

**Before using it:** confirm the username, that the player is still marked jailed, and the purpose of release. **After using it:** check the command response, confirm the player is no longer confined when online, and document the outcome. For offline players, confirm the stored jail state has cleared before closing the case; do not assume that an accepted command proves the next login will be normal.

!!! warning "If the command fails"
    ERRSA has previously encountered unexpected jail-toggle behavior when players were in other Multiverse worlds. A release command can fail, and the wrong toggle can affect a player who was not jailed. Do not keep running `/jail` or adding `void` to an unjail command just to see what works. Preserve the error and ask a Server Lead or Developer to check the player state.

??? question "Supervised exercise: Jail and release a test player"
    With a supervising Admin and a consenting test account, confirm the current world and set a short authorized test jail using the documented `void` location. Release the player with `/essentials:unjail <player>` and verify they can move and use normal interactions after release. Repeat only in an approved test setup for an offline or different-world case, and stop if the command errors. Record the command result rather than assuming it worked.

## Repeat Offenses & Player History

Previous disciplinary records help determine whether a player has been warned before and whether the situation is escalating.

However, do not treat every prior incident as an automatic step in the same punishment progression. A past chat violation and a new theft report may be relevant to the player's history without being the same type of repeated offense. **Example:** A player warned for swearing who later steals for the first time is still on their first theft offense. See [Repeated Offenses](../../documentation/standard-procedures.md#repeated-offenses){ data-preview }.

When checking history, consider:

- Whether the earlier violation is the same or closely related.
- Whether the earlier event was verified and documented.
- Whether it resulted in a formal action or only an informal conversation.
- Whether a previous action is still active.
- Whether the current procedure specifies a particular progression.

If the offense count or applicable progression is unclear, consult the Server Lead before taking further action. Do not guess at a higher offense number just because records exist.

!!! warning "Serious conduct and staff issues"
    Cases involving possible student-conduct concerns or abuse of staff powers belong with the Server Lead. If a player was jailed during an investigation, ensure that jail status is cleared as directed by the procedure, including after a ban.

---

## Communicating Difficult Decisions

A player may disagree with the result even when the investigation was thorough. You do not need to argue with them or reveal restricted evidence to justify the action.

Explain the verified behavior, the relevant rule, and the action taken. Keep the explanation neutral and avoid statements that go beyond the evidence.

Formal warnings and disciplinary notices are sent using `/staff email` in the Discord **MC Staff Action Center**. Review the actual message before submission and confirm it was sent. For the full workflow, refer to [Moderator Module 6](../moderators/mod6.md){ data-preview }.

Ban appeals are handled through the [official appeal process](../../documentation/standard-procedures.md#33-ban-appeals){ data-preview }, not by negotiating punishments in public chat.

---

## Maintaining Consistent Enforcement

Consistency does not mean every case receives the same result. It means using the same rules, evidence standards, and reasoning regardless of which player is involved.

For example, two theft reports might look similar, but one could involve a shared container with ambiguous access while another is clearly documented through container logs. The evidence supports different conclusions even if both reports begin with "my items are missing."

!!! example "An escalated report"
    A Moderator forwards a theft report with a location and approximate time but no proof of the accused player's involvement. You should review the relevant claim, inspect the available logs, and hear from the involved players before deciding whether theft occurred. Do not issue a ban simply because the reporter is confident.

Keep one primary Player record updated with the findings and decision. The [Staff Actions & Records](../../documentation/logging-documentation.md){ data-preview } section explains what belongs in the record.

---

## Check Your Understanding

A Moderator reports a player for cheating after one Themis alert. No video, exploit report, or other relevant behavior has been verified. Should you immediately issue a ban or jail?

??? tip "Suggested approach"
    Start by checking the alert and gathering context. Do not treat it as proof of guilt. If evidence identifies a specific suspect and containment becomes appropriate under Section 3.2.6, follow the procedure and document it; involve the Server Lead when the threshold is unclear.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod2/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 2 · Player Investigations</strong><span>Learn to build an evidence timeline and investigate player activity.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
