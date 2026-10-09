import Link from "next/link";
import Logo from "@/components/Logo";
import EmployeeLoginLink from "@/components/EmployeeLoginLink";
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
  ["Cardiology", "cardiology"],
  ["Neurology", "neurology"],
  ["Psychiatry", "psychiatry"],
  ["Orthopaedics", "orthopaedics"],
];

export default function Footer() {
  return (
    <footer className="footer ft px-0 text-[color:var(--ft-text)] [background:linear-gradient(180deg,#07192f_0%,#07192f_100%)] pt-20 pb-7 relative font-body max-[600px]:pt-[60px] before:inset-x-0 before:[content:''] before:absolute before:top-0 before:h-px before:[background:linear-gradient(90deg,transparent,var(--red-on-dark),transparent)] before:w-auto before:[transform:none]">
      <div className="container mx-auto my-0 gap-14 w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1.5fr_0.8fr_0.8fr_1.3fr] pb-16 max-[900px]:grid-cols-[1fr_1fr] max-[900px]:gap-y-11 max-[900px]:gap-x-8 max-[600px]:grid-cols-[1fr_1fr]">
        <div className="ft-brand max-[900px]:[grid-column:1_/_-1]">
          <Logo />
          <p className="mx-0 max-w-[34ch] mt-[22px] mb-0 text-[color:var(--ft-text)] text-[15.5px] font-normal leading-[1.7]">
            A pharmaceutical company serving healthcare professionals across
            North India since 2010.
          </p>
        </div>

        <nav className="gap-[13px] flex flex-col text-[15px] font-light max-[600px]:gap-0" aria-label="Company">
          <h2 className="mx-0 mt-0 mb-[26px] text-[color:var(--ft-ink)] font-semibold text-[12.5px] leading-none font-body tracking-[0.16em] uppercase pb-3.5 relative after:rounded-full after:[content:''] after:absolute after:left-0 after:bottom-0 after:w-6 after:h-0.5 after:[background:var(--ft-mark)]">Company</h2>
          {company.map(([label, href]) => (
            <Link className="-my-1.5 px-0 py-1.5 w-fit text-[color:var(--ft-text)] [transition:color_0.25s_ease] relative self-start font-medium text-[15.5px] leading-[1.4] font-body tracking-[0.01em] max-[600px]:my-0 hover:text-[color:var(--ft-ink)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:#fff] [&:is(a,_button):focus-visible]:outline-offset-[4px] after:inset-x-0 after:[content:''] after:absolute after:bottom-0.5 after:h-px after:[background:var(--ft-mark)] after:[transform:scaleX(0)] after:[transform-origin:left] after:[transition:transform_0.3s_ease] hover:after:[transform:scaleX(1)]" href={href} key={label}>
              {label}
            </Link>
          ))}
        </nav>

        <nav className="gap-[13px] flex flex-col text-[15px] font-light max-[600px]:gap-0" aria-label="Products">
          <h2 className="mx-0 mt-0 mb-[26px] text-[color:var(--ft-ink)] font-semibold text-[12.5px] leading-none font-body tracking-[0.16em] uppercase pb-3.5 relative after:rounded-full after:[content:''] after:absolute after:left-0 after:bottom-0 after:w-6 after:h-0.5 after:[background:var(--ft-mark)]">Products</h2>
          {categories.map(([label, slug]) => (
            <Link className="-my-1.5 px-0 py-1.5 w-fit text-[color:var(--ft-text)] [transition:color_0.25s_ease] relative self-start font-medium text-[15.5px] leading-[1.4] font-body tracking-[0.01em] max-[600px]:my-0 hover:text-[color:var(--ft-ink)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:#fff] [&:is(a,_button):focus-visible]:outline-offset-[4px] after:inset-x-0 after:[content:''] after:absolute after:bottom-0.5 after:h-px after:[background:var(--ft-mark)] after:[transform:scaleX(0)] after:[transform-origin:left] after:[transition:transform_0.3s_ease] hover:after:[transform:scaleX(1)]" href={`/products/${slug}`} key={slug}>
              {label}
            </Link>
          ))}
          <Link className="-my-1.5 px-0 py-1.5 w-fit text-[color:var(--ft-text)] [transition:color_0.25s_ease] relative self-start font-medium text-[15.5px] leading-[1.4] font-body tracking-[0.01em] max-[600px]:my-0 hover:text-[color:var(--ft-ink)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:#fff] [&:is(a,_button):focus-visible]:outline-offset-[4px] after:inset-x-0 after:[content:''] after:absolute after:bottom-0.5 after:h-px after:[background:var(--ft-mark)] after:[transform:scaleX(0)] after:[transform-origin:left] after:[transition:transform_0.3s_ease] hover:after:[transform:scaleX(1)]" href="/products">All products</Link>
        </nav>

        <div className="gap-[13px] flex flex-col text-[15px] font-light max-[600px]:gap-0 max-[600px]:[grid-column:1_/_-1]">
          <h2 className="mx-0 mt-0 mb-[26px] text-[color:var(--ft-ink)] font-semibold text-[12.5px] leading-none font-body tracking-[0.16em] uppercase pb-3.5 relative after:rounded-full after:[content:''] after:absolute after:left-0 after:bottom-0 after:w-6 after:h-0.5 after:[background:var(--ft-mark)]">Contact</h2>
          <address className="mx-0 mt-0 mb-1 text-[color:var(--ft-text)] not-italic leading-[1.65] font-normal text-[15.5px] font-body">
            Site-2, Loni Rd, Block A, Industrial Area, Sahibabad
            <br />
            Ghaziabad, Uttar Pradesh – 201007
          </address>
          <a className="-my-1.5 px-0 py-1.5 w-fit text-[color:var(--ft-text)] [transition:color_0.25s_ease] relative self-start font-medium text-[15.5px] leading-[1.4] font-body tracking-[0.01em] max-[600px]:my-0 hover:text-[color:var(--ft-ink)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:#fff] [&:is(a,_button):focus-visible]:outline-offset-[4px] [&:hover::after]:[transform:scaleX(1)]" href={contact.phoneHref}>{contact.phone}</a>
          <a className="-my-1.5 px-0 py-1.5 w-fit text-[color:var(--ft-text)] [transition:color_0.25s_ease] relative self-start font-medium text-[15.5px] leading-[1.4] font-body tracking-[0.01em] max-[600px]:my-0 hover:text-[color:var(--ft-ink)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:#fff] [&:is(a,_button):focus-visible]:outline-offset-[4px] [&:hover::after]:[transform:scaleX(1)]" href={`mailto:${contact.email}`}>{contact.email}</a>
          <span className="text-[color:var(--ft-dim)] text-[14.5px] font-normal leading-normal font-body max-[600px]:mt-1.5">{contact.hours}</span>
        </div>
      </div>

      <div className="container mx-auto my-0 gap-5 border-t [border-top-style:solid] border-t-[color:var(--ft-line)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] flex justify-between pt-[26px] text-[color:var(--ft-dim)] font-body text-[13.5px] font-normal leading-normal tracking-[0.01em] max-[600px]:gap-2 max-[600px]:flex-col">
        <span>© 2026 Aspen Pharmaceuticals Pvt. Ltd.</span>
        <span className="gap-[18px] inline-flex max-[700px]:gap-y-2 max-[700px]:gap-x-[22px] max-[700px]:flex-wrap">
          <Link className="hover:text-[color:var(--ft-ink)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:#fff] [&:is(a,_button):focus-visible]:outline-offset-[4px] text-[color:var(--ft-dim)] [font:inherit] [transition:color_0.25s_ease]" href="/privacy">Privacy policy</Link>
          <EmployeeLoginLink />
          <span>Driven by science, inspired by life.</span>
        </span>
      </div>
    </footer>
  );
}
