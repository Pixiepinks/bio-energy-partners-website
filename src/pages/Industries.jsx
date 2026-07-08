import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Coffee,
  CookingPot,
  Factory,
  Flame,
  Gauge,
  Hammer,
  Headphones,
  Milk,
  PackageCheck,
  Recycle,
  Shirt,
  Sparkles,
  Sprout,
  ThermometerSun,
} from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';
import { usePageMeta } from '../hooks/usePageMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const industries = [
  {
    title: 'Dairy & Milk Processing',
    icon: Milk,
    description: 'Reliable steam for hygienic milk processing, production continuity, and controlled thermal treatment.',
    applications: ['Pasteurization', 'CIP hot water', 'Yogurt & cheese processing'],
  },
  {
    title: 'Food Manufacturing',
    icon: CookingPot,
    description: 'Consistent biomass-fired steam for cooking, drying, sterilizing, and batch production lines.',
    applications: ['Cooking kettles', 'Tray drying', 'Retort sterilization'],
  },
  {
    title: 'Beverage Industry',
    icon: Coffee,
    description: 'Managed boiler operations supporting beverage blending, bottle washing, and hot process utilities.',
    applications: ['Bottle washing', 'Syrup heating', 'Process hot water'],
  },
  {
    title: 'Textile & Garment',
    icon: Shirt,
    description: 'Dependable steam for finishing floors, washing plants, dyeing support, and garment pressing.',
    applications: ['Steam ironing', 'Dyeing support', 'Washing & finishing'],
  },
  {
    title: 'Coconut Processing',
    icon: Sprout,
    description: 'Efficient steam generation for value-added coconut products with locally managed biomass fuel.',
    applications: ['Kernel drying', 'Oil processing', 'Desiccated coconut drying'],
  },
  {
    title: 'Furniture Manufacturing',
    icon: Hammer,
    description: 'Stable heat energy for kiln drying, wood treatment, and moisture-controlled manufacturing.',
    applications: ['Timber drying', 'Hot presses', 'Moisture conditioning'],
  },
  {
    title: 'Rubber & Chemical',
    icon: FlaskIcon,
    description: 'Process steam for controlled heat transfer, curing, cleaning, and chemical utility systems.',
    applications: ['Rubber curing', 'Tank heating', 'Line cleaning'],
  },
  {
    title: 'General Manufacturing',
    icon: Factory,
    description: 'End-to-end boiler management for factories that need dependable steam without operational complexity.',
    applications: ['Space heating', 'Process heating', 'Utility steam'],
  },
];

const workflow = ['Pasteurization', 'Drying', 'Cooking', 'Steam Heating', 'Sterilization', 'Process Heating'];

const comparisons = [
  ['Fuel shortages interrupt production', 'Planned biomass sourcing, storage discipline, and daily fuel coordination'],
  ['Boiler staffing is hard to supervise', 'Trained operators deployed with BEP operating routines and escalation support'],
  ['Steam pressure fluctuates during peak loads', 'Continuous monitoring keeps pressure, feedwater, and combustion stable'],
  ['Maintenance issues become downtime', 'Preventive checks, reporting, and rapid operational troubleshooting'],
];

const examples = [
  {
    sector: 'Dairy',
    title: 'Stable steam for morning processing peaks',
    copy: 'BEP structures fuel deliveries, operator shifts, and boiler monitoring around pasteurization windows so dairy plants can protect product quality.',
  },
  {
    sector: 'Garment',
    title: 'Reliable steam for finishing lines',
    copy: 'Garment facilities use managed boiler operations to maintain ironing, washing, and finishing throughput without distracting production teams.',
  },
  {
    sector: 'Furniture',
    title: 'Controlled heat for kiln drying',
    copy: 'Furniture manufacturers depend on consistent biomass steam and operating records to support predictable timber drying and production scheduling.',
  },
];

const kpis = [
  ['24/7', 'Operational Support', Headphones],
  ['100%', 'Biomass Fuel Managed', Recycle],
  ['99.9%', 'Steam Reliability', Gauge],
  ['15+', 'Industrial Applications', PackageCheck],
];

const process = ['Assessment', 'Fuel Planning', 'Operator Deployment', 'Daily Monitoring', 'Reporting', 'Continuous Improvement'];

function FlaskIcon(props) {
  return <ThermometerSun {...props} />;
}

