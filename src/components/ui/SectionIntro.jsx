export default function SectionIntro({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-intro align-${align}`}>
      <p className="mx-0 text-[#196d66] uppercase mt-0 mb-[17px] font-body !text-[14px] !tracking-[0.12em] !font-bold [&:not(.eyebrow-light)]:text-[color:var(--c-teal-text)]">{eyebrow}</p>
      <h2 className="text-[length:clamp(30px,3.2vw,40px)] max-w-[650px] mb-[19px] text-navy font-semibold leading-[1.2] font-body tracking-[-0.012em]">{title}</h2>
      {copy && <p className="section-copy text-[#4a5b6c] max-w-[550px] leading-[1.7] text-[16.5px] font-normal font-body">{copy}</p>}
    </div>
  );
}
