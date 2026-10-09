import RfReveal from "@/components/ui/RfReveal";
import { qc } from "@/data/manufacturing";

export default function QualityIntro() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-white)] [&[id]]:scroll-mt-[70px]" id="quality">
      <div className="mx-auto gap-[90px] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1fr_1fr] [align-items:start] max-[1024px]:gap-10 max-[1024px]:grid-cols-[1fr]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{qc.eyebrow}</span>
          <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em] text-navy">{qc.title}</h2>
          <p className="mx-0 mt-5 mb-0 text-red font-medium text-[18px] leading-normal font-body tracking-[0]">{qc.tagline}</p>
        </RfReveal>
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <p className="mx-0 mt-0 mb-[18px] text-navy text-[length:clamp(20px,2vw,24px)] leading-normal font-medium font-body tracking-[-0.008em]">{qc.paragraphs[0]}</p>
          <p className="mx-0 mt-0 mb-[18px] text-[#4a5b6c] text-[16.5px] leading-[1.7] font-body">{qc.paragraphs[1]}</p>
        </RfReveal>
      </div>
    </section>
  );
}
