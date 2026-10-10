"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/data/manufacturing";

/**
 * A clean line-art animation of the tablet line: compression, coating, blister packing, cartoning.
 * It plays while the section is on screen, can be paused, and shows a finished static frame when the
 * visitor prefers reduced motion. The stage descriptions stay in the page for screen readers and search.
 */
export default function ProductionLine() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] scroll-mt-[80px] [&[id]]:scroll-mt-[70px]" id="process">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <div className="mf-process-head">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{process.eyebrow}</span>
          <h2 className="mx-0 mt-4 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy">{process.title}</h2>
        </div>

        <div
          ref={ref}
          className={`pl mt-12 max-[900px]:mt-9 overflow-hidden rounded-[var(--radius-lg)] border border-solid border-[color:var(--c-line)] [background:linear-gradient(180deg,#fff_0%,var(--c-surface)_100%)] px-[clamp(12px,3vw,40px)] pt-[clamp(20px,3vw,36px)] pb-[clamp(16px,2.4vw,28px)]${inView ? " is-in" : ""}${paused ? " is-paused" : ""}`}
        >
          <svg className="pl-anim block w-full h-auto" viewBox="0 0 1200 270" role="img" aria-label="Animated overview of a tablet production line: compression, coating, blister packing and cartoning">
            {/* station guides */}
            <g stroke="#d6e0df" strokeWidth="1.5" strokeDasharray="3 7" fill="none">
              <line x1="300" y1="14" x2="300" y2="236" />
              <line x1="600" y1="14" x2="600" y2="236" />
              <line x1="900" y1="14" x2="900" y2="236" />
            </g>

            {/* conveyor */}
            <rect x="30" y="236" width="1140" height="16" rx="8" fill="#07192f" />
            <line className="pl-belt-marks" x1="44" y1="244" x2="1156" y2="244" />

            {/* 1 Compression */}
            <g transform="translate(150 0)">
              <rect className="pl-stroke" x="-46" y="160" width="92" height="44" rx="4" fill="#d9e3ee" style={{ fill: "var(--pl-fill2)" }} />
              <rect x="-16" y="160" width="32" height="14" fill="#fff" />
              <rect x="-14" y="204" width="28" height="24" fill="#d9e3ee" stroke="#07192f" strokeWidth="2.5" />
              <g>
                <circle className="pl-powder" cx="-8" cy="100" r="3.5" fill="#7f93ab" />
                <circle className="pl-powder" cx="0" cy="100" r="3.5" fill="#7f93ab" />
                <circle className="pl-powder" cx="8" cy="100" r="3.5" fill="#7f93ab" />
              </g>
              <g className="pl-punch">
                <rect className="pl-solid" x="-24" y="18" width="48" height="10" rx="3" />
                <rect className="pl-solid" x="-12" y="28" width="24" height="64" rx="3" />
              </g>
              <ellipse className="pl-tab pl-out pl-out-1" cx="0" cy="229" rx="16" ry="6" />
            </g>

            {/* 2 Coating */}
            <g transform="translate(450 0)">
              <rect className="pl-stroke" x="-10" y="174" width="20" height="62" style={{ fill: "var(--pl-fill2)" }} />
              <circle className="pl-stroke" cx="0" cy="120" r="54" style={{ fill: "#fff" }} />
              <circle cx="0" cy="120" r="44" fill="none" stroke="#d6e0df" strokeWidth="1.5" />
              <g transform="translate(0 120)"><g className="pl-drum-in">
                <g stroke="#8aa0b8" strokeWidth="2" strokeLinecap="round">
                  <line x1="-30" y1="0" x2="30" y2="0" />
                  <line x1="-15" y1="-26" x2="15" y2="26" />
                  <line x1="-15" y1="26" x2="15" y2="-26" />
                </g>
                <ellipse className="pl-tab pl-drum-tab" cx="32" cy="0" rx="8" ry="4.5" />
                <ellipse className="pl-tab pl-drum-tab" cx="16" cy="28" rx="8" ry="4.5" />
                <ellipse className="pl-tab pl-drum-tab" cx="-16" cy="28" rx="8" ry="4.5" />
                <ellipse className="pl-tab pl-drum-tab" cx="-32" cy="0" rx="8" ry="4.5" />
                <ellipse className="pl-tab pl-drum-tab" cx="-16" cy="-28" rx="8" ry="4.5" />
                <ellipse className="pl-tab pl-drum-tab" cx="16" cy="-28" rx="8" ry="4.5" />
              </g></g>
              <path d="M62 30 L92 6" stroke="#07192f" strokeWidth="7" strokeLinecap="round" />
              <g stroke="#28746e" strokeWidth="2.5" strokeLinecap="round">
                <line className="pl-spray" x1="62" y1="44" x2="48" y2="56" />
                <line className="pl-spray" x1="56" y1="38" x2="40" y2="46" />
                <line className="pl-spray" x1="68" y1="52" x2="56" y2="66" />
              </g>
              <ellipse className="pl-coated pl-out pl-out-2" cx="30" cy="229" rx="16" ry="6" />
            </g>

            {/* 3 Blister packing */}
            <g transform="translate(750 0)">
              <path className="pl-stroke" d="M-60 22 H60 L40 58 H-40 Z" />
              <rect x="-84" y="206" width="168" height="28" rx="7" fill="#fff" stroke="#07192f" strokeWidth="2.5" />
              {[-54, -18, 18, 54].map((x, k) => (
                <g key={x}>
                  <circle cx={x} cy="220" r="9" fill="#eef3f8" stroke="#8aa0b8" strokeWidth="1.5" />
                  <ellipse className="pl-coated pl-fill-cell" cx={x} cy="220" rx="7" ry="5" style={{ "--k": k }} />
                  <ellipse className="pl-coated pl-drop" cx={x} cy="66" rx="7" ry="5" style={{ "--k": k }} />
                </g>
              ))}
              <rect className="pl-foil" x="-84" y="206" width="168" height="28" rx="7" fill="rgba(169,184,200,0.55)" stroke="#5b7390" strokeWidth="1.5" />
            </g>

            {/* 4 Cartoning */}
            <g transform="translate(1050 0)">
              <g className="pl-carton">
                <g className="pl-pack-strip">
                  <rect x="-30" y="108" width="60" height="16" rx="3" fill="#fff" stroke="#07192f" strokeWidth="2" />
                  <g fill="#a9d3cd" stroke="#07192f" strokeWidth="1.2">
                    <circle cx="-18" cy="116" r="3.2" />
                    <circle cx="-6" cy="116" r="3.2" />
                    <circle cx="6" cy="116" r="3.2" />
                    <circle cx="18" cy="116" r="3.2" />
                  </g>
                </g>
                <rect x="-50" y="190" width="100" height="46" rx="3" fill="#fff" stroke="#07192f" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="-48.7" y="210" width="97.4" height="8" fill="#b8242c" />
                <rect className="pl-flap" x="-50" y="180" width="100" height="10" rx="2" fill="#eef3f8" stroke="#07192f" strokeWidth="2.5" strokeLinejoin="round" />
              </g>
            </g>
          </svg>

          <ol className="mf-tl mx-0 mt-2 mb-0 p-0 grid grid-cols-4 [list-style:none] text-center">
            {process.stages.map((label, i) => (
              <li key={label} className="px-1">
                <span className="block leading-none font-body text-red !font-bold !text-[13px] !tracking-[0.12em] max-[600px]:!text-[11px]">{String(i + 1).padStart(2, "0")}</span>
                <span className="block mt-2 font-semibold text-[clamp(13px,1.6vw,19px)] leading-[1.25] font-body text-navy">{label}</span>
                <span className="sr-only">{process.details[i]}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="mx-0 gap-3.5 flex items-center my-0 font-medium text-[13.5px] leading-[1.4] font-body text-[#4a5b6c] before:rounded-[2px] before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">{process.caption}</p>
          <button
            type="button"
            onClick={() => setPaused((v) => !v)}
            aria-pressed={paused}
            className="motion-reduce:hidden cursor-pointer rounded-[var(--radius-sm)] border border-solid border-[color:var(--c-line)] [background:#fff] px-3.5 py-1.5 font-body font-medium text-[13px] text-navy hover:border-navy [transition:border-color_0.25s_ease] focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]"
          >
            {paused ? "Play animation" : "Pause animation"}
          </button>
        </div>
      </div>
    </section>
  );
}
