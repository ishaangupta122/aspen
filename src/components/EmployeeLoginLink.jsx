"use client";

import { useState } from "react";
import EmployeeLoginModal from "@/components/EmployeeLoginModal";

/** Footer link that opens the employee login dialog. */
export default function EmployeeLoginLink() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="p-0 border-0 border-none border-current [background:none] text-[color:var(--ft-dim)] [font:inherit] cursor-pointer [transition:color_0.25s_ease] hover:text-[color:var(--ft-ink)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:#fff] [&:is(a,_button):focus-visible]:outline-offset-[4px]" onClick={() => setOpen(true)}>
        Employee login
      </button>
      {open && <EmployeeLoginModal onClose={() => setOpen(false)} />}
    </>
  );
}
