import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Factory, Flame, Leaf, PackageCheck, Trees } from 'lucide-react';
import { useRef } from 'react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';

const processSteps = [
  {
    step: 'Step 1',
    title: 'Waste Wood',
    description: 'Furniture offcuts, sawdust and responsibly sourced waste wood.',
    Icon: Trees,
  },
  {
    step: 'Step 2',
    title: 'Wood Briquettes & Wood Pellets',
    description: 'Processed into efficient biomass fuel with consistent quality.',
    Icon: PackageCheck,
  },
  {
    step: 'Step 3',
    title: 'Boiler Operation',
    description: 'Professional boiler operation managed by Bio Energy Partners.',
    Icon: Flame,
  },
  {
    step: 'Step 4',
    title: 'Reliable Steam',
    description: 'Continuous steam generation supporting uninterrupted production.',
    Icon: Leaf,
  },
  {
    step: 'Step 5',
    title: 'Factory Production',
    description: 'Factories focus on manufacturing while BEP manages the energy.',
    Icon: Factory,
  },
];

const particlePositions = [
  'left-[8%] top-[18%]',
  'left-[18%] top-[72%]',
  'left-[36%] top-[28%]',
  'left-[58%] top-[80%]',
  'left-[76%] top-[20%]',
  'left-[88%] top-[60%]',
];

function FloatingParticles({ reduceMotion }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particlePositions.map((position, index) => (
        <motion.span
          key={position}
          className={`absolute h-1.5 w-1.5 rounded-full bg-primary/50 shadow-[0_0_18px_rgba(109,190,69,0.9)] ${position}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -18, 0],
                  opacity: [0.25, 0.85, 0.25],
                  scale: [1, 1.45, 1],
                }
          }
          transition={{ duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut', delay: index * 0.4 }}
        />
      ))}
    </div>
  );
}

function ProcessNode({ step, title, description, Icon, index, reduceMotion }) {
  const isLeftAligned = index % 2 === 0;
  const alignment = isLeftAligned ? 'md:pr-20 md:text-right' : 'md:col-start-2 md:pl-20';
  const dotAlignment = isLeftAligned
    ? 'md:right-[-10px] md:translate-x-1/2'
    : 'md:left-[-10px] md:-translate-x-1/2';

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 28, scale: reduceMotion ? 1 : 0.98 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`relative min-w-[82vw] rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur md:min-w-0 md:p-8 ${alignment}`}
    >
      <motion.div
        className={`absolute -left-2 top-8 hidden h-5 w-5 rounded-full border border-primary/50 bg-[#07150f] shadow-[0_0_0_8px_rgba(109,190,69,0.08),0_0_34px_rgba(109,190,69,0.65)] md:block ${dotAlignment}`}
        animate={reduceMotion ? undefined : { boxShadow: ['0 0 0 8px rgba(109,190,69,0.08), 0 0 22px rgba(109,190,69,0.45)', '0 0 0 14px rgba(109,190,69,0.16), 0 0 42px rgba(109,190,69,0.75)', '0 0 0 8px rgba(109,190,69,0.08), 0 0 22px rgba(109,190,69,0.45)'] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.18 }}
      />
      <div className={`flex items-start gap-5 ${isLeftAligned ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-primary shadow-[0_0_34px_rgba(109,190,69,0.25)]">
          <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={2.1} />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/90">{step}</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

export function SustainableEnergyFlow() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 70%', 'end 55%'] });
  const desktopLineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const mobileLineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#06110d] py-24 text-white md:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(109,190,69,0.22),transparent_34%),radial-gradient(circle_at_82%_26%,rgba(63,131,248,0.14),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <FloatingParticles reduceMotion={reduceMotion} />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-primary">Our Sustainable Energy Flow</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">From Waste Wood to Reliable Industrial Steam</h2>
          <p className="mt-6 text-lg leading-8 text-white/72 md:text-xl">Bio Energy Partners transforms waste biomass into dependable industrial energy through sustainable fuel management and professional boiler operation.</p>
        </motion.div>

        <div className="relative mt-16 md:mt-24">
          <div aria-hidden="true" className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-white/10 md:block">
            <motion.div className="h-full origin-top bg-gradient-to-b from-primary via-[#a7f36f] to-primary shadow-[0_0_28px_rgba(109,190,69,0.75)]" style={{ scaleY: reduceMotion ? 1 : desktopLineScale }} />
          </div>

          <div className="md:hidden">
            <div aria-hidden="true" className="absolute left-0 top-1/2 h-px w-full bg-white/10">
              <motion.div className="h-full origin-left bg-gradient-to-r from-primary via-[#a7f36f] to-primary shadow-[0_0_28px_rgba(109,190,69,0.75)]" style={{ scaleX: reduceMotion ? 1 : mobileLineScale }} />
            </div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.18 } } }}
            className="flex gap-5 overflow-x-auto pb-8 [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-x-0 md:gap-y-10 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
          >
            {processSteps.map((item, index) => (
              <ProcessNode key={item.step} index={index} reduceMotion={reduceMotion} {...item} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.15 }}
          className="mx-auto mt-16 flex max-w-4xl flex-col items-center text-center"
        >
          <p className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">Cleaner Energy.<br className="hidden md:block" /> Reliable Steam.<br className="hidden md:block" /> Continuous Production.</p>
          <PrimaryButton to="/contact" className="mt-9 shadow-[0_18px_55px_rgba(109,190,69,0.28)]">Discuss Your Boiler Operation</PrimaryButton>
        </motion.div>
      </Container>
    </section>
  );
}
