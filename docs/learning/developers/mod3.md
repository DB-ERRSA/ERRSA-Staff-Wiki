---
tags:
  - DEV
  - SERVER LEAD
---


# Module 3 · Plugin Development

Plugin development is one of the more technical responsibilities of an ERRSA Developer. Our network uses several 
custom plugins to provide features that existing software either cannot provide or cannot support in the way ERRSA needs.

As discussed in [Module 2 · Plugin Management](mod2.md){ data-preview }, **existing, maintained plugins should be 
evaluated before creating new software**. Custom plugins offer more control, but ERRSA becomes responsible for their 
compatibility, security, testing, documentation, and long-term maintenance.

This module introduces ERRSA's custom plugin ecosystem, the responsibilities associated with maintaining it, the 
development environment, and a **self-guided, 11-stage learning path** from Java fundamentals to a complete Paper plugin.

!!! info "Prerequisites"
        Complete [Module 1 · Server Architecture](mod1.md){ data-preview } and 
        [Module 2 · Plugin Management](mod2.md){ data-preview } first. You should already understand the roles of Paper and 
        Velocity, where plugins operate, basic plugin dependencies, configuration, and the requirement to test changes before 
        production deployment.

**Learning objectives**

By the end of this module and its learning path, you should be able to:

- Identify the purpose of ERRSA's major custom plugins and locate their documentation and source repositories.
- Explain the Developer team's responsibilities for maintenance, compatibility updates, bug fixes, and approved features.
- Set up IntelliJ IDEA, a suitable JDK, and a Java build tool.
- Navigate an existing Java plugin project, build a `.jar`, and test it on a local Paper server.
- Develop plugins using Java, the Paper API, commands, events, configurations, and data storage.
- Recognize integration, performance, testing, and security considerations.
- Submit reproducible work with source code, documentation, and evidence of testing.

---

## ERRSA-Owned Plugins

ERRSA maintains custom plugins to support its community, gameplay, administration, and integrations. The Developer 
team is responsible for keeping their **source code, release artifacts, and technical documentation** organized and 
up to date in ERRSA's GitHub organization.

!!! tip "Learn their roles before their code"
        You do not need to memorize every command or understand every class immediately. Start by learning what 
        each plugin does, which server or service it interacts with, where its source is located, and how it affects other 
        ERRSA systems.



### Core Systems and Integrations

#### [ERRSA-MC-Core](../../plugins/server-and-infrastructure/errsa-mc-core.md){ data-preview }

**Purpose:** Combines smaller ERRSA-specific functions into a shared plugin instead of maintaining many separate 
plugins for simple features.

**Key features documented in the draft:** Diamond selling, form commands, Discord-bot compatibility related to 
Geyser/Floodgate/ViaVersion, server-handbook webhooks, inventory auditing for possible duplication, exploit-related 
logging, End-portal rerouting, and spawn portals.

