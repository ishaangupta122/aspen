import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { hero } from "@/data/rnd";

export default function RndIntro() {
  return (
    <section className="rf rn-intro px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff]">
      <div className="mx-auto gap-[clamp(32px,6vw,88px)] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-stretch max-[1100px]:grid-cols-[1fr] min-[1101px]:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
        <RfReveal className="rn-intro-copy motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{hero.title}</span>
          <h2 className="mx-0 mt-3.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy">{hero.tagline}</h2>
          {hero.paragraphs.map((text) => (
            <p className="mx-0 mt-[18px] mb-0 font-normal text-[16.5px] leading-[1.7] font-body text-[#4a5b6c] max-w-[58ch] [.rn-intro-copy_h2+&]:mt-[22px]" key={text}>{text}</p>
          ))}
          <p className="!mt-8 !text-navy !text-[14px] !leading-[1.4] !font-medium !font-body mx-0 mb-0 gap-3.5 flex items-center before:flex-none before:rounded-[2px] before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">{hero.note}</p>
        </RfReveal>
        <RfReveal className="relative overflow-hidden rounded-[6px] min-h-0 max-[1100px]:aspect-[21/9] max-[640px]:aspect-[16/9] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <img className="absolute inset-0 block w-full h-full object-cover"
            src={images.capsuleTray}
            alt="Gloved hands arranging capsules in a laboratory tray"
          />
        </RfReveal>
      </div>
    </section>
  );
}
