import Link from "@/components/ui/SiteLink";
import RfReveal from "@/components/ui/RfReveal";
import Illustration from "@/components/products/Illustration";
import { dosageForms } from "@/data/catalogue";

export default function ProductsOverview() {
  return (
    <section className="rf pr-overview px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-paper)] [&[id]]:scroll-mt-[70px]" id="portfolio">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="mb-8 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <span className="block mb-[22px] text-red uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">Our portfolio</span>
          <h2 className="mx-0 mt-2.5 mb-0 font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] text-navy [word-spacing:0.06em]">Our range across six dosage forms</h2>
          <p className="mx-0 mt-3 mb-0 text-[color:var(--rf-muted)] text-[15px] leading-[1.6]">
            See how these forms are developed in our{" "}
            <Link className="text-[color:var(--rf-teal)] underline decoration-1 underline-offset-[3px] hover:text-navy" href="/research-development#dosage-forms">
              formulation development work
            </Link>
            .
          </p>
        </RfReveal>
        <RfReveal className="gap-4 grid grid-cols-3 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1024px]:grid-cols-2 max-[600px]:grid-cols-[1fr]">
          {dosageForms.map(({ tag, title, short, art, image }) => (
            <div className="px-5 py-[18px] gap-[18px] rounded-[var(--radius-md)] border border-solid border-[color:var(--c-line)] flex items-center [background:var(--c-paper)] [transition:border-color_var(--dur)_ease,box-shadow_var(--dur)_ease] [box-shadow:none] hover:border-[color:var(--c-navy-soft)] hover:[box-shadow:var(--shadow-2)] hover:[transform:none]" key={title}>
              <div className="overflow-hidden flex-none rounded-[50%] w-[72px] h-[72px]">
                <Illustration name={art} image={image} alt={title} />
              </div>
              <div>
                <span className="block mb-0.5 text-[color:var(--rf-teal)] leading-[normal] font-body uppercase !font-bold !text-[14px] !tracking-[0.1em]">{tag}</span>
                <h3 className="mx-0 mt-0 mb-0.5 font-semibold text-[17px] leading-[normal] font-heading tracking-[-0.4px] text-[color:var(--rf-ink)]">{title}</h3>
                <p className="m-0 text-[color:var(--rf-muted)] text-[14px] leading-normal">{short}</p>
              </div>
            </div>
          ))}
        </RfReveal>
      </div>
    </section>
  );
}
