# SqlPing

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="SqlPing" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="SqlPing" data-server="survival" aria-live="polite"></div>

## What Is SqlPing?

SqlPing is a custom ERRSA plugin used for database-related connectivity or health checks from the Minecraft server.

## ERRSA's Use

ERRSA uses it as part of the server infrastructure surrounding services that depend on MySQL connectivity.

---

??? note "Common Commands"

    Commands, permissions, and staff access are populated from Wiki Sync. Manual mappings are used only when a plugin does not expose a reliable command-permission relationship.

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="SqlPing" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    | Setting / Area | ERRSA Value | Purpose |
    |---|---|---|
    | Database platform | Azure SQL | Use the configured hosted SQL backend |
    | Port | `1433` | Connect over the standard SQL Server port |
    | Encryption | Enabled | Encrypt SQL traffic |
    | Trust server certificate | Disabled | Require normal certificate validation |
    | Credentials | Configured — omitted | Keep production database credentials out of the wiki |

    !!! info "Production configuration"
        Values were verified against the current production configuration. Credentials and secrets are intentionally omitted.

---

??? note "Permissions"

    Access shown below is derived from the latest LuckPerms snapshot. Wildcards and inherited groups are included automatically.

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="SqlPing" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

!!! info "Documentation coming soon"
    This is a custom ERRSA plugin. Documentation will be added here when available.
