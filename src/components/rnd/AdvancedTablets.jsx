import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { tablets } from "@/data/rnd";

function Diagram({ type }) {
  if (type === "bilayer") {
    return (
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <rect x="8" y="14" width="56" height="20" rx="10" fill="#28746e" />
        <rect x="8" y="38" width="56" height="20" rx="10" fill="#15539c" />
      </svg>
    );
  }
  if (type === "nested") {
    return (
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <circle cx="36" cy="36" r="28" fill="#15539c" />
        <circle cx="36" cy="36" r="15" fill="#fff" />
        <circle cx="36" cy="36" r="9" fill="#28746e" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true">
      <circle cx="27" cy="36" r="20" fill="#28746e" fillOpacity="0.85" />
      <circle cx="45" cy="36" r="20" fill="#15539c" fillOpacity="0.8" />
    </svg>
  );
}

export default function AdvancedTablets() {
  return (
    <section className="rf rf-section rd-tablets" id="tablets">
      <div className="rf-container rd-tablets-grid">
        <RfReveal className="rd-tablets-copy">
          <span className="rf-eyebrow">Complex oral formulations</span>
          <h2>Advanced tablet architectures</h2>
          <p>{tablets.intro}</p>
          <div className="rd-tablets-image">
            <img
              src={images.equipment}
              alt="Gloved hand holding laboratory glassware"
              loading="lazy"
            />
          </div>
        </RfReveal>
        <div className="rd-tablets-list">
          {tablets.items.map((item) => (
            <RfReveal className="rd-tablet-card" key={item.key}>
              <span className="rd-diagram">
                <Diagram type={item.key} />
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
