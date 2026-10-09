import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SPECIALTY_COUNT, therapeuticAreas } from "@/data/site";

/** Compact index: heading on the left, the areas as a plain two-column list on the right. */
// Home shows six areas (Nutraceuticals is left out); the full list stays in the data and on the products page.
const shown = therapeuticAreas.filter((a) => a.name !== "Nutraceuticals");

export default function TherapeuticAreas() {
  return (
    <section className="section areas-section" id="capabilities">
      <div className="container ta-layout">
        <div className="ta-intro">
          <p className="eyebrow">What we focus on</p>
          <h2>Essential therapeutic areas.</h2>
          <p className="section-copy">
            Six core areas, drawn from {SPECIALTY_COUNT} medical specialties.
          </p>
          <Link href="/products#catalogue" className="ta-all">
            Browse all products
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <ul className="ta-list">
          {shown.map((area) => (
            <li key={area.name}>
              <Link href={area.href} className="ta-row">
                <span className="ta-text">
                  <span className="ta-name">{area.name}</span>
                  <span className="ta-detail">{area.detail}</span>
                </span>
                <ArrowRight className="ta-arrow" size={17} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
