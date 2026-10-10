# PvPToggle

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="PvPToggle" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="PvPToggle" data-server="survival" aria-live="polite"></div>

## What Is PvPToggle?

PvPToggle allows players to enable or disable PvP individually.

## ERRSA's Use

ERRSA uses opt-in PvP controls with cooldowns and protections.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="PvPToggle" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    !!! note "ERRSA-specific configuration choices"

    - `default-pvp`: `false` — players are **protected by default**  

    - `cooldown`: `120` seconds — prevents rapid PvP toggling 

    - `anti-abuse`: `true` — players cannot disable PvP during combat

    - `protect-pets`: `true` — prevents killing pets of protected players

    - `friendly-fire`: `false` — prevents players from hitting their own entities 
    - `hit-self`: `true` — allows self-damage interactions (non-combat use cases) 

    - `particles`: `true` — visual feedback when hits are blocked 

    - `feedback`: `true` — players are notified when PvP is blocked 

    - `death-status-reset`: `false` — PvP state persists through death 

    - `prefix`: `"§4PvP »"` — consistent messaging branding

    - `enabled/disabled states`:
      - Enabled = `"§cVulnerable"`  
      - Disabled = `"§aProtected"` 


---

??? note "Permissions"

    Access is populated from the latest LuckPerms Wiki Sync snapshot.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="PvPToggle" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/pvptoggle){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://modrinth.com/plugin/pvptoggle){ .md-button .md-button--primary }
