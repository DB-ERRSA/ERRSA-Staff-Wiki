---
tags:
  - DEV
  - SERVER LEAD
---

# :simple-render: Render

ERRSA's hosting and deployment platform for web services and applications that run outside the Minecraft servers.

---

## ERRSA Use

Render provides the live environment for services that are developed in GitHub but need to stay online and run independently of Apex Hosting.

ERRSA currently uses Render for two major services:

- **Server Handbook website** — hosts the live handbook website used by the Minecraft community.
- **Discord bot** — runs the ERRSA Minecraft Discord bot and its supporting services.

GitHub stores the source code for these projects, while Render provides the production environment where they are deployed and run.

---

## Access

[Open Render ↗](https://dashboard.render.com/){ .md-button .md-button--primary }

Render access is limited to **Developers** and **Server Leads** because it provides control over live services, deployments, logs, and production environment data.

---

## Core Areas

| Area | Used For |
| --- | --- |
| **Services** | Viewing and managing the live Handbook and Discord bot services. |
| **Deployments** | Deploying updated code from GitHub and reviewing deployment status. |
| **Logs** | Reviewing runtime output and diagnosing errors from hosted services. |
| **Environment** | Storing production configuration and sensitive values required by each service. |

---

## Environment & Secrets

Render is the appropriate place for production values that the hosted services need but that should **not** be stored in source code.

Examples include:

- Discord bot tokens
- API keys
- database usernames and passwords
- connection strings
- access tokens
- webhook secrets
- other service-specific credentials

!!! danger "Keep secrets out of code and Discord"
    Sensitive values should be stored in the service's **Render environment**, not committed to GitHub or posted in Discord. This is especially important for public repositories, where committed credentials could become publicly visible.

Changes to environment values can affect a live service. Confirm what a variable is used for before changing or removing it.

---

## Related Tools

### GitHub

[GitHub](../github/){ data-preview } stores the source code that Render deploys for ERRSA web services and applications.

### Discord

[Discord](../discord/){ data-preview } is the platform used by the Discord bot that runs through Render.

---

!!! tip "Need help?"
    If you're unsure about a service, deployment, or environment value, reach out to a **Developer** or **Server Lead** before making changes.

[← All tools](../index.md)
