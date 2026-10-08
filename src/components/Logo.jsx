import Link from "next/link";

export default function Logo({ variant = "dark" }) {
  return (
    <Link href="/" className="brand" aria-label="Aspen Pharmaceuticals home">
      <img src="/logo.png" alt="" width="189" height="167" />
      <span className="brand-name">
        Aspen <strong>Pharmaceuticals</strong>
      </span>
    </Link>
  );
}
