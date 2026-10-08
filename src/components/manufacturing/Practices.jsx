import RfReveal from "@/components/ui/RfReveal";
import { practices, qcqa } from "@/data/manufacturing";

export default function Practices() {
  return (
    <section className="rf rf-section pq" id="practices">
      <div className="rf-container pq-grid">
        <RfReveal className="pq-intro">
          <span className="rf-eyebrow">Quality practices</span>
          <h2>{practices.title}</h2>
          {practices.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </RfReveal>
        <div className="pq-side">
          <RfReveal className="pq-label">{qcqa.title}</RfReveal>
          <div className="pq-list">
            {qcqa.cards.map(([title, text], i) => (
              <RfReveal className="pq-row" key={title}>
                <span className="pq-idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </RfReveal>
            ))}
          </div>
          <RfReveal className="pq-closing">{qcqa.closing}</RfReveal>
        </div>
      </div>
    </section>
  );
}
