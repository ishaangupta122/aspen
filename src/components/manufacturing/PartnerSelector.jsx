"use client";

import { useState } from "react";

export default function PartnerSelector({ partners }) {
  const [active, setActive] = useState(0);
  const current = partners[active];

  return (
    <div className="mf-ps">
      <div className="mf-ps-card" aria-live="polite">
        {partners.map(({ name, image }, i) => (
          <div
            className={`mf-ps-slide${i === active ? " is-active" : ""}`}
            key={name}
            aria-hidden={i !== active}>
            <span className="mf-ps-logo">
              {image ? (
                <img
                  src={image}
                  alt={i === active ? `${name} logo` : ""}
                  loading="lazy"
                />
              ) : (
                <b>{name}</b>
              )}
            </span>
          </div>
        ))}
        <span className="mf-ps-count" aria-hidden="true">
          {String(active + 1).padStart(2, "0")} /{" "}
          {String(partners.length).padStart(2, "0")}
        </span>
        <div className="mf-ps-caption">
          <span>Our partner</span>
          <strong key={current.name}>{current.name}</strong>
        </div>
      </div>

      <ul className="mf-ps-list">
        {partners.map(({ name }, i) => {
          const isActive = i === active;
          return (
            <li key={name}>
              <button
                type="button"
                className={isActive ? "is-active" : undefined}
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}>
                <span className="mf-ps-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mf-ps-name">{name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
