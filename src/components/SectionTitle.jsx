export function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-primary">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-dark md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-charcoal/80 md:text-lg">{description}</p>}
    </div>
  );
}
