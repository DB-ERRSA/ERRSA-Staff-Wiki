---
tags:
- MOD
- ADMIN
- DEV
- SERVER LEAD
---

# Module 6 · Moderation Records & Disciplinary Actions

Accurate documentation is an important part of moderation. Staff actions and logs should leave enough information for other staff members to understand what happened, why a decision was made, and what action was taken.

When addressing an issue, once you have identified the applicable standard procedure and determined what action is required, the staff action process is used to formally communicate and record that decision.

The entire staff action process is handled through the ERRSA MC Bot in the staff channel on Discord. Depending on the situation, this may involve checking a player's history, sending a formal warning or disciplinary action notice, adding additional incident logs, or escalating the situation to another staff member.

---

## Review the Player's History

Before issuing an action, the first step is to determine whether the player has any previous warnings, actions, or relevant incident records.

This is important because a situation that might normally receive a warning could require stronger action if it is a repeated offense.

In the staff channel on Discord, type:

```text
/staff search <mc username>
```

This searches the staff action records for the specified Minecraft username and displays their records for:

- Official warnings
- Disciplinary actions
- Incident logs

Review the player's history before deciding how to proceed.

!!! important "Consider the player's history"
    Previous records do not automatically determine the outcome of a new incident. Use them as context when determining whether the current situation is a repeated violation.

Records can provide context for:

- Previous warnings
- Previous disciplinary actions
- Repeated violations
- Ongoing incidents
- Decisions made by other staff members

---

## Send the Appropriate Communication

After reviewing the player's history and confirming the appropriate action, the next step is to formally communicate that decision to the player.

The ERRSA MC Bot provides several communication templates:

- Official Warning — Used when a formal warning is appropriate.
- Administrative Action — Used when a disciplinary action such as a mute or ban has been issued.
- Custom Communication — Used when communication is necessary but does not fit the standard warning or action templates.

The bot submits the completed communication to [Power Automate](../../tools/power-automate/index.md){ data-preview }, which identifies the student's email address associated with the Minecraft username and sends the communication.

---

## Official Written Warnings

Formal written warnings are used when a player has committed a direct rule violation that does not warrant administrative action, such as a typical first-time offense where additional grace is appropriate.

For the complete procedure, see [Section 4.2](../../documentation/logging-documentation.md#42-send-a-written-warning){ data-preview } of the Staff Handbook.

In the staff channel on Discord, type:

```text
/staff email
```

Select Warning from the available communication types.

Fill out all relevant information and review the preview before submitting.

Once submitted, the ERRSA MC Bot will provide feedback indicating whether the communication was successfully sent.

Formal warnings should clearly communicate:

- What the player did
- Which rule or expectation applies
- What the player should do differently


!!! info "Keep the communication clear"
    A warning should help the player understand what happened and how to avoid repeating the issue. Avoid unnecessary hostility or vague explanations.

---

## Disciplinary Action Notices

Disciplinary Action Notices follow the same general process as written warnings, but are used when an actual administrative action, such as bans and mutes, have been issued.
The associated communication should clearly explain the reason for the action.

For the complete procedure, see [Section 4.3](../../documentation/logging-documentation.md#43-send-a-disciplinary-action-notice){ data-preview } of the Staff Handbook.

In the staff channel on Discord, type:

```text
/staff email
```

Select Administrative Action from the available communication types.

Fill out all relevant information and review the preview before submitting.

The action should follow the applicable [standard procedure](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview } and use the appropriate duration.

!!! info "The email is for the player"
    The administrative action notice should communicate the relevant information the player needs to understand the action taken against them.

---

## Add Additional Incident Logs

The formal warning or action email is not necessarily a complete staff record.

Administrative actions may involve additional evidence, context, player statements, or reasoning that should not be included in the player-facing communication.

Use the staff logging system to record this additional information.

In the staff channel on Discord, type:

```text
/staff log <mc username>
```

Then fill out the relevant information.

Logs can be useful for:

- Adding context to an issued action
- Explaining why a particular decision was made
- Recording relevant evidence
- Documenting statements or circumstances
- Providing information for staff who may handle a future incident

For additional information, see [Section 4.4](../../documentation/logging-documentation.md#44-incident-records){ data-preview } of the staff documentation.

!!! info "Player communication vs. staff records"
    Emails are for players, logs are for staff. The two are not exclusive. In simple cases, the player-facing communication may contain everything relevant. In more complicated situations, additional information should be recorded internally so that future staff members can understand the full circumstances of the incident.

The goal is to create a record that another staff member can understand without needing additional input or context.

---

## The Staff Action Process

The complete process can be summarized as:

1. Review History - Use `/staff search <username>` in Discord.
2. Determine Action - Follow the applicable standard procedure.
3. Communicate - Send a formal warning, administrative action, or other appropriate communication.
4. Document - Add additional staff logs and relevant evidence.
5. Escalate - Involve the Server Lead or ERRSA Advisor when required.

!!! tip "When in doubt, document and ask"
    Good documentation makes escalation easier. If you are unsure how to proceed, record the relevant information and ask an Admin or Server Lead for assistance.

---

## Moderator Reference

Before taking or recording administrative action, make sure you can answer:

- What happened?
- Which rule or procedure applies?
- What evidence supports the conclusion?
- What action is appropriate?
- Has the action been communicated clearly?
- Has everything relevant been documented?
- Does this need to be escalated?

These questions provide a useful final check before completing a moderation incident.

---

!!! success "Moderator section complete"
    You have completed the core Moderator learning section. Continue reviewing the Staff Documentation, Plugin and Tool references, and Troubleshooting guides as needed while working on the server.