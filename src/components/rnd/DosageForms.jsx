import RfReveal from "@/components/ui/RfReveal";
import { dosageForms } from "@/data/rnd";

export default function DosageForms() {
  return (
    <section className="rf rn-dosage px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id="dosage-forms">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="gap-[clamp(32px,6vw,88px)] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <div>
            <span className="block mb-[22px] text-red-on-dark uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Dosage forms</span>
            <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-white">Dosage forms we develop</h2>
          </div>
          </RfReveal>
        <ul className="mx-0 p-0 [list-style:none] mt-[clamp(40px,5vw,56px)] mb-0 grid grid-cols-[repeat(3,minmax(0,1fr))] gap-x-[clamp(24px,3vw,48px)] gap-y-12 max-[1100px]:grid-cols-[repeat(2,minmax(0,1fr))] max-[640px]:mt-8 max-[640px]:grid-cols-[1fr]">
          {dosageForms.map(({ name, image, focus }) => (
            <RfReveal as="li" className="px-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={name}>
              <div className="flex items-center gap-5">
                <span className="overflow-hidden flex-none rounded-[50%] block w-[72px] h-[72px]">
                  <img className="block w-full h-full object-cover" src={image} alt="" loading="lazy" />
                </span>
                <div className="min-w-0">
                  <h3 className="m-0 mb-1.5 font-semibold text-[19px] leading-[1.3] font-body tracking-[0] text-white">{name}</h3>
                  <p className="m-0 font-normal text-[15px] leading-[1.6] font-body text-[#b4c4d4] text-pretty">{focus}</p>
                </div>
              </div>
            </RfReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
