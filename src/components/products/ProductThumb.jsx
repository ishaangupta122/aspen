"use client";

import { useState } from "react";
import Illustration from "@/components/products/Illustration";
import { formArt } from "@/data/productForms";

export default function ProductThumb({ product, className = "" }) {
  const [failed, setFailed] = useState(false);
  const showPhoto = product.image && !failed;
  return (
    <span className={`overflow-hidden flex-none rounded-[var(--radius-sm)] border border-solid border-[color:var(--rf-line)] relative block w-[52px] h-[52px] [background:var(--c-surface-tint)] ${className}`}>
      {showPhoto ? (
        <img className="p-3 rounded-[var(--radius-sm)] object-contain [background:transparent] w-full h-full [mix-blend-mode:multiply]"
          src={product.image}
          alt={product.brand}
          loading="lazy"
          ref={(el) =>
            el && el.complete && el.naturalWidth === 0 && setFailed(true)
          }
          onError={() => setFailed(true)}
        />
      ) : (
        <Illustration name={formArt[product.form] || "tablets"} alt="" />
      )}
    </span>
  );
}
