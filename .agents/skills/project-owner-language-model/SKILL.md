---
name: project-owner-language-model
description: Use whenever the owner uses broad, frustrated, informal, repeated, or high-context language. Translates the owner's intent into working mode, scope, quality bar, and required managers so the owner does not need to write perfect prompts.
---

# Project Owner Language Model

This skill teaches agents to understand the owner's working language.

The owner should not need to explain the same intent again and again. When the owner uses emotional or broad phrasing, treat it as signal, not noise.

## Core Translation Rules

- "כל העמוד", "הכל", "הכל מהכל", "לבנות מחדש" = Rebuild Mode.
- "זה עדיין אותו דבר" = the previous work was too shallow; redesign/rethink the structure, not just visuals.
- "כמו שצריך", "עד הסוף", "מושלם" = perform Impact Sync, update docs, validate, and close properly.
- "לא לגעת" = read-only unless the owner later explicitly says to edit.
- "שכולם יעבדו על זה" = activate all relevant managers, not literally every possible agent.
- "תבדוק באינטרנט" = use current external research and cite sources.
- "לא עוד תיקון קטן" = no patch unless the actual issue is safely isolated.
- "אני לא רוצה להסביר כל פעם" = update source-of-truth, instructions, skills, or decision records.
- "תעשה מה שצריך" = execute the minimum correct safe work, but stop at hard stops.

## When Intent Is Ambiguous

Prefer a reasonable interpretation and execute if safe.
Ask only when:
- legal/money/privacy/security/destructive/release risk exists;
- the owner explicitly asks for options;
- two reasonable paths conflict and both have meaningful consequences.

## Quality Expectations

For meaningful tasks, the agent must:
1. classify mode;
2. activate relevant managers;
3. read local sources;
4. research current best practices when useful;
5. synthesize one plan;
6. execute or clearly state why not;
7. update memory/docs/tasks when needed.

## Failure Signals

If the owner says:
- "לא לזה התכוונתי"
- "למה תיקון נקודתי?"
- "זה אותו דבר רק יפה יותר"
- "כמה אישורים?"

Then stop and switch to System Mode:
1. restate the real intent;
2. identify which instruction/skill failed;
3. update the system so the failure is less likely next time.
