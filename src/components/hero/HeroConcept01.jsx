"use client";

import "./hero-concepts.css";
import { heroSlides as slides, HERO_DURATION } from "@/data/heroSlides";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";
import { HeroTitle, HeroActions, HeroArrows, HeroTabs, slideProps, imgState } from "./HeroParts";

/** Candidate A – full-bleed editorial: the photograph is the environment of the hero. */
export default function HeroConcept01() {
  const { active, prev, warm, go, hold } = useHeroCarousel(slides.length, HERO_DURATION);

  return (
    <section
      className="hx1"
      aria-roledescription="carousel"
      aria-label="Aspen Pharmaceuticals highlights"
      style={{ "--hx-dur": `${HERO_DURATION}ms` }}
      {...hold}>
      <div className="hx1-bg">
        {slides.map((s, i) => (
          <img
            key={s.key}
            className={imgState(i, active, prev)}
            src={s.image}
            alt={i === active ? s.imageAlt : ""}
            aria-hidden={i !== active}
            style={{
              objectPosition: s.imagePos,
              "--fx": s.imageFlip ? -1 : 1,
              "--zoom": s.imageZoom || 1,
              "--origin": s.imageOrigin || "50% 50%",
            }}
            width={1400}
            height={933}
            loading={i === 0 || warm ? undefined : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
            decoding={i === 0 ? undefined : "async"}
          />
        ))}
      </div>
      <div className="hx1-blur" aria-hidden="true" />
      <div className="hx1-shade" aria-hidden="true" />

      <div className="container hx1-body">
        <div className="hx-copy hx1-copy">
          {slides.map((s, i) => (
            <article key={s.key} {...slideProps(i, active, slides.length)}>
              <p className="hx1-eyebrow">{s.eyebrow}</p>
              <HeroTitle slide={s} index={i} />
              <p className="hx1-text">{s.text}</p>
              <HeroActions slide={s} withLink={false} />
            </article>
          ))}
        </div>
      </div>

      <div className="container hx1-caption-wrap">
        {slides.map((s, i) => (
          <ul
            key={s.key}
            className={`hx1-facts${i === active ? " on" : ""}`}
            aria-label={i === active ? "Key facts" : undefined}
            aria-hidden={i !== active}>
            {s.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        ))}
      </div>

      <div className="hx1-bar">
        <div className="container hx1-bar-in">
          <HeroTabs slides={slides} active={active} go={go} />
          <HeroArrows go={go} active={active} />
        </div>
      </div>
    </section>
  );
}
