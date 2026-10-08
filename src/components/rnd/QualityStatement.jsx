import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { quality } from "@/data/rnd";

export default function QualityStatement() {
  return (
    <section className="rf rd-quality-section" id="quality">
      <div className="rf-container">
        <div className="rd-quality">
          <RfReveal className="rd-quality-image">
            <img
              src={images.researcher}
              alt="Scientist working in a laminar-flow hood"
              loading="lazy"
            />
          </RfReveal>
          <RfReveal className="rd-quality-copy">
            <span className="rf-eyebrow">Quality built into development</span>
            <h2>{quality.title}</h2>
            {quality.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </RfReveal>
        </div>
      </div>
    </section>
  );
}
