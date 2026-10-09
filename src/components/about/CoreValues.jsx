import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import { values } from "@/data/about";

export default function CoreValues() {
  return (
    <section className="rf rf-section ab-values" id="values">
      <div className="rf-container">
        <RfReveal>
          <RfHeading
            eyebrow="Our core values"
            title="The principles behind every decision."
          />
        </RfReveal>
        <div className="ab-values-grid">
          {values.map(({ title, text }, index) => (
            <RfReveal className="ab-value" key={title}>
              <span className="ab-value-num">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
