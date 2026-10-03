---
title: Multiverse-Core commands and permissions
tags:
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← Multiverse-Core overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/mv list` — list imported worlds
- `/mv info <world>` — inspect a world's Multiverse settings
- `/mv tp <world>` — teleport to a world
- `/mv spawn <world>` — teleport to a world spawn
- `/mv import <world>` — import an existing world
- `/mv create <world>` — create a world
- `/mv delete <world>` — remove a world from Multiverse / delete world if intended
- `/mv modify set <property> <value> <world>` — change world properties
- `/mv reload` — reload Multiverse config

## Direct staff group nodes

No matching direct nodes appear in the supplied staff group export. This does not establish whether inherited, wildcard, default, or user permissions grant access.

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../../staff-permissions.md) and live LuckPerms contexts before changing access.
