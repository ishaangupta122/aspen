"use client";

import "./hero.css";
import { useEffect, useRef, useState } from "react";
import { heroSlides as slides } from "@/data/heroSlides";
import { useHeroCarousel } from "@/hooks/useHeroCarousel";

const AUTOPLAY_MS = 5000;

/** Home hero: full-bleed photograph, bold one-line title and pill indicators. Changes only when the visitor chooses. */
export default function Hero() {
  const { active, warm, still, go } = useHeroCarousel(slides.length);
  const root = useRef(null);
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [offscreen, setOffscreen] = useState(false);
  // Slides advance on their own, except for visitors who prefer reduced motion, or while the hero is
  // hovered, focused, off-screen or in a background tab.
  const playing = !still && !hover && !focused && !hidden && !offscreen;

  const touch = useRef(null);
  const light = slides[active].tone === "light";
  // Tell the navbar when the photo behind it is light, so it can switch to dark text.
  useEffect(() => {
    document.body.dataset.heroTone = light ? "light" : "dark";
    return () => {
      delete document.body.dataset.heroTone;
    };
  }, [light]);
  useEffect(() => {
    const onVis = () => setHidden(document.visibilityState === "hidden");
    document.addEventListener("visibilitychange", onVis);
    const io = new IntersectionObserver(([e]) => setOffscreen(!e.isIntersecting), { threshold: 0.35 });
    if (root.current) io.observe(root.current);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      io.disconnect();
    };
  }, []);

  // One timer per slide: choosing a slide (or resuming after a pause) starts a fresh interval.
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => go(active + 1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [playing, active, go]);

  // Swipe: a mostly-horizontal drag of 50px or more changes slide.
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = [t.clientX, t.clientY];
  };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current[0];
    const dy = t.clientY - touch.current[1];
    touch.current = null;
    if (Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      ref={root}
      className={`hv${light ? " hv-light" : ""}${playing ? " is-playing" : ""}`}
      style={{ "--hv-dur": `${AUTOPLAY_MS}ms` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-roledescription="carousel"
      aria-label="Aspen Pharmaceuticals highlights"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <div className="hv-bg">
        {slides.map((s, i) => (
          <img
            key={s.key}
            className={i === active ? "on" : ""}
            src={s.image}
            alt={i === active ? s.alt : ""}
            aria-hidden={i !== active}
            style={{ objectPosition: s.pos, "--fx": s.flip ? -1 : 1 }}
            width={1400}
            height={933}
            loading={i === 0 || warm ? undefined : "lazy"}
            fetchPriority={i === 0 ? "high" : undefined}
          />
        ))}
      </div>
      <div className="hv-shade" aria-hidden="true" />
      <div className={`hv-shade hv-shade-strong${slides[active].strongShade ? " on" : ""}`} aria-hidden="true" />

      <div className="hv-body">
        {slides.map((s, i) => {
          const Tag = i === 0 ? "h1" : "h2";
          return (
            <article
              key={s.key}
              className={`hv-slide${i === active ? " on" : ""}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== active}>
              <div className="hv-row">
                <div className="hv-head">
                <Tag className="hv-title">
                  {s.title}
                </Tag>
                <span className="hv-rule" aria-hidden="true" />
                </div>
                <div className="hv-dots-in" role="tablist" aria-label="Choose slide">
                  {slides.map((d, k) => (
                    <button
                      key={d.key}
                      type="button"
                      role="tab"
                      className={k === active ? "on" : ""}
                      aria-selected={k === active}
                      aria-label={`Show slide ${k + 1}`}
                      onClick={() => go(k)}
                    />
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
