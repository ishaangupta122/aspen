"use client";

import { useCallback, useState } from "react";

// Shows the founder photo, or the initials badge when the photo is missing.
// The image is server-rendered, so it can fail before React hydrates, in which
// case `onError` never fires. The ref callback catches that already-failed state.
export default function FounderPortrait({ src, name }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const checkLoaded = useCallback((img) => {
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <div className="ab-founder-photo">
      <span aria-hidden="true">{initials}</span>
      {!failed && (
        <img
          ref={checkLoaded}
          src={src}
          alt={`Portrait of ${name}`}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
