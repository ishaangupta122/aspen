import RfReveal from "@/components/ui/RfReveal";

// Four-column title + description grid, shared by Core values and Certifications.
export default function ValueGrid({ items }) {
  return (
    <div className="gap-x-[clamp(24px,3vw,44px)] gap-y-12 grid grid-cols-4 mt-[clamp(44px,5vw,64px)] max-[560px]:grid-cols-[1fr] [@media(560px<width<=900px)]:grid-cols-[1fr_1fr]">
      {items.map(({ title, text }) => (
        <RfReveal className="motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none]" key={title}>
          <h3 className="mt-0 mb-2.5 font-semibold text-[19px] leading-[1.3] font-body tracking-[var(--heading-tracking)] [word-spacing:0.06em] text-navy">{title}</h3>
          <p className="my-0 [text-wrap:wrap] text-[#4a5b6c] text-[15px] leading-[1.65] font-normal font-body">{text}</p>
        </RfReveal>
      ))}
    </div>
  );
}
