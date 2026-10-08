"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Counts from 0 up to `to` (ease-out cubic) once `run` becomes true.
 * With `respectReducedMotion`, the final value is shown immediately for visitors who reduce motion.
 */
export function useCountUp(to, run, { duration = 1600, respectReducedMotion = true } = {}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (respectReducedMotion && prefersReducedMotion()) return setN(to);
    let raf;
    const t0 = performance.now();
    const step = (now) => {
      const t = Math.min((now - t0) / duration, 1);
      setN(Math.round(to * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [run, to, duration, respectReducedMotion]);
  return n;
}
