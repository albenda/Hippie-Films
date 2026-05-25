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

const signatureStarbursts = [
  { left: '5%', top: '23%', size: 5, glow: 'soft', delay: -0.2 },
  { left: '8%', top: '58%', size: 4, glow: 'warm', delay: -2.6 },
  { left: '11%', top: '71%', size: 6, glow: 'soft', delay: -1.6 },
  { left: '14%', top: '66%', size: 8, glow: 'warm', delay: -1.4 },
  { left: '17%', top: '15%', size: 9, glow: 'bright', delay: -2.1 },
  { left: '20%', top: '86%', size: 7, glow: 'soft', delay: -3.2 },
  { left: '23%', top: '72%', size: 8, glow: 'warm', delay: -0.8 },
  { left: '27%', top: '61%', size: 4, glow: 'soft', delay: -2.9 },
  { left: '30%', top: '93%', size: 6, glow: 'warm', delay: -1.9 },
  { left: '34%', top: '35%', size: 5, glow: 'soft', delay: -3.6 },
  { left: '38%', top: '39%', size: 7, glow: 'soft', delay: -1.8 },
  { left: '41%', top: '70%', size: 5, glow: 'warm', delay: -0.7 },
  { left: '46%', top: '56%', size: 8, glow: 'warm', delay: -0.6 },
  { left: '48%', top: '81%', size: 4, glow: 'soft', delay: -2.4 },
  { left: '51%', top: '48%', size: 5, glow: 'soft', delay: -3.1 },
  { left: '55%', top: '72%', size: 6, glow: 'warm', delay: -1.2 },
  { left: '58%', top: '6%', size: 5, glow: 'warm', delay: -2.8 },
  { left: '61%', top: '62%', size: 5, glow: 'soft', delay: -1.1 },
  { left: '64%', top: '83%', size: 4, glow: 'soft', delay: -3.4 },
  { left: '68%', top: '47%', size: 7, glow: 'warm', delay: -2.4 },
  { left: '71%', top: '9%', size: 5, glow: 'soft', delay: -0.4 },
  { left: '74%', top: '22%', size: 9, glow: 'bright', delay: -1.6 },
  { left: '76%', top: '64%', size: 4, glow: 'soft', delay: -3.7 },
  { left: '79%', top: '88%', size: 6, glow: 'warm', delay: -2.3 },
  { left: '82%', top: '75%', size: 8, glow: 'bright', delay: -2.2 },
  { left: '85%', top: '45%', size: 5, glow: 'warm', delay: -0.5 },
  { left: '88%', top: '13%', size: 6, glow: 'soft', delay: -0.9 },
  { left: '91%', top: '31%', size: 6, glow: 'soft', delay: -1.9 },
  { left: '93%', top: '54%', size: 9, glow: 'bright', delay: -0.3 },
  { left: '96%', top: '80%', size: 4, glow: 'warm', delay: -3.5 },
  { left: '12%', top: '76%', size: 7, glow: 'warm', delay: -2.5 },
  { left: '18%', top: '39%', size: 4, glow: 'soft', delay: -3.9 },
  { left: '33%', top: '12%', size: 5, glow: 'soft', delay: -1.3 },
  { left: '57%', top: '31%', size: 4, glow: 'warm', delay: -2.7 },
  { left: '69%', top: '92%', size: 5, glow: 'soft', delay: -3.3 },
  { left: '84%', top: '92%', size: 8, glow: 'bright', delay: -1.2 },
];

