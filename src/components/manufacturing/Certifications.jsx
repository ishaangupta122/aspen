import RfReveal from "@/components/ui/RfReveal";
import ValueGrid from "@/components/ui/ValueGrid";
import { certifications } from "@/data/manufacturing";

export default function Certifications() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="certifications">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="text-left motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <div>
            <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Certifications</span>
            <h2 className="mx-0 mt-3.5 mb-0 text-navy font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em]">Quality and manufacturing standards</h2>
          </div>
        </RfReveal>
        <ValueGrid items={certifications.map(([title, text]) => ({ title, text }))} />
      </div>
    </section>
  );
}
