import Link from "@/components/ui/SiteLink";
import { notFound } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import { findSpecialty, specialtyPages } from "@/lib/specialties";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import SpecialtyProducts from "@/components/products/SpecialtyProducts";
import ProductsClosing from "@/components/products/ProductsClosing";

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
  const others = specialtyPages.filter((o) => o.slug !== s.slug);

  return (
    <PageShell>
      <PageBanner
        title={`${s.name} products`}
        crumbs={[{ label: "Products", href: "/products" }, { label: s.name }]}
        path={s.href}
      />
      <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-white)]">
        <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
          <SpecialtyProducts name={s.name} products={s.products} />
          <nav className="mt-14" aria-label="Other specialties">
            <h2 className="mx-0 mt-0 mb-4 text-navy font-semibold text-[20px] leading-[normal] font-heading tracking-[-0.4px]">Other specialties</h2>
            <ul className="m-0 p-0 flex flex-wrap gap-y-2 gap-x-2.5 [list-style:none]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link className="px-4 py-2 rounded-[var(--radius-md)] border border-solid border-[color:var(--rf-line)] inline-block text-[color:var(--rf-muted)] text-[14px] [transition:color_var(--dur-fast),border-color_var(--dur-fast)] hover:border-[color:var(--rf-teal)] hover:text-navy" href={o.href}>{o.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
      <ProductsClosing />
    </PageShell>
  );
}
