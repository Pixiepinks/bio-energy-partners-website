import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, ClipboardCheck, Factory, Flame, Gauge, HardHat, Leaf, ShieldCheck, Truck, Wrench, Zap, Coffee, Milk, Shirt, FlaskConical, Utensils, Trees, BarChart3 } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';
import { IndustrialBoilerIllustration } from '../components/illustrations/IndustrialBoilerIllustration';
import { BoilerRoomIllustration } from '../components/illustrations/BoilerRoomIllustration';
import { usePageMeta } from '../hooks/usePageMeta';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };
const sectionViewport = { once: true, amount: 0.18 };

const managedServices = [
  ['Certified Boiler Operators', 'Skilled shift teams operate your boiler with disciplined routines and clear accountability.', HardHat],
  ['Biomass Fuel Planning', 'Demand forecasting, supplier coordination, inventory discipline, and practical quality checks.', Leaf],
  ['Fuel Handling & Feeding', 'Organized biomass receiving, storage, conveyor feeding, and combustion consistency.', Truck],
  ['Steam Reliability Control', 'Operational controls focused on stable steam pressure for critical production lines.', Gauge],
  ['Preventive Maintenance', 'Inspection calendars, maintenance coordination, and early issue escalation before downtime.', Wrench],
  ['Safety & Compliance Routines', 'Daily safety checks, operator procedures, housekeeping, and operating records.', ShieldCheck],
  ['Performance Monitoring', 'Steam, fuel, efficiency, and availability tracking with practical operating insight.', BarChart3],
  ['Single-Partner Reporting', 'One responsible BEP team for operations, communication, reporting, and improvement plans.', ClipboardCheck],
];

const checklist = [
  'Dedicated boiler operation team and shift supervision',
  'Biomass fuel sourcing coordination and stock visibility',
  'Fuel receiving, handling, feeding, and combustion support',
  'Daily boiler logs, safety routines, and operating discipline',
  'Steam pressure monitoring aligned with production demand',
  'Preventive maintenance planning and breakdown coordination',
  'Monthly performance review with improvement priorities',
  'One accountable partner for boiler room execution',
];

const industries = [
  ['Dairy & Milk Processing', 'Reliable steam for pasteurizing, CIP cleaning, and daily plant utilities.', Milk],
  ['Food Manufacturing', 'Stable boiler operation for cooking, drying, washing, and sanitation.', Utensils],
  ['Tea & Beverage', 'Consistent steam for processing, heating, and continuous production.', Coffee],
  ['Textile & Garment', 'Managed steam for washing, dyeing, finishing, and ironing processes.', Shirt],
  ['Rubber & Chemical', 'Disciplined steam generation for controlled industrial processing.', FlaskConical],
  ['Coconut Processing', 'Sustainable biomass energy for drying and manufacturing operations.', Leaf],
  ['Furniture Manufacturing', 'Practical biomass use for factories with wood waste and heat demand.', Trees],
  ['General Manufacturing', 'Tailored boiler room management for facilities with critical steam needs.', Factory],
];

const comparison = [
  ['Staffing', 'Recruit, train, and retain operators internally.', 'BEP provides trained boiler operation teams.'],
  ['Fuel', 'Manage suppliers, inventory, quality, and feeding separately.', 'BEP coordinates biomass fuel operations end to end.'],
  ['Supervision', 'Production managers spend time resolving boiler room issues.', 'BEP supervises daily routines, logs, and escalation.'],
  ['Maintenance', 'Reactive coordination after breakdowns disrupt production.', 'Preventive planning and fast coordination reduce disruption risk.'],
  ['Accountability', 'Multiple vendors and internal teams share responsibility.', 'One partner is responsible for operational performance.'],
];

const kpis = [
  ['24/7', 'Operation support for continuous industrial steam demand.'],
  ['99.9%', 'Reliability mindset with monitoring, routines, and fast escalation.'],
  ['100%', 'Biomass fuel management aligned to your production schedule.'],
  ['One Responsible Partner', 'A single BEP team accountable for boiler room execution.'],
];

