# PlayerQuests

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="PlayerQuests" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="PlayerQuests" data-server="survival" aria-live="polite"></div>

## What Is PlayerQuests?

PlayerQuests is a custom ERRSA plugin for server-specific quest and player progression features.

## ERRSA's Use

ERRSA uses PlayerQuests for custom quest workflows on the Survival server. Quest definitions and rewards may be tied to other ERRSA systems, so production changes should be verified against the live setup.


## Dependencies

- [Vault](../server-and-infrastructure/vault.md)
- [GriefPrevention](../permissions-and-moderation/griefprevention.md)
- [Guilds](guilds.md)
- [WorldGuard](../worlds-and-building/worldguard.md)
- [Lands](https://www.spigotmc.org/resources/53313/)


---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when the plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="PlayerQuests" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Quest expiration | Unclaimed `30 d`; claimed `7 d` | Remove stale quests on defined schedules |
    | Active quest limit | `5` per player | Limit simultaneous accepted work |
    | Posted quest limit | `10` per player | Limit outstanding player-created quests |
    | Worker deposit | Enabled; default `5%` | Require a configurable worker deposit |
    | Maximum quest region | `500,000` blocks | Cap region-based quest size |
    | Guild quests | Enabled; `EQUAL` split | Support guild quest rewards with equal distribution by default |
    | Persistent boundaries | Enabled; `500` block render distance | Keep quest boundaries visible/persistent |
    | Server blueprint rendering | Enabled; max `6000` fake blocks | Preview blueprint quests server-side |
    | Litematica detection | Enabled | Recognize supported blueprint inputs |
    | Resource pack | Enabled and required; Bedrock skipped | Deliver blueprint-preview assets to Java clients |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        The resource-pack URL/SHA may change with releases; keep them synchronized with the current ERRSA resource-pack release.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="PlayerQuests" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
