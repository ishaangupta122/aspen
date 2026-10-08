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
  title: "Formulation development | Aspen Pharmaceuticals R&D",
  description:
    "Science-led, patient-focused formulation development at Aspen Pharmaceuticals across oral, liquid, injectable, topical and nutraceutical dosage forms.",
  path: "/research-development",
});

export default function ResearchDevelopmentPage() {
  return (
    <PageShell>
      <PageBanner
        title="Science-led formulation development"
        crumbs={[{ label: "R&D" }]}
        path="/research-development"
      />
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
