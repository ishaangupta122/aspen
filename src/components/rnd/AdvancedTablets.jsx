import RfReveal from "@/components/ui/RfReveal";
import { tablets } from "@/data/rnd";

export default function AdvancedTablets() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="tablets">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="gap-[clamp(32px,6vw,88px)] grid grid-cols-[minmax(0,7fr)_minmax(0,5fr)] [align-items:end] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1100px]:grid-cols-[1fr] max-[1100px]:gap-y-3.5">
          <div>
            <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Complex oral formulations</span>
            <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy">Advanced tablet architectures</h2>
          </div>
          <p className="m-0 font-normal text-[16.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[46ch]">{tablets.intro}</p>
        </RfReveal>
        <ul className="mx-0 p-0 gap-[clamp(24px,3vw,48px)] [list-style:none] mt-[clamp(40px,5vw,64px)] mb-0 grid grid-cols-[repeat(3,minmax(0,1fr))] max-[800px]:grid-cols-[1fr]">
          {tablets.items.map((item) => (
            <RfReveal as="li" className="border-t-2 [border-top-style:solid] border-t-navy pt-[22px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={item.key}>
              <img className="rounded-[6px] block w-full aspect-[16/9] object-cover mb-5"
                src={item.image}
                alt={item.imageAlt}
                width={520}
                height={347}
                loading="lazy"
                decoding="async"
              />
              <h3 className="mx-0 mt-0 mb-2 font-semibold text-[19px] leading-[1.3] font-body tracking-[0] text-navy">{item.title}</h3>
              <p className="m-0 font-normal text-[15.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[40ch]">{item.text}</p>
            </RfReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
