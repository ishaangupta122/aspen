import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import { stages } from "@/data/rnd";

export default function DevelopmentApproach() {
  return (
    <section className="rf rf-section rn-approach" id="approach">
      <div className="rf-container">
        <RfReveal>
          <RfHeading
            eyebrow="Our development approach"
            title="Five stages from concept to evidence"
          />
        </RfReveal>
        <ol className="qr qr--plain">
          {stages.map((stage, index) => (
            <li className="qr-step" key={stage.title}>
              <span className="qr-node" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
