---
title: Themis commands and permissions
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← Themis overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/themis notifications on` — Enable anti-cheat alerts.
- `/themis notifications off` — Disable anti-cheat alerts.
- `/themis notifications` — Check current anti-cheat notification status.
- `/themis` — Confirm Themis is running and view installed version.
- `/themis help` — List available Themis commands and descriptions.
- `/themis info <player>` — View a player’s violation scores and anti-cheat information.
- `/themis reload` — Reload Themis configuration after config changes.
- `/themis` — Verify plugin status/version during maintenance.
- `/themis help` — Review available command set.
- `/themis info <player>` — Inspect violations while debugging detections or false positives.
- `/themis reload` — Reload configuration safely after edits.

## Direct staff group nodes

| Group | Node | Value | Scope |
|:--|:--|:--|:--|
| `mod` | `themis.notifications` | grant | global |
| `admin` | `themis.command.help` | grant | global |
| `admin` | `themis.command.info` | grant | global |
| `admin` | `themis.technical` | grant | global |
| `admin` | `themis.command.reload` | grant | global |
| `admin` | `themis.command.base` | grant | global |
| `admin` | `themis.bypass` | grant | global |

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../../staff-permissions.md) and live LuckPerms contexts before changing access.
