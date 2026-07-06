import { motion, useReducedMotion } from 'framer-motion';

const MotionCircle = motion.circle;
const MotionPath = motion.path;
const MotionRect = motion.rect;
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
          <linearGradient id="boilerShell" x1="238" x2="720" y1="290" y2="485" gradientUnits="userSpaceOnUse">
            <stop stopColor="#39463f" />
            <stop offset="0.48" stopColor="#121b17" />
            <stop offset="1" stopColor="#2d3932" />
          </linearGradient>
          <linearGradient id="pipeLine" x1="500" x2="900" y1="165" y2="165" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dfe9e4" stopOpacity="0.78" />
            <stop offset="1" stopColor="#6dbe45" stopOpacity="0.5" />
          </linearGradient>
          <filter id="softGreenBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <rect x="34" y="42" width="912" height="660" rx="48" fill="#07100d" />
        <path d="M88 625H895" stroke="#fff" strokeOpacity="0.1" strokeWidth="2" />
        <path d="M112 112V625M260 112V625M408 112V625M556 112V625M704 112V625M852 112V625" stroke="#fff" strokeOpacity="0.035" />
        <path d="M88 240H895M88 370H895M88 500H895" stroke="#fff" strokeOpacity="0.04" />
        <MotionCircle cx="480" cy="404" r="252" fill="url(#roomGlow)" filter="url(#softGreenBlur)" animate={glowPulse} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '480px 404px' }} />

        {/* Steam header and pipework */}
        <path d="M500 155H852C882 155 898 171 898 201V258" stroke="url(#pipeLine)" strokeWidth="32" strokeLinecap="round" />
        <path d="M500 155H852C882 155 898 171 898 201V258" stroke="#ffffff" strokeOpacity="0.18" strokeWidth="8" strokeLinecap="round" />
        <rect x="630" y="104" width="210" height="58" rx="29" fill="#16231e" stroke="#dfe9e4" strokeOpacity="0.28" strokeWidth="3" />
        <path d="M660 133H810" stroke="#6dbe45" strokeOpacity="0.65" strokeWidth="7" strokeLinecap="round" />
        <path d="M530 155V230" stroke="#dfe9e4" strokeOpacity="0.48" strokeWidth="28" strokeLinecap="round" />
        <path d="M530 155V230" stroke="#6dbe45" strokeOpacity="0.45" strokeWidth="8" strokeLinecap="round" />

        {/* Fuel conveyor */}
        <g transform="translate(85 450)">
          <path d="M18 108L306 35" stroke="#202a25" strokeWidth="46" strokeLinecap="round" />
          <path d="M28 98L296 30" stroke="#7f8984" strokeOpacity="0.42" strokeWidth="16" strokeLinecap="round" />
          <MotionG animate={conveyorFlow} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}>
            {[38, 82, 126, 170, 214, 258].map((x, i) => <rect key={x} x={x} y={89 - i * 11} width="34" height="13" rx="4" fill="#bd8d52" transform={`rotate(-14 ${x} ${89 - i * 11})`} />)}
          </MotionG>
          <circle cx="38" cy="111" r="20" fill="#101814" stroke="#dfe9e4" strokeOpacity="0.35" strokeWidth="4" />
          <circle cx="286" cy="48" r="20" fill="#101814" stroke="#dfe9e4" strokeOpacity="0.35" strokeWidth="4" />
        </g>

        {/* Boiler */}
        <g transform="translate(280 260)">
          <ellipse cx="232" cy="298" rx="275" ry="55" fill="#000" opacity="0.34" />
          <rect x="44" y="248" width="42" height="92" rx="10" fill="#111a16" stroke="#dfe9e4" strokeOpacity="0.2" />
          <rect x="390" y="248" width="42" height="92" rx="10" fill="#111a16" stroke="#dfe9e4" strokeOpacity="0.2" />
          <rect x="18" y="94" width="500" height="206" rx="103" fill="url(#boilerShell)" stroke="#dfe9e4" strokeOpacity="0.34" strokeWidth="4" />
          <ellipse cx="76" cy="197" rx="72" ry="92" fill="#17231e" stroke="#dfe9e4" strokeOpacity="0.42" strokeWidth="4" />
          <MotionCircle cx="76" cy="197" r="48" fill="url(#roomGlow)" filter="url(#softGreenBlur)" animate={glowPulse} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '76px 197px' }} />
          <path d="M120 112H450" stroke="#fff" strokeOpacity="0.16" strokeWidth="4" strokeLinecap="round" />
          <path d="M128 280H430" stroke="#6dbe45" strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
          <rect x="348" y="168" width="92" height="82" rx="14" fill="#0d1512" stroke="#dfe9e4" strokeOpacity="0.35" strokeWidth="3" />
          <circle cx="374" cy="193" r="8" fill="#6dbe45" /><circle cx="410" cy="193" r="8" fill="#dfe9e4" opacity="0.65" />
          <path d="M370 222H418M370 235H404" stroke="#dfe9e4" strokeOpacity="0.3" strokeWidth="4" strokeLinecap="round" />
        </g>

        {/* Pressure gauge */}
        <g transform="translate(430 194)">
          <circle cx="0" cy="0" r="45" fill="#101814" stroke="#dfe9e4" strokeOpacity="0.55" strokeWidth="4" />
          <circle cx="0" cy="0" r="32" fill="#16231e" />
          <MotionPath d="M0 0L18 -19" stroke="#b6ff81" strokeWidth="5" strokeLinecap="round" animate={gaugeNeedle} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }} style={{ transformOrigin: '0px 0px' }} />
          <path d="M-18 20H19" stroke="#fff" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
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
          <MotionPath key={item} d={`M${512 + item * 38} 258C${480 + item * 22} 210 ${548 + item * 25} 178 ${522 + item * 36} 128`} stroke="#fff" strokeOpacity="0.48" strokeWidth="10" strokeLinecap="round" animate={steamFlow} transition={{ duration: 4.2 + item * 0.2, repeat: Infinity, ease: 'easeInOut', delay: item * 0.45 }} />
        ))}
      </svg>
    </div>
  );
}
