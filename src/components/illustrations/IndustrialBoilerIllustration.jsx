import { motion, useReducedMotion } from 'framer-motion';

const MotionCircle = motion.circle;
const MotionPath = motion.path;
const MotionEllipse = motion.ellipse;
const MotionRect = motion.rect;

export function IndustrialBoilerIllustration({ className = '' }) {
  const reduceMotion = useReducedMotion();

  const particleAnimation = reduceMotion
    ? undefined
    : {
        offsetDistance: ['0%', '100%'],
        opacity: [0, 1, 1, 0],
      };

  const steamAnimation = reduceMotion
    ? undefined
    : {
        y: [22, -34, 22],
        opacity: [0, 0.72, 0],
        pathLength: [0.35, 1, 0.35],
      };

  return (
    <div className={`relative w-full ${className}`} aria-label="Industrial biomass boiler energy flow illustration" role="img">
      <svg
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full overflow-visible"
        fill="none"
      >
        <defs>
          <radialGradient id="bep-boiler-glow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#b6ff81" stopOpacity="0.95" />
            <stop offset="42%" stopColor="#6dbe45" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6dbe45" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="bep-boiler-body" x1="350" x2="835" y1="210" y2="385" gradientUnits="userSpaceOnUse">
            <stop stopColor="#334139" />
            <stop offset="0.48" stopColor="#111916" />
            <stop offset="1" stopColor="#2b3731" />
          </linearGradient>
          <linearGradient id="bep-green-line" x1="120" x2="1050" y1="356" y2="356" gradientUnits="userSpaceOnUse">
            <stop stopColor="#315f39" stopOpacity="0.15" />
            <stop offset="0.46" stopColor="#9cff62" />
            <stop offset="1" stopColor="#6dbe45" stopOpacity="0.25" />
          </linearGradient>
          <filter id="bep-soft-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <path id="bep-particle-path" d="M130 373 C250 338 305 335 384 332 C455 329 505 328 600 330 C725 332 818 333 910 328 C982 324 1028 308 1085 280" />
        </defs>

        <rect x="42" y="72" width="1116" height="456" rx="42" fill="#07100d" opacity="0.38" />
        <path d="M70 470 H1130" stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2" />
        <path d="M125 395 H1095" stroke="url(#bep-green-line)" strokeWidth="8" strokeLinecap="round" opacity="0.72" />
        <path d="M125 395 H1095" stroke="#b6ff81" strokeOpacity="0.22" strokeWidth="24" strokeLinecap="round" filter="url(#bep-soft-glow)" />

        {[0, 1, 2, 3, 4].map((item) => (
          <MotionCircle
            key={item}
            r={item % 2 ? 5 : 7}
            fill="#b6ff81"
            filter="url(#bep-soft-glow)"
            style={{ offsetPath: 'path("M130 373 C250 338 305 335 384 332 C455 329 505 328 600 330 C725 332 818 333 910 328 C982 324 1028 308 1085 280")' }}
            animate={particleAnimation}
            transition={{ duration: 5.4, repeat: Infinity, ease: 'linear', delay: item * 0.72 }}
          />
        ))}

        <g opacity="0.95">
          <path d="M78 412 L305 352" stroke="#9aa3a0" strokeOpacity="0.62" strokeWidth="18" strokeLinecap="round" />
          <path d="M95 424 L318 365" stroke="#2f3a35" strokeWidth="34" strokeLinecap="round" />
          <path d="M100 418 L316 362" stroke="#6dbe45" strokeOpacity="0.55" strokeWidth="5" strokeLinecap="round" />
          {[92, 132, 172, 212, 252].map((x, i) => (
            <rect key={x} x={x} y={405 - i * 11} width="36" height="9" rx="4" fill="#c49a5c" transform={`rotate(-15 ${x} ${405 - i * 11})`} opacity="0.9" />
          ))}
          <circle cx="108" cy="438" r="17" fill="#121b17" stroke="#cfd7d4" strokeOpacity="0.45" strokeWidth="3" />
          <circle cx="272" cy="395" r="17" fill="#121b17" stroke="#cfd7d4" strokeOpacity="0.45" strokeWidth="3" />
        </g>

        <g>
          {[
            [82, 335, 30, 13], [116, 312, 22, 11], [154, 337, 27, 12], [194, 305, 34, 13], [236, 330, 24, 10],
          ].map(([x, y, w, h]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} rx="5" fill="#b8864f" stroke="#e9c88c" strokeOpacity="0.35" transform={`rotate(${x % 2 ? -12 : 14} ${x} ${y})`} />
          ))}
          <g fill="#8ccf64" opacity="0.92">
            <circle cx="92" cy="374" r="7" /><circle cx="113" cy="365" r="5" /><circle cx="136" cy="380" r="6" />
            <circle cx="165" cy="362" r="5" /><circle cx="201" cy="374" r="7" /><circle cx="232" cy="365" r="5" />
          </g>
        </g>

        <g transform="translate(342 188)">
          <ellipse cx="236" cy="254" rx="268" ry="52" fill="#000" opacity="0.32" />
          <rect x="39" y="234" width="32" height="83" rx="8" fill="#111a16" stroke="#dbe5e0" strokeOpacity="0.2" />
          <rect x="394" y="234" width="32" height="83" rx="8" fill="#111a16" stroke="#dbe5e0" strokeOpacity="0.2" />
          <rect x="38" y="92" width="472" height="184" rx="92" fill="url(#bep-boiler-body)" stroke="#dce7e2" strokeOpacity="0.32" strokeWidth="3" />
          <path d="M103 106 H444" stroke="#ffffff" strokeOpacity="0.16" strokeWidth="3" strokeLinecap="round" />
          <path d="M105 258 H430" stroke="#6dbe45" strokeOpacity="0.42" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="78" cy="184" rx="72" ry="92" fill="#17231e" stroke="#dce7e2" strokeOpacity="0.36" strokeWidth="3" />
          <MotionEllipse
            cx="78"
            cy="184"
            rx="44"
            ry="54"
            fill="url(#bep-boiler-glow)"
            animate={reduceMotion ? undefined : { opacity: [0.55, 0.95, 0.55], scale: [0.96, 1.05, 0.96] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '78px 184px' }}
          />
          <path d="M6 184 H-70" stroke="#6dbe45" strokeWidth="18" strokeLinecap="round" />
          <path d="M510 184 H590 C626 184 644 170 674 150" stroke="#dce7e2" strokeOpacity="0.55" strokeWidth="26" strokeLinecap="round" />
          <path d="M510 184 H590 C626 184 644 170 674 150" stroke="#6dbe45" strokeOpacity="0.42" strokeWidth="8" strokeLinecap="round" />
          <path d="M250 92 V40 H332 V92" fill="#16231e" stroke="#dce7e2" strokeOpacity="0.32" strokeWidth="3" />
          <circle cx="196" cy="68" r="31" fill="#111a16" stroke="#dce7e2" strokeOpacity="0.42" strokeWidth="3" />
          <path d="M196 68 L209 54" stroke="#b6ff81" strokeWidth="4" strokeLinecap="round" />
          <path d="M184 78 H208" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round" />
          <path d="M376 92 V54" stroke="#dce7e2" strokeOpacity="0.42" strokeWidth="14" strokeLinecap="round" />
          <path d="M354 54 H398" stroke="#6dbe45" strokeOpacity="0.62" strokeWidth="10" strokeLinecap="round" />
          <rect x="352" y="158" width="78" height="76" rx="12" fill="#0d1512" stroke="#dce7e2" strokeOpacity="0.34" strokeWidth="2" />
          <circle cx="374" cy="181" r="7" fill="#6dbe45" /><circle cx="402" cy="181" r="7" fill="#dbe5e0" opacity="0.7" />
          <path d="M368 207 H414 M368 220 H402" stroke="#dbe5e0" strokeOpacity="0.28" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(950 215)">
          <MotionRect
            x="18" y="115" width="154" height="154" rx="10" fill="#111a16" stroke="#dce7e2" strokeOpacity="0.26" strokeWidth="3"
            animate={reduceMotion ? undefined : { opacity: [0.78, 1, 0.78] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <path d="M18 115 L56 84 L92 115 L130 84 L172 115" fill="#16231e" stroke="#dce7e2" strokeOpacity="0.26" strokeWidth="3" />
          <rect x="54" y="153" width="25" height="34" fill="#6dbe45" opacity="0.55" />
          <rect x="106" y="153" width="25" height="34" fill="#6dbe45" opacity="0.45" />
          <path d="M45 220 H148 M66 220 L90 200 H138" stroke="#b6ff81" strokeOpacity="0.52" strokeWidth="5" strokeLinecap="round" />
          <path d="M142 84 V30 H168 V91" fill="#111a16" stroke="#dce7e2" strokeOpacity="0.24" strokeWidth="3" />
        </g>

        {[0, 1, 2].map((item) => (
          <MotionPath
            key={item}
            d={`M${590 + item * 45} 195 C${565 + item * 42} 140 ${625 + item * 30} 112 ${600 + item * 42} 62`}
            stroke="#ffffff"
            strokeOpacity="0.48"
            strokeWidth="10"
            strokeLinecap="round"
            animate={steamAnimation}
            transition={{ duration: 4.3 + item * 0.35, repeat: Infinity, ease: 'easeInOut', delay: item * 0.55 }}
          />
        ))}
      </svg>
    </div>
  );
}
