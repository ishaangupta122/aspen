import Link from "@/components/ui/SiteLink";
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
    <nav className="mt-[18px]" aria-label="Breadcrumb">
      {trail.length === crumbs.length && (
        <JsonLd data={breadcrumbSchema(trail)} />
      )}
      <ol className="m-0 p-0 gap-1.5 flex flex-wrap items-center [list-style:none] font-medium text-[15.5px] leading-[normal] font-body max-[700px]:text-[14.5px]">
        <li className="gap-1.5 inline-flex items-center text-on-dark-2">
          <Link className="hover:text-white py-2.5 inline-block" href="/">Home</Link>
        </li>
        {crumbs.map(({ label, href }, i) => (
          <li className="gap-1.5 inline-flex items-center text-on-dark-2 [&[aria-current]]:font-semibold [&[aria-current]]:text-[15.5px]"
            key={label}
            aria-current={i === crumbs.length - 1 ? "page" : undefined}
          >
            <ChevronRight size={14} />
            {href ? <Link className="hover:text-white py-2.5 inline-block" href={href}>{label}</Link> : <span className="text-[color:var(--c-mint)] font-semibold text-[15.5px] max-[700px]:text-[14.5px]">{label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
