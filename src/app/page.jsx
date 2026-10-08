import PageShell from "@/components/layout/PageShell";
import HeroPreview from "@/components/hero/HeroPreview";
import StatStrip from "@/components/sections/StatStrip";
import About from "@/components/sections/About";
import TherapeuticAreas from "@/components/sections/TherapeuticAreas";
import Portfolio from "@/components/sections/Portfolio";
import Quality from "@/components/sections/Quality";
import People from "@/components/sections/People";
import Sustainability from "@/components/sections/Sustainability";
import Reach from "@/components/sections/Reach";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <PageShell>
      <HeroPreview />
      <div id="highlights">
        <StatStrip />
      </div>
      <About />
      <TherapeuticAreas />
      <Reach />
      <Sustainability />
      <Portfolio />
      <Quality />
      <People />
      <FinalCta />
    </PageShell>
  );
}
