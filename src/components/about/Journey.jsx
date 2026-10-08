import RfReveal from "@/components/ui/RfReveal";
import FounderPortrait from "@/components/about/FounderPortrait";
import { journey } from "@/data/about";

export default function Journey() {
  return (
    <section className="rf rf-section ab-journey" id="journey">
      <div className="rf-container ab-journey-grid">
        <RfReveal className="ab-journey-main">
          <span className="rf-eyebrow">Our journey</span>
          <h2>{journey.title}</h2>
          <dl className="ab-facts">
            {journey.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </RfReveal>
        <RfReveal className="ab-journey-copy">
          <figure className="ab-founder">
            <FounderPortrait src="/founder.jpg" name="Anup Goyal" />
            <figcaption>
              <strong>Anup Goyal</strong>
              <span>Founder</span>
            </figcaption>
          </figure>
          <p>
            Aspen was founded by <strong>Anup Goyal</strong>, whose experience
            in pharmaceutical sales and marketing provided a close understanding
            of clinical needs and the healthcare market.
          </p>
          <p>{journey.paragraphs[1]}</p>
          <p>{journey.paragraphs[2]}</p>
        </RfReveal>
      </div>
    </section>
  );
}
