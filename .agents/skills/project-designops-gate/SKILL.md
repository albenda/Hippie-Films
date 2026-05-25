---
name: project-designops-gate
description: Use before closing any UI/UX/design work. Checks brand consistency, visual hierarchy, CTAs, empty states, accessibility, mobile constraints, and whether the work matches the requested scope.
---

# Project DesignOps Gate

Use before closing design work.

## Check

1. Brand
   - colors follow tokens;
   - typography consistent;
   - no random palette drift.

2. Hierarchy
   - hero / feature / info / row tiers are clear;
   - important action is visually obvious.

3. CTAs
   - every CTA says what it does;
   - primary/secondary/tertiary hierarchy is clear;
   - no fake or dead-end CTA.

4. States
   - empty state;
   - loading state;
   - error state;
   - full state.

5. Mobile
   - touch targets at least 44px;
   - safe areas;
   - bottom nav / keyboard / scroll behavior;
   - no overlapping text.

6. Accessibility
   - contrast;
   - labels;
   - focus/keyboard when relevant;
   - screen-reader basics.

7. Scope honesty
   - if Rebuild was requested, confirm it is not just polish.

## Output

- Pass/fail.
- Issues found.
- Required fixes.
- What was not checked.
