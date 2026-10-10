"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

const URL_RE = /(https?:\/\/[^\s)]+[^\s).,;])/g;

function Linkify({ text }) {
  const parts = text.split(URL_RE);
  return parts.map((s, i) =>
    i % 2 ? (
      <a className="text-navy underline decoration-red underline-offset-2 hover:text-red" key={i} href={s} target="_blank" rel="noopener noreferrer">
        {s}
      </a>
    ) : (
      s
    ),
  );
}

function Para({ text }) {
  const m = text.match(/^([^:.]{3,60}):\s+([\s\S]+)$/);
  return (
    <p className="mx-0 mt-0 mb-3 text-[color:var(--rf-ink)] text-[15px] leading-[1.7] max-w-[70ch] max-[600px]:text-[14.5px] max-[600px]:[overflow-wrap:anywhere]">
      {m ? (
        <>
          <strong>{m[1]}:</strong> {m[2]}
        </>
      ) : (
        text
      )}
    </p>
  );
}

function Blocks({ blocks }) {
  const out = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    const t = b[0];
    if (t === "kv" || t === "li" || t === "ref") {
      const run = [];
      while (i < blocks.length && blocks[i][0] === t) run.push(blocks[i++]);
      if (t === "kv")
        out.push(
          <dl className="mx-0 mt-0 mb-3" key={out.length}>
            {run.map((r, k) => (
              <div className="px-0 py-[9px] gap-5 border-b [border-bottom-style:solid] border-[#dfe6ee] grid grid-cols-[minmax(130px,200px)_1fr] text-[14px] leading-[1.55] max-[900px]:gap-0.5 max-[900px]:grid-cols-[1fr] max-[600px]:gap-0.5 max-[600px]:grid-cols-[1fr] first:border-t first:[border-top-style:solid] first:border-t-[color:var(--rf-line)]" key={k}>
                <dt className="text-[#5d6e80]">{r[1]}</dt>
                <dd className="m-0 text-[color:var(--rf-ink)] [overflow-wrap:anywhere] leading-[1.7] max-[600px]:text-[14.5px]">{r[2]}</dd>
              </div>
            ))}
          </dl>,
        );
      else if (t === "li")
        out.push(
          <ul className="mx-0 mt-0 mb-3 pl-5 [list-style:disc] max-w-[70ch] max-[600px]:pl-[18px]" key={out.length}>
            {run.map((r, k) => (
              <li className="mb-1.5 text-[color:var(--rf-ink)] text-[15px] leading-[1.7] max-[600px]:text-[14.5px] max-[600px]:[overflow-wrap:anywhere] marker:text-red" key={k}>{r[1]}</li>
            ))}
          </ul>,
        );
      else
        out.push(
          <ol className="m-0 pl-[22px] [list-style:decimal] max-[600px]:pl-5" key={out.length}>
            {run.map((r, k) => (
              <li className="mb-1.5 text-[color:var(--rf-muted)] text-[13px] leading-[1.7] [overflow-wrap:anywhere]" key={k} value={Number(r[1]) || undefined}>
                <Linkify text={r[2]} />
              </li>
            ))}
          </ol>,
        );
      continue;
    }
    if (t === "h") out.push(<h4 className="mx-0 mt-5 mb-2 text-navy font-semibold text-[14px] leading-[normal] font-body" key={out.length}>{b[1]}</h4>);
    else out.push(<Para key={out.length} text={b[1]} />);
    i++;
  }
  return out;
}

