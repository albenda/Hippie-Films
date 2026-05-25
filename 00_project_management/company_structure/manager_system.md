# Manager System

מטרת המערכת:
להפוך בקשות רחבות לעבודה מקצועית מלאה, בלי שהבעלים יצטרך לכתוב מפרט מושלם בכל פעם.

## מנהלים מומלצים

| מנהל | אחריות |
|---|---|
| Chief of Staff | מסווג מצב עבודה, מפעיל מנהלים, מונע תיקונים קטנים כשצריך rebuild. |
| ProductOps | WHY, scope, user journey, סדר עדיפויות, acceptance criteria. |
| Design / UX | חוויה, היררכיה, UI, מובייל, empty states, CTAs. |
| DesignOps | מערכת עיצוב, tokens, consistency, component standards. |
| Engineering | קוד, ארכיטקטורה, בדיקות, שמירת לוגיקה קיימת. |
| QA / Release | בדיקות, release gate, סיכוני פרסום, בדיקות ידניות. |
| ResearchOps | תחקיר משתמשים/שוק/מתחרים/Best practices. |
| SupportOps | שאלות משתמשים, FAQ, מאגר ידע, מקרי קצה. |
| Business / Growth | מודל עסקי, תמחור, funnel, שותפים, תחזיות. |
| Legal / Trust | פרטיות, תנאים, זכויות, בטיחות, סיכוני רגולציה. |
| CalendarOps | יומן, milestones, משימות, capacity, תזמון. |
| KnowledgeOps | החלטות, מקור אמת, סתירות, למידה חוזרת. |

## מצבי עבודה

| Mode | מתי |
|---|---|
| Patch | תיקון נקודתי ומוגדר היטב. |
| Polish | המסך נכון, צריך שיפור רוחבי אבל לא שינוי מבנה. |
| Rebuild | מסך/flow/מערכת צריכים להיבנות מחדש. |
| System | הבעיה חוזרת בגלל תהליך, מקור אמת או מנהלים. |
| Safety | כסף, משפטי, פרטיות, הרשאות, דאטה, פרסום, ספקים. |

## תהליך חובה למשימה משמעותית

1. Classify mode.
2. Run Ownership Scan.
3. Assign DACI: Driver, Approver, Contributors, Informed.
4. Read local source of truth.
5. Research current best practices when relevant.
6. Synthesize one direction.
7. Execute.
8. Validate.
9. Impact Sync.
10. Update memory/task/decision docs.

## Idea To App Pipeline

רעיון לא עובר ישר לקוד.

הסדר המחייב:
1. Intake — Chief of Staff: mode, DACI, scope, hard stops.
2. Product Gate — ProductOps: למה/מה, user story, hierarchy, acceptance criteria.
3. UX Gate — UX: flow, CTAs, states, mobile/accessibility, navigation.
4. Visual / DesignOps Gate — Design: visual direction, brand fit, consistency, before/after.
5. Technical Architecture Gate — Engineering: files, data, risks, reusable patterns.
6. Implementation Gate — רק אחרי Product + UX + Design.
7. Validation Gate — tests/lint/build, QA checklist, Impact Sync.
8. Deploy / Apply Gate.
9. Post-Deploy Review + Knowledge Gate.

כלל:
אם UI/UX משמעותי, Engineering לא מתחיל לפני `Design Gate passed` או `Design risk accepted by owner`.

## Ownership Scan

שאלות:
- מי מושפע ישירות?
- מי מושפע בעקיפין?
- איזה קבצים/מסכים/מסמכים/יומן/לקוחות/עסק/משפט מושפעים?
- האם יש החלטה שצריך לרשום?
- האם יש Hard Stop?

## Handoff Packet

כל מעבר בין מנהלים כולל:
- reason
- priority
- mode
- scope
- must_not_touch
- done_when
- validation
- open questions
