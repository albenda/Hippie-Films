PROJECT BRAIN PACK v1
תאריך: 2026-05-25
סטטוס: חבילת מוח/כישורים גנרית לפרויקט חדש

מה זה
הקובץ הקודם היה מערכת מנהלים. החבילה הזו היא המוח: איך הסוכנים חושבים, מנתחים, מחליטים, חוקרים, בונים מחדש, שומרים החלטות, וסוגרים עבודה.

מה להעתיק לפרויקט חדש
1. את כל תיקיית:
   skills_to_copy/.agents/skills/

2. לשים אותה בפרויקט החדש תחת:
   .agents/skills/

3. להשאיר את שמות ה-skills כפי שהם:
   project-manager-os
   project-deep-research-sync
   project-rebuild-mode
   project-designops-gate
   project-decision-knowledge-ops
   project-release-safety-gate
   project-agent-safety-gate
   project-supportops-system
   project-calendar-ops
   project-owner-language-model

למה לא להעתיק dogo-*
כי dogo-* מכיל הקשרים ספציפיים לאפליקציית Dogo.
ה-project-* הם הגרסה הנקייה, כללית, שמתאימה לכל פרויקט.

גבול חשוב בפרויקט הזה
Hippie Films הוא פרויקט נפרד מ-Dogo. העובדה שתבנית המנהלים הגיעה מתיקיית תבניות שהייתה תחת Dogo לא הופכת את Dogo לחלק מהפרויקט.
במשימות של Hippie Films עובדים רק בתוך:
/Users/alonbendavid/Library/Mobile Documents/com~apple~CloudDocs/Hippie Films
ובריפו:
https://github.com/albenda/Hippie-Films.git
אין לקרוא, לערוך, להעביר, לפרוס או לארגן קבצי Dogo בזמן עבודה על Hippie Films, אלא אם הבעלים פותח משימה מפורשת על Dogo.

איזה skill עושה מה

project-owner-language-model
מלמד את הסוכנים להבין את השפה של הבעלים. למשל: "כל העמוד" = Rebuild, "זה עדיין אותו דבר" = העבודה נכשלה, "תעשה כמו שצריך" = Impact Sync מלא.

project-manager-os
מערכת ההפעלה. מסווגת Patch/Polish/Rebuild/System/Safety, מפעילה מנהלים, מחלקת DACI, וסוגרת עבודה.

project-deep-research-sync
מחייב תחקיר אמיתי: כל מנהל קורא מקור אמת, מחפש באינטרנט, מביא ממצא/רעיון/סיכון, ואז מסנתזים כיוון אחד.

project-rebuild-mode
כאשר מבקשים "לבנות מחדש" או "כל העמוד": מחייב inventory, hierarchy, CTAs, states, navigation, before/after, ולא תיקון קטן.

project-designops-gate
בודק שעיצוב באמת ברמה גבוהה: brand, hierarchy, empty states, touch targets, mobile, accessibility.

project-decision-knowledge-ops
שומר החלטות, מקור אמת, סתירות, review dates, ולמידה מטעויות חוזרות.

project-release-safety-gate
שער סגירה לפני apply/deploy/publish: בדיקות, Impact Sync, hard stops, QA.

project-agent-safety-gate
בודק סיכונים של סוכנים, כלים, MCP, אינטרנט, מיילים, אוטונומיה והרשאות.

project-supportops-system
מוודא שכל שינוי שמבלבל משתמש מקבל FAQ, מאקרו, escalation או עדכון תמיכה.

project-calendar-ops
מנהל זמן, roadmap, calendar, milestones, non-working days ו-dry-run לפני bulk changes.

איך להשתמש נכון
בפרויקט קטן:
העתק לפחות:
- project-manager-os
- project-deep-research-sync
- project-owner-language-model
- project-decision-knowledge-ops
- project-release-safety-gate

בפרויקט עם UI:
הוסף:
- project-rebuild-mode
- project-designops-gate

בפרויקט עם לקוחות/תמיכה:
הוסף:
- project-supportops-system

בפרויקט עם תאריכים/השקה:
הוסף:
- project-calendar-ops

בפרויקט עם סוכנים/כלים חזקים:
הוסף:
- project-agent-safety-gate

מה זה נותן בפועל
הסוכן אמור להבין לבד:
- האם זו משימה קטנה או גדולה;
- מי צריך להיכנס;
- מתי צריך מחקר אינטרנט;
- מתי צריך rebuild ולא patch;
- מתי צריך לעצור בגלל hard stop;
- איפה צריך לעדכן מסמכים;
- איך לסגור עבודה בלי להשאיר חורים.

משפט פתיחה מומלץ בפרויקט חדש
"קרא את AGENTS.md ואת skills_to_copy שהועתקו. תעבוד לפי project-manager-os, project-deep-research-sync ו-project-owner-language-model. כשאני אומר כל/מחדש/כמו שצריך, אל תעשה patch קטן — תסווג נכון ותפעיל את המנהלים הרלוונטיים."
