import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import ProductsClosing from "@/components/products/ProductsClosing";
import ProductsOverview from "@/components/products/ProductsOverview";
import ProductCatalogue from "@/components/products/ProductCatalogue";

export const metadata = pageMetadata({
  title: "Pharmaceutical products by specialty | Aspen Pharmaceuticals",
  description:
    "Browse Aspen Pharmaceuticals' range of finished dosage forms by medical specialty, with composition, category and pack details for each brand.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <PageShell>
      <PageBanner
        title="Therapeutic Products"
        crumbs={[{ label: "Products" }]}
        path="/products"
      />
      <ProductsOverview />
      <ProductCatalogue />
      <ProductsClosing />
    </PageShell>
  );
}
