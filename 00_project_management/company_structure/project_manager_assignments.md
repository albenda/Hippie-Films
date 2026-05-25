# Hippie Films × Sanpaku — Manager Assignments

Updated: 2026-05-25 Asia/Jerusalem

## Mode

System + Rebuild/Polish.

The owner asked to use the new Project OS skills, analyze the project, take inspiration from similar digital business card products, and assign managers before continuing implementation.

## DACI

| Role | Assignment |
|---|---|
| Driver | Project Chief of Staff |
| Approver | Owner / Tal Ben David before public launch |
| Contributors | ProductOps, ResearchOps, Design/UX, DesignOps, Engineering, QA/Release, KnowledgeOps, Legal/Trust, SupportOps, Business/Growth |
| Informed | CalendarOps, Analytics, future printer/designer |

## Project Inventory

| Area | Current state | Decision |
|---|---|---|
| Physical business card | Existing black/star/gold card supplied by owner | Keep as visual source of truth |
| QR destination | React landing page in this project | Redesign around existing card language |
| Brand identity | Hippie films gold script, star field, Hebrew service line | Keep and translate into web feel |
| Links/contact | Public social links plus phone/email from card | Keep editable in `src/data/brandContent.js` |
| Services | Videography, editing, digital art, reels/music visuals | Keep but simplify for scanned visitor |
| QR guidance | README and QR placeholder currently exist | Keep in docs, reduce on-page instructional weight |
| Deployment | Not deployed | Blocked until owner approves contact details and live URL |
| QA | Lint/build passed previously; visual QA pending | QA manager owns mobile/browser pass |

## Manager Map

| Manager | Owns | Files / artifacts | Done when |
|---|---|---|---|
| Project Chief of Staff | Mode classification, DACI, scope, manager routing, closeout quality | `AGENTS.md`, this file, `task_board.md` | Every meaningful task has mode, owner, validation, and next step |
| ProductOps | Visitor journey after scan, priority of actions, what stays/removes | `product/PRODUCT_BRIEF_TEMPLATE.txt`, `src/data/brandContent.js` | Primary actions are obvious: WhatsApp, email, Instagram, portfolio/social |
| ResearchOps | Inspiration from digital card products and QR best practices | `research/RESEARCH_LOG.tsv` | Sources are logged and translated into product/design decisions |
| Creative Director | Premium cinematic direction, not cheap Linktree | `design/UI_REFERENCE.md`, card images from owner | Site feels like the existing card became interactive |
| Design/UX Lead | Mobile-first flow, CTA hierarchy, tap targets, section order | `src/App.jsx`, `design/UI_REFERENCE.md` | First screen answers who/what/contact in seconds |
| DesignOps | Tokens, card tiers, reusable button/card patterns | `src/styles.css`, `src/App.jsx`, `design/UI_REFERENCE.md` | Gold/black/star language is consistent and not random |
| Engineering | React implementation, data arrays, accessibility, build health | `src/`, `package.json`, `vite.config.js` | Code is clean, data editable, lint/build pass |
| QA / Release | Mobile QA, link checks, QR print checklist, deploy readiness | `qa/QA_CHECKLIST_TEMPLATE.txt`, `README.md` | Browser/mobile checks recorded; deploy status explicit |
| KnowledgeOps | Decisions, source-of-truth updates, avoiding repeated confusion | `decision_log.tsv`, `interaction_log.tsv`, `current_project_state.json` | Meaningful decisions are not left only in chat |
| Legal / Trust | Public contact info, unrelated brand risk, privacy/tracking | `legal/LEGAL_CHECKLIST_TEMPLATE.txt`, `current_project_state.json` | No guessed data, no unrelated HippieFilms.in, no analytics without approval |
| SupportOps | What a scanner may misunderstand, wording clarity | `support/SUPPORT_KB_TEMPLATE.txt`, page copy | Visitor understands what each button does |
| Business / Growth | Positioning, conversion path, future portfolio/analytics ideas | `business/BUSINESS_IMPACT_TEMPLATE.txt` | Page supports booking/project inquiry, not just passive links |
| CalendarOps | Launch follow-ups and deployment milestones if needed | `task_board.md` | Dates/milestones added only when owner asks |
| Analytics | Optional future tracking plan | future analytics doc | No tracking added without approval |

## Manager Findings From Research

| Manager | Finding | Project decision |
|---|---|---|
| ProductOps | Digital cards work best when the recipient does not need an app and can choose QR, email, text, WhatsApp, social links, or copy link. | Landing page should present direct actions, not a long brochure. |
| ResearchOps | URL/link-in-bio QR is better than vCard when contact details or links may change after printing. | QR should point to this landing page, not directly to Instagram or a static vCard. |
| Design/UX | Business-card QR scans happen on phones, so the destination must be mobile-first and immediately actionable. | First viewport should show identity + WhatsApp/email/social actions quickly. |
| DesignOps | QR itself must stay high contrast with quiet zone; brand can live around it, not inside the QR pattern. | Keep QR black on white for print, even if the card/site are black and gold. |
| Legal/Trust | Contact info is personal/business data; do not invent or enrich it from unrelated sites. | Use only owner-provided card details and supplied links. |

## Gate Rules For Next Implementation Pass

1. Product Gate: confirm page goal is "one QR opens all contact paths and portfolio/social links."
2. UX Gate: mobile order should be hero/contact actions -> social links -> services -> QR/print notes.
3. Visual Gate: match the existing black star field and gold script card.
4. Engineering Gate: keep links in data arrays, avoid hard-coded scattered URLs.
5. QA Gate: run lint/build, local smoke test, and visual mobile check.
6. Release Gate: no deploy and no final QR until owner approves live URL and contact details.

## Current Open Risks

- The app was partially updated toward the new card data before this manager pass; finish the visual restyle in the next implementation step.
- Browser visual QA is still pending.
- Final public URL is unknown, so no real QR should be generated yet.
- English vs Hebrew + English remains open, but the supplied card is Hebrew, so Hebrew-first deserves strong consideration.
