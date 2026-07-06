import { Container } from '../components/Container';
import { PageBanner } from '../components/PageBanner';
import { SectionTitle } from '../components/SectionTitle';
import { usePageMeta } from '../hooks/usePageMeta';

export function GenericPage({ title, description }) {
  usePageMeta({ title, description });

  return (
    <>
      <PageBanner title={title} description={description} />
      <section className="py-24">
        <Container>
          <div className="rounded-3xl bg-lightGray p-8 md:p-12">
            <SectionTitle eyebrow="Coming Soon" title={`${title} Content Foundation`} description="This page is wired into the enterprise React architecture and ready for detailed corporate content, media, SEO metadata, and conversion paths." />
          </div>
        </Container>
      </section>
    </>
  );
}
