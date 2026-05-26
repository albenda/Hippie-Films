# Hippie Films × Sanpaku — Master Task Board

Updated: 2026-05-26 Asia/Jerusalem

## P0 — Critical / Launch Blocking

| # | Task | Status | Owner/Department | Notes |
|---|------|--------|------------------|-------|
| P0-1 | Confirm phone/email from card and add website if needed | In progress | Owner / Contact | Current card data: 058-69-22222, Hippiefilmspro@gmail.com. Do not guess more data. |
| P0-2 | Run final lint/build/browser QA | Partially done | Engineering / QA | `npm run lint`, `npm run build`, local HTTP smoke test, live asset checks, QR decode, and mobile Chrome headless visual QA passed. |
| P0-3 | Deploy before generating final QR | Done | Owner / Release | GitHub Pages is live at `https://albenda.github.io/Hippie-Films/`; permanent print QR files were generated and decoded successfully. |
| P0-4 | Finish card-matched visual restyle | In progress | Design / UX + Engineering | Current pass: stronger small star glints, brighter circular flashes, and a smaller off-center moon reflection in the camera lens. |
| P0-5 | Keep Hippie Films separated from Dogo | Done | KnowledgeOps / Engineering | Work must stay in the Hippie Films folder and `albenda/Hippie-Films`; Dogo is a separate project. |

## P1 — Important / Near Term

| # | Task | Status | Owner/Department | Notes |
|---|------|--------|------------------|-------|
| P1-1 | Decide English only vs Hebrew + English | Open | Product / Content | Current page is English. |
| P1-2 | Add final logo or profile image if available | Open | Design | Generated hero image is text-free and safe for now. |
| P1-3 | Review physical card copy before print | Open | Product / Design | Keep QR black on white with quiet zone. |

## P2 — Later / Strategic

| # | Task | Status | Owner/Department | Notes |
|---|------|--------|------------------|-------|
| P2-1 | Add selected portfolio projects or embedded reels | Backlog | Product / Engineering | Keep page light and premium. |
| P2-2 | Add analytics after privacy decision | Backlog | Analytics / Legal | Needs explicit approval if tracking is added. |

## Done Recently

| Date | What was done | Files/artifacts |
|------|---------------|-----------------|
| 2026-05-25 | Built initial React/Tailwind landing page and README | `src/`, `public/`, `README.md` |
| 2026-05-25 | Installed Project OS into the project | `AGENTS.md`, `.agents/skills/`, `.claude/agents/`, `00_project_management/` |
| 2026-05-25 | Installed Project OS skills globally for Codex | `/Users/alonbendavid/.codex/skills/project-*` |
| 2026-05-25 | Assigned managers across all project layers | `00_project_management/company_structure/project_manager_assignments.md`, `design/UI_REFERENCE.md`, `research/RESEARCH_LOG.tsv` |
| 2026-05-25 | Locked project boundary so Hippie Films and Dogo stay separate | `AGENTS.md`, `current_project_state.json`, `task_board.md`, `decision_log.tsv`, `interaction_log.tsv` |
| 2026-05-25 | Deployed GitHub Pages and generated permanent print QR | `exports/qr/Hippie-Films-PERMANENT-PRINT-QR.png`, `exports/qr/Hippie-Films-PERMANENT-PRINT-QR.svg` |
| 2026-05-25 | Added collaborator editing guide for Tal | `EDITING_GUIDE_FOR_TAL.md`, `README.md` |
| 2026-05-26 | Tuned cinematic starfield to use smaller doubled glints, round twinkles and a subtle moon reflection in the camera lens | `src/App.jsx`, `src/styles.css` |
| 2026-05-26 | Increased star sparkle strength with slightly larger glints and short flash bursts | `src/App.jsx`, `src/styles.css` |
| 2026-05-26 | Made the moon reflection inside the camera lens clearer while keeping it glass-like | `src/App.jsx`, `src/styles.css` |
| 2026-05-26 | Reduced the moon reflection and shifted it toward the upper-right of the camera lens | `src/App.jsx`, `src/styles.css` |

## Open Decisions

| # | Question | Context | Owner | Needed by |
|---|----------|---------|-------|-----------|
| D-1 | English only or Hebrew + English? | Owner listed this as missing info. | Owner | Before public launch |
| D-2 | What is the final public URL? | Resolved: `https://albenda.github.io/Hippie-Films/`. | Owner / Release | Done |
| D-3 | Which final contact details are approved? | Current app uses phone/email from supplied card; website remains unknown. | Owner | Before launch |
| D-4 | Should the page be Hebrew-first? | Existing card is Hebrew; current app started English. | Owner / Content | Before final copy |

## Ideas / Backlog

- Use the landing page URL for business cards, stickers, posters and story links.
- Add a curated "latest work" section after final portfolio assets are selected.

## Update Protocol

After every meaningful task:
1. Update this board.
2. Update `interaction_log.tsv`.
3. Update `quick_update_protocol.txt`.
4. Update `current_project_state.json` if significant.
5. Update `decision_log.tsv` when a meaningful decision was made.
