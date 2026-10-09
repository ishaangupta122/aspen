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
        <div className="mx-0 gap-6 flex items-end justify-between mt-11 mb-5 max-[600px]:items-stretch max-[600px]:flex-col" ref={barRef}>
          <div>
            <h3 className="m-0 font-semibold text-[26px] leading-[normal] font-heading tracking-[var(--heading-tracking)] [word-spacing:0.06em]">{title}</h3>
            <p className="mx-0 mt-1.5 mb-0 text-[color:var(--rf-muted)] text-[15px]">{intro}</p>
          </div>
          <div className="gap-3 flex items-stretch flex-wrap justify-end w-[min(100%,620px)] max-[600px]:justify-stretch max-[600px]:w-full">
            <label className="pr-search px-[18px] py-0 gap-2.5 flex-1 rounded-[var(--radius-md)] border border-solid border-[color:var(--rf-line)] flex items-center w-auto [background:var(--c-white)] text-[color:var(--rf-muted)] min-w-[220px] focus-within:border-navy focus-within:[box-shadow:0_0_0_3px_rgba(11,35,66,.22)] [&:has(input:focus-visible)]:outline-[length:0] [&:has(input:focus-visible)]:[outline-style:none] [&:has(input:focus-visible)]:outline-current [&:has(input:focus-visible)]:outline-offset-[2px]">
              <Search size={18} />
              <input className="px-0 py-[15px] flex-1 border-0 border-none border-current min-w-0 outline-[length:0] [outline-style:none] outline-current [background:none] text-[color:var(--rf-ink)] font-normal text-[16px] leading-[normal] font-body"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Search brand, salt or category"
                aria-label="Search products"
              />
            </label>
          </div>
        </div>

        <div className="pr-table rounded-[var(--radius-md)] border border-solid border-[color:var(--c-line)] overflow-x-auto overflow-y-hidden [background:var(--c-white)] [-webkit-overflow-scrolling:touch] [box-shadow:none] max-[860px]:overflow-visible max-[860px]:border-0 max-[860px]:border-none max-[860px]:border-current max-[860px]:[background:transparent]" role="table">
          <div className="min-w-[900px] max-[860px]:gap-3 max-[860px]:min-w-0 max-[860px]:grid min-[640px]:max-[860px]:grid-cols-[1fr_1fr] min-[640px]:max-[860px]:[align-items:start]">
            {/* ARIA table roles (not <table>) because rows are CSS grids that also
              scroll horizontally on small screens; native table semantics are
              not reliably kept once table elements get display: grid. */}
            <div className="px-7 py-[17px] gap-6 grid grid-cols-[1.1fr_1.7fr_1.2fr_1fr_150px] items-center [background:var(--c-navy)] text-white font-semibold text-[13px] leading-[normal] font-heading tracking-[0.12em] uppercase max-[860px]:m-[-1px] max-[860px]:p-0 max-[860px]:overflow-hidden max-[860px]:border-0 max-[860px]:border-none max-[860px]:border-current max-[860px]:absolute max-[860px]:w-px max-[860px]:h-px max-[860px]:[clip:rect(0_0_0_0)] max-[860px]:whitespace-nowrap" role="row">
              <span role="columnheader">Brand</span>
              <span role="columnheader">Composition</span>
              <span role="columnheader">Category</span>
              <span role="columnheader">Pack</span>
              <span role="columnheader">Details</span>
            </div>
            {rows.slice(0, limit).map((p) => (
              <div className="px-7 py-5 gap-6 border-t [border-top-style:solid] border-t-[color:var(--c-line-soft)] grid grid-cols-[1.1fr_1.7fr_1.2fr_1fr_150px] items-center [transition:background_var(--dur-fast)] [background:#fff] max-[860px]:p-[18px] max-[860px]:rounded-[var(--radius-md)] max-[860px]:border-x max-[860px]:border-b max-[860px]:[border-right-style:solid] max-[860px]:[border-bottom-style:solid] max-[860px]:[border-left-style:solid] max-[860px]:border-[color:var(--c-line)] max-[860px]:grid-cols-[1fr_1fr] max-[860px]:gap-y-3.5 max-[860px]:gap-x-5 max-[420px]:grid-cols-[1fr] min-[640px]:max-[860px]:h-full hover:[&&]:[background:#f7f9fc] [&:nth-child(even)]:[background:#fff] [&:nth-child(even):hover]:[&&]:[background:#f7f9fc]" role="row" key={p.id}>
                <div className="gap-3.5 flex items-center max-[860px]:border-b max-[860px]:[border-bottom-style:solid] max-[860px]:border-b-[color:var(--c-line-soft)] max-[860px]:[grid-column:1_/_-1] max-[860px]:pb-3" role="cell">
                  <div>
                    {p.mono ? (
                      <button
                        type="button"
                        className="-my-2.5 px-0 py-2.5 border-0 border-none border-current block [background:none] text-[color:var(--rf-ink)] font-bold text-[16px] leading-[normal] font-heading tracking-[-0.2px] text-left cursor-pointer hover:text-[color:var(--rf-blue)] hover:underline hover:underline-offset-[3px] focus-visible:outline-offset-[2px]"
                        onClick={() => setOpen(p)}
                        title="Open product monograph"
                      >
                        {p.brand}
                      </button>
                    ) : (
                      <strong className="block text-[color:var(--rf-ink)] font-bold text-[16px] leading-[normal] font-heading tracking-[-0.2px]">{p.brand}</strong>
                    )}
                    <span className="block mt-1 text-[#5d6e80] font-semibold text-[13px] leading-[normal] font-heading tracking-[1.2px] uppercase">{p.form}</span>
                  </div>
                </div>
                <p className="m-0 text-[color:var(--rf-muted)] text-[14.5px] leading-[1.55] max-[860px]:min-w-0 max-[860px]:[overflow-wrap:anywhere] max-[860px]:[&[data-label='Composition']]:[grid-column:1_/_-1] max-[860px]:before:[content:attr(data-label)] max-[860px]:before:block max-[860px]:before:mb-[3px] max-[860px]:before:text-[color:var(--c-subtle)] max-[860px]:before:font-semibold max-[860px]:before:text-[13px] max-[860px]:before:leading-[1.2] max-[860px]:before:font-heading max-[860px]:before:tracking-[0.12em] max-[860px]:before:uppercase" role="cell" data-label="Composition">
                  {p.composition}
                </p>
                <p className="m-0 text-[color:var(--rf-muted)] text-[14.5px] leading-[1.55] max-[860px]:min-w-0 max-[860px]:[overflow-wrap:anywhere] max-[860px]:before:[content:attr(data-label)] max-[860px]:before:block max-[860px]:before:mb-[3px] max-[860px]:before:text-[color:var(--c-subtle)] max-[860px]:before:font-semibold max-[860px]:before:text-[13px] max-[860px]:before:leading-[1.2] max-[860px]:before:font-heading max-[860px]:before:tracking-[0.12em] max-[860px]:before:uppercase" role="cell" data-label="Category">
                  {p.category}
                </p>
                <p className="m-0 text-[color:var(--rf-muted)] text-[14.5px] leading-[1.55] max-[860px]:min-w-0 max-[860px]:[overflow-wrap:anywhere] max-[860px]:before:[content:attr(data-label)] max-[860px]:before:block max-[860px]:before:mb-[3px] max-[860px]:before:text-[color:var(--c-subtle)] max-[860px]:before:font-semibold max-[860px]:before:text-[13px] max-[860px]:before:leading-[1.2] max-[860px]:before:font-heading max-[860px]:before:tracking-[0.12em] max-[860px]:before:uppercase" role="cell" data-label="Pack">
                  {p.pack}
                </p>
                <div className="max-[860px]:last:[grid-column:1_/_-1]" role="cell">
                  {p.mono ? (
                    <button
                      type="button"
                      className="px-4 py-0 gap-2 rounded-[var(--btn-radius)] border border-solid border-[color:var(--c-line)] inline-flex items-center min-h-[var(--btn-height-sm)] [background:#fff] text-navy font-semibold text-[13px] leading-none font-body cursor-pointer [transition:background_var(--dur-fast),color_var(--dur-fast),border-color_var(--dur-fast)] max-[860px]:min-h-[42px] max-[860px]:w-full max-[860px]:justify-center hover:border-navy hover:[background:var(--c-navy)] hover:text-white focus-visible:rounded-[max(var(--ring-r,0px),3px)] focus-visible:outline-offset-[-3px]"
                      onClick={() => setOpen(p)}
                    >
                      <FileText size={15} /> Monograph
                    </button>
                  ) : (
                    <span className="text-[color:var(--rf-muted)] max-[860px]:hidden" aria-label="No monograph">
                      –
                    </span>
                  )}
                </div>
              </div>
            ))}
            {rows.length === 0 && (
              <div role="row">
                <p className="m-0 px-7 py-10 text-[color:var(--rf-muted)] max-[860px]:px-[18px] max-[860px]:py-7 max-[860px]:rounded-[var(--radius-md)] max-[860px]:border max-[860px]:border-dashed max-[860px]:border-[color:var(--c-line)] max-[860px]:[background:var(--c-paper)]" role="cell">
                  No products match your search.
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="gap-4 flex items-center justify-between mt-5 max-[860px]:flex-wrap">
          <p className="mx-1 my-0 text-[color:var(--rf-muted)] text-[14px]">
            Showing {Math.min(limit, rows.length)} of {rows.length} products
          </p>
          {rows.length > INITIAL_VISIBLE && (
            <div className="gap-2.5 flex max-[420px]:w-full">
              {limit < rows.length && (
                <button className="px-[var(--btn-pad-x)] py-0 rounded-[var(--btn-radius)] border border-solid border-navy min-h-[var(--btn-height)] [background:var(--c-navy)] text-white [font:var(--btn-font)] cursor-pointer [transition:background_var(--dur-fast)] max-[420px]:flex-1 hover:[background:var(--c-blue-dark)]"
                  type="button"
                  onClick={() => setLimit((l) => l + INITIAL_VISIBLE)}
                >
                  Show more
                </button>
              )}
              {limit > INITIAL_VISIBLE && (
                <button
                  type="button"
                  className="px-[var(--btn-pad-x)] py-0 rounded-[var(--btn-radius)] border border-solid border-[color:var(--c-line)] min-h-[var(--btn-height)] [background:var(--c-paper)] text-[color:var(--rf-ink)] [font:var(--btn-font)] cursor-pointer [transition:background_var(--dur-fast)] max-[420px]:flex-1 hover:[background:var(--c-surface-tint)]"
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
