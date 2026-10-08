"use client";

import { useCallback, useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** Shared carousel behaviour for every hero concept: autoplay, pause while a control has keyboard focus, reduced motion. */
export function useHeroCarousel(count, duration) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false);
  // Autoplay hands over to the visitor: once they use the controls it stops for good.
  const [stopped, setStopped] = useState(false);
  // Slides after the first stay lazy in the server HTML, then load right after hydration.
  const [warm, setWarm] = useState(false);

  useEffect(() => {
    setStill(prefersReducedMotion());
    setWarm(true);
  }, []);

  const show = useCallback(
    (i) => {
      setPrev(active);
      setActive((i + count) % count);
    },
    [active, count],
  );

  const go = useCallback(
    (i) => {
      setStopped(true);
      show(i);
    },
    [show],
  );

  useEffect(() => {
    if (paused || still || stopped) return;
    const id = setTimeout(() => show(active + 1), duration);
    return () => clearTimeout(id);
  }, [active, paused, still, stopped, show, duration]);

  const hold = {
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return { active, prev, paused, still, stopped, warm, go, hold };
}

export const pad2 = (n) => String(n).padStart(2, "0");
