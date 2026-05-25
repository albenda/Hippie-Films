PROJECT OS — First Run

שים את התוכן של NEW_PROJECT_ROOT בשורש הפרויקט החדש.

בדיקת התקנה:
1. ודא שקיים AGENTS.md בשורש.
2. ודא שקיים:
   .agents/skills/project-manager-os/SKILL.md
3. ודא שקיים:
   .claude/agents/project-chief-of-staff.md
4. ודא שקיים:
   00_project_management/task_board.md

פקודת בדיקה במסוף:
find .agents/skills -name SKILL.md | sort
find .claude/agents -name "*.md" | sort

משפט פתיחה מומלץ בפרויקט החדש:
"תסרוק את הפרויקט הזה מהתחלה. תבנה מצב פרויקט נוכחי, תזהה מחלקות רלוונטיות, תתאים את AGENTS.md והמנהלים לתחום, ותיצור לי תוכנית עבודה ראשונה."

לאחר הסריקה הראשונה:
- עדכן current_project_state.json.
- מלא את task_board.md.
- התאם את company_structure/skill_matrix.tsv.
- כתוב 3-7 החלטות ראשונות ב-decision_log.tsv אם יש.
- ודא ש-company_structure/idea_to_app_pipeline.txt מתאים לסוג הפרויקט ולכלי הפרסום שלו.

כלל:
אל תשאיר ידע רק בשיחה. אם זה חשוב לפרויקט הבא, זה נכנס לקובץ.
