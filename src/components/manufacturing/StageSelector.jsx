const pad = (n) => String(n).padStart(2, "0");

export default function StageSelector({ items }) {
  return (
    <ol className="mx-0 p-0 [list-style:none] mt-14 mb-0 grid grid-cols-[repeat(5,minmax(0,1fr))] gap-x-[clamp(20px,2.4vw,36px)] max-[1100px]:mt-10 max-[1100px]:grid-cols-[1fr] max-[1100px]:gap-y-0 min-[1101px]:grid-rows-[auto_auto_1fr_auto] min-[1101px]:gap-y-0">
      {items.map(({ title, text, tags }, i) => (
        <li className="relative pt-0 max-[1100px]:pr-0 max-[1100px]:pb-9 max-[1100px]:pl-[60px] min-[1101px]:grid min-[1101px]:grid-rows-[subgrid] min-[1101px]:[grid-row:span_4] min-[1101px]:gap-y-0 before:[content:''] before:absolute before:top-[18px] before:left-11 before:right-[calc(clamp(20px,2.4vw,36px)_*_-1_+_8px)] before:h-px before:[background:var(--c-navy)] before:opacity-[.35] max-[1100px]:before:top-9 max-[1100px]:before:left-[17.5px] max-[1100px]:before:right-auto max-[1100px]:before:h-auto max-[1100px]:before:bottom-0 max-[1100px]:before:w-px last:before:right-0 last:before:[background:linear-gradient(90deg,var(--c-navy),transparent)] last:before:opacity-[.35] max-[1100px]:last:before:hidden max-[1100px]:last:pb-0" key={title}>
          <span className="rounded-[50%] relative z-[1] grid [place-items:center] w-9 h-9 [background:var(--c-navy)] text-white font-semibold text-[12.5px] leading-none font-body tracking-[.04em] max-[1100px]:absolute max-[1100px]:left-0 max-[1100px]:top-0" aria-hidden="true">{pad(i + 1)}</span>
          <h3 className="mx-0 mt-[22px] mb-2.5 font-semibold text-[17px] leading-[1.35] font-body tracking-[0] text-navy max-w-[18ch] max-[1100px]:mt-1.5 max-[1100px]:mb-2 max-[1100px]:max-w-none min-[1101px]:max-w-none min-[1101px]:text-balance">{title}</h3>
          <p className="m-0 font-normal text-[14.5px] leading-[1.65] font-body text-[#4a5b6c] max-[1100px]:max-w-[56ch] min-[1101px]:text-pretty min-[1101px]:pb-5">{text}</p>
          <div className="border-t [border-top-style:solid] border-t-[color:var(--c-line)] mt-[18px] pt-3.5 min-[1101px]:mt-0">
            <span className="block mb-2 font-semibold text-[11px] leading-none font-body tracking-[.14em] uppercase text-red first:text-[12.5px] first:font-bold">Tests</span>
            <ul className="m-0 p-0 [list-style:none] max-[1100px]:flex max-[1100px]:flex-wrap max-[1100px]:gap-x-4">
              {tags.map((t) => (
                <li className="font-medium text-[13.5px] leading-[1.9] font-body text-navy" key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
