import { prefersReducedMotion } from "@/lib/motion";

// Slow, eased scroll (the browser's built-in smooth scroll is too quick to follow).
export function smoothScrollTo(target, duration) {
  if (prefersReducedMotion()) return window.scrollTo(0, target);
  const start = window.scrollY;
  const dist = target - start;
  const root = document.documentElement;
  root.style.scrollBehavior = "auto";
  const t0 = performance.now();
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  const step = (now) => {
    const t = Math.min((now - t0) / duration, 1);
    window.scrollTo(0, start + dist * ease(t));
    if (t < 1) requestAnimationFrame(step);
    else root.style.scrollBehavior = "";
  };
  requestAnimationFrame(step);
}
