# Hippie Films × Sanpaku — Agent Guidelines

## Project Overview

Hippie Films × Sanpaku is a creative visual brand QR landing page and mini portfolio project.

Primary owner: Tal Ben David  
Primary language: English now; Hebrew + English later if needed  
Timezone: Asia/Jerusalem  
Active source/app/repo: /Users/alonbendavid/Library/Mobile Documents/com~apple~CloudDocs/Hippie Films

## Start Here

Before meaningful work, read:

1. `00_project_management/task_board.md`
2. `00_project_management/current_project_state.json`
3. `00_project_management/owner_language_model.md`
4. `00_project_management/interaction_log.tsv` from last row backwards
5. `00_project_management/company_structure/manager_system.md`
6. `00_project_management/company_structure/skill_matrix.tsv`
7. Relevant department docs

For design work, also read:

1. `00_project_management/company_structure/design_department.md`
2. `design/UI_QUALITY_REFERENCE_TEMPLATE.txt`

## Owner Language Rule

The owner does not need to write a perfect prompt.

If the owner says:
- "everything"
- "all of it"
- "rebuild"
- "do it properly"
- "this is still the same"
- "not a tiny fix"
- "use all agents"
- "research it"

Then classify as Rebuild or System Mode unless the request is clearly a tiny patch.

## Operating Modes

- Patch: small exact fix.
- Polish: coherent quality pass without deep structure changes.
- Rebuild: full surface/flow/system rebuild.
- System: fix process/source-of-truth when a problem repeats.
- Safety: money/legal/privacy/security/publish/destructive actions.

## Mandatory Manager OS

For meaningful work:

1. Classify mode.
2. Run Ownership Scan.
3. Assign DACI.
4. Activate relevant managers.
5. Each relevant manager reads local source of truth.
6. Each relevant manager researches current best practices unless read-only/trivial/offline.
7. Synthesize into one plan.
8. Execute safely.
9. Run Impact Sync.
10. Update memory/task/decision docs.

## Idea To App Pipeline

For every meaningful feature, redesign, flow change, UI/UX change, or release-impacting task, follow:
`00_project_management/company_structure/idea_to_app_pipeline.txt`.

Mandatory order:
1. Intake: Chief of Staff classifies mode, DACI, hard stops, and scope.
2. Product Gate: ProductOps defines why/what, user story, hierarchy, and acceptance criteria.
3. UX Gate: UX Lead defines flow, CTAs, states, mobile/accessibility, and navigation.
4. Visual / DesignOps Gate: Design approves visual direction, brand fit, and consistency.
5. Technical Architecture Gate: Engineering validates feasibility, data boundaries, components, and risks.
6. Implementation Gate: code changes only after Product + UX + Visual gates pass.
7. Validation Gate: tests/lint/build, QA checklist, Impact Sync, and manual notes.
8. Deploy / Apply Gate.
9. Post-Deploy Review + Knowledge Gate.

Hard rule: significant UI must not be implemented or deployed before Design Gate passes, unless the owner explicitly accepts the design risk.

## Universal Ownership Scan

Ask:
- What is directly affected?
- What is indirectly affected?
- Which managers must contribute?
- Which docs/tasks/calendar/support/legal/business/QA layers need updates?
- Does this require a Decision Record?

## Source Of Truth Order

Customize this list:

1. Local code/artifact now
2. Active app/source state
3. Live production after release
4. Project memory files
5. Business/legal/pricing docs
6. External supplier/customer sources
7. New explicit owner instruction

If a contradiction is found, write:
"Found a contradiction between X and Y"

Then recommend the correct source. Stop for approval if money/legal/privacy/data/security/release is affected.

## Hard Stops

Customize these:

- No publish/release without explicit approval.
- No billing/pricing/invoices without explicit approval.
- No legal changes without explicit approval.
- No permissions/security/destructive data changes without explicit approval.
- No supplier/customer messages without explicit approval.
- No bulk calendar changes without dry-run and approval.
- No hiding/removing UI the owner explicitly likes without approval.

## Design Work

If design scope is broad:

1. Inventory every section/tab/CTA/modal/state/data source.
2. Decide Keep / Remove / Merge / Move / Rename / Redesign.
3. Produce a new hierarchy and flow.
4. Use the project design reference.
5. Validate mobile and safe areas.
6. If it still looks like the old screen with nicer boxes, the work failed.

## Validation

For code projects, define commands:

```bash
# No dedicated test suite is configured yet.
npm run lint
npm run build
```

If not applicable, write "not applicable" in the closeout.

## Impact Sync

Before closing meaningful work:

- Product/artifact:
- Data/storage:
- Docs/memory:
- Calendar/roadmap:
- Legal/privacy:
- Billing/pricing:
- Business/strategy:
- Support/FAQ:
- Suppliers/partners:
- Knowledge/decision records:
- QA/release:

## Task Close Format

Use:

Task Close Summary
- Agent/model:
- Changed files/artifacts:
- Validation:
- Deploy/release status:
- Impact Sync:
- Manual QA:
- Decision Record:
- Open items:
