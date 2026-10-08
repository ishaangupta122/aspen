import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import { focusAreas } from "@/data/rnd";

export default function FocusAreas() {
  return (
    <section className="rf rf-section rd-focus" id="focus">
      <div className="rf-container">
        <RfReveal>
          <RfHeading
            eyebrow="Research focus"
            title="Core areas of formulation work"
          />
        </RfReveal>
        <div className="rd-focus-grid">
          {focusAreas.map(({ title, text, icon: Icon }, index) => (
            <RfReveal className="rd-focus-card" key={title}>
              <div className="rd-focus-top">
                <span className="rd-icon">
                  <Icon size={24} />
                </span>
                <span className="rd-num">0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
