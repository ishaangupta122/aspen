import Link from "next/link";
import Logo from "@/components/Logo";
import { contact } from "@/data/contact";

const company = [
  ["About", "/about"],
  ["Manufacturing", "/manufacturing"],
  ["Quality", "/quality"],
  ["Research & Development", "/research-development"],
  ["Contact", "/contact"],
];

// [label, specialty name used by the catalogue]
const categories = [
  ["General Medicine", "General Medicine"],
  ["Neurology", "Neurology"],
  ["Psychiatry", "Psychiatry"],
  ["Orthopaedics", "Orthopaedics"],
  ["Gastro & Hepatology", "Gastroenterology & Hepatology"],
];

export default function Footer() {
  return (
    <footer className="footer ft">
      <div className="container ft-grid">
        <div className="ft-brand">
          <Logo />
          <p>
            A pharmaceutical company serving healthcare professionals across North India since 2010.
          </p>
        </div>

        <nav className="ft-col" aria-label="Company">
          <h4>Company</h4>
          {company.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <nav className="ft-col" aria-label="Products">
          <h4>Products</h4>
          {categories.map(([label, name]) => (
            <a href={`/products?specialty=${encodeURIComponent(name)}`} key={name}>
              {label}
            </a>
          ))}
        </nav>

        <div className="ft-col ft-contact">
          <h4>Contact</h4>
          <address>
            Site-2, Loni Rd, Block A, Industrial Area, Sahibabad
            <br />
            Ghaziabad, Uttar Pradesh – 201007
          </address>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          <span>{contact.hours}</span>
        </div>
      </div>

      <div className="container ft-bottom">
        <span>© 2026 Aspen Pharmaceuticals Pvt. Ltd.</span>
        <span>Driven by science, inspired by life.</span>
      </div>
    </footer>
  );
}
