export default function resolveProductionUrl(document) {
  if (!document.slug) return;
  const slug = document.slug.current === 'root' ? '' : document.slug.current;
  return `http://localhost:3000/${slug}`;
}