---
title: LuckPerms commands and permissions
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← LuckPerms overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/lp user <player> info` — view player permissions
- `/lp user <player> parent add <group>` — promote
- `/lp user <player> parent remove <group>` — demote
- `/lp editor` — open web editor
- `/lp group <group> permission set <node>` — assign permissions
- `/lp user <player> permission set <node>` — direct permission assignment
- `/lp sync` — sync permissions across servers
- `/lp verbose` — debug permission checks
- `/lp networksync` — force database sync

## Direct staff group nodes

No matching direct nodes appear in the supplied staff group export. This does not establish whether inherited, wildcard, default, or user permissions grant access.

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../../staff-permissions.md) and live LuckPerms contexts before changing access.
