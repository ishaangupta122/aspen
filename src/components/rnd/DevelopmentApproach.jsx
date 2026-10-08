import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import { stages } from "@/data/rnd";

export default function DevelopmentApproach() {
  return (
    <section className="rf rf-section rd-approach" id="approach">
      <div className="rf-container">
        <RfReveal>
          <RfHeading
            eyebrow="Our development approach"
            title="Five stages from concept to evidence"
          />
        </RfReveal>
        <ol className="rd-stages">
          {stages.map((stage, index) => (
            <RfReveal as="li" className="rd-stage" key={stage.title}>
              <div className="rd-stage-body">
                <span className="rd-stage-dot">{index + 1}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </div>
            </RfReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
