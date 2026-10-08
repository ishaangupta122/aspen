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

// [label, specialty page slug]
const categories = [
  ["General Medicine", "general-medicine"],
  ["Neurology", "neurology"],
  ["Psychiatry", "psychiatry"],
  ["Orthopaedics", "orthopaedics"],
];

export default function Footer() {
  return (
    <footer className="footer ft">
      <div className="container ft-grid">
        <div className="ft-brand">
          <Logo />
          <p>
            A pharmaceutical company serving healthcare professionals across
            North India since 2010.
          </p>
        </div>

        <nav className="ft-col" aria-label="Company">
          <h2>Company</h2>
          {company.map(([label, href]) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <nav className="ft-col" aria-label="Products">
          <h2>Products</h2>
          {categories.map(([label, slug]) => (
            <Link href={`/products/${slug}`} key={slug}>
              {label}
            </Link>
          ))}
          <Link href="/products">All products</Link>
        </nav>

        <div className="ft-col ft-contact">
          <h2>Contact</h2>
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
        <span className="ft-legal">
          <Link href="/privacy">Privacy policy</Link>
          <span>Driven by science, inspired by life.</span>
        </span>
      </div>
    </footer>
  );
}
