export default function RfHeading({ eyebrow, title, copy }) {
  return (
    <div className="rf-heading">
      <span className="rf-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
