---
tags:
  - DEV
  - SERVER LEAD
---


# Plugin Development

Plugin development can be the most difficult part in a developers responsibility. Due to this, we encourage developers to
choose existing made and maintained plugins whenever possible. ERRSA owns several plugins which the developers will be in 
charge of updating, maintaining documentation, and bug fixes. 

It is critical that developers understand how to create a plugin, how to update our custom plugins, where to download
and upload current plugin file structures, and ultimately how each plugin is intended to work.

## ERRSA Owned Plugins:

Each of the following plugins are an ERRSA custom-made plugin. If there will be any additional plugins in the future, 
they should be added to this list following the same format.  It is the Developer teams role to have every plugin source code
uploaded to the ERRSA Github with up to date documentation. Remember, you will not be the last person to update these plugins
so proper communication is critical

### [ERRSA MC Core]()

Purpose: A combination of a variety of different small features that would just add to plugin clutter if they were seperated.

Key Features: Diamond selling, form commands, compatibilty discord bot for geyser, floodgate, and viaversion, webhook for server handook,
inventory auditer to check for dupes, combat logger to detect reach hacks among other exploits, and end portal reroute, and portals for spawn

Link to documentation: https://github.com/DB-ERRSA/ERRSAMCCore

### [Rank Progression]()

Purpose: Inentivize longer playime per player to help our overall playtime per player goal

Key Features: Introduces ranks that you gain depending on time played which rewards you with cosmetic items and commands

Link to documentation: NOLAN NEEDS TO MAKE DOCUMENTATION

### [PlayerInitialization]()

Purpose: Housing & Residence Life set a requirement that for special conduct cases, we must be able to match a student name
to the player

Key Features: Connection to SQL database, and powerautomate, with student email validation and verification.

Link to documentation: NOLAN NEEDS TO MAKE DOCUMENTATION

### [EventBridge]()

Purpose: To simplify network access/mmanagement for ERRSA MC Staff

Key Features: Ability to manage server and world transportation access, whitelists & permissions, automatic event running and cleanup

Link to documentation: https://github.com/DB-ERRSA/EventBridge

### [VIPBridge]()

Purpose: Single system that handles VIP rank perks automatically

Key Features: Automatic promotion, shoutout from purchase, Custom token handling and distribution, token shop, token logic, and forms connection

Link to documentation: https://github.com/DB-ERRSA/VIPBridge

### [Guilds]()

Purpose: To help our goal of making player play together in a community

Key Features: Guilds creation, management, leveling, season competitions, guild claims

Link to documentation:https://github.com/DB-ERRSA/Guilds/releases

### [BannerBuilder]()

Purpose: Cosmetic feature enhance that other plugins werent able to offer our need

Key Features: Make banners over vanilla limit, copy banner, custom config to dictate how limits work with sho

Link to documentation:https://github.com/DB-ERRSA/BannerBuilder/releases

### [PlayerQuests]()

Purpose: Feature requested by many in community in order to pay others with in-game currency to do variety of tasks for them

Key Features: Quest creation, auto sync with litematica, bedrock version display for blueprints, non-litematica for java blueprints, quest rating, guilds tie in

Link to documentation:https://github.com/DB-ERRSA/PlayerQuests

---

## Developer Responsibility 

Developers are responsible for creating new custom plugins when there is a good purpose and have recieved approval. Developers
must maintain all custom plugins fixing bugs & providing patch updates, adding generic simple feature development. When it 
comes time for Server Reset the developers are responsible for updating all custom plugins to work in the newer server versions.
If newer server versions require updating to a new java syntax they will be responsible for that update while making sure it functions the
same for the player. Developers should aim to make UI as easy as possible. Plugins should maintain documentation for the 
newset version and add any new player-facing features to the server handbook https://errsa-minecraft-handbook.onrender.com/handbook.html

Remember documentation is by far one of the most important tasks for a developer assume you will not be the last person to touch 
the plugin and players will want to be able to learn without asking questions if possible they should be able to easily find
all features.

---

## IDE 

Integrated Developement Environment (IDE) is a software that combines essential tools for wriuting, testing, and debugging
code into a single interface. Basically IDE is text editor, compiler, debugger, and allows automatic git pushes all in one
unified application.

We recommend using IntelliJ for IDE for it's simplicity, and user friendly tools. 

In order to be able to start making plugins you will want a JDK (Java Development Kit) which provides java libraries, runtime tools,
and a coompiler needed to build and run java code. We recommend using Maven  for build automation and project manaement.

---

## Learning to build plugins

Custom Plugin Development — Self-Guided Training Syllabus

This will be a self-guided curriculum, not a traditional training manual. ERRSA will provide developers with a structured sequence of online resources, practical exercises, and assessments. Developers will be responsible for learning the material and demonstrating competency before advancing.

