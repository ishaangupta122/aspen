import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { journey } from "@/data/about";

export default function Journey() {
  return (
    <section className="rf ab-journey px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="journey">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <div className="gap-[clamp(40px,6vw,88px)] grid grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-stretch max-[900px]:grid-cols-[1fr]">
          <RfReveal className="pt-0 flex motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
            <figure className="m-0 flex flex-col w-full">
              <div className="overflow-hidden flex-1 rounded-[8px] [background:#e6edf3] aspect-[auto] min-h-[400px] max-[900px]:flex-none max-[900px]:aspect-[4/3] max-[900px]:min-h-0">
                <img className="block w-full h-full object-cover"
                  src={images.about}
                  alt="Pipette dispensing into laboratory test tubes"
                  loading="lazy"
                />
              </div>
              <figcaption className="gap-3.5 flex items-center mt-3.5 font-medium text-[13.5px] leading-[1.4] font-body tracking-[.02em] text-[#4a5b6c] before:flex-none before:rounded-full before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">Based in Ghaziabad, Uttar Pradesh</figcaption>
            </figure>
          </RfReveal>
          <RfReveal className="flex flex-col justify-center min-w-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
            <span className="block mb-4 text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Our journey</span>
            <h2 className="m-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em] text-navy whitespace-normal [overflow-wrap:break-word] max-w-none min-[1025px]:w-auto">{journey.title}</h2>
            <div className="pt-0 mt-[26px] min-[1025px]:self-auto">
              <p className="mx-0 mt-0 mb-[18px] text-[#4a5b6c] text-[16.5px] leading-[1.75] font-normal font-body max-w-none first:text-navy first:text-[18.5px] first:leading-[1.65]">
                Aspen was founded by <strong className="text-[color:var(--rf-ink)] font-semibold">Anup Goyal</strong>, whose
                experience in pharmaceutical sales and marketing provided a
                close understanding of clinical needs and the healthcare market.
              </p>
              <p className="mx-0 mt-0 mb-[18px] text-[#4a5b6c] text-[16.5px] leading-[1.75] font-normal font-body max-w-none">{journey.paragraphs[1]}</p>
              <p className="last:mb-0 mx-0 mt-0 mb-[18px] text-[#4a5b6c] text-[16.5px] leading-[1.75] font-normal font-body max-w-none">{journey.paragraphs[2]}</p>
            </div>
          </RfReveal>
        </div>
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <dl className="ab-facts mx-0 p-0 rounded-none border-x-0 border-t-2 border-b [border-top-style:solid] [border-right-style:none] [border-bottom-style:solid] [border-left-style:none] border-x-current border-t-navy border-b-[color:var(--c-line)] mt-14 mb-0 [background:transparent] [box-shadow:none] grid max-w-none grid-cols-[0.8fr_1.7fr_1fr] max-[900px]:mt-9 max-[900px]:grid-cols-[1fr]">
            {journey.facts.map(([label, value]) => (
              <div className="px-7 gap-6 pt-6 pb-[26px] block justify-between [&&&]:border-0 [&&&]:border-none [&&&]:border-current max-[900px]:px-0 max-[900px]:py-4 last:border-0 last:border-none last:border-current first:pl-0 [.ab-journey_.ab-facts>div+&]:border-l [.ab-journey_.ab-facts>div+&]:[border-left-style:solid] [.ab-journey_.ab-facts>div+&]:border-l-[color:var(--c-line)] max-[900px]:[.ab-journey_.ab-facts>div+&]:border-t max-[900px]:[.ab-journey_.ab-facts>div+&]:border-l-0 max-[900px]:[.ab-journey_.ab-facts>div+&]:[border-top-style:solid] max-[900px]:[.ab-journey_.ab-facts>div+&]:[border-left-style:none] max-[900px]:[.ab-journey_.ab-facts>div+&]:border-t-[color:var(--c-line)] max-[900px]:[.ab-journey_.ab-facts>div+&]:border-l-current" key={label}>
                <dt className="mx-0 mb-2.5 text-[#4a5b6c] text-[13px] font-semibold tracking-[.1em] uppercase leading-[1.4] font-body mt-0">{label}</dt>
                <dd className="m-0 font-semibold text-[20px] leading-[1.3] font-body tracking-[-0.005em] text-navy text-left">{value}</dd>
              </div>
            ))}
          </dl>
        </RfReveal>
      </div>
    </section>
  );
}
