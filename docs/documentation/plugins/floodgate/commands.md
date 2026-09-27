---
title: floodgate commands and permissions
tags:
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← floodgate overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `/floodgate reload` — reload Floodgate configuration
- `/floodgate dump` — generate diagnostic information

## Direct staff group nodes

No matching direct nodes appear in the supplied staff group export. This does not establish whether inherited, wildcard, default, or user permissions grant access.

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../../staff-permissions.md) and live LuckPerms contexts before changing access.
