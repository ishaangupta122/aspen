"use client";

import { useEffect, useRef, useState } from "react";
import { process } from "@/data/manufacturing";

export default function ProductionLine() {
  const ref = useRef(null);
  // idle: static. in: the progress animation is running (only while the section is on screen).
  const [phase, setPhase] = useState("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([entry]) => setPhase(entry.isIntersecting ? "in" : "idle"),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="rf rf-section mf-process" id="process">
      <div className="rf-container">
        <div className="mf-process-head">
          <span className="rf-eyebrow">{process.eyebrow}</span>
          <h2>{process.title}</h2>
        </div>
        <div ref={ref} className={`mf-tl-wrap is-${phase}`}>
          <ol className="mf-tl">
            {process.stages.map((label, i) => (
              <li className="mf-tl-step" key={label} style={{ "--i": i }}>
                <span className="mf-tl-dot" aria-hidden="true" />
                <span className="mf-tl-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{label}</h3>
                <p>{process.details[i]}</p>
              </li>
            ))}
          </ol>
          <p className="mf-tl-cap">{process.caption}</p>
        </div>
      </div>
    </section>
  );
}
