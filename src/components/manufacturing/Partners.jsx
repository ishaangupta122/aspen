import RfReveal from "@/components/ui/RfReveal";
import { partners } from "@/data/manufacturing";

export default function Partners() {
  return (
    <section className="rf rf-section mf-partners" id="partners">
      <div className="rf-container">
        <RfReveal className="mf-phead">
          <div className="mf-pintro">
            <span className="rf-eyebrow">Manufacturing partners</span>
            <h2>Where Aspen products are made</h2>
            <p>Aspen products are made by established manufacturing partners.</p>
          </div>
        </RfReveal>
        <RfReveal>
          <ul className="mf-plist">
            {partners.map(({ name, image }, i) => (
              <li className="mf-prow" key={name}>
                <span className="mf-prow-num">0{i + 1}</span>
                <span className="mf-prow-logo">
                  {image ? (
                    <img src={image} alt={`${name} logo`} loading="lazy" />
                  ) : (
                    <span className="mf-wordmark" aria-hidden="true">
                      <b>Antibiotic</b>
                      <i>INDIA</i>
                    </span>
                  )}
                </span>
                <h3>{name}</h3>
              </li>
            ))}
          </ul>
        </RfReveal>
      </div>
    </section>
  );
}
