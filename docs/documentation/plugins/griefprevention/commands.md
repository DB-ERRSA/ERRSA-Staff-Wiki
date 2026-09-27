---
title: GriefPrevention commands and permissions
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← GriefPrevention overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/claim` — Creates a land claim around the player using their available claim blocks.
- `/abandonclaim` — Deletes the claim the player is currently standing in.
- `/abandonallclaims` — Removes all claims owned by the player.
- `/trust <player>` — Grants another player build access inside the claim.
- `/untrust <player>` — Removes a player’s access to the claim.
- `/accesstrust <player>` — Allows a player to open containers (chests, doors, etc.).
- `/containertrust <player>` — Allows a player to access containers but not modify blocks.
- `/trapped` — Teleports the player out of a claim if they are stuck.
- `/claimslist` — Shows all claims owned by the player.
- `/claimlist` — Alternative command showing player claims.
- `/adminclaims` — Toggles admin claim mode for creating protected server claims.
- `/deleteclaim` — Deletes the claim the admin is standing in.
- `/restorenature` — Restores terrain in an abandoned or griefed area.
- `/claimslist <player>` — View claims belonging to a specific player.
- `/ignoreclaims` — Temporarily bypass claim protections for moderation tasks.

## Direct staff group nodes

| Group | Node | Value | Scope |
|:--|:--|:--|:--|
| `mod` | `griefprevention.seeinactivity` | grant | global |
| `mod` | `griefprevention.notignorable` | grant | global |
| `admin` | `griefprevention.adminclaims` | grant | global |
| `admin` | `griefprevention.claimslistother` | grant | global |
| `admin` | `griefprevention.restorenature` | grant | global |
| `admin` | `griefprevention.ignoreclaims` | grant | global |
| `admin` | `griefprevention.overrideclaimcountlimit` | grant | global |
| `admin` | `griefprevention.deleteclaims` | grant | global |
| `admin` | `griefprevention.transferclaim` | grant | global |

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../../staff-permissions.md) and live LuckPerms contexts before changing access.
