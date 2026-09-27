---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

!!! note "Review status"
    Original curriculum; check current procedures before assigning this module.

# Module 1 — Purpose

<span class="staff-badge">MOD</span><span class="staff-badge">ADMIN</span><span class="staff-badge">DEV</span><span class="staff-badge">SERVER LEAD</span>

## Purpose

This module explains how the ERRSA Minecraft server is *intentionally structured*.
Before learning commands, plugins, or configs, you must understand how authority, identity, and gameplay access are separated.

This module answers one question:
**“Who is allowed to do what — and why?”**

!!! info "You do not need to memorize this module."
You need to understand the boundaries it defines.

## Core principle

The ERRSA MC server uses **parallel authority tracks**, not a single permission ladder.

Belonging to one track **never** grants power in another.

## Visual Overview

!!! note "Interactive Permissions Model"
    Hover over each role to see what it means and what it **does not** imply.

 <div class="permissions-visual">
      <section class="role-grid" aria-label="Server roles overview">
        <!-- MAIN -->
        <article class="role-card">
          <header class="role-head">
            <div class="role-kicker">MAIN</div>
            <h3 class="role-title">Player Lifecycle</h3>
          </header>
          <ul class="role-list">
            <li class="hover" data-tip="Unverified player. Limited access until email verification is completed.">
              <span class="role-name">default</span>
              <span class="role-note">unverified</span>
            </li>
            <li class="hover" data-tip="Verified player with standard access to the server.">
              <span class="role-name">user</span>
              <span class="role-note">verified</span>
            </li>
            <li class="hover" data-tip="Optional cosmetic rank purchased by the user. Cosmetic-only benefits; no gameplay/staff authority.">
              <span class="role-name">premium</span>
              <span class="role-note">VIP cosmetic</span>
            </li>
          </ul>
        </article>
        <!-- ERRSA -->
        <article class="role-card">
          <header class="role-head">
            <div class="role-kicker">ERRSA</div>
            <h3 class="role-title">Identity</h3>
          </header>
          <div class="chip-wrap" role="list" aria-label="ERRSA identity roles">
            <span class="chip" role="listitem" data-tip="General member of the Embry-Riddle Resident Student Association.">errsa</span>
            <span class="chip" role="listitem" data-tip="Hall Representative serving a specific residence hall.">hallrep</span>
            <span class="chip" role="listitem" data-tip="Former Executive Board member. Recognition role.">legacy</span>
            <span class="chip" role="listitem" data-tip="Executive Coordinator assisting ERRSA operations and initiatives.">execcoord</span>
            <span class="chip" role="listitem" data-tip="Current Executive Board member with organizational leadership duties.">execboard</span>
            <span class="chip" role="listitem" data-tip="Official ERRSA advisor providing oversight and guidance.">advisor</span>
          </div>
          <p class="role-footnote">
            Identity roles describe your relationship to ERRSA (not staff authority).
          </p>
        </article>
        <!-- STAFF -->
        <article class="role-card">
          <header class="role-head">
            <div class="role-kicker">STAFF</div>
            <h3 class="role-title">Authority</h3>
          </header>
          <ul class="role-list">
            <li class="hover" data-tip="Moderation staff responsible for enforcing server rules.">
              <span class="role-name">mod</span>
            </li>
            <li class="hover" data-tip="Administrative staff with elevated permissions and incident-resolution authority.">
              <span class="role-name">admin</span>
            </li>
            <li class="hover" data-tip="Development staff responsible for plugins, configs, systems, and permissions architecture.">
              <span class="role-name">dev</span>
            </li>
          </ul>
        </article>
      </section>
    </div>


## MAIN track — Player lifecycle

The MAIN track controls whether a player can interact with the server at all.
It does **not** control authority or organizational status.

## ERRSA track — Organization & identity

The ERRSA track represents a player’s identity *within the organization*, not their power on the server.

Examples:

  - Executive board members
  - Hall representatives
  - Legacy members
  - Advisor

### Purpose
- Prefixes and recognition
- Organizational identity
- Historical or honorary roles

!!! Note "ERRSA roles **never** grant moderation, admin, or developer permissions."

## STAFF track — Authority

The STAFF track controls actions that affect other players or the server itself.

### Levels (conceptual only)

  - Moderator
    - Rule enforcement
    - Investigations
    - Muting / kicking / banning
  - Admin
    - Incident resolution
    - Rollbacks and overrides
    - Server stability actions
  - Developer
    - Plugins and configs
    - Permissions architecture
    - Backend systems

## Escalation logic (conceptual)

- Player behavior issues → Moderator
- Server damage or incidents → Admin
- Plugin, config, or permissions issues → Developer

If you are unsure which track an issue belongs to, escalate upward rather than acting.

## You have completed this module if you can:

- Explain why VIP status does not grant staff authority
- Identify which track a problem belongs to
- Know when **not** to act and escalate instead
- Describe the difference between identity and authority

<nav class="learning-nav" aria-label="Learning module navigation"><a class="learning-nav__link" href="../"><span>← Previous</span><strong>Learning paths</strong></a><a class="learning-nav__link learning-nav__link--next" href="../mod2/"><span>Next →</span><strong>Module 2: Player journey</strong></a></nav>
