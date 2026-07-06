import { Hero } from '../sections/Hero';
import { PlaceholderSection } from '../sections/PlaceholderSection';
import { IndustriesWeServe } from '../sections/IndustriesWeServe';
import { FactoryChallenges } from '../sections/FactoryChallenges';
import { SustainableEnergyFlow } from '../sections/SustainableEnergyFlow';
import { CompleteBoilerOperationSolution } from '../sections/CompleteBoilerOperationSolution';
import { usePageMeta } from '../hooks/usePageMeta';

export function Home() {
  usePageMeta({ title: 'Home', description: 'Bio Energy Partners manages industrial boilers using sustainable bio energy.' });

  return (
    <>
      <Hero />
      <FactoryChallenges />
      <SustainableEnergyFlow />
      <CompleteBoilerOperationSolution />
      <IndustriesWeServe />
      <PlaceholderSection eyebrow="CTA" title="Ready to Strengthen Your Steam Reliability?" description="Placeholder call-to-action section reserved for conversion content." />
    </>
  );
}
