import RfReveal from "@/components/ui/RfReveal";
import { intro } from "@/data/about";

export default function Foundation() {
  return (
    <section className="rf rf-section ab-foundation" id="foundation">
      <div className="rf-container ab-foundation-grid">
        <RfReveal>
          <span className="rf-eyebrow">Our foundation</span>
          <p className="ab-foundation-lead">{intro.foundation[0]}</p>
        </RfReveal>
        <RfReveal className="ab-foundation-side">
          <p className="ab-foundation-intro">{intro.lead}</p>
          <p>{intro.foundation[1]}</p>
        </RfReveal>
      </div>
    </section>
  );
}
