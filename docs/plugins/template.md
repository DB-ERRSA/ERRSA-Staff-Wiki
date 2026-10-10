# Plugin Page Template (Authoring Reference)

This is a reference for wiki editors, not a live plugin page. Copy the example below into a new plugin Markdown file and replace the sample values before publishing. The template is available in the plugin navigation for staff editors. It is an authoring reference, not an installed plugin.

```markdown
# ExamplePlugin

<div class="errsa-plugin-role-tags md-tags" data-root="../../../assets/wiki-sync/" data-plugin="ExamplePlugin" data-server="survival" aria-live="polite"></div>

<div class="errsa-plugin-status" data-root="../../../assets/wiki-sync/" data-plugin="ExamplePlugin" data-server="survival" aria-live="polite"></div>

## What Is ExamplePlugin?

Explain what the plugin does.

## ERRSA's Use

Explain how ERRSA uses it.

## Dependencies

- [Vault](../server-and-infrastructure/vault.md)

## Required By

- [OtherPlugin](../server-and-infrastructure/other-plugin.md)

---

??? note "Common Commands"

    <div class="errsa-plugin-commands" data-root="../../../assets/wiki-sync/" data-plugin="ExamplePlugin" data-server="survival" aria-live="polite">Loading synced commands…</div>

---

??? note "ERRSA Configuration"

    Document relevant production configuration without secrets.

---

??? note "Permissions"

    <div class="errsa-plugin-permissions" data-root="../../../assets/wiki-sync/" data-plugin="ExamplePlugin" data-server="survival" aria-live="polite">Loading synced permissions…</div>

---

## Related Resources

### Official Resources

- [Plugin Download ↗](https://example.org/download){ .md-button .md-button--primary }
- [Plugin Documentation ↗](https://example.org/docs){ .md-button .md-button--primary }
```

**When adapting:** Keep **Dependencies** and **Required By** only when actual relationships exist. Include **Related Resources** only when you have a verified real resource URL. Keep official buttons consistently named **Plugin Download** and **Plugin Documentation**. For custom plugins without published links, omit the resources heading. Set the `data-plugin` name exactly as reported by Wiki Sync.
