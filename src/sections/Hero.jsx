import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';

const stats = [
  { value: '99.9%', label: 'Steam Reliability' },
  { value: '100%', label: 'Sustainable Fuel Management' },
  { value: '24/7', label: 'Boiler Operation Support' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const motionProps = shouldReduceMotion
    ? { initial: false, animate: 'visible' }
    : { initial: 'hidden', animate: 'visible' };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07110f] pt-28 text-white md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(109,190,69,0.2),transparent_28%),radial-gradient(circle_at_78%_32%,rgba(43,164,102,0.28),transparent_32%),linear-gradient(135deg,#0b1514_0%,#111827_48%,#07110f_100%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />
      <motion.div
        aria-hidden="true"
        animate={shouldReduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute right-[8%] top-28 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
      />

      <Container className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-14 lg:grid-cols-[0.45fr_0.55fr] lg:gap-16 lg:py-10">
        <motion.div {...motionProps} variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="max-w-2xl">
          <motion.p variants={fadeUp} transition={{ duration: 0.6 }} className="mb-5 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">
            Sustainable Boiler Operation Solutions
          </motion.p>
          <motion.h1 variants={fadeUp} transition={{ duration: 0.7 }} className="font-poppins text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-6xl xl:text-7xl">
            We Manage Your Boiler Using <span className="text-primary">Sustainable Bio Energy</span>
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: 0.7 }} className="mt-6 max-w-xl text-base leading-8 text-white/72 md:text-lg">
            Bio Energy Partners provides complete industrial boiler operation solutions using sustainable biomass energy. We manage your boiler, fuel operations, and steam reliability so your factory can focus on production.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton to="/contact" className="normal-case tracking-normal">Discuss Your Boiler <ArrowRight className="ml-2" size={18} /></PrimaryButton>
            <PrimaryButton to="/boiler-operation-solution" className="border border-white/15 bg-white/10 normal-case tracking-normal text-white shadow-none backdrop-blur hover:bg-white hover:text-dark">Our Solution</PrimaryButton>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.7 }} className="mt-10 grid gap-3 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.45 + index * 0.12, duration: 0.55 }}
                className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
              >
                <div className="font-poppins text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-white/58">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <HeroIllustration shouldReduceMotion={shouldReduceMotion} />
      </Container>
    </section>
  );
}

