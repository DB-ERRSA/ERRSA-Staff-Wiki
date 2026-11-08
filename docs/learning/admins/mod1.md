---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 1 · Advanced Moderation

Admins handle cases that Moderators cannot resolve with their regular tools.

**Example:** A player reports that diamonds were taken from a claimed chest. The Moderator confirms the location and collects the player's statement, but cannot determine who removed the items. An Admin uses CoreProtect's container history, checks who had access, and reviews the evidence before deciding whether theft occurred or restoration is appropriate.

Advanced moderation involves reviewing evidence and making decisions that go beyond a routine warning or report.

---

## Handling Moderator Escalations

When another staff member brings you an issue, begin with what they have already found rather than restarting the entire process.

Ask for:

- A brief summary of the report and who is involved.
- The world, location, and approximate time of the incident.
- Any screenshots, logs, or other evidence already gathered.
- Actions taken so far, including warnings, jails, or temporary restrictions.
- What they could not determine or why they escalated.

Moderators may not know the exact time or have permission to obtain every requested record. **Use what is available**, identify the missing information yourself where possible, and decide whether you can resolve the case or need another role's help. Do not reject an otherwise actionable report solely because the Moderator could not supply every detail.

!!! tip "Give the Moderator an answer too"
    Once the case is resolved, explain the outcome and reasoning to the staff member who escalated it. They should learn what to look for next time, even if they did not have permission to perform the investigation themselves.

---

## Serious Rule Violations

A report of cheating, substantial theft, harassment, or deliberate disruption needs more care than a routine warning.

Before deciding on a punishment:

1. **Establish the facts.** Separate verified events from player statements and suspicions.
2. **Check history.** As explained in [Moderator Module 6](../moderators/mod6.md){ data-preview }, use `/staff search` in the Discord MC Staff Action Center. Follow [Staff Actions & Records](../../documentation/logging-documentation.md){ data-preview } for the search and case workflow.
3. **Assess impact.** Consider the damage, intent, repetition, and whether the behavior is continuing.
4. **Follow procedure.** Use [Section 3.2 of Standard Procedures](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview } for the correct action and duration.
5. **Document the decision.** Include the evidence, reasoning, staff involved, and any remaining work.

In some cases, the first action is simply to stop ongoing harm while an investigation continues. For example, the cheating and theft procedures permit jailing suspects while evidence is reviewed. This is a temporary measure, not a finding of guilt.

!!! warning "Do not punish based on an accusation alone"
    Reports, anticheat alerts, and suspicious inventories can justify an investigation. They do not by themselves establish that a player broke the rules.

### Temporary Investigative Jailing

Admins may use reasonable judgment to temporarily jail a player when immediate containment is justified. Follow the [Investigative Jailing Policy](../../documentation/investigative-jailing-policy.md){ data-preview } for the evidence requirements, role authority, time limits, and release procedures.

---

## Admin Commands Used in Escalated Cases

Moderator training already explains ordinary warnings, temporary punishments, and standard jail/release commands. Admins also have tools for authorized investigations and interventions; **having a command does not give permission to use it for an unrelated purpose**.

### EssentialsX: Main Admin Commands

| Command | When it is appropriate |
| --- | --- |
| `/ban <player> [reason]` | **Permanent ban** only when the disciplinary procedure and evidence support it. |
| `/mute <player>` | **Permanent mute** only when the applicable procedure calls for it; a text mute does not stop proximity voice. |
| `/socialspy` | Review relevant private-message activity only for an authorized investigation; protect confidential information. |
| `/sudo <player> <command>` | Execute a command as a player **only with a documented, authorized reason**. This acts on behalf of another account and requires particular care and oversight. |
| `/give <player> <item> [amount]` | Issue verified replacement/test items only for an approved purpose; keep a record. |
| `/item <item> [amount]` | Create items in your inventory for an authorized task, not for personal use. |
| `/gamemode <mode> [player]` | Change game mode for an authorized investigation or repair; restore the previous mode afterward. |

Other useful tools include `/vanish` for quiet observation and `/tp` for reaching a verified incident location without asking a player to accept `/tpa`. Spectator mode can be selected with `/gamemode spectator`; exit it when done. Keep teleport and observation access proportional to the reason for the investigation.

!!! danger "Permanently punitive and powerful commands"
    Do not use `/ban`, permanent `/mute`, `/sudo`, item creation, or game-mode changes as shortcuts around evidence review and the [Standard Procedures](../../documentation/standard-procedures.md){ data-preview }. Use the least disruptive authorized action, record any material change, and stop if a command behaves unexpectedly.

### Jailing and Release: Recap

Moderator training covers the basic jail commands in [Module 1](../moderators/mod1.md#4-jailing){ data-preview }. Use the [Investigative Jailing Policy](../../documentation/investigative-jailing-policy.md){ data-preview } to decide whether a jail is authorized and when the player must be released.

??? question "Supervised practice: containment and release"
    With another Admin and a consenting test player, practice recording a mock jail decision, jailing, releasing, and verifying the final state. Explain which parts of the policy you would check in a real incident.

---

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

A staff member can ask the Server Lead for assistance when a conversation is difficult to resolve or when they do not feel comfortable handling it alone. Players may also request that the Server Lead review a decision after discussing it with the staff member who took the action. This does not automatically reverse the action or bypass the documented appeal process.

Ban appeals are handled through the [official appeal process](../../documentation/standard-procedures.md#33-ban-appeals){ data-preview }, not by negotiating punishments in public chat.

---

## Maintaining Consistent Enforcement

Consistency does not mean every case receives the same result. It means using the same rules, evidence standards, and reasoning regardless of which player is involved.

For example, two theft reports might look similar, but one could involve a shared chest with unclear access while another is supported by [container logs](mod2.md#reading-the-container-results){ data-preview }. Container logs are CoreProtect records showing which account added or removed items from a chest or other container, and when it happened. They show item movement, not whether it was authorized.

**Example: An escalated theft report.** A Moderator forwards a theft report with a location and approximate time but no proof of the accused player's involvement. Review the claim, available logs, and involved players' statements before deciding whether theft occurred. Do not ban based only on the reporter's confidence.

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
