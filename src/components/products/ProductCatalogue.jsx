"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  catalogue,
  categoryCards,
  productsFor,
} from "@/data/catalogue";
import ProductList from "@/components/products/ProductList";
import Link from "next/link";
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

  const counts = useMemo(() => {
    const c = { All: catalogue.length };
    categoryCards
      .slice(1)
      .forEach(
        ({ name }) =>
          (c[name] = catalogue.filter((p) =>
            p.specialties.includes(name),
          ).length),
      );
    return c;
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
    <section className="rf rf-section pr-catalogue" id="catalogue">
      <div className="rf-container">
        <div className="pr-head">
          <div className="rf-heading rf-reveal">
            <span className="rf-eyebrow">Product list</span>
            <h2>Products by specialty</h2>
            <p>
              Browse our brands by medical specialty, or search the full range.
            </p>
          </div>
          {edge.overflow && (
            <div className="pr-arrows">
              <button
                type="button"
                onClick={() => slide(-1)}
                disabled={edge.start}
                aria-label="Previous categories"
              >
                <ArrowLeft size={20} />
              </button>
              <button
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
          className="pr-cats"
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
              className={`pr-cat ${tab === name ? "is-active" : ""}`}
              onClick={() => pick(name)}
            >
              <span className="pr-cat-label">
                <strong>{label}</strong>
                <em>
                  {counts[name]} {counts[name] === 1 ? "product" : "products"}
                </em>
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
                  <Link className="in-link" href={`/products/${slugify(tab)}`}>
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
