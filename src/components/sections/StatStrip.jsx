"use client";

import { useEffect, useRef, useState } from "react";
import { useCountUp } from "@/hooks/useCountUp";

// `plain` values (a year) are shown as-is instead of counting up from 0.
const stats = [
  { value: 2010, suffix: "", label: "Established", plain: true },
  { value: 250, suffix: "+", label: "Products" },
  { value: 5, suffix: "+", label: "Therapeutic areas served" },
  { value: 6, suffix: "+", label: "States served" },
];

function CountUp({ to, suffix, run, plain }) {
  const n = useCountUp(to, run);
  return (
    <>
      {plain ? to : n}
      {suffix}
    </>
  );
}

export default function StatStrip() {
  const ref = useRef(null);
  const [run, setRun] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stat-strip" ref={ref}>
      <div className="stat-inner">
        {stats.map(({ value, suffix, label, plain }) => (
          <div className="stat" key={label}>
            <div className="stat-text">
              <strong>
                <CountUp to={value} suffix={suffix} run={run} plain={plain} />
              </strong>
              <span className="stat-label">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
