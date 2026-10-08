import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { commitments } from "@/data/about";

export default function Commitments() {
  return (
    <section className="rf rf-section ab-commit" id="commitments">
      <div className="rf-container ab-commit-grid">
        {commitments.map((item, index) => (
          <RfReveal className="ab-commit-card" key={item.key}>
            {item.image && (
              <div className="ab-commit-image">
                <img src={images[item.image]} alt={item.alt} loading="lazy" />
              </div>
            )}
            <span className="ab-commit-num">0{index + 1}</span>
            <h3>{item.title}</h3>
            {item.lead && <p className="ab-commit-lead">{item.lead}</p>}
            {item.chips && (
              <ul className="ab-chips">
                {item.chips.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            )}
            {item.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </RfReveal>
        ))}
      </div>
    </section>
  );
}
