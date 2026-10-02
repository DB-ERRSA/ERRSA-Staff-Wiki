---
tags:
  - ADMIN
  - DEV
  - SERVER LEAD
---

# 5. Server Versions

## 5.1 Version Numbers

Version numbers help staff communicate the scope of a release. The [server changelog](../changelog/releases.md){ data-preview } is the source for the latest **documented** release. Anytime an update is made, whether a large new addtion, or just a simple tweak to a config file, the server version should update and be documented in the changelog.

| Part | When to increase it |
| --- | --- |
| Major (`X.0.0`) | Full reset or major overhaul. |
| Minor (`0.X.0`) | Significant feature, plugin, or gameplay change. |
| Patch (`0.0.X`) | Small bug fix or configuration adjustment. |

For example, when updating from version `1.3.4`, a significant new plugin release will become `1.4.0`; but a bug fix will become `1.3.5`. 

---

## 5.2 Release Notes

Always update the [server changelog](../changelog/releases.md){ data-preview } when a release is approved. The version will also need to be updated in the miniMOTD plugin's config file, as that is what is displayed on the server browser. Verify the live server states the most recent version in changelog whenever an update is made.

---

<nav class="handbook-next" aria-label="Continue reading">
  <a href="/documentation/">
    <span class="handbook-next__copy"><small>Back to</small><strong>Handbook index</strong><span>Return to all handbook sections.</span></span>
    <span class="handbook-next__arrow" aria-hidden="true">→</span>
  </a>
</nav>
