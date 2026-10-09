import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SPECIALTY_COUNT, therapeuticAreas } from "@/data/site";

/** Compact index: heading on the left, the areas as a plain two-column list on the right. */
// Home shows six areas (Nutraceuticals is left out); the full list stays in the data and on the products page.
const shown = therapeuticAreas.filter((a) => a.name !== "Nutraceuticals");

export default function TherapeuticAreas() {
  return (
    <section className="px-0 py-[var(--section-y)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="capabilities">
      <div className="rf-reveal container mx-auto my-0 gap-[clamp(32px,6vw,88px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] [align-items:start] max-[960px]:grid-cols-[1fr]">
        <div className="ta-intro">
          <p className="mx-0 text-[#196d66] uppercase mt-0 mb-4 font-body !text-[14px] !tracking-[0.12em] !font-bold [&:not(.eyebrow-light)]:text-[color:var(--c-teal-text)]">What we focus on</p>
          <h2 className="m-0 max-w-[14ch] font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy max-[960px]:max-w-none">Essential therapeutic areas.</h2>
          <p className="section-copy mx-0 text-[#4a5b6c] max-w-[32ch] leading-[1.6] text-[16.5px] mt-4 mb-0 font-normal font-body max-[960px]:max-w-none">
            Six core areas, drawn from {SPECIALTY_COUNT} medical specialties.
          </p>
          <Link href="/products#catalogue" className="ta-all px-0 py-2 gap-3 border-b [border-bottom-style:solid] border-b-navy inline-flex items-center mt-[26px] font-semibold text-[15.5px] leading-[1.2] font-body text-navy [transition:border-color_0.25s_ease] hover:border-b-red focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]">
            Browse all products
            <ArrowRight className="text-red [transition:transform_0.25s_ease] [.ta-all:hover_&]:[transform:translateX(4px)]" size={17} aria-hidden="true" />
          </Link>
        </div>
        <ul className="m-0 p-0 border-t [border-top-style:solid] border-t-[color:var(--c-line)] grid grid-cols-[repeat(2,minmax(0,1fr))] gap-x-10 [list-style:none] max-[600px]:grid-cols-[1fr]">
          {shown.map((area) => (
            <li key={area.name}>
              <Link href={area.href} className="ta-row px-0 py-[18px] gap-4 border-b [border-bottom-style:solid] border-b-[color:var(--c-line)] flex items-center justify-between text-navy focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]">
                <span className="gap-1 grid">
                  <span className="font-semibold text-[17.5px] leading-[1.3] font-body tracking-[-0.005em] text-navy">{area.name}</span>
                  <span className="font-normal text-[14.5px] leading-[1.45] font-body text-[#4a5b6c]">{area.detail}</span>
                </span>
                <ArrowRight className="flex-none text-red opacity-[0.55] [transition:transform_0.25s_ease,opacity_0.25s_ease] [.ta-row:hover_&]:opacity-100 [.ta-row:hover_&]:[transform:translateX(4px)]" size={17} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
