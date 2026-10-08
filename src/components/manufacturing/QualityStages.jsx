import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import StageSelector from "@/components/manufacturing/StageSelector";
import { stages } from "@/data/manufacturing";

export default function QualityStages() {
  return (
    <section className="rf rf-section mf-stages" id="quality-stages">
      <div className="rf-container">
        <RfReveal>
          <RfHeading eyebrow={stages.eyebrow} title={stages.title} />
        </RfReveal>
        <RfReveal>
          <StageSelector items={stages.items} />
        </RfReveal>
      </div>
    </section>
  );
}
