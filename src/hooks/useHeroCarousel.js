"use client";

import { useCallback, useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export function useHeroCarousel(count) {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(-1);
  const [paused, setPaused] = useState(false);
  const [still, setStill] = useState(false);
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

  const hold = {
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
  };

  return { active, prev, paused, still, stopped, warm, go, hold };
}

