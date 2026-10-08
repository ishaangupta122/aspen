import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import { pad2 } from "@/hooks/useHeroCarousel";

/** Slide headline: intentional line breaks, one accent phrase on its own line. First slide owns the h1. */
export function HeroTitle({ slide, index }) {
  const Tag = index === 0 ? "h1" : "h2";
  return (
    <Tag className="hx-title">
      {slide.lines.map((l) => (
        <span className="hx-line" key={l}>
          {l}
        </span>
      ))}
      <em className="hx-line">{slide.accent}</em>
    </Tag>
  );
}

/** Per-slide call to action (primary button plus an optional quiet text link). */
export function HeroActions({ slide, withLink = true }) {
  return (
    <div className="hx-actions">
      <ButtonLink to={slide.cta.href}>{slide.cta.label}</ButtonLink>
      {withLink && slide.link && (
        <Link className="hx-link" href={slide.link.href}>
          {slide.link.label}
        </Link>
      )}
    </div>
  );
}

export function HeroArrows({ go, active }) {
  return (
    <div className="hx-arrows">
      <button type="button" aria-label="Previous slide" onClick={() => go(active - 1)}>
        <ChevronLeft size={18} />
      </button>
      <button type="button" aria-label="Next slide" onClick={() => go(active + 1)}>
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

/** Numbered slide labels; the active one is underlined. */
export function HeroTabs({ slides, active, go }) {
  return (
    <ol className="hx-tabs">
      {slides.map((s, i) => (
        <li key={s.key}>
          <button
            type="button"
            className={i === active ? "on" : ""}
            aria-label={`Show slide ${i + 1}: ${s.tab}`}
            aria-current={i === active ? "true" : undefined}
            onClick={() => go(i)}>
            <span className="hx-tab-n">{pad2(i + 1)}</span>
            <span className="hx-tab-t">{s.tab}</span>
          </button>
        </li>
      ))}
    </ol>
  );
}

export const slideProps = (i, active, total) => ({
  className: `hx-slide${i === active ? " on" : ""}`,
  "aria-roledescription": "slide",
  "aria-label": `${i + 1} of ${total}`,
  "aria-hidden": i !== active,
});

export const imgState = (i, active, prev) => (i === active ? "on" : i === prev ? "prev" : "");
