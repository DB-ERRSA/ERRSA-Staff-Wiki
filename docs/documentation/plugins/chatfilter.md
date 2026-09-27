!!! note "Guide status"
    This guide predates the September 2026 plugin inventory. Verify commands and settings against the live server before use.

# ChatFilter

## Purpose

   **Category:** ` Moderation / Protection`  

Chat Filter is a chat management plugin for reducing spam, swearing, advertisement of IPs and URLs. Stop repetition in chat and add as many swear words, IPs and URLs as you want to make sure our server chat is controlled! This plugin also filters books, signs, commands and anvils.

---

## Dependencies

!!! info "Required for this plugin to function"
- **Server:** Paper


---

## Permissions Model

!!! note "Permissions are intentionally scoped"
    This plugin follows the **parallel permission track model**.  
    Access is granted by role, not convenience.


### Mod permissions
- `chatfilter.view` — Allows players to to view what gets caught in the filter

### Admin permissions
- `chatfilter.bypass` — Allows the player to bypass all filters(Chat, Signs, Books, Anvils, Decaps, pause chat and repeat messages)


---



## Configuration Files

!!! info "Primary config locations"
- `plugins/ChatFilter/config.yml`
- `plugins/ChatFilter/advertfilters.yml`
- `plugins/ChatFilter/word filters.yml`
- `plugins/ChatFilter/unicode.yml`

### `config.yml`
Controls the **core behavior of the chat filter system**.

Key features configured here include:

- Anti-spam and repeat message detection  
- Uppercase message control  
- URL blocking and advertisement detection  
- Character spam prevention (e.g., `aaaaaaaaaaaa`)  
- Per-word filtering behavior and preset filter rules  
- Event priority handling for compatibility with other plugins  


---

### `advertfilters.yml`
Contains **regex patterns that detect advertising**.

Examples of blocked content:
- Server IP addresses
- Domain names (e.g., `.com`, `.net`, `.org`)
- Obfuscated advertisements using separators like `dot`, `-`, or spaces

When triggered, the filter can:

- Warn staff
- Warn the player
- Cancel the chat message
- Execute commands (e.g., moderation alerts)

---

### `word filters.yml`
Defines **specific word or phrase filters**.

This file contains:

- Individual word filters
- Regex patterns to catch bypass attempts
- Replacement rules (e.g., replacing profanity with another word)
- Optional moderation actions like muting or alerting staff

Example use cases:

- Blocking profanity
- Replacing certain words
- Auto-muting spam bots

---

### `unicode.yml`
Prevents players from bypassing filters using **Unicode or special characters**.

This file:

- Whitelists safe Unicode blocks
- Blacklists characters often used to bypass filters
- Prevents “fancy text” abuse from hacked clients

Example blocked characters include:

- Full-width Unicode letters
- Circled or stylized characters

---

!!! warning
    Changes to regex filters can unintentionally block legitimate messages.  
    Always test modifications in a **staging server or with a test account** before deploying.

---


This section documents **intentional deviations from plugin defaults**.





_Last verified: 2026-03-06_  
_Server version: 1.21.4_
