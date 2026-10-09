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
      <div className="mx-0 px-0 gap-3.5 flex mt-9 mb-0 pt-1 pb-2 overflow-x-auto [scroll-snap-type:x_mandatory] [scrollbar-width:none] max-[600px]:gap-2.5 [&::-webkit-scrollbar]:hidden" ref={ref}>
        {products.map((p) => (
          <Link
            href={`/products?q=${encodeURIComponent(p.brand)}`}
            className="fp-card overflow-hidden rounded-[6px] border border-solid border-[color:var(--c-line)] grow-0 shrink-0 basis-[calc((100%_-_56px)_/_5)] [scroll-snap-align:start] relative flex flex-col [background:#fff] [transition:border-color_var(--dur)_ease,box-shadow_var(--dur)_ease] [box-shadow:none] max-[600px]:basis-[calc((100%_-_10px)_/_2.15)] [@media(600px<width<=860px)]:basis-[calc((100%_-_28px)_/_3)] [@media(860px<width<=1100px)]:basis-[calc((100%_-_42px)_/_4)] hover:border-navy hover:[box-shadow:0_8px_22px_-14px_rgba(7,25,47,0.35)] hover:[transform:none] focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
            key={p.id}>
            <div className="p-0 rounded-[var(--radius-sm)]">
              <ProductThumb product={p} className="fp-img !w-full !h-auto !aspect-[4/3] !border-0 !border-b !border-current ![border-top-style:none] ![border-left-style:none] ![border-right-style:none] ![border-bottom-style:solid] ![border-bottom-color:var(--c-line)] !rounded-none ![background:#f4f7fa]" />
            </div>
            <div className="px-4 pt-3.5 pb-4 max-[600px]:px-3 max-[600px]:pt-3 max-[600px]:pb-3.5">
              <span className="overflow-visible flex uppercase text-[12px] font-bold text-red leading-[1.3] font-body whitespace-normal text-clip items-end min-h-[2.7em] !tracking-[0.04em]">{p.category}</span>
              <h3 className="mx-0 mt-1.5 mb-1 font-semibold text-[17px] leading-tight font-body tracking-[0] text-navy max-[600px]:text-[15.5px]">{p.brand}</h3>
              <p className="m-0 overflow-hidden text-[#4a5b6c] text-[13px] leading-[1.45] [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] font-normal font-body">{p.composition}</p>
            </div>
            <ArrowUpRight className="p-1.5 rounded-[var(--radius-md)] absolute right-[18px] top-[22px] hidden w-8 h-8 [background:var(--c-white)] text-[color:var(--c-blue)] [box-shadow:0_2px_8px_rgba(7,25,47,0.14)]" size={20} />
          </Link>
        ))}
      </div>
      <div className="gap-2 flex mt-3.5">
        <button className="rounded-[6px] border border-solid border-[color:var(--c-line-soft)] grid [place-items:center] w-[38px] h-[38px] [background:var(--c-white)] text-[color:var(--c-ink)] cursor-pointer [transition:background_var(--dur-fast),color_var(--dur-fast)] [&:hover:not(:disabled)]:[background:var(--c-navy)] [&:hover:not(:disabled)]:text-white disabled:opacity-[0.35] disabled:cursor-default"
          type="button"
          onClick={() => slide(-1)}
          disabled={edge.start}
          aria-label="Previous products">
          <ArrowLeft size={20} />
        </button>
        <button className="rounded-[6px] border border-solid border-[color:var(--c-line-soft)] grid [place-items:center] w-[38px] h-[38px] [background:var(--c-white)] text-[color:var(--c-ink)] cursor-pointer [transition:background_var(--dur-fast),color_var(--dur-fast)] [&:hover:not(:disabled)]:[background:var(--c-navy)] [&:hover:not(:disabled)]:text-white disabled:opacity-[0.35] disabled:cursor-default"
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
