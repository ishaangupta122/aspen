import { images } from "@/data/site";
import RfLink from "@/components/ui/RfLink";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function Quality() {
  return (
    <section className="rf rf-quality px-0 py-[var(--section-y)] overflow-hidden text-white [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id="quality">
      <div className="mx-auto gap-[clamp(40px,7vw,96px)] w-[min(var(--page-max,1240px),calc(100%_-_2_*_var(--page-gutter,32px)))] grid grid-cols-[1.12fr_0.88fr] items-center max-[900px]:gap-8 max-[900px]:grid-cols-[1fr] min-[901px]:items-stretch">
        <RfReveal className="relative h-[660px] min-h-0 max-[900px]:h-auto min-[901px]:h-full max-[900px]:m-0 max-[900px]:p-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] min-[901px]:flex min-[901px]:flex-col before:rounded-[50%] before:border before:border-solid before:border-[rgba(126,178,173,0.2)] before:[content:''] before:absolute before:left-[-130px] before:-top-20 before:w-[370px] before:h-[370px] before:hidden">
          <figure className="m-0 min-[901px]:flex min-[901px]:flex-col min-[901px]:h-full">
            <div className="overflow-hidden rounded-[8px] aspect-[5/4] [background:rgba(255,255,255,0.06)] max-[900px]:aspect-[4/3] min-[901px]:flex-1 min-[901px]:aspect-[auto] min-[901px]:min-h-[380px]">
              <img className="rounded-[var(--radius-lg)] block w-full relative h-full object-cover"
                src={images.manufacturing}
                alt="A bright, modern pharmaceutical laboratory facility"
                loading="lazy"
              />
            </div>
            <figcaption className="gap-3.5 border-t [border-top-style:solid] border-t-white/[0.14] flex items-center mt-4 pt-3.5 font-medium text-[13.5px] leading-[1.4] font-body tracking-[0.02em] text-white/[0.72] before:flex-none before:rounded-full before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red-on-dark)]">Quality checks at every stage</figcaption>
          </figure>
        </RfReveal>
        <RfReveal className="rf-quality-copy max-[900px]:max-w-[650px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] min-[901px]:flex min-[901px]:flex-col min-[901px]:justify-between">
          <RfHeading
            eyebrow="How we work"
            title="Made with quality‑focused partners."
          />
          <p className="mx-0 mt-6 mb-[30px] text-white/80 text-[16.5px] leading-[1.7] font-normal font-body">
            Our products are made with established manufacturing partners whose
            systems and facilities support consistent quality, from production
            and packing to storage and delivery.
          </p>
          <div className="m-0 border-t [border-top-style:solid] border-t-white/15">
            <div className="px-0 py-4 border-b [border-bottom-style:solid] border-white/[0.14] flex items-baseline justify-between max-[600px]:gap-[7px] max-[600px]:flex-col">
              <strong className="font-semibold text-[18px] leading-[1.3] font-body tracking-[0.005em] text-white">EU-GMP</strong>
              <span className="text-white/70 text-[14.5px] font-normal leading-[1.4] font-body">European standards</span>
            </div>
            <div className="px-0 py-4 border-b [border-bottom-style:solid] border-white/[0.14] flex items-baseline justify-between max-[600px]:gap-[7px] max-[600px]:flex-col">
              <strong className="font-semibold text-[18px] leading-[1.3] font-body tracking-[0.005em] text-white">WHO-GMP</strong>
              <span className="text-white/70 text-[14.5px] font-normal leading-[1.4] font-body">Global quality practice</span>
            </div>
            <div className="px-0 py-4 border-b [border-bottom-style:solid] border-white/[0.14] flex items-baseline justify-between max-[600px]:gap-[7px] max-[600px]:flex-col">
              <strong className="font-semibold text-[18px] leading-[1.3] font-body tracking-[0.005em] text-white">ISO 9001:2015</strong>
              <span className="text-white/70 text-[14.5px] font-normal leading-[1.4] font-body">Quality management</span>
            </div>
          </div>
          <RfLink to="/quality">Our quality approach</RfLink>
        </RfReveal>
      </div>
    </section>
  );
}
