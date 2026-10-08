import Link from "next/link";
import { ChevronRight } from "lucide-react";
import JsonLd from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

// Breadcrumb trail shown under inner-page titles (Home › …).
export default function Breadcrumbs({ crumbs = [], path }) {
  // Structured data mirrors the visible trail; the last crumb is the current page.
  const trail = crumbs
    .map((c, i) => [c.label, c.href || (i === crumbs.length - 1 ? path : null)])
    .filter(([, p]) => p);
  return (
    <nav className="pb-crumbs" aria-label="Breadcrumb">
      {trail.length === crumbs.length && (
        <JsonLd data={breadcrumbSchema(trail)} />
      )}
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {crumbs.map(({ label, href }, i) => (
          <li
            key={label}
            aria-current={i === crumbs.length - 1 ? "page" : undefined}
          >
            <ChevronRight size={14} />
            {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
