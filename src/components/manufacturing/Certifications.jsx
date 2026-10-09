import RfReveal from "@/components/ui/RfReveal";
import { certifications } from "@/data/manufacturing";

// Each certification is [name, detail, image?]. Add the certificate / mark image path (for example
// "/certs/eu-gmp.png" in /public) as the third item to show it on the card.
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
        <div className="gap-[clamp(20px,3vw,40px)] grid grid-cols-4 mt-10 !overflow-visible !rounded-none !border-0 !border-none !border-current ![background:transparent] ![box-shadow:none] max-[560px]:grid-cols-[1fr] [@media(560px<width<=900px)]:grid-cols-[1fr_1fr] [@media(900px<width<=1024px)]:grid-cols-2">
          {certifications.map(([name, detail, image], i) => {
            return (
              <RfReveal className="gap-2.5 rounded-none border-x-0 border-t-2 border-b-0 [border-top-style:solid] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] border-x-current border-t-navy border-b-current relative flex flex-col items-start [background:transparent] text-left [transition:border-color_var(--dur)] [box-shadow:none] !px-0 !pt-[22px] !pb-0 motion-reduce:opacity-100 motion-reduce:[transform:none] hover:border-y-[color:var(--c-line-soft)] hover:border-r-[color:var(--c-line-soft)] hover:[&&]:border-l-[color:var(--c-line-soft)] first:border-l-0 first:[border-left-style:none] first:border-l-current first:hover:[&&&]:border-t-transparent first:hover:[&&&]:border-l-transparent first:hover:border-r-transparent first:hover:border-b-transparent max-[900px]:[&:nth-child(odd)]:[&&]:border-l-0 max-[900px]:[&:nth-child(odd)]:[&&]:[border-left-style:none] max-[900px]:[&:nth-child(odd)]:[&&&]:border-l-current max-[900px]:[&:nth-child(n+3)]:border-t max-[900px]:[&:nth-child(n+3)]:[border-top-style:solid] max-[900px]:[&:nth-child(n+3)]:[&&]:border-t-[color:var(--c-line-soft)] max-[560px]:[&:nth-child(n+2)]:[&&]:border-t max-[560px]:[&:nth-child(n+2)]:[&&]:[border-top-style:solid] max-[560px]:[&:nth-child(n+2)]:[&&&]:border-t-[color:var(--c-line-soft)] [&::before]:!hidden [&::after]:!hidden" key={name}>
                <span className="gap-3 static top-4 left-5 flex items-center mb-[18px] !text-red !font-bold !text-[14px] !leading-none !font-body !tracking-[0.12em] after:[content:''] after:w-7 after:h-px after:[background:var(--rf-teal)] after:!hidden [&::before]:!hidden">0{i + 1}</span>
                {image && (
                  <span className="overflow-visible rounded-none border-0 border-none border-current flex [place-items:center] w-full h-[72px] mb-3.5 [background:none] text-[color:var(--rf-teal)] [box-shadow:none] items-center justify-start">
                    <img className="p-0 block w-auto h-auto object-contain [background:none] max-w-full max-h-full"
                      src={image}
                      alt={`${name} certification`}
                      loading="lazy"
                    />
                  </span>
                )}
                <strong className="text-navy !font-semibold !text-[24px] !leading-tight !font-body !tracking-[-0.005em]">{name}</strong>
                <span className="text-[#4a5b6c] text-[15.5px] leading-[1.6] max-w-[220px] font-normal font-body">{detail}</span>
              </RfReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
