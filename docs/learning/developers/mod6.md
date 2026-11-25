---
tags:
  - DEV
  - SERVER LEAD
---

# Player Initialization

Player initialization is the process used to verify that new players are actual Embry-Riddle students, staff, faculty, or alumni. This is done by linking a player's Minecraft account usernames with a valid ERAU email address before they can gain access the server. This ensures that access remains limited to eligible Embry-Riddle affiliates, in accordance with our agreements with [Housing and Residence Life](https://erau.edu/student-experience/campus-community/housing "Click here to view the official HRL website") and [SGA](https://campusgroups.erau.edu/sga/home/  "Click here to view the official SGA website"), who provide much of the server's funding.

!!! tip "Learn the registration process"
    Review the [player onboarding tutorial video](https://www.youtube.com/watch?v=nrxG9c11pdo "Click here to watch the tutorial video!") to familiarize yourself with the registration process from a new player's perspective.

---

## Overview

The player initialization system consists of three main components that work together to automate the registration process.

1. **[PlayerInitialization Plugin:](../../plugins/server-and-infrastructure/playerinitialization.md "Click here to view the plugin page")** PlayerInitialization is a custom plugin that handles the in-game registration process. It communicates with players, collects their registration information, and manages their registration status within the Minecraft server.

2. **[SQL Database:](../../tools/phpmyadmin/index.md "An SQL database is a system that organizes and stores structured information in tables made up of rows and columns, using Structured Query Language (SQL) to read, update, and manage that data. You can think of it much like an advanced online Excel sheet.")** Our SQL Database, hosted through [phpMyAdmin]("phpMyAdmin is a free, open-source web application for administering MySQL databases through a browser. It is the provided servicer through Apex MC Hosting."), stores player registration information. This includes Minecraft usernames, email addresses, registration timestamps, statuses, and UUIDs. The database is updated throughout the registration process and can also be referenced when player information is needed for formal communication.

3. **[Power Automate:](../../tools/power-automate/index.md "Power Automate is an automation platform within the Microsoft Power Platform that connects apps and automates repetitive tasks and business processes.")** Power Automate handles the automated workflows that run when certain actions occur, such as a player submitting their email address or a registration request being created. These flows handle the communication between the database and the player's email account.

Together, these three components create an automated registration process that requires no manual staff approval under normal circumstances. Human intervention is generally only necessary when something goes wrong or an unusual situation requires investigation.

---

## Player Join

The registration process begins when a player first joins the server.

The PlayerInitialization plugin checks the player's assigned permission group (covered further in [Module 7 · Permission Management](mod7.md)). If the player has the `default` group, they have not yet completed registration, and the plugin begins the registration process. Players with any other assigned group are assumed to have already registered and are allowed to continue normally.

### Registration world

When registration begins, the player is teleported to the registration world, called "PlayerInit", with its location defined in the plugin's configuration.

This is a dedicated, empty world containing a hologram that prompts players to read their in-game chat. The area also provides clickable links to the server's Discord and website, where players can find additional support if needed.

### Rules and registration

The plugin begins by welcoming the player and asking them to review and agree to the server rules.

Players can either click the interactive chat buttons or use the following commands:

- `/agree` — Accepts the server rules and continues registration.
- `/disagree` — Declines the rules and disconnects the player from the server. They may rejoin and attempt registration again.

After agreeing to the rules, the player is prompted to begin registration using the clickable button or `/register` command. They are then asked to enter their email address directly into chat.

!!! warning "Common issue: Email domains"
    New players sometimes enter an email ending in `@erau.edu`. Although this is a valid Embry-Riddle email domain, it is generally reserved for university faculty and staff rather than students. Student email addresses typically end in `@my.erau.edu`.

    If a player is having trouble registering, verify that they entered their correct university email address and domain. Personal email addresses, such as Gmail or Yahoo accounts, cannot be used.

---

## SQL Communication

Once a player submits their email address, the PlayerInitialization plugin communicates with the `player_registrations` SQL database and performs several checks.

### Email validation

The plugin first checks whether the submitted email address uses an accepted Embry-Riddle email domain.

It then checks the database to determine whether that email address is already associated with another player. This prevents multiple Minecraft accounts from registering under the same email address.

If the email is already associated with an existing player, the plugin displays an error and prompts the player to enter another address or contact the staff team if they believe the existing registration is incorrect.

### Database upsert

If the email passes validation, the plugin either updates or inserts the player's database entry using their Minecraft [UUID]("A Minecraft UUID (Universally Unique Identifier) is a permanent 128-bit ID number used to uniquely identify a Minecraft account. Unlike a player's username, a UUID does not change when the player changes their in-game name").

This operation is known as an **upsert** (update or insert). It ensures that each unique Minecraft UUID has exactly one corresponding registration entry, preventing duplicate records and potential issues with registration statuses becoming desynchronized.

Each entry in the database contains:

- **ID:** An generic row number that increments by 1 for each entry.
- **Minecraft Username:** The player's current Minecraft username.
- **Email:** The submitted Embry-Riddle email address.
- **Status:** The current registration status.
- **Created At:** The timestamp when the record was first created.
- **Updated At:** The timestamp when the record was last modified.
- **UUID:** The player's unique Minecraft identifier.

The registration status can be one of the following:

- `APPROVED`
- `DENIED`
- `PENDING`
- `TIMEOUT`
- `INVALID`

Once the entry is upserted, the plugin begins polling the database every 5 seconds to check for a status change.

---

## Power Automate Flow

!!! warning "Documentation needed"
    STEPHEN YOU NEED TO WRITE THIS PART PLEASE!!!

    This section needs the specific Power Automate workflow, explaining how a new database entry triggers the flow, how the registration email is sent, and how the resulting approval or denial updates the database status. No need to overexplain, about as much detail as the rest of this module please <3

---

## Plugin Status Reading

While Power Automate handles the email and database updates, the PlayerInitialization plugin is responsible for reading the resulting registration status and responding accordingly.

When the plugin detects a status change, it immediately stops polling the database to prevent duplicate processing. It then executes the appropriate function based on the new database status.

### APPROVED

An `APPROVED` status indicates that the player approved the registration request through their email.

The plugin will:

1. Promote the player from the `default` group to the `user` group.
2. Set their gamemode to Survival.
3. Teleport them to the server spawn.
4. Send a public chat message welcoming them to the server.

The player has now completed registration and will no longer need to go through the initialization process when joining again.

### DENIED

A `DENIED` status indicates that the player declined the registration request through their email.

The plugin informs the player in chat and prompts them to enter their email address again if they would like to retry. This effectively restarts the registration process from the email submission step.

### Registration data retention

Once registration is complete, the player's information remains stored in the database for future reference. For example, their registered email may be needed when sending formal player communications regarding rule violations or other administrative matters.

!!! danger "Protecting sensitive information"
    Player registration data contains sensitive student information and must be handled accordingly under applicable university data protection requirements, including [FERPA]("Family Educational Rights and Privacy Act (FERPA) is a 1974 U.S. federal law that protects the privacy of student education records and gives parents and eligible students control over who can access or receive them.") where applicable.

    Access is restricted to the Server Lead and Developers due to legitimate server administration needs. This information must never be publicly disclosed, shared with unauthorized individuals, or used for personal reasons.

    Improper access or disclosure of protected information can have serious consequences, including potential university compliance issues and jeopardizing the server's continued operation.

    Collected emails shall **NEVER** be used for personal, informal, or advertising related communications.

---

## Other Cases

The registration system is designed to account for several situations that could otherwise interrupt or prevent a player from completing registration.

There are also several useful console logs generated by the PlayerInitialization plugin throughout the process. These logs provide information about a player's registration status and can help identify where something went wrong. If an issue originates within an automated workflow, additional execution logs can be found inside of Power Automate.

### Player leaves during registration

If a player disconnects at any point during registration, the plugin immediately stops any active polling task and sets their registration status to `DENIED`.

However, the database status can still be updated while the player is offline. For example, if they approve the registration email after disconnecting, Power Automate can update their status to `APPROVED`.

When the player rejoins, the plugin reads the updated status and processes it accordingly. This means players who complete email verification while offline do not have to restart the entire registration process.

### TIMEOUT

If a player does not approve or deny their registration email within 5 minutes, their status is changed to `TIMEOUT`.

The plugin informs the player that their registration has timed out due to inactivity and prompts them to enter their email address again.

In addition to preventing excessively long polling periods, this helps resolve situations where a player entered an incorrect email address and is waiting for a verification message that will never arrive.

### INVALID

An `INVALID` status is returned when the submitted email address cannot be associated with a valid Microsoft account.

The plugin prompts the player to enter a different email address. This catches situations where players submit personal email addresses or mistype their actual university email.

### Registration abuse

One potential exploit that cannot be reliably prevented through code alone: a player could obtain permission from another Embry-Riddle student to use their email address for registration.

This could allow someone to register a second alternate account or provide access to a friend who is not affiliated with Embry-Riddle.

Because there is no reliable way for the registration system to verify that a Minecraft account genuinely belongs to the student associated with the submitted email address, this cannot be fully prevented automatically.

If there is evidence that a player has used someone else's email to bypass the server's eligibility requirements, the situation should be investigated. If confirmed, the unauthorized account should be removed from the server.

---

## Additional References & Resources

The following resources are available for understanding, maintaining, and troubleshooting the player initialization system.

- **[Player Onboarding Tutorial](https://www.youtube.com/watch?v=nrxG9c11pdo "Click here to watch the tutorial video"):** Demonstrates the registration process from a new player's perspective.
- **[PlayerInitialization Plugin](../../plugins/server-and-infrastructure/playerinitialization.md  "Click here to view the plugin's wiki page"):** Provides additional technical details about the plugin and its configuration.
- **[PlayerInitialization GitHub Repository](https://github.com/DB-ERRSA/PlayerInitialization "Click here to view the plugin's GitHub page"):** Contains the plugin's source code.
- **SQL Database:** Accessible through the Apex Hosting control panel.
- **Power Automate:** The registration workflows are managed through the `ErrsaDB@erau.edu` email account. Contact the Server Lead for getting access to the scripts if needed.

Depending on the issue, it may also be necessary to inspect the plugin source code, SQL database implementation, or Power Automate flows to identify the cause of a problem.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod7/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 7 · Permission Management</strong><span>Learn how the server's permissions, roles, and tracks are structured.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>