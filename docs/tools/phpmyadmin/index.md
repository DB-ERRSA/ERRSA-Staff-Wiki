---
title: phpMyAdmin (SQL)
tags:
  - DEV
  - SERVER LEAD
---

# :simple-phpmyadmin: phpMyAdmin (SQL)

ERRSA's interface for viewing and managing data stored in our hosted MySQL databases.

---

## ERRSA Use

SQL databases store structured information in tables so plugins, websites, bots, and automations can save and retrieve persistent data.

Many Minecraft plugins can store their data locally in files or internal databases such as H2/SQLite inside the Apex server files. When a plugin supports MySQL, ERRSA generally prefers migrating it to our hosted **MySQL** database when practical. This keeps data easier to inspect and manage without working directly inside a plugin's local database files.

phpMyAdmin provides a visual interface for working with that MySQL data without needing to manage everything directly through SQL commands.

---

## Access

[Open phpMyAdmin ↗](https://mysql.apexhosting.gdn/){ .md-button .md-button--primary }

phpMyAdmin access is limited to **Developers** and **Server Leads** because changes affect live production data.

!!! danger "Live data"
    Database changes can immediately affect plugins and connected services. **Always stop the affected Minecraft server before manually editing plugin data in phpMyAdmin.** Restart the server only after the changes are complete.

---

## Core Areas

| Area | Used For |
| --- | --- |
| **Databases** | Separating data used by different plugins, bots, websites, or services. |
| **Tables** | Viewing the rows and columns where a service stores its data. |
| **Browse & Search** | Finding specific records without directly editing server database files. |
| **Edit** | Correcting or updating approved records when manual changes are required. |
| **SQL** | Running direct database queries when a Developer or Server Lead needs more precise control. |

---

## Database Notes

- Treat phpMyAdmin as a **production data tool**, not a testing environment.
- Stop the affected server before manually changing plugin data.
- Confirm which plugin or service owns a table before editing or deleting records.
- Do not delete tables, databases, or large groups of records unless you know what depends on them.
- Keep database usernames, passwords, connection strings, and other credentials out of Discord and public GitHub repositories.

---

## Related Tools

### Apex Hosting

[Apex Hosting](../apex-hosting/){ data-preview } provides the hosted Minecraft environment and MySQL resources that plugins and services can connect to.

### Power Automate

[Power Automate](../power-automate/){ data-preview } may interact with data-driven workflows or services that ultimately depend on information stored in ERRSA systems.

---

!!! tip "Need help?"
    If you're unsure about a database, table, or change, reach out to a **Developer** or **Server Lead** before making the edit.

[← All tools](../index.md)
