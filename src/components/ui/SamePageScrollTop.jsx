"use client";

import { useEffect } from "react";
import { smoothScrollTo } from "@/lib/scroll";

/** Scrolls links to the current page back to the top (Next.js does nothing for them). Hash links and query changes behave normally. */
export default function SamePageScrollTop() {
  useEffect(() => {
    const onClick = (event) => {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link =
        event.target instanceof Element
          ? event.target.closest("a[href]")
          : null;
      if (
        !link ||
        (link.target && link.target !== "_self") ||
        link.hasAttribute("download")
      )
        return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash) return;
      if (
        url.pathname !== window.location.pathname ||
        url.search !== window.location.search
      )
        return;
      event.preventDefault();
      if (window.scrollY > 0) smoothScrollTo(0, 700);
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}
