import { images } from "@/data/site";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function People() {
  const themes = [
    [
      "Science",
      "Clinical relevance guides what we bring to healthcare professionals.",
    ],
    ["Service", "Responsive support for doctors, distributors and partners."],
    ["People", "Knowledge, accountability, and lasting relationships."],
  ];
  return (
    <section className="rf rf-section rf-trust" id="insights">
      <div className="rf-container">
        <div className="rf-trust-composition">
          <RfReveal className="rf-trust-intro">
            <RfHeading
              eyebrow="Our approach"
              title="Science is strengthened by people."
              copy="Progress depends on people who ask better questions, uphold exacting standards, and understand the healthcare communities they serve."
            />
          </RfReveal>
          <RfReveal className="rf-trust-large">
            <img
              src={images.formulation}
              alt="Analyst sampling a raw material powder in the laboratory"
              loading="lazy"
            />
          </RfReveal>
          <RfReveal className="rf-trust-themes">
            {themes.map(([title, copy], index) => (
              <div key={title}>
                <span>0{index + 1}</span>
                <strong>{title}</strong>
                <p>{copy}</p>
              </div>
            ))}
          </RfReveal>
          <RfReveal className="rf-trust-small">
            <img
              src={images.qualityTeam}
              alt="Operator running a V-blender on the manufacturing floor"
              loading="lazy"
            />
          </RfReveal>
        </div>
      </div>
    </section>
  );
}
