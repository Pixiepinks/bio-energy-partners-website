import { Hero } from '../sections/Hero';
import { PlaceholderSection } from '../sections/PlaceholderSection';
import { FactoryChallenges } from '../sections/FactoryChallenges';
import { usePageMeta } from '../hooks/usePageMeta';

export function Home() {
  usePageMeta({ title: 'Home', description: 'Bio Energy Partners manages industrial boilers using sustainable bio energy.' });

  return (
    <>
      <Hero />
      <FactoryChallenges />
      <PlaceholderSection eyebrow="Why Choose BEP" title="Reliable Operations. Sustainable Energy." description="Placeholder section reserved for differentiators, operating model, and service advantages." tone="gray" />
      <PlaceholderSection eyebrow="Industries" title="Industries We Support" description="Placeholder section reserved for industrial sectors and application areas." />
      <PlaceholderSection eyebrow="Sustainability" title="Sustainable Bio Energy Management" description="Placeholder section reserved for biomass, emissions, and circular energy impact messaging." tone="gray" />
      <PlaceholderSection eyebrow="CTA" title="Ready to Strengthen Your Steam Reliability?" description="Placeholder call-to-action section reserved for conversion content." />
    </>
  );
}
