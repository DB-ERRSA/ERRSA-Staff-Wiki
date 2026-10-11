---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Player registration & verification

**Use this guide when a player is trying to join ERRSA Minecraft for the first time or is stuck during verification.** It will help you locate the step that is failing and decide what to do next. No plugin knowledge required.

[← All troubleshooting guides](index.md){ .md-button .trouble-guide-back }

!!! info "Before you start"
    Ask the player **what they see on their screen** and whether they play on **Java or Bedrock**. If possible, ask for the exact error text or a screenshot with private information hidden. **Do not request passwords, verification codes, or access to their university account.**

<div class="trouble-wizard" data-troubleshoot="registration" aria-label="Player registration troubleshooting decision guide">
 <div class="trouble-wizard__top"><span class="trouble-wizard__eyebrow">GUIDED DIAGNOSIS</span><span class="trouble-wizard__progress" aria-live="polite">Step 1</span></div>
 <div class="trouble-wizard__content" aria-live="polite" aria-atomic="true"><h2>Where is the player stuck?</h2><p>Choose the answer that best matches what they see.</p><p><a href="#registration-quick-reference">Use the text-only troubleshooting guide ↓</a></p></div>
 <div class="trouble-wizard__footer"><button class="trouble-wizard__back" type="button" disabled>← Previous question</button><button class="trouble-wizard__restart" type="button"><img class="trouble-refresh-icon" src="../../assets/images/refresh.svg" alt="" aria-hidden="true" width="18" height="18"><span>Start over</span></button></div>
</div>

## Registration quick reference

Use this section if buttons are unavailable, JavaScript is disabled, or you want a quick reminder of the steps.

| What the player reports | First safe check | If that does not help |
| --- | --- | --- |
| Cannot connect to the Minecraft server | Ask for the exact message and whether they use Java or Bedrock; check the server address/instructions in the official onboarding guide | Escalate the error and edition to a Developer or Server Lead |
| Joined, but cannot find the next registration step | Ask them to read the instructions displayed in the initialization area; use the [official onboarding video](https://www.youtube.com/watch?v=nrxG9c11pdo) | Escalate with screenshot of their current screen |
| Verification message or email is missing | Confirm the step was actually submitted, and ask the player to check their own inbox and spam folder. Ask for exact error messages in the chat if applicable. | Escalate to a Developer or Server Lead for private workflow checks |
| Verification is rejected or stuck | Ask for the exact on-screen error; confirm they are following official ERAU verification instructions | Escalate; do not bypass verification |
| Player says verification succeeded, but still has restricted access | Ask them to reconnect once, then note their current location and exact access error | Escalate for initialization/status review; do not grant permissions manually |
| Account changed, duplicate account, or Java/Bedrock switch | Stop before changing records; collect both usernames privately as appropriate | Ask a Server Lead to review the account-transfer policy |

## When to escalate

**Moderators and other first-line staff:** Help the player describe the issue, check the safe steps above, then ask a Developer or **Nolan or Stephen (Server Leads)** if it remains unresolved.

**Developers and Server Leads:** Investigate the appropriate system for the confirmed failure point, using authorized access. Possible systems include [PlayerInitialization](../plugins/server-and-infrastructure/playerinitialization.md), [Power Automate](../tools/power-automate/index.md), and the player initialization database. These are investigation leads, **not confirmation of a cause**.

### What to include in a handoff

Copy this short template into the appropriate staff channel or log. Share sensitive identifiers only in an approved staff-restricted location.

```text
Player username:
UUID: 
Where the player is stuck:
Exact on-screen message (if any):
When it happened (include time zone):
What we checked or asked them to try:
Result / what happened next:
Staff member following up:
```

For recurring or unresolved problems, create or update the appropriate record through [Staff Actions & Records](../documentation/logging-documentation.md). Do not put university email addresses, passwords, one-time codes, or private evidence in public channels.

## Related resources

- [Official player onboarding video](https://www.youtube.com/watch?v=nrxG9c11pdo) — player-facing walkthrough.
- [Player support training](../learning/fundamentals/mod3.md) — how to help a player with an unfamiliar problem.
- [PlayerInitialization plugin](../plugins/server-and-infrastructure/playerinitialization.md) — staff technical reference.
