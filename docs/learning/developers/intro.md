---
tags:
  - DEV
  - SERVER LEAD
---

# Developers

Welcome to the Developer learning section. Developers are the backbone of the server and are responsible for building, maintaining, and expanding the technical systems that power ERRSA MC. This includes everything from server plugins and configurations to external tools, integrations, and custom features.

The Developer learning section focuses on the technical side of operating ERRSA MC and the tools and systems developers use to maintain and improve the server.

!!! warning "Complete the earlier sections first"
    This section builds on [Server Fundamentals](../fundamentals/intro.md){ data-preview }, [Moderator training](../moderators/intro.md){ data-preview }, and  [Admin training](../admins/intro.md){ data-preview }. Be sure to review these sections before moving on!

---

## Developer responsibilities

Developers are more than just senior administrators. While they may assist with administrative responsibilities, their primary role is to create, maintain, and improve the systems that make ERRSA MC function.

Typical responsibilities include:

- Assisting admins with advanced issues that require database or plugin access.
- Addressing player bug reports, plugin issues, and server stability problems.
- Identifying and resolving technical issues, exploits, bugs, and unintended behaviors.
- Installing, updating, configuring, and maintaining server plugins.
- Maintaining and developing external systems such as the player website and Discord integrations.
- Developing new server features, such as custom plugins, gamemodes, and cosmetics.

---

## Developer permissions and access

Developers automatically have access to all server permissions. However, **having access does not mean having authorization.** These permissions should be used for legitimate testing, development, and creation purposes, not to gain an advantage during normal gameplay.

Having access to every permission can also introduce unintended behavior while playing. For example, certain permissions may bypass player claim protections or remove costs from specific actions. Developers should remain mindful of these permissions and avoid unintentionally using them during normal gameplay.

Outside the server, developers have enhanced access to the [Apex Hosting control panel](../../tools/apex-hosting/index.md){ data-preview }, allowing them to manage server files, configurations, and other settings. Changes to live server files should always be approached carefully, and backups should be made before making potentially disruptive changes.

Developers may also receive access to additional external tools and systems as needed, such as [GitHub](../../tools/github/index.md){ data-preview } repositories, the [player website](../../tools/render/index.md){ data-preview }, and [Discord](../../tools/discord/index.md){ data-preview } integrations. Access to these tools are used to develop and maintain features for both players and staff.

---

## Development expectations and workflow

Development covers a broad range of responsibilities, including plugins, websites, integrations, and other server systems. Despite these differences, there are several general expectations that apply to all development work.

### Quality and professionalism

ERRSA MC is an official server operated on behalf of ERRSA. While it is commonly referred to as the "Official Embry-Riddle Minecraft Server," that title is not technically accurate, but should be treated as if it were. Our work is publicly associated with the university and should reflect an appropriate level of quality and professionalism.

All plugins, public-facing websites, advertising materials, and other resources should be thoughtfully developed and reviewed before being released. Our work should demonstrate the time, effort, and attention to detail expected of the greater organization.

### Responsible use of AI

The use of AI is permitted for coding, visual design, writing, and other development tasks. However, it should be treated as a tool to assist development rather than a replacement for the developer's own original work and judgment.

**AI-generated content should always be reviewed and refined before use!**

- **Visuals:** While AI-generated graphics may look appealing, they can lack originality or the level of detail expected from our team. Often times it comes off as "low effort" or "AI slop." Public-facing visuals should be thoughtfully designed and should not appear rushed or generic.
- **Code:** Never implement code that you cannot reasonably understand. AI-generated code may introduce bugs, unintended behavior, security issues, or unnecessary complexity.
- **Writing:** AI-generated text can sound robotic, vague, or disconnected from its intended audience. Always review and edit generated content to ensure it is accurate, clear, and natural.

Ultimately, developers are responsible for the quality and reliability of anything they create, regardless of what tools were used to produce it.

### Code quality and collaboration

Code should be written in a way that is readable, organized, and consistent with good programming conventions. Other developers may need to review, maintain, or expand your work in the future, so it is important to make projects easy to understand and navigate.

Developers should also maintain a clear and collaborative workflow:

- Upload and maintain projects through GitHub.
- Include clear documentation and setup instructions in project README files.
- Use meaningful names and organize files logically.
- Add comments where they help explain complex or important functionality.
- Keep projects and documentation up to date as changes are made.

These practices make it easier for other developers to understand existing systems, contribute to projects, and resolve issues when they arise.

### Proactive development and maintenance

Developers should think beyond simply making a feature work. Consider how players might misuse, abuse, or exploit a system before it is implemented. Whenever possible, identify potential issues and address them before a feature reaches the live server.

Of course, it is impossible to anticipate every situation. When bugs, exploits, or unintended behaviors are discovered, developers are expected to investigate and address them promptly to prevent further abuse or disruption.

---

## Coordinating with Admins and the Server Lead

Developers are responsible for building and maintaining server systems, but they are not the decision-makers for the server as a whole. Developers do not have unrestricted authority to introduce new features, change server direction, or make decisions on behalf of the staff team.

Those responsibilities ultimately fall under the Server Lead, who oversees the direction of the server and its staff team.

Developers should work closely with the Server Lead when planning and implementing new features or changes. Development projects should align with the direction and priorities established by the Server Lead, and approval should be obtained before proceeding with significant changes.

Feedback and suggestions are always welcome from the entire staff team. Developers are encouraged to share ideas, provide technical recommendations, and offer feedback on proposed decisions. However, the Server Lead retains the final say on what is approved and implemented.

Developers are also still members of the wider staff team and should continue assisting with moderator and admin responsibilities when available. In some cases, admins may need to escalate investigations to developers when an issue requires access to databases, plugin data, or other technical systems that are not available to them.

---

## Overview of the developer learning path

By completing the Developer learning track, you should understand:

- How the server is structured and how its systems work together.
- How to manage, configure, and maintain server plugins.
- How ERRSA's custom plugins work and how to maintain them.
- How to manage external tools and services, including Render, SQL, and Power Automate.
- How to troubleshoot common server, plugin, and integration issues.
- How the player initialization system works.
- How server permissions and staff roles are managed.
- How GitHub is used to manage development projects and documentation.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod1/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 1 · Server Architecture</strong><span>Learn how the server's network is configured, managed, and structured.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>