import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import { values } from "@/data/about";

export default function CoreValues() {
  return (
    <section className="rf ab-values px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="values">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <RfHeading
            eyebrow="Our core values"
            title="The principles behind every decision."
          />
        </RfReveal>
        <div className="gap-[clamp(20px,3vw,40px)] grid grid-cols-4 mt-12 max-[560px]:grid-cols-[1fr] [@media(560px<width<=900px)]:grid-cols-[1fr_1fr]">
          {values.map(({ title, text }, index) => (
            <RfReveal className="px-0 rounded-none border-x-0 border-t-2 border-b-0 [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-x-current border-t-navy border-b-current pt-6 pb-0 [background:transparent] [box-shadow:none] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={title}>
              <span className="[&:not(.ab-value-image)]:mx-3 block mb-3.5 text-red mt-0 leading-none font-body !mx-0 !px-0 !text-[14px] !tracking-[0.12em] !font-bold">0{index + 1}</span>
              <h3 className="[&:not(.ab-value-image)]:mx-3 mt-0 mb-2.5 font-semibold text-[20px] leading-[1.3] font-body tracking-[var(--heading-tracking)] [word-spacing:0.06em] text-navy !mx-0 !px-0">{title}</h3>
              <p className="[&:not(.ab-value-image)]:mx-3 my-0 text-[#4a5b6c] text-[15.5px] leading-[1.7] font-normal font-body !mx-0 !px-0">{text}</p>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
