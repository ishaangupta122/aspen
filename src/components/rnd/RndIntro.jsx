import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { hero } from "@/data/rnd";

export default function RndIntro() {
  return (
    <section className="rf rd-intro">
      <div className="rf-container rd-intro-grid">
        <RfReveal className="rd-intro-copy">
          <span className="rf-eyebrow">{hero.title}</span>
          <h2>{hero.tagline}</h2>
          {hero.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
          <ul className="rd-intro-stats">
            {hero.highlights.map(([value, label]) => (
              <li key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </RfReveal>
        <RfReveal className="rd-intro-media">
          <img src={images.capsuleTray} alt="Gloved hands arranging capsules in a laboratory tray" />
        </RfReveal>
      </div>
    </section>
  );
}
