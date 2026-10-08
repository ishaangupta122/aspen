"use client";

import { useEffect, useRef, useState } from "react";
import { FlaskConical, Stethoscope, Waypoints } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";
import { SPECIALTY_COUNT } from "@/data/site";

const stats = [
  {
    value: SPECIALTY_COUNT,
    suffix: "",
    label: "Medical specialties",
    Icon: Stethoscope,
  },
  { value: 250, suffix: "+", label: "Products", Icon: FlaskConical },
  { value: 7, suffix: "", label: "States served", Icon: Waypoints },
];

function CountUp({ to, suffix, run }) {
  const n = useCountUp(to, run);
  return (
    <>
      {n}
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
        {stats.map(({ value, suffix, label, Icon }) => (
          <div className="stat" key={label}>
            <span className="stat-icon" aria-hidden="true">
              <Icon size={30} strokeWidth={1.4} />
            </span>
            <div className="stat-text">
              <strong>
                <CountUp to={value} suffix={suffix} run={run} />
              </strong>
              <span className="stat-label">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
