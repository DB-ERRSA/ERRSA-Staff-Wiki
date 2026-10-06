---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 1 · Moderation Fundamentals

Moderation is not simply about taking action against players. Effective moderation means understanding when action is necessary, which action is appropriate, and how to communicate and document that decision.

---

## Choosing the Appropriate Action

Choosing the correct action is just as important as deciding whether action is necessary.

A minor violation should not receive an unnecessarily severe punishment, while serious or repeated violations may require stronger action. Staff should consider the severity of the violation, the player's history, whether the behavior was intentional, and whether the behavior is continuing.

[Section 3.2](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview } of the staff documentation provides **standard procedures** for common violations, including the steps to follow, the appropriate administrative action, and the appropriate duration.

!!! important "Follow the procedure"
    When a standard procedure applies, use it rather than determining a punishment from scratch. Always document the resulting action.

When no standard procedure directly applies, use your best judgment based on the circumstances. If you are unsure which action is appropriate, consult another staff member or escalate the situation to an Admin.

---

## Moderation Actions

### 1. Warnings

A warning is simply communication with a player about their behavior.

For relatively minor situations, an informal warning can be given through direct communication such as in-game chat or Discord.
There is no official format or standard for informal warnings. It is just communication with a player that their behavior is potentially wrong and could result in further action if escalated or continued.

A formal written warning should be used when a situation is a serious direct violation of the rules. Formal written warnings are sent to the player's student email and can be issued through the Discord staff tools which will be explained more in [Module 6](mod6.md#official-written-warnings){ data-preview }.

<br>
### 2. Kicks

A kick is a stronger immediate warning that removes a player from the server without issuing a ban.

Kicks can be useful for situations such as:

- Escalating an informal warning
- Temporarily stopping chat spam
- Removing an [AFK]("Away From Keyboard, or in other terms, not currently at their computer") player when appropriate
- Other situations where temporarily removing a player is useful

<br>
Kicks can be issued in-game with:
```text
/kick <player> <reason>
```
Where `<player>` is the specified username, and `<reason>` is a [string]("Strings are a data type used to represent text. It is a sequence of characters, such as 'Hello world!'").

The reason should briefly explain why the player was removed. This gives the player immediate context for the action and helps avoid confusion when they reconnect.

<br>
### 3. Mutes

A mute can be used when a player's communication is disrupting others, such as continued chat violations.

The appropriate duration and circumstances for a mute should follow the applicable [standard procedure](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview }.

<br>
Mutes can be issued in-game with:
```text
/mute <player> <length> [reason]
```
Where `<length>` determines how long the player will remain muted.

!!! tip "Duration format"
    Durations use a number followed by a [time unit]("s = Second, m = Minute, h = Hour, d = Day, w = Week, y = Year"). Multiple units can be combined, such as '1d12h' for one day and twelve hours.

<br>
### 4. Bans

A ban prevents a player from accessing the server for a specified period.

Bans should only be issued when following the applicable [standard procedure](../../documentation/standard-procedures.md#32-situation-specifics){ data-preview } and using the appropriate duration. Depending on the situation, ban lengths can range from one day to permanent.

<br>
Temporary bans can be issued in-game with:
```text
/tempban <player> <length> [reason]
```
Temporary bans use the same format as mutes for usernames, length, and reason.

<br>
Permanent Bans can be issued in-game with:
```text
/ban <player> [reason]
```
A permanent ban prevents the player from accessing the server indefinitely.

!!! danger "Ban documentation"
    Bans may also be issued when immediate action is required and no existing procedure adequately covers the situation. **Every ban must be logged!**

---

## Giving Clear Reasons

Whenever administrative action is taken, the player should receive a clear explanation of why.

A player may genuinely be unaware that their behavior violated a rule. When issuing an action, always provide a brief reason directly though the command.

For example `/tempban player1 7d Griefing another players build.` Would issue a temporary ban to player1 that lasts 7 days with the reason, "Griefing another players build."

However, specifying a reason in the command is not sufficient enough documentation. A formal report still needs to written and issued. [Section 4](../../documentation/logging-documentation.md){ data-preview} of the staff documentation contains more information, which will be covered in [Module 6](mod6.md){ data-preview }.

---

## De-escalating Difficult Situations

Player interactions can become difficult when players disagree with staff involvement, are attempting to bypass a rule through a loop-hole, or become angry about an action that was taken. 
It's important to stay calm, and remember the [staff conduct expectations](../../documentation/staff-roles-responsibilities.md#22-staff-conduct-expectations){ data-preview }.

Moderators should always attempt to de-escalate these situations when possible.

- Remain neutral and professional
- Avoid arguing with the player
- Never instigate or intentionally provoke the situation
- Avoid rage baiting or rude behavior
- Never act like you are above them, try to be level and understanding
- Explain the applicable rule or procedure
- Focus on resolving the situation rather than winning an argument

!!! tip "Keep the goal in mind"
    The goal of moderation is to maintain a fun, fair, and friendly server. Not to prove that a staff member is right.

---

## Using Moderation Powers Appropriately

Additional permissions come with additional responsibility.

Staff powers must never be used:

- For personal gain
- Out of spite
- To troll players
- To settle personal disagreements
- For entertainment purposes

They should only be used for legitimate moderation purposes when a situation requires them.

!!! danger "Abuse of staff powers"
    Misuse of staff powers is a direct violation of staff guidelines and can result in removal from the staff team.

Staff members are also not immune from administrative action simply because they are staff. Staff are held to the same rules as players and, in some cases, a higher standard.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod2/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 2 · Handling Player Reports</strong><span>Learn how to review reports, gather information, collect evidence, and document incidents.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>