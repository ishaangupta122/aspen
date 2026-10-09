import RfReveal from "@/components/ui/RfReveal";
import { tablets } from "@/data/rnd";

export default function AdvancedTablets() {
  return (
    <section className="rf rf-section rn-tablets" id="tablets">
      <div className="rf-container">
        <RfReveal className="rn-tablets-top">
          <div>
            <span className="rf-eyebrow">Complex oral formulations</span>
            <h2>Advanced tablet architectures</h2>
          </div>
          <p>{tablets.intro}</p>
        </RfReveal>
        <ul className="rn-tcols">
          {tablets.items.map((item) => (
            <RfReveal as="li" className="rn-tcol" key={item.key}>
              <img
                src={item.image}
                alt={item.imageAlt}
                width={520}
                height={347}
                loading="lazy"
                decoding="async"
              />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </RfReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
