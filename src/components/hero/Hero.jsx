"use client";

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
      className={`overflow-hidden relative h-[clamp(440px,90svh,800px)] min-h-[440px] text-[#f3f0ea] [background:var(--c-navy-deep,#07192f)] font-body max-[700px]:h-[clamp(420px,70svh,580px)] hv ${light ? " hv-light" : ""}${playing ? " is-playing" : ""}`}
      style={{ "--hv-dur": `${AUTOPLAY_MS}ms` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      aria-roledescription="carousel"
      aria-label="Aspen Pharmaceuticals highlights"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}>
      <div className="inset-0 absolute">
        {slides.map((s, i) => (
          <img
            key={s.key}
            className={`inset-0 absolute w-full h-full object-cover opacity-0 [transform:scaleX(var(--fx,1))] [transition:opacity_1.4s_ease] motion-reduce:[transition:none] [&.on]:opacity-100 [&.on]:[animation:hv-drift_7s_cubic-bezier(0.22,0.61,0.36,1)_both] motion-reduce:[&.on]:[animation:none]${i === active ? " on" : ""}`}
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
      <div className="hv-shade inset-0 absolute [background:linear-gradient(180deg,rgba(7,25,47,0.5)_0,rgba(7,25,47,0.16)_130px,rgba(7,25,47,0)_220px),linear-gradient(0deg,rgba(7,25,47,0.78)_0%,rgba(7,25,47,0.46)_26%,rgba(7,25,47,0.12)_52%,rgba(7,25,47,0.12)_100%)]" aria-hidden="true" />
      <div className={`inset-0 absolute [background:linear-gradient(0deg,rgba(7,25,47,0.3)_0%,rgba(7,25,47,0.2)_60%,rgba(7,25,47,0.2)_100%)] opacity-0 [transition:opacity_0.7s_ease] hv-shade ${slides[active].strongShade ? " on" : ""}`} aria-hidden="true" />

      <div className="inset-0 absolute pointer-events-none">
        {slides.map((s, i) => {
          return (
            <article
              key={s.key}
              className={`mx-auto px-0 inset-0 absolute w-[min(var(--page-max,1240px),calc(100%_-_2_*_var(--hv-pad)))] pt-0 pb-[calc(clamp(28px,5vh,56px)_+_var(--hl-overlap))] flex flex-col items-center justify-end opacity-0 [transition:opacity_0.6s_ease] max-[560px]:items-start motion-reduce:[transition:none] [&.on]:opacity-100 [&.on]:[transition-duration:0.9s] hv-slide ${i === active ? " on" : ""}`}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
              aria-hidden={i !== active}>
              <div className="gap-11 w-full flex items-start justify-between max-[900px]:gap-6 max-[560px]:gap-4 max-[560px]:flex-col">
                <div className="flex flex-col items-start">
                {i === 0 ? (
                  <h1 className="!font-semibold m-0 max-w-none font-body text-[length:var(--hv-fs)] leading-[1.14] tracking-[-0.012em] [word-spacing:0.08em] text-balance [text-shadow:0_1px_3px_rgba(7,25,47,0.4),0_2px_22px_rgba(7,25,47,0.4)] max-[560px]:tracking-[-0.006em] max-[560px]:[word-spacing:0.05em] [.hv-slide.on_&]:[animation:hv-rise_1s_cubic-bezier(0.2,0.7,0.2,1)_0.35s_both] motion-reduce:[.hv-slide.on_&]:[animation:none]">{s.title}</h1>
                ) : (
                  <h2 className="!font-semibold m-0 max-w-none font-body text-[length:var(--hv-fs)] leading-[1.14] tracking-[-0.012em] [word-spacing:0.08em] text-balance [text-shadow:0_1px_3px_rgba(7,25,47,0.4),0_2px_22px_rgba(7,25,47,0.4)] max-[560px]:tracking-[-0.006em] max-[560px]:[word-spacing:0.05em]">{s.title}</h2>
                )}
                <span className="rounded-[3px] block w-11 h-[3px] mt-3.5 [background:var(--red-on-dark,#cc4a51)] max-[560px]:mt-3 [.hv-slide.on_&]:[transform-origin:left] [.hv-slide.on_&]:[animation:hv-draw_0.8s_cubic-bezier(0.2,0.7,0.2,1)_0.9s_both] motion-reduce:[.hv-slide.on_&]:[animation:none]" aria-hidden="true" />
                </div>
                <div className="hv-dots-in gap-[9px] flex items-center mt-[calc(var(--hv-fs)_*_0.92_-_9px)] pointer-events-auto max-[560px]:mt-0 [.hv-slide:not(.on)_&]:pointer-events-none [.hv-slide:not(.on)_&]:invisible" role="tablist" aria-label="Choose slide">
                  {slides.map((d, k) => (
                    <button
                      key={d.key}
                      type="button"
                      role="tab"
                      className={`p-0 rounded-[9px] border-0 border-none border-current relative w-[9px] h-[9px] [background:rgba(243,240,234,0.55)] cursor-pointer [transition:width_0.25s_ease,background_0.25s_ease] after:-inset-x-1 after:inset-y-[-18px] after:[content:''] after:absolute [&.on]:overflow-hidden [&.on]:w-[30px] [&.on]:[background:rgba(243,240,234,0.4)] [&.on::before]:inset-0 [&.on::before]:rounded-[inherit] [&.on::before]:[content:''] [&.on::before]:absolute [&.on::before]:[background:#f3f0ea] focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:#fff] focus-visible:outline-offset-[4px]${k === active ? " on" : ""}`}
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
