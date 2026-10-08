"use client";

import { useEffect, useState } from "react";
import { Boxes, Droplets, Layers, Package } from "lucide-react";
import { process } from "@/data/manufacturing";

// Decorative icons, one per stage in order.
const icons = [Layers, Droplets, Boxes, Package];
const STEP_MS = 2400;

export default function ProductionLine() {
  const [stopped, setStopped] = useState(false); // user picked a step
  const [hovering, setHovering] = useState(false);
  const [active, setActive] = useState(0);
  const count = process.stages.length;

  useEffect(() => {
    // No auto-advance for people who prefer reduced motion.
    if (
      stopped ||
      hovering ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), STEP_MS);
    return () => clearInterval(id);
  }, [stopped, hovering, count]);

  return (
    <section className="rf rf-section mf-process" id="process">
      <div className="rf-container">
        <div className="rf-heading rf-reveal">
          <span className="rf-eyebrow">{process.eyebrow}</span>
          <h2>{process.title}</h2>
        </div>
        <div className="rf-reveal">
          <div
            className="mf-flow"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onFocus={() => setHovering(true)}
            onBlur={() => setHovering(false)}>
            <div className="mf-flow-card">
              <ol className="mf-flow-steps">
                {process.stages.map((label, i) => {
                  const Icon = icons[i % icons.length];
                  const state =
                    i < active ? "is-done" : i === active ? "is-active" : "";
                  return (
                    <li
                      key={label}
                      className={state}
                      aria-current={i === active ? "step" : undefined}>
                      <button
                        type="button"
                        className="mf-flow-node"
                        onClick={() => {
                          setActive(i);
                          setStopped(true);
                        }}
                        aria-label={`${label}, step ${i + 1} of ${count}`}>
                        <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                      </button>
                      <span className="mf-flow-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mf-flow-label">{label}</span>
                    </li>
                  );
                })}
              </ol>
            </div>
            <div className="mf-flow-detail" key={active} aria-live="off">
              <span>{String(active + 1).padStart(2, "0")}</span>
              <div>
                <strong>{process.stages[active]}</strong>
                <p>{process.details[active]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
