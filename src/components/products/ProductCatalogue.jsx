"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  catalogue,
  categoryCards,
  productsFor,
} from "@/data/catalogue";
import ProductList from "@/components/products/ProductList";
import Link from "@/components/ui/SiteLink";
import { smoothScrollTo } from "@/lib/scroll";
import { slugify } from "@/lib/specialties-slug";

export default function ProductCatalogue() {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const barRef = useRef(null);
  // Scrolls the results bar just below the fixed header.
  const scrollToBar = () => {
    const el = barRef.current;
    if (el)
      smoothScrollTo(
        el.getBoundingClientRect().top + window.scrollY - 112,
        450,
      );
  };
  const pick = (name) => {
    setTab(name);
    requestAnimationFrame(scrollToBar);
  };
  // Deep link from the home page: /products?q=BRAND
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const spec = params.get("specialty");
    if (spec && categoryCards.some((c) => c.name === spec)) {
      setTab(spec);
      setTimeout(scrollToBar, 350);
    }
    if (params.get("search")) {
      setTimeout(() => {
        scrollToBar();
        document
          .querySelector("#catalogue .pr-search input")
          ?.focus({ preventScroll: true });
      }, 350);
    }
    const q = params.get("q");
    if (q) {
      setQuery(q);
      setTimeout(scrollToBar, 350);
    }
  }, []);

  const trackRef = useRef(null);
  const [edge, setEdge] = useState({
    overflow: false,
    start: true,
    end: false,
  });
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const update = () =>
      setEdge({
        overflow: el.scrollWidth > el.clientWidth + 2,
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
  const slide = (dir) =>
    trackRef.current?.scrollBy({ left: dir * 400, behavior: "smooth" });

  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#f4f7fa] bg-none [&[id]]:scroll-mt-[70px]" id="catalogue">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <div className="gap-6 flex items-end justify-between">
          <div className="rf-heading rf-reveal flex-1 max-w-[720px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
            <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Product list</span>
            <h2 className="m-0 text-navy font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em]">Products by specialty</h2>
            <p className="mx-0 mt-[22px] mb-0 text-[color:var(--rf-muted)] text-[16.5px] leading-[1.7]">
              Browse our brands by medical specialty, or search the full range.
            </p>
          </div>
          {edge.overflow && (
            <div className="gap-3 flex-none flex mb-1.5">
              <button className="rounded-[var(--radius-md)] border border-solid border-[color:var(--rf-line)] grid [place-items:center] w-[42px] h-[42px] [background:var(--c-white)] text-[color:var(--rf-ink)] cursor-pointer [transition:background_var(--dur-fast),color_var(--dur-fast)] [&:hover:not(:disabled)]:[background:var(--rf-navy)] [&:hover:not(:disabled)]:text-white disabled:opacity-[0.35] disabled:cursor-default"
                type="button"
                onClick={() => slide(-1)}
                disabled={edge.start}
                aria-label="Previous categories"
              >
                <ArrowLeft size={20} />
              </button>
              <button className="rounded-[var(--radius-md)] border border-solid border-[color:var(--rf-line)] grid [place-items:center] w-[42px] h-[42px] [background:var(--c-white)] text-[color:var(--rf-ink)] cursor-pointer [transition:background_var(--dur-fast),color_var(--dur-fast)] [&:hover:not(:disabled)]:[background:var(--rf-navy)] [&:hover:not(:disabled)]:text-white disabled:opacity-[0.35] disabled:cursor-default"
                type="button"
                onClick={() => slide(1)}
                disabled={edge.end}
                aria-label="Next categories"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>

        <div
          className="-mx-3.5 px-3.5 gap-4 flex items-start mt-7 pt-2.5 pb-[34px] overflow-x-auto [scroll-snap-type:x_proximity] [scroll-padding-inline:14px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          ref={trackRef}
          role="tablist"
          aria-label="Specialty"
        >
          {categoryCards.map(({ name, label }) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={tab === name}
              className={`p-0 overflow-hidden rounded-[var(--radius-md)] border border-solid border-[color:var(--rf-line)] grow shrink-0 basis-[180px] max-w-[220px] flex flex-col items-stretch [scroll-snap-align:start] [background:var(--c-white)] text-left cursor-pointer [transition:border-color_var(--dur)] [box-shadow:none] hover:border-[color:var(--rf-teal)] [&.is-active]:[&&]:border-[color:var(--rf-navy)] [&.is-active]:[box-shadow:var(--shadow-2)] [&:not(.is-active)]:border [&:not(.is-active)]:border-solid [&:not(.is-active)]:[background:var(--c-paper)] [&:not(.is-active)]:[transition:border-color_var(--dur)_ease,box-shadow_var(--dur)_ease] [&:not(.is-active)]:[&&&]:border-[color:var(--c-line)] [&:not(.is-active):hover]:[&&&]:border-[color:var(--c-navy-soft)] [&:not(.is-active):hover]:[box-shadow:var(--shadow-2)] [&:not(.is-active):hover]:[transform:none] focus-visible:rounded-[max(var(--ring-r,0px),3px)] focus-visible:outline-offset-[3px] pr-cat ${tab === name ? " is-active" : ""}`}
              onClick={() => pick(name)}
            >
              <span className="pr-cat-label px-[18px] flex-1 relative block pt-[22px] pb-[18px] [transition:background_var(--dur),color_var(--dur)] before:[content:''] before:absolute before:left-0 before:top-0 before:w-full before:h-1.5 before:[background:var(--c-navy-soft)] before:[clip-path:none] [.pr-cat.is-active_&]:[background:var(--c-navy)]">
                <strong className="block whitespace-nowrap font-semibold text-[16px] leading-[normal] font-heading tracking-[-0.3px] text-[color:var(--rf-ink)] [.pr-cat.is-active_.pr-cat-label_&]:text-white">{label}</strong>
              </span>
            </button>
          ))}
        </div>
        <ProductList
          products={productsFor(tab)}
          query={query}
          onQuery={setQuery}
          barRef={barRef}
          resetKey={tab}
          title={
            tab === "All"
              ? "All products"
              : categoryCards.find((c) => c.name === tab)?.label || tab
          }
          intro={
            <>
              The Aspen range, A–Z by brand.
              {tab !== "All" && (
                <>
                  {" "}
                  <Link className="text-[color:var(--rf-teal)] underline decoration-1 underline-offset-[3px] hover:text-navy" href={`/products/${slugify(tab)}`}>
                    View the full {tab} list
                  </Link>
                </>
              )}
            </>
          }
        />
      </div>
    </section>
  );
}
