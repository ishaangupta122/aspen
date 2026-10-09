import RfReveal from "@/components/ui/RfReveal";
import { focusAreas } from "@/data/rnd";

export default function FocusAreas() {
  return (
    <section className="rf rf-section rn-focus" id="focus">
      <div className="rf-container">
        <RfReveal className="rn-fhead">
          <div>
            <span className="rf-eyebrow">Research focus</span>
            <h2>Core areas of formulation work</h2>
          </div>
          <p>Five areas where our development effort is concentrated.</p>
        </RfReveal>
        <ol className="rn-frows">
          {focusAreas.map(({ title, text }, index) => (
            <RfReveal as="li" className="rn-frow" key={title}>
              <span className="rn-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </RfReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
