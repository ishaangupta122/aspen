"use client";

import { useEffect } from "react";

/** Adds `is-visible` to every `.rf-reveal` element as it scrolls into view. */
export default function RevealObserver() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".rf-reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px -4% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}
