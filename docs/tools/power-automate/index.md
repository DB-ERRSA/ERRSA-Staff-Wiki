---
tags:
  - DEV
  - SERVER LEAD
---

# :material-robot: Power Automate

ERRSA's automation platform for connecting server systems and staff services.

---

## ERRSA Use

Power Automate is currently used for a small number of specific ERRSA Minecraft workflows rather than as a general form-routing platform.

Its main uses are:

- **Player initialization** — supporting the workflow used when a player is initialized and verified for the Minecraft server.
- **Discord communication logs** — moving or recording information used by Discord-based staff communication systems.

These workflows may connect services such as the Minecraft server, MySQL databases, Discord, email, or other supporting systems depending on the flow.

---

## Access

[Open Power Automate ↗](https://make.powerautomate.com/){ .md-button .md-button--primary }

Access is limited to **Developers** and **Server Leads** responsible for maintaining ERRSA's automations and integrations.

---

## Core Areas

| Area | Used For |
| --- | --- |
| **Flows** | Viewing and maintaining ERRSA's automated workflows. |
| **Triggers** | Events or requests that start a workflow. |
| **Actions** | Steps performed after a workflow starts. |
| **Connections** | Authorized services and accounts used by a workflow. |
| **Run History** | Reviewing completed runs, failures, and errors. |

---

## Connections & Sensitive Data

Power Automate may connect to services containing private or operational information.

!!! danger "Protect credentials and connections"
    Passwords, database credentials, access tokens, API keys, and other secrets should remain inside the appropriate secured connection or environment. Do not post them in Discord or commit them to GitHub.

Changes to an existing flow can affect other ERRSA systems that depend on its current inputs or outputs.

---

## Related Tools

### Discord

[Discord](../discord/){ data-preview } is used by staff-facing communication systems that may interact with Power Automate workflows.

### phpMyAdmin

[phpMyAdmin](../phpmyadmin/){ data-preview } provides access to MySQL data that may be used by automated workflows.

### Render

[Render](../render/){ data-preview } hosts services such as the ERRSA Minecraft Discord bot that may interact with Power Automate.

---

!!! tip "Need help?"
    If a workflow is failing or you're unsure what another service expects from it, reach out to a **Developer** or **Server Lead** before changing the flow.

[← All tools](../index.md)
