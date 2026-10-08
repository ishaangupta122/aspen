import RfReveal from "@/components/ui/RfReveal";
import { tablets } from "@/data/rnd";

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
              src={tablets.image}
              alt={tablets.imageAlt}
              loading="lazy"
            />
          </div>
        </RfReveal>
        <div className="rd-tablets-list">
          {tablets.items.map((item) => (
            <RfReveal className="rd-tablet-card" key={item.key}>
              <span className="rd-diagram">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={520}
                  height={347}
                  loading="lazy"
                  decoding="async"
                />
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
