import ButtonLink from "@/components/ui/ButtonLink";
import RfReveal from "@/components/ui/RfReveal";

const points = [
  [
    "Raw & packaging materials",
    "Checked against approved specifications before use.",
  ],
  ["In-process checks", "Variation caught early, during manufacture."],
  ["Finished products", "Evaluated before every release decision."],
];

export default function QualityTeaser() {
  return (
    <section className="rf rf-section qt">
      <div className="rf-container qt-grid">
        <RfReveal className="qt-copy">
          <span className="rf-eyebrow">Quality</span>
          <h2>Testing from raw material to finished product.</h2>
          <ButtonLink to="/quality">See our quality approach</ButtonLink>
        </RfReveal>
        <div className="qt-list">
          {points.map(([t, d], i) => (
            <RfReveal className="qt-item" key={t}>
              <span>0{i + 1}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
