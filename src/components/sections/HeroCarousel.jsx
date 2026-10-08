"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { images } from "@/data/site";
import { prefersReducedMotion } from "@/lib/motion";

const DURATION = 6500;

const slides = [
  {
    tab: "Aspen",
    eyebrow: "Pharmaceutical healthcare",
    title: (
      <>
        Medicines healthcare professionals can <em>rely on.</em>
      </>
    ),
    text: "Aspen Pharmaceuticals supports clinical practice with a dependable portfolio and responsible business conduct.",
    image: images.heroTeam,
    alt: "Aspen analyst reviewing results in a laboratory",
  },
  {
    tab: "Quality",
    eyebrow: "Quality",
    title: (
      <>
        Quality, considered at <em>every step.</em>
      </>
    ),
    text: "From partner selection to storage and dispatch, we keep quality and accurate product information at the centre of our work.",
    image: images.heroQuality,
    alt: "Scientist examining samples under a microscope in a laboratory",
  },
  {
    tab: "Reach",
    eyebrow: "Our reach",
    title: (
      <>
        Alongside doctors, across <em>North India.</em>
      </>
    ),
    text: "Our field teams and distribution partners keep clinicians informed and medicines available where they are needed.",
    image: images.heroReach,
    alt: "Healthcare professional reviewing patient records during a consultation",
  },
];

export default function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prev, setPrev] = useState(-1);
  const [still, setStill] = useState(false);
  // Slides 2-3 are lazy in the server HTML (so they are not preloaded), then fetched
  // right after hydration so they are ready before the first transition.
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    setStill(prefersReducedMotion());
    setWarm(true);
  }, []);

  const go = useCallback(
    (i) => {
      setPrev(active);
      setActive((i + slides.length) % slides.length);
    },
    [active],
  );

  useEffect(() => {
    if (paused || still) return;
    const id = setTimeout(() => go(active + 1), DURATION);
    return () => clearTimeout(id);
  }, [active, paused, still, go]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <section
      className="hc"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ "--hc-dur": `${DURATION}ms` }}>
      <div className="container hc-grid">
        <div className="hc-left">
          <div className="hc-copy">
            {slides.map((s, i) => {
              const Title = i === 0 ? "h1" : "h2";
              return (
                <article
                  className={`hc-slide${i === active ? " on" : ""}`}
                  key={s.tab}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                  aria-hidden={i !== active}>
                  <p className="eyebrow eyebrow-light">{s.eyebrow}</p>
                  <Title className="hc-title">{s.title}</Title>
                  <p className="hero-text">{s.text}</p>
                </article>
              );
            })}
          </div>
          <div className="hc-actions">
            <ButtonLink to="/products">Explore products</ButtonLink>
            <Link className="hc-link" href="/about">
              About Aspen
            </Link>
          </div>
        </div>

        <div className="hc-right">
          <div className="hc-frame">
            {slides.map((s, i) => (
              <img
                key={s.tab}
                className={i === active ? "on" : i === prev ? "prev" : ""}
                src={s.image}
                alt={i === active ? s.alt : ""}
                aria-hidden={i !== active}
                width={820}
                height={546}
                loading={i === 0 || warm ? undefined : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding={i === 0 ? undefined : "async"}
              />
            ))}
          </div>
          <div className="hc-controls">
            <p className="hc-count" aria-live="off">
              <b>{pad(active + 1)}</b>
              <span aria-hidden="true"> / {pad(slides.length)}</span>
              <span className="hc-label">{slides[active].tab}</span>
            </p>
            <span className="hc-progress" aria-hidden="true">
              <i
                key={active}
                className={paused || still ? "paused" : ""}
              />
            </span>
            <div className="hc-arrows">
              <button
                type="button"
                aria-label="Previous slide"
                onClick={() => go(active - 1)}>
                <ArrowLeft size={15} />
              </button>
              <button
                type="button"
                aria-label="Next slide"
                onClick={() => go(active + 1)}>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
