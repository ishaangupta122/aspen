import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ButtonLink({ children, to = "#", variant = "primary" }) {
  return (
    <Link className={`button button-${variant}`} href={to}>
      {children}
      <ArrowRight size={17} />
    </Link>
  );
}
