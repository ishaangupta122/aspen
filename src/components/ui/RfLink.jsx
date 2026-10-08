import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RfLink({ to, children }) {
  return (
    <Link className="rf-link" href={to}>
      <span>{children}</span>
      <ArrowRight size={17} />
    </Link>
  );
}
