import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { journey } from "@/data/about";

export default function Journey() {
  return (
    <section className="rf rf-section ab-journey" id="journey">
      <div className="rf-container">
        <div className="ab-journey-grid">
          <RfReveal className="ab-journey-side">
            <figure className="ab-journey-figure">
              <div className="ab-journey-photo">
                <img
                  src={images.about}
                  alt="Pipette dispensing into laboratory test tubes"
                  loading="lazy"
                />
              </div>
              <figcaption>Based in Ghaziabad, Uttar Pradesh</figcaption>
            </figure>
          </RfReveal>
          <RfReveal className="ab-journey-main">
            <span className="rf-eyebrow">Our journey</span>
            <h2>{journey.title}</h2>
            <div className="ab-journey-copy">
              <p>
                Aspen was founded by <strong>Anup Goyal</strong>, whose
                experience in pharmaceutical sales and marketing provided a
                close understanding of clinical needs and the healthcare market.
              </p>
              <p>{journey.paragraphs[1]}</p>
              <p>{journey.paragraphs[2]}</p>
            </div>
          </RfReveal>
        </div>
        <RfReveal>
          <dl className="ab-facts">
            {journey.facts.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </RfReveal>
      </div>
    </section>
  );
}
