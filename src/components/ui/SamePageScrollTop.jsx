"use client";

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/scroll";

/**
 * Clicking a link to the page you are already on (logo, active nav item, footer link...) does nothing
 * in Next.js. This scrolls such links back to the top instead. Hash links and links that change the
 * query string (e.g. specialty filters) keep their normal behaviour.
 */
export default function SamePageScrollTop() {
  useEffect(() => {
    const onClick = (event) => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) return;
      event.preventDefault();
      if (window.scrollY > 0) smoothScrollTo(0, 700);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
