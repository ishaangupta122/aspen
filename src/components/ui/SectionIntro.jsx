export default function SectionIntro({ eyebrow, title, copy, align = "left" }) {
  return (
    <div className={`section-intro align-${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
