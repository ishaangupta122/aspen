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
          {focusAreas.map(({ title, text, image }, index) => (
            <RfReveal className="rd-focus-card" key={title}>
              <img className="rd-focus-img" src={image} alt="" loading="lazy" />
              <span className="rd-num">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
