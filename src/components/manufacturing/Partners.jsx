import RfReveal from "@/components/ui/RfReveal";
import { partners } from "@/data/manufacturing";

export default function Partners() {
  return (
    <section className="rf rf-section mf-partners" id="partners">
      <div className="rf-container">
        <RfReveal className="mf-partners-head">
          <span className="rf-eyebrow">Manufacturing partners</span>
          <h2>Where Aspen products are made</h2>
        </RfReveal>
        <div className="mf-partner-grid">
          {partners.map(({ name, image }) => (
            <RfReveal className="mf-partner" key={name}>
              <span className="mf-partner-mark">
                {image ? (
                  <img src={image} alt={`${name} logo`} loading="lazy" />
                ) : (
                  <b>{name.split(" ").slice(0, 2).map((w) => w[0]).join("")}</b>
                )}
              </span>
              <strong>{name}</strong>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