const circularTwinkles = [
  { left: '7%', top: '12%', size: 2, tone: 'white', delay: -0.4, duration: 5.8 },
  { left: '13%', top: '28%', size: 1.5, tone: 'gold', delay: -1.8, duration: 6.7 },
  { left: '18%', top: '52%', size: 2.5, tone: 'white', delay: -3.1, duration: 7.2 },
  { left: '21%', top: '18%', size: 1.7, tone: 'gold', delay: -0.9, duration: 6.2 },
  { left: '24%', top: '79%', size: 2.2, tone: 'white', delay: -2.6, duration: 7.6 },
  { left: '28%', top: '9%', size: 1.6, tone: 'white', delay: -4.1, duration: 6.9 },
  { left: '31%', top: '44%', size: 2.6, tone: 'gold', delay: -1.5, duration: 7.8 },
  { left: '34%', top: '67%', size: 1.8, tone: 'white', delay: -3.7, duration: 6.5 },
  { left: '39%', top: '23%', size: 2.1, tone: 'gold', delay: -2.2, duration: 7.1 },
  { left: '43%', top: '88%', size: 1.5, tone: 'white', delay: -0.7, duration: 6.4 },
  { left: '47%', top: '15%', size: 2.4, tone: 'white', delay: -3.4, duration: 7.5 },
  { left: '51%', top: '37%', size: 1.8, tone: 'gold', delay: -1.2, duration: 6.1 },
  { left: '54%', top: '69%', size: 2.6, tone: 'white', delay: -4.3, duration: 8 },
  { left: '59%', top: '25%', size: 1.6, tone: 'gold', delay: -2.9, duration: 6.8 },
  { left: '63%', top: '81%', size: 2.3, tone: 'white', delay: -0.5, duration: 7.4 },
  { left: '67%', top: '12%', size: 2, tone: 'white', delay: -3.8, duration: 6.6 },
  { left: '71%', top: '51%', size: 1.7, tone: 'gold', delay: -1.7, duration: 7.7 },
  { left: '75%', top: '34%', size: 2.5, tone: 'white', delay: -4.5, duration: 6.3 },
  { left: '79%', top: '73%', size: 1.5, tone: 'gold', delay: -2.1, duration: 7 },
  { left: '84%', top: '19%', size: 2.2, tone: 'white', delay: -0.8, duration: 7.9 },
  { left: '88%', top: '58%', size: 1.8, tone: 'white', delay: -3.5, duration: 6.2 },
  { left: '92%', top: '42%', size: 2.7, tone: 'gold', delay: -1, duration: 7.6 },
  { left: '95%', top: '87%', size: 1.6, tone: 'white', delay: -4.2, duration: 6.9 },
  { left: '10%', top: '92%', size: 2.4, tone: 'gold', delay: -2.4, duration: 7.3 },
  { left: '6%', top: '76%', size: 1.7, tone: 'white', delay: -3.9, duration: 7.4 },
  { left: '16%', top: '84%', size: 2.2, tone: 'gold', delay: -1.1, duration: 6.8 },
  { left: '26%', top: '32%', size: 1.6, tone: 'white', delay: -4.6, duration: 7.1 },
  { left: '36%', top: '54%', size: 2.4, tone: 'gold', delay: -2.8, duration: 7.9 },
  { left: '45%', top: '61%', size: 1.7, tone: 'white', delay: -0.3, duration: 6.6 },
  { left: '56%', top: '91%', size: 2.1, tone: 'gold', delay: -3.3, duration: 7.5 },
  { left: '62%', top: '43%', size: 1.5, tone: 'white', delay: -1.9, duration: 6.4 },
  { left: '69%', top: '66%', size: 2.3, tone: 'white', delay: -4.8, duration: 7.7 },
  { left: '78%', top: '7%', size: 1.8, tone: 'gold', delay: -2.5, duration: 7.2 },
  { left: '86%', top: '82%', size: 2.5, tone: 'white', delay: -0.6, duration: 8.1 },
  { left: '90%', top: '23%', size: 1.6, tone: 'gold', delay: -3.6, duration: 6.7 },
  { left: '97%', top: '63%', size: 2.1, tone: 'white', delay: -1.4, duration: 7 },
];

