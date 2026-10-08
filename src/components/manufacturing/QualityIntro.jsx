import RfReveal from "@/components/ui/RfReveal";
import { qc } from "@/data/manufacturing";

export default function QualityIntro() {
  return (
    <section className="rf rf-section mf-qintro" id="quality">
      <div className="rf-container mf-qintro-grid">
        <RfReveal>
          <span className="rf-eyebrow">{qc.eyebrow}</span>
          <h2>{qc.title}</h2>
          <p className="mf-qtag">{qc.tagline}</p>
        </RfReveal>
        <RfReveal className="mf-qintro-copy">
          <p className="mf-qlead">{qc.paragraphs[0]}</p>
          <p>{qc.paragraphs[1]}</p>
        </RfReveal>
      </div>
    </section>
  );
}
