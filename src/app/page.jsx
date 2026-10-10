import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/hero/Hero";
import HeroBand from "@/components/hero/HeroBand";
import About from "@/components/sections/About";
import TherapeuticAreas from "@/components/sections/TherapeuticAreas";
import Quality from "@/components/sections/Quality";
import Sustainability from "@/components/sections/Sustainability";
import Reach from "@/components/sections/Reach";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <div id="highlights">
        <HeroBand />
      </div>
      <About />
      <TherapeuticAreas />
      <Quality />
      <Reach />
      <Sustainability />
    </PageShell>
  );
}
