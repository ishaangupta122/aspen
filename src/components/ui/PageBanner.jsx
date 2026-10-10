import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function PageBanner({ title, crumbs = [], path }) {
  return (
    <section className="pb-banner px-0 overflow-hidden border-b-0 [border-bottom-style:none] border-b-current relative flex items-end min-h-[clamp(400px,52vh,500px)] pt-[150px] pb-[72px] text-white bg-navy bg-[linear-gradient(var(--c-navy),var(--c-navy))] bg-no-repeat bg-[position:right_center] bg-[length:100%_100%] max-[700px]:min-h-[330px] max-[700px]:pt-[120px] max-[700px]:pb-12 max-[700px]:bg-[position:0_0,0_0,0_0] after:hidden after:[content:''] after:absolute after:left-1/2 after:bottom-0 after:w-[min(var(--page-max,1240px),calc(100%_-_2_*_var(--page-gutter,32px)))] after:h-0.5 after:[transform:translateX(-50%)] after:[background:linear-gradient(_90deg,var(--c-aqua-strong)_0,var(--c-aqua-strong)_72px,rgba(255,255,255,0.14)_72px_)] before:inset-0 before:[content:''] before:absolute before:[background:linear-gradient(90deg,transparent_55%,rgba(7,25,47,0.35))] before:pointer-events-none">
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] relative z-[1] [&>h1]:[animation:rf-rise_1s_cubic-bezier(0.22,0.61,0.36,1)_both] [&>nav]:[animation:rf-rise_1s_cubic-bezier(0.22,0.61,0.36,1)_0.15s_both]">
        <h1 className="m-0 font-semibold text-[length:clamp(38px,4.4vw,58px)] leading-[1.12] font-heading tracking-[-0.018em] [word-spacing:0.06em] max-w-[24ch] max-[700px]:text-[length:clamp(32px,9vw,40px)]">{title}</h1>
        <Breadcrumbs crumbs={crumbs} path={path} />
      </div>
    </section>
  );
}
