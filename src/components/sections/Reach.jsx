import Link from "@/components/ui/SiteLink";
import { ArrowRight } from "lucide-react";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

// The order medicines travel, from partner plants to the clinician.
const chain = [
  ["Manufacturing partners", "Made at established, quality-focused plants"],
  ["Distribution partners", "Stock reaches the right places on time"],
  ["Pharmaceutical trade", "Reliable supply for the trade"],
  ["Healthcare professionals", "The clinicians we serve"],
];

export default function Reach() {
  return (
    <section id="reach" className="rf rf-reach px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-white)] [&[id]]:scroll-mt-[70px]">
      <div className="mx-auto gap-[clamp(40px,6vw,80px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[0.9fr_1.1fr] items-stretch max-[900px]:grid-cols-[1fr]">
        <RfReveal className="flex flex-col justify-between max-[900px]:max-w-[650px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <div>
            <RfHeading
              eyebrow="Our reach"
              title="Serving healthcare across India"
            />
            <p className="mx-0 mt-6 mb-0 max-w-[34ch] text-[#4a5b6c] text-[16.5px] leading-[1.7] font-normal font-body">
              Our field teams and distribution partners keep medicines
              available where clinicians need them.
            </p>
          </div>
          <Link className="ta-all px-0 py-2 gap-3 inline-flex items-center mt-8 w-fit font-semibold text-[15.5px] leading-[1.2] font-body text-navy focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]" href="/contact">
            Become a distributor <ArrowRight className="text-red [transition:transform_0.25s_ease] [.ta-all:hover_&]:[transform:translateX(4px)]" size={18} />
          </Link>
        </RfReveal>
        <RfReveal className="w-full max-w-[440px] [justify-self:end] max-[900px]:max-w-none max-[900px]:[justify-self:stretch] px-[clamp(22px,3vw,30px)] py-[clamp(20px,2.6vw,26px)] border border-solid border-[color:var(--c-line)] rounded-none [background:var(--c-surface)] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <p className="m-0 mb-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5b6b7c] font-body">How medicines reach clinicians</p>
          <ol className="relative m-0 p-0 [list-style:none] before:absolute before:left-1.5 before:top-3.5 before:bottom-[30px] before:w-[1.5px] before:[background:#a9c9c6] before:[content:'']">
            {chain.map(([title, note], i) => (
              <li className="relative flex gap-[18px] pb-5 last:pb-0 font-body" key={title}>
                <span
                  className={`shrink-0 mt-1 block w-[13px] h-[13px] box-border rounded-full border-2 border-solid border-[color:var(--red)] ${i === chain.length - 1 ? "[background:var(--red)]" : "[background:var(--c-surface)]"}`}
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-navy text-[16px] font-semibold leading-[1.3]">{title}</span>
                  <span className="block mt-[3px] text-[#5b6b7c] text-[13.5px] leading-[1.4]">{note}</span>
                </div>
              </li>
            ))}
          </ol>
        </RfReveal>
      </div>
    </section>
  );
}
