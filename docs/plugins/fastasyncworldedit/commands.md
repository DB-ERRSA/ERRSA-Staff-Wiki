---
title: FastAsyncWorldEdit commands and permissions
tags:
  - DEV
  - SERVER LEAD
---

# Commands and permissions

[← FastAsyncWorldEdit overview](index.md) · [References →](references.md)

## Commands

!!! warning "Guide verification"
    Command descriptions from the previous knowledgebase have not been checked against the live plugin configuration.

- `//wand` — get selection wand
- `//pos1` / `//pos2` — set selection points
- `//set <block>` — fill selection
- `//replace <from> <to>` — replace blocks
- `//copy` — copy selection
- `//paste` — paste clipboard
- `//undo` — undo last edit
- `//redo` — redo last undone edit
- `//schem save <name>` — save schematic
- `//schem load <name>` — load schematic
- `//rotate <degrees>` — rotate clipboard
- `//stack <count>` — repeat selection
- `//move <distance>` — move selection
- `//smooth` — smooth terrain
- `//regen` — regenerate area
- `/wea` — bypass some FAWE restrictions if authorized

## Direct staff group nodes

No matching direct nodes appear in the supplied staff group export. This does not establish whether inherited, wildcard, default, or user permissions grant access.

!!! info "How to read this"
    These are direct group assignments from the September 26, 2026 export. Inheritance is `admin → mod`, `dev → admin`, and `server-lead → dev`. Check [the complete group reference](../staff-permissions.md) and live LuckPerms contexts before changing access.
