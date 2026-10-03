---
tags:
  - DEV
  - SERVER LEAD
---

## What Is Chunky?

Chunky is a performance utility plugin used to pre-generate world chunks, reducing server lag spikes caused by players exploring new terrain.

## ERRSA's Use

ERRSA currently does not use the functionality of Chunky directly, but it is a required dependency for [Chunky Border](chunkyborder.md "Click here to learn more about the plugin!").

---

??? note "Common Commands"

    | Command | Description | Who Can Use It |
    |---------|-------------|----------------|
    | /chunky start | begin chunk generation | Developer |
    | /chunky pause | pause generation | Developer |
    | /chunky continue | resume generation | Developer |
    | /chunky cancel | cancel generation | Developer |
    | /chunky radius <size> | sets a radius to generate chunks in | Developer |
    | /chunky world <world> | selects a world to generate chunks in | Developer |
    | /chunky shape <shape> | sets generation shape (square, circle, etc.) | Developer |
    | /chunky center | sets the center point to generate chunks from | Developer |
    | /chunky progress | view generation progress | Developer |
    | /chunky reload | reloads plugin config | Developer |

---

??? note "Plugin Configuration"

    | Setting | ERRSA Value | Default | Purpose |
    |---------|---------|-------------|---------|
    | continue-on-restart: | false | true | Prevent lag upon startup |
    | force-load-existing-chunks: | false | true | Unnecessary data processing |
    | silent: | true | false | Reduce console spam |

    !!! info "Unchanged settings"
        Settings that use the plugin's default value are not listed here. This section only documents intentional ERRSA configuration changes.

---

??? note "Permissions"

    !!! info "Permission inheritance"
        - Chunky is controlled via [Developer wildcard permissions]("Developers inherit the wildcard, or star symbol '*', permission, which automatically grants access to all permissions.") only. 

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/plugin/chunky){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://github.com/pop4959/Chunky/wiki){ .md-button .md-button--primary }

### ERRSA Resources

- [Chunky Border Plugin](chunkyborder.md "Click here to learn more about the plugin!")