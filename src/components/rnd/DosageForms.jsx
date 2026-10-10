import Link from "@/components/ui/SiteLink";
import RfReveal from "@/components/ui/RfReveal";
import { dosageForms } from "@/data/rnd";

export default function DosageForms() {
  return (
    <section className="rf rn-dosage px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id="dosage-forms">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="gap-[clamp(32px,6vw,88px)] grid grid-cols-[minmax(0,6fr)_minmax(0,5fr)] [align-items:end] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1100px]:grid-cols-[1fr] max-[1100px]:gap-y-3.5">
          <div>
            <span className="block mb-[22px] text-red-on-dark uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Dosage forms</span>
            <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-white">Dosage forms we develop</h2>
          </div>
          <p className="m-0 font-normal text-[16.5px] leading-[1.7] font-body text-white/80 max-w-[46ch] text-pretty">
            Our formulation development spans pharmaceutical and nutraceutical
            dosage forms. See these forms in our{" "}
            <Link className="text-white underline decoration-red-on-dark decoration-1 underline-offset-[3px] hover:text-red-on-dark" href="/products#portfolio">
              product range by dosage form
            </Link>
            .
          </p>
        </RfReveal>
        <ul className="mx-0 p-0 border-b [border-bottom-style:solid] border-b-white/20 [list-style:none] mt-12 mb-0 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[clamp(24px,3vw,48px)] [grid-auto-rows:1fr] max-[1100px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[640px]:mt-8 max-[640px]:grid-cols-[1fr]">
          {dosageForms.map(({ name, icon: Icon, focus }) => (
            <RfReveal as="li" className="px-0 border-t [border-top-style:solid] border-t-white/20 pt-7 pb-8 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={name}>
              <Icon className="block mb-4 text-[color:var(--red-on-dark)]" size={22} strokeWidth={1.6} aria-hidden="true" />
              <h3 className="mx-0 mt-0 mb-2 font-semibold text-[19px] leading-[1.3] font-body tracking-[0] text-white">{name}</h3>
              <p className="m-0 font-normal text-[15.5px] leading-[1.7] font-body text-[#b4c4d4] max-w-none text-pretty min-[1101px]:min-h-[calc(3_*_1.7em)] max-[640px]:min-h-0">{focus}</p>
            </RfReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