function StarField({ farStyle, nearStyle, burstStyle, streamStyle, coreStreamStyle, twinkleStyle }) {
  return (
    <>
      <motion.div className="absolute inset-0 star-field" style={farStyle} />
      <motion.div className="absolute inset-0 star-field-near" style={nearStyle} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_8%,rgba(240,198,106,0.10),transparent_22rem),radial-gradient(circle_at_18%_72%,rgba(214,155,61,0.09),transparent_19rem),linear-gradient(180deg,rgba(3,3,2,0.10),rgba(5,4,2,0.74)_92%)]" />
      <motion.div className="absolute inset-0 star-burst-field" style={burstStyle}>
        {signatureStarbursts.map((star) => (
          <span
            key={`${star.left}-${star.top}-${star.size}`}
            className={`signature-starburst ${star.glow}`}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </motion.div>
      <motion.div className="absolute inset-0 circular-twinkle-field" style={twinkleStyle}>
        {circularTwinkles.map((star) => (
          <span
            key={`${star.left}-${star.top}-${star.size}`}
            className={`circular-twinkle ${star.tone}`}
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </motion.div>
      <motion.div className="absolute inset-0 star-stream" style={streamStyle} />
      <motion.div className="absolute inset-0 star-stream-core" style={coreStreamStyle} />
      <motion.div className="absolute inset-0 twinkle-field" style={twinkleStyle} />
      <div className="absolute inset-0 film-grain opacity-55" />
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
  const sceneProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 34,
    mass: 0.13,
    restDelta: 0.0001,
  });
  const starProgress = useSpring(scrollYProgress, {
    stiffness: 320,
    damping: 42,
    mass: 0.08,
    restDelta: 0.0001,
  });

  const moonY = useTransform(sceneProgress, [0, 0.2, 0.58, 1], [0, -62, -230, -450]);
  const moonX = useTransform(sceneProgress, [0, 1], [0, -98]);
  const moonScale = useTransform(sceneProgress, [0, 0.24, 0.62, 1], [1.06, 0.95, 0.76, 0.5]);
  const moonOpacity = useTransform(sceneProgress, [0, 0.68, 1], [0.96, 0.82, 0.58]);

  const farStarsY = useTransform(starProgress, [0, 1], [0, 185]);
  const farStarsScale = useTransform(starProgress, [0, 1], [1, 1.18]);
  const nearStarsY = useTransform(starProgress, [0, 1], [0, 290]);
  const nearStarsScale = useTransform(starProgress, [0, 0.7, 1], [1, 0.88, 0.7]);
  const nearStarsOpacity = useTransform(starProgress, [0, 0.72, 1], [0.62, 0.9, 0.52]);
  const burstStarsY = useTransform(starProgress, [0, 1], [0, 210]);
  const burstStarsScale = useTransform(starProgress, [0, 0.72, 1], [1, 0.95, 0.84]);
  const burstStarsOpacity = useTransform(starProgress, [0, 0.78, 1], [0.5, 0.7, 0.46]);
  const streamY = useTransform(starProgress, [0, 1], [0, 190]);
  const streamScale = useTransform(starProgress, [0, 0.72, 1], [1, 0.92, 0.8]);
  const streamScaleX = useTransform(starProgress, [0, 0.76, 1], [1, 0.9, 0.68]);
  const streamScaleY = useTransform(starProgress, [0, 0.58, 1], [1, 1.18, 1.42]);
  const streamOpacity = useTransform(starProgress, [0, 0.18, 0.82, 1], [0.16, 0.34, 0.48, 0.42]);
  const coreStreamY = useTransform(starProgress, [0, 1], [0, 230]);
  const coreStreamScale = useTransform(starProgress, [0, 0.72, 1], [1, 0.9, 0.76]);
  const coreStreamScaleX = useTransform(starProgress, [0, 0.76, 1], [1, 0.82, 0.56]);
  const coreStreamScaleY = useTransform(starProgress, [0, 0.54, 1], [1, 1.24, 1.54]);
  const coreStreamOpacity = useTransform(starProgress, [0, 0.16, 0.78, 1], [0.1, 0.26, 0.42, 0.34]);
  const twinkleOpacity = useTransform(starProgress, [0, 0.45, 1], [0.68, 0.96, 0.62]);

  const lensOpacity = useTransform(sceneProgress, [0.02, 0.24, 0.84, 1], [0.12, 0.58, 0.92, 1]);
  const lensY = useTransform(sceneProgress, [0, 1], [360, -80]);
  const lensScale = useTransform(sceneProgress, [0, 0.72, 1], [0.48, 0.98, 1.26]);
  const lensRotate = useTransform(sceneProgress, [0, 1], [0, 112]);
  const lensReflectionX = useTransform(sceneProgress, [0, 1], [-18, 34]);
  const lensReflectionY = useTransform(sceneProgress, [0, 1], [-8, 44]);
  const lensReflectionScale = useTransform(sceneProgress, [0, 1], [0.94, 1.16]);
  const lensReflectionOpacity = useTransform(sceneProgress, [0, 0.52, 1], [0.42, 0.74, 0.96]);
  const lensMoonReflectionX = useTransform(sceneProgress, [0, 1], [-28, 18]);
  const lensMoonReflectionY = useTransform(sceneProgress, [0, 1], [-30, 24]);
  const lensMoonReflectionOpacity = useTransform(sceneProgress, [0, 0.5, 1], [0.18, 0.34, 0.24]);
  const frameOpacity = useTransform(sceneProgress, [0, 0.42, 1], [0.16, 0.32, 0.58]);

  return (
    <div className="site-cinema-bg cinematic-scene fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <StarField
        farStyle={{ y: farStarsY, scale: farStarsScale }}
        nearStyle={{ y: nearStarsY, scale: nearStarsScale, opacity: nearStarsOpacity }}
        burstStyle={{ y: burstStarsY, scale: burstStarsScale, opacity: burstStarsOpacity }}
        streamStyle={{
          y: streamY,
          scale: streamScale,
          scaleX: streamScaleX,
          scaleY: streamScaleY,
          opacity: streamOpacity,
        }}
        coreStreamStyle={{
          y: coreStreamY,
          scale: coreStreamScale,
          scaleX: coreStreamScaleX,
          scaleY: coreStreamScaleY,
          opacity: coreStreamOpacity,
        }}
        twinkleStyle={{ opacity: twinkleOpacity }}
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
        className="lens-pull pointer-events-none absolute inset-x-0 bottom-[-11rem] z-[4] mx-auto h-[32rem] w-[32rem] rounded-full md:bottom-[-18rem] md:h-[52rem] md:w-[52rem]"
        style={{ opacity: lensOpacity, y: lensY, scale: lensScale, rotate: lensRotate }}
      >
        <span className="lens-barrel" />
        <span className="lens-ring" />
        <span className="lens-glass" />
        <motion.span
          className="lens-reflection-moon"
          style={{ x: lensMoonReflectionX, y: lensMoonReflectionY, opacity: lensMoonReflectionOpacity }}
        />
        <motion.span
          className="lens-reflection-stars"
          style={{ x: lensReflectionX, y: lensReflectionY, scale: lensReflectionScale, opacity: lensReflectionOpacity }}
        />
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
