import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import FinalCta from "@/components/sections/FinalCta";
import PageBanner from "@/components/ui/PageBanner";
import ProductionLine from "@/components/manufacturing/ProductionLine";
import Partners from "@/components/manufacturing/Partners";
import Facilities from "@/components/manufacturing/Facilities";
import Certifications from "@/components/manufacturing/Certifications";
import QualityTeaser from "@/components/manufacturing/QualityTeaser";

export const metadata = pageMetadata({
  title: "Manufacturing | Aspen Pharmaceuticals",
  description:
    "How Aspen products are made: established manufacturing partners, and GMP and ISO certifications.",
  path: "/manufacturing",
});

export default function ManufacturingPage() {
  return (
    <PageShell>
      <PageBanner title="Manufacturing" crumbs={[{ label: "Manufacturing" }]} />
      <ProductionLine />
      <Partners />
      <Facilities />
      <Certifications />
      <QualityTeaser />
      <FinalCta
        eyebrow="Partnerships"
        title="Interested in working with Aspen?"
        text="For manufacturing, distribution or partnership enquiries, our team is happy to help."
      />
    </PageShell>
  );
}
