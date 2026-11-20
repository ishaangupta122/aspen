import RfReveal from "@/components/ui/RfReveal";
import { focusAreas } from "@/data/rnd";

export default function FocusAreas() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="focus">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <div>
            <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Research focus</span>
            <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy">Core areas of formulation work</h2>
          </div>
        </RfReveal>
        <ol className="mx-0 p-0 border-t-2 [border-top-style:solid] border-t-navy [list-style:none] mt-8 mb-0">
          {focusAreas.map(({ title, text }) => (
            <RfReveal as="li" className="px-0 py-[26px] border-b [border-bottom-style:solid] border-b-[color:var(--c-line)] grid grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-x-[clamp(20px,3vw,48px)] items-baseline motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:py-[18px] max-[900px]:grid-cols-[1fr] max-[900px]:gap-y-2 min-[901px]:py-5 min-[901px]:grid-cols-[380px_minmax(0,1fr)] min-[901px]:gap-x-7 min-[901px]:[align-items:start]" key={title}>
              <h3 className="m-0 font-semibold text-[18px] leading-[1.4] font-body tracking-[0] text-navy ">{title}</h3>
              <p className="m-0 font-normal text-[15.5px] leading-[1.65] font-body text-[#4a5b6c] max-w-[62ch]  min-[901px]:max-w-[64ch]">{text}</p>
            </RfReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