const journey = [
  ['Assess', 'Site visit, steam demand review, fuel study, and risk mapping.'],
  ['Design', 'Operating model, staffing plan, fuel workflow, and reporting cadence.'],
  ['Mobilize', 'Team onboarding, safety routines, inventory controls, and handover.'],
  ['Operate', 'Daily operations, monitoring, maintenance coordination, and reporting.'],
  ['Improve', 'Performance reviews, efficiency actions, and production alignment.'],
];

const faqs = [
  ['Do you operate existing boiler systems?', 'Yes. BEP can assess your current boiler room, understand your production steam demand, and create an operating model for your existing equipment and biomass fuel workflow.'],
  ['Can BEP manage biomass fuel as part of the solution?', 'Yes. Our solution includes practical biomass fuel planning, receiving coordination, stock visibility, handling routines, and combustion support so fuel does not become a production distraction.'],
  ['How does outsourcing improve reliability?', 'Outsourcing gives your factory a dedicated boiler team, daily operating discipline, preventive maintenance coordination, and one accountable partner focused on stable steam delivery.'],
  ['Which industries are best suited for this service?', 'Factories with recurring steam demand benefit most, including dairy, food, beverage, textile, rubber, chemical, coconut processing, furniture, and broader manufacturing facilities.'],
  ['What happens during onboarding?', 'We begin with a site assessment, define the responsibility matrix, prepare operating routines, align fuel and safety processes, mobilize the team, and establish reporting before steady-state operation.'],
];

function AnimatedSection({ children, className = '', ...props }) {
  const reduceMotion = useReducedMotion();
  return <motion.section {...props} initial="hidden" whileInView="visible" viewport={sectionViewport} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }} className={className}>{children}</motion.section>;
}

function SectionIntro({ eyebrow, title, text, centered = true, light = false }) {
  return <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className={centered ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}>
    <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
    <h2 className={`mt-5 text-4xl font-extrabold tracking-tight md:text-6xl ${light ? 'text-white' : 'text-dark'}`}>{title}</h2>
    <p className={`mt-6 text-lg leading-8 ${light ? 'text-white/70' : 'text-dark/70'}`}>{text}</p>
  </motion.div>;
}

function WorkflowIllustration() {
  const steps = [['Fuel', Leaf], ['Boiler', Flame], ['Steam', Zap], ['Production', Factory]];
  return <div className="grid gap-4 rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur md:grid-cols-4 md:p-7">
    {steps.map(([label, Icon], i) => <motion.div key={label} variants={fadeUp} className="relative rounded-[1.75rem] border border-white/10 bg-[#0b1514] p-6 text-center">
      {i < steps.length - 1 && <ArrowRight aria-hidden="true" className="absolute -right-8 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 rounded-full bg-primary p-1.5 text-white md:block" />}
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25"><Icon className="h-8 w-8" /></div>
      <h3 className="mt-5 text-2xl font-extrabold text-white">{label}</h3>
      <p className="mt-3 text-sm leading-6 text-white/62">{['Verified biomass supply enters the boiler room.', 'BEP operators manage combustion and controls.', 'Stable steam is delivered to plant processes.', 'Your team stays focused on manufacturing output.'][i]}</p>
    </motion.div>)}
  </div>;
}

