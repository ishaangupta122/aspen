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
  title: "Manufacturing partners & facilities | Aspen Pharmaceuticals",
  description:
    "How Aspen products are made: our established manufacturing partners and facilities, the general production process, and GMP and ISO certifications.",
  path: "/manufacturing",
});

export default function ManufacturingPage() {
  return (
    <PageShell>
      <PageBanner
        title="Manufactured with established partners"
        crumbs={[{ label: "Manufacturing" }]}
        path="/manufacturing"
      />
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
