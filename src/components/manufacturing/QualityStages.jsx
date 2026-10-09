import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import StageSelector from "@/components/manufacturing/StageSelector";
import { stages } from "@/data/manufacturing";

export default function QualityStages() {
  return (
    <section className="rf mf-stages px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="quality-stages">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-x-[clamp(32px,6vw,88px)] [align-items:end] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1100px]:grid-cols-[1fr] max-[1100px]:gap-y-3.5">
          <RfHeading eyebrow={stages.eyebrow} title={stages.title} />
          <p className="m-0 pb-1.5 font-normal text-[16.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[46ch] text-pretty">
            Testing is carried out at defined points: when materials arrive,
            during manufacture, before a batch is released, and over the
            shelf life of the product.
          </p>
        </RfReveal>
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <StageSelector items={stages.items} />
        </RfReveal>
      </div>
    </section>
  );
}
