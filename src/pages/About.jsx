import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Handshake,
  Leaf,
  Recycle,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';
import { usePageMeta } from '../hooks/usePageMeta';

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  { title: 'Reliability', icon: BadgeCheck, description: 'Steam generation support designed around dependable daily boiler performance.' },
  { title: 'Safety', icon: ShieldCheck, description: 'Operational discipline, operator coordination, and careful routines for safer boiler rooms.' },
  { title: 'Sustainability', icon: Leaf, description: 'Biomass energy practices that help reduce dependence on conventional fossil fuel sources.' },
  { title: 'Accountability', icon: Target, description: 'One responsible partner for fuel management, operator oversight, and operating continuity.' },
  { title: 'Industrial Discipline', icon: Factory, description: 'Structured processes built for manufacturing environments where downtime is costly.' },
  { title: 'Long-Term Partnership', icon: Handshake, description: 'A collaborative model focused on continuous improvement and factory production goals.' },
];

const approachSteps = ['Assess', 'Plan', 'Mobilize', 'Operate', 'Monitor', 'Improve'];

function MotionSection({ children, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export function About() {
  usePageMeta({
    title: 'About Bio Energy Partners',
    description: 'Bio Energy Partners is an industrial boiler operation partner helping factories achieve reliable steam generation through sustainable bio energy solutions.',
  });

  return (
    <main className="overflow-hidden bg-[#07110f] text-white">
      <section className="relative isolate min-h-[72vh] overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(109,190,69,0.24),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(43,164,102,0.24),transparent_30%),linear-gradient(135deg,#07110f_0%,#111827_54%,#07110f_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />
        <Container className="flex min-h-[calc(72vh-7rem)] items-center py-20">
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="max-w-4xl">
            <motion.p variants={fadeUp} className="mb-5 inline-flex rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-primary">
              About Our Company
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-poppins text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl xl:text-7xl">
              About Bio Energy Partners
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-7 max-w-3xl text-lg leading-8 text-white/72 md:text-xl md:leading-9">
              We are an industrial boiler operation partner helping factories achieve reliable steam generation through sustainable bio energy solutions.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      <MotionSection className="relative bg-white py-24 text-charcoal">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div variants={fadeUp} className="rounded-[2rem] border border-dark/10 bg-[#07110f] p-8 shadow-soft md:p-10">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary"><Factory size={32} /></div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Industrial Boiler Operations</p>
            <h2 className="mt-4 font-poppins text-3xl font-bold leading-tight text-white md:text-4xl">We Manage Industrial Boiler Operations Using Sustainable Bio Energy</h2>
          </motion.div>
          <motion.p variants={fadeUp} className="text-lg leading-9 text-charcoal/78">
            Bio Energy Partners (Pvt) Ltd provides complete boiler operation solutions for manufacturing industries. Our work focuses on reliable steam generation, sustainable biomass fuel management, operator coordination, safety-focused operation, and reducing the management burden for factories.
          </motion.p>
        </Container>
      </MotionSection>

      <MotionSection className="bg-[#0b1514] py-24">
        <Container className="grid gap-6 md:grid-cols-2">
          {[{ label: 'Mission', icon: Target, text: 'To deliver reliable, sustainable, and professionally managed boiler operation solutions that help industries focus on production while reducing environmental impact.' }, { label: 'Vision', icon: TrendingUp, text: 'To become Sri Lanka’s most trusted industrial boiler operation partner powered by sustainable bio energy.' }].map((item) => (
            <motion.article key={item.label} variants={fadeUp} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur md:p-10">
              <item.icon className="text-primary" size={34} />
              <h2 className="mt-6 font-poppins text-3xl font-bold text-white">{item.label}</h2>
              <p className="mt-4 text-base leading-8 text-white/72 md:text-lg">{item.text}</p>
            </motion.article>
          ))}
        </Container>
      </MotionSection>

      <MotionSection className="bg-lightGray py-24 text-charcoal">
        <Container>
          <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">What We Stand For</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold text-dark md:text-4xl">Premium operating values for industrial environments</h2>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <motion.article key={value.title} variants={fadeUp} whileHover={{ y: -6 }} className="rounded-[1.75rem] border border-dark/5 bg-white p-7 shadow-soft">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary"><value.icon size={28} /></div>
                <h3 className="mt-6 font-poppins text-xl font-bold text-dark">{value.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/72">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-[#07110f] py-24">
        <Container>
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Our Approach</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold text-white md:text-4xl">A disciplined path from assessment to continuous improvement</h2>
          </motion.div>
          <div className="mt-14 grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {approachSteps.map((step, index) => (
              <motion.div key={step} variants={fadeUp} className="relative rounded-3xl border border-white/10 bg-white/[0.06] p-6">
                <span className="text-sm font-bold text-primary">0{index + 1}</span>
                <h3 className="mt-4 font-poppins text-2xl font-bold text-white">{step}</h3>
                {index < approachSteps.length - 1 && <ArrowRight className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-primary xl:block" size={28} />}
              </motion.div>
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-white py-24 text-charcoal">
        <Container className="grid gap-6 lg:grid-cols-2">
          <motion.div variants={fadeUp} className="rounded-[2rem] bg-lightGray p-8 md:p-10">
            <Users className="text-primary" size={34} />
            <h2 className="mt-6 font-poppins text-3xl font-bold text-dark">Why BEP</h2>
            <p className="mt-5 text-lg leading-8 text-charcoal/76">Factories need reliable steam, skilled operators, consistent fuel, and safe daily operations.</p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-[2rem] bg-[#07110f] p-8 text-white md:p-10">
            <BadgeCheck className="text-primary" size={34} />
            <h2 className="mt-6 font-poppins text-3xl font-bold text-white">One Accountable Partner</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">Bio Energy Partners provides one accountable partner for complete boiler operation responsibility.</p>
          </motion.div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-[#0b1514] py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <motion.div variants={fadeUp} className="flex h-24 w-24 items-center justify-center rounded-[2rem] bg-primary/15 text-primary"><Recycle size={46} /></motion.div>
          <motion.div variants={fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-primary">Sustainability Commitment</p>
            <h2 className="mt-3 font-poppins text-3xl font-bold text-white md:text-4xl">Supporting circular energy through sustainable biomass</h2>
            <p className="mt-5 text-lg leading-9 text-white/72">We support circular energy by using waste wood, sawdust, furniture offcuts, wood briquettes, and wood pellets as sustainable biomass energy sources.</p>
          </motion.div>
        </Container>
      </MotionSection>

      <section className="bg-white py-24 text-charcoal">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_18%_20%,rgba(109,190,69,0.24),transparent_30%),linear-gradient(135deg,#07110f,#111827)] p-8 text-center shadow-soft md:p-14">
            <h2 className="font-poppins text-3xl font-bold text-white md:text-5xl">Looking for a Reliable Boiler Operation Partner?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-white/72">Talk to Bio Energy Partners about professionally managed boiler operations powered by sustainable bio energy.</p>
            <div className="mt-8"><PrimaryButton to="/contact" className="normal-case tracking-normal">Discuss Your Boiler Operation <ArrowRight className="ml-2" size={18} /></PrimaryButton></div>
          </div>
        </Container>
      </section>
    </main>
  );
}
