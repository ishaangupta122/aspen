import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import FinalCta from "@/components/sections/FinalCta";
import PageBanner from "@/components/ui/PageBanner";
import QualityIntro from "@/components/manufacturing/QualityIntro";
import QualityStages from "@/components/manufacturing/QualityStages";
import Practices from "@/components/manufacturing/Practices";
import QualityCommitment from "@/components/manufacturing/QualityCommitment";

export const metadata = pageMetadata({
  title: "Quality | Aspen Pharmaceuticals",
  description:
    "How quality is evaluated for Aspen products, from incoming raw and packing materials to finished dosage forms and stability studies.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <PageShell>
      <PageBanner title="Quality" crumbs={[{ label: "Quality" }]} />
      <QualityIntro />
      <QualityStages />
      <Practices />
      <QualityCommitment />
      <FinalCta
        eyebrow="Quality enquiries"
        title="Questions about our quality approach?"
        text="For product quality information or partnership enquiries, get in touch with our team."
      />
    </PageShell>
  );
}
