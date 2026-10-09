import Link from "next/link";
import { ArrowRight } from "lucide-react";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function Reach() {
  const states = [
    "Delhi",
    "Uttar Pradesh",
    "Punjab",
    "Haryana",
    "Himachal Pradesh",
    "Uttarakhand",
    "Rajasthan",
  ];
  return (
    <section id="reach" className="rf rf-reach px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-white)] [&[id]]:scroll-mt-[70px]">
      <div className="mx-auto gap-[clamp(48px,7vw,96px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[0.8fr_1.2fr] items-center max-[900px]:grid-cols-[1fr]">
        <RfReveal className="max-[900px]:max-w-[650px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <RfHeading
            eyebrow="Our reach"
            title="Serving healthcare across North India."
          />
          <p className="mx-0 mt-6 mb-0 text-[#4a5b6c] text-[16.5px] leading-[1.7] font-normal font-body">
            Field teams and distribution partners connect Aspen with
            healthcare professionals across seven states, helping keep
            medicines available where clinicians need them.
          </p>
          <Link className="ta-all px-0 py-2 gap-3 border-b [border-bottom-style:solid] border-b-navy inline-flex items-center mt-[26px] font-semibold text-[15.5px] leading-[1.2] font-body text-navy [transition:border-color_0.25s_ease] hover:border-b-red focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]" href="/contact">
            Become a distributor <ArrowRight className="text-red [transition:transform_0.25s_ease] [.ta-all:hover_&]:[transform:translateX(4px)]" size={18} />
          </Link>
        </RfReveal>
        <RfReveal className="overflow-hidden rounded-[var(--radius-lg)] relative h-[360px] [background:#eaf0f5] max-w-[540px] w-full [justify-self:end] max-[900px]:h-[300px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[900px]:max-w-none max-[900px]:[justify-self:stretch]">
          {states.map((state, index) => (
            <div
              className={`gap-[9px] absolute z-[3] flex items-center text-navy text-[13.5px] font-medium leading-[1.2] font-body [&.rf-map-point-1]:left-[47%] [&.rf-map-point-1]:top-[60%] [&.rf-map-point-2]:[&&]:left-[66%] [&.rf-map-point-2]:[&&]:top-[74%] [&.rf-map-point-3]:[&&&]:left-[22%] [&.rf-map-point-3]:[&&&]:top-[27%] [&.rf-map-point-4]:[&&&&]:left-[30%] [&.rf-map-point-4]:[&&&&]:top-[46%] [&.rf-map-point-5]:[&&&&&]:left-[46%] [&.rf-map-point-5]:[&&&&&]:top-[15%] [&.rf-map-point-6]:[&&&&&&]:left-[62%] [&.rf-map-point-6]:[&&&&&&]:top-[36%] [&.rf-map-point-7]:[&&&&&&&]:left-[12%] [&.rf-map-point-7]:[&&&&&&&]:top-[78%] rf-map-point-${index + 1}`}
              key={state}
            >
              <i className="rounded-[50%] border-2 border-solid border-white block w-2.5 h-2.5 [background:var(--red)] [box-shadow:0_0_0_4px_rgba(187,48,57,0.14)]" />
              <span className="rounded-[var(--radius-sm)] max-[600px]:px-[7px] max-[600px]:py-0.5 max-[600px]:[background:rgba(255,255,255,0.82)] max-[600px]:text-[13px] max-[600px]:whitespace-nowrap">{state}</span>
            </div>
          ))}
        </RfReveal>
      </div>
    </section>
  );
}
