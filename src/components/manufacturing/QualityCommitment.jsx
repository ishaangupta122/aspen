import Link from "next/link";
import RfReveal from "@/components/ui/RfReveal";
import { commitment } from "@/data/manufacturing";

export default function QualityCommitment() {
  return (
    <section
      className="rf ab-direction-section mf-commit-section"
      id="commitment"
    >
      <div className="rf-container">
        <RfReveal className="ab-direction mf-commit">
          <div className="mf-commit-main">
            <span className="rf-eyebrow">Quality commitment</span>
            <div className="ab-direction-body">
              <h2>{commitment.title}</h2>
              <p>{commitment.text}</p>
              <p>
                Learn more about our{" "}
                <Link className="in-link" href="/manufacturing#partners">
                  manufacturing partners and facilities
                </Link>
                .
              </p>
              <p className="ab-signature">{commitment.tagline}</p>
            </div>
          </div>
          {commitment.image && (
            <div className="mf-commit-fig">
              <img
                src={commitment.image}
                alt={commitment.imageAlt}
                width={1400}
                height={933}
                loading="lazy"
                decoding="async"
              />
            </div>
          )}
        </RfReveal>
      </div>
    </section>
  );
}
