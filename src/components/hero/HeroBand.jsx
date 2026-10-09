import { therapeuticAreas } from "@/data/site";
import { SERVED_STATES } from "@/lib/site";

// Three plain facts, drawn from the same data as the rest of the site so they always agree.
const items = [
  {
    title: "250+ products",
    text: `Across ${therapeuticAreas.length} therapeutic areas`,
  },
  {
    title: `${SERVED_STATES.length} states served`,
    text: "Across North India",
  },
  {
    title: "Since 2010",
    text: "Serving healthcare professionals",
  },
];

/** Frosted highlights band set into the bottom of the hero. */
export default function HeroBand() {
  return (
    <section className="relative z-[3] mt-[calc(var(--hl-overlap)_*_-1)] pb-[var(--hl-gap)] overflow-x-clip" aria-label="Aspen at a glance">
      <ul className="hl-band m-0 py-0 gap-0 [list-style:none] flex items-center relative w-fit max-w-[calc(100%_-_24px)] h-[var(--hl-h)] pr-[clamp(56px,6vw,88px)] pl-[max(var(--page-gutter,32px),calc(50vw_-_var(--page-max,1240px)_/_2))] text-[#f3f0ea] max-[900px]:pr-9 max-[700px]:w-[calc(100%_-_22px)] max-[700px]:pr-4 max-[700px]:pl-[var(--page-gutter,16px)] before:inset-y-0 before:rounded-tl-none before:rounded-tr-[18px] before:rounded-br-[18px] before:rounded-bl-none before:border-r-[3px] before:[border-right-style:solid] before:border-r-[color:var(--red-on-dark,#cc4a51)] before:[content:''] before:absolute before:right-0 before:-left-60 before:z-0 before:[background:linear-gradient(100deg,#07192f_0%,#0b2342_100%)] before:[transform:skewX(-17deg)] before:[box-shadow:0_18px_40px_-16px_rgba(7,25,47,0.55),0_2px_6px_rgba(7,25,47,0.18)]">
        {items.map(({ title, text }) => (
          <li className="px-[clamp(28px,4vw,56px)] py-0 relative max-[900px]:px-[clamp(16px,3vw,28px)] max-[700px]:px-3.5 max-[700px]:flex-1 first:pl-0 [.hl-band_li+&::before]:border-l [.hl-band_li+&::before]:[border-left-style:solid] [.hl-band_li+&::before]:border-l-white/20 [.hl-band_li+&::before]:[content:''] [.hl-band_li+&::before]:absolute [.hl-band_li+&::before]:left-0 [.hl-band_li+&::before]:top-1/2 [.hl-band_li+&::before]:h-10 [.hl-band_li+&::before]:-mt-5 max-[700px]:[.hl-band_li+&::before]:h-7 max-[700px]:[.hl-band_li+&::before]:-mt-3.5" key={title}>
            <p className="m-0 gap-1.5 grid">
              <strong className="font-medium text-[18px] leading-[1.1] font-body tracking-[0.005em] max-[900px]:text-[16px] max-[700px]:text-[13.5px] max-[700px]:leading-[1.2]">{title}</strong>
              <span className="!text-[12.5px] font-normal leading-[1.2] font-body tracking-[0.1em] uppercase text-[rgba(243,240,234,0.72)] max-[900px]:!text-[12px] max-[900px]:tracking-[0.06em] max-[700px]:hidden">{text}</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
