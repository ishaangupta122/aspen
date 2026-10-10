import Link from "@/components/ui/SiteLink";
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
    <section className="rf rn-quality cb px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id={id}>
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="gap-[clamp(32px,6vw,88px)] grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1100px]:grid-cols-[1fr]">
          <div>
            <span className="block mb-[22px] text-red-on-dark uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{eyebrow}</span>
            <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-white">{title}</h2>
          </div>
          <div className="border-l [border-left-style:solid] border-l-white/[0.16] pl-[clamp(28px,4vw,56px)] max-[900px]:border-l-0 max-[900px]:[border-left-style:none] max-[900px]:border-l-current max-[900px]:pl-0">
            {paragraphs.map((text) => (
              <p className="mx-0 mt-0 mb-[18px] font-normal text-[16.5px] leading-[1.75] font-body text-white/80 max-w-[56ch]" key={text}>{text}</p>
            ))}
            <Link className="cb-btn px-6 py-0 gap-2.5 rounded-[3px] inline-flex items-center min-h-[48px] mt-1.5 [background:#fff] text-navy font-semibold text-[15px] leading-none font-body no-underline [transition:background_.2s_ease,color_.2s_ease] hover:[background:#e9eef4] focus-visible:rounded-[max(var(--ring-r,0px),3px)] focus-visible:outline-[color:#fff] focus-visible:outline-offset-[4px]" href={href}>
              {label} <ArrowRight className="text-red [transition:transform_.2s_ease] [.cb-btn:hover_&]:[transform:translateX(3px)]" size={18} />
            </Link>
          </div>
        </RfReveal>
      </div>
    </section>
  );
}
