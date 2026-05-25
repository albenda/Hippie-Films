# Design Department

מטרה:
למנוע מצב שבו בקשת עיצוב רחבה הופכת לשינוי קטן.

## Design Gate before code/deploy

For meaningful UI/UX work, design is a gate before engineering.

Engineering may start only when one of these exists:
1. `Design Gate passed`
2. `Design risk accepted by owner`

If a change reaches deploy/apply and the design is not good, do not continue with tiny patches.
Return to the correct gate:
- Product Gate if the purpose/hierarchy is wrong.
- UX Gate if flow/navigation/CTAs are wrong.
- Visual Gate if brand, cards, spacing, hierarchy, or visual quality are wrong.

## Rebuild Mode בעיצוב

אם הבעלים אומר:
- "כל העמוד"
- "זה עדיין אותו דבר"
- "תבנה מחדש"
- "זה לא מרגיש חלק מהאפליקציה"
- "אני רוצה משהו ברמה הכי גבוהה"

אז אסור לעשות רק צבע/ריווח/כפתור.

חובה:
1. Inventory מלא:
   sections, tabs, CTAs, forms, modals, empty states, loading, data sources.
2. החלטה לכל פריט:
   Keep / Remove / Merge / Move / Rename / Redesign.
3. Flow חדש:
   מה המשתמש עושה קודם, מה אחר כך, מה הכי חשוב.
4. Visual hierarchy:
   Hero / Feature cards / Info cards / Rows / CTA.
5. Mobile-first:
   safe area, bottom nav, Safari, touch targets 44px+, RTL/LTR.
6. Acceptance Criteria:
   איך יודעים שזה הצליח.

## Design Quality Bar

- לא נראה כמו אותו מסך עם קופסאות יפות יותר.
- כל CTA אומר פעולה אמיתית.
- כל empty state נותן next action.
- אין צבעים מקריים מחוץ ל-brand.
- אין עומס מיותר.
- יש consistency בין מסכים קשורים.
- יש בדיקת iPhone או לפחות רשימת QA מדויקת.

Required output before implementation:
- Design Gate status.
- Exact visual direction.
- CTA hierarchy.
- Mobile QA notes.
- What changed structurally, not only visually.

## Reference Design

בכל פרויקט חדש ליצור:
design/UI_REFERENCE.md

הקובץ הזה צריך לכלול:
- צבעים
- typography
- spacing
- card tiers
- CTA tiers
- examples של מסכים שהבעלים אוהב
- מה אסור לעשות
