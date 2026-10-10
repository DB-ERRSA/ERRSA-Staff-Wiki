# Hurricane

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="Hurricane" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="Hurricane" data-server="survival" aria-live="polite"></div>

## What Is Hurricane?

Hurricane is part of the GeyserMC compatibility ecosystem used alongside the server's cross-platform infrastructure.

## ERRSA's Use

ERRSA keeps Hurricane as part of the infrastructure supporting compatibility services. Routine staff should not need to interact with it directly.


## Dependencies

- [Geyser (Velocity)](https://geysermc.org/download/)

!!! note "Geyser integration"
    Hurricane is an add-on intended to work with Geyser. This is a functional integration requirement, not a verified hard dependency declared by plugin metadata. ERRSA uses Geyser on Velocity; do not install Geyser-Spigot solely for this integration.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="Hurricane" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Bamboo collision fix | Enabled | Reduce Bedrock lagback/collision issues on bamboo |
    | Pointed dripstone collision fix | Enabled | Reduce Bedrock lagback/collision issues on pointed dripstone |

    !!! info "Production configuration"
        Values below were verified against the current production plugin configuration. Credentials, API keys, tokens, and other secrets are intentionally omitted.

    !!! warning "Operational note"
        These fixes remove collision handling for the listed blocks. Re-test Java and Bedrock movement after changing them.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="Hurricane" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://modrinth.com/mod/hurricane){ .md-button .md-button--primary }
- [GeyserMC Download ↗](https://geysermc.org/download/?project=other-projects&hurricane=expanded){ .md-button .md-button--primary }
