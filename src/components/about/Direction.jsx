import RfReveal from "@/components/ui/RfReveal";
import { direction } from "@/data/about";

export default function Direction() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="direction">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="ab-direction p-0 gap-[clamp(32px,6vw,88px)] overflow-visible rounded-none border-0 border-none border-current relative grid grid-cols-[minmax(0,4fr)_minmax(0,8fr)] text-navy [background:transparent] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:grid-cols-[1fr] before:rounded-[50%] before:border before:border-solid before:border-[rgba(126,178,173,0.2)] before:[content:''] before:absolute before:right-[-120px] before:top-[-140px] before:w-[440px] before:h-[440px] before:hidden [&::after]:hidden">
          <span className="mx-0 block mb-0 text-red uppercase mt-2 leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Our direction</span>
          <div className="relative max-w-[680px]">
            {direction.paragraphs.map((text) => (
              <p className="mx-0 mt-0 mb-[18px] text-[#4a5b6c] text-[16.5px] leading-[1.75] font-normal font-body max-w-[62ch] first:text-navy first:font-medium first:text-[length:clamp(22px,2.2vw,26px)] first:leading-[1.45] first:font-body first:tracking-[-0.01em] first:[word-spacing:0.06em]" key={text}>{text}</p>
            ))}
            <p className="!mt-7 !text-navy !text-[14px] !leading-[1.4] !font-medium !font-body mx-0 gap-3.5 border-t [border-top-style:solid] border-t-white/15 mb-0 pt-[26px] max-w-[62ch] flex items-center before:flex-none before:rounded-[2px] before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">
              {direction.signature} · <em className="not-italic text-[#4a5b6c]">{direction.tagline}</em>
            </p>
          </div>
        </RfReveal>
      </div>
    </section>
  );
}
