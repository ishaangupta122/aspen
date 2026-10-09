import RfReveal from "@/components/ui/RfReveal";
import { images } from "@/data/site";
import { commitments } from "@/data/about";

export default function Commitments() {
  return (
    <section className="rf px-0 py-[var(--section-y)] text-[color:var(--rf-ink)] [background:#fff] [&[id]]:scroll-mt-[70px]" id="commitments">
      <div className="mx-auto gap-7 w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] grid grid-cols-[1fr_1fr] [align-items:start] max-[900px]:grid-cols-[1fr]">
        {commitments.map((item, index) => (
          <RfReveal className="ab-commit-card p-0 rounded-none border-0 border-none border-current h-full [background:transparent] [box-shadow:none] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={item.key}>
            {item.image && (
              <div className="ab-commit-image mx-0 overflow-hidden rounded-[6px] h-[250px] mb-6 mt-0">
                <img className="block w-full h-60 object-cover max-[560px]:h-[200px] [.ab-commit-card:nth-child(2)_.ab-commit-image_&]:[filter:saturate(.25)_contrast(.95)]" src={images[item.image]} alt={item.alt} loading="lazy" />
              </div>
            )}
            <span className="[&:not(.ab-commit-image)]:!mx-0 [&:not(.ab-commit-image)]:!px-0 mx-0 block mb-2 text-red mt-0 leading-none font-body !text-[14px] !tracking-[0.12em] !font-bold">0{index + 1}</span>
            <h3 className="[&:not(.ab-commit-image)]:!mx-0 [&:not(.ab-commit-image)]:!px-0 mx-0 mt-0 mb-3.5 font-semibold text-[22px] leading-[1.3] font-body tracking-[-0.005em] [word-spacing:0.06em] text-navy">{item.title}</h3>
            {item.lead && <p className="[&:not(.ab-commit-image)]:!mx-0 [&:not(.ab-commit-image)]:!px-0 mx-0 mb-3.5 text-[16px] leading-[1.7] mt-0 font-body !text-navy !font-medium">{item.lead}</p>}
            {item.chips && (
              <ul className="[&:not(.ab-commit-image)]:!mx-0 [&:not(.ab-commit-image)]:!px-0 mx-[18px] p-0 gap-2 flex flex-wrap mt-0 mb-[22px] [list-style:none]">
                {item.chips.map((chip) => (
                  <li className="px-3.5 py-2 rounded-[4px] border border-solid border-[color:var(--c-line)] [background:var(--c-surface)] text-navy text-[13px] font-medium leading-[1.2] font-body" key={chip}>{chip}</li>
                ))}
              </ul>
            )}
            {item.paragraphs.map((text) => (
              <p className="[&:not(.ab-commit-image)]:!mx-0 [&:not(.ab-commit-image)]:!px-0 mx-0 mb-3.5 text-[#4a5b6c] text-[16px] leading-[1.7] mt-0 font-normal font-body" key={text}>{text}</p>
            ))}
          </RfReveal>
        ))}
      </div>
    </section>
  );
}
