import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { therapeuticAreas } from "@/data/site";
import SectionIntro from "@/components/ui/SectionIntro";

export default function TherapeuticAreas() {
  return (
    <section className="section areas-section" id="capabilities">
      <div className="container">
        <SectionIntro
          eyebrow="What we focus on"
          title="Healthcare across essential therapeutic areas."
          copy="Our seven core areas, drawn from more than fifteen medical specialties."
        />
        <div className="areas-layout">
          {therapeuticAreas.map((area) => (
            <Link
              href="/products"
              className={`area-item ${area.className}`}
              key={area.name}>
              {area.image && <img src={area.image} alt="" />}
              <div className="area-overlay" />
              <div className="area-content">
                <span>{area.name}</span>
                <small>{area.detail}</small>
              </div>
              <MoveUpRight className="area-arrow" size={20} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
