import { Leaf } from "lucide-react";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

const image = "/images/sustainability-forest-aerial.jpg";

export default function Sustainability() {
  return (
    <section className="rf rf-sustain px-0 py-[var(--section-y)] text-white [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id="sustainability">
      <div className="mx-auto gap-[clamp(48px,7vw,96px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1fr_0.7fr] items-center max-[1024px]:grid-cols-[1fr]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <RfHeading
            eyebrow="Our responsibility"
            title="Environment & sustainability"
          />
          <p className="mx-0 mt-6 mb-0 max-w-[480px] text-white/80 text-[16.5px] leading-[1.7] font-normal font-body">
            Better healthcare should not come at the cost of the environment. We
            work with responsible manufacturing partners and aim to keep
            material use, wastage and transport efficiency in view.
          </p>
          <p className="mx-0 mt-4 mb-0 max-w-[480px] text-white/80 text-[16.5px] leading-[1.7] font-normal font-body">We approach this step by step, improving as our business grows.</p>
        </RfReveal>
        <RfReveal className="relative h-[360px] max-w-[420px] [justify-self:end] w-full max-[1024px]:h-[300px] max-[1024px]:max-w-none max-[1024px]:[justify-self:stretch] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <img className="rounded-[8px] block w-full h-full object-cover [box-shadow:none] [filter:none]"
            src={image}
            alt="Aerial view of a lush green forest"
            loading="lazy"
          />
          <div className="px-5 py-3.5 gap-3 rounded-[6px] absolute -left-7 bottom-8 flex items-center [background:var(--c-white)] text-navy font-semibold text-[14px] leading-[1.35] font-body [box-shadow:0_18px_40px_-16px_rgba(0,0,0,0.5)] max-[1024px]:left-4">
            <Leaf className="flex-none text-red" size={22} strokeWidth={1.6} />
            <span>
              Care for people
              <br />
              and the planet
            </span>
          </div>
        </RfReveal>
      </div>
    </section>
  );
}
