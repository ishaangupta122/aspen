import { images } from "@/data/site";
import RfLink from "@/components/ui/RfLink";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function About() {
  return (
    <section className="rf rf-about px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="about">
      <div className="mx-auto gap-[clamp(40px,7vw,96px)] w-[min(var(--page-max,1240px),calc(100%_-_2_*_var(--page-gutter,32px)))] grid grid-cols-[1fr_1fr] items-stretch max-[900px]:grid-cols-[1fr]">
        <RfReveal className="relative min-h-0 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <figure className="m-0 flex flex-col h-full max-[900px]:h-auto">
            <div className="inset-auto overflow-hidden rounded-[8px] relative flex-1 min-h-[320px] [background:var(--c-surface-tint)] max-[900px]:flex-none max-[900px]:min-h-0 max-[900px]:aspect-[4/3]">
              <img className="absolute inset-0 block w-full h-full object-cover"
                src={images.scientist}
                alt="A technician working at a containment isolator in a pharmaceutical cleanroom"
                loading="lazy"
              />
            </div>
            <figcaption className="gap-3.5 flex items-center justify-end mt-4 font-medium text-[13.5px] leading-[1.4] font-body tracking-[0.02em] text-[color:var(--c-muted)] before:flex-none before:rounded-full before:[content:''] before:w-6 before:h-0.5 before:[background:var(--red)]">Established 2010 · Serving healthcare professionals</figcaption>
          </figure>
        </RfReveal>
        <RfReveal className="rf-about-copy flex flex-col justify-center max-[900px]:max-w-[650px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <RfHeading
            eyebrow="About Aspen"
            title="Driven by Science, Inspired by Life"
          />
          <p className="mx-0 mt-[26px] mb-4 text-[color:var(--c-ink)] text-[18.5px] leading-[1.65] font-normal font-body">
            Aspen began in 2010, built on experience in pharmaceutical sales and
            marketing, to serve healthcare professionals across India.
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
