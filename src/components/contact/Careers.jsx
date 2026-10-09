import RfReveal from "@/components/ui/RfReveal";
import { careers } from "@/data/contact";

export default function Careers() {
  return (
    <section className="rf py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="careers">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="gap-[clamp(32px,6vw,88px)] grid grid-cols-[minmax(0,6fr)_minmax(0,5fr)] [align-items:end] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:grid-cols-[1fr] max-[900px]:gap-y-3.5">
          <div>
            <span className="m-0 block text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{careers.eyebrow}</span>
            <h2 className="mx-0 mt-3.5 mb-0 text-navy font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em]">{careers.title}</h2>
          </div>
        </RfReveal>
        <ul className="mx-0 p-0 gap-[clamp(24px,3vw,48px)] [list-style:none] mt-10 mb-0 grid grid-cols-[repeat(3,minmax(0,1fr))] max-[900px]:mt-8 max-[900px]:grid-cols-[1fr]">
          {careers.reasons.map(({ title, text }) => (
            <RfReveal as="li" className="border-t-2 [border-top-style:solid] border-t-navy pt-6 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={title}>
              <h3 className="mx-0 mt-0 mb-2 font-semibold text-[19px] leading-[1.3] font-body tracking-[0] text-navy">{title}</h3>
              <p className="m-0 font-normal text-[15.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[42ch]">{text}</p>
            </RfReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
