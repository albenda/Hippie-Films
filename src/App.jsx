import {
  ArrowUpRight,
  AudioLines,
  Camera,
  ExternalLink,
  Facebook,
  Film,
  Instagram,
  Mail,
  MessageCircle,
  Music2,
  Palette,
  Phone,
  Sparkles,
  Youtube,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { brand, cardDetails, contactLinks, publicLinks, services } from './data/brandContent';

const assetPath = (path) => `${import.meta.env.BASE_URL}${path}`;

const iconMap = {
  instagram: Instagram,
  sparkles: Sparkles,
  music: Music2,
  facebook: Facebook,
  youtube: Youtube,
  film: Film,
  message: MessageCircle,
  mail: Mail,
  phone: Phone,
  camera: Camera,
  palette: Palette,
  audio: AudioLines,
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function StarField() {
  return (
    <>
      <div className="absolute inset-0 star-field" />
      <div className="absolute inset-0 film-grain opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_8%,rgba(240,198,106,0.18),transparent_22rem),radial-gradient(circle_at_18%_72%,rgba(214,155,61,0.16),transparent_19rem),linear-gradient(180deg,rgba(3,3,2,0.18),#050402_86%)]" />
    </>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto max-w-2xl text-center"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="mb-3 text-sm font-medium text-gold-200">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-cream md:text-4xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-stone-300">{text}</p> : null}
    </motion.div>
  );
}

function LinkButton({ item, compact = false }) {
  const Icon = iconMap[item.icon] ?? ExternalLink;

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
      className={[
        'group relative flex min-h-16 items-center gap-4 rounded-xl border px-4 py-4 text-right transition duration-300',
        'focus:outline-none focus:ring-2 focus:ring-[#f6d98a] focus:ring-offset-2 focus:ring-offset-black',
        item.featured
          ? 'border-[#f0c66a]/45 bg-[#f0c66a]/12 shadow-[0_18px_70px_rgba(240,198,106,0.16)]'
          : 'border-[#f0c66a]/18 bg-black/35',
        compact ? 'min-h-14' : '',
      ].join(' ')}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-black/75 text-[#f0c66a] ring-1 ring-[#f0c66a]/22">
        <Icon size={21} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-cream">{item.label}</span>
        <span className="mt-1 block text-sm leading-5 text-[#d6c49a]">{item.description}</span>
      </span>
      <ArrowUpRight className="shrink-0 text-[#d6c49a] transition group-hover:text-[#f0c66a]" size={20} />
    </motion.a>
  );
}

function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden">
      <StarField />

      <motion.img
        src={assetPath('realistic-moon.png')}
        alt=""
        aria-hidden="true"
        className="moon-orbit pointer-events-none absolute left-1/2 top-[-8rem] z-0 w-[38rem] max-w-none -translate-x-1/2 opacity-80 md:left-[64%] md:top-[-10rem] md:w-[48rem]"
        animate={{ y: [0, 18, -6, 0], x: [0, -12, 10, 0], scale: [1, 1.025, 0.995, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#050402] via-[#050402]/88 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-8 pt-20 md:px-8 md:pb-14">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-6 text-sm tracking-[0.26em] text-[#f0c66a] md:text-base">{brand.eyebrow}</p>
          <h1 className="gold-signature text-6xl leading-none text-[#f5d981] md:text-8xl">{brand.name}</h1>
          <p className="mx-auto mt-5 max-w-xl text-2xl font-semibold leading-tight text-cream md:text-4xl">
            {brand.headline}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-200 md:text-lg">{brand.intro}</p>

          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <motion.a
              href={brand.whatsappHref}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#f0c66a] px-5 py-4 text-base font-semibold text-black shadow-[0_18px_60px_rgba(240,198,106,0.26)] transition hover:bg-[#ffe29a] focus:outline-none focus:ring-2 focus:ring-[#fff2ba] focus:ring-offset-2 focus:ring-offset-black"
              whileTap={{ scale: 0.985 }}
            >
              <MessageCircle size={20} aria-hidden="true" />
              וואטסאפ
            </motion.a>
            <motion.a
              href={`mailto:${brand.email}?subject=Project%20inquiry%20-%20Hippie%20Films`}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#f0c66a]/40 bg-black/45 px-5 py-4 text-base font-semibold text-cream backdrop-blur transition hover:border-[#f0c66a] hover:text-[#f5d981] focus:outline-none focus:ring-2 focus:ring-[#f6d98a] focus:ring-offset-2 focus:ring-offset-black"
              whileTap={{ scale: 0.985 }}
            >
              <Mail size={20} aria-hidden="true" />
              שליחת מייל
            </motion.a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {cardDetails.map((detail) => (
              <span key={detail} className="rounded-full border border-[#f0c66a]/20 bg-black/35 px-3 py-2 text-xs text-[#d6c49a]">
                {detail}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </header>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative px-5 py-12 md:px-8 md:py-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(240,198,106,0.10),transparent_24rem)]" />
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-right"
        >
          <p className="mb-3 text-sm font-medium text-[#f0c66a]">יצירת קשר</p>
          <h2 className="text-3xl font-semibold text-cream md:text-4xl">מהסריקה לפנייה, בלי לחפש.</h2>
          <p className="mt-4 text-base leading-8 text-stone-300">
            כל הדרכים לדבר עם Hippie Films במקום אחד: וואטסאפ, שיחה, מייל והרשתות הפעילות.
          </p>
        </motion.div>

        <div className="grid gap-4">
          {contactLinks.map((link) => (
            <LinkButton key={link.label} item={link} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LinksSection() {
  const featuredLinks = publicLinks.filter((link) => link.featured);
  const secondaryLinks = publicLinks.filter((link) => !link.featured);

  return (
    <section id="links" className="relative px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="עבודות ורשתות"
          title="וידיאו, ים, ירח, תנועה וזיכרונות"
          text="האינסטגרם מוביל את החוויה כרגע; שאר הערוצים נשארים זמינים למי שרוצה לראות עוד שכבות של העבודה."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredLinks.map((link) => (
            <LinkButton key={link.href} item={link} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryLinks.map((link) => (
            <LinkButton key={link.href} item={link} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="relative overflow-hidden border-y border-[#f0c66a]/10 bg-[#080704]/88 px-5 py-16 md:px-8 md:py-24">
      <StarField />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="מה הוא עושה"
          title="סיפורים ויזואליים בלי הרבה מילים"
          text="צילום, עריכה, אומנות דיגיטלית ותנועה שמתחברות למוזיקה, ים, אנשים ורגעים אמיתיים."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <motion.article
                key={service.title}
                className="rounded-xl border border-[#f0c66a]/18 bg-black/45 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
              >
                <span className="mb-5 flex size-11 items-center justify-center rounded-xl bg-[#f0c66a]/12 text-[#f0c66a] ring-1 ring-[#f0c66a]/20">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <h3 className="text-xl font-semibold text-cream">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#f0c66a]/12 px-5 py-10 text-center md:px-8">
      <StarField />
      <div className="relative">
        <p className="gold-signature text-4xl text-[#f5d981]">{brand.name}</p>
        <p className="mt-3 text-sm text-stone-400">{brand.subtitle} · {brand.phoneDisplay}</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#050402] text-stone-100">
      <Hero />
      <ContactSection />
      <LinksSection />
      <ServicesSection />
      <Footer />
    </main>
  );
}
