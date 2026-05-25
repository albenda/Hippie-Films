---
name: project-decision-knowledge-ops
description: Use for meaningful decisions, contradictions, source-of-truth questions, repeated confusion, project memory updates, or cross-functional changes that need durable context. Forces decision record, source map, owner, review date, and learning loop.
---

# Project Decision & Knowledge Ops

This skill prevents the project from losing its memory.

## Use When

- a meaningful decision is made;
- a contradiction is found;
- a source of truth changes;
- the owner says the system misunderstood;
- a repeated issue needs a process fix;
- future agents will need to know "why".

## Decision Record Fields

timestamp
decision_id
status
decision
why_now
driver
approver
contributors
source_of_truth
impacted_layers
docs_updated
review_date
links

## Source of Truth

Customize per project. Default:
1. local code/artifact now;
2. active app/source state;
3. live production after release;
4. project memory;
5. business/legal/pricing docs;
6. external customer/supplier sources;
7. newest explicit owner instruction.

## Contradiction Protocol

Write:
"Found a contradiction between X and Y"

Then:
1. recommend the stronger source;
2. stop for approval if money/legal/privacy/security/data/release is affected;
3. update decision log and affected docs after resolution.

## Output

- decision_id or not-recorded reason;
- source of truth used;
- contradiction, if any;
- owner/approver/review date;
- docs updated;
- open risks.
