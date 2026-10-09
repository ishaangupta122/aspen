import RfReveal from "@/components/ui/RfReveal";
import { careers } from "@/data/contact";

export default function Careers() {
  return (
    <section className="rf cr-section" id="careers">
      <div className="rf-container">
        <RfReveal className="cr-head">
          <div>
            <span className="rf-eyebrow">{careers.eyebrow}</span>
            <h2>{careers.title}</h2>
          </div>
        </RfReveal>
        <ul className="cr-reasons">
          {careers.reasons.map(({ title, text }) => (
            <RfReveal as="li" className="cr-reason" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </RfReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
