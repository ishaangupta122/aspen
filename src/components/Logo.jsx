import Link from "next/link";

export default function Logo({ variant = "dark" }) {
  return (
    <Link href="/" className="brand" aria-label="Aspen Pharmaceuticals home">
      <img src={`/logo-mark-${variant}.svg`} alt="" />
      <span className="brand-name">
        Aspen <strong>Pharmaceuticals</strong>
      </span>
    </Link>
  );
}
