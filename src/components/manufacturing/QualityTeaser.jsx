import Link from "@/components/ui/SiteLink";
import { ArrowRight } from "lucide-react";
import RfReveal from "@/components/ui/RfReveal";

const points = [
  [
    "Raw & packaging materials",
    "Checked against approved specifications before use.",
  ],
  ["In-process checks", "Variation caught early, during manufacture."],
  ["Finished products", "Evaluated before every release decision."],
];

export default function QualityTeaser() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)]">
      <div className="mx-auto gap-[90px] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1fr_1fr] items-center max-[1024px]:gap-11 max-[1024px]:grid-cols-[1fr]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Quality</span>
          <h2 className="mx-0 mt-3 mb-[30px] max-w-[520px] font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy [word-spacing:0.06em]">Testing from raw material to finished product.</h2>
          <Link className="ta-all px-0 py-2 gap-3 border-b [border-bottom-style:solid] border-b-navy inline-flex items-center mt-[26px] font-semibold text-[15.5px] leading-[1.2] font-body text-navy [transition:border-color_0.25s_ease] hover:border-b-red focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]" href="/quality">
            See our quality approach <ArrowRight className="text-red [transition:transform_0.25s_ease] [.ta-all:hover_&]:[transform:translateX(4px)]" size={18} />
          </Link>
        </RfReveal>
        <div className="border-t [border-top-style:solid] border-t-[color:var(--rf-line)]">
          {points.map(([t, d], i) => (
            <RfReveal className="px-0 py-6 gap-3 border-b [border-bottom-style:solid] border-b-[color:var(--rf-line)] grid grid-cols-[64px_1fr] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={t}>
              <span className="text-red leading-none font-body pt-1 !font-bold !text-[14px] !tracking-[0.12em]">0{i + 1}</span>
              <div>
                <h3 className="mx-0 mt-0 mb-1 font-semibold text-[19px] leading-[1.3] font-body tracking-[-0.4px] text-navy">{t}</h3>
                <p className="m-0 text-[#4a5b6c] text-[15.5px] leading-[1.6] font-normal font-body">{d}</p>
              </div>
            </RfReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
