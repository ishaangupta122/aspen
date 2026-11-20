import RfReveal from "@/components/ui/RfReveal";
import StageSelector from "@/components/manufacturing/StageSelector";
import { stages } from "@/data/manufacturing";

export default function QualityStages() {
  return (
    <section className="rf mf-stages px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="quality-stages">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{stages.eyebrow}</span>
          <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em] text-navy">{stages.title}</h2>
        </RfReveal>
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <StageSelector items={stages.items} />
        </RfReveal>
      </div>
    </section>
  );
}
