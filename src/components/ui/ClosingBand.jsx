import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RfReveal from "@/components/ui/RfReveal";

/** Shared navy closing band: heading on the left, message, action and contact line on the right. */
export default function ClosingBand({
  id,
  eyebrow,
  title,
  paragraphs,
  label = "Contact our team",
  href = "/contact",
}) {
  return (
    <section className="rf rf-section rn-quality cb" id={id}>
      <div className="rf-container">
        <RfReveal className="rn-quality-grid cb-grid">
          <div>
            <span className="rf-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
          <div className="rn-quality-copy cb-copy">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <Link className="cb-btn" href={href}>
              {label} <ArrowRight size={18} />
            </Link>
          </div>
        </RfReveal>
      </div>
    </section>
  );
}
