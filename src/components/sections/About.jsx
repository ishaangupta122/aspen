import { images } from "@/data/site";
import RfLink from "@/components/ui/RfLink";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function About() {
  return (
    <section className="rf rf-about px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="about">
      <div className="mx-auto gap-[clamp(40px,7vw,96px)] w-[min(var(--page-max,1240px),calc(100%_-_2_*_var(--page-gutter,32px)))] grid grid-cols-[1fr_1fr] items-center max-[900px]:grid-cols-[1fr]">
        <RfReveal className="relative min-h-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <figure className="m-0">
            <div className="inset-auto overflow-hidden rounded-[8px] relative object-cover aspect-[5/4] [background:var(--c-surface-tint)] max-[900px]:aspect-[4/3]">
              <img className="block w-full h-full object-cover"
                src={images.scientist}
                alt="Two Aspen scientists reviewing laboratory notes"
                loading="lazy"
              />
            </div>
            <figcaption className="gap-3.5 border-t [border-top-style:solid] border-t-[color:var(--c-line)] flex items-center mt-4 pt-3.5 font-medium text-[13.5px] leading-[1.4] font-body tracking-[0.02em] text-[color:var(--c-muted)] before:flex-none before:rounded-full before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">Ghaziabad, Uttar Pradesh · Established 2010</figcaption>
          </figure>
        </RfReveal>
        <RfReveal className="rf-about-copy max-[900px]:max-w-[650px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <RfHeading
            eyebrow="Who we are"
            title="Built around the needs of clinicians."
          />
          <p className="mx-0 mt-[26px] mb-4 text-[color:var(--c-ink)] text-[18.5px] leading-[1.65] font-normal font-body">
            Aspen Pharmaceuticals is a Ghaziabad-based pharmaceutical company,
            established in 2010, serving healthcare professionals across seven
            states of North India.
          </p>
          <p className="m-0 text-[#4a5b6c] leading-[1.7] font-normal text-[16.5px] font-body">
            We combine a focused therapeutic portfolio with responsive field
            service and responsible business practices.
          </p>
          <RfLink to="/about">Learn more about Aspen</RfLink>
        </RfReveal>
      </div>
    </section>
  );
}
