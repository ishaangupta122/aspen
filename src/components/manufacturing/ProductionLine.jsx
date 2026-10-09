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
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] scroll-mt-[80px] [&[id]]:scroll-mt-[70px]" id="process">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <div className="mf-process-head">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{process.eyebrow}</span>
          <h2 className="mx-0 mt-4 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy">{process.title}</h2>
        </div>
        <div ref={ref} className={`mf-tl-wrap is-${phase}`}>
          <ol className="mf-tl mx-0 p-0 gap-10 relative [list-style:none] mt-16 mb-0 grid grid-cols-4 max-[900px]:gap-0 max-[900px]:mt-10 max-[900px]:grid-cols-[1fr] before:inset-x-0 before:[content:''] before:absolute before:top-[9px] before:h-0.5 before:[background:var(--c-line)] max-[900px]:before:inset-y-0 max-[900px]:before:left-[9px] max-[900px]:before:right-auto max-[900px]:before:h-auto max-[900px]:before:w-0.5 after:inset-x-0 after:[content:''] after:absolute after:top-[9px] after:h-0.5 after:[background:var(--red)] after:[transform-origin:left_center] after:[transform:scaleX(0)] after:pointer-events-none max-[900px]:after:inset-y-0 max-[900px]:after:left-[9px] max-[900px]:after:right-auto max-[900px]:after:h-auto max-[900px]:after:[transform-origin:top_center] max-[900px]:after:[transform:scaleY(0)] max-[900px]:after:w-0.5 motion-reduce:after:![animation:none]">
            {process.stages.map((label, i) => (
              <li className="mf-tl-step relative pt-11 max-[900px]:pt-0 max-[900px]:pr-0 max-[900px]:pb-8 max-[900px]:pl-11 max-[900px]:last:pb-0" key={label} style={{ "--i": i }}>
                <span className="mf-tl-dot rounded-[50%] border-2 border-solid border-navy absolute top-0 left-0 w-5 h-5 [background:#fff] [transition:none] motion-reduce:![animation:none] [.mf-tl-step:first-child_&]:border-navy [.mf-tl-step:first-child_&]:[background:#fff] [.mf-tl-wrap:not(.is-in)_.mf-tl-step:first-child_&]:border-red [.mf-tl-wrap:not(.is-in)_.mf-tl-step:first-child_&]:[background:var(--red)]" aria-hidden="true" />
                <span className="block leading-none font-body text-red !font-bold !text-[14px] !tracking-[0.12em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mx-0 mt-3 mb-2.5 font-semibold text-[22px] leading-[1.3] font-body text-navy tracking-[0]">{label}</h3>
                <p className="m-0 max-w-[30ch] font-normal text-[16px] leading-[1.7] font-body text-[#4a5b6c] max-[900px]:max-w-none">{process.details[i]}</p>
              </li>
            ))}
          </ol>
          <p className="mx-0 gap-3.5 flex items-center mt-[52px] mb-0 font-medium text-[13.5px] leading-[1.4] font-body text-[#4a5b6c] before:rounded-[2px] before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">{process.caption}</p>
        </div>
      </div>
    </section>
  );
}
