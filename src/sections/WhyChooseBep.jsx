import { motion, useReducedMotion } from 'framer-motion';
import { Check, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';

const comparisonItems = [
  'Recruit Boiler Operators',
  'Train Boiler Staff',
  'Manage Biomass Fuel',
  'Daily Boiler Supervision',
  'Coordinate Maintenance',
  'Monitor Steam Reliability',
  'Safety & Compliance',
];

const kpis = [
  { value: '24/7', label: 'Operational Support' },
  { value: '100%', label: 'Biomass Fuel Management' },
  { value: '99.9%', label: 'Steam Reliability' },
  { value: 'One', label: 'Responsible Partner' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function WhyChooseBep() {
  const reduceMotion = useReducedMotion();
  const motionDistance = reduceMotion ? 0 : 24;

  return (
    <section className="relative overflow-hidden bg-white py-24 text-dark md:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(109,190,69,0.12),transparent_31%),radial-gradient(circle_at_82%_22%,rgba(109,190,69,0.08),transparent_28%),linear-gradient(180deg,#ffffff_0%,#f8fcf5_48%,#ffffff_100%)]" />
      <div aria-hidden="true" className="absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">WHY OUTSOURCE TO BEP</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-dark md:text-6xl">One Partner. Complete Boiler Responsibility.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-dark/70">
            Instead of managing boiler operators, biomass fuel, maintenance coordination, and daily supervision separately, Bio Energy Partners provides one complete outsourced solution.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } } }}
          className="mt-14 grid gap-6 lg:grid-cols-2"
        >
          <motion.article variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }} className="rounded-[2rem] border border-dark/10 bg-white/90 p-7 shadow-[0_24px_90px_rgba(12,35,24,0.08)] backdrop-blur md:p-9">
            <h3 className="text-2xl font-extrabold text-dark">Traditional In-House Operation</h3>
            <div className="mt-7 space-y-3">
              {comparisonItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-dark/10 bg-slate-50 px-4 py-3 text-sm font-bold text-dark/65 md:text-base">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article variants={fadeUp} transition={{ duration: 0.55, ease: 'easeOut' }} className="relative overflow-hidden rounded-[2rem] border border-primary/25 bg-white p-7 shadow-[0_28px_100px_rgba(109,190,69,0.16)] md:p-9">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
            <h3 className="text-2xl font-extrabold text-dark">Bio Energy Partners Solution</h3>
            <div className="mt-7 space-y-3">
              {comparisonItems.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-primary/15 bg-primary/5 px-4 py-3 text-sm font-extrabold text-dark md:text-base">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-[0_10px_24px_rgba(109,190,69,0.3)]">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {kpis.map((kpi) => (
            <motion.div key={kpi.label} variants={{ hidden: { opacity: 0, y: motionDistance }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: 'easeOut' }} className="rounded-[1.75rem] border border-primary/15 bg-white/95 p-6 text-center shadow-[0_20px_70px_rgba(12,35,24,0.08)]">
              <p className="text-4xl font-extrabold tracking-tight text-primary md:text-5xl">{kpi.value}</p>
              <p className="mt-3 text-sm font-extrabold uppercase tracking-[0.16em] text-dark/70">{kpi.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mt-12 max-w-4xl rounded-[2.25rem] border border-primary/20 bg-white/92 p-8 text-center shadow-[0_28px_100px_rgba(12,35,24,0.1)] backdrop-blur md:p-12"
        >
          <h3 className="text-3xl font-extrabold tracking-tight text-dark md:text-5xl">
            Focus on Manufacturing.
            <br />
            We'll Manage Your Boiler.
          </h3>
          <PrimaryButton to="/contact" className="mt-8 px-8 py-4 text-base shadow-[0_18px_48px_rgba(109,190,69,0.32)]">
            Request a Free Boiler Consultation
          </PrimaryButton>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-dark/65">
            Let's discuss how Bio Energy Partners can improve your boiler operation while reducing management burden.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
