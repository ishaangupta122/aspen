import { pageMetadata } from "@/lib/seo";
import JsonLd from "@/components/ui/JsonLd";
import { pageSchema } from "@/lib/schema";
import PageShell from "@/components/layout/PageShell";
import ClosingBand from "@/components/ui/ClosingBand";
import PageBanner from "@/components/ui/PageBanner";
import Foundation from "@/components/about/Foundation";
import Journey from "@/components/about/Journey";
import MissionVision from "@/components/about/MissionVision";
import Commitments from "@/components/about/Commitments";
import CoreValues from "@/components/about/CoreValues";
import Direction from "@/components/about/Direction";

export const metadata = pageMetadata({
  title: "About Aspen Pharmaceuticals | Indian pharma company since 2010",
  description:
    "Learn about Aspen Pharmaceuticals, an Indian pharmaceutical company established in 2010: our journey, mission, values and direction.",
  path: "/about",
});

const schema = pageSchema("AboutPage", {
  name: metadata.title,
  description: metadata.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd data={schema} />
      <PageBanner title="About Aspen" crumbs={[{ label: "About" }]} path="/about" />
      <Foundation />
      <Journey />
      <MissionVision />
      <Commitments />
      <CoreValues />
      <Direction />
      <ClosingBand
        id="contact"
        eyebrow="Work with Aspen"
        title="Questions about Aspen?"
        paragraphs={["For product information, distribution or partnership enquiries, our team is happy to help and will respond promptly."]}
      />
    </PageShell>
  );
}