function HeroIllustration({ shouldReduceMotion }) {
  const steamMotion = shouldReduceMotion
    ? undefined
    : { opacity: [0, 0.9, 0], y: [0, -38, -78], scale: [0.86, 1.14, 1.38] };
  const flowMotion = shouldReduceMotion
    ? undefined
    : { pathLength: [0.05, 0.95, 0.05], opacity: [0.25, 1, 0.25] };

  const kpiBadges = [
    { label: '24/7 Boiler Operation', className: 'right-2 top-12 md:right-0' },
    { label: '100% Biomass Fuel Managed', className: 'left-0 top-40 md:-left-2' },
    { label: '99.9% Steam Reliability', className: 'bottom-12 right-4 md:right-10' },
  ];

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
      className="relative min-h-[520px] lg:min-h-[660px]"
      aria-label="Bio Energy Partners professionally manages industrial biomass boilers"
    >
      <div className="absolute inset-x-2 top-12 h-[500px] rounded-[3rem] bg-[radial-gradient(circle_at_50%_18%,rgba(109,190,69,0.22),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(7,17,15,0.22))] blur-sm md:inset-x-8" />
      <div className="absolute inset-x-2 top-16 rounded-[2.5rem] border border-white/10 bg-[#0b1514]/80 p-3 shadow-[0_34px_110px_rgba(0,0,0,0.42)] backdrop-blur-2xl md:inset-x-8 md:p-6">
        <svg className="h-auto w-full" viewBox="0 0 720 560" role="img" aria-labelledby="hero-boiler-title hero-boiler-desc">
          <title id="hero-boiler-title">Industrial biomass boiler management illustration</title>
          <desc id="hero-boiler-desc">A biomass conveyor feeds a large industrial boiler with gauges, controls, valves, steam, and green energy flow in front of a factory silhouette.</desc>
          <defs>
            <linearGradient id="boilerShell" x1="170" x2="545" y1="215" y2="405" gradientUnits="userSpaceOnUse">
              <stop stopColor="#26332f" />
              <stop offset="0.48" stopColor="#111c1a" />
              <stop offset="1" stopColor="#30413b" />
            </linearGradient>
            <linearGradient id="greenFlow" x1="42" x2="595" y1="323" y2="221" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6DBE45" stopOpacity="0" />
              <stop offset="0.5" stopColor="#6DBE45" />
              <stop offset="1" stopColor="#C7FF8F" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="industrialGlow" cx="0" cy="0" r="1" gradientTransform="matrix(0 212 -344 0 365 292)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6DBE45" stopOpacity="0.24" />
              <stop offset="1" stopColor="#6DBE45" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="combustionGlow" cx="50%" cy="50%" r="58%">
              <stop stopColor="#FF9A1F" />
              <stop offset="0.48" stopColor="#E45B21" stopOpacity="0.9" />
              <stop offset="1" stopColor="#B83A1B" stopOpacity="0.25" />
            </radialGradient>
            <radialGradient id="warmSteelLight" cx="0" cy="0" r="1" gradientTransform="matrix(115 0 0 92 206 313)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF9A1F" stopOpacity="0.38" />
              <stop offset="1" stopColor="#FF9A1F" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="briquetteHeat" x1="54" x2="212" y1="384" y2="346" gradientUnits="userSpaceOnUse">
              <stop stopColor="#704522" />
              <stop offset="0.64" stopColor="#9A6231" />
              <stop offset="1" stopColor="#D9822B" />
            </linearGradient>
            <radialGradient id="flameCore" cx="50%" cy="44%" r="62%">
              <stop stopColor="#FFF2A3" />
              <stop offset="0.52" stopColor="#FF9A1F" />
              <stop offset="1" stopColor="#B83A1B" />
            </radialGradient>
            <linearGradient id="steamFade" x1="0" x2="0" y1="112" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" stopOpacity="0.76" />
              <stop offset="1" stopColor="#CBD5D1" stopOpacity="0.12" />
            </linearGradient>
            <clipPath id="burnerClip">
              <ellipse cx="202" cy="312" rx="34" ry="70" />
            </clipPath>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="emberGlow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur stdDeviation="2.2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          <rect width="720" height="560" rx="34" fill="#081210" />
          <rect width="720" height="560" rx="34" fill="url(#industrialGlow)" />
          <path d="M49 432H680" stroke="#ECF8E8" strokeOpacity="0.16" strokeWidth="2" />

          <g opacity="0.42">
            <path d="M64 432V335h52v97M134 432V292h74v140M228 432V318h92v114M344 432V280h80v152M444 432V330h55v102M520 432V260h70v172" fill="#13201d" />
            <path d="M145 292h41l-10-55h-21l-10 55ZM548 260h22l-7-72h-8l-7 72Z" fill="#182823" />
            <path d="M80 356h20M151 315h39M246 342h55M360 304h47M535 286h39" stroke="#6DBE45" strokeOpacity="0.28" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g>
            <path d="M44 375l170-38 20 42-168 42-22-46Z" fill="#151f1d" stroke="#DDF4D6" strokeOpacity="0.18" strokeWidth="3" />
            <path d="M70 375l132-29" stroke="#6DBE45" strokeOpacity="0.42" strokeWidth="6" strokeLinecap="round" />
            <motion.g animate={shouldReduceMotion ? undefined : { x: [0, 20, 0] }} transition={{ duration: 8.5, repeat: Infinity, ease: 'linear' }}>
              {Array.from({ length: 8 }).map((_, index) => (
                <g key={index} transform={`translate(${68 + index * 18} ${374 - index * 4}) rotate(-13)`}>
                  <rect width="26" height="12" rx="6" fill="url(#briquetteHeat)" stroke="#D39A57" strokeOpacity={index > 5 ? 0.42 : 0.18} />
                  <ellipse cx="3" cy="6" rx="3" ry="5.4" fill="#5F371C" opacity="0.82" />
                  <path d="M8 4.2h12M9 7.8h9" stroke={index > 5 ? '#FFB04A' : '#3B2415'} strokeOpacity={index > 5 ? 0.65 : 0.26} strokeWidth="1.3" strokeLinecap="round" />
                </g>
              ))}
            </motion.g>
          </g>

          <g filter="url(#softGlow)">
            <motion.path d="M92 345C170 315 221 323 276 285C334 245 402 242 461 260C512 276 548 252 607 218" fill="none" stroke="url(#greenFlow)" strokeWidth="7" strokeLinecap="round" animate={flowMotion} transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.path d="M118 388C206 356 282 376 348 337C418 296 488 302 606 268" fill="none" stroke="url(#greenFlow)" strokeWidth="5" strokeLinecap="round" animate={flowMotion} transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} />
          </g>

          <g>
            <rect x="198" y="218" width="330" height="188" rx="88" fill="url(#boilerShell)" stroke="#ECF8E8" strokeOpacity="0.18" strokeWidth="4" />
            <ellipse cx="523" cy="312" rx="52" ry="90" fill="#182622" stroke="#ECF8E8" strokeOpacity="0.22" strokeWidth="4" />
            <ellipse cx="202" cy="312" rx="38" ry="76" fill="#0D1715" stroke="#6DBE45" strokeOpacity="0.36" strokeWidth="4" />
            <ellipse cx="206" cy="314" rx="112" ry="84" fill="url(#warmSteelLight)" opacity="0.55" />
            <path d="M213 347c-18 13-44 8-52-13 13 6 28-1 30-17 4-24 20-37 35-47-2 18 16 29 18 50 1 12-7 21-31 27Z" fill="#FF9A1F" opacity="0.14" />
            <g clipPath="url(#burnerClip)">
              <motion.ellipse cx="202" cy="320" rx="34" ry="67" fill="url(#combustionGlow)" animate={shouldReduceMotion ? undefined : { opacity: [0.72, 1, 0.78], scale: [0.97, 1.04, 0.98] }} transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.path d="M202 354C184 338 188 314 202 297c2 16 18 23 19 40 0 10-7 17-19 17Z" fill="url(#flameCore)" animate={shouldReduceMotion ? undefined : { scaleY: [0.92, 1.08, 0.96], x: [0, 1.5, -1, 0] }} style={{ originX: '202px', originY: '354px' }} transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }} />
              <motion.path d="M200 348c-8-9-5-23 5-33 1 9 10 14 9 24-1 6-6 9-14 9Z" fill="#FFF2A3" opacity="0.9" animate={shouldReduceMotion ? undefined : { opacity: [0.72, 1, 0.76] }} transition={{ duration: 1.9, repeat: Infinity, ease: 'easeInOut' }} />
            </g>
            <path d="M239 244h230M237 381h235" stroke="#FFFFFF" strokeOpacity="0.09" strokeWidth="10" strokeLinecap="round" />
            <rect x="259" y="391" width="50" height="48" rx="10" fill="#111C1A" />
            <rect x="421" y="391" width="50" height="48" rx="10" fill="#111C1A" />
            <rect x="240" y="190" width="154" height="36" rx="14" fill="#14221F" stroke="#ECF8E8" strokeOpacity="0.14" strokeWidth="3" />
            <path d="M390 204h121c34 0 62-28 62-62V96" fill="none" stroke="#263A34" strokeWidth="22" strokeLinecap="round" />
            <path d="M390 204h121c34 0 62-28 62-62V96" fill="none" stroke="#FFFFFF" strokeOpacity="0.11" strokeWidth="6" strokeLinecap="round" />
            <rect x="554" y="78" width="38" height="35" rx="8" fill="#2A3E37" stroke="#6DBE45" strokeOpacity="0.4" strokeWidth="3" />
            <circle cx="573" cy="68" r="15" fill="#6DBE45" />
            <path d="M560 68h26" stroke="#08200F" strokeWidth="5" strokeLinecap="round" />
          </g>

          <g>
            <circle cx="320" cy="276" r="32" fill="#091210" stroke="#DFF5D8" strokeOpacity="0.8" strokeWidth="5" />
            <path d="M303 282a18 18 0 0 1 35-6" fill="none" stroke="#6DBE45" strokeWidth="5" strokeLinecap="round" />
            <motion.path d="M320 276l16-12" stroke="#F4FFF0" strokeWidth="4" strokeLinecap="round" animate={shouldReduceMotion ? undefined : { rotate: [-10, 18, -10] }} style={{ originX: '320px', originY: '276px' }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }} />
            <rect x="446" y="258" width="66" height="88" rx="14" fill="#0A1312" stroke="#DDF4D6" strokeOpacity="0.18" strokeWidth="3" />
            <rect x="457" y="270" width="44" height="22" rx="6" fill="#6DBE45" fillOpacity="0.78" />
            <circle cx="464" cy="313" r="6" fill="#6DBE45" /><circle cx="482" cy="313" r="6" fill="#DDF4D6" opacity="0.72" /><circle cx="500" cy="313" r="6" fill="#6DBE45" opacity="0.55" />
            <path d="M459 333h41" stroke="#DDF4D6" strokeOpacity="0.38" strokeWidth="5" strokeLinecap="round" />
          </g>

          <g filter="url(#emberGlow)">
            {[
              { x: 184, y: 305, c: '#FF9A1F', d: 0 },
              { x: 204, y: 294, c: '#FFC35A', d: 0.7 },
              { x: 221, y: 319, c: '#B83A1B', d: 1.3 },
              { x: 191, y: 336, c: '#FF7A24', d: 2.1 },
              { x: 226, y: 287, c: '#D94A1B', d: 2.7 },
              { x: 211, y: 330, c: '#FFB13B', d: 3.3 },
              { x: 176, y: 323, c: '#B83A1B', d: 4.1 },
            ].map((ember) => (
              <motion.circle key={`${ember.x}-${ember.y}`} cx={ember.x} cy={ember.y} r="2.2" fill={ember.c} animate={shouldReduceMotion ? undefined : { y: [0, -22, -42], opacity: [0, 0.9, 0], scale: [0.6, 1, 0.35] }} transition={{ duration: 5.2, repeat: Infinity, ease: 'easeOut', delay: ember.d }} />
            ))}
          </g>

          {[0, 1, 2].map((item) => (
            <motion.path key={item} d={`M${548 + item * 23} 87C${524 + item * 20} 50 ${584 + item * 8} 44 ${555 + item * 21} 12`} fill="none" stroke="url(#steamFade)" strokeOpacity="0.7" strokeWidth="9.5" strokeLinecap="round" animate={steamMotion} transition={{ duration: 4.4, repeat: Infinity, ease: 'easeOut', delay: item * 0.65 }} />
          ))}
        </svg>
      </div>

      {kpiBadges.map((badge, index) => (
        <motion.div
          key={badge.label}
          animate={shouldReduceMotion ? undefined : { y: [0, index === 1 ? 10 : -10, 0] }}
          transition={{ duration: 5.8 + index * 0.7, repeat: Infinity, ease: 'easeInOut' }}
          className={`absolute max-w-[210px] rounded-2xl border border-primary/25 bg-[#0b1514]/85 px-4 py-3 text-sm font-bold text-white shadow-[0_20px_70px_rgba(0,0,0,0.36)] backdrop-blur-xl ${badge.className}`}
        >
          <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(109,190,69,0.9)]" />
          {badge.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
