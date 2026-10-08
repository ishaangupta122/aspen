"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import EmployeeLoginModal from "@/components/EmployeeLoginModal";
import { navLinks } from "@/data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [open, setOpen] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) =>
      e.key === "Escape" && (setMenuOpen(false), setOpen(null));
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const close = () => {
    setMenuOpen(false);
    setOpen(null);
  };

  return (
    <header
      className={`site-header ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-shell">
        <Logo />
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map((l) =>
            l.children ? (
              <div
                className="nav-dropdown"
                key={l.label}
                onMouseEnter={() => setOpen(l.label)}
                onMouseLeave={() => setOpen(null)}>
                <Link
                  href={l.href}
                  onClick={close}
                  className={isActive(l.href) ? "is-active" : undefined}>
                  {l.label}
                </Link>
                <button
                  className="nav-chev"
                  onClick={() => setOpen(open === l.label ? null : l.label)}
                  aria-label={`${l.label} menu`}
                  aria-expanded={open === l.label}>
                  <ChevronDown size={14} />
                </button>
                {open === l.label && (
                  <div className="dropdown-menu">
                    {l.children.map((c) => (
                      <Link href={c.href} key={c.href} onClick={close}>
                        {c.label} <ChevronRight size={14} />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                href={l.href}
                key={l.label}
                onClick={close}
                className={isActive(l.href) ? "is-active" : undefined}>
                {l.label}
              </Link>
            ),
          )}
          <button
            className="nav-contact"
            onClick={() => {
              close();
              setLoginOpen(true);
            }}>
            Employee login <ArrowRight size={15} />
          </button>
        </nav>
      </div>
      {loginOpen && <EmployeeLoginModal onClose={() => setLoginOpen(false)} />}
    </header>
  );
}
