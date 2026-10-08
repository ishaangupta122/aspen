import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { SPECIALTY_COUNT, therapeuticAreas } from "@/data/site";
import SectionIntro from "@/components/ui/SectionIntro";

export default function TherapeuticAreas() {
  return (
    <section className="section areas-section" id="capabilities">
      <div className="container">
        <SectionIntro
          eyebrow="What we focus on"
          title="Healthcare across essential therapeutic areas."
          copy={`Our seven core areas, drawn from ${SPECIALTY_COUNT} medical specialties.`}
        />
        <div className="areas-layout">
          {therapeuticAreas.map((area) => (
            <Link
              href={area.href}
              className={`area-item ${area.className}`}
              key={area.name}
            >
              {area.image && (
                <img src={area.image} alt="" loading="lazy" decoding="async" />
              )}
              <div className="area-overlay" />
              <div className="area-content">
                <span>{area.name}</span>
                <small>{area.detail}</small>
              </div>
              <MoveUpRight className="area-arrow" size={20} />
            </Link>
          ))}
        </div>
        <div className="areas-cta">
          <Link href="/products#catalogue">
            Browse the full product range
            <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
