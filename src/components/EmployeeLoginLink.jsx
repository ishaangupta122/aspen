"use client";

import { useState } from "react";
import EmployeeLoginModal from "@/components/EmployeeLoginModal";

/** Footer link that opens the employee login dialog. */
export default function EmployeeLoginLink() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" className="ft-login" onClick={() => setOpen(true)}>
        Employee login
      </button>
      {open && <EmployeeLoginModal onClose={() => setOpen(false)} />}
    </>
  );
}
