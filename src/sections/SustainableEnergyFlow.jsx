import { motion, useReducedMotion } from 'framer-motion';
import { Activity, Factory, Flame, Gauge, HardHat, Leaf, PackageCheck, ShieldCheck, Settings, Trees } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';

const flowStages = [
  {
    label: '01',
    title: 'Waste Wood',
    description: 'Furniture offcuts, sawdust, and waste biomass.',
    Icon: Trees,
  },
  {
    label: '02',
    title: 'Biomass Fuel',
    description: 'Wood briquettes and wood pellets prepared for boiler use.',
    Icon: PackageCheck,
  },
  {
    label: '03',
    title: 'Industrial Boiler',
    description: 'Professional boiler operation managed for dependable steam output.',
    Icon: Flame,
    featured: true,
  },
  {
    label: '04',
    title: 'Steam Supply',
    description: 'Reliable steam generation for factory operations.',
    Icon: Activity,
  },
  {
    label: '05',
    title: 'Factory Production',
    description: 'Production continues while BEP manages the energy process.',
    Icon: Factory,
  },
];

const managementCards = [
  { title: 'Boiler Operators', Icon: HardHat },
  { title: 'Biomass Fuel Supply', Icon: Leaf },
  { title: 'Steam Reliability', Icon: Gauge },
  { title: 'Daily Monitoring', Icon: Activity },
  { title: 'Safety Compliance', Icon: ShieldCheck },
  { title: 'Maintenance Coordination', Icon: Settings },
];

const particlePositions = [
  'left-[7%] top-[24%]',
  'left-[18%] top-[78%]',
  'left-[31%] top-[17%]',
  'left-[48%] top-[84%]',
  'left-[64%] top-[20%]',
  'left-[77%] top-[72%]',
  'left-[91%] top-[31%]',
];

const stageVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function FloatingParticles({ reduceMotion }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particlePositions.map((position, index) => (
        <motion.span
          key={position}
          className={`absolute h-1.5 w-1.5 rounded-full bg-primary/60 shadow-[0_0_20px_rgba(109,190,69,0.9)] ${position}`}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, -16, 0],
                  x: [0, index % 2 === 0 ? 8 : -8, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.55, 1],
                }
          }
          transition={{ duration: 4.5 + index * 0.28, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }}
        />
      ))}
    </div>
  );
}

function BoilerIllustration({ reduceMotion }) {
  return (
    <div aria-hidden="true" className="relative mx-auto h-36 w-full max-w-[15rem] sm:h-40">
      <div className="absolute left-1/2 top-0 flex -translate-x-1/2 gap-3">
        {[0, 1, 2].map((item) => (
          <motion.span
            key={item}
            className="h-12 w-3 rounded-full bg-gradient-to-t from-white/0 via-white/35 to-white/0 blur-[1px]"
            animate={reduceMotion ? undefined : { y: [16, -10, 16], opacity: [0, 0.55, 0], scaleY: [0.7, 1.15, 0.7] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: item * 0.35 }}
          />
        ))}
      </div>
      <div className="absolute inset-x-5 bottom-6 h-24 rounded-[2rem] border border-primary/35 bg-gradient-to-br from-[#26352f] via-[#111d18] to-[#07110d] shadow-[inset_0_0_32px_rgba(255,255,255,0.08),0_0_70px_rgba(109,190,69,0.28)]" />
      <div className="absolute bottom-9 left-1/2 h-14 w-14 -translate-x-1/2 rounded-full border-4 border-[#6dbe45]/50 bg-[#07110d] shadow-[inset_0_0_20px_rgba(109,190,69,0.25),0_0_30px_rgba(109,190,69,0.35)]" />
      <div className="absolute bottom-12 left-8 h-9 w-6 rounded bg-[#1d2c25] shadow-[12rem_0_0_#1d2c25]" />
      <div className="absolute bottom-3 left-8 right-8 h-4 rounded-full bg-[#0a1711]" />
      <div className="absolute bottom-24 right-9 h-9 w-8 rounded-t-lg border border-primary/20 bg-[#1b2a23]" />
    </div>
  );
}

