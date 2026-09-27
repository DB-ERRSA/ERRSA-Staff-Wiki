---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

!!! note "Review status"
    Original curriculum; check current procedures before assigning this module.

# Module 2 — Core Systems & Player Flow

<span class="staff-badge">MOD</span><span class="staff-badge">ADMIN</span><span class="staff-badge">DEV</span><span class="staff-badge">SERVER LEAD</span>

## Purpose

This module explains how a player moves through the ERRSA Minecraft server from their
first join to active survival gameplay.

It focuses on **understanding the system**, not fixing it.

By the end of this module, you should be able to answer:
**“Where in the system is this player right now, and what owns that state?”**

> ℹ️ You are not expected to change configurations or permissions after this module.
> You are expected to recognize what is normal, what is incomplete, and when to escalate.

---

## The Player Lifecycle (High Level)

Every new player follows the same automated path:

1. Join the server
2. Enter the **PlayerInit** world (void world)
3. Agree to server rules
4. Register with a university email
5. Receive approval or denial via email
6. On approval:
   - Permissions are updated automatically
   - Player is teleported to Survival spawn

No staff action is required for normal verification.

---

## PlayerInit World

**PlayerInit** is a Multiverse void world that exists solely for new player onboarding.

### What PlayerInit is
- The entry point for all new players
- A controlled environment for verification
- An expected and intentional state
  

### What players can do
- Agree or disagree to rules
- Run `/register`
- Complete email verification
- Wait for approval

### What players cannot do
- Access survival gameplay
- Chat in the main world
- Bypass verification

> If a player is in PlayerInit, the system is working as intended.
> They have not completed verification yet.

---

## Email Verification & SQL (Conceptual)

When a player runs `/register`:

- Their **Minecraft username**, **UUID**, and **email** are recorded
- Their verification status is stored in a database column

### Approval / denial behavior
 **Approve:**
 
  - Status column updates
  - PlayerInit detects the change
  - LuckPerms promotion is executed
  - Player is teleported automatically
  **Deny:**
    
  - Status column updates
  - Player is kicked
  - Player may retry on reentry

> Verification is fully automated.
> Staff do not manually approve players.

---

## LuckPerms in the Verification Flow

LuckPerms is used to **enforce access**, not decide eligibility.

### What LuckPerms does
- Promotes players from `default → user`
- Enables survival gameplay access
- Applies the correct MAIN track permissions

### What LuckPerms does not do
- Store emails
- Decide who is verified
- Grant staff authority

> LuckPerms applies decisions made by other systems.
> It does not make those decisions itself.

---

## Java vs Bedrock Players

The server supports both Java and Bedrock players.

### Bedrock-specific behavior
- Bedrock players join via **Geyser/Floodgate**
- Their usernames appear with a `.` prefix
- They must specify a **port** when joining

### Important notes
- The `.` prefix is expected
- Verification works the same way for Bedrock players
- Username formatting alone is not an error

---

## Velocity & Server Layout (Overview)

The network uses a **Velocity proxy**.

### Current servers
- **Survival (Main)** — default destination
- **Event** — separate server
- **Backup** — separate server

Players always enter through Velocity.
Server separation is intentional and controlled.

> This section will expand as infrastructure grows.

---

## Worlds Inside Survival

The Survival server contains multiple worlds:

- **Survival world** — main gameplay
- **PlayerInit** — verification only
- **Legacy Lake** — Hall of Fame for former ERRSA leadership

> Legacy Lake is preserved intentionally and should not be modified casually.

---

## Common Player Issues (Identification Only)

This module does not authorize fixes.
It teaches recognition.

 **“I’m stuck in the void”**
 
  - Player is in PlayerInit
  - Verification incomplete

 **“I verified but nothing happened”**
 
  - PlayerInit loop has not processed approval yet
  - SQL → LuckPerms promotion pending
  - After 5 minutes, if issue persist may be incorrect email or playerinit is down

 **“My name looks weird”**
 
  - Bedrock player via Floodgate
  - Expected behavior

  **“I can’t join on Bedrock”**
  
  - Likely join address or port issue
  - Geyser/Floodgate related

---

## What This Module Does NOT Authorize

After completing this module, you are **not** authorized to:

 - Edit database entries
 - Change LuckPerms groups
 - Teleport players out of PlayerInit
 - Manually bypass verification

If action is required, escalate.

---

## Module 2 Completion Check

You have completed this module if you can:

 - Describe the full player lifecycle
 - Explain why PlayerInit exists
 - Identify which system owns a player’s state
 - Help a player understand what step they are on

---


## Next module

<div class="grid cards" markdown>

-   :rocket: **Module 3 — Core Operational Plugins**  
    Learn about our core plugins that keeps the server operational
    [:octicons-arrow-right-24: Start Module 3](../learning/mod3.md){ .md-button .md-button--primary }

</div>

<nav class="learning-nav" aria-label="Learning module navigation"><a class="learning-nav__link" href="../mod1/"><span>← Previous</span><strong>Module 1: Roles and permissions</strong></a><a class="learning-nav__link learning-nav__link--next" href="../mod3/"><span>Next →</span><strong>Module 3: Operational plugins</strong></a></nav>
