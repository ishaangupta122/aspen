import Link from "next/link";
import PageShell from "@/components/layout/PageShell";

export const metadata = { title: "Page not found | Aspen Pharmaceuticals", robots: { index: false } };

export default function NotFound() {
  return (
    <PageShell>
      <section className="nf">
        <div className="container nf-inner">
          <p className="nf-code">404</p>
          <h1>This page can’t be found.</h1>
          <p>The page may have moved or the address may be mistyped.</p>
          <Link className="button button-primary" href="/">
            Back to home
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
