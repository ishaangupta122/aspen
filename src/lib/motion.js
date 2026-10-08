/** True when the visitor has asked the OS/browser to reduce motion. Client-side only. */
export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
