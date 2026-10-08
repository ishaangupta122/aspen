// `as` lets the reveal wrapper be the semantic element itself (e.g. an <li> inside a list).
export default function RfReveal({
  children,
  className = "",
  as: Tag = "div",
}) {
  return <Tag className={`rf-reveal ${className}`}>{children}</Tag>;
}
