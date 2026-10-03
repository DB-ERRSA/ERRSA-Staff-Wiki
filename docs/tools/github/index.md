---
tags:
  - DEV
  - SERVER LEAD
---

# :fontawesome-brands-github: GitHub

ERRSA's central home for Minecraft source code, configuration history, web projects, documentation, and other version-controlled resources.

---

## ERRSA Use

### Development & Source Code

GitHub is the primary location for source code and project history for ERRSA Minecraft development work. Repositories may contain projects such as:

- Custom Minecraft plugins and supporting utilities.
- Resource packs used by the server or called by plugins.
- Client-side mods and other downloadable Minecraft resources.
- Discord bot source code.
- Websites and web applications.
- The ERRSA Staff Wiki and related documentation projects.
- Supporting scripts, integrations, and configuration files that are appropriate to keep in version control.

GitHub gives developers and Server Leads a shared place to review changes, maintain project history, and keep important project files organized outside of individual computers.

### Hosting & Integrations

Not everything stored in GitHub is hosted by GitHub itself. A repository may act only as the source for another service, while other files may be served directly from GitHub.

Examples include:

- **GitHub-hosted resources** — files such as resource packs may live in a repository so a Minecraft plugin can call a stable hosted URL.
- **Render deployments** — some Discord bots, web services, or applications use code stored in GitHub and are deployed or hosted through Render.
- **Power Automate integrations** — projects may support workflows that interact with Power Automate or other ERRSA services.
- **Discord integrations** — Discord bot code and supporting services may live in GitHub even though the running bot is hosted elsewhere.
- **Wiki and website deployment** — GitHub may hold the source for documentation or websites that are published through GitHub or another hosting platform.

!!! info "Source does not always equal host"
    A project appearing in GitHub does not necessarily mean GitHub is running it. Check the project's documentation or related tool page to understand where the live service is hosted and what other systems it depends on.

---

## Access

[Open DB-ERRSA on GitHub ↗](https://github.com/DB-ERRSA){ .md-button .md-button--primary }

GitHub access depends on the repository and the work being performed. Some ERRSA repositories are public, while others may require access to the ERRSA GitHub organization or a specific repository.

!!! warning "Public repositories"
    Treat every public repository as information that anyone on the internet can view. Never commit passwords, API keys, bot tokens, database credentials, private URLs containing credentials, environment files, or other secrets to a public repository.

!!! danger "Secrets do not belong in Discord or source code"
    Environment variables, API keys, access tokens, bot tokens, database credentials, and other sensitive values should remain in the appropriate secure environment or service configuration. **Do not send them through Discord**, and do not place them directly in source code or committed configuration files. This is especially important for public repositories.

---

## Repository Areas

GitHub repositories serve different purposes across ERRSA Minecraft. A single project may also connect to several other tools.

| Area | Used For |
| --- | --- |
| **Plugins** | Source code for custom Minecraft plugins, integrations, utilities, and server-side development projects. |
| **Resource Packs** | Server resource packs and other assets that may be downloaded directly or referenced by plugins through a hosted link. |
| **Mods** | Client-side mods or supporting Minecraft resources maintained by the project. |
| **Websites & Web Services** | Source code for websites, dashboards, status pages, APIs, or other web-facing services. Some may be hosted through GitHub, while others are deployed through services such as Render. |
| **Staff Wiki** | Source for the ERRSA Staff Wiki, including documentation, theme files, assets, and deployment configuration. |
| **Discord Bots** | Bot source code and supporting files. The code may live in GitHub while the running bot is hosted through Render or another service. |
| **Automation & Integrations** | Code or configuration that supports connections with Discord, Power Automate, Minecraft servers, databases, or other ERRSA systems. |

---

## Repository Notes

- Check whether a repository is **public or private** before adding files or information.
- Keep project documentation current enough that another authorized developer can understand what the repository is for and what services it depends on.
- Use GitHub history for source and configuration changes that belong in version control rather than passing important files around through Discord.
- Do not commit generated secrets, `.env` files, credentials, tokens, or other private environment values.
- Be careful when changing files that are called directly by a live Minecraft plugin, website, bot, or deployment service; repository changes may affect production systems.
- When a project is deployed elsewhere, remember that changing the repository and changing the live environment are not always the same action.

!!! warning "Production dependencies"
    Some repositories contain files or code that live services depend on. Before deleting, renaming, moving, or substantially changing a repository resource, confirm what Minecraft plugins, Render services, websites, bots, or automations reference it.

---

## Related Tools

### Render

[Render](../render/){ data-preview } hosts some ERRSA services whose source code is stored in GitHub, including supporting web services and Discord bot infrastructure.

### Discord

[Discord](../discord/){ data-preview } is used for staff communication and may be the user-facing interface for bots whose source code is maintained in GitHub.

### Power Automate

[Power Automate](../power-automate/){ data-preview } supports workflows that may interact with ERRSA-developed services, forms, Discord, email, and other systems whose supporting code or documentation is maintained in GitHub.

---

## Related Resources

- [Plugin Documentation](../../plugins/){ data-preview }
- [Staff Roles & Responsibilities](../../documentation/staff-roles-responsibilities.md){ data-preview }
- [Troubleshooting](../../troubleshooting/){ data-preview }

---

[← All tools](../index.md)
