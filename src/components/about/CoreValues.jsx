import RfReveal from "@/components/ui/RfReveal";
import RfHeading from "@/components/ui/RfHeading";
import ValueGrid from "@/components/ui/ValueGrid";
import { values } from "@/data/about";

export default function CoreValues() {
  return (
    <section className="rf ab-values px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--c-surface)] [&[id]]:scroll-mt-[70px]" id="values">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
          <RfHeading
            eyebrow="Our core values"
            title="The principles behind every decision"
          />
        </RfReveal>
        <ValueGrid items={values} />
      </div>
    </section>
  );
}
