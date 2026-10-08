"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import ProductThumb from "@/components/products/ProductThumb";

const TABS = [
  { key: "ind", label: "Indications" },
  { key: "dose", label: "Dosage" },
  { key: "safety", label: "Safety" },
  { key: "adr", label: "Side effects" },
];

function List({ items }) {
  if (!items?.length) return <p className="mg-none">Not listed.</p>;
  return (
    <ul className="mg-list">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}

export default function Monograph({ product, onClose }) {
  const closeRef = useRef(null);
  const [tab, setTab] = useState("ind");
  const m = product.monograph;

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

  const facts = [
    ["Composition", product.composition],
    ["Pack", product.pack],
    m?.cls && ["Class", m.cls],
    m?.atc && ["ATC code", m.atc],
    (m?.spec || product.specialties.length) && ["Specialty", m?.spec || product.specialties.join(", ")],
  ].filter((f) => f && f[1]);

  return (
    <div className="pr-overlay" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="mg" role="dialog" aria-modal="true" aria-label={`${product.brand} monograph`}>
        <button ref={closeRef} type="button" className="mg-close" onClick={onClose} aria-label="Close monograph">
          <X size={18} />
        </button>

        <header className="mg-head">
          <ProductThumb product={product} className="mg-img" />
          <div>
            <span className="mg-kicker">{product.form} · {product.category}</span>
            <h2>{product.brand}</h2>
            {m?.g && <p className="mg-generic">{m.g}</p>}
          </div>
        </header>

        <div className="mg-body">
          <dl className="mg-facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          {m ? (
            <>
              <div className="mg-tabs" role="tablist">
                {TABS.map((t) => (
                  <button key={t.key} type="button" role="tab" aria-selected={tab === t.key} className={tab === t.key ? "is-active" : ""} onClick={() => setTab(t.key)}>
                    {t.label}
                  </button>
                ))}
              </div>
              <div className="mg-panel" role="tabpanel">
                {tab === "safety" ? (
                  <>
                    <h4>Contraindications</h4>
                    <List items={m.contra} />
                    <h4>Warnings &amp; precautions</h4>
                    <List items={m.warn} />
                  </>
                ) : (
                  <List items={m[tab]} />
                )}
              </div>
            </>
          ) : (
            <p className="mg-soon">The detailed monograph for {product.brand} will be published soon. For full prescribing information, please contact us.</p>
          )}
        </div>

        <footer className="mg-foot">Rx – For the use of a Registered Medical Practitioner, Hospital or Laboratory only. Summary information; refer to the approved package insert.</footer>
      </div>
    </div>
  );
}
