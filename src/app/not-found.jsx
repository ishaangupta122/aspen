import Link from "@/components/ui/SiteLink";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/layout/PageShell";

export const metadata = {
  title: "Page not found | Aspen Pharmaceuticals",
  robots: { index: false },
};

const links = [
  ["Products", "/products"],
  ["About", "/about"],
  ["Quality", "/quality"],
  ["Contact", "/contact"],
];

export default function NotFound() {
  return (
    <PageShell>
      <section className="pb-banner nf !min-h-[max(560px,72vh)] px-0 pt-[140px] pb-[100px] max-[600px]:pt-[120px] px-0 overflow-hidden border-b-0 [border-bottom-style:none] border-b-current relative flex items-end min-h-[clamp(400px,52vh,500px)] pt-[150px] pb-[72px] text-white bg-navy bg-[linear-gradient(var(--c-navy),var(--c-navy))] bg-no-repeat bg-[position:right_center] bg-[length:100%_100%] max-[700px]:min-h-[330px] max-[700px]:pt-[120px] max-[700px]:pb-12 max-[700px]:bg-[position:0_0,0_0,0_0] after:hidden after:[content:''] after:absolute after:left-1/2 after:bottom-0 after:w-[min(var(--page-max,1240px),calc(100%_-_2_*_var(--page-gutter,32px)))] after:h-0.5 after:[transform:translateX(-50%)] after:[background:linear-gradient(_90deg,var(--c-aqua-strong)_0,var(--c-aqua-strong)_72px,rgba(255,255,255,0.14)_72px_)] before:inset-0 before:[content:''] before:absolute before:[background:linear-gradient(90deg,transparent_55%,rgba(7,25,47,0.35))] before:pointer-events-none">
        <div className="relative mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] relative z-[1]">
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-heading text-[clamp(150px,26vw,360px)] font-semibold leading-none tracking-[-0.06em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.12)] max-[600px]:hidden" aria-hidden="true">
            404
          </span>
          <p className="relative mb-[18px] font-body text-[14px] font-bold uppercase leading-[1.4] tracking-[0.14em] text-red-on-dark">Error 404</p>
          <h1 className="relative !text-[clamp(40px,4.8vw,62px)] font-semibold tracking-[-0.018em] m-0 font-semibold text-[length:clamp(38px,4.4vw,58px)] leading-[1.12] font-heading tracking-[-0.018em] [word-spacing:0.06em] max-w-[24ch] max-[700px]:text-[length:clamp(32px,9vw,40px)]">Page not found</h1>
          <p className="relative mt-[22px] max-w-[460px] text-[18px] leading-[1.65] text-on-dark-2">
            The page you are looking for may have moved, or the address may be
            mistyped.
          </p>
          <div className="relative mt-[34px]">
            <Link className="group inline-flex min-h-[48px] items-center gap-[10px] rounded-[3px] border-0 border-none border-current bg-white px-6 font-body text-[15px] font-semibold leading-none text-navy transition-[background,border-color] duration-[var(--dur-fast)] ease-[ease] hover:bg-[#e9eef4] focus-visible:outline-white focus-visible:outline-offset-4" href="/">
              Back to home
              <ArrowRight
                size={17}
                className="text-red transition-transform duration-[var(--dur-fast)] ease-[ease] group-hover:translate-x-[3px]"
              />
            </Link>
          </div>
          <nav className="relative mt-10 flex flex-wrap items-center gap-x-[22px] gap-y-2 font-body text-[15px] font-medium leading-[normal] text-on-dark-2" aria-label="Helpful pages">
            <span>Or go to</span>
            {links.map(([label, href]) => (
              <Link
                href={href}
                key={href}
                className="text-white underline decoration-white/35 underline-offset-4 transition-[text-decoration-color] duration-[var(--dur-fast)] ease-[ease] hover:text-white hover:decoration-red-on-dark">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
