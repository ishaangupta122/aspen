"use client";

import { useEffect, useMemo, useState } from "react";
import { FileText, Search } from "lucide-react";
import { INITIAL_VISIBLE } from "@/data/catalogue";
import Monograph from "@/components/products/Monograph";

/** Search bar, product table (with monograph button) and "show more" paging.
 *  Shared by the main catalogue and each specialty page. */
export default function ProductList({
  products,
  query,
  onQuery,
  title,
  intro,
  barRef,
  resetKey,
}) {
  const [open, setOpen] = useState(null);
  const [limit, setLimit] = useState(INITIAL_VISIBLE);
  useEffect(() => setLimit(INITIAL_VISIBLE), [resetKey, query]);

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        !q ||
        `${p.brand} ${p.composition} ${p.category}`.toLowerCase().includes(q),
    );
  }, [products, query]);

  return (
    <>
        <div className="pr-bar" ref={barRef}>
          <div>
            <h3>{title}</h3>
            <p>{intro}</p>
          </div>
          <div className="pr-tools">
            <label className="pr-search">
              <Search size={18} />
              <input
                value={query}
                onChange={(e) => onQuery(e.target.value)}
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
      {open && <Monograph product={open} onClose={() => setOpen(null)} />}
    </>
  );
}
