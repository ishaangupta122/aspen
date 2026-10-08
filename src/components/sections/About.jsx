import { images } from "@/data/site";
import RfLink from "@/components/ui/RfLink";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function About() {
  return (
    <section className="rf rf-section rf-about" id="about">
      <div className="rf-container rf-about-grid">
        <RfReveal className="rf-about-images">
          <div className="rf-about-main">
            <img
              src={images.doctorNotes}
              alt="Two Aspen scientists reviewing laboratory notes"
              loading="lazy"
            />
          </div>
          <div className="rf-about-detail">
            <img
              src={images.pharmacists}
              alt="Scientist checking samples in a stability chamber"
              loading="lazy"
            />
          </div>
        </RfReveal>
        <RfReveal className="rf-about-copy">
          <RfHeading
            eyebrow="Who we are"
            title="Built around the needs of clinicians."
          />
          <p className="rf-lead">
            Aspen Pharmaceuticals is a Ghaziabad-based pharmaceutical company,
            established in 2010, serving healthcare professionals across seven
            states of North India.
          </p>
          <p className="rf-body">
            We combine a focused therapeutic portfolio with responsive field
            service and responsible business practices.
          </p>
          <RfLink to="/about">Learn more about Aspen</RfLink>
        </RfReveal>
      </div>
    </section>
  );
}
