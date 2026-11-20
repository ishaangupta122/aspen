import RfReveal from "@/components/ui/RfReveal";
import { careers } from "@/data/contact";

export default function Careers() {
  return (
    <section className="rf py-[clamp(44px,5vw,64px)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="careers">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="gap-x-[clamp(32px,6vw,88px)] gap-y-5 grid grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-end motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:grid-cols-[1fr]">
          <div>
            <span className="m-0 block text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{careers.eyebrow}</span>
            <h2 className="mx-0 mt-3.5 mb-0 text-navy font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em]">{careers.title}</h2>
          </div>
          <div>
            <p className="m-0 font-normal text-[16.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[44ch]">{careers.copy}</p>
          </div>
        </RfReveal>
      </div>
    </section>
  );
}
