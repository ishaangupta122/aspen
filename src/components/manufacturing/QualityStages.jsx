import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import { stages } from "@/data/manufacturing";

export default function QualityStages() {
  return (
    <section className="rf rf-section mf-stages" id="quality-stages">
      <div className="rf-container">
        <RfReveal>
          <RfHeading eyebrow={stages.eyebrow} title={stages.title} />
        </RfReveal>
        <div className="qs-steps">
          {stages.items.map(({ title, text, tags }, index) => (
            <RfReveal className="qs-item" key={title}>
              <div className="qs-row">
                <span className="qs-num">0{index + 1}</span>
                <h3>{title}</h3>
                <div className="qs-body">
                  <p>{text}</p>
                  <div className="qs-tags">
                    {tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
