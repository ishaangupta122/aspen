import { images } from "@/data/site";
import { intro } from "@/data/about";

export default function AboutHero() {
  return (
    <section className="ab-hero">
      <div className="ab-hero-orb" />
      <div className="rf-container ab-hero-grid">
        <div className="ab-hero-copy">
          <p className="eyebrow eyebrow-light">About us</p>
          <h1>{intro.title}</h1>
          <p className="ab-hero-lead">{intro.lead}</p>
        </div>
        <div className="ab-hero-visual">
          <div className="ab-hero-image">
            <img src={images.about} alt="Pipette dispensing into laboratory test tubes" />
            <div className="image-wash" />
          </div>
          <div className="ab-hero-tag">
            <span className="pulse-dot" /> Based in Ghaziabad, Uttar Pradesh
          </div>
        </div>
      </div>
    </section>
  );
}
