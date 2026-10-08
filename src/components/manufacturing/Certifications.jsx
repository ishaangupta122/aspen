import RfReveal from "@/components/ui/RfReveal";
import { certifications } from "@/data/manufacturing";

// Each certification is [name, detail, image?]. Add the certificate / mark image path (for example
// "/certs/eu-gmp.png" in /public) as the third item to show it on the card.
export default function Certifications() {
  return (
    <section className="rf rf-section mc" id="certifications">
      <div className="rf-container">
        <RfReveal className="mc-head">
          <div>
            <span className="rf-eyebrow">Certifications</span>
            <h2>Quality and manufacturing standards</h2>
          </div>
        </RfReveal>
        <div className="mc-grid">
          {certifications.map(([name, detail, image], i) => {
            return (
              <RfReveal className="mc-card" key={name}>
                <span className="mc-num">0{i + 1}</span>
                {image && (
                  <span className="mc-badge">
                    <img
                      src={image}
                      alt={`${name} certification`}
                      loading="lazy"
                    />
                  </span>
                )}
                <strong>{name}</strong>
                <span className="mc-detail">{detail}</span>
              </RfReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
