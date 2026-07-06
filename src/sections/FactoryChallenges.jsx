import { motion, useReducedMotion } from 'framer-motion';
import { Flame, Gauge, HardHat, Settings } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';
import { SectionTitle } from '../components/SectionTitle';

const challenges = [
  {
    title: 'Skilled Boiler Operators',
    description: 'Finding experienced boiler operators is increasingly difficult. Staff shortages can directly affect production reliability.',
    Icon: HardHat,
  },
  {
    title: 'Fuel Management',
    description: 'Inconsistent biomass quality and poor fuel planning increase operational costs and reduce efficiency.',
    Icon: Flame,
  },
  {
    title: 'Boiler Downtime',
    description: 'Unexpected interruptions can stop production and create unnecessary maintenance expenses.',
    Icon: Gauge,
  },
  {
    title: 'Operational Burden',
    description: 'Managing operators, fuel, maintenance, and compliance requires significant management effort.',
    Icon: Settings,
  },
];

function ChallengeCard({ title, description, Icon, reduceMotion }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: reduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="group rounded-3xl border border-dark/5 bg-white p-8 shadow-soft transition-shadow duration-300 hover:shadow-[0_24px_70px_rgba(17,24,39,0.14)] md:p-10"
    >
      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
        <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={2.2} />
      </div>
      <h3 className="text-xl font-bold tracking-tight text-dark md:text-2xl">{title}</h3>
      <p className="mt-4 text-base leading-7 text-charcoal/75">{description}</p>
    </motion.article>
  );
}

export function FactoryChallenges() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-24">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <SectionTitle
            centered
            title="Factory Challenges"
            description="Keeping an industrial boiler operating efficiently requires skilled people, reliable fuel, and continuous attention. Bio Energy Partners helps factories overcome these challenges."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
          }}
          className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8"
        >
          {challenges.map((challenge) => (
            <ChallengeCard key={challenge.title} reduceMotion={reduceMotion} {...challenge} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.15 }}
          className="mt-14 flex justify-center"
        >
          <PrimaryButton to="/boiler-operation-solution">Discover Our Solution</PrimaryButton>
        </motion.div>
      </Container>
    </section>
  );
}
