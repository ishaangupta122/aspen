import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function Reach() {
  const states = [
    ["Field teams", "On the ground with healthcare professionals"],
    ["Distribution partners", "Keeping medicines available"],
    ["Pharmaceutical trade", "Reliable supply for the trade"],
    ["Healthcare professionals", "The clinicians we serve"],
  ];
  return (
    <section id="reach" className="rf rf-reach px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-white)] [&[id]]:scroll-mt-[70px]">
      <div className="mx-auto gap-[clamp(48px,7vw,96px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[0.8fr_1.2fr] items-center max-[900px]:grid-cols-[1fr]">
        <RfReveal className="max-[900px]:max-w-[650px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <RfHeading
            eyebrow="Our reach"
            title="Serving healthcare across India."
          />
          <p className="mx-0 mt-6 mb-0 text-[#4a5b6c] text-[16.5px] leading-[1.7] font-normal font-body">
            Field teams and distribution partners connect Aspen with
            healthcare professionals across India, helping keep
            medicines available where clinicians need them.
          </p>
          <Link className="ta-all px-0 py-2 gap-3 border-b [border-bottom-style:solid] border-b-navy inline-flex items-center mt-[26px] font-semibold text-[15.5px] leading-[1.2] font-body text-navy [transition:border-color_0.25s_ease] hover:border-b-red focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]" href="/contact">
            Become a distributor <ArrowRight className="text-red [transition:transform_0.25s_ease] [.ta-all:hover_&]:[transform:translateX(4px)]" size={18} />
          </Link>
        </RfReveal>
        <RfReveal className="overflow-hidden rounded-[var(--radius-lg)] relative flex flex-col justify-center px-[clamp(24px,4vw,40px)] py-[clamp(18px,2.4vw,26px)] [background:linear-gradient(160deg,#eef3f8_0%,#e3eaf2_100%)] border border-solid border-navy/[0.06] max-w-[440px] w-full [justify-self:end] before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:[background:var(--red)] max-[900px]:max-w-none max-[900px]:[justify-self:stretch] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <p className="m-0 mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5b6b7c] font-body">Who we work with</p>
          {states.map(([state, note]) => (
            <div
              className="gap-3.5 flex items-center py-3 border-b [border-bottom-style:solid] border-b-navy/10 last:border-b-0"
              key={state}
            >
              <i className="shrink-0 rounded-[50%] border-2 border-solid border-white block w-2.5 h-2.5 [background:var(--red)] [box-shadow:0_0_0_4px_rgba(187,48,57,0.14)]" />
              <div className="font-body">
                <span className="block text-navy text-[16px] font-semibold leading-[1.25]">{state}</span>
                <span className="block mt-0.5 text-[#5b6b7c] text-[13.5px] leading-[1.4]">{note}</span>
              </div>
            </div>
          ))}
        </RfReveal>
      </div>
    </section>
  );
}
