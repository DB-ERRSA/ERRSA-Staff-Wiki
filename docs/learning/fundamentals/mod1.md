---
tags:
- MOD
- ADMIN
- DEV
- SERVER LEAD
---

# Module 1 · Understanding ERRSA MC

This module provides a high-level understanding of how ERRSA MC is structured, why it exists, and the major systems that make up the server.

---

## Server Details

ERRSA MC is a Minecraft server network built around a vanilla-focused survival experience for Embry-Riddle students.

!!! info "Server architecture"
    ERRSA MC currently runs **Minecraft Java Edition 1.21.4** using **Paper** servers connected through a **Velocity** proxy, and utilizes
    [Geyser](../../plugins/geyser-spigot.md){ data-preview } and [Floodgate](../../plugins/floodgate.md){ data-preview } to allow Bedrock Edition players to connect.

The network consists of:

- One Velocity proxy server.
- Three Paper servers:
    - **Main** — The primary survival server and creative world.
    - **Backup/Dev** — An additional server used for development, testing, and troubleshooting.
    - **Events** — A separate server for temporary events and activities.

The Velocity proxy allows multiple Minecraft servers to operate behind the same public server address and lets players move between them.

---

## Server Purpose

ERRSA MC was originally created as another way for ERRSA to engage with a wider range of students as part of its mission to build a bigger, better community on campus.

Not every student enjoys attending loud, crowded social events. ERRSA MC provides another way for students to interact, socialize, and build relationships through a shared online environment.

!!! quote "The main takeaway"
    The goal of ERRSA MC has been, and always will be, to **build community**.

---

## Survival, Economy & Claiming Philosophy

ERRSA MC is intentionally **vanilla-focused**. The goal is to provide an experience that feels familiar and accessible without requiring complicated modpacks or extensive prior knowledge.

At the same time, the server uses [plugins]("A plugin is a server-side extension that adds or changes functionality without requiring players to install a separate mod.") to provide systems that are difficult to achieve through vanilla Minecraft alone.

These systems allow ERRSA MC to provide functions such as:

- Land claiming to protect player builds.
- An economy and shops for easy player-to-player trading.
- Moderator tools for ensuring rule enforcement and fairness.
- Additional systems that support collaboration and community building.

The goal is to preserve the accessibility of vanilla Minecraft while providing the tools necessary to maintain a safe, fair, and friendly community.

---

## Major Server Features

In addition to the core survival, claiming, economy, and shop systems, ERRSA MC includes several systems designed to encourage community participation.

These include:

- Guilds for player groups and collaboration.
- Quests for additional goals and activities.
- Player progression and rank rewards.
- Creative plots for building.
- Community events.
- Custom server resources and cosmetics.

These features all support the same larger goal: **building community**.

---

## Worlds & Servers

ERRSA MC contains several separate environments, each serving a different purpose.

| Server/World    | Purpose                                                                                                                                                                            |
|-----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Main / Survival | The primary server where players spend most of their time.                                                                                                                         |
| Creative        | A separate creative environment where players can claim plots and build without the limitations of survival.                                                                       |
| Legacy Lake     | A special world that serves as a tribute to previous ERRSA Executive Board members.                                                                                                |
| Events          | The Events server is completely separate from the main survival environment, allowing staff to host events without affecting player inventories, data, or the main survival world. |
| Backup / Dev    | The Backup/Dev server is used to test new features, plugins, configuration changes, and bug fixes before they affect the main server.                                              |

---

## How Players Interact With the Network

Most players primarily interact with the **Main Survival** server, but the other environments are available when appropriate.

Players can use the server browser to move between available servers without disconnecting from the network.

!!! tip "Think of the network as one community"
    Players see ERRSA MC as one community, even though the network is made up of multiple Minecraft servers behind the scenes.

---

## LuckPerms Tracks & Roles

ERRSA MC uses **LuckPerms** to manage permissions and player rank tags.

A **track** is a sequential set of ranks that represents progression within a specific category.

ERRSA MC currently uses four major tracks:

=== "Main Track"

    The Main track controls a player's basic server permissions.

    - **Default** — Automatically assigned when a player joins. It intentionally has very limited permissions while the player completes registration.
    - **User** — Assigned after registration and provides common player permissions such as `/tpa`, `/warp`, and `/spawn`.
    - **VIP** — Intended for players who purchase VIP. It provides cosmetic and quality-of-life permissions such as `/hat`.

    !!! warning "VIP status"
        The VIP system is currently a work in progress and is not yet available for purchase.

=== "Rank Progression Track"

    The Rank Progression track rewards players for reaching playtime milestones.

    ![Ranks](https://cdn.discordapp.com/attachments/1388386341657772063/1542618419994693732/image.png?ex=6ac0075b&is=6abeb5db&hm=85992a42e8a3353c2d8882d8e40fe23c1c8f74d59680f5fd080f6bc258ec03e7&)

    Players can view available ranks and rewards through `/progression`.

    !!! info "Rank progression reference"
        See the Rank Progression plugin documentation for the current ranks, permissions, and rewards.

=== "ERRSA Track"

    The ERRSA track represents a player's relationship to ERRSA rather than their Minecraft staff role.

    It includes:

    - **ERRSA** — General ERRSA-related membership.
    - **Legacy** — Previous Executive Board members.
    - **Hall Rep** — ERRSA Hall Representatives.
    - **Exec Board** — Current ERRSA Executive Board members.
    - **Exec Coord** — Executive Coordinators and ERAU staff who directly support ERRSA.
    - **Advisor** — The current ERRSA advisor or professional staff.

    These ranks do not generally grant additional permissions. **Exec Coord and higher inherit VIP permissions.**

=== "Staff Track"

    The Staff track contains the four Minecraft staff roles:

    - Moderator
    - Admin
    - Developer
    - Server Lead

    Staff ranks represent responsibilities and access within the Minecraft server rather than player progression.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod2/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 2 · Server Rules & Expectations</strong><span>Learn the server's rules, staff expectations, and enforcement policy.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
