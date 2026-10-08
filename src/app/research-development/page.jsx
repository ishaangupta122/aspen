import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import RndIntro from "@/components/rnd/RndIntro";
import FocusAreas from "@/components/rnd/FocusAreas";
import DosageForms from "@/components/rnd/DosageForms";
import AdvancedTablets from "@/components/rnd/AdvancedTablets";
import DevelopmentApproach from "@/components/rnd/DevelopmentApproach";
import QualityStatement from "@/components/rnd/QualityStatement";
import RndCta from "@/components/rnd/RndCta";

export const metadata = pageMetadata({
  title: "Research & Development | Aspen Pharmaceuticals",
  description:
    "Formulation development at Aspen Pharmaceuticals: science-led innovation and patient-focused design across oral, liquid, injectable, topical and nutraceutical dosage forms.",
  path: "/research-development",
});

export default function ResearchDevelopmentPage() {
  return (
    <PageShell>
      <PageBanner title="Research & Development" crumbs={[{ label: "R&D" }]} />
      <RndIntro />
      <FocusAreas />
      <DosageForms />
      <AdvancedTablets />
      <DevelopmentApproach />
      <QualityStatement />
      <RndCta />
    </PageShell>
  );
}
