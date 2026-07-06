import { motion, useReducedMotion } from 'framer-motion';
import { CheckCircle2, Flame, Gauge, HardHat, Leaf, Settings, ShieldCheck } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';
import { BoilerRoomIllustration } from '../components/illustrations/BoilerRoomIllustration';

const responsibilities = [
  { title: 'Boiler Operators', description: 'Experienced operators ensuring safe and efficient operation.', Icon: HardHat },
  { title: 'Biomass Fuel Management', description: 'Reliable fuel planning, handling and quality control.', Icon: Leaf },
  { title: 'Reliable Steam Generation', description: 'Continuous steam generation supporting uninterrupted production.', Icon: Flame },
  { title: 'Daily Performance Monitoring', description: 'Continuous monitoring of boiler performance and efficiency.', Icon: Gauge },
  { title: 'Safety & Compliance', description: 'Operation following industrial safety standards and best practices.', Icon: ShieldCheck },
  { title: 'Maintenance Coordination', description: 'Preventive maintenance planning and breakdown support.', Icon: Settings },
];

const trustItems = ['Experienced Team', 'Sustainable Bio Energy', 'Reliable Steam', 'Focus on Your Production'];

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function CompleteBoilerOperationSolution() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-24 text-dark md:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(109,190,69,0.18),transparent_28%),linear-gradient(180deg,#ffffff,rgba(247,250,247,0.92))]" />
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center xl:gap-20">
          <div>
            <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: 'easeOut' }}>
              <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">WE TAKE COMPLETE RESPONSIBILITY</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight text-dark md:text-6xl">Complete Industrial Boiler Operation Solution</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-dark/70">Bio Energy Partners provides a complete outsourced boiler operation solution, allowing factories to focus on production while our experienced team manages biomass fuel, boiler operation, steam generation, and operational performance.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.1 } } }} className="mt-10 grid gap-4 sm:grid-cols-2">
              {responsibilities.map(({ title, description, Icon }) => (
                <motion.article key={title} variants={cardVariants} transition={{ duration: 0.5, ease: 'easeOut' }} className="group rounded-3xl border border-dark/10 bg-white/90 p-5 shadow-[0_18px_60px_rgba(12,35,24,0.08)] transition hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_80px_rgba(109,190,69,0.16)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary ring-1 ring-primary/20">
                    <Icon className="h-6 w-6" strokeWidth={2.1} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold text-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-dark/65">{description}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 42 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, ease: 'easeOut' }} className="relative">
            <div className="absolute -inset-6 rounded-[3rem] bg-primary/10 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[2.5rem] border border-white/70 bg-[#07100d] p-4 shadow-[0_40px_120px_rgba(12,35,24,0.24)] md:p-6">
              <BoilerRoomIllustration />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="mt-14 rounded-[2rem] border border-primary/20 bg-dark p-5 text-white shadow-[0_24px_90px_rgba(12,35,24,0.18)] md:flex md:items-center md:justify-between md:gap-8 md:p-7">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm font-bold">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <PrimaryButton to="/contact" className="mt-6 shrink-0 shadow-[0_16px_42px_rgba(109,190,69,0.28)] md:mt-0">Discuss Your Boiler Operation</PrimaryButton>
        </motion.div>
      </Container>
    </section>
  );
}
