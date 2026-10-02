---
title: SilkSpawners_v2 commands and permissions
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← SilkSpawners_v2 overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/silkspawners give <player> <mob> [amount]` — gives a player a spawner item
- `/silkspawners set <mob>` — changes the targeted spawner to a specified mob type
- `/silkspawners version` — shows plugin version info
- `/silkspawners locale` — locale / language command access

## Direct staff group nodes

| Group | Node | Value | Scope |
|:--|:--|:--|:--|
| `admin` | `silkspawners.command.locale` | grant | global |
| `admin` | `silkspawners.command.set` | grant | global |
| `admin` | `silkspawners.command.give.*` | grant | global |
| `admin` | `silkspawners.command.version` | grant | global |
| `admin` | `silkspawners.command.give` | grant | global |
| `admin` | `silkspawners.command.set.*` | grant | global |

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../staff-permissions.md) and live LuckPerms contexts before changing access.
