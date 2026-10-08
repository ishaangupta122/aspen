import { FlaskConical, HeartPulse, ShieldCheck } from "lucide-react";
import RfReveal from "@/components/ui/RfReveal";
import { careers } from "@/data/contact";

const icons = { science: FlaskConical, quality: ShieldCheck, reach: HeartPulse };

export default function Careers() {
  return (
    <section className="rf rf-section ct-careers" id="careers">
      <div className="rf-container">
        <RfReveal className="ct-careers-head">
          <div className="rf-heading">
            <span className="rf-eyebrow">{careers.eyebrow}</span>
            <h2>{careers.title}</h2>
          </div>
          <p>{careers.copy}</p>
        </RfReveal>
        <div className="ct-career-grid">
          {careers.reasons.map(({ title, text, icon }) => {
            const Icon = icons[icon];
            return (
              <RfReveal key={title}>
                <div className="ct-career">
                  <span className="rd-icon">
                    <Icon size={22} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </RfReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