**References:** [ERRSA-MC-Core documentation](https://github.com/DB-ERRSA/ERRSAMCCore)

#### [PlayerInitialization](../../plugins/server-and-infrastructure/playerinitialization.md)

**Purpose:** Supports the player verification process, including the ability to associate a player with a student 
identity when required for conduct-related cases.

**Key features:** SQL integration, Power Automate communication, student email validation, and verification status handling.

**References:**  · [**Module 6 · PlayerInitialization**](mod6.md) · NOLAN MAKE DOCUMENTATION

#### [EventBridge](../../plugins/server-and-infrastructure/eventbridge.md){ data-preview }

**Purpose:** Simplifies network access and event management for ERRSA MC staff.

**Key features:** Server/world travel access, whitelists, permissions, automated event operation, and cleanup.

**References:** [EventBridge documentation](https://github.com/DB-ERRSA/EventBridge)

#### [VIPBridge](../../plugins/server-and-infrastructure/vipbridge.md){ data-preview }

**Purpose:** Automates VIP-related perks and purchase workflows.

**Key features:** VIP promotion, purchase announcements, custom tokens, token distribution and redemption, token 
shop logic, and form integrations.

**References:** [VIPBridge documentation](https://github.com/DB-ERRSA/VIPBridge)

### Gameplay and Progression

#### [Rank Progression](../../plugins/gameplay-and-progression/rank-progression.md){ data-preview }

**Purpose:** Encourages longer-term participation through playtime-based progression.

**Key features:** Earnable ranks based on playtime, cosmetics, and additional commands.

**References:** NOLAN MAKE DOCUMENTATION

#### [Guilds](../../plugins/gameplay-and-progression/guilds.md){ data-preview }

**Purpose:** Encourages players to collaborate and participate in community activities.

**Key features:** Guild creation and management, leveling, seasonal competition, and guild claims.

**References:** [Guilds documentation](https://github.com/DB-ERRSA/Guilds)

#### [PlayerQuests](../../plugins/gameplay-and-progression/playerquests.md){ data-preview }

**Purpose:** Allows players to offer in-game currency in exchange for tasks completed by other players.

**Key features:** Quest creation, Litematica-related blueprint integration, Bedrock blueprint display, 
Java blueprint support without Litematica, ratings, and Guilds integration.

**References:** [PlayerQuests documentation](https://github.com/DB-ERRSA/PlayerQuests)

#### [BannerBuilder](../../plugins/gameplay-and-progression/bannerbuilder.md){ data-preview }

**Purpose:** Extends banner customization beyond vanilla limits.

**Key features:** Expanded banner patterns, banner copying, and configurable limits and shop-related behavior.

**References:** [BannerBuilder documentation](https://github.com/DB-ERRSA/BannerBuilder)

!!! note "Keeping the inventory current"
        This list reflects the eight principal projects in the Module 3 draft; it is not necessarily a complete 
        inventory of every custom component installed across ERRSA. Add new owned plugins when approved and document their 
        purpose, repository, supported platform, dependencies, configuration, and current maintainer. Verify feature descriptions 
        against the current release before making major changes.

---

## Developer Responsibilities

ERRSA Developers maintain and improve existing custom plugins and may build new features 
**when there is an approved need**. Having access to development tools does not automatically authorize changes 
to production.

| Responsibility | Typical work | Important consideration |
| --- | --- | --- |
| **Bug fixes and patches** | Reproduce a reported issue, change a small piece of code, and validate the fix. | Avoid introducing unrelated changes. |
| **Routine maintenance** | Review dependencies, address warnings, and keep code/documentation current. | Assess compatibility and security before updating. |
| **Minecraft and Java compatibility** | Adapt plugins after Paper, Minecraft, API, or Java runtime changes. | A newer runtime does not always require new Java syntax; APIs and dependencies may be the real issue. |
| **Approved feature development** | Implement a focused feature or adjust an existing workflow. | Clarify requirements and obtain authorization first. |
| **Server resets and upgrades** | Prepare and test custom plugins for an approved server reset or major version upgrade. | Coordinate with Server Leads; never treat this as an unsupervised beginner task. |
| **Documentation and releases** | Update READMEs, configuration notes, changelogs, and player instructions. | Assume another developer will maintain the plugin later. |

### A Typical Development Task

1. **Define the problem.** Understand the expected behavior and gather the relevant information.
2. **Coordinate.** Confirm scope, priorities, and any required Server Lead approval.
3. **Investigate.** Read the existing code, documentation, logs, and relevant APIs.
4. **Make a focused change.** Work in a branch and avoid changing unrelated features.
5. **Build and test.** Start locally; use an isolated shared test environment when appropriate and authorized.
6. **Review.** Document what changed, evidence of testing, and possible risks.
7. **Release and document.** Follow the approved deployment process and update technical and player-facing documentation.

### Documentation Is Part of Development

Every maintained plugin should have documentation appropriate to its complexity, including:

- **README:** What the plugin does, where it runs, how to build it, and basic setup.
- **Dependencies:** Required and optional plugins, APIs, Java versions, and services.
- **Configuration:** Important settings, examples, and any migration considerations.
- **Build/release instructions:** How a developer produces the correct `.jar` and identifies its version.
- **Changelog:** Important player-facing changes, fixes, and compatibility updates.
- **Troubleshooting notes:** Known issues, expected logs, and common failure modes.

Update the [ERRSA Minecraft Player Handbook](https://errsa-minecraft-handbook.onrender.com/handbook.html) 
when an approved change introduces or changes player-facing functionality. Keep implementation details and 
maintenance instructions in technical documentation rather than requiring players to read source code.

!!! warning "Do not deploy solely because the plugin builds"
        A successful build proves that a compilation step completed; it does **not** prove the plugin behaves correctly, preserves player data, or is safe on the production network.

---

## Development Environment

An **Integrated Development Environment (IDE)** combines a code editor with tools for navigating projects, compiling, 
debugging, and interacting with version control.

ERRSA recommends **IntelliJ IDEA** for Java plugin development. IntelliJ can *help you commit, fetch, pull, and push 
Git changes*, but it does **not** automatically push every file change to GitHub.

### Tools You Will Need

| Tool | Purpose | Where to start |
| --- | --- | --- |
| IntelliJ IDEA | Write, navigate, build, and debug code. | [JetBrains IDEA documentation](https://www.jetbrains.com/help/idea/getting-started.html) |
| Java Development Kit (JDK) | Compile Java source and provide development tools. | [Dev.java — Getting Started](https://dev.java/learn/getting-started/) |
| Gradle | Manage dependencies and build practice projects. | [Gradle Getting Started](https://docs.gradle.org/current/userguide/getting_started.html) |
| Git | Track and compare source changes. | [Git — Getting Started](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) |
| GitHub | Host repositories and collaborate through branches and pull requests. | [GitHub Skills](https://skills.github.com/) |
| Local Paper server | Safely test practice plugins without affecting ERRSA production. | [Paper downloads](https://papermc.io/downloads/paper) |

**For the training projects, use Gradle** so new developers can follow a consistent set of exercises. 
Existing ERRSA repositories may use **Gradle or Maven**; when maintaining those projects, use the build tool already 
configured rather than converting the project unnecessarily. Paper's project setup guide supports both approaches.

### Getting Set Up

1. Install IntelliJ IDEA and a JDK compatible with your target Paper version.
2. Create a separate workspace for development and practice projects.
3. Open a Java project in IntelliJ and confirm the project SDK/JDK is configured.
4. Open the project's Gradle or Maven build file and allow dependencies to load.
5. Run the build task and locate the resulting `.jar` when the project produces one.
6. Start a **local, isolated Paper server** for practice, following Paper's official setup requirements.
7. Make sure Git can track your project and that generated build artifacts and credentials are excluded using `.gitignore`.

!!! info "Choose versions based on the project"
        Do not assume the most recent Java runtime or Paper API is appropriate for every existing ERRSA plugin. 
        Check the target server version, project build file, and plugin's documented requirements.

### Reading a Plugin Project

A small Gradle-based Java Paper plugin might look like this:

```text
DeveloperUtilities/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── org/example/developerutilities/
│   │   │       ├── DeveloperUtilities.java
│   │   │       ├── commands/
│   │   │       └── listeners/
│   │   └── resources/
│   │       ├── plugin.yml
│   │       └── config.yml
│   └── test/
│       └── java/
├── build.gradle.kts
├── settings.gradle.kts
├── gradlew
├── gradlew.bat
└── README.md
```

This is an **illustrative** layout, not a guarantee about ERRSA's actual repositories. Some projects use `build.gradle` 
instead of `build.gradle.kts`, `pom.xml` instead of Gradle, or `paper-plugin.yml` instead of `plugin.yml`.

| Component | Purpose |
| --- | --- |
| Main Java class | Starts the plugin and manages its lifecycle. |
| Command classes | Process commands issued by players or the console. |
| Listener classes | Respond to events, such as a player joining. |
| `plugin.yml` / `paper-plugin.yml` | Declares plugin metadata and, depending on the format, related registration details. |
| `config.yml` | Provides configurable defaults, when the plugin uses it. |
| Build file | Declares dependencies, Java settings, and how to build the plugin. |
| Tests | Check behavior without relying only on manual gameplay testing. |

**Before editing an existing project**, find its main class, build file, configuration resources, and any classes 
related to the feature you are investigating. Trace how a command or event reaches the logic that performs the action.

---

## Self-Guided Plugin Development Learning Path

This curriculum assumes **no previous programming experience**, but experienced Java developers may demonstrate 
proficiency and advance faster. It is a sequence of independent study, exercises, practical projects, and review 
checkpoints - not a requirement to finish every external website or tutorial.

The lessons below are called **Stages 1–11 which are all within Module 3**.

### How Each Stage Works

1. **Study:** Complete the assigned documentation or tutorial sections.
2. **Practice:** Implement the exercises independently.
3. **Build:** Complete a practical project or extend the ongoing project.
4. **Verify:** Demonstrate functionality and explain your choices.
5. **Advance:** Move on after satisfying the completion requirements.

!!! tip "Competency matters more than hours"
        The times below are planning estimates for beginners, not deadlines. If you already know a subject, 
        demonstrate the completion requirements rather than repeating introductory exercises unnecessarily.

### Curriculum Overview

| Stage | Subject | Estimated time |
| --- | --- | --- |
| 1 | Java Programming Fundamentals | 12–20 hours |
| 2 | Object-Oriented Java & Collections | 8–12 hours |
| 3 | Development Tools & Git | 4–6 hours |
| 4 | Your First Paper Plugin | 4–6 hours |
| 5 | Events, Commands & Permissions | 6–10 hours |
| 6 | Configurations & Data Persistence | 6–10 hours |
| 7 | Scheduling, Async & Performance | 6–10 hours |
| 8 | Plugin Integrations & APIs | 6–10 hours |
| 9 | Databases & Advanced Systems | 8–12 hours |
| 10 | Testing, Security & Release Workflow | 6–10 hours |
| 11 | Final ERRSA Plugin Project | 10–20 hours |

**Estimated total:** 80–126 hours for a beginner. Actual time depends on experience and the scope of the final project.

### Stage 1 — Java Programming Fundamentals

**Level:** Beginner · **Estimated time:** 12–20 hours

**Objective:** Learn Java fundamentals before working with Minecraft APIs.

**Required learning:**

- [Dev.java — Learn Java](https://dev.java/learn/) — start with getting started and language basics.
- [Dev.java — Java Language Basics](https://dev.java/learn/language-basics/) — review variables, control flow, 
methods, and related language concepts.

**Optional practice:** [W3Schools Java Tutorial](https://www.w3schools.com/java/)

**Study topics:** Variables, primitive types, strings, operators, conditionals, `for`/`while` loops, methods, 
parameters, return values, arrays, and basic input handling.

**Practice exercises:**

1. Write a program that checks whether a player has enough currency to buy an item.
2. Create a method that calculates a player's reward based on activity.
3. Simulate a command cooldown using timestamps.

**Stage project:** Build a console-based **Minecraft currency calculator** with a menu for checking balances, 
earning currency, and making purchases.

**Completion requirements:** The program compiles, handles invalid input, and demonstrates methods, loops, and 
conditional logic. You can explain your implementation without following a tutorial line by line.

**Submit:** Source code, instructions for running the program, and sample input/output.

### Stage 2 — Object-Oriented Java & Collections

**Level:** Beginner–Intermediate · **Estimated time:** 8–12 hours

**Objective:** Organize the currency program using classes and reusable behaviors.

**Required learning:**

- [Dev.java — Classes and Objects](https://dev.java/learn/classes-objects/)
- [Dev.java — Collections Framework](https://dev.java/learn/api/collections-framework/)
- [Dev.java — Exceptions](https://dev.java/learn/exceptions/)

**Study topics:** Classes, objects, constructors, encapsulation, access modifiers, inheritance, 
interfaces, `List`, `Set`, `Map`, generics, enums, and exception handling.

**Practice exercises:**

1. Create a `PlayerProfile` class with a UUID, balance, and activity statistics.
2. Store multiple player profiles in a `HashMap`.
3. Create an interface for different reward calculation strategies.
4. Handle invalid transactions using appropriate validation and exceptions.

**Stage project:** Extend the calculator into a **multiplayer economy simulator**, separating players, accounts, 
and transactions into suitable classes.

**Completion requirements:** The code uses understandable object-oriented design, avoids unnecessary duplication, 
and handles invalid operations correctly.

**Submit:** Updated source code and a short explanation of the main classes and how they interact.

### Stage 3 — Development Tools & Git

**Estimated time:** 4–6 hours

**Objective:** Build, track, and share Java projects in a reproducible way.

**Required learning:**

- [IntelliJ IDEA — Getting Started](https://www.jetbrains.com/help/idea/getting-started.html)
- [Gradle — Getting Started](https://docs.gradle.org/current/userguide/getting_started.html)
- [GitHub Skills](https://skills.github.com/) — focus on introductions to GitHub and pull requests.

**Study topics:** IntelliJ navigation, configuring a JDK, Gradle dependencies and tasks, Git repositories, commits, 
branches, pull requests, merge conflicts, `.gitignore`, and repository organization.

**Practice exercises:**

1. Open the existing Java project in IntelliJ.
2. Configure a Gradle build for it.
3. Create a practice GitHub repository and push the project.
4. Make a change on a separate branch.
5. Open a pull request and review the differences.

**Completion requirements:** Produce a GitHub repository with the working project, a README, meaningful commits, and 
a pull request.

**Submit:** Repository link and pull request link. **Module 8 · Documentation & Version Control** covers ERRSA's 
complete collaboration and release procedures; this stage teaches only what you need to complete the coding exercises.

### Stage 4 — Your First Paper Plugin

**Estimated time:** 4–6 hours

**Objective:** Create and load a basic Paper plugin on a local server.

**Required learning:**

- [Paper — Project Setup](https://docs.papermc.io/paper/dev/project-setup/)
- [Paper — How Plugins Work](https://docs.papermc.io/paper/dev/how-do-plugins-work/)
- [Paper — plugin.yml](https://docs.papermc.io/paper/dev/plugin-yml/)

**Study topics:** Paper API dependencies, plugin structure, `JavaPlugin`, `onEnable()`, `onDisable()`, 
plugin metadata, building a JAR, and interpreting startup errors.

**Practice exercises:**

1. Create a Paper plugin project from scratch.
2. Log a message when the plugin enables and disables.
3. Register the required metadata using the plugin descriptor appropriate to your project.
4. Build the plugin and install it on a **local Paper server**.
5. Intentionally introduce a safe error in your practice project and learn to identify it from logs.

**Stage project:** Create **DeveloperUtilities**, a plugin that starts successfully and reports its 
version and startup status.

**Completion requirements:** The plugin builds, loads without errors, and shuts down cleanly.

**Submit:** Source repository, compiled JAR, and a short startup log excerpt.

### Stage 5 — Events, Commands & Permissions

**Estimated time:** 6–10 hours

**Objective:** Make your plugin respond to player activity and authorized commands.

**Required learning:**

- [Paper — Event Listeners](https://docs.papermc.io/paper/dev/event-listeners/)
- [Paper — Command API](https://docs.papermc.io/paper/dev/command-api/basics/introduction/)
- [Paper — plugin.yml command and permission metadata](https://docs.papermc.io/paper/dev/plugin-yml/)

**Study topics:** `@EventHandler`, event cancellation and priority, command arguments, command suggestions, 
console versus player command senders, permission nodes, validation, and user-facing error messages.

**Practice exercises:**

1. Send a custom welcome message when a player joins.
2. Implement `/devinfo`.
3. Create `/devreward <amount>` with numerical input validation.
4. Restrict reward commands to authorized users.
5. Test behavior for an ordinary player, a player without permission, and the console.

**Stage project:** Extend **DeveloperUtilities** with commands, listeners, and permissions.

**Completion requirements:** Valid and invalid inputs are handled safely, permissions are enforced, and 
listeners perform their intended actions.

**Submit:** Updated JAR, command examples, and evidence of permission testing.

### Stage 6 — Configurations & Data Persistence

**Estimated time:** 6–10 hours

**Objective:** Build configurable behavior and preserve selected data between restarts.

**Required learning:**

- [Paper — Plugin Configuration](https://docs.papermc.io/paper/dev/plugin-configurations/)
- [Paper — Persistent Data Container](https://docs.papermc.io/paper/dev/pdc/)

**Study topics:** YAML defaults and validation, safe configuration reloads, player UUIDs, `PersistentDataContainer`, 
file-based persistence, and choosing where data should live.

**Practice exercises:**

1. Move welcome messages and reward amounts into `config.yml`.
2. Create a configuration reload command with suitable permissions and validation.
3. Store a player's reward total in an appropriate persistent location.
4. Verify data survives a full server restart.
5. Handle missing or malformed configuration values without corrupting data.

**Stage project:** Create a configurable **activity reward system** with persistent player statistics.

**Completion requirements:** Settings can be changed without recompiling, data survives restarts, and bad 
configuration values are handled safely.

**Submit:** JAR, example configuration, and before/after restart evidence.

### Stage 7 — Scheduling, Async & Performance

**Estimated time:** 6–10 hours

**Objective:** Schedule work without freezing the game server or accessing unsafe APIs from background threads.

**Required learning:**

- [Paper — Scheduling](https://docs.papermc.io/paper/dev/scheduler/)
- [Paper — Plugin Lifecycle](https://docs.papermc.io/paper/dev/how-do-plugins-work/)

**Study topics:** Server ticks, delayed and repeating tasks, synchronous versus asynchronous execution, 
main-thread safety, cooldowns, cancellation, expensive event handlers, and resource cleanup.

**Practice exercises:**

1. Schedule a delayed player message.
2. Create a repeating activity timer.
3. Implement a cooldown without blocking the server thread.
4. Move a simulated slow data operation off the main thread, using safe task coordination.
5. Cancel or clean up tasks when the plugin disables.

**Stage project:** Implement a timed reward system with cooldowns and appropriate asynchronous data handling.

**Completion requirements:** The plugin avoids blocking the main thread, does not access thread-unsafe server 
APIs asynchronously, and cleans up its resources.

**Submit:** Code showing task scheduling and a short explanation of which operations run synchronously or 
asynchronously and why.

### Stage 8 — Plugin Integrations & APIs

**Estimated time:** 6–10 hours

**Objective:** Use another plugin's public API without making your plugin fragile when integrations are unavailable.

**Required learning:**

- [Paper — Plugin Development Documentation](https://docs.papermc.io/paper/dev/)
- [LuckPerms Developer Wiki](https://luckperms.net/wiki/Developer-API)
- [PlaceholderAPI Wiki](https://wiki.placeholderapi.com/)
- [Velocity — Plugin Messaging](https://docs.papermc.io/velocity/dev/plugin-messaging/)

**Study topics:** Hard and soft dependencies, plugin APIs, version compatibility, LuckPerms integration, 
PlaceholderAPI expansions, cross-server communication fundamentals, and graceful failure.

**Practice exercises:**

1. Detect whether an optional dependency is installed.
2. Use a documented API from another plugin.
3. Expose a custom PlaceholderAPI placeholder.
4. Disable an optional integration gracefully when its dependency is missing.

**Stage project:** Integrate your activity reward plugin with at least one supported external API.

**Completion requirements:** Integration works when its dependency is available, fails safely when absent, 
and avoids unnecessary coupling between plugins.

**Submit:** Integration code and test results both **with** and **without** the optional dependency.

!!! warning "Cross-server communication"
        Network messages and integrations can cross security boundaries. Never trust client-originated or 
        unverified messages as though they came from the proxy. More detailed integration architecture belongs in Module 4.

### Stage 9 — Databases & Advanced Systems

**Estimated time:** 8–12 hours

**Objective:** Persist larger amounts of data while keeping queries safe and gameplay responsive.

**Required learning:**

- [Paper — Using Databases](https://docs.papermc.io/paper/dev/using-databases/)
- [MySQL Reference Manual](https://dev.mysql.com/doc/refman/8.4/en/)
- [Java JDBC — Basics](https://docs.oracle.com/javase/tutorial/jdbc/basics/)

**Study topics:** SQL fundamentals, SQLite versus MySQL, JDBC, parameterized statements, connection pooling, 
schemas, migrations, asynchronous operations, caching, consistency, and secure credentials.

**Practice exercises:**

1. Create a player statistics table in a **local database**.
2. Insert and retrieve data using prepared statements.
3. Perform database operations without blocking the server thread.
4. Handle temporary connection failures.
5. Verify data consistency after a restart.

**Stage project:** Replace the activity tracker's simple data storage with database-backed persistence.

**Completion requirements:** Queries are parameterized, data remains consistent, temporary failures are 
handled safely, and credentials never enter Git history.

**Submit:** Database schema, safe sample configuration without real credentials, and evidence of restart and failure testing.

!!! danger "Use practice credentials and isolated databases"
        Never connect practice plugins to ERRSA's production databases, live verification systems, payment 
        workflows, or other real user data. Module 4 covers ERRSA's external tools and services in greater detail.

### Stage 10 — Testing, Security & Release Workflow

**Estimated time:** 6–10 hours

**Objective:** Make code changes reproducible, reviewable, and safer to deploy.

**Required learning:**

- [Paper — Development Documentation](https://docs.papermc.io/paper/dev/)
- [GitHub — About Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [GitHub Actions — Quickstart](https://docs.github.com/en/actions/get-started/quickstart)

**Study topics:** Debugging and logging, unit/integration tests, input validation, permissions, 
dependency review, performance testing, versioning, CI builds, release notes, and rollback planning.

**Practice exercises:**

1. Write automated tests for reward calculations.
2. Test malformed command arguments and unauthorized access.
3. Create a GitHub Actions workflow that builds the plugin.
4. Prepare a release JAR and changelog.
5. Document installation, configuration, updating, and removal.

**Completion requirements:** The project builds reproducibly, relevant tests pass, the README is complete, 
and the release process can be followed by another developer.

**Submit:** CI workflow, test results, a draft release, and complete installation documentation.

!!! info "Module 8 covers ERRSA's Git workflow"
        This stage gives you practical experience with branches, pull requests, and releases. 
        Follow **Module 8 · Documentation & Version Control** for the team's official repository 
        practices, review requirements, versioning, and deployment workflow.

### Stage 11 — Final ERRSA Plugin Project

**Level:** Capstone · **Estimated time:** 10–20 hours

**Objective:** Independently demonstrate the knowledge from the learning path through a custom plugin developed 
and tested outside production.

**Project requirements:**

- At least one custom command and event listener.
- Permission enforcement.
- Configurable behavior.
- Persistent data.
- Appropriate scheduling or asynchronous processing.
- Error handling and useful logs.
- An integration with another plugin, **where relevant**.
- Clear code structure and technical documentation.
- A GitHub repository and pull request.
- A demonstration on an isolated test server.

The project should have an approved, achievable scope. It does not need to become a feature on ERRSA's production network.

**Submit:** Source code, compiled JAR, README, example configuration, pull request, and testing evidence. 
Be prepared to explain the architecture, dependencies, security choices, and any limitations.

**Assessment rubric:**

| Category | Weight |
| --- | ---: |
| Functionality and requirements | 25% |
| Java code quality and organization | 20% |
| Safety, security, and performance | 20% |
| Testing and debugging | 15% |
| Documentation and Git workflow | 10% |
| Ability to explain implementation | 10% |
| **Total** | **100%** |

!!! success "Completing the learning path"
        Finishing the capstone demonstrates a foundation in Paper plugin development. It does not automatically 
        grant authorization to deploy changes or modify every ERRSA system. Production responsibilities and access 
        remain subject to staff leadership and review.

---

## Transitioning to ERRSA Development

After demonstrating the learning path's competencies, developers should begin with smaller supervised tasks in an 
existing ERRSA-owned repository.

A sensible progression is:

1. Read the plugin's README, configuration, and build file.
2. Build its current source code without changing functionality.
3. Locate one command, event handler, or feature and explain how it works.
4. Investigate a small assigned bug or documentation issue.
5. Propose a focused fix on a separate branch.
6. Test the change and submit it for review.
7. Take on larger tasks as experience and authorization increase.

The goal is to maintain plugins that **future developers can understand and support**, not simply to produce a 
working JAR once.

---

## Check Your Understanding

1. Why might ERRSA choose to use an existing maintained plugin instead of writing a custom replacement?
2. Where would you look to identify a custom plugin's dependencies, build process, and main class?
3. What is the difference between a successful build and a successful integration test?
4. Why should a Developer avoid changing a production plugin simply because they can access its files?
5. If a Paper update breaks an ERRSA plugin, what factors besides Java syntax might need investigation?
6. Why must database credentials and live integration tokens be excluded from public or shared repositories?
7. What evidence should accompany a proposed plugin change before another developer reviews it?

---

## Resources

### ERRSA Documentation

- [Module 1 · Server Architecture](mod1.md){ data-preview }
- [Module 2 · Plugin Management](mod2.md){ data-preview }
- [Module 4 · External Tools](mod4.md){ data-preview } — Discord, databases, APIs, and other services.
- [Module 5 · Troubleshooting](mod5.md){ data-preview } — Logs, reproducing issues, crashes, and testing.
- [Module 6 · PlayerInitialization](mod6.md){ data-preview } — A detailed ERRSA integration case study.
- [Module 7 · Permission Management](mod7.md){ data-preview } — LuckPerms groups, inheritance, weights, and tracks.
- [Module 8 · Documentation & Version Control](mod8.md){ data-preview } — GitHub, branches, reviews, releases, and documentation.
- [ERRSA-MC-Core documentation](../../plugins/server-and-infrastructure/errsa-mc-core.md){ data-preview }
- [PlayerInitialization documentation](../../plugins/server-and-infrastructure/playerinitialization.md){ data-preview }
- [VIPBridge documentation](../../plugins/server-and-infrastructure/vipbridge.md){ data-preview }

### External Development Resources

- [Dev.java — Learn Java](https://dev.java/learn/)
- [IntelliJ IDEA Documentation](https://www.jetbrains.com/help/idea/)
- [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html)
- [PaperMC Plugin Development](https://docs.papermc.io/paper/dev/)
- [PaperMC Velocity Development](https://docs.papermc.io/velocity/dev/)
- [GitHub Skills](https://skills.github.com/)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod4/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 4 · External Tools</strong>
<   <span>Learn how ERRSA plugins communicate with databases, Discord, APIs, and other systems.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
