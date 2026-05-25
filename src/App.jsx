import { useEffect, useState } from 'react';
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
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { defaultLanguage, languages, localizedContent, sharedBrand } from './data/brandContent';

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

function StarField({ farStyle, nearStyle, streamStyle, coreStreamStyle, twinkleStyle, streamActive }) {
  return (
    <>
      <motion.div className="absolute inset-0 star-field" style={farStyle} />
      <motion.div className="absolute inset-0 star-field-near" style={nearStyle} />
      <motion.div className={`absolute inset-0 star-stream ${streamActive ? 'stream-active' : 'stream-idle'}`} style={streamStyle} />
      <motion.div className={`absolute inset-0 star-stream-core ${streamActive ? 'stream-active' : 'stream-idle'}`} style={coreStreamStyle} />
      <motion.div className="absolute inset-0 twinkle-field" style={twinkleStyle} />
      <div className="absolute inset-0 film-grain opacity-55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_8%,rgba(240,198,106,0.18),transparent_22rem),radial-gradient(circle_at_18%_72%,rgba(214,155,61,0.16),transparent_19rem),linear-gradient(180deg,rgba(3,3,2,0.18),#050402_88%)]" />
    </>
  );
}

function SectionHeader({ eyebrow, title, text, language }) {
  const align = language === 'he' ? 'text-center' : 'text-center';

  return (
    <motion.div
      className={`mx-auto max-w-2xl ${align}`}
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

function LanguageToggle({ language, onLanguageChange }) {
  return (
    <div className="fixed right-4 top-4 z-50 rounded-full border border-[#f0c66a]/25 bg-black/55 p-1 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-md md:right-6 md:top-6">
      <div className="flex gap-1" dir="ltr" role="group" aria-label="Language selector">
        {Object.entries(languages).map(([key, value]) => {
          const active = key === language;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onLanguageChange(key)}
              className={[
                'min-h-10 min-w-12 rounded-full px-3 text-xs font-semibold tracking-[0.08em] transition',
                'focus:outline-none focus:ring-2 focus:ring-[#f6d98a] focus:ring-offset-2 focus:ring-offset-black',
                active ? 'bg-[#f0c66a] text-black' : 'text-[#d6c49a] hover:bg-white/8 hover:text-[#f5d981]',
              ].join(' ')}
              aria-pressed={active}
            >
              {value.shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LinkButton({ item, language, compact = false }) {
  const Icon = iconMap[item.icon] ?? ExternalLink;
  const align = language === 'he' ? 'text-right' : 'text-left';

  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith('http') ? '_blank' : undefined}
      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
      className={[
        'group relative flex min-h-16 items-center gap-4 rounded-xl border px-4 py-4 transition duration-300',
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
      <span className={`min-w-0 flex-1 ${align}`}>
        <span className="link-title block text-base font-semibold text-cream">{item.label}</span>
        <span className="link-description mt-1 block text-sm leading-5 text-[#d6c49a]">{item.description}</span>
      </span>
      <ArrowUpRight className="shrink-0 text-[#d6c49a] transition group-hover:text-[#f0c66a]" size={20} />
    </motion.a>
  );
}

function CinematicBackdrop() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const [streamActive, setStreamActive] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      setStreamActive(value > 0.008);
    });

    return unsubscribe;
  }, [scrollYProgress]);

  const sceneProgress = useSpring(scrollYProgress, {
    stiffness: 72,
    damping: 31,
    mass: 0.36,
  });

  const moonY = useTransform(sceneProgress, [0, 0.42, 1], [0, -190, -460]);
  const moonX = useTransform(sceneProgress, [0, 1], [0, -104]);
  const moonScale = useTransform(sceneProgress, [0, 0.52, 1], [1.08, 0.78, 0.42]);
  const moonOpacity = useTransform(sceneProgress, [0, 0.62, 1], [0.96, 0.78, 0.3]);

  const farStarsY = useTransform(sceneProgress, [0, 1], [0, 190]);
  const farStarsScale = useTransform(sceneProgress, [0, 1], [1, 1.16]);
  const nearStarsY = useTransform(sceneProgress, [0, 1], [0, 710]);
  const nearStarsScale = useTransform(sceneProgress, [0, 0.68, 1], [1, 0.7, 0.28]);
  const nearStarsOpacity = useTransform(sceneProgress, [0, 0.58, 1], [0.62, 0.9, 0.12]);
  const streamY = useTransform(sceneProgress, [0, 1], [0, 930]);
  const streamScale = useTransform(sceneProgress, [0, 0.72, 1], [1, 0.8, 0.56]);
  const streamOpacity = useTransform(sceneProgress, [0, 0.22, 0.7, 1], [0.44, 0.76, 0.9, 0.72]);
  const coreStreamY = useTransform(sceneProgress, [0, 1], [0, 980]);
  const coreStreamScale = useTransform(sceneProgress, [0, 0.72, 1], [1, 0.78, 0.6]);
  const coreStreamOpacity = useTransform(sceneProgress, [0, 0.18, 0.62, 1], [0.36, 0.68, 0.92, 0.84]);
  const twinkleOpacity = useTransform(sceneProgress, [0, 0.45, 1], [0.5, 0.92, 0.16]);

  const lensOpacity = useTransform(sceneProgress, [0.04, 0.42, 0.9, 1], [0, 0.38, 0.86, 0.94]);
  const lensY = useTransform(sceneProgress, [0.1, 1], [280, -18]);
  const lensScale = useTransform(sceneProgress, [0.1, 0.72, 1], [0.52, 0.92, 1.12]);
  const lensRotate = useTransform(sceneProgress, [0, 1], [0, 112]);
  const frameOpacity = useTransform(sceneProgress, [0, 0.42, 1], [0.16, 0.32, 0.58]);

  return (
    <div className="site-cinema-bg cinematic-scene fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <StarField
        farStyle={{ y: farStarsY, scale: farStarsScale }}
        nearStyle={{ y: nearStarsY, scale: nearStarsScale, opacity: nearStarsOpacity }}
        streamStyle={{ y: streamY, scale: streamScale, opacity: streamOpacity }}
        coreStreamStyle={{ y: coreStreamY, scale: coreStreamScale, opacity: coreStreamOpacity }}
        twinkleStyle={{ opacity: twinkleOpacity }}
        streamActive={streamActive}
      />

      <motion.div className="film-gate pointer-events-none absolute inset-3 z-[1] md:inset-6" style={{ opacity: frameOpacity }} />

      <motion.div
        className="moon-shell pointer-events-none absolute left-1/2 top-[-7rem] z-[2] w-[41rem] max-w-none -translate-x-1/2 opacity-90 md:left-[64%] md:top-[-13rem] md:w-[55rem]"
        style={{ x: moonX, y: moonY, scale: moonScale, opacity: moonOpacity }}
      >
        <div className="moon-atmosphere" />
        <motion.img
          src={assetPath('realistic-moon.png')}
          alt=""
          className="moon-orbit w-full"
          animate={prefersReducedMotion ? undefined : { x: [0, -8, 7, 0], rotate: [0, 0.42, -0.28, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      <div className="cinema-depth-fade absolute inset-x-0 bottom-0 z-[3] h-[74%]" />
      <motion.div
        className="lens-pull pointer-events-none absolute inset-x-0 bottom-[-12rem] z-[4] mx-auto h-[27rem] w-[27rem] rounded-full md:bottom-[-18rem] md:h-[42rem] md:w-[42rem]"
        style={{ opacity: lensOpacity, y: lensY, scale: lensScale, rotate: lensRotate }}
      >
        <span className="lens-barrel" />
        <span className="lens-ring" />
        <span className="lens-glass" />
        <span className="lens-reflection-stars" />
        <span className="lens-core" />
      </motion.div>

      <motion.div className="cinematic-vignette pointer-events-none absolute inset-0 z-[12]" style={{ opacity: frameOpacity }} />
    </div>
  );
}

function Hero({ content }) {
  return (
    <header className="relative min-h-[112svh]">
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-8 pt-20 md:px-8 md:pb-14">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="mb-6 text-sm tracking-[0.26em] text-[#f0c66a] md:text-base">{content.hero.eyebrow}</p>
          <h1 className="gold-signature text-6xl leading-none text-[#f5d981] md:text-8xl">{sharedBrand.name}</h1>
          <p className="mx-auto mt-5 max-w-xl text-2xl font-semibold leading-tight text-cream md:text-4xl">
            {content.hero.headline}
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-stone-200 md:text-lg">{content.hero.intro}</p>

          <div className="mx-auto mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
            <motion.a
              href="#links"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-[#f0c66a] px-5 py-4 text-base font-semibold text-black shadow-[0_18px_60px_rgba(240,198,106,0.26)] transition hover:bg-[#ffe29a] focus:outline-none focus:ring-2 focus:ring-[#fff2ba] focus:ring-offset-2 focus:ring-offset-black"
              whileTap={{ scale: 0.985 }}
            >
              <Film size={20} aria-hidden="true" />
              {content.hero.primaryCta}
            </motion.a>
            <motion.a
              href={sharedBrand.whatsappHref}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-[#f0c66a]/40 bg-black/45 px-5 py-4 text-base font-semibold text-cream backdrop-blur transition hover:border-[#f0c66a] hover:text-[#f5d981] focus:outline-none focus:ring-2 focus:ring-[#f6d98a] focus:ring-offset-2 focus:ring-offset-black"
              whileTap={{ scale: 0.985 }}
            >
              <MessageCircle size={20} aria-hidden="true" />
              {content.hero.secondaryCta}
            </motion.a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {content.hero.details.map((detail) => (
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

function ContactSection({ content, language }) {
  const align = language === 'he' ? 'text-right' : 'text-left';

  return (
    <section id="contact" className="relative px-5 py-12 md:px-8 md:py-18">
      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={align}
        >
          <p className="mb-3 text-sm font-medium text-[#f0c66a]">{content.contact.eyebrow}</p>
          <h2 className="text-3xl font-semibold text-cream md:text-4xl">{content.contact.title}</h2>
          <p className="mt-4 text-base leading-8 text-stone-300">{content.contact.text}</p>
        </motion.div>

        <div className="grid gap-4">
          {content.contactLinks.map((link) => (
            <LinkButton key={link.label} item={link} language={language} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LinksSection({ content, language }) {
  const featuredLinks = content.publicLinks.filter((link) => link.featured);
  const secondaryLinks = content.publicLinks.filter((link) => !link.featured);

  return (
    <section id="links" className="relative px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={content.links.eyebrow}
          title={content.links.title}
          text={content.links.text}
          language={language}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {featuredLinks.map((link) => (
            <LinkButton key={link.href} item={link} language={language} />
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {secondaryLinks.map((link) => (
            <LinkButton key={link.href} item={link} language={language} compact />
          ))}
        </div>
      </div>
    </section>
  );
}

function CraftSection({ content, language }) {
  const align = language === 'he' ? 'text-right' : 'text-left';

  return (
    <section className="relative px-5 py-14 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={content.craft.eyebrow}
          title={content.craft.title}
          text={content.craft.text}
          language={language}
        />

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.craft.items.map((item, index) => (
            <motion.article
              key={item.title}
              className={`rounded-xl border border-[#f0c66a]/16 bg-black/35 p-5 backdrop-blur ${align}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
            >
              <span className="mb-4 block text-sm font-semibold tracking-[0.22em] text-[#f0c66a]">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-xl font-semibold text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-stone-300">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ content, language }) {
  return (
    <section className="relative px-5 py-16 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow={content.services.eyebrow}
          title={content.services.title}
          text={content.services.text}
          language={language}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.servicesList.map((service, index) => {
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

function Footer({ content }) {
  return (
    <footer className="relative px-5 py-10 text-center md:px-8">
      <div className="lens-aperture pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35" />
      <div className="relative">
        <p className="gold-signature text-4xl text-[#f5d981]">{sharedBrand.name}</p>
        <p className="mt-3 text-sm text-stone-400">{content.footer.line} · {sharedBrand.phoneDisplay}</p>
      </div>
    </footer>
  );
}

export default function App() {
  const [language, setLanguage] = useState(defaultLanguage);
  const content = localizedContent[language];
  const languageMeta = languages[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = languageMeta.dir;
  }, [language, languageMeta.dir]);

  return (
    <main dir={languageMeta.dir} className="relative isolate min-h-screen overflow-hidden bg-[#050402] text-stone-100">
      <CinematicBackdrop />
      <LanguageToggle language={language} onLanguageChange={setLanguage} />
      <div className="relative z-10 readable-copy">
        <Hero content={content} />
        <ContactSection content={content} language={language} />
        <LinksSection content={content} language={language} />
        <CraftSection content={content} language={language} />
        <ServicesSection content={content} language={language} />
        <Footer content={content} />
      </div>
    </main>
  );
}
