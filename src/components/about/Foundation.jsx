import RfReveal from "@/components/ui/RfReveal";
import { intro } from "@/data/about";

export default function Foundation() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="foundation">
      <div className="mx-auto gap-[clamp(40px,7vw,104px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[minmax(0,7fr)_minmax(0,4fr)] [align-items:start] max-[900px]:grid-cols-[1fr]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Our foundation</span>
          <p className="mx-0 mt-4 mb-0 text-navy font-medium text-[length:clamp(24px,2.4vw,30px)] leading-[1.4] font-body tracking-[-0.01em] [word-spacing:0.06em]">{intro.foundation[0]}</p>
        </RfReveal>
        <RfReveal className="p-0 border-0 border-none border-current mt-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] before:rounded-[3px] before:[content:''] before:w-11 before:h-[3px] before:[background:var(--red)] before:mb-5 before:hidden">
          <p className="mx-0 mt-0 mb-[18px] text-navy text-[17px] leading-[1.65] font-medium font-body">{intro.lead}</p>
          <p className="m-0 text-[#4a5b6c] text-[16.5px] leading-[1.75] font-normal font-body">{intro.foundation[1]}</p>
        </RfReveal>
      </div>
    </section>
  );
}
