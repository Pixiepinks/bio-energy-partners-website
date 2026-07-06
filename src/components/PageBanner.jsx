import { motion } from 'framer-motion';
import { Container } from './Container';

export function PageBanner({ title, description }) {
  return (
    <section className="bg-dark pt-36 pb-20 text-white">
      <Container>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-primary">Bio Energy Partners</p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl">{title}</h1>
          {description && <p className="mt-6 text-lg leading-8 text-white/75">{description}</p>}
        </motion.div>
      </Container>
    </section>
  );
}
