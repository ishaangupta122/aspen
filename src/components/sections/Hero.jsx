import { ArrowDownRight } from "lucide-react";
import { images, products } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">Pharmaceutical healthcare</p>
          <h1>
            Advancing healthcare through <em>responsible</em> pharmaceutical
            solutions.
          </h1>
          <p className="hero-text">
            We develop and deliver dependable medicines that help healthcare
            professionals care for the communities they serve.
          </p>
          <div className="hero-actions">
            <ButtonLink to="#portfolio">Explore products</ButtonLink>
            <ButtonLink to="#about" variant="light">
              About Aspen
            </ButtonLink>
          </div>
          <div className="hero-footnote">
            <span className="pulse-dot" /> Serving healthcare with care since
            2010
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrap">
            <img
              src={images.hero}
              alt="Scientist working with pharmaceutical laboratory equipment"
            />
            <div className="image-wash" />
          </div>
          <div className="hero-stat stat-products">
            <strong>
              250<sup>+</sup>
            </strong>
            <span>
              Products
              <br />
              in our range
            </span>
          </div>
          <div className="hero-stat stat-states">
            <strong>7</strong>
            <span>
              States
              <br />
              served
            </span>
          </div>
          <div className="hero-label label-top">
            Science-led
            <br />
            healthcare
          </div>
          <div className="hero-label label-bottom">
            Made for real
            <br />
            healthcare needs
          </div>
        </div>
      </div>
      <a className="scroll-cue" href="#highlights">
        <span>Scroll to discover</span>
        <ArrowDownRight size={18} />
      </a>
    </section>
  );
}
