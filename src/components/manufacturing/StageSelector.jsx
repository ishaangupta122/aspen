"use client";

import { useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

/** Photo card on the left, numbered stage list on the right; the active
 *  stage shows its description and tests beneath its name. */
export default function StageSelector({ items }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <div className="qsel">
      <div className="qsel-card" aria-live="polite">
        {items.map(({ title, image, imageAlt }, i) => (
          <img
            key={title}
            className={i === active ? "is-active" : undefined}
            src={image}
            alt={i === active ? imageAlt : ""}
            width={820}
            height={546}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        ))}
        <span className="qsel-count" aria-hidden="true">
          {pad(active + 1)} / {pad(items.length)}
        </span>
        <div className="qsel-caption">
          <span>Quality stage</span>
          <strong key={current.title}>{current.title}</strong>
        </div>
      </div>

      <ul className="qsel-list">
        {items.map(({ title, text, tags }, i) => {
          const isActive = i === active;
          return (
            <li key={title} className={isActive ? "is-active" : undefined}>
              <button
                type="button"
                aria-expanded={isActive}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}>
                <span className="qsel-num">{pad(i + 1)}</span>
                <span className="qsel-name">{title}</span>
              </button>
              <div className="qsel-detail" hidden={!isActive}>
                <p>{text}</p>
                <div className="qsel-tags">
                  {tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
