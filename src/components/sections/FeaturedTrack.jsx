"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import ProductThumb from "@/components/products/ProductThumb";

export default function FeaturedTrack({ products }) {
  const ref = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () =>
      setEdge({
        start: el.scrollLeft <= 2,
        end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
      });
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const slide = (dir) => {
    const el = ref.current;
    const card = el?.querySelector(".fp-card");
    el?.scrollBy({
      left: dir * ((card?.offsetWidth || 280) + 16) * 2,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fp-track" ref={ref}>
        {products.map((p) => (
          <Link
            href={`/products?q=${encodeURIComponent(p.brand)}`}
            className="fp-card"
            key={p.id}>
            <div className="fp-media">
              <ProductThumb product={p} className="fp-img" />
            </div>
            <div className="fp-info">
              <span>{p.category}</span>
              <h3>{p.brand}</h3>
              <p>{p.composition}</p>
            </div>
            <ArrowUpRight className="fp-arrow" size={20} />
          </Link>
        ))}
      </div>
      <div className="fp-nav">
        <button
          type="button"
          onClick={() => slide(-1)}
          disabled={edge.start}
          aria-label="Previous products">
          <ArrowLeft size={20} />
        </button>
        <button
          type="button"
          onClick={() => slide(1)}
          disabled={edge.end}
          aria-label="Next products">
          <ArrowRight size={20} />
        </button>
      </div>
    </>
  );
}
