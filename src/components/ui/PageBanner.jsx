import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Compact page banner: title + breadcrumbs over a patterned background.
export default function PageBanner({ title, crumbs = [] }) {
  return (
    <section className="pb-banner">
      <div className="rf-container pb-inner">
        <h1>{title}</h1>
        <nav className="pb-crumbs" aria-label="Breadcrumb">
          <ol>
            <li>
              <Link href="/">Home</Link>
            </li>
            {crumbs.map(({ label, href }, i) => (
              <li key={label} aria-current={i === crumbs.length - 1 ? "page" : undefined}>
                <ChevronRight size={14} />
                {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
