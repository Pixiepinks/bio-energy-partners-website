import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Container } from '../components/Container';
import { PrimaryButton } from '../components/PrimaryButton';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-dark pt-36 pb-28 text-white md:pt-44 md:pb-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(109,190,69,0.35),transparent_35%),linear-gradient(135deg,rgba(31,41,55,0.98),rgba(17,24,39,1))]" />
      <Container className="relative">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.28em] text-primary">Industrial Bio Energy Operations</p>
          <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl">We Manage Your Boiler Using Sustainable Bio Energy.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">A production-ready corporate website foundation for industrial boiler operation solutions, biomass fuel management, and steam reliability services.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton to="/boiler-operation-solution">Explore Solutions <ArrowRight className="ml-2" size={18} /></PrimaryButton>
            <PrimaryButton to="/contact" className="bg-white text-dark hover:bg-lightGray">Contact BEP</PrimaryButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
