import Breadcrumbs from "@/components/ui/Breadcrumbs";

// Compact page banner: title + breadcrumbs over a patterned background.
export default function PageBanner({ title, crumbs = [], path }) {
  return (
    <section className="pb-banner">
      <div className="rf-container pb-inner">
        <h1>{title}</h1>
        <Breadcrumbs crumbs={crumbs} path={path} />
      </div>
    </section>
  );
}
