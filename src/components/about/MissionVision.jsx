import RfReveal from "@/components/ui/RfReveal";
import { mission, vision } from "@/data/about";

export default function MissionVision() {
  return (
    <section className="rf rf-section ab-mv" id="mission-vision">
      <div className="rf-container ab-mv-grid">
        <RfReveal className="ab-mv-card ab-mission">
          <span className="rf-eyebrow">Our mission</span>
          <p>{mission}</p>
        </RfReveal>
        <RfReveal className="ab-mv-card ab-vision">
          <span className="rf-eyebrow">Our vision</span>
          <p>{vision}</p>
        </RfReveal>
      </div>
    </section>
  );
}
