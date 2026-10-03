---
tags:
  - MOD
  - ADMIN
  - DEV
  - SERVER LEAD
---

# :material-server: Apex Hosting

ERRSA Minecraft's primary server hosting and management platform for live server operations, files, databases, and connected services.

---

## ERRSA Use

Apex Hosting is one of the central operational tools behind ERRSA Minecraft. Staff may use it to view or manage the live servers, access files, work with databases, and support services that connect back into the Minecraft network.

Because Apex controls production systems, access is shared across staff but the permissions available to each person depend on their role and responsibilities.

### Server Operations

Apex provides the main management interface for the Minecraft servers. Depending on assigned permissions, staff may use it for:

- Viewing server status and resource usage.
- Accessing the live server console.
- Starting, stopping, or restarting servers when authorized.
- Reviewing logs and diagnosing server issues.
- Managing server files and configuration.
- Uploading or replacing approved files, plugins, or resources.
- Supporting maintenance, updates, and troubleshooting.

### Files & FTP

Apex provides file access through its web file manager and FTP connection. This is where the live server files, plugin folders, configuration files, logs, worlds, and other server-side resources are stored.

FTP is especially useful when working with larger sets of files or when a Developer or Server Lead needs direct access to the server file structure.

!!! warning "Production files"
    Files in Apex are part of the live server environment. Deleting, renaming, replacing, or editing the wrong file can affect players or prevent a server from starting. Treat changes in Apex as production changes, not as a testing workspace.


---

## Access

[Open Apex Hosting ↗](https://apexminecrafthosting.com/){ .md-button .md-button--primary }

All ERRSA Minecraft staff may receive an Apex account, but the controls visible to each person are limited by their assigned permissions.

| Role | Typical Access |
| --- | --- |
| **Moderator** | Limited access to the specific server information or operational tools needed for moderation responsibilities. |
| **Admin** | Broader server-management access for day-to-day operations, logs, maintenance, and approved changes. |
| **Developer** | Development-related access such as server files, FTP, plugin/configuration work, databases, and technical troubleshooting. |
| **Server Lead** | Highest level of operational access for server management, permissions, infrastructure, and connected services. |

!!! info "Permissions are intentional"
    Having an Apex account does not mean every staff member should have access to every server control. Access should stay limited to what each role needs so production systems are protected from accidental changes.

---

## Core Areas

| Area | Used For |
| --- | --- |
| **Console** | Viewing live server output, commands, startup/shutdown activity, errors, and operational messages. |
| **Server Control** | Starting, stopping, restarting, and checking the current state of a server when authorized. |
| **Files & FTP** | Browsing, editing, uploading, downloading, and managing server files, plugin folders, configurations, logs, world data, and larger file transfers. |
| **Backups** | Server backup and recovery resources used during maintenance or incident recovery. |
| **Users & Permissions** | Controlling which staff accounts can access specific Apex functions. |

---

## Operational Notes

- Treat Apex as a **production environment**. Changes can affect active players immediately.
- Use the console for server operations and troubleshooting, but avoid running commands you do not understand on a live server.
- Use FTP or the file manager only within the areas required for your assigned work.
- Keep database usernames, passwords, connection strings, and other credentials out of Discord and public GitHub repositories.
- Check whether a service depends on a file, database, or configuration before removing or replacing it.
- When testing significant plugin or configuration changes, use the appropriate test environment rather than experimenting directly on the live server whenever possible.

!!! danger "Credentials & sensitive access"
    Apex can expose server files, database connection information, and other sensitive infrastructure. Never share credentials, FTP passwords, database passwords, API keys, or environment values in Discord or public repositories.

---

## Related Tools

### GitHub

[GitHub](../github/){ data-preview } stores source code and version-controlled resources that may later be deployed or uploaded to servers hosted through Apex.

### phpMyAdmin

[phpMyAdmin](../phpmyadmin/){ data-preview } is used to view and manage MySQL database content associated with ERRSA services and plugins.

### Tebex

[Tebex](../tebex/){ data-preview } manages the Minecraft store and packages that connect back into the hosted servers.

### Discord

[Discord](../discord/){ data-preview } is where staff coordinate incidents, maintenance, reports, and operational work that may require action in Apex.

---

## Related Resources

- [Plugin Documentation](../../plugins/){ data-preview }
- [Troubleshooting](../../troubleshooting/){ data-preview }
- [Staff Roles & Responsibilities](../../documentation/staff-roles-responsibilities.md){ data-preview }

---

!!! tip "Need help?"
    If you're unsure about a server setting, file, permission, or change in Apex, reach out to a **Developer** or **Server Lead** before making the change.

[← All tools](../index.md)
