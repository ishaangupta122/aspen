import { pageMetadata } from "@/lib/seo";
import PageShell from "@/components/layout/PageShell";
import FinalCta from "@/components/sections/FinalCta";
import AboutHero from "@/components/about/AboutHero";
import Foundation from "@/components/about/Foundation";
import Journey from "@/components/about/Journey";
import MissionVision from "@/components/about/MissionVision";
import Commitments from "@/components/about/Commitments";
import CoreValues from "@/components/about/CoreValues";
import Direction from "@/components/about/Direction";

export const metadata = pageMetadata({
  title: "About Us | Aspen Pharmaceuticals",
  description:
    "Aspen Pharmaceuticals is an Indian pharmaceutical company established in 2010, serving healthcare professionals across North India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />
      <Foundation />
      <Journey />
      <MissionVision />
      <Commitments />
      <CoreValues />
      <Direction />
      <FinalCta
        eyebrow="Work with Aspen"
        title="Questions about Aspen?"
        text="For product information, distribution or partnership enquiries, our team is happy to help."
      />
    </PageShell>
  );
}
