"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, X } from "lucide-react";
import Logo from "@/components/Logo";
import { navLinks } from "@/data/navigation";

export default function Navbar({ variant = "overlay" }) {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const onKey = (e) =>
      e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const close = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`site-header ${variant === "solid" ? "nav-solid" : ""} ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="nav-shell">
        <Logo />
        <button
          type="button"
          className="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={menuOpen ? "nav-links open" : "nav-links"}>
          {navLinks.map((l) => (
            <Link
              href={l.href}
              key={l.label}
              onClick={close}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={isActive(l.href) ? "is-active" : undefined}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/products?search=1#catalogue"
            onClick={close}
            className="nav-search">
            <Search size={20} aria-hidden="true" />
            <span className="nav-search-label">Search products</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
