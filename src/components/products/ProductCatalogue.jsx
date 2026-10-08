"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, FileText, Search } from "lucide-react";
import {
  catalogue,
  categoryCards,
  productsFor,
  INITIAL_VISIBLE,
} from "@/data/catalogue";
import Illustration from "@/components/products/Illustration";
import Monograph from "@/components/products/Monograph";
import Link from "next/link";
import { smoothScrollTo } from "@/lib/scroll";
import { slugify } from "@/lib/specialties-slug";

export default function ProductCatalogue() {
  const [tab, setTab] = useState("All");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(null);
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
  const [limit, setLimit] = useState(INITIAL_VISIBLE);
  useEffect(() => setLimit(INITIAL_VISIBLE), [tab, query]);
  // Deep link from the home page: /products?q=BRAND
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const spec = params.get("specialty");
    if (spec && categoryCards.some((c) => c.name === spec)) {
      setTab(spec);
      setTimeout(scrollToBar, 350);
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

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return productsFor(tab).filter(
      (p) =>
        !q ||
        `${p.brand} ${p.composition} ${p.category}`.toLowerCase().includes(q),
    );
  }, [tab, query]);

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
          {categoryCards.map(({ name, label, art, image }) => (
            <button
              key={name}
              type="button"
              role="tab"
              aria-selected={tab === name}
              className={`pr-cat ${tab === name ? "is-active" : ""}`}
              onClick={() => pick(name)}
            >
              <Illustration name={art} image={image} alt="" />
              <span className="pr-cat-label">
                <strong>{label}</strong>
                <em>
                  {counts[name]} {counts[name] === 1 ? "product" : "products"}
                </em>
              </span>
            </button>
          ))}
        </div>
        <div className="pr-bar" ref={barRef}>
          <div>
            <h3>
              {tab === "All"
                ? "All products"
                : categoryCards.find((c) => c.name === tab)?.label || tab}
            </h3>
            <p>
              The Aspen range, A–Z by brand.
              {tab !== "All" && (
                <>
                  {" "}
                  <Link className="in-link" href={`/products/${slugify(tab)}`}>
                    View the full {tab} list
                  </Link>
                </>
              )}
            </p>
          </div>
          <div className="pr-tools">
            <label className="pr-search">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brand, salt or category"
                aria-label="Search products"
              />
            </label>
          </div>
        </div>

        <div className="pr-table" role="table">
          <div className="pr-table-in">
            {/* ARIA table roles (not <table>) because rows are CSS grids that also
              scroll horizontally on small screens; native table semantics are
              not reliably kept once table elements get display: grid. */}
            <div className="pr-thead" role="row">
              <span role="columnheader">Brand</span>
              <span role="columnheader">Composition</span>
              <span role="columnheader">Category</span>
              <span role="columnheader">Pack</span>
              <span role="columnheader">Details</span>
            </div>
            {rows.slice(0, limit).map((p) => (
              <div className="pr-row" role="row" key={p.id}>
                <div className="pr-brand" role="cell">
                  <div>
                    {p.mono ? (
                      <button
                        type="button"
                        className="pr-brand-name"
                        onClick={() => setOpen(p)}
                        title="Open product monograph"
                      >
                        {p.brand}
                      </button>
                    ) : (
                      <strong className="pr-brand-plain">{p.brand}</strong>
                    )}
                    <span>{p.form}</span>
                  </div>
                </div>
                <p role="cell" data-label="Composition">
                  {p.composition}
                </p>
                <p role="cell" data-label="Category">
                  {p.category}
                </p>
                <p role="cell" data-label="Pack">
                  {p.pack}
                </p>
                <div role="cell">
                  {p.mono ? (
                    <button
                      type="button"
                      className="pr-detail-btn"
                      onClick={() => setOpen(p)}
                    >
                      <FileText size={15} /> Monograph
                    </button>
                  ) : (
                    <span className="pr-na" aria-label="No monograph">
                      –
                    </span>
                  )}
                </div>
              </div>
            ))}
            {rows.length === 0 && (
              <div role="row">
                <p className="pr-empty" role="cell">
                  No products match your search.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="pr-more">
          <p className="pr-count">
            Showing {Math.min(limit, rows.length)} of {rows.length} products
          </p>
          {rows.length > INITIAL_VISIBLE && (
            <div className="pr-more-actions">
              {limit < rows.length && (
                <button
                  type="button"
                  onClick={() => setLimit((l) => l + INITIAL_VISIBLE)}
                >
                  Show more
                </button>
              )}
              {limit > INITIAL_VISIBLE && (
                <button
                  type="button"
                  className="is-ghost"
                  onClick={() => setLimit(INITIAL_VISIBLE)}
                >
                  Show less
                </button>
              )}
            </div>
          )}
        </div>
      </div>
      {open && <Monograph product={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
