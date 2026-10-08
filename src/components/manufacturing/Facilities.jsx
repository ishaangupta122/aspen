import RfReveal from "@/components/ui/RfReveal";
import { facilities } from "@/data/manufacturing";

export default function Facilities() {
  return (
    <section className="rf rf-section fx" id="facilities">
      <div className="fx-glow" aria-hidden="true" />
      <div className="rf-container">
        <RfReveal className="fx-head">
          <div>
            <span className="rf-eyebrow">{facilities.eyebrow}</span>
            <h2>{facilities.title}</h2>
          </div>
          <p>{facilities.copy}</p>
        </RfReveal>
        <div className="fx-grid">
          {facilities.items.map((item, i) => (
            <RfReveal className={`fx-item fx-item-${i + 1}`} key={item.caption}>
              <img src={item.image} alt={item.caption} loading="lazy" />
              <div className="fx-cap">
                <span>0{i + 1}</span>
                <p>{item.caption}</p>
              </div>
            </RfReveal>
          ))}
        </div>
        <p className="fx-note">{facilities.note}</p>
      </div>
    </section>
  );
}
