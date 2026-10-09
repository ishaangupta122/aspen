import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { hero } from "@/data/rnd";

export default function RndIntro() {
  return (
    <section className="rf rn-intro px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff]">
      <div className="mx-auto gap-[clamp(32px,6vw,88px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-center max-[1100px]:grid-cols-[1fr] min-[1101px]:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
        <RfReveal className="rn-intro-copy motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{hero.title}</span>
          <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy">{hero.tagline}</h2>
          {hero.paragraphs.map((text) => (
            <p className="mx-0 mt-[18px] mb-0 font-normal text-[16.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[58ch] [.rn-intro-copy_h2+&]:mt-[22px]" key={text}>{text}</p>
          ))}
          <ul className="mx-0 p-0 [list-style:none] mt-9 mb-0 grid grid-cols-[repeat(3,auto)] [justify-content:start] gap-y-0 gap-x-[clamp(28px,4vw,56px)] max-[640px]:grid-cols-[repeat(3,minmax(0,1fr))] max-[640px]:gap-x-4">
            {hero.highlights.map(([value, label]) => (
              <li className="border-t-2 [border-top-style:solid] border-t-navy pt-3.5 min-w-[120px] max-[640px]:min-w-0" key={label}>
                <strong className="block font-semibold text-[32px] leading-[1.1] font-body tracking-[-0.01em] text-navy max-[640px]:text-[26px]">{value}</strong>
                <span className="block mt-1.5 font-normal text-[13.5px] leading-[1.4] font-body text-[#4a5b6c]">{label}</span>
              </li>
            ))}
          </ul>
        </RfReveal>
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <img className="rounded-[6px] block w-full aspect-[4/5] max-h-[560px] object-cover max-[1100px]:aspect-[16/9] max-[1100px]:max-h-none min-[1101px]:max-h-[440px]"
            src={images.capsuleTray}
            alt="Gloved hands arranging capsules in a laboratory tray"
          />
        </RfReveal>
      </div>
    </section>
  );
}
