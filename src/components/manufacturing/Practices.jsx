import RfReveal from "@/components/ui/RfReveal";
import { practices, qcqa } from "@/data/manufacturing";

export default function Practices() {
  return (
    <section className="rf pq px-0 py-[var(--section-y)] text-[#ced9e5] [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id="practices">
      <div className="mx-auto gap-24 w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1fr_1fr] [align-items:start] max-[1024px]:gap-11 max-[1024px]:grid-cols-[1fr]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red-on-dark uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Quality practices</span>
          <h2 className="mx-0 mt-4 mb-[26px] max-w-[520px] text-white font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em]">{practices.title}</h2>
          {practices.paragraphs.map((text) => (
            <p className="mx-0 mt-0 mb-4 max-w-[520px] text-white/80 text-[16.5px] leading-[1.7] font-normal font-body" key={text}>{text}</p>
          ))}
        </RfReveal>
        <div className="pq-side">
          <RfReveal className="pb-[18px] text-white/70 font-semibold text-[12.5px] leading-[1.4] font-body tracking-[.14em] uppercase motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">{qcqa.title}</RfReveal>
          <div>
            {qcqa.cards.map(([title, text]) => (
              <RfReveal className="px-0 pb-7 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={title}>
                <div>
                  <h3 className="mx-0 mt-0 mb-2 text-white font-semibold text-[20px] leading-[1.3] font-body tracking-[0]">{title}</h3>
                  <p className="m-0 text-[#b4c4d4] text-[15.5px] leading-[1.7] font-normal font-body">{text}</p>
                </div>
              </RfReveal>
            ))}
          </div>
          <RfReveal className="mt-6 text-[#b4c4d4] text-[15.5px] leading-[1.7] font-normal font-body motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">{qcqa.closing}</RfReveal>
        </div>
      </div>
    </section>
  );
}
