import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { commitments } from "@/data/about";

export default function Commitments() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="commitments">
      <div className="mx-auto gap-7 w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1fr_1fr] [align-items:start] max-[900px]:grid-cols-[1fr]">
        {commitments.map((item) => (
          <RfReveal className="ab-commit-card p-0 rounded-none border-0 border-none border-current h-full [background:transparent] [box-shadow:none] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={item.key}>
            {item.image && (
              <div className="ab-commit-image mx-0 overflow-hidden rounded-[6px] h-[250px] mb-6 mt-0">
                <img className="block w-full h-60 object-cover max-[560px]:h-[200px] [.ab-commit-card:nth-child(2)_.ab-commit-image_&]:[filter:saturate(.25)_contrast(.95)]" style={{ objectPosition: item.pos || "50% 50%" }} src={images[item.image]} alt={item.alt} loading="lazy" />
              </div>
            )}
            <h3 className="[&:not(.ab-commit-image)]:!mx-0 [&:not(.ab-commit-image)]:!px-0 mx-0 mt-0 mb-3.5 font-semibold text-[22px] leading-[1.3] font-body tracking-[-0.005em] [word-spacing:0.06em] text-navy">{item.title}</h3>
            {item.paragraphs.map((text) => (
              <p className="[&:not(.ab-commit-image)]:!mx-0 [&:not(.ab-commit-image)]:!px-0 mx-0 mb-3.5 text-[#4a5b6c] text-[16px] leading-[1.7] mt-0 font-normal font-body" key={text}>{text}</p>
            ))}
          </RfReveal>
        ))}
      </div>
    </section>
  );
}
