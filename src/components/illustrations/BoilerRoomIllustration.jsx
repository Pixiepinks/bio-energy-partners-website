import { motion, useReducedMotion } from 'framer-motion';

const MotionCircle = motion.circle;
const MotionPath = motion.path;
const MotionG = motion.g;

export function BoilerRoomIllustration({ className = '' }) {
  const reduceMotion = useReducedMotion();

  const glowPulse = reduceMotion ? undefined : { opacity: [0.45, 0.9, 0.45], scale: [0.96, 1.04, 0.96] };
  const steamFlow = reduceMotion
    ? undefined
    : { pathLength: [0.25, 1, 0.25], opacity: [0.15, 0.72, 0.15], y: [12, -14, 12] };
  const conveyorFlow = reduceMotion ? undefined : { x: [0, 18, 0], opacity: [0.5, 1, 0.5] };
  const gaugeNeedle = reduceMotion ? undefined : { rotate: [-9, 13, -9] };

  return (
    <div className={`relative w-full ${className}`} role="img" aria-label="SVG illustration of an industrial biomass boiler room with conveyor, steam pipe, pressure gauge, operator and green energy glow">
      <svg viewBox="0 0 980 760" xmlns="http://www.w3.org/2000/svg" className="h-auto w-full overflow-visible" fill="none">
        <defs>
          <radialGradient id="roomGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b6ff81" stopOpacity="0.72" />
            <stop offset="48%" stopColor="#6dbe45" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#6dbe45" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="boilerShell" x1="270" x2="815" y1="268" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6f7b74" />
            <stop offset="0.2" stopColor="#2c3832" />
            <stop offset="0.52" stopColor="#111a16" />
            <stop offset="0.78" stopColor="#3b4740" />
            <stop offset="1" stopColor="#748078" />
          </linearGradient>
          <linearGradient id="boilerHighlight" x1="300" x2="750" y1="315" y2="315" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff" stopOpacity="0.28" />
            <stop offset="0.45" stopColor="#ffffff" stopOpacity="0.04" />
            <stop offset="1" stopColor="#b6ff81" stopOpacity="0.16" />
          </linearGradient>
          <radialGradient id="fireGlow" cx="50%" cy="50%" r="58%">
            <stop offset="0%" stopColor="#ffd18a" stopOpacity="0.98" />
            <stop offset="42%" stopColor="#ff7a1a" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#6dbe45" stopOpacity="0.08" />
          </radialGradient>
          <linearGradient id="pipeMetal" x1="500" x2="910" y1="135" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f4fbf7" stopOpacity="0.82" />
            <stop offset="0.28" stopColor="#7f8b85" stopOpacity="0.8" />
            <stop offset="0.62" stopColor="#dfe9e4" stopOpacity="0.72" />
            <stop offset="1" stopColor="#6dbe45" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="conveyorMetal" x1="90" x2="410" y1="540" y2="455" gradientUnits="userSpaceOnUse">
            <stop stopColor="#121b17" />
            <stop offset="0.5" stopColor="#46524b" />
            <stop offset="1" stopColor="#1c2722" />
          </linearGradient>
          <filter id="softGreenBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect x="34" y="42" width="912" height="660" rx="48" fill="#07100d" />
        <path d="M70 626H920L874 704H115Z" fill="#0b1511" stroke="#fff" strokeOpacity="0.08" />
        <path d="M120 650H870M155 680H820" stroke="#fff" strokeOpacity="0.05" strokeWidth="2" />
        <path d="M112 112V625M260 112V625M408 112V625M556 112V625M704 112V625M852 112V625" stroke="#fff" strokeOpacity="0.035" />
        <path d="M88 240H895M88 370H895M88 500H895" stroke="#fff" strokeOpacity="0.04" />
        <path d="M120 112H860M120 112L90 625M860 112L890 625" stroke="#6dbe45" strokeOpacity="0.11" strokeWidth="8" strokeLinecap="round" />
        <path d="M78 206H282M735 314H916M742 354H912" stroke="#dfe9e4" strokeOpacity="0.08" strokeWidth="14" strokeLinecap="round" />
        <path d="M78 206H282M735 314H916M742 354H912" stroke="#6dbe45" strokeOpacity="0.08" strokeWidth="4" strokeLinecap="round" />
        <MotionCircle cx="480" cy="404" r="252" fill="url(#roomGlow)" filter="url(#softGreenBlur)" animate={glowPulse} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '480px 404px' }} />

        {/* Steam header and pipework */}
        <path d="M495 146H815Q878 146 878 209V268" stroke="url(#pipeMetal)" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M495 131H815Q893 131 893 209V268" stroke="#ffffff" strokeOpacity="0.14" strokeWidth="8" strokeLinecap="round" />
        <g stroke="#dfe9e4" strokeOpacity="0.48" strokeWidth="4">
          <rect x="616" y="118" width="28" height="56" rx="5" fill="#18231f" />
          <rect x="788" y="118" width="28" height="56" rx="5" fill="#18231f" />
          <rect x="850" y="240" width="56" height="28" rx="5" fill="#18231f" />
        </g>
        {[624, 636, 796, 808].map((x) => <circle key={x} cx={x} cy="146" r="4" fill="#bfc9c4" opacity="0.85" />)}
        {[858, 870, 882, 894].map((x) => <circle key={x} cx={x} cy="254" r="4" fill="#bfc9c4" opacity="0.82" />)}
        <path d="M534 146V233" stroke="url(#pipeMetal)" strokeOpacity="0.92" strokeWidth="36" strokeLinecap="round" />
        <path d="M534 146V233" stroke="#6dbe45" strokeOpacity="0.34" strokeWidth="8" strokeLinecap="round" />
        <rect x="508" y="216" width="52" height="26" rx="5" fill="#16231e" stroke="#dfe9e4" strokeOpacity="0.44" strokeWidth="3" />

        {/* Fuel conveyor */}
        <g transform="translate(58 438)">
          <path d="M28 122L365 34" stroke="#0d1512" strokeWidth="68" strokeLinecap="round" />
          <path d="M36 111L356 28" stroke="url(#conveyorMetal)" strokeWidth="42" strokeLinecap="round" />
          <path d="M18 94L355 7M45 144L385 55" stroke="#aab4ae" strokeOpacity="0.42" strokeWidth="8" strokeLinecap="round" />
          <path d="M44 134L376 47" stroke="#6dbe45" strokeOpacity="0.32" strokeWidth="4" strokeLinecap="round" />
          {[48, 92, 136, 180, 224, 268, 312].map((x, i) => (
            <g key={x} transform={`rotate(-14 ${x} ${117 - i * 11})`}>
              <circle cx={x} cy={117 - i * 11} r="15" fill="#111a16" stroke="#dfe9e4" strokeOpacity="0.4" strokeWidth="4" />
              <circle cx={x} cy={117 - i * 11} r="5" fill="#7f8984" />
            </g>
          ))}
          <path d="M332 -2L424 -30L448 36L365 50Z" fill="#19231f" stroke="#dfe9e4" strokeOpacity="0.3" strokeWidth="3" />
          <path d="M350 4L423 -17" stroke="#6dbe45" strokeOpacity="0.24" strokeWidth="5" strokeLinecap="round" />
          <MotionG animate={conveyorFlow} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
            {[68, 114, 160, 206, 252, 298, 342].map((x, i) => <rect key={x} x={x} y={101 - i * 12} width="36" height="16" rx="5" fill="#bd8d52" stroke="#e9c88c" strokeOpacity="0.35" transform={`rotate(-14 ${x} ${101 - i * 12})`} />)}
          </MotionG>
        </g>

        {/* Boiler */}
        <g transform="translate(242 235) scale(1.08)">
          <ellipse cx="254" cy="326" rx="306" ry="62" fill="#000" opacity="0.34" />
          <rect x="58" y="268" width="46" height="104" rx="10" fill="#111a16" stroke="#dfe9e4" strokeOpacity="0.22" />
          <rect x="430" y="268" width="46" height="104" rx="10" fill="#111a16" stroke="#dfe9e4" strokeOpacity="0.22" />
          <rect x="20" y="92" width="552" height="230" rx="115" fill="url(#boilerShell)" stroke="#dfe9e4" strokeOpacity="0.38" strokeWidth="4" />
          <path d="M104 113H490" stroke="url(#boilerHighlight)" strokeWidth="16" strokeLinecap="round" opacity="0.72" />
          <path d="M124 151H520M124 268H520" stroke="#fff" strokeOpacity="0.12" strokeWidth="3" strokeDasharray="16 14" />
          <path d="M226 101V314M358 101V314" stroke="#0a0f0d" strokeOpacity="0.45" strokeWidth="3" />
          {[140, 176, 212, 248, 284, 320, 356, 392, 428, 464, 500].map((x) => <circle key={x} cx={x} cy="118" r="4" fill="#c8d1cc" opacity="0.66" />)}
          {[142, 188, 234, 280, 326, 372, 418, 464, 510].map((x) => <path key={x} d={`M${x} 314v18`} stroke="#6f7b74" strokeOpacity="0.65" strokeWidth="3" strokeLinecap="round" />)}
          <ellipse cx="78" cy="207" rx="78" ry="100" fill="#17231e" stroke="#dfe9e4" strokeOpacity="0.44" strokeWidth="4" />
          <MotionCircle cx="78" cy="207" r="56" fill="url(#fireGlow)" filter="url(#softGreenBlur)" animate={glowPulse} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '78px 207px' }} />
          <path d="M44 207C62 174 94 174 112 207C92 191 67 191 44 207Z" fill="#fff3bd" opacity="0.38" />
          <rect x="286" y="166" width="90" height="90" rx="12" fill="#16211d" stroke="#dfe9e4" strokeOpacity="0.34" strokeWidth="3" />
          <path d="M286 188H376M308 166V256" stroke="#dfe9e4" strokeOpacity="0.16" strokeWidth="2" />
          <rect x="408" y="170" width="92" height="88" rx="14" fill="#0d1512" stroke="#dfe9e4" strokeOpacity="0.35" strokeWidth="3" />
          <circle cx="434" cy="196" r="8" fill="#6dbe45" /><circle cx="470" cy="196" r="8" fill="#dfe9e4" opacity="0.65" />
          <path d="M430 225H478M430 239H464" stroke="#dfe9e4" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
          <path d="M108 207H5" stroke="#6dbe45" strokeOpacity="0.48" strokeWidth="22" strokeLinecap="round" />
        </g>

        {/* Pressure gauge */}
        <g transform="translate(448 194)">
          <circle cx="0" cy="0" r="50" fill="#101814" stroke="#dfe9e4" strokeOpacity="0.58" strokeWidth="5" />
          <circle cx="0" cy="0" r="36" fill="#f4fbf7" opacity="0.88" />
          {[...Array(13)].map((_, i) => <path key={i} d="M0 -31V-38" stroke="#15211c" strokeWidth={i % 3 === 0 ? 3 : 2} strokeLinecap="round" transform={`rotate(${-120 + i * 20})`} />)}
          <MotionPath d="M0 0L21 -22" stroke="#1b2a22" strokeWidth="5" strokeLinecap="round" animate={gaugeNeedle} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '0px 0px' }} />
          <circle cx="0" cy="0" r="5" fill="#6dbe45" />
          <path d="M-18 22H20" stroke="#16231e" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Operator */}
        <g transform="translate(765 434)">
          <circle cx="40" cy="34" r="23" fill="#111a16" />
          <path d="M14 31C25 9 58 9 70 31H14Z" fill="#6dbe45" opacity="0.9" />
          <path d="M18 82C19 52 61 52 64 82L75 176H8L18 82Z" fill="#111a16" stroke="#dfe9e4" strokeOpacity="0.16" />
          <path d="M22 101L-16 139M60 101L102 132" stroke="#111a16" strokeWidth="16" strokeLinecap="round" />
          <path d="M23 176L14 232M60 176L73 232" stroke="#111a16" strokeWidth="18" strokeLinecap="round" />
        </g>

        {/* Animated steam */}
        {[0, 1, 2, 3].map((item) => (
          <MotionPath key={item} d={`M${512 + item * 38} 238C${480 + item * 22} 196 ${548 + item * 25} 165 ${522 + item * 36} 104`} stroke="#fff" strokeOpacity="0.48" strokeWidth="10" strokeLinecap="round" animate={steamFlow} transition={{ duration: 4.2 + item * 0.2, repeat: Infinity, ease: 'easeInOut', delay: item * 0.45 }} />
        ))}
      </svg>
    </div>
  );
}
