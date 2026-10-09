import RfReveal from "@/components/ui/RfReveal";
import { partners } from "@/data/manufacturing";

export default function Partners() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="partners">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="gap-10 flex items-end justify-between motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:gap-7 max-[900px]:items-start max-[900px]:flex-col">
          <div className="mf-pintro">
            <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Manufacturing partners</span>
            <h2 className="mx-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy mt-4 mb-0">Where Aspen products are made</h2>
            <p className="mx-0 mt-5 mb-0 font-normal text-[16.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[52ch]">Aspen products are made by established manufacturing partners.</p>
          </div>
        </RfReveal>
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <ul className="mx-0 p-0 border-t-0 [border-top-style:none] border-t-current [list-style:none] mt-11 mb-0 grid grid-cols-[1fr_1fr] gap-x-[clamp(32px,5vw,72px)] max-[900px]:grid-cols-[1fr]">
            {partners.map(({ name, image }, i) => (
              <li className="px-0 py-5 gap-5 border-t-0 border-b [border-top-style:none] [border-bottom-style:solid] border-t-current border-b-[color:var(--c-line)] grid items-center grid-cols-[32px_160px_1fr] max-[560px]:gap-3 max-[560px]:grid-cols-[28px_112px_1fr] [&:nth-child(1)]:[&&]:border-t-2 [&:nth-child(1)]:[&&]:[border-top-style:solid] [&:nth-child(1)]:[&&]:border-t-navy [&:nth-child(2)]:border-t-2 [&:nth-child(2)]:[border-top-style:solid] [&:nth-child(2)]:border-t-navy max-[900px]:[&:nth-child(2)]:[&&&]:border-t-0 max-[900px]:[&:nth-child(2)]:[&&&]:[border-top-style:none] max-[900px]:[&:nth-child(2)]:[&&&]:border-t-current" key={name}>
                <span className="leading-none font-body text-red !font-bold !text-[14px] !tracking-[0.12em]">0{i + 1}</span>
                <span className="p-0 rounded-none border-0 border-none border-current flex items-center w-40 h-[72px] [background:transparent] justify-start max-[560px]:w-28 max-[560px]:h-14">
                  {image ? (
                    <img className="block w-full max-w-full max-h-full object-contain [mix-blend-mode:multiply] object-[left_center]" src={image} alt={`${name} logo`} loading="lazy" />
                  ) : (
                    <span className="gap-[5px] inline-flex flex-col items-start" aria-hidden="true">
                      <b className="font-bold text-[30px] leading-none [font-family:'Cormorant_Garamond',Georgia,serif] tracking-[0.005em] text-navy max-[560px]:text-[22px]">Antibiotic</b>
                      <i className="border-t-2 [border-top-style:solid] border-t-red w-full h-auto [background:none] not-italic font-bold text-[11.5px] leading-none font-body tracking-[0.42em] text-red pl-0.5 pt-[5px]">INDIA</i>
                    </span>
                  )}
                </span>
                <h3 className="m-0 p-0 border-0 border-none border-current font-semibold text-[18px] leading-[1.35] font-body text-navy tracking-[0] [background:none] text-right [justify-self:end] max-[560px]:text-[16px]">{name}</h3>
              </li>
            ))}
          </ul>
        </RfReveal>
      </div>
    </section>
  );
}
