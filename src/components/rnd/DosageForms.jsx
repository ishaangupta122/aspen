"use client";

import { useState } from "react";
import { dosageForms } from "@/data/rnd";

export default function DosageForms() {
  const [active, setActive] = useState(0);
  const current = dosageForms[active];
  const Icon = current.icon;
  return (
    <section className="rf rf-section rd-dosage" id="dosage-forms">
      <div className="rf-container rd-dosage-grid">
        <div className="rd-dosage-intro rf-reveal">
          <div className="rf-heading">
            <span className="rf-eyebrow">Dosage forms and development priorities</span>
            <h2>A broad range of dosage forms</h2>
            <p>
              Our formulation development interests span a broad range of pharmaceutical and
              nutraceutical dosage forms.
            </p>
          </div>
          <p className="rd-hint">Select a category to see its development focus.</p>
        </div>
        <div className="rd-dosage-explorer rf-reveal">
          <div className="rd-tabs" role="tablist" aria-label="Dosage categories">
            {dosageForms.map(({ name, icon: TabIcon }, index) => (
              <button
                key={name}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
              >
                <TabIcon size={20} />
                <span>{name}</span>
              </button>
            ))}
          </div>
          <div className="rd-panel" role="tabpanel" key={current.name}>
            <span className="rd-panel-icon">
              <Icon size={30} />
            </span>
            <span className="rd-panel-label">Development focus</span>
            <h3>{current.name}</h3>
            <p>{current.focus}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
