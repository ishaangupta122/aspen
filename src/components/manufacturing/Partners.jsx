import RfReveal from "@/components/ui/RfReveal";
import PartnerSelector from "@/components/manufacturing/PartnerSelector";
import { partners } from "@/data/manufacturing";

export default function Partners() {
  return (
    <section className="rf rf-section mf-partners" id="partners">
      <div className="rf-container">
        <RfReveal className="mf-partners-head">
          <span className="rf-eyebrow">Manufacturing partners</span>
          <h2>Where Aspen products are made</h2>
          <p>
            Aspen products are made by established manufacturing partners.
            Select a partner to see who they are.
          </p>
        </RfReveal>
        <RfReveal className="mf-ps-wrap">
          <PartnerSelector partners={partners} />
        </RfReveal>
      </div>
    </section>
  );
}
