import RfReveal from "@/components/ui/RfReveal";
import { mission, vision } from "@/data/about";

export default function MissionVision() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id="mission-vision">
      <div className="mx-auto gap-0 w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1fr_1fr] max-[900px]:gap-9 max-[900px]:grid-cols-[1fr]">
        <RfReveal className="ab-mv-card py-0 overflow-visible rounded-none border-0 border-none border-current relative pr-[clamp(24px,5vw,72px)] pl-0 text-white [background:transparent] [box-shadow:none] max-[900px]:pr-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] after:rounded-[50%] after:border after:border-solid after:border-white/[0.16] after:[content:''] after:absolute after:right-[-90px] after:top-[-90px] after:w-[260px] after:h-[260px] after:hidden [&::before]:hidden">
          <span className="block mb-5 text-red-on-dark uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Our mission</span>
          <p className="m-0 relative z-[1] font-medium text-[length:clamp(20px,2vw,24px)] leading-normal font-body tracking-[-0.005em] [word-spacing:0.06em] text-white">{mission}</p>
        </RfReveal>
        <RfReveal className="ab-mv-card py-0 overflow-visible rounded-none border-y-0 border-r-0 border-l [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:solid] border-y-current border-r-current border-l-white/[0.16] relative pr-0 pl-[clamp(24px,5vw,72px)] text-white [background:transparent] [box-shadow:none] max-[900px]:pt-9 max-[900px]:pl-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:border-t max-[900px]:border-l-0 max-[900px]:[border-top-style:solid] max-[900px]:[border-left-style:none] max-[900px]:border-t-white/[0.16] max-[900px]:border-l-current after:rounded-[50%] after:border after:border-solid after:border-white/[0.16] after:[content:''] after:absolute after:right-[-90px] after:top-[-90px] after:w-[260px] after:h-[260px] after:hidden [&::before]:hidden">
          <span className="block mb-5 text-red-on-dark uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Our vision</span>
          <p className="m-0 relative z-[1] font-medium text-[length:clamp(20px,2vw,24px)] leading-normal font-body tracking-[-0.005em] [word-spacing:0.06em] text-white">{vision}</p>
        </RfReveal>
      </div>
    </section>
  );
}
