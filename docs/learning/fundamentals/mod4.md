---
tags:
- MOD
- ADMIN
- DEV
- SERVER LEAD
---

# Module 4 · In-Game Systems

ERRSA MC contains many systems, including several that are custom-built specifically for the server.

This module provides a basic overview of the major **player-facing systems** and how players interact with them.

!!! info "Reference material"
    This module is intended to teach you the basics. For more detailed player-facing tutorials, refer players to the [ERRSA MC website handbook](https://errsa-minecraft-handbook.onrender.com/handbook.html). For more technical information on the systems, use the relevant [Plugin](../../../plugins) or [Tool](../../../tools) documentation.

---

## Player Registration

Player registration is the first major system most players encounter and is one of the most common sources of questions.

The registration process verifies that players are Embry-Riddle students though email verification before granting them normal server access.

!!! tip "Learn the registration process"
    Review the [player onboarding tutorial](https://www.youtube.com/watch?v=nrxG9c11pdo "Click here to watch the tutorial video!") and the [PlayerInitialization plugin](../../../plugins/playerinitialization.md#){ data-preview } documentation for more information.

---

## Server Menu

The `/menu` command provides a central location for many of the most commonly used server features.

Players can use it to access things such as:

- Warps
- Guilds
- Quests
- Discord
- The website
- The world map
- Other server features

---

## Tutorials

Often times many of the questions players have are already written somewhere in our documentation.

The `/tutorial` command sends players to the **Tutorial Dojo**, where NPCs explain the major systems available on the server.

The dojo provides an easy in-game way for players to learn without needing to leave Minecraft.

Additionally, the [website handbook](https://errsa-minecraft-handbook.onrender.com/handbook.html) provides more formal and detailed explanations of the server's main systems.

---

## Teleportation Commands

As mentioned previously, many players have never played on a server with common commands before, but they can provide vital functions for large worlds or interacting with other players.

Common commands include:

| Command | Purpose                                            |
|---------|----------------------------------------------------|
| `/wild` | Travel to a random location in the survival world. |
| `/tpa`  | Request to teleport to another player.             |
| `/warp` | Open the server's warp system.                     |
| `/home` | Manage and teleport to personal homes.             |

---

## World & Map Navigation

ERRSA MC provides a live map that allows players to view the server world outside of Minecraft.

Players can access it through the "map" tab on the website, or get a direct link in-game by using `/map`.

This map automatically updates within a few minutes when it detects block changes such as breaking or placing.

---

## Server Browser & Worlds

The `/servers` command opens the server browser menu that allows players to move between the different servers in the network.

The exact breakdown of servers and worlds can be seen in [Module 1](mod1.md#worlds-servers){ data-preview }.

Players can access easily claim a plot from anywhere in the world with `/plot auto`, which claims the first available plot and teleports them to it.

Once claimed, they can return at any time with `/plot home`.

---

## Rank Progression

The Rank Progression system rewards players for active playtime on the server.

Players can view their progression, see what ranks are available, as well as view their associated rewards with `/progression`.

Personal playtime stats can be viewed with `/playtime` or `/pt` for short.

Players can compare their playtime with the rest of the server using `/playtime leaderboard` or `/pt top`.

---

## Economy & Shops

The economy provides a way for players to trade items without relying on a traditional direct bartering system.

The only source of generating new money is by selling diamonds.

Players can sell diamonds through `/sell` or by interacting with the Diamond Trader NPC at spawn.

Money can also be transferred directly using `/pay <username> <amount>`.

Players can create shops by holding an item and interacting with a chest or barrel. Shops allow players to buy and sell items without needing to be online at the same time.

!!! info "Player shops"
    Creating a shop costs money, so players will need to gather and sell some diamonds before joining the economy. This is to prevent new player's from immediately buying late-game gear at the start of the server.

---

## Guilds

Guilds are a great way to allow players to collaborate and represent themselves with a shared in-game identity.

All functions related to creating, managing, or viewing guilds can be seen in game with `/guilds`.

Players can view guild stats in-game by visiting the guild hall in spawn or typing `/warp guild_hall`.

The same guild information is also available online on the [website guild page](https://errsa-minecraft-handbook.onrender.com/guilds.html).

---

## Tokens

Tokens are a type of currency used to purchase custom in-game items. 

They can be obtained through the Rank Progression system, granted when a player becomes VIP, or purchased directly with in-game money.

There are currently three token types:

- **Music Disc Tokens** — Used to request custom music discs.
- **Map Art Tokens** — Used to request custom map art.
- **Head Shop Tokens** — Used to obtain decorative player heads.

Music disc and map art requests go through an approval process.

!!! info "Staff approval"
    Requests appear in the staff channel in Discord and can be reviewed and approved or denied using the provided in-game command.

---

## VIP

The VIP rank is purchase with real currency and provides a way for players to directly support ERRSA MC financially. Revenue will help cover hosting costs and support events with real physical prizes.

To adhere to the [Minecraft EULA](https://www.minecraft.net/en-us/eula), all rewards are purely cosmetic or provide no function above other players.

Benefits include:

- A gold VIP tag.
- A custom NPC at spawn.
- Access to all rank progression rewards without needing the required playtime.
- Additional in-game tokens.
- Other cosmetic or quality-of-life benefits.

!!! warning "Coming soon"
    VIP is still a work in progress, and not currently available for purchase, and its final features may change before release.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="../mod5/">
    <span class="handbook-next__copy"><small>Next section</small><strong>Module 5 · Communication & Staff Resources</strong><span>Learn about how communication works on the staff team.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>