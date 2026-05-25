---
name: project-release-safety-gate
description: Use before apply, deploy, publish, release, or task close for code/product changes. Verifies validation, Impact Sync, hard stops, QA, decision records, and release status.
---

# Project Release Safety Gate

Use before any deploy/release/publish or before closing meaningful code/product work.

## Checklist

1. Correct target app/repo/environment.
2. Tests/lint/build passed, or not applicable stated.
3. Impact Sync completed.
4. Hard stops respected.
5. QA/manual checks done or explicitly "not checked".
6. Decision Record done or not needed stated.
7. Docs/task board updated.
8. Release/deploy/publish status explicit.

## Hard Stops

Do not proceed without explicit approval for:
- production publish/release;
- billing/pricing/invoices;
- legal docs;
- permissions/security/destructive data;
- personal data exposure;
- supplier/customer sends;
- bulk calendar changes.

## Output

- Apply/deploy readiness.
- Publish/release readiness.
- Risks.
- What remains open.
