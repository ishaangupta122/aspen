import { Leaf } from "lucide-react";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

const image = "/images/photos/sustainability-forest-aerial.jpg";

export default function Sustainability() {
  return (
    <section className="rf rf-section rf-sustain" id="sustainability">
      <div className="rf-container rf-sustain-grid">
        <RfReveal className="rf-sustain-copy">
          <RfHeading eyebrow="Our responsibility" title="Environment & Sustainability" />
          <p>
            Better healthcare should not come at the cost of the environment. We work with responsible manufacturing
            partners and aim to keep material use, wastage and transport efficiency in view.
          </p>
          <p>
            We approach this step by step, improving as our business grows.
          </p>
        </RfReveal>
        <RfReveal className="rf-sustain-image">
          <img src={image} alt="Aerial view of a lush green forest" loading="lazy" />
          <div className="rf-sustain-badge">
            <Leaf size={22} strokeWidth={1.6} />
            <span>Care for people<br />and the planet</span>
          </div>
        </RfReveal>
      </div>
    </section>
  );
}
