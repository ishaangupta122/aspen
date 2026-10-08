import Link from "next/link";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { findSpecialty, specialtyPages } from "@/lib/specialties";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import FinalCta from "@/components/sections/FinalCta";

export const dynamicParams = false;

export function generateStaticParams() {
  return specialtyPages.map((s) => ({ specialty: s.slug }));
}

export async function generateMetadata({ params }) {
  const { specialty } = await params;
  const s = findSpecialty(specialty);
  if (!s) return {};
  const n = s.products.length;
  return pageMetadata({
    title: `${s.name} products | Aspen Pharmaceuticals`,
    description: `${n} Aspen Pharmaceuticals ${n === 1 ? "product" : "products"} for ${s.name}, listed with composition, category, dosage form and pack size.`,
    path: s.href,
  });
}

export default async function SpecialtyPage({ params }) {
  const { specialty } = await params;
  const s = findSpecialty(specialty);
  if (!s) notFound();
  const n = s.products.length;
  const others = specialtyPages.filter((o) => o.slug !== s.slug);

  return (
    <PageShell>
      <PageBanner
        title={`${s.name} products`}
        crumbs={[{ label: "Products", href: "/products" }, { label: s.name }]}
        path={s.href}
      />
      <section className="rf rf-section sp-section">
        <div className="rf-container">
          <div className="sp-head">
            <p>
              {n} {n === 1 ? "product" : "products"} in our range for {s.name},
              listed A–Z by brand. Use the{" "}
              <Link
                href={`/products?specialty=${encodeURIComponent(s.name)}#catalogue`}
              >
                product catalogue
              </Link>{" "}
              to search and open condensed monographs.
            </p>
          </div>
          <div
            className="sp-table-wrap"
            tabIndex={0}
            role="region"
            aria-label={`${s.name} products table`}
          >
            <table className="sp-table">
              <caption className="sp-sr">{s.name} products</caption>
              <thead>
                <tr>
                  <th scope="col">Brand</th>
                  <th scope="col">Composition</th>
                  <th scope="col">Category</th>
                  <th scope="col">Form</th>
                  <th scope="col">Pack</th>
                </tr>
              </thead>
              <tbody>
                {s.products.map((p) => (
                  <tr key={p.id}>
                    <th scope="row">{p.brand}</th>
                    <td>{p.composition}</td>
                    <td>{p.category}</td>
                    <td>{p.form}</td>
                    <td>{p.pack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <nav className="sp-others" aria-label="Other specialties">
            <h2>Other specialties</h2>
            <ul>
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={o.href}>{o.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <FinalCta
        eyebrow="Product enquiries"
        title="Looking for product information?"
        text="For product details, distribution or partnership enquiries, our team is happy to help."
      />
    </PageShell>
  );
}
