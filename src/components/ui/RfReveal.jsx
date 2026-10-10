export default function RfReveal({
  children,
  className = "",
  as: Tag = "div",
}) {
  return <Tag className={`rf-reveal ${className}`}>{children}</Tag>;
}
