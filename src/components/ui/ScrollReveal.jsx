"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

// Progressive enhancement: content stays visible without JS or with reduced motion; only blocks below the fold are hidden, then eased in.
export default function ScrollReveal() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    const vh = window.innerHeight;
    const targets = [...document.querySelectorAll(".rf-reveal")].filter(
      (el) => el.getBoundingClientRect().top > vh * 0.92,
    );
    if (!targets.length) return;
    targets.forEach((el) => el.classList.add("rf-pre"));
    const io = new IntersectionObserver(
      (entries) => {
        let n = 0;
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.style.transitionDelay = `${Math.min(n++, 3) * 80}ms`;
          e.target.classList.add("rf-in");
          io.unobserve(e.target);
        });
      },
      { rootMargin: "0px 0px -9% 0px", threshold: 0 },
    );
    targets.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      targets.forEach((el) => {
        el.classList.remove("rf-pre", "rf-in");
        el.style.transitionDelay = "";
      });
    };
  }, []);
  return null;
}
