import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import PageBanner from "@/components/ui/PageBanner";
import QualityIntro from "@/components/manufacturing/QualityIntro";
import QualityStages from "@/components/manufacturing/QualityStages";
import Practices from "@/components/manufacturing/Practices";
import QualityCommitment from "@/components/manufacturing/QualityCommitment";
import QualityClosing from "@/components/manufacturing/QualityClosing";

export const metadata = pageMetadata({
  title: "Quality control & testing | Aspen Pharmaceuticals",
  description:
    "How quality is evaluated for Aspen products, from incoming raw and packing materials to finished dosage forms and stability studies.",
  path: "/quality",
});

export default function QualityPage() {
  return (
    <PageShell>
      <PageBanner
        title="Quality at every stage"
        crumbs={[{ label: "Quality" }]}
        path="/quality"
      />
      <QualityIntro />
      <QualityStages />
      <Practices />
      <QualityCommitment />
      <QualityClosing />
    </PageShell>
  );
}
