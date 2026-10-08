"use client";

import "./hero-concepts.css";
import { heroSlides as slides, HERO_DURATION } from "@/data/heroSlides";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";
import { HeroTitle, HeroActions, HeroArrows, HeroTabs, slideProps, imgState } from "./HeroParts";

/** Candidate B – circular: one large round photograph, one contextual fact per slide, a single outer arc. */
export default function HeroConcept02() {
  const { active, prev, warm, go, hold } = useHeroCarousel(slides.length, HERO_DURATION);

  return (
    <section
      className="hx2"
      aria-roledescription="carousel"
      aria-label="Aspen Pharmaceuticals highlights"
      style={{ "--hx-dur": `${HERO_DURATION}ms` }}
      {...hold}>
      <div className="container hx2-grid">
        <div className="hx2-left">
          <div className="hx-copy">
            {slides.map((s, i) => (
              <article key={s.key} {...slideProps(i, active, slides.length)}>
                <p className="hx2-eyebrow">{s.eyebrow}</p>
                <HeroTitle slide={s} index={i} />
                <p className="hx2-text">{s.text}</p>
                <HeroActions slide={s} />
              </article>
            ))}
          </div>
          <div className="hx2-nav">
            <HeroTabs slides={slides} active={active} go={go} />
            <HeroArrows go={go} active={active} />
          </div>
        </div>

        <div className="hx2-visual" data-i={active}>
          <svg className="hx2-arc" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <circle cx="50" cy="50" r="49.2" pathLength="100" />
          </svg>
          <div className="hx2-circle">
            {slides.map((s, i) => (
              <img
                key={s.key}
                className={imgState(i, active, prev)}
                src={s.photo}
                alt={i === active ? s.photoAlt : ""}
                aria-hidden={i !== active}
                style={{ objectPosition: s.photoPos }}
                width={820}
                height={546}
                loading={i === 0 || warm ? undefined : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding={i === 0 ? undefined : "async"}
              />
            ))}
          </div>
          <div className="hx2-facts">
            {slides.map((s, i) => (
              <p key={s.key} className={`hx2-fact${i === active ? " on" : ""}`} aria-hidden={i !== active}>
                <span>{s.fact.label}</span>
                <strong>{s.fact.value}</strong>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