export default function Monograph({ product, onClose }) {
  const closeRef = useRef(null);
  const bodyRef = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(0);
  const lockRef = useRef(0);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  useEffect(() => {
    let live = true;
    setData(null);
    setError(false);
    fetch(`/monographs/${product.mono}.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => live && setData(d))
      .catch(() => live && setError(true));
    return () => {
      live = false;
    };
  }, [product.mono]);

  const sections = data?.sections || [];

  useEffect(() => {
    const root = bodyRef.current;
    if (!root || !sections.length) return;
    const onScroll = () => {
      if (Date.now() < lockRef.current) return;
      const top = root.getBoundingClientRect().top + 40;
      let cur = 0;
      root.querySelectorAll("[data-sec]").forEach((el, i) => {
        if (el.getBoundingClientRect().top <= top) cur = i;
      });
      if (root.scrollTop + root.clientHeight >= root.scrollHeight - 4)
        cur = sections.length - 1;
      setActive(cur);
    };
    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, [sections.length]);

  const tocRef = useRef(null);
  useEffect(() => {
    const t = tocRef.current;
    const el = t?.querySelector(".is-active");
    if (!t || !el) return;
    const horizontal = t.scrollWidth > t.clientWidth;
    if (horizontal) {
      t.scrollLeft = el.offsetLeft - t.clientWidth / 2 + el.offsetWidth / 2;
    } else if (
      el.offsetTop < t.scrollTop ||
      el.offsetTop + el.offsetHeight > t.scrollTop + t.clientHeight
    ) {
      t.scrollTop = el.offsetTop - t.clientHeight / 2;
    }
  }, [active]);

  const go = (i) => {
    const root = bodyRef.current;
    const el = root?.querySelector(`[data-sec="${i}"]`);
    if (!el) return;
    lockRef.current = Date.now() + 900;
    root.scrollTo({
      top: el.offsetTop + 12,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    setActive(i);
  };

  const facts = useMemo(() => data?.meta || [], [data]);

  return (
    <div
      className="p-6 inset-0 fixed z-[200] grid [place-items:center] [background:rgba(7,25,47,0.66)] [backdrop-filter:none] [animation:pt-fade_var(--dur)_ease_both] max-[600px]:p-0 max-[600px]:items-stretch motion-reduce:[animation:none]"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="overflow-hidden rounded-[6px] relative flex flex-col w-[min(100%,1100px)] h-[min(88vh,860px)] [background:var(--c-white)] [box-shadow:0_28px_70px_rgba(7,25,47,0.45)] [animation:pt-pop_var(--dur)_ease_both] max-[600px]:w-full max-[600px]:h-[100dvh] max-[600px]:max-h-none motion-reduce:[animation:none] min-[901px]:h-auto min-[901px]:max-h-[min(92vh,900px)]"
        role="dialog"
        aria-modal="true"
        aria-label={`${product.brand} monograph`}>
        <button
          ref={closeRef}
          type="button"
          className="rounded-[4px] border border-solid border-white/[0.28] absolute top-4 right-4 z-[2] grid [place-items:center] w-[34px] h-[34px] [background:transparent] text-[color:var(--c-on-dark)] cursor-pointer [transition:background_var(--dur),color_var(--dur)] max-[600px]:top-3 max-[600px]:right-2.5 hover:border-white/50 hover:[background:rgba(255,255,255,.1)] hover:text-white focus-visible:rounded-[max(var(--ring-r,0px),3px)]"
          onClick={onClose}
          aria-label="Close monograph">
          <X size={18} />
        </button>

        <header className="mg-head flex-none border-b-[3px] [border-bottom-style:solid] border-b-red pt-[26px] pr-16 pb-[22px] pl-9 [background:var(--c-navy)] relative max-[600px]:pt-[18px] max-[600px]:pr-14 max-[600px]:pb-3.5 max-[600px]:pl-[18px]">
          <span className="block text-[#b4c4d4] font-semibold text-[11.5px] leading-[1.4] font-body tracking-[.16em] uppercase">
            Monograph{data ? ` ${data.no}` : ""} · {product.category}
          </span>
          <h2 className="mx-0 mt-2 mb-1.5 text-white font-semibold text-[length:clamp(24px,2.4vw,30px)] leading-[1.2] font-body tracking-[-0.012em] max-[600px]:[overflow-wrap:anywhere]">{data?.name || product.composition}</h2>
          <p className="m-0 text-[#ced9e5] text-[14.5px] leading-normal font-normal font-body tracking-[.01em]">
            {product.brand} · {product.form} · {product.pack}
          </p>
        </header>

        {error && (
          <div className="flex-1 grid place-items-center p-10 text-[color:var(--rf-muted)] min-[901px]:flex-none min-[901px]:min-h-[240px]">
            The monograph could not be loaded. Please try again.
          </div>
        )}
        {!data && !error && <div className="flex-1 grid place-items-center p-10 text-[color:var(--rf-muted)] min-[901px]:flex-none min-[901px]:min-h-[240px]">Loading monograph…</div>}

        {data && (
          <div className="flex-1 min-h-0 grid grid-cols-[332px_1fr] max-[900px]:grid-cols-[1fr] max-[900px]:grid-rows-[auto_minmax(0,1fr)] max-[600px]:grid-cols-[1fr] max-[600px]:grid-rows-[auto_minmax(0,1fr)] min-[901px]:overflow-hidden min-[901px]:grow-0 min-[901px]:basis-auto">
            <nav className="mg-toc border-r [border-right-style:solid] border-r-[#dfe6ee] relative overflow-y-auto pt-5 pr-1 pb-6 pl-4 [background:#f4f7fa] [scrollbar-width:thin] max-[900px]:px-3 max-[900px]:py-0 max-[900px]:border-b max-[900px]:[border-bottom-style:solid] max-[900px]:border-b-[color:var(--rf-line)] max-[900px]:overflow-y-hidden max-[900px]:[scrollbar-width:none] max-[900px]:overflow-x-auto max-[900px]:[-webkit-mask-image:linear-gradient(_90deg,#000_0,#000_calc(100%_-_28px),transparent_100%_)] max-[900px]:[mask-image:linear-gradient(_90deg,#000_0,#000_calc(100%_-_28px),transparent_100%_)] max-[600px]:px-3 max-[600px]:py-0 max-[600px]:border-b max-[600px]:[border-bottom-style:solid] max-[600px]:border-b-[color:var(--rf-line)] max-[600px]:overflow-y-hidden max-[600px]:[scrollbar-width:none] max-[600px]:overflow-x-auto" ref={tocRef} aria-label="Monograph sections">
              <ol className="m-0 p-0 [list-style:none] max-[900px]:flex max-[600px]:flex">
                {sections.map(([title], i) => (
                  <li className="[.mg-toc_li+&]:mt-0.5" key={i}>
                    <button
                      type="button"
                      className={`py-1.5 border-y-0 border-r-0 border-l-2 [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:solid] border-y-current border-r-current border-l-transparent grid grid-cols-[24px_minmax(0,1fr)] w-full pr-1 pl-3 [background:none] text-[#4a5b6c] font-medium text-[13px] leading-[1.45] font-body text-left cursor-pointer [transition:background_.15s_ease,color_.15s_ease,border-color_.15s_ease] max-[900px]:px-2.5 max-[900px]:gap-1.5 max-[900px]:border-b-2 max-[900px]:border-l-0 max-[900px]:[border-bottom-style:solid] max-[900px]:[border-left-style:none] max-[900px]:border-b-transparent max-[900px]:border-l-current max-[900px]:flex max-[900px]:w-auto max-[900px]:pt-3 max-[900px]:pb-2.5 max-[900px]:whitespace-nowrap max-[900px]:min-h-[44px] max-[900px]:items-center max-[600px]:px-2.5 max-[600px]:gap-1.5 max-[600px]:border-b-2 max-[600px]:border-l-0 max-[600px]:[border-bottom-style:solid] max-[600px]:[border-left-style:none] max-[600px]:border-b-transparent max-[600px]:border-l-current max-[600px]:flex max-[600px]:w-auto max-[600px]:pt-3 max-[600px]:pb-2.5 max-[600px]:whitespace-nowrap hover:text-navy hover:[background:#eaeff5] [&.is-active]:border-l-red [&.is-active]:font-medium [&.is-active]:[&&]:text-navy [&.is-active]:[&&]:[background:#fff] max-[900px]:[&.is-active]:border-b-[color:var(--rf-blue)] max-[600px]:[&.is-active]:border-b-[color:var(--rf-blue)] focus-visible:outline-offset-[-3px] focus-visible:[&&&]:[background:#fff]${i === active ? " is-active" : ""}`}
                      aria-current={i === active ? "true" : undefined}
                      title={title}
                      onClick={() => go(i)}>
                      <span className="tabular-nums opacity-[0.7] [.mg-toc_button.is-active_&]:text-red [.mg-toc_button.is-active_&]:opacity-100">{i + 1}</span>
                      <em className="overflow-hidden min-w-0 not-italic whitespace-nowrap text-ellipsis max-[900px]:overflow-visible max-[600px]:overflow-visible">{title.replace(/ and /gi, " & ")}</em>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="px-10 relative overflow-y-auto pt-7 pb-9 [scrollbar-width:thin] max-[900px]:px-7 max-[900px]:pt-6 max-[900px]:pb-8 max-[600px]:px-[18px] max-[600px]:pt-[18px] max-[600px]:pb-8 min-[901px]:[contain:size] focus-visible:outline-offset-[-3px]" ref={bodyRef} tabIndex={0}>
              <dl className="m-0 px-[22px] py-5 rounded-tl-none rounded-tr-none rounded-br-[4px] rounded-bl-[4px] border-x border-t-2 border-b border-solid border-x-[#dfe6ee] border-t-navy border-b-[#dfe6ee] grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-y-[18px] gap-x-7 [background:#f4f7fa] max-[600px]:grid-cols-[1fr]">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-[#5d6e80] font-semibold text-[11px] leading-[1.4] font-body tracking-[.12em] uppercase">{k}</dt>
                    <dd className="mx-0 mt-[5px] mb-0 font-medium text-navy text-[14px] leading-[1.45] [overflow-wrap:anywhere] max-[600px]:text-[13.5px]">{v}</dd>
                  </div>
                ))}
              </dl>

              {data.brands?.length > 0 && (
                <p className="mx-0 p-0 mt-3.5 mb-0 text-navy text-[14px] leading-[1.6] max-[600px]:[overflow-wrap:anywhere]">
                  <span className="text-[#5d6e80] font-semibold text-[11px] leading-[1.4] font-body block mb-[3px] tracking-[.12em] uppercase">Aspen brands</span>
                  {data.brands.join(" · ")}
                </p>
              )}

              {sections.map(([title, blocks], i) => (
                <section className="border-t [border-top-style:solid] border-t-[#dfe6ee] mt-[30px] pt-[26px]" data-sec={i} key={i}>
                  <h3 className="mx-0 grid grid-cols-[32px_1fr] items-baseline mt-0 mb-3.5 text-navy font-semibold text-[19px] leading-[1.3] font-body tracking-[-0.005em] max-[600px]:grid-cols-[28px_1fr]">
                    <span className="text-red font-semibold text-[13px] leading-[normal] font-body tabular-nums">{i + 1}</span>
                    {title}
                  </h3>
                  <Blocks blocks={blocks} />
                </section>
              ))}

              <p className="mx-0 px-[18px] py-4 rounded-tl-none rounded-tr-[4px] rounded-br-[4px] rounded-bl-none border-y border-r border-l-[3px] border-solid border-y-[#dfe6ee] border-r-[#dfe6ee] border-l-red mt-8 mb-0 text-[#4a5b6c] text-[13px] leading-[1.6] [background:#f4f7fa]">
                <strong className="block mb-1 text-navy font-semibold text-[11.5px] leading-[1.4] font-body tracking-[.12em] uppercase">Prescription medicine</strong>
                {data.disclaimer}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