The syllabus will assume no prior programming experience, but developers with existing Java knowledge can move through the early material more quickly by demonstrating proficiency.
How the program works
Every learning module follows the same process:
1. Study — Complete the assigned external tutorials, documentation, or exercises.
2. Practice — Apply the concepts independently through small coding challenges.
3. Build — Complete a practical project that combines the module's concepts.
4. Verify — Demonstrate the project works and explain the implementation.
5. Advance — Continue only after meeting the module's completion requirements.

ERRSA's existing developer onboarding and server architecture modules should come first. This syllabus will focus on learning Java and developing custom plugins, rather than repeating your Apex Hosting, server management, and plugin administration lessons.
Curriculum overview
Module	Subject	Estimated study time
1	Java Programming Fundamentals	12–20 hours
2	Object-Oriented Java & Collections	8–12 hours
3	Development Tools & Git	4–6 hours
4	First Paper Plugin	4–6 hours
5	Events, Commands & Permissions	6–10 hours
6	Configurations & Data Persistence	6–10 hours
7	Scheduling, Async & Performance	6–10 hours
8	Plugin Integrations & APIs	6–10 hours
9	Databases & Advanced Systems	8–12 hours
10	Testing, Security & Release Workflow	6–10 hours
11	Final ERRSA Plugin Project	10–20 hours

Times are planning estimates for beginners, not deadlines. The syllabus is competency-based.
Module 1 — Java Programming Fundamentals
Beginner · 12–20 hours
Objective: Learn the fundamentals of Java before working with Minecraft APIs.

Required online learning
- Dev.java — Your First Steps and Language Basics
- W3Schools Java Tutorial — supplementary exercises
  Study topics
- Variables, primitive types, and strings
- Operators and conditional statements
- Loops (for, while)
- Methods, parameters, and return values
- Arrays and basic input handling
  Practice exercises
1. Write a program that checks whether a player has enough currency to purchase an item.
2. Create a method that calculates a player's reward based on their activity.
3. Simulate a command cooldown using timestamps.
   Module project: Build a console-based Minecraft currency calculator with a menu for checking balances, earning currency, and making purchases.

Completion requirements: The program compiles, handles invalid input, and demonstrates methods, loops, and conditional logic. The developer can explain how their code works without relying on a tutorial.

Module 2 — Object-Oriented Java & Collections
Beginner–Intermediate · 8–12 hours
Required online learning
- Dev.java — Object-Oriented Programming
- Dev.java — Collections and Exceptions
  Study topics
- Classes, objects, and constructors
- Encapsulation and access modifiers
- Inheritance and interfaces
- List, Set, and Map
- Generics and enums
- Exceptions and error handling
  Practice exercises
1. Create a PlayerProfile class with a UUID, balance, and activity statistics.
2. Store multiple profiles in a HashMap.
3. Create an interface for different reward calculation strategies.
4. Handle invalid transactions using exceptions.
   Module project: Extend the currency calculator into a multi-player economy simulator with separate classes for players, accounts, and transactions.

Completion requirements: The code uses appropriate object-oriented design, avoids unnecessary duplication, and correctly handles invalid operations.

Module 3 — Development Tools & Version Control
4–6 hours
Required online learning
- IntelliJ IDEA Getting Started
- Gradle Getting Started
- GitHub Getting Started
  Study topics
- IntelliJ project navigation
- JDK and Gradle configuration
- Dependencies and build tasks
- Git repositories, commits, and branches
- Pull requests and merge conflicts
- .gitignore and repository organization
  Practice exercises
1. Import the previous Java project into IntelliJ.
2. Configure a Gradle build.
3. Create a GitHub repository and push the project.
4. Make changes on a separate branch.
5. Open a pull request and review the differences.
   Completion requirements: Submit a GitHub repository containing the working project, a README, meaningful commits, and a pull request.

Module 4 — Your First Paper Plugin
4–6 hours
Required online learning
- Paper — Project Setup
- How Plugins Work
- Understanding plugin.yml
  Study topics
- Paper API dependencies
- Plugin project structure
- JavaPlugin
- onEnable() and onDisable()
- plugin.yml
- Building and loading a plugin JAR
- Reading startup errors
  Practice exercises
1. Create a Paper plugin project from scratch.
2. Log a message when the plugin enables and disables.
3. Add metadata to plugin.yml.
4. Compile the plugin and install it on a local Paper server.
5. Intentionally introduce an error and diagnose the resulting stack trace.
   Module project: Create DeveloperUtilities, a plugin that loads successfully and reports its version and startup status.

Completion requirements: The plugin builds, loads without errors, and shuts down cleanly.

Module 5 — Events, Commands & Permissions
6–10 hours
Required online learning
- Paper API Guides
- Paper Command API
- Command and Permission Registration
  Study topics
- Event listeners and @EventHandler
- Event cancellation and priorities
- Command arguments and suggestions
- Player versus console command senders
- Permission nodes
- Validation and error messages
  Practice exercises
1. Send a custom message when a player joins.
2. Implement /devinfo.
3. Create /devreward <amount> with input validation.
4. Restrict reward commands to authorized users.
5. Test the commands as a player without permission.
   Module project: Extend DeveloperUtilities with commands, event listeners, and permissions.

