import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";

export const metadata = {
  title: "Page not found | Aspen Pharmaceuticals",
  robots: { index: false },
};

const links = [
  ["Products", "/products"],
  ["About", "/about"],
  ["Quality", "/quality"],
  ["Contact", "/contact"],
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="pb-banner nf">
        <div className="rf-container pb-inner nf-inner">
          <span className="nf-ghost" aria-hidden="true">
            404
          </span>
          <p className="nf-code">Error 404</p>
          <h1>Page not found</h1>
          <p className="nf-text">
            The page you are looking for may have moved, or the address may be
            mistyped.
          </p>
          <div className="nf-actions">
            <Link className="nf-btn" href="/">
              Back to home
              <ArrowRight size={17} />
            </Link>
          </div>
          <nav className="nf-links" aria-label="Helpful pages">
            <span>Or go to</span>
            {links.map(([label, href]) => (
              <Link href={href} key={href}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
