import Link from "next/link";

/** Solid (`primary`) or outline (`light`) call-to-action link. No decorative arrow: the label is the CTA. */
export default function ButtonLink({
  children,
  to = "#",
  variant = "primary",
}) {
  return (
    <Link className={`button button-${variant}`} href={to}>
      {children}
    </Link>
  );
}
