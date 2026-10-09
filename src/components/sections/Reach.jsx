import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function Reach() {
  const states = [
    "Delhi",
    "Uttar Pradesh",
    "Punjab",
    "Haryana",
    "Himachal Pradesh",
    "Uttarakhand",
    "Rajasthan",
  ];
  return (
    <section id="reach" className="rf rf-section rf-reach">
      <div className="rf-container rf-reach-grid">
        <RfReveal className="rf-reach-copy">
          <RfHeading
            eyebrow="Our reach"
            title="Serving healthcare across North India."
          />
          <p>
            Field teams and distribution partners connect Aspen with
            healthcare professionals across seven states, helping keep
            medicines available where clinicians need them.
          </p>
          <Link className="ta-all" href="/contact">
            Become a distributor <ArrowRight size={18} />
          </Link>
        </RfReveal>
        <RfReveal className="rf-map">
          {states.map((state, index) => (
            <div
              className={`rf-map-point rf-map-point-${index + 1}`}
              key={state}
            >
              <i />
              <span>{state}</span>
            </div>
          ))}
        </RfReveal>
      </div>
    </section>
  );
}
