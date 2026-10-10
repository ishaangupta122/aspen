"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import EmployeeLoginModal from "@/components/EmployeeLoginModal";
import { navLinks } from "@/data/navigation";

export default function Navbar({ variant = "overlay" }) {
  const pathname = usePathname();
  const isActive = (href) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

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
      className={`inset-x-0 h-[var(--nav-h)] fixed top-0 bottom-auto z-20 text-[color:var(--nav-fg)] [transition:background_var(--dur)_ease,box-shadow_var(--dur)_ease] [&.is-scrolled]:[&&&]:[background:rgba(7,25,47,0.97)] [&.is-scrolled]:[&&&]:[box-shadow:0_1px_0_rgba(255,255,255,0.08),0_12px_28px_-20px_rgba(7,25,47,0.7)] [&.is-scrolled]:[&&&]:[-webkit-backdrop-filter:none] [&.is-scrolled]:[backdrop-filter:blur(16px)] max-[1200px]:[&.menu-open]:[background:transparent] max-[1200px]:[&.menu-open]:[-webkit-backdrop-filter:none] max-[1200px]:[&.menu-open]:[box-shadow:none] [&.nav-solid]:[&&]:[background:rgba(7,25,47,0.97)] [&.nav-solid]:[&&]:[-webkit-backdrop-filter:none] [&.nav-solid]:[&&]:[box-shadow:0_1px_0_rgba(255,255,255,0.08),0_12px_28px_-20px_rgba(7,25,47,0.7)] site-header ${variant === "solid" ? " nav-solid" : ""} ${scrolled ? " is-scrolled" : ""} ${menuOpen ? " menu-open" : ""}`}>
      <div className="m-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] h-full flex items-center justify-between min-[1201px]:gap-12">
        <Logo />
        <button
          type="button"
          className="border-0 border-none border-current hidden text-[color:white] relative z-[3] [background:none] cursor-pointer max-[1200px]:inline-flex max-[1200px]:-mr-2.5 max-[1200px]:text-[color:var(--nav-fg)] max-[1200px]:w-11 max-[1200px]:h-11 max-[1200px]:items-center max-[1200px]:justify-center max-[900px]:[place-items:center] max-[900px]:w-11 max-[900px]:h-11 [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:var(--nav-focus)] [&:is(a,_button):focus-visible]:outline-offset-[5px]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav
          id="primary-navigation"
          aria-label="Primary"
          className={`gap-[var(--nav-gap)] flex items-center font-body text-[17px] font-semibold tracking-[0.012em] leading-none max-[1200px]:px-[var(--page-gutter,24px)] max-[1200px]:inset-0 max-[1200px]:gap-0 max-[1200px]:rounded-none max-[1200px]:items-stretch max-[1200px]:flex-col max-[1200px]:text-[22px] max-[1200px]:tracking-[0.005em] max-[1200px]:fixed max-[1200px]:z-[2] max-[1200px]:w-full max-[1200px]:h-[100dvh] max-[1200px]:pt-[calc(var(--nav-h)_+_24px)] max-[1200px]:pb-[calc(32px_+_env(safe-area-inset-bottom,0px))] max-[1200px]:overflow-y-auto max-[1200px]:[box-shadow:none] max-[1200px]:[background:linear-gradient(180deg,#07192f_0%,#0b2342_100%)] max-[1200px]:opacity-0 max-[1200px]:invisible max-[1200px]:[transition:opacity_var(--dur)_ease,visibility_var(--dur)_ease] max-[1200px]:leading-[1.2] max-[1200px]:content-start min-[1201px]:ml-auto min-[1201px]:self-stretch max-[1200px]:[&.open]:flex max-[1200px]:[&.open]:opacity-100 max-[1200px]:[&.open]:visible nav-links${menuOpen ? " open" : ""}`}>
          {navLinks.map((l) => (
            <Link
              href={l.href}
              key={l.label}
              onClick={close}
              aria-current={isActive(l.href) ? "page" : undefined}
              className={`text-[color:var(--nav-fg-dim)] [transition:color_0.3s_ease] relative opacity-100 max-[1200px]:py-[18px] max-[1200px]:border-b max-[1200px]:[border-bottom-style:solid] max-[1200px]:border-b-white/10 max-[1200px]:text-white/[0.82] max-[1200px]:[transition:color_0.25s_ease] max-[1200px]:pr-0 max-[1200px]:pl-4 max-[1200px]:flex max-[1200px]:items-center max-[1200px]:w-full max-[1200px]:max-w-[640px] max-[1200px]:[box-shadow:none] min-[1201px]:px-0 min-[1201px]:py-2.5 min-[1201px]:inline-flex min-[1201px]:items-center hover:opacity-100 hover:[&&]:text-[color:var(--nav-fg)] max-[1200px]:hover:[&&&&]:text-white max-[1200px]:hover:[&&]:pl-4 max-[1200px]:hover:[&&]:[box-shadow:none] after:inset-x-0 after:[content:''] after:absolute after:-bottom-1.5 after:h-px after:[background:var(--c-aqua)] after:[transform:scaleX(0)] after:[transform-origin:left] after:[transition:transform_var(--dur)] max-[1200px]:after:hidden min-[1201px]:after:rounded-full min-[1201px]:after:bottom-0 min-[1201px]:after:h-0.5 min-[1201px]:after:[background:var(--nav-mark)] min-[1201px]:after:[transition:transform_0.35s_ease] hover:after:[transform:scaleX(1)] min-[1201px]:hover:after:opacity-[0.6] [&.is-active]:[&&]:opacity-100 [&.is-active]:text-[color:var(--nav-fg)] max-[1200px]:[&.is-active]:[&&&]:text-white max-[1200px]:[&.is-active]:[box-shadow:none] max-[1200px]:[&.is-active]:pl-4 [&.is-active::after]:[&&]:[transform:scaleX(1)] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:var(--nav-focus)] [&:is(a,_button):focus-visible]:outline-offset-[5px] min-[1201px]:[&.is-active:hover::after]:opacity-100 max-[1200px]:before:rounded-[3px] max-[1200px]:before:[content:''] max-[1200px]:before:absolute max-[1200px]:before:left-0 max-[1200px]:before:top-1/2 max-[1200px]:before:w-[3px] max-[1200px]:before:h-[22px] max-[1200px]:before:mt-[-11px] max-[1200px]:before:[background:var(--red-on-dark)] max-[1200px]:before:[transform:scaleY(0)] max-[1200px]:before:[transition:transform_0.3s_ease] max-[1200px]:[&.is-active::before]:[transform:scaleY(1)] max-[1200px]:[.nav-links.open>&]:[animation:nav-sheet-in_0.5s_cubic-bezier(0.2,0.7,0.2,1)_both] max-[1200px]:motion-reduce:[.nav-links.open>&]:[animation:none] max-[1200px]:[.nav-links.open>&:nth-child(2)]:[animation-delay:0.04s] max-[1200px]:[.nav-links.open>&:nth-child(3)]:[&&]:[animation-delay:0.08s] max-[1200px]:[.nav-links.open>&:nth-child(4)]:[&&&]:[animation-delay:0.12s] max-[1200px]:[.nav-links.open>&:nth-child(5)]:[&&&&]:[animation-delay:0.16s] max-[1200px]:[.nav-links.open>&:nth-child(6)]:[&&&&&]:[animation-delay:0.2s] max-[1200px]:[.nav-links.open>&:nth-child(7)]:[&&&&&&]:[animation-delay:0.24s]${isActive(l.href) ? " is-active" : ""}`}>
              {l.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => { close(); setLoginOpen(true); }}
            className="gap-2 text-[color:var(--nav-fg-dim)] [transition:color_0.3s_ease] relative opacity-100 inline-flex items-center max-[1200px]:py-[18px] max-[1200px]:gap-3 max-[1200px]:border-b max-[1200px]:[border-bottom-style:solid] max-[1200px]:border-b-white/10 max-[1200px]:text-white/[0.82] max-[1200px]:[transition:color_0.25s_ease] max-[1200px]:pr-0 max-[1200px]:pl-4 max-[1200px]:w-full max-[1200px]:max-w-[640px] max-[1200px]:[box-shadow:none] max-[1200px]:text-[22px] max-[1200px]:font-semibold min-[1201px]:[&&&]:text-[color:var(--nav-fg)] min-[1201px]:border-0 min-[1201px]:border-none min-[1201px]:border-current min-[1201px]:ml-1.5 min-[1201px]:px-0 min-[1201px]:py-2.5 min-[1201px]:text-[17px] min-[1201px]:font-semibold min-[1201px]:tracking-[0.012em] min-[1201px]:[&&&]:text-[color:var(--nav-fg-dim)] min-[1201px]:hover:[&&&]:text-[color:var(--nav-fg)] min-[1201px]:[&&&]:[background:none] text-left cursor-pointer bg-transparent min-[1201px]:self-center min-[1201px]:mb-0 hover:opacity-100 hover:text-[color:var(--nav-fg)] max-[1200px]:hover:text-white max-[1200px]:hover:pl-4 max-[1200px]:hover:[box-shadow:none] after:inset-x-0 after:[content:''] after:absolute after:-bottom-1.5 after:h-px after:[background:var(--c-aqua)] after:[transform:scaleX(0)] after:[transform-origin:left] after:[transition:transform_var(--dur)] max-[1200px]:after:hidden min-[1201px]:after:rounded-full min-[1201px]:after:bottom-0 min-[1201px]:after:h-0.5 min-[1201px]:after:[background:var(--nav-mark)] min-[1201px]:after:[transition:transform_0.35s_ease] min-[1201px]:after:hidden hover:after:[transform:scaleX(1)] min-[1201px]:hover:after:opacity-[0.6] [&:is(a,_button):focus-visible]:rounded-[3px] [&:is(a,_button):focus-visible]:outline-[length:2px] [&:is(a,_button):focus-visible]:outline [&:is(a,_button):focus-visible]:outline-[color:var(--nav-focus)] [&:is(a,_button):focus-visible]:outline-offset-[5px] min-[1201px]:before:inset-y-[11px] min-[1201px]:before:[content:''] min-[1201px]:before:absolute min-[1201px]:before:left-[calc(-1_*_(var(--nav-gap)_/_2_+_6px))] min-[1201px]:before:w-px min-[1201px]:before:[background:currentColor] min-[1201px]:before:opacity-[0.28] max-[1200px]:before:rounded-[3px] max-[1200px]:before:[content:''] max-[1200px]:before:absolute max-[1200px]:before:left-0 max-[1200px]:before:top-1/2 max-[1200px]:before:w-[3px] max-[1200px]:before:h-[22px] max-[1200px]:before:mt-[-11px] max-[1200px]:before:[background:var(--red-on-dark)] max-[1200px]:before:[transform:scaleY(0)] max-[1200px]:before:[transition:transform_0.3s_ease] max-[1200px]:before:hidden max-[1200px]:[.nav-links.open>&]:[animation:nav-sheet-in_0.5s_cubic-bezier(0.2,0.7,0.2,1)_both] max-[1200px]:motion-reduce:[.nav-links.open>&]:[animation:none] max-[1200px]:[.nav-links.open>&:nth-child(8)]:[animation-delay:0.28s]">
            Employee login
          </button>
        </nav>
      </div>
      {loginOpen && <EmployeeLoginModal onClose={() => setLoginOpen(false)} />}
    </header>
  );
}
