import RfReveal from "@/components/ui/RfReveal";
import { direction } from "@/data/about";

export default function Direction() {
  return (
    <section className="rf ab-direction-section" id="direction">
      <div className="rf-container">
        <RfReveal className="ab-direction">
          <span className="rf-eyebrow">Our direction</span>
          <div className="ab-direction-body">
            {direction.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p className="ab-signature">
              {direction.signature} · <em>{direction.tagline}</em>
            </p>
          </div>
        </RfReveal>
      </div>
    </section>
  );
}
