import Link from "next/link";
import RfReveal from "@/components/ui/RfReveal";
import { commitment } from "@/data/manufacturing";

export default function QualityCommitment() {
  return (
    <section
      className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]"
      id="commitment"
    >
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="ab-direction mf-commit p-0 gap-[clamp(32px,6vw,88px)] overflow-visible rounded-none border-0 border-none border-current relative grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] text-navy [background:transparent] items-center motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:grid-cols-[1fr] before:rounded-[50%] before:border before:border-solid before:border-[rgba(126,178,173,0.2)] before:[content:''] before:absolute before:right-[-120px] before:top-[-140px] before:w-[440px] before:h-[440px] before:hidden [&::after]:hidden">
          <div className="p-0 relative">
            <span className="mx-0 block mb-4 text-red uppercase mt-0 leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Quality commitment</span>
            <div className="relative max-w-[680px]">
              <h2 className="mx-0 mt-0 mb-5 text-navy font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em]">{commitment.title}</h2>
              <p className="mx-0 mt-0 mb-4 text-[#4a5b6c] text-[16.5px] leading-[1.75] font-normal font-body max-w-[56ch] tracking-[0] [&:first-of-type]:mx-0 [&:first-of-type]:text-[#4a5b6c] [&:first-of-type]:font-normal [&:first-of-type]:text-[16.5px] [&:first-of-type]:leading-[1.75] [&:first-of-type]:font-body [&:first-of-type]:tracking-[0] [&:first-of-type]:max-w-[56ch] [&:first-of-type]:mt-0 [&:first-of-type]:mb-4">{commitment.text}</p>
              <p className="mx-0 mt-0 mb-4 text-[#4a5b6c] text-[16.5px] leading-[1.75] font-normal font-body max-w-[56ch] tracking-[0]">
                Learn more about our{" "}
                <Link className="text-red underline decoration-1 underline-offset-[3px] [transition:color_.15s_ease] hover:[&&]:text-navy focus-visible:text-navy" href="/manufacturing#partners">
                  manufacturing partners and facilities
                </Link>
                .
              </p>
              <p className="!mt-7 !text-navy !text-[14px] !leading-[1.4] !font-medium !font-body mx-0 gap-3.5 border-t [border-top-style:solid] border-t-white/15 mb-4 pt-[26px] max-w-[56ch] flex items-center tracking-[0] before:flex-none before:rounded-[2px] before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">{commitment.tagline}</p>
            </div>
          </div>
          {commitment.image && (
            <div className="overflow-hidden rounded-[6px] relative min-h-0 aspect-[3/2] max-[1024px]:order-[-1] after:inset-0 after:[content:''] after:absolute after:[background:linear-gradient(90deg,rgba(11,35,66,0.4),transparent_38%)] after:hidden max-[1024px]:after:[background:linear-gradient(0deg,rgba(11,35,66,0.5),transparent_50%)]">
              <img className="inset-0 block w-full absolute h-full object-cover"
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
