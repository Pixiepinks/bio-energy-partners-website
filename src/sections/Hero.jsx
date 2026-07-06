import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Flame, Gauge, Leaf, Waves } from 'lucide-react';
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
  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="relative min-h-[520px] lg:min-h-[660px]"
      aria-label="Industrial biomass boiler operation illustration"
    >
      <motion.div animate={shouldReduceMotion ? undefined : { rotate: [0, 3, 0], y: [0, -10, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-x-8 top-10 h-[430px] rounded-[3rem] bg-[linear-gradient(145deg,rgba(109,190,69,0.22),rgba(255,255,255,0.05)_50%,rgba(9,18,17,0.2))] blur-sm" />
      <div className="absolute inset-x-4 top-20 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-2xl md:inset-x-10">
        <div className="relative h-[430px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_35%_18%,rgba(109,190,69,0.28),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
          <div className="absolute bottom-20 left-10 right-8 h-24 border-b-4 border-white/25">
            <div className="absolute bottom-0 left-0 h-24 w-24 rounded-t-3xl bg-white/14" />
            <div className="absolute bottom-0 left-28 h-36 w-28 rounded-t-[2rem] bg-white/12" />
            <div className="absolute bottom-0 left-64 h-28 w-36 rounded-t-3xl bg-white/10" />
            <div className="absolute bottom-24 left-36 h-28 w-5 rounded-full bg-white/18" />
            <div className="absolute bottom-36 left-32 h-3 w-14 rounded-full bg-primary/70 blur-sm" />
          </div>

          <div className="absolute bottom-16 right-16 h-44 w-36 rounded-[2rem] border border-white/15 bg-[#17231f] shadow-2xl">
            <div className="absolute inset-x-5 top-5 h-24 rounded-2xl bg-[linear-gradient(180deg,rgba(109,190,69,0.42),rgba(109,190,69,0.08))]" />
            <div className="absolute -right-8 top-16 h-20 w-12 rounded-r-2xl border-y border-r border-white/15" />
            <Gauge className="absolute left-7 top-10 text-white/75" size={34} />
            <Flame className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary" size={44} />
          </div>

          <motion.div animate={shouldReduceMotion ? undefined : { opacity: [0.45, 1, 0.45], scaleX: [0.92, 1, 0.92] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-16 top-20 h-44 w-[70%] origin-left rounded-full border-t-2 border-primary/60" />
          <motion.div animate={shouldReduceMotion ? undefined : { x: [0, 16, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-16 top-28 flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-bold text-primary">
            <Waves size={16} /> Energy flow
          </motion.div>

          <div className="absolute bottom-9 left-8 flex gap-2">
            {Array.from({ length: 13 }).map((_, index) => (
              <span key={index} className="h-4 w-7 rounded-full bg-[linear-gradient(135deg,#9b6b34,#d8ad65)] shadow-[0_8px_18px_rgba(0,0,0,0.22)]" />
            ))}
          </div>
        </div>
      </div>

      <motion.div animate={shouldReduceMotion ? undefined : { y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-0 top-14 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur-xl">
        <Leaf className="mb-3 text-primary" />
        <p className="text-sm font-bold">Biomass Fuel<br />Managed</p>
      </motion.div>
      <motion.div animate={shouldReduceMotion ? undefined : { y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-16 left-0 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-soft backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.2em] text-white/55">Operation</p>
        <p className="mt-1 font-poppins text-2xl font-bold text-primary">24/7</p>
      </motion.div>
    </motion.div>
  );
}