function EnergyLine({ reduceMotion }) {
  const animate = reduceMotion ? undefined : { x: ['-8%', '108%'] };

  return (
    <>
      <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-white/15 lg:block" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[8%] top-1/2 hidden h-[3px] w-[18%] rounded-full bg-gradient-to-r from-transparent via-[#b6ff81] to-transparent shadow-[0_0_24px_rgba(109,190,69,0.9)] lg:block"
        animate={animate}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
      />
      <div aria-hidden="true" className="absolute bottom-16 left-8 top-16 w-px bg-white/15 lg:hidden" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[31px] top-16 h-24 w-[3px] rounded-full bg-gradient-to-b from-transparent via-[#b6ff81] to-transparent shadow-[0_0_24px_rgba(109,190,69,0.9)] lg:hidden"
        animate={reduceMotion ? undefined : { y: ['0%', '520%'] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'linear' }}
      />
    </>
  );
}

function FlowStage({ stage, index, reduceMotion }) {
  const Icon = stage.Icon;

  return (
    <motion.article
      variants={stageVariants}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`relative z-10 flex gap-5 rounded-[1.75rem] border backdrop-blur lg:flex-col lg:items-center lg:text-center ${
        stage.featured
          ? 'border-primary/45 bg-[#101e17]/95 p-7 shadow-[0_34px_100px_rgba(109,190,69,0.22)] lg:-mt-10 lg:min-h-[27rem] lg:scale-110 lg:p-8'
          : 'border-white/10 bg-white/[0.055] p-5 shadow-[0_22px_70px_rgba(0,0,0,0.24)] lg:min-h-[18rem] lg:p-6'
      }`}
    >
      <div className={`flex shrink-0 items-center justify-center rounded-2xl border ${stage.featured ? 'h-16 w-16 border-primary/45 bg-primary/18 text-primary' : 'h-12 w-12 border-white/10 bg-white/8 text-primary'}`}>
        <Icon className={stage.featured ? 'h-8 w-8' : 'h-6 w-6'} strokeWidth={2.1} />
      </div>
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-primary/90">{stage.label}</p>
        <h3 className={`mt-2 font-extrabold tracking-tight text-white ${stage.featured ? 'text-3xl' : 'text-xl'}`}>{stage.title}</h3>
        {stage.featured && <BoilerIllustration reduceMotion={reduceMotion} />}
        <p className={`mt-3 leading-7 text-white/68 ${stage.featured ? 'text-base' : 'text-sm'}`}>{stage.description}</p>
      </div>
      {index < flowStages.length - 1 && <span aria-hidden="true" className="absolute -bottom-8 left-[31px] h-8 w-px bg-white/15 lg:-right-5 lg:left-auto lg:top-1/2 lg:h-px lg:w-5" />}
    </motion.article>
  );
}

export function SustainableEnergyFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#07100d] py-24 text-white md:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(109,190,69,0.23),transparent_30%),radial-gradient(circle_at_52%_45%,rgba(109,190,69,0.16),transparent_24%),radial-gradient(circle_at_86%_30%,rgba(63,131,248,0.12),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-30" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <FloatingParticles reduceMotion={reduceMotion} />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-primary">Sustainable Boiler Energy Flow</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-6xl">From Waste Wood to Reliable Factory Steam</h2>
          <p className="mt-6 text-lg leading-8 text-white/72 md:text-xl">Bio Energy Partners manages the complete energy journey — from sustainable biomass fuel handling to professional boiler operation and dependable steam supply.</p>
        </motion.div>

        <div className="relative mt-16 rounded-[2.25rem] border border-white/10 bg-black/18 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.34)] md:p-8 lg:mt-24 lg:p-10">
          <EnergyLine reduceMotion={reduceMotion} />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.16 } } }}
            className="grid gap-8 lg:grid-cols-[0.95fr_0.95fr_1.35fr_0.95fr_0.95fr] lg:items-center lg:gap-5"
          >
            {flowStages.map((stage, index) => (
              <FlowStage key={stage.title} stage={stage} index={index} reduceMotion={reduceMotion} />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mt-16 md:mt-20"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-primary">What BEP Manages</p>
            <h3 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Boiler operations handled with industrial discipline.</h3>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {managementCards.map(({ title, Icon }) => (
              <div key={title} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-primary/12 text-primary">
                  <Icon className="h-6 w-6" strokeWidth={2.1} />
                </div>
                <p className="font-bold text-white">{title}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: reduceMotion ? 0 : 0.1 }}
          className="mx-auto mt-16 flex max-w-4xl flex-col items-center text-center"
        >
          <p className="text-3xl font-extrabold tracking-tight text-white md:text-5xl">Cleaner Energy. Reliable Steam. Continuous Production.</p>
          <PrimaryButton to="/contact" className="mt-9 shadow-[0_18px_55px_rgba(109,190,69,0.28)]">Discuss Boiler Operation</PrimaryButton>
        </motion.div>
      </Container>
    </section>
  );
}
