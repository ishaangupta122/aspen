"use client";

import { useState } from "react";

export default function FounderPortrait({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="ab-founder-photo">
      <span aria-hidden="true">{initials}</span>
      {!failed && <img src={src} alt={`Portrait of ${name}`} onError={() => setFailed(true)} />}
    </div>
  );
}
