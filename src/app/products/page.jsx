import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import FinalCta from "@/components/sections/FinalCta";
import ProductsOverview from "@/components/products/ProductsOverview";
import ProductCatalogue from "@/components/products/ProductCatalogue";

export const metadata = pageMetadata({
  title: "Products | Aspen Pharmaceuticals",
  description:
    "Explore Aspen's portfolio of finished dosage forms and browse our products by medical specialty.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <PageShell>
      <PageBanner title="Products" crumbs={[{ label: "Products" }]} />
      <ProductsOverview />
      <ProductCatalogue />
      <FinalCta />
    </PageShell>
  );
}
