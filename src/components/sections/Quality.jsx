import { ShieldCheck } from "lucide-react";
import { images } from "@/data/site";
import RfLink from "@/components/ui/RfLink";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function Quality() {
  return (
    <section className="rf rf-section rf-quality" id="quality">
      <div className="rf-container rf-quality-grid">
        <RfReveal className="rf-quality-image">
          <img
            src={images.manufacturing}
            alt="A bright, modern pharmaceutical laboratory facility"
            loading="lazy"
          />
          <div className="rf-quality-badge">
            <ShieldCheck size={25} />
            <span>
              Quality checks
              <br />
              at every stage
            </span>
          </div>
        </RfReveal>
        <RfReveal className="rf-quality-copy">
          <RfHeading
            eyebrow="How we work"
            title="Made with quality-focused partners."
          />
          <p>
            Our products are made with established manufacturing partners whose
            systems, facilities, and practices support consistent quality—from
            production and packing to storage and delivery.
          </p>
          <div className="rf-certs">
            <div>
              <strong>EU-GMP</strong>
              <span>European standards</span>
            </div>
            <div>
              <strong>WHO-GMP</strong>
              <span>Global quality practice</span>
            </div>
            <div>
              <strong>ISO 9001:2015</strong>
              <span>Quality management</span>
            </div>
          </div>
          <RfLink to="/quality">Our quality approach</RfLink>
        </RfReveal>
      </div>
    </section>
  );
}
