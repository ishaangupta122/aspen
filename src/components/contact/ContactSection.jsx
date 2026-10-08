import { ExternalLink } from "lucide-react";
import RfReveal from "@/components/ui/RfReveal";
import EnquiryForm from "@/components/contact/EnquiryForm";
import { contact } from "@/data/contact";

export default function ContactSection() {
  const address = contact.address.slice(1);
  return (
    <section className="rf rf-section ct-section" id="enquiry">
      <div className="rf-container ct-grid">
        <div className="ct-col">
          <RfReveal className="ct-c-intro">
            <div className="ct-intro">
              <p>Thank you for contacting Aspen Pharmaceuticals.</p>
              <p>
                Whether you are a healthcare professional, distributor, partner
                or job seeker, you can find the best way to reach us below.
              </p>
            </div>
          </RfReveal>

          <RfReveal className="ct-c-form">
            <div className="ct-formcard">
              <h2>Send an enquiry</h2>
              <EnquiryForm />
            </div>
          </RfReveal>
        </div>
        <div className="ct-col">
          <RfReveal className="ct-c-office">
            <div className="ct-office">
              <strong>Aspen Pharmaceuticals — Head Office</strong>
              <address>
                {address.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <dl>
                <div>
                  <dt>Tel</dt>
                  <dd>
                    <a href={contact.phoneHref}>{contact.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>Email</dt>
                  <dd>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Hours</dt>
                  <dd>{contact.hours}</dd>
                </div>
              </dl>
            </div>
          </RfReveal>

          <RfReveal className="ct-c-map">
            <div className="ct-map">
              <iframe
                title="Aspen Pharmaceuticals location map"
                src={contact.mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                className="ct-map-link"
                href={contact.mapLink}
                target="_blank"
                rel="noopener noreferrer">
                Open in Maps <ExternalLink size={14} />
              </a>
            </div>
          </RfReveal>
        </div>
      </div>
    </section>
  );
}
