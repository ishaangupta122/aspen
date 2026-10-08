"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X } from "lucide-react";

const URL_RE = /(https?:\/\/[^\s)]+[^\s).,;])/g;

function Linkify({ text }) {
  const parts = text.split(URL_RE);
  return parts.map((s, i) =>
    i % 2 ? (
      <a key={i} href={s} target="_blank" rel="noopener noreferrer">
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
    <p className="mg-p">
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
          <dl className="mg-kv" key={out.length}>
            {run.map((r, k) => (
              <div key={k}>
                <dt>{r[1]}</dt>
                <dd>{r[2]}</dd>
              </div>
            ))}
          </dl>,
        );
      else if (t === "li")
        out.push(
          <ul className="mg-list" key={out.length}>
            {run.map((r, k) => (
              <li key={k}>{r[1]}</li>
            ))}
          </ul>,
        );
      else
        out.push(
          <ol className="mg-refs" key={out.length}>
            {run.map((r, k) => (
              <li key={k} value={Number(r[1]) || undefined}>
                <Linkify text={r[2]} />
              </li>
            ))}
          </ol>,
        );
      continue;
    }
    if (t === "h") out.push(<h4 className="mg-h" key={out.length}>{b[1]}</h4>);
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
    fetch(`/data/monographs/${product.mono}.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => live && setData(d))
      .catch(() => live && setError(true));
    return () => {
      live = false;
    };
  }, [product.mono]);

  const sections = data?.sections || [];

  // scroll-spy
  useEffect(() => {
    const root = bodyRef.current;
    if (!root || !sections.length) return;
    const onScroll = () => {
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

  // keep the active TOC entry in view
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
      className="pr-overlay"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="mg"
        role="dialog"
        aria-modal="true"
        aria-label={`${product.brand} monograph`}>
        <button
          ref={closeRef}
          type="button"
          className="mg-close"
          onClick={onClose}
          aria-label="Close monograph">
          <X size={18} />
        </button>

        <header className="mg-head">
          <span className="mg-kicker">
            Monograph{data ? ` ${data.no}` : ""} · {product.category}
          </span>
          <h2>{data?.name || product.composition}</h2>
          <p className="mg-sub">
            {product.brand} · {product.form} · {product.pack}
          </p>
        </header>

        {error && (
          <div className="mg-state">
            The monograph could not be loaded. Please try again.
          </div>
        )}
        {!data && !error && <div className="mg-state">Loading monograph…</div>}

        {data && (
          <div className="mg-main">
            <nav className="mg-toc" ref={tocRef} aria-label="Monograph sections">
              <ol>
                {sections.map(([title], i) => (
                  <li key={i}>
                    <button
                      type="button"
                      className={i === active ? "is-active" : ""}
                      aria-current={i === active ? "true" : undefined}
                      title={title}
                      onClick={() => go(i)}>
                      <span>{i + 1}</span>
                      <em>{title.replace(/ and /gi, " & ")}</em>
                    </button>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mg-body" ref={bodyRef} tabIndex={0}>
              <dl className="mg-facts">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>

              {data.brands?.length > 0 && (
                <p className="mg-brands">
                  <span>Aspen brands</span>
                  {data.brands.join(" · ")}
                </p>
              )}

              {sections.map(([title, blocks], i) => (
                <section className="mg-sec" data-sec={i} key={i}>
                  <h3>
                    <span>{i + 1}</span>
                    {title}
                  </h3>
                  <Blocks blocks={blocks} />
                </section>
              ))}

              <p className="mg-disc">
                <strong>Prescription medicine</strong>
                {data.disclaimer}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