Completion requirements: All commands handle valid and invalid inputs, permissions are enforced, and listeners behave correctly.

Module 6 — Configurations & Data Persistence
6–10 hours
Required online learning
- Paper — Plugin Configurations
- Persistent Data Container
  Study topics
- YAML configuration
- Default values and validation
- Reloading settings safely
- Player UUIDs
- PersistentDataContainer
- Saving data across restarts
- Choosing between configuration and data storage
  Practice exercises
1. Move join messages and reward amounts into config.yml.
2. Create a configuration reload command.
3. Store a player's reward total.
4. Verify data survives a restart.
5. Handle missing or malformed configuration values.
   Module project: Create a configurable activity reward system with persistent player statistics.

Completion requirements: Settings work without recompilation, data persists correctly, and invalid configurations fail safely.

Module 7 — Scheduling, Async & Performance
6–10 hours
Required online learning
- Paper Scheduling API
- Paper Plugin Lifecycle
  Study topics
- Server ticks
- Delayed and repeating tasks
- Synchronous versus asynchronous operations
- Main-thread safety
- Task cancellation
- Expensive event handlers
- Resource cleanup
  Practice exercises
1. Schedule a delayed player message.
2. Create a repeating activity timer.
3. Implement a cooldown without blocking the server.
4. Move a simulated slow data operation off the main thread.
5. Cancel outstanding tasks when the plugin disables.
   Module project: Implement a timed reward system with cooldowns and asynchronous data handling.

Completion requirements: The plugin does not block the main thread, uses thread-safe patterns, and cleans up its resources.

Module 8 — Plugin Integrations & APIs
6–10 hours
Required online learning
- Plugin Dependencies
- LuckPerms Documentation
- PlaceholderAPI Wiki
- Velocity Plugin Messaging
  Study topics
- Hard and soft dependencies
- Plugin API integration
- Dependency version compatibility
- LuckPerms integration
- PlaceholderAPI expansions
- Cross-server communication fundamentals
- Safe handling of unavailable integrations
  Practice exercises
1. Detect whether an optional dependency is installed.
2. Integrate an API from another plugin.
3. Expose a custom PlaceholderAPI placeholder.
4. Disable an optional feature gracefully when its dependency is missing.
   Module project: Integrate the activity reward plugin with at least one supported external API.

Completion requirements: Integration works when the dependency is available, fails safely when absent, and does not introduce unnecessary coupling.

Module 9 — Databases & Advanced Systems
8–12 hours
Required online learning
- Paper — Using Databases
- MySQL Documentation
- Java SQL API
  Study topics
- SQL fundamentals
- SQLite versus MySQL
- JDBC and prepared statements
- Connection pooling
- Database schemas and migrations
- Asynchronous database operations
- Caching and data consistency
- Secure credential management
  Practice exercises
1. Create a player statistics table.
2. Insert and retrieve player data using prepared statements.
3. Perform database operations asynchronously.
4. Handle a temporary database outage.
5. Test how data behaves after restarting the server.
   Module project: Replace the activity tracker’s simple persistence system with database-backed storage.

Completion requirements: Data remains consistent, queries are parameterized, database failures are handled, and credentials are excluded from Git.

Module 10 — Testing, Security & Release Workflow
6–10 hours
Required online learning
- Paper — Debugging and Stack Traces
- GitHub Pull Requests
- GitHub Actions
  Study topics
- Debugging and logging
- Unit and integration testing
- Permission and input validation
- Dependency and security review
- Performance testing
- Semantic versioning
- GitHub Actions builds
- Release notes and rollback procedures
  Practice exercises
1. Write automated tests for reward calculations.
2. Test malformed command arguments.
3. Create a GitHub Actions workflow that builds the plugin.
4. Prepare a release JAR and changelog.
5. Document how to install, configure, and remove the plugin.
   Completion requirements: The project builds automatically, tests pass, documentation is complete, and the release is reproducible.

Module 11 — Final ERRSA Developer Assessment
Capstone · 10–20 hours
Developers must independently design and implement a custom plugin that demonstrates their understanding of the learning path.

Project requirements
- At least one custom command and event listener
- Permission enforcement
- Configurable behavior
- Persistent data
- Appropriate scheduling or asynchronous processing
- Error handling and logging
- Integration with another plugin, where relevant
- Clear project structure and documentation
- GitHub repository and pull request
- Demonstration on an isolated test server
  Developers should submit their source code, compiled JAR, README, configuration example, and testing evidence.
  Assessment rubric
  Category	Weight
  Functionality and requirements	25%
  Java code quality and organization	20%
  Safety, security, and performance	20%
  Testing and debugging	15%
  Documentation and Git workflow	10%
  Ability to explain implementation	10%
  Total	100%

---

## Reference Mod.8 (Github)

Reference Mod 8 for the process of Github. Everything owned by github should be published/updated there.

---

## Resources

---