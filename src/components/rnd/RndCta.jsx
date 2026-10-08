import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cta } from "@/data/rnd";
import { contact } from "@/data/contact";

export default function RndCta() {
  return (
    <section className="final-cta rd-cta" id="contact">
      <div className="cta-lines" />
      <div className="container cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">Let’s talk</p>
          <h2>{cta.title}</h2>
          <p>{cta.text}</p>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" href={`mailto:${contact.email}`}>
            Contact our team
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