export function Industries() {
  usePageMeta({
    title: 'Industries',
    description: 'Premium biomass boiler management for dairy, food, beverage, textile, coconut, furniture, rubber, chemical, and manufacturing industries.',
  });
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-[#f6faf4] text-dark">
      <IndustriesHero reduceMotion={reduceMotion} />
      <IndustriesGrid reduceMotion={reduceMotion} />
      <CommonApplications reduceMotion={reduceMotion} />
      <ChallengesSolutions reduceMotion={reduceMotion} />
      <IndustryExamples reduceMotion={reduceMotion} />
      <WhyChooseIndustries reduceMotion={reduceMotion} />
      <BoilerProcess reduceMotion={reduceMotion} />
      <FinalCta />
    </main>
  );
}

function IndustriesHero({ reduceMotion }) {
  return (
    <section className="relative overflow-hidden bg-[#07110f] pt-32 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(109,190,69,0.24),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(43,164,102,0.24),transparent_32%),linear-gradient(135deg,#07110f_0%,#111827_52%,#07110f_100%)]" />
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { backgroundPosition: ['0px 0px', '96px 96px'] }} transition={{ duration: 18, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:96px_96px]" />
      <motion.div aria-hidden="true" animate={reduceMotion ? undefined : { x: [0, 28, 0], y: [0, -18, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_22px_rgba(109,190,69,0.9)]"
            style={{ left: `${(i * 17) % 100}%`, top: `${18 + ((i * 23) % 62)}%` }}
            animate={reduceMotion ? undefined : { opacity: [0.15, 0.9, 0.15], y: [0, -24, 0], scale: [0.8, 1.3, 0.8] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.18, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <Container className="relative grid gap-12 py-20 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:py-28">
        <motion.div initial={reduceMotion ? false : 'hidden'} animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">Industries We Power</motion.p>
          <motion.h1 variants={fadeUp} className="font-poppins text-5xl font-bold leading-[1.04] tracking-tight md:text-6xl xl:text-7xl">Premium Boiler Management for <span className="text-primary">Steam-Intensive Industries</span></motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Bio Energy Partners manages industrial boilers, biomass fuel, trained operators, and daily steam reliability for factories where heat is mission-critical.</motion.p>
        </motion.div>
        <motion.div initial={reduceMotion ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_34px_110px_rgba(0,0,0,0.42)] backdrop-blur-xl">
          <div className="grid grid-cols-3 gap-3">
            {['Boiler', 'Fuel', 'Steam', 'Ops', 'Data', 'Support'].map((item, index) => <div key={item} className="rounded-2xl border border-white/10 bg-[#0b1514]/80 p-4 text-center text-sm font-bold text-white/80"><Factory className="mx-auto mb-3 text-primary" size={24 + (index % 2) * 6} />{item}</div>)}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function IndustriesGrid({ reduceMotion }) {
  return <section className="py-20"><Container><SectionEyebrow title="Industries Grid" heading="Built for factories that cannot afford steam disruption" text="Each industry receives the same BEP operating discipline, adapted to its production schedule, hygiene needs, thermal loads, and fuel profile." />
    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{industries.map(({ icon: Icon, ...industry }, index) => <motion.article key={industry.title} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.5, delay: index * 0.04 }} whileHover={reduceMotion ? undefined : { y: -8 }} className="group flex h-full flex-col rounded-[2rem] border border-primary/10 bg-white p-6 shadow-[0_24px_70px_rgba(15,40,30,0.08)] transition hover:border-primary/30 hover:shadow-[0_30px_90px_rgba(109,190,69,0.18)]"><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white"><Icon size={28} /></div><h2 className="font-poppins text-xl font-bold">{industry.title}</h2><p className="mt-3 flex-1 text-sm leading-7 text-dark/65">{industry.description}</p><div className="mt-5"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Typical steam applications</p><ul className="mt-3 space-y-2 text-sm text-dark/70">{industry.applications.map((app) => <li key={app} className="flex gap-2"><BadgeCheck className="mt-0.5 shrink-0 text-primary" size={16} />{app}</li>)}</ul></div><PrimaryButton to="/contact" className="mt-6 w-full normal-case tracking-normal">Learn More <ArrowRight className="ml-2" size={16} /></PrimaryButton></motion.article>)}</div></Container></section>;
}

function CommonApplications({ reduceMotion }) { return <section className="bg-white py-20"><Container><SectionEyebrow title="Common Boiler Applications" heading="One managed steam workflow across the factory floor" text="BEP aligns boiler operations with the applications that drive production, quality, safety, and throughput." /><div className="mt-12 overflow-hidden rounded-[2rem] border border-primary/10 bg-[#f6faf4] p-6"><div className="flex min-w-max gap-4 md:min-w-0 md:grid md:grid-cols-6">{workflow.map((step, index) => <motion.div key={step} initial={reduceMotion ? false : { opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative min-w-48 rounded-2xl bg-white p-5 text-center shadow-soft"><Flame className="mx-auto text-primary" /><p className="mt-3 font-bold">{step}</p>{index < workflow.length - 1 && <ArrowRight className="absolute -right-7 top-1/2 hidden -translate-y-1/2 text-primary md:block" />}</motion.div>)}</div></div></Container></section>; }

function ChallengesSolutions({ reduceMotion }) { return <section className="py-20"><Container><SectionEyebrow title="Challenges vs BEP Solutions" heading="Operational pressure converted into managed performance" text="Factories choose BEP because boiler risk, fuel coordination, and steam continuity become a professionally managed service." /><div className="mt-12 grid gap-6 lg:grid-cols-2">{comparisons.map(([challenge, solution], index) => <motion.article key={challenge} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="grid gap-4 rounded-[2rem] bg-white p-5 shadow-soft md:grid-cols-2"><div className="rounded-3xl border border-red-100 bg-red-50 p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-red-500">Industry Challenge</p><h3 className="mt-3 font-poppins text-xl font-bold">{challenge}</h3></div><div className="rounded-3xl border border-primary/15 bg-primary/10 p-6"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">BEP Solution</p><h3 className="mt-3 font-poppins text-xl font-bold">{solution}</h3></div></motion.article>)}</div></Container></section>; }

function IndustryExamples({ reduceMotion }) { return <section className="bg-white py-20"><Container><SectionEyebrow title="Industry Examples" heading="Case-study style operating models" text="These examples show how BEP adapts biomass boiler management to different production environments." /><div className="mt-12 grid gap-6 lg:grid-cols-3">{examples.map((example, index) => <motion.article key={example.sector} initial={reduceMotion ? false : { opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="overflow-hidden rounded-[2rem] border border-white bg-[#07110f] text-white shadow-[0_24px_70px_rgba(0,0,0,0.18)]"><div className="h-32 bg-[radial-gradient(circle_at_30%_30%,rgba(109,190,69,0.55),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(109,190,69,0.08))]" /><div className="p-7"><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{example.sector}</p><h2 className="mt-3 font-poppins text-2xl font-bold">{example.title}</h2><p className="mt-4 leading-7 text-white/70">{example.copy}</p></div></motion.article>)}</div></Container></section>; }

function WhyChooseIndustries({ reduceMotion }) { return <section className="py-20"><Container><SectionEyebrow title="Why Industries Choose BEP" heading="Measurable support for industrial steam operations" text="BEP combines people, fuel, monitoring, and process discipline into one dependable boiler management partnership." /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{kpis.map(([value, label, Icon], index) => <motion.div key={label} initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="rounded-[2rem] border border-primary/10 bg-white p-7 shadow-soft"><Icon className="text-primary" size={32} /><div className="mt-6 font-poppins text-4xl font-bold">{value}</div><p className="mt-2 text-sm font-bold uppercase tracking-[0.16em] text-dark/55">{label}</p></motion.div>)}</div></Container></section>; }

function BoilerProcess({ reduceMotion }) { return <section className="bg-white py-20"><Container><SectionEyebrow title="Boiler Management Process" heading="A clear timeline from assessment to continuous improvement" text="Our process gives industrial teams visibility into how steam reliability is planned, staffed, operated, measured, and improved." /><div className="mt-12 grid gap-5 lg:grid-cols-6">{process.map((step, index) => <motion.div key={step} initial={reduceMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="relative rounded-[1.5rem] border border-primary/10 bg-[#f6faf4] p-5"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-white">{index + 1}</div><h2 className="mt-5 font-poppins text-lg font-bold">{step}</h2>{index < process.length - 1 && <div className="absolute left-10 top-full h-5 w-px bg-primary/30 lg:left-full lg:top-10 lg:h-px lg:w-5" />}</motion.div>)}</div></Container></section>; }

function FinalCta() { return <section className="bg-[#07110f] py-20 text-white"><Container className="text-center"><Sparkles className="mx-auto text-primary" size={40} /><h2 className="mx-auto mt-5 max-w-3xl font-poppins text-4xl font-bold leading-tight md:text-5xl">Is Your Factory Ready for Reliable Steam?</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">Schedule a site visit with Bio Energy Partners to review your boiler operation, biomass fuel requirements, and steam reliability goals.</p><PrimaryButton to="/contact" className="mt-9 px-9 py-4 text-base normal-case tracking-normal">Schedule a Site Visit <ArrowRight className="ml-2" /></PrimaryButton></Container></section>; }

function SectionEyebrow({ title, heading, text }) { return <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-primary">{title}</p><h2 className="mt-4 font-poppins text-3xl font-bold leading-tight md:text-5xl">{heading}</h2><p className="mt-5 text-base leading-8 text-dark/65">{text}</p></div>; }
