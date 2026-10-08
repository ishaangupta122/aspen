"use client";

import { useEffect } from "react";
import { X, FileText } from "lucide-react";
import ProductThumb from "@/components/products/ProductThumb";

export default function ImagePreview({ product, onClose, onMonograph }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="pr-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="ip" role="dialog" aria-modal="true" aria-label={`${product.brand} image`}>
        <button type="button" className="mg-close" onClick={onClose} aria-label="Close preview">
          <X size={18} />
        </button>
        <ProductThumb product={product} className="ip-img" />
        <div className="ip-meta">
          <div>
            <strong>{product.brand}</strong>
            <span>{product.composition}</span>
          </div>
          <button type="button" className="pr-detail-btn" onClick={onMonograph}>
            <FileText size={15} /> Monograph
          </button>
        </div>
      </div>
    </div>
  );
}
