---
name: project-calendar-ops
description: Use when work affects deadlines, roadmap, launch dates, Google Calendar, task scheduling, capacity, follow-up, reminders, or moving milestones. Produces dry-run plans before bulk calendar changes.
---

# Project CalendarOps

Use this for time, roadmap, and calendar discipline.

## Check

1. Does the task need an owner/date/done_when?
2. Does it affect roadmap or launch milestones?
3. Does it require calendar events?
4. Does it conflict with non-working days?
5. Is there stale calendar/task data to clean?
6. Is this a bulk calendar change?

## Rules

- Do not perform bulk calendar writes without dry-run and approval.
- Avoid non-working days by default.
- Do not move major milestones without source, reason, and approval.
- Every scheduled item needs owner, department, source, status, and done_when.

## Dry-Run Table

For calendar sync, produce:
action | title | date/time | calendar | owner | source | reason | risk

Actions:
- create
- update
- delete
- no-op

## Output

- schedule impact;
- dry-run table if needed;
- conflicts;
- owner/date/done_when updates.
