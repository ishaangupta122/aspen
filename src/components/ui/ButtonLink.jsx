import Link from "@/components/ui/SiteLink";

export default function ButtonLink({
  children,
  to = "#",
  variant = "primary",
}) {
  return (
    <Link className={`px-[var(--btn-pad-x)] py-0 gap-2.5 rounded-[var(--btn-radius)] border border-solid border-white inline-flex items-center min-h-[var(--btn-height)] [font:var(--btn-font)] [transition:background_var(--dur-fast)_ease,border-color_var(--dur-fast)_ease,color_var(--dur-fast)_ease,box-shadow_var(--dur-fast)_ease] text-navy font-semibold tracking-[0.005em] [&&&]:[background:var(--c-white)] hover:[transform:none] hover:[box-shadow:none] hover:[&&&]:[background:var(--c-surface-tint)] hover:[&&]:border-[color:var(--c-surface-tint)] [&.button-light]:border [&.button-light]:border-solid [&.button-light]:border-white/55 [&.button-light]:text-white [&.button-light]:[background:transparent] [&.button-light:hover]:[&&&]:[background:rgba(255,255,255,0.12)] [&.button-light:hover]:text-white [&.button-light:hover]:[&&]:border-white focus-visible:rounded-[max(var(--ring-r,0px),3px)] button button-${variant}`} href={to}>
      {children}
    </Link>
  );
}
