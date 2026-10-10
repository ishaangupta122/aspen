import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/hero/Hero";
import HeroBand from "@/components/hero/HeroBand";
import About from "@/components/sections/About";
import TherapeuticAreas from "@/components/sections/TherapeuticAreas";
import Portfolio from "@/components/sections/Portfolio";
import Quality from "@/components/sections/Quality";
// import People from "@/components/sections/People"; // "Our approach" section: hidden for now, file kept.
import Sustainability from "@/components/sections/Sustainability";
import Reach from "@/components/sections/Reach";
// import FinalCta from "@/components/sections/FinalCta"; // "Start a conversation" section: hidden for now, file kept.

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <div id="highlights">
        <HeroBand />
      </div>
      <About />
      <TherapeuticAreas />
      {/* <Portfolio /> */}
      <Quality />
      <Reach />
      <Sustainability />
      {/* <People /> */}
      {/* <FinalCta /> */}
    </PageShell>
  );
}
