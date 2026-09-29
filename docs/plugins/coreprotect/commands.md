---
title: CoreProtect commands and permissions
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← CoreProtect overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/co inspect` — Toggle inspection mode. Left/right click blocks to see **who placed or broke them and when**.
- `/co lookup` — View block/container history in the area you are standing.
- `/co l r:<radius> t:<time>` — Lookup changes within a radius and time window.
- `/co l a:<player>` — Shows actions performed by a specific player.
- `/co l a:container r:<radius> t:<time>` — Shows chest/container transactions nearby.
- `/co rollback <params>` — Roll back changes matching a lookup query.
- `/co restore <params>` — Restores a previously rolled-back area.
- `/co status` — Displays database connection and queue status.
- `/co consumer` — Shows logging queue status and processing speed.

## Direct staff group nodes

| Group | Node | Value | Scope |
|:--|:--|:--|:--|
| `admin` | `coreprotect.*` | grant | global |

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../staff-permissions.md) and live LuckPerms contexts before changing access.
