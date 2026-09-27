!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# AutoMessage

## Purpose

**Category:** `Infrastructure`  

Automatically sends scheduled informational chat messages to players on ERRSA MC, such as server tips, Discord links, reporting links, and campus resources.

---

## Common Commands

!!! note "Only commands relevant to ERRSA workflows are listed"


### Dev commands
- `/automessage` — manage message list, enable/disable sending, and send notifications
- `/am` — alias for `/automessage`

---

## Configuration Files

!!! info "Primary config locations"
- `plugins/AutoMessage/configuration.yml`

---

## ERRSA Defaults & Settings

!!! note "ERRSA-specific configuration choices"
- `checkForUpdate: false` — disables join-time update checks  
- `autoMessagesEnabled: true` — automatic messages are currently enabled  
- `autoMessagesDelay: 30m` — messages are sent every 30 minutes  
- `autoMessagesMode: SEQUENTIAL` — messages rotate in order instead of randomly  
- `autoMessageAliases: [am]` — `/am` is enabled as a shortcut  
- `autoMessagePermission: [command.automessage]` — command access is permission-gated  
- `autoMessagesListUseHover: true` — list output uses hover formatting  

This section documents **intentional deviations from plugin defaults**. :contentReference[oaicite:0]{index=0}

---

_Last verified: 2026-03-20_  
_Server version: 1.21.4_
