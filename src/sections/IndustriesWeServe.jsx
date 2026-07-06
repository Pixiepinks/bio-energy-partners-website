import { motion, useReducedMotion } from 'framer-motion';
import { Coffee, Factory, FlaskConical, Leaf, Milk, Shirt, Trees, Utensils } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';

const industries = [
  {
    title: 'Dairy & Milk Processing',
    description: 'Steam reliability for pasteurizing, cleaning, and daily production operations.',
    Icon: Milk,
  },
  {
    title: 'Food Manufacturing',
    description: 'Boiler operation support for cooking, processing, drying, and cleaning requirements.',
    Icon: Utensils,
  },
  {
    title: 'Tea & Beverage',
    description: 'Consistent steam supply for processing, heating, and plant operations.',
    Icon: Coffee,
  },
  {
    title: 'Textile & Garment',
    description: 'Reliable boiler operation for washing, dyeing, finishing, and production support.',
    Icon: Shirt,
  },
  {
    title: 'Rubber & Chemical',
    description: 'Managed steam generation for industrial processing and controlled operations.',
    Icon: FlaskConical,
  },
  {
    title: 'Coconut Processing',
    description: 'Sustainable boiler energy for drying, processing, and manufacturing facilities.',
    Icon: Leaf,
  },
  {
    title: 'Furniture Manufacturing',
    description: 'Turning waste wood and offcuts into practical biomass energy solutions.',
    Icon: Trees,
  },
  {
    title: 'General Manufacturing',
    description: 'Tailored boiler operation support for factories with continuous steam demand.',
    Icon: Factory,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function IndustriesWeServe() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#fbfdf9] py-24 text-dark md:py-32">
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(109,190,69,0.14),transparent_30%),radial-gradient(circle_at_86%_72%,rgba(109,190,69,0.11),transparent_32%),linear-gradient(180deg,#ffffff_0%,#f7fbf4_52%,#ffffff_100%)]" />
      <Container className="relative z-10">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.3em] text-primary">INDUSTRIES WE SERVE</p>
          <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-dark md:text-6xl">Boiler Operation Solutions for Manufacturing Industries</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-dark/70">Bio Energy Partners supports factories that depend on reliable steam generation, sustainable biomass energy, and professional boiler operation.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.16 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08 } } }} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ title, description, Icon }) => (
            <motion.article key={title} variants={cardVariants} transition={{ duration: 0.5, ease: 'easeOut' }} className="group rounded-[2rem] border border-dark/10 bg-white/92 p-6 shadow-[0_20px_70px_rgba(12,35,24,0.08)] transition duration-300 hover:-translate-y-2 hover:border-primary/35 hover:shadow-[0_28px_90px_rgba(109,190,69,0.18)]">
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20 transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" strokeWidth={2} />
                </div>
                <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-[0.18em] text-primary">Industry</span>
              </div>
              <h3 className="mt-7 text-xl font-extrabold leading-tight text-dark">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-dark/65">{description}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.55, ease: 'easeOut' }} className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-primary/20 bg-white/90 p-7 text-center shadow-[0_24px_90px_rgba(12,35,24,0.1)] backdrop-blur md:p-9">
          <h3 className="text-2xl font-extrabold text-dark">Don't see your industry?</h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-dark/70">Our boiler operation solutions can be tailored to your manufacturing process.</p>
          <PrimaryButton to="/contact" className="mt-6 shadow-[0_16px_42px_rgba(109,190,69,0.28)]">Talk to Our Team</PrimaryButton>
        </motion.div>
      </Container>
    </section>
  );
}
