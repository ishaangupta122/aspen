"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { images } from "@/data/site";
import { useCountUp } from "@/hooks/useCountUp";
import { prefersReducedMotion } from "@/lib/motion";

const DURATION = 6500;

function Count({ to, suffix = "", run }) {
  const n = useCountUp(to, run, {
    duration: 1400,
  });
  return (
    <>
      {n}
      {suffix && <sup>{suffix}</sup>}
    </>
  );
}

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
    caption: "Aspen Pharmaceuticals",
    floats: [
      { slot: "a", kind: "stat", value: 2010, label: "Established" },
      { slot: "b", kind: "chip", label: "Based in Ghaziabad" },
      { slot: "c", kind: "chip", label: "Serving North India" },
    ],
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
    caption: "Quality at the centre",
    floats: [
      { slot: "a", kind: "chip", label: "Established manufacturing partners" },
      { slot: "b", kind: "chip", label: "EU-GMP · WHO-GMP · ISO 9001" },
      { slot: "c", kind: "chip", label: "Careful storage & handling" },
    ],
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
    caption: "Serving healthcare since 2010",
    floats: [
      { slot: "a", kind: "stat", value: 7, label: "States served" },
      { slot: "b", kind: "chip", label: "Delhi · Uttar Pradesh" },
      { slot: "c", kind: "chip", label: "Punjab · Haryana" },
    ],
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

  return (
    <section
      className="hc"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      style={{ "--hc-dur": `${DURATION}ms` }}
    >
      <div className="hc-orb o1" />
      <div className="hc-orb o2" />
      <div className="container hc-grid">
        <div className="hc-copy">
          {slides.map((s, i) => {
            const Title = i === 0 ? "h1" : "h2";
            return (
              <article
                className={`hc-slide${i === active ? " on" : ""}`}
                key={s.tab}
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={i !== active}
              >
                <p className="eyebrow eyebrow-light">{s.eyebrow}</p>
                <Title className="hc-title">{s.title}</Title>
                <p className="hero-text">{s.text}</p>
              </article>
            );
          })}
        </div>

        <div className="hc-visual" aria-hidden="true">
          <div className="hc-frame">
            {slides.map((s, i) => (
              <img
                key={s.tab}
                className={i === active ? "on" : i === prev ? "prev" : ""}
                src={s.image}
                alt={s.alt}
                width={820}
                height={546}
                loading={i === 0 || warm ? undefined : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding={i === 0 ? undefined : "async"}
              />
            ))}
            <div className="hc-wash" />
          </div>
          {slides.map((sl, si) =>
            sl.floats.map((f, fi) => (
              <div
                key={`${sl.tab}-${fi}`}
                className={`hc-float hc-${f.kind} slot-${f.slot}${si === active ? " on" : ""}`}
                style={{ "--d": `${fi * 0.12}s`, "--f": `${5 + fi * 1.3}s` }}
              >
                <div className="hc-float-in">
                  {f.kind === "stat" ? (
                    <>
                      <strong>
                        <Count
                          to={f.value}
                          suffix={f.suffix}
                          run={si === active}
                        />
                      </strong>
                      <span>{f.label}</span>
                    </>
                  ) : (
                    <span>{f.label}</span>
                  )}
                </div>
              </div>
            )),
          )}
          <div className="hc-caption">
            <span className="pulse-dot" />
            <span key={active}>{slides[active].caption}</span>
          </div>
        </div>
      </div>

      <div className="container hc-nav">
        <div className="hc-tabs" role="tablist" aria-label="Choose highlight">
          {slides.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "on" : ""}
              onClick={() => go(i)}
            >
              <span className="hc-bar">
                <i
                  className={paused || still ? "paused" : ""}
                  key={i === active ? `a${active}` : `i${i}`}
                />
              </span>
              <b>0{i + 1}</b>
              {s.tab}
            </button>
          ))}
        </div>
        <div className="hc-arrows">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => go(active - 1)}
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => go(active + 1)}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
