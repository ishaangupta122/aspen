"use client";

import { ArrowRight } from "lucide-react";

/** Jumps to the enquiry form and pre-selects the "Careers" enquiry type. */
export default function ApplyLink({ children }) {
  return (
    <a
      className="ta-all"
      href="#enquiry"
      onClick={() =>
        window.dispatchEvent(
          new CustomEvent("aspen-enquiry-type", { detail: "Careers" }),
        )
      }
    >
      {children} <ArrowRight size={18} style={{ transform: "rotate(90deg)" }} />
    </a>
  );
}
