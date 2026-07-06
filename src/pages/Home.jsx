import { Hero } from '../sections/Hero';
import { PlaceholderSection } from '../sections/PlaceholderSection';
import { FactoryChallenges } from '../sections/FactoryChallenges';
import { SustainableEnergyFlow } from '../sections/SustainableEnergyFlow';
import { usePageMeta } from '../hooks/usePageMeta';

export function Home() {
  usePageMeta({ title: 'Home', description: 'Bio Energy Partners manages industrial boilers using sustainable bio energy.' });

  return (
    <>
      <Hero />
      <FactoryChallenges />
      <SustainableEnergyFlow />
      <PlaceholderSection eyebrow="Industries" title="Industries We Support" description="Placeholder section reserved for industrial sectors and application areas." />
      <PlaceholderSection eyebrow="Sustainability" title="Sustainable Bio Energy Management" description="Placeholder section reserved for biomass, emissions, and circular energy impact messaging." tone="gray" />
      <PlaceholderSection eyebrow="CTA" title="Ready to Strengthen Your Steam Reliability?" description="Placeholder call-to-action section reserved for conversion content." />
    </>
  );
}
