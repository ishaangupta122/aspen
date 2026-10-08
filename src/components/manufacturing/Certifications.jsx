import { Award, FlaskConical, Globe2, ShieldCheck } from "lucide-react";
import RfReveal from "@/components/ui/RfReveal";
import { certifications } from "@/data/manufacturing";

const icons = [ShieldCheck, Globe2, Award, FlaskConical];

// Each certification is [name, detail, image?]. Add the certificate / mark image path (for example
// "/certs/eu-gmp.png" in /public) as the third item to show it instead of the icon.
export default function Certifications() {
  return (
    <section className="rf rf-section mc" id="certifications">
      <div className="rf-container">
        <RfReveal className="mc-head">
          <div>
            <span className="rf-eyebrow">Certifications</span>
            <h2>Standards we build around</h2>
          </div>
        </RfReveal>
        <div className="mc-grid">
          {certifications.map(([name, detail, image], i) => {
            const Icon = icons[i % icons.length];
            return (
            <RfReveal className="mc-card" key={name}>
              <span className="mc-num">0{i + 1}</span>
              <span className="mc-badge">
                {image ? <img src={image} alt={`${name} certification`} loading="lazy" /> : <Icon size={38} strokeWidth={1.3} />}
              </span>
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
