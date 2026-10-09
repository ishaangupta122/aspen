import Link from "next/link";
import RfReveal from "@/components/ui/RfReveal";
import { dosageForms } from "@/data/rnd";

export default function DosageForms() {
  return (
    <section className="rf rf-section rn-dosage" id="dosage-forms">
      <div className="rf-container">
        <RfReveal className="rn-dosage-head">
          <div>
            <span className="rf-eyebrow">Dosage forms</span>
            <h2>Dosage forms we develop</h2>
          </div>
          <p>
            Our formulation development spans pharmaceutical and nutraceutical
            dosage forms. See these forms in our{" "}
            <Link className="in-link" href="/products#portfolio">
              product range by dosage form
            </Link>
            .
          </p>
        </RfReveal>
        <ul className="rn-forms">
          {dosageForms.map(({ name, icon: Icon, focus }) => (
            <RfReveal as="li" className="rn-form" key={name}>
              <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
              <h3>{name}</h3>
              <p>{focus}</p>
            </RfReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
