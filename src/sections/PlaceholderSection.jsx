import { motion } from 'framer-motion';
import { Container } from '../components/Container';
import { SectionTitle } from '../components/SectionTitle';

export function PlaceholderSection({ eyebrow, title, description, tone = 'white' }) {
  return (
    <section className={tone === 'gray' ? 'bg-lightGray py-24' : 'bg-white py-24'}>
      <Container>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5 }} className="rounded-3xl border border-dark/10 bg-white p-8 shadow-soft md:p-12">
          <SectionTitle eyebrow={eyebrow} title={title} description={description} />
        </motion.div>
      </Container>
    </section>
  );
}
