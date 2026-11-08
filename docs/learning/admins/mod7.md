---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Module 7 · Handling Major Incidents

Most player issues affect one person or a small group. Occasionally, something happens that threatens the wider community, server stability, or the integrity of player progress.

Examples include large-scale griefing, a duplication exploit, deliberate lag, an extended outage, or a problem that affects many players at once. In these situations, an Admin's role is to help contain the problem, preserve evidence, and coordinate the response rather than trying to solve everything alone.

---

## Recognizing a Major Incident

An issue may require a larger response when:

- Several players or areas are affected at once.
- The issue is actively spreading or causing additional damage.
- An exploit could create or destroy large amounts of items or currency.
- Players cannot reliably connect or the server is repeatedly crashing.
- The cause is unknown and an attempted fix could make things worse.

Not every unusual event is a major incident. First establish the scope, then involve the appropriate staff roles.

---

## Immediate Priorities

When a serious incident is discovered, focus on these steps:

1. **Identify the impact.** Determine what is happening, where, when it began, and who is affected.
2. **Limit further harm.** Take only the immediate measures authorized by the applicable procedure.
3. **Preserve evidence.** Keep relevant logs, screenshots, locations, player information, and timestamps.
4. **Notify the right people.** Bring technical incidents to Developers and major decisions to the Server Lead.
5. **Coordinate the response.** Clarify who is investigating, communicating with players, and performing technical work.
6. **Track the outcome.** Maintain an incident record until recovery and follow-up are complete.

!!! important "Containment is not the same as punishment"
    Temporary containment must follow the [Investigative Jailing Policy](../../documentation/investigative-jailing-policy.md){ data-preview }. Evidence and release requirements depend on the circumstances; containment does not establish guilt.

---

## Major Exploits & Economy Abuse

A duplication exploit, unauthorized transfer between worlds, or another game-breaking issue can affect more than the player who discovered it.

For example, duplicated items may already have been traded or placed in other containers. Simply deleting one suspicious stack may not address the underlying problem.

When this occurs:

- Collect the initial report and any reliable evidence of the behavior.
- Identify the potentially affected players, items, worlds, and transactions.
- Avoid public discussion of the exploit method while it is still active.
- Escalate promptly to a Developer to investigate and contain the technical cause.
- Coordinate disciplinary action under the [cheating and exploiting procedure](../../documentation/standard-procedures.md#326-cheating-hacking-or-exploiting){ data-preview }.

Do not perform an unverified inventory wipe or economy-wide correction on your own. Those actions can affect legitimate progress and may require database or backup work.

---

## Large-Scale Griefing

If multiple structures have been damaged, first determine whether it is a single incident, a coordinated action, or an unrelated series of events.

CoreProtect can help establish the locations, times, and responsible accounts. Preserve the results before any rollback and work with other staff to identify the boundaries of the damage.

For world restoration, begin with narrowly verified changes using the CoreProtect preview process in [Module 3](mod3.md){ data-preview }. For stolen items, use [Module 4](mod4.md){ data-preview }. If large WorldEdit operations, backups, or world-level restoration are required, coordinate with a Developer or Server Lead.

!!! tip "Separate accountability from recovery"
    One staff member can investigate responsibility while another checks the affected areas. The repair does not need to be delayed until every disciplinary question is settled, but it should not destroy evidence or create additional losses.

---

## Crashes, Lag Machines & Widespread Outages

Server instability may come from a plugin failure, a network issue, or something happening in-game, such as an excessively complex or intentionally disruptive machine.

As an Admin:

- Use `/spark tps` to check for backend performance problems when accessible, and note whether the issue affects the proxy, one backend, or a specific world.
- Record the approximate start time and observable symptoms.
- Preserve relevant logs or affected coordinates when available. Admins can use `/mclogs` and `/mclogs list` to locate relevant logs; follow the privacy precautions from [Module 5](mod5.md){ data-preview }.
- Notify a Developer or Server Lead immediately for crashes and major outages.
- Do not repeatedly restart servers or attempt uncontrolled fixes.

The [server crash procedure](../../documentation/standard-procedures.md#321-server-crashes){ data-preview } assigns technical response to Developers or the Server Lead and calls for a public announcement if downtime exceeds 15 minutes.

For a suspected lag machine, use the [lag machine procedure](../../documentation/standard-procedures.md#329-lag-machines){ data-preview }. Distinguish between a legitimate build that causes unintended lag and a machine intended to disrupt the server.

---

## Coordinating With Developers & the Server Lead

During a major incident, different staff members may be able to help with different parts of the response.

| Responsibility | Typical lead |
| --- | --- |
| Player reports and initial evidence | Moderator / Admin |
| In-depth player investigation and verified restoration | Admin |
| Plugin failures, exploits, backups, or infrastructure | Developer |
| Major administrative decisions and overall coordination | Server Lead |

Avoid several staff members making conflicting changes at once. Confirm who is responsible for the investigation, technical work, player communication, and final decision.

---

## Incident Communication & Follow-Up

Players need clear updates during major problems, but updates should not contain unverified accusations, private evidence, or technical details that could help someone reproduce an exploit.

An appropriate update explains what is affected, what players should avoid doing, and where they can look for further announcements. Do not promise an exact restoration time or outcome before it has been confirmed.

For the internal record, keep a timeline that includes:

- When the issue was reported and first verified.
- What services, worlds, players, or items were affected.
- Actions taken to contain and investigate it.
- Staff involved, evidence references, and decisions made.
- Recovery results and any unresolved follow-up.

Use `/staff log` and `/staff search` in Discord to maintain the relevant **Player**, **Plugin**, or **General** records. Avoid duplicate records for the same issue; reference related records when different workstreams are necessary. See [Staff Actions & Records](../../documentation/logging-documentation.md#44-incident-records){ data-preview } for the authoritative process.

!!! example "A network-wide problem"
    Players report that they cannot join the network, but there is no evidence yet of a player-caused incident. First establish which servers are unreachable and notify a Developer. Record the symptoms and help with approved communications. Do not accuse players, issue bans, or reset anything without evidence connecting it to the outage.

---

## Check Your Understanding

Several players report identical unusual items appearing after a possible duplication exploit. What should happen first: clear their inventories, publish the suspected method, or preserve evidence and coordinate containment?

??? tip "Suggested approach"
    Preserve reliable evidence, identify the affected players and worlds, and notify a Developer or Server Lead. Do not wipe inventories, publish the method, or attempt a network-wide fix on your own.

---

!!! success "You finished Admin Training!"
    Congratulations on completing all seven modules! You have made it through the reading. Now it is time to prove you can put it into practice. Head to the [Admin Assessment](../assessments/admin.md){ data-preview } under **Learning → Assessments** to work through realistic staff situations. Yes, there is a test. No, you cannot skip it!

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../../assessments/admin/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Admin Assessment</strong><span>Apply what you learned to five realistic staff situations.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
