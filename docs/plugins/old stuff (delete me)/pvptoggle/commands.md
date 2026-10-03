---
title: PVPToggle commands and permissions
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← PVPToggle overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/pvp` — toggle PvP on/off
- `/pvpstatus` — view PvP state
- `/pvp <player>` — toggle PvP for another player
- `/pvptoggle reload` — reload config

## Direct staff group nodes

| Group | Node | Value | Scope |
|:--|:--|:--|:--|
| `admin` | `pvptoggle.pvp.others` | grant | global |
| `admin` | `pvptoggle.reload` | grant | global |

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../../staff-permissions.md) and live LuckPerms contexts before changing access.
