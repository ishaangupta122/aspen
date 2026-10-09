import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import StageSelector from "@/components/manufacturing/StageSelector";
import { stages } from "@/data/manufacturing";

export default function QualityStages() {
  return (
    <section className="rf rf-section mf-stages" id="quality-stages">
      <div className="rf-container">
        <RfReveal className="qr-head">
          <RfHeading eyebrow={stages.eyebrow} title={stages.title} />
          <p className="qr-lead">
            Testing is carried out at defined points: when materials arrive,
            during manufacture, before a batch is released, and over the
            shelf life of the product.
          </p>
        </RfReveal>
        <RfReveal>
          <StageSelector items={stages.items} />
        </RfReveal>
      </div>
    </section>
  );
}
