import RfReveal from "@/components/ui/RfReveal";
import { partners } from "@/data/manufacturing";

export default function Partners() {
  return (
    <section className="rf rf-section mf-partners" id="partners">
      <div className="rf-container">
        <RfReveal className="mf-partners-head">
          <span className="rf-eyebrow">Manufacturing partners</span>
          <h2>Where Aspen products are made</h2>
          <p>Aspen products are made by established manufacturing partners.</p>
        </RfReveal>
        <ul className="mf-pcards">
          {partners.map(({ name, image }) => (
            <li className="mf-pcard" key={name}>
              {image ? (
                <div
                  className="mf-pcard-logo"
                  role="img"
                  aria-label={`${name} logo`}
                  style={{ backgroundImage: `url(${image})` }}
                />
              ) : (
                <div className="mf-pcard-logo is-text" aria-hidden="true">
                  {name}
                </div>
              )}
              <h3>{name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
