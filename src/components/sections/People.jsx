import { images } from "@/data/site";
import RfHeading from "@/components/ui/RfHeading";
import RfReveal from "@/components/ui/RfReveal";

export default function People() {
  const themes = [
    [
      "Science",
      "Clinical relevance guides what we bring to healthcare professionals.",
    ],
    ["Service", "Responsive support for doctors, distributors and partners."],
    ["People", "Knowledge, accountability, and lasting relationships."],
  ];
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:var(--grid-light),var(--c-trust)] [&[id]]:scroll-mt-[70px]" id="insights">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <div className="gap-5 grid grid-cols-[1.15fr_0.75fr_0.9fr] grid-rows-[auto_255px_290px] max-[1024px]:grid-cols-[1fr_0.8fr] max-[1024px]:grid-rows-[auto_350px_auto] max-[600px]:flex max-[600px]:flex-col">
          <RfReveal className="[grid-column:2_/_4] [grid-row:1] mb-[42px] max-[1024px]:[grid-column:1_/_3] max-[600px]:mb-3.5 motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
            <RfHeading
              eyebrow="Our approach"
              title="Science is strengthened by people."
              copy="Progress depends on people who ask better questions, uphold exacting standards, and understand the healthcare communities they serve."
            />
          </RfReveal>
          <RfReveal className="overflow-hidden rounded-[var(--radius-lg)] [grid-column:1] [grid-row:2_/_4] object-cover max-[1024px]:[grid-row:2] max-[600px]:h-[430px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
            <img className="block w-full h-full object-cover"
              src={images.formulation}
              alt="Analyst sampling a raw material powder in the laboratory"
              loading="lazy"
            />
          </RfReveal>
          <RfReveal className="py-0 [grid-column:2] [grid-row:2_/_4] pr-3.5 pl-0 max-[1024px]:gap-7 max-[1024px]:[grid-column:1_/_3] max-[1024px]:[grid-row:3] max-[1024px]:pt-5 max-[1024px]:pr-0 max-[1024px]:grid max-[1024px]:grid-cols-3 max-[600px]:pr-0 max-[600px]:block motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
            {themes.map(([title, copy], index) => (
              <div className="px-0 border-b [border-bottom-style:solid] border-b-[#c3cbca] pt-5 pb-[22px] max-[1024px]:pt-0 first:pt-0 max-[1024px]:first:px-0 max-[1024px]:first:pb-[22px]" key={title}>
                <span className="block text-[color:var(--rf-teal-text)] text-[13px]">0{index + 1}</span>
                <strong className="block mt-2 font-semibold text-[24px] leading-[1.2] font-heading">{title}</strong>
                <p className="mx-0 mt-[9px] mb-0 text-[color:var(--rf-muted)] text-[14px] leading-[1.6]">{copy}</p>
              </div>
            ))}
          </RfReveal>
          <RfReveal className="overflow-hidden rounded-[var(--radius-lg)] [grid-column:3] [grid-row:2] object-cover max-[1024px]:[grid-column:2] max-[600px]:h-[230px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]">
            <img className="block w-full h-full object-cover"
              src={images.qualityTeam}
              alt="Operator running a V-blender on the manufacturing floor"
              loading="lazy"
            />
          </RfReveal>
        </div>
      </div>
    </section>
  );
}
