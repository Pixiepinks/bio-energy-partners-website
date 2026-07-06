export function setPageMeta({ title, description }) {
  document.title = title ? `${title} | Bio Energy Partners` : 'Bio Energy Partners (Pvt) Ltd';

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) {
    metaDescription.setAttribute('content', description);
  }
}
