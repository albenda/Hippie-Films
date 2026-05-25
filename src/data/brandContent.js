export const defaultLanguage = 'he';

export const languages = {
  he: {
    label: 'עברית',
    shortLabel: 'HE',
    dir: 'rtl',
  },
  en: {
    label: 'English',
    shortLabel: 'EN',
    dir: 'ltr',
  },
};

export const sharedBrand = {
  name: 'Hippie films',
  fullName: 'Hippie Films × Sanpaku',
  phoneDisplay: '058-69-22222',
  phoneHref: 'tel:+972586922222',
  whatsappHref: 'https://wa.me/972586922222',
  email: 'Hippiefilmspro@gmail.com',
};

export const localizedContent = {
  he: {
    hero: {
      eyebrow: 'צילום · עריכה · פוסט · תוכן שמוכר',
      headline: 'וידאו שגורם לעסק להיראות כמו חוויה.',
      intro:
        'Hippie Films היא חברת תוכן וידאו שמחברת צילום חד, עריכה מדויקת ופוסט מעוצב לסרטונים שנראים פרימיום ומרגישים אמיתיים. עסקים, מקומות, אירועים, נדל״ן, מוזיקה ומותגים מקבלים כאן תוצרים שמוכנים לרשת, לקמפיין ולרושם הראשון.',
      primaryCta: 'לראות את העבודה',
      secondaryCta: 'להתחיל פרויקט',
      details: ['צילום, עריכה ופוסט', 'תוכן לרשתות', 'עסקים, אירועים ונדל״ן', 'Sanpaku · Animation'],
    },
    contact: {
      eyebrow: 'מתחילים להפיק',
      title: 'צריכים סרטון שאנשים באמת עוצרים עליו?',
      text:
        'Hippie Films לוקחת מקום, מוצר, שירות או רעיון והופכת אותם לתוכן קצר, חד ומעוצב: סרטון שמחזיק תשומת לב, מספר סיפור מהר ונראה נכון בכל מסך.',
    },
    links: {
      eyebrow: 'עבודות ורשתות',
      title: 'ראו את השפה. בחרו את הערוץ.',
      text:
        'Hippie Films מרכזת את הצילום, העריכה והתוכן לעסקים ולמותגים. Sanpaku מוסיף את השכבה המאוירת, האנימטיבית והאמנותית כשפרויקט צריך יותר דמיון.',
    },
    craft: {
      eyebrow: 'איך בונים סרטון שעובד',
      title: 'לא רק מצלמה ועריכה. פיצוח, צילום, קצב וגימור.',
      text:
        'הערך הוא לא רק ביום צילום. הוא נמצא בהחלטות הקטנות: מה נכנס לפריים, מה נשאר בחוץ, איפה הקאט יושב, ואיך הסרטון גורם לעסק להרגיש ברור יותר, יפה יותר ומוכר יותר.',
      items: [
        {
          title: 'רעיון ושפה',
          text: 'לפני שמצלמים מחליטים מה הקהל צריך להרגיש: תיאבון, אמון, יוקרה, תנועה, אווירה או סקרנות.',
        },
        {
          title: 'צילום עם כיוון',
          text: 'לא אוספים שוטים. מצלמים פרטים, אנשים, חלל, אור ותנועה בצורה שמשרתת את הסיפור ואת המטרה.',
        },
        {
          title: 'פוסט שמסיים עבודה',
          text: 'עריכה, צבע, סאונד, Motion, אנימציה ופורמטים לרשתות עד שהתוצר מרגיש שלם ומוכן לפרסום.',
        },
      ],
    },
    services: {
      eyebrow: 'מה Hippie Films עושה',
      title: 'תוצרים שנבנים בשביל להיראות טוב ולעבוד בפועל',
      text: 'כל פרויקט מקבל את השילוב הנכון בין צילום, עריכה, פוסט, Motion ואומנות דיגיטלית.',
    },
    footer: {
      line: 'From the lens to your soul',
    },
    publicLinks: [
      {
        label: 'אינסטגרם Hippie Films',
        description: 'צילום, עריכה, עסקים, אוכל, אירועים ותוכן לרשתות',
        href: 'https://www.instagram.com/hippiefilms/',
        icon: 'instagram',
        featured: true,
      },
      {
        label: 'Sanpaku Instagram',
        description: 'אנימציה, איור ותנועה לפרויקטים עם צד אמנותי',
        href: 'https://www.instagram.com/wearesanpaku/',
        icon: 'sparkles',
        featured: true,
      },
      {
        label: 'TikTok',
        description: 'סרטונים קצרים, עריכות ורגעים בתנועה',
        href: 'https://www.tiktok.com/@hippiefilmsxsanpaku',
        icon: 'music',
      },
      {
        label: 'פייסבוק Hippie Films',
        description: 'עמוד העסק ועדכונים נוספים',
        href: 'https://www.facebook.com/hippiefilmspro/',
        icon: 'facebook',
      },
      {
        label: 'YouTube',
        description: 'ארכיון וידיאו',
        href: 'https://www.youtube.com/@talbendavid9931',
        icon: 'youtube',
      },
      {
        label: 'Vimeo',
        description: 'תיק עבודות / ארכיון',
        href: 'https://vimeo.com/68800853',
        icon: 'film',
      },
    ],
    contactLinks: [
      {
        label: 'וואטסאפ',
        description: 'שיחה ראשונה על צילום, עריכה או הפקה',
        href: sharedBrand.whatsappHref,
        icon: 'message',
        featured: true,
      },
      {
        label: 'שליחת מייל',
        description: sharedBrand.email,
        href: `mailto:${sharedBrand.email}?subject=Project%20inquiry%20-%20Hippie%20Films`,
        icon: 'mail',
        featured: true,
      },
      {
        label: 'שיחה ישירה',
        description: sharedBrand.phoneDisplay,
        href: sharedBrand.phoneHref,
        icon: 'phone',
      },
    ],
    servicesList: [
      {
        title: 'תוכן לעסקים',
        text: 'סרטונים לעסקים, שירותים ומותגים שרוצים להיראות מקצועיים בלי לאבד את התחושה האמיתית שלהם.',
        icon: 'camera',
      },
      {
        title: 'אירועים ופרויקטים',
        text: 'תיעוד, עריכה וסרטוני סיכום לאירועים, קמפיינים ופרויקטים שצריכים להיראות גדולים ומסודרים.',
        icon: 'film',
      },
      {
        title: 'נדל״ן ומותגים',
        text: 'וידאו שמציג מקום, נכס, שירות או סיפור בצורה נקייה, מכירתית וקלה להבנה.',
        icon: 'palette',
      },
      {
        title: 'Sanpaku ופוסט',
        text: 'After Effects, Premiere, קומפוזיטינג, Motion ואיור כשצריך להכניס עוד דמיון, אופי ושכבה אמנותית.',
        icon: 'sparkles',
      },
    ],
  },
  en: {
    hero: {
      eyebrow: 'Filming · editing · post · content that performs',
      headline: 'Premium video content with a real-world pulse.',
      intro:
        'Hippie Films is a video content company for brands, places and projects that need to look sharp without feeling artificial. We combine location-based filming, precise editing, polished post and a strong visual point of view to create work that is ready for feeds, campaigns and first impressions.',
      primaryCta: 'Watch the work',
      secondaryCta: 'Start a project',
      details: ['Filming, editing & post', 'Social content', 'Business, events & real estate', 'Sanpaku · Animation'],
    },
    contact: {
      eyebrow: 'Start production',
      title: 'Need the kind of video people actually stop for?',
      text:
        'Bring the place, product, service or idea. Hippie Films turns it into sharp visual content with a clear rhythm, clean finish and enough feeling to make it worth watching.',
    },
    links: {
      eyebrow: 'Work & socials',
      title: 'A visual world is easier to understand when you see it move.',
      text:
        'Hippie Films carries the production, editing and business content. Sanpaku adds the illustrated, animated and art-driven side when a project calls for something more imaginative.',
    },
    craft: {
      eyebrow: 'How the work is made',
      title: 'Strategy in the cut. Feeling in the frame.',
      text:
        'A good video is not just captured. It is shaped. The right angle, the right pace, the right texture and the right ending can make a business feel clearer, stronger and more desirable.',
      items: [
        {
          title: 'Creative direction',
          text: 'Before the shoot, the work defines what the viewer should feel: appetite, trust, energy, quality, atmosphere or curiosity.',
        },
        {
          title: 'Purposeful filming',
          text: 'Details, people, space, light and motion are filmed with a reason, so the final piece has direction instead of just footage.',
        },
        {
          title: 'Post to publish',
          text: 'Editing, color, sound, motion, animation and social formats are finished together, so the final assets are ready to use.',
        },
      ],
    },
    services: {
      eyebrow: 'What Hippie Films does',
      title: 'Content built to look good and work hard',
      text: 'Each project gets the right mix of filming, editing, post-production, motion and digital art.',
    },
    footer: {
      line: 'From the lens to your soul',
    },
    publicLinks: [
      {
        label: 'Hippie Films Instagram',
        description: 'Filming, editing, business, food, events and social content',
        href: 'https://www.instagram.com/hippiefilms/',
        icon: 'instagram',
        featured: true,
      },
      {
        label: 'Sanpaku Instagram',
        description: 'Animation, illustration and motion for art-driven projects',
        href: 'https://www.instagram.com/wearesanpaku/',
        icon: 'sparkles',
        featured: true,
      },
      {
        label: 'TikTok',
        description: 'Short videos, edits and moments in motion',
        href: 'https://www.tiktok.com/@hippiefilmsxsanpaku',
        icon: 'music',
      },
      {
        label: 'Facebook',
        description: 'Business page and extra updates',
        href: 'https://www.facebook.com/hippiefilmspro/',
        icon: 'facebook',
      },
      {
        label: 'YouTube',
        description: 'Video archive',
        href: 'https://www.youtube.com/@talbendavid9931',
        icon: 'youtube',
      },
      {
        label: 'Vimeo',
        description: 'Portfolio / archive',
        href: 'https://vimeo.com/68800853',
        icon: 'film',
      },
    ],
    contactLinks: [
      {
        label: 'WhatsApp',
        description: 'Start a conversation about filming, editing or production',
        href: sharedBrand.whatsappHref,
        icon: 'message',
        featured: true,
      },
      {
        label: 'Email',
        description: sharedBrand.email,
        href: `mailto:${sharedBrand.email}?subject=Project%20inquiry%20-%20Hippie%20Films`,
        icon: 'mail',
        featured: true,
      },
      {
        label: 'Direct call',
        description: sharedBrand.phoneDisplay,
        href: sharedBrand.phoneHref,
        icon: 'phone',
      },
    ],
    servicesList: [
      {
        title: 'Business Content',
        text: 'Videos for businesses, services and brands that need to look professional without losing their real character.',
        icon: 'camera',
      },
      {
        title: 'Events & Projects',
        text: 'Coverage, edits and recap films for events, campaigns and public-facing projects that need to feel polished and substantial.',
        icon: 'film',
      },
      {
        title: 'Real Estate & Brands',
        text: 'Video that presents a place, property, service or story in a clean, persuasive and easy-to-understand way.',
        icon: 'palette',
      },
      {
        title: 'Sanpaku & Post',
        text: 'After Effects, Premiere, compositing, motion and illustration when the work needs imagination, character and an art layer.',
        icon: 'sparkles',
      },
    ],
  },
};