export function BoilerOperationSolution() {
  const [openFaq, setOpenFaq] = useState(0);
  const reduceMotion = useReducedMotion();
  usePageMeta({ title: 'Boiler Operation Solution', description: 'Premium outsourced industrial boiler operation solution with biomass fuel management, steam reliability, safety routines, and one accountable BEP partner.' });

  return <main>
    <section className="relative overflow-hidden bg-[#07110f] pt-28 text-white md:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(109,190,69,0.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(43,164,102,0.22),transparent_32%),linear-gradient(135deg,#07110f_0%,#111827_52%,#07110f_100%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />
      <Container className="relative grid min-h-[760px] items-center gap-12 py-16 lg:grid-cols-[0.48fr_0.52fr]">
        <motion.div initial={reduceMotion ? false : 'hidden'} animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">Boiler Operation Solution</motion.p>
          <motion.h1 variants={fadeUp} className="font-poppins text-5xl font-bold leading-[1.04] tracking-tight text-white md:text-6xl xl:text-7xl">Premium outsourced boiler operation for factories that cannot afford steam disruption.</motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/72">Bio Energy Partners manages operators, biomass fuel, safety routines, boiler performance, and steam reliability through one accountable industrial energy partner.</motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4"><PrimaryButton to="/contact" className="normal-case tracking-normal">Request Boiler Assessment <ArrowRight className="ml-2" size={18} /></PrimaryButton><PrimaryButton to="#workflow" className="border border-white/15 bg-white/10 normal-case tracking-normal text-white shadow-none backdrop-blur hover:bg-white hover:text-dark">See Workflow</PrimaryButton></motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.38)] backdrop-blur"><IndustrialBoilerIllustration /></motion.div>
      </Container>
    </section>

    <AnimatedSection className="relative bg-white py-24 text-dark md:py-32"><Container><SectionIntro eyebrow="What we manage" title="Eight critical boiler room responsibilities, handled by one BEP team." text="Your production team should not have to coordinate operators, fuel vendors, safety routines, and steam troubleshooting separately." />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{managedServices.map(([title, description, Icon]) => <motion.article key={title} variants={fadeUp} className="group rounded-[2rem] border border-dark/10 bg-white p-6 shadow-[0_20px_70px_rgba(12,35,24,0.08)] transition hover:-translate-y-2 hover:border-primary/35 hover:shadow-[0_28px_90px_rgba(109,190,69,0.18)]"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-white"><Icon /></div><h3 className="mt-6 text-xl font-extrabold text-dark">{title}</h3><p className="mt-3 text-sm leading-6 text-dark/65">{description}</p></motion.article>)}</div></Container></AnimatedSection>

    <AnimatedSection id="workflow" className="relative overflow-hidden bg-[#07110f] py-24 text-white md:py-32"><Container><SectionIntro light eyebrow="Boiler operation workflow" title="Fuel → boiler → steam → production, professionally controlled." text="A clear operating system connects biomass supply, disciplined boiler operation, and reliable steam delivery to your manufacturing line." /><div className="mt-14"><WorkflowIllustration /></div></Container></AnimatedSection>

    <AnimatedSection className="bg-[#fbfdf9] py-24 md:py-32"><Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><SectionIntro centered={false} eyebrow="What's included" title="A complete operating layer for your boiler room." text="BEP brings the people, routines, monitoring discipline, and fuel coordination needed to make boiler operation feel predictable." /><div className="mt-9 grid gap-3">{checklist.map((item) => <motion.div variants={fadeUp} key={item} className="flex gap-3 rounded-2xl border border-primary/15 bg-white px-4 py-3 font-bold text-dark/78 shadow-sm"><CheckCircle2 className="h-6 w-6 shrink-0 text-primary" />{item}</motion.div>)}</div></div><motion.div variants={fadeUp} className="rounded-[2.5rem] border border-white/70 bg-[#07100d] p-4 shadow-[0_40px_120px_rgba(12,35,24,0.22)]"><BoilerRoomIllustration /></motion.div></Container></AnimatedSection>

    <AnimatedSection className="bg-white py-24 md:py-32"><Container><SectionIntro eyebrow="Industries we serve" title="Built for steam-dependent manufacturing." text="We support plants where boiler reliability directly protects production continuity, quality, and customer commitments." /><div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{industries.map(([title, description, Icon]) => <motion.article variants={fadeUp} key={title} className="rounded-[2rem] border border-dark/10 bg-white p-6 shadow-[0_20px_70px_rgba(12,35,24,0.08)]"><Icon className="h-9 w-9 text-primary" /><h3 className="mt-5 text-xl font-extrabold text-dark">{title}</h3><p className="mt-3 text-sm leading-6 text-dark/65">{description}</p></motion.article>)}</div></Container></AnimatedSection>

    <AnimatedSection className="bg-[#f7fbf4] py-24 md:py-32"><Container><SectionIntro eyebrow="Why outsource to BEP" title="Replace fragmented responsibility with one managed solution." text="The BEP model gives your factory a professional boiler room partner while your internal team concentrates on output, quality, and customers." /><div className="mt-14 overflow-hidden rounded-[2rem] border border-dark/10 bg-white shadow-[0_28px_100px_rgba(12,35,24,0.1)]"><div className="grid bg-dark px-6 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-white/80 md:grid-cols-3"><span>Responsibility</span><span>In-house operation</span><span>BEP solution</span></div>{comparison.map(([area, inside, bep]) => <div key={area} className="grid gap-4 border-t border-dark/10 p-6 md:grid-cols-3"><strong className="text-dark">{area}</strong><p className="text-dark/62">{inside}</p><p className="font-bold text-dark"><CheckCircle2 className="mr-2 inline h-5 w-5 text-primary" />{bep}</p></div>)}</div></Container></AnimatedSection>

    <AnimatedSection className="bg-[#07110f] py-24 text-white md:py-32"><Container><SectionIntro light eyebrow="Operational benefits" title="Premium operating outcomes your leadership team can track." text="Our solution is designed around continuity, clear accountability, sustainable fuel operation, and measurable boiler room discipline." /><div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{kpis.map(([value, label]) => <motion.article variants={fadeUp} key={value} className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22)]"><p className="text-4xl font-extrabold text-primary md:text-5xl">{value}</p><p className="mt-4 text-sm font-bold leading-6 text-white/70">{label}</p></motion.article>)}</div></Container></AnimatedSection>

    <AnimatedSection className="bg-white py-24 md:py-32"><Container><SectionIntro eyebrow="Customer journey" title="A structured path from assessment to continuous improvement." text="We make transition practical, transparent, and aligned with production priorities from the first site visit." /><div className="mt-14 grid gap-4 lg:grid-cols-5">{journey.map(([title, text], i) => <motion.article variants={fadeUp} key={title} className="relative rounded-[2rem] border border-primary/15 bg-white p-6 shadow-[0_18px_60px_rgba(12,35,24,0.08)]"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-extrabold text-white">{i + 1}</div><h3 className="mt-5 text-xl font-extrabold text-dark">{title}</h3><p className="mt-3 text-sm leading-6 text-dark/65">{text}</p></motion.article>)}</div></Container></AnimatedSection>

    <AnimatedSection className="bg-[#fbfdf9] py-24 md:py-32"><Container><SectionIntro eyebrow="FAQ" title="Answers for operations and plant leadership." text="Straightforward guidance for teams considering outsourced boiler operation with Bio Energy Partners." /><div className="mx-auto mt-12 max-w-4xl space-y-4">{faqs.map(([q, a], i) => { const open = openFaq === i; return <motion.div variants={fadeUp} key={q} className="overflow-hidden rounded-3xl border border-dark/10 bg-white shadow-[0_16px_50px_rgba(12,35,24,0.07)]"><button className="flex w-full items-center justify-between gap-4 p-6 text-left text-lg font-extrabold text-dark focus:outline-none focus:ring-4 focus:ring-primary/20" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : i)}><span>{q}</span><ChevronDown className={`h-6 w-6 text-primary transition ${open ? 'rotate-180' : ''}`} /></button><motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} className="overflow-hidden"><p className="px-6 pb-6 leading-7 text-dark/68">{a}</p></motion.div></motion.div>; })}</div></Container></AnimatedSection>

    <section className="bg-white px-6 py-24 md:py-32"><Container className="relative overflow-hidden rounded-[2.75rem] bg-[#07110f] p-8 text-center shadow-[0_40px_130px_rgba(12,35,24,0.22)] md:p-16"><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(109,190,69,0.26),transparent_32%),radial-gradient(circle_at_84%_60%,rgba(109,190,69,0.18),transparent_36%)]" /><div className="relative"><p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">Ready to simplify boiler operations?</p><h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-6xl">Focus on Manufacturing. We'll Manage Your Boiler.</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">Talk to BEP about a managed boiler operation solution tailored to your steam demand, biomass fuel profile, and production priorities.</p><PrimaryButton to="/contact" className="mt-9 px-8 py-4 text-base normal-case tracking-normal">Book a Boiler Consultation <ArrowRight className="ml-2" size={18} /></PrimaryButton></div></Container></section>
  </main>;
}
