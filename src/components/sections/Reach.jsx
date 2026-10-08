import Link from "next/link";
import { MapPin } from "lucide-react";
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
    <section className="rf rf-section rf-reach">
      <div className="rf-container rf-reach-grid">
        <RfReveal className="rf-reach-copy">
          <RfHeading
            eyebrow="Our reach"
            title="Serving healthcare across North India."
          />
          <p>
            Field teams and{" "}
            <Link className="in-link" href="/contact">
              distribution partners
            </Link>{" "}
            connect Aspen with healthcare professionals across seven states,
            helping keep medicines available where clinicians need them.
          </p>
          <div className="rf-reach-stat">
            <strong>7</strong>
            <span>
              States
              <br />
              served
            </span>
          </div>
        </RfReveal>
        <RfReveal className="rf-map">
          <div className="rf-map-grid" />
          <div className="rf-map-route rf-map-route-one" />
          <div className="rf-map-route rf-map-route-two" />
          <div className="rf-map-route rf-map-route-three" />
          <div className="rf-map-center">
            <MapPin size={30} strokeWidth={1.8} />
            <span>North India</span>
          </div>
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
