import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { hero } from "@/data/rnd";

export default function RndIntro() {
  return (
    <section className="rf rf-section rn-intro">
      <div className="rf-container rn-intro-grid">
        <RfReveal className="rn-intro-copy">
          <span className="rf-eyebrow">{hero.title}</span>
          <h2>{hero.tagline}</h2>
          {hero.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <ul className="rn-stats">
            {hero.highlights.map(([value, label]) => (
              <li key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </RfReveal>
        <RfReveal className="rn-intro-media">
          <img
            src={images.capsuleTray}
            alt="Gloved hands arranging capsules in a laboratory tray"
          />
        </RfReveal>
      </div>
    </section>
  );
}
