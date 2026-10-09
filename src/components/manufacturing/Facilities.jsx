import RfReveal from "@/components/ui/RfReveal";
import { facilities } from "@/data/manufacturing";

export default function Facilities() {
  return (
    <section className="rf fx px-0 py-[var(--section-y)] overflow-hidden text-white relative [background:var(--c-navy)] [&[id]]:scroll-mt-[70px]" id="facilities">
      <div className="rounded-[50%] absolute top-[-220px] -right-40 w-[620px] h-[620px] [background:radial-gradient(_circle,rgba(126,179,174,0.16),transparent_65%_)] pointer-events-none hidden" aria-hidden="true" />
      <div className="mx-auto w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] relative">
        <RfReveal className="gap-12 flex items-end justify-between mb-[52px] motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] max-[1024px]:gap-[18px] max-[1024px]:items-start max-[1024px]:flex-col">
          <div>
            <span className="block mb-[22px] text-red-on-dark uppercase leading-[1.4] font-body !text-[14px] !font-bold !tracking-[0.12em]">{facilities.eyebrow}</span>
            <h2 className="mx-0 mt-3 mb-0 max-w-[640px] text-white font-semibold text-[length:clamp(30px,3.2vw,40px)] leading-[1.2] font-body tracking-[-0.012em] [word-spacing:0.06em]">{facilities.title}</h2>
          </div>
          <p className="m-0 max-w-[380px] text-white/80 text-[16.5px] leading-[1.7] font-normal font-body">{facilities.copy}</p>
        </RfReveal>
        <div className="grid grid-cols-[1fr_1fr] grid-rows-[none] gap-y-10 gap-x-7 [grid-auto-rows:auto] max-[900px]:grid-cols-[1fr] max-[600px]:gap-y-8 max-[600px]:gap-x-0">
          {facilities.items.map((item, i) => (
            <RfReveal className={`relative [&&&&]:overflow-visible [&&&&]:rounded-none [&&&&]:border-0 [&&&&]:border-none [&&&&]:border-current [&&&&]:[background:none] [&&&&]:[grid-row:auto] [&&&&]:[grid-column:auto] [&&&&]:flex [&&&&]:flex-col motion-reduce:opacity-100 motion-reduce:[transform:none] motion-reduce:[transition:none] [&.fx-item-1]:[&&]:overflow-visible [&.fx-item-1]:[&&]:rounded-none [&.fx-item-1]:[&&]:border-0 [&.fx-item-1]:[&&]:border-none [&.fx-item-1]:[&&]:border-current [&.fx-item-1]:[&&]:[grid-row:auto] [&.fx-item-1]:[&&]:[grid-column:auto] [&.fx-item-1]:[&&]:flex [&.fx-item-1]:[&&]:flex-col [&.fx-item-1]:[&&]:[background:none] [&.fx-item-4]:overflow-visible [&.fx-item-4]:rounded-none [&.fx-item-4]:border-0 [&.fx-item-4]:border-none [&.fx-item-4]:border-current [&.fx-item-4]:[grid-column:auto] [&.fx-item-4]:[grid-row:auto] [&.fx-item-4]:flex [&.fx-item-4]:flex-col [&.fx-item-4]:[background:none] after:inset-0 after:[content:''] after:absolute after:[background:linear-gradient(_0deg,rgba(7,25,47,0.88)_0%,rgba(7,25,47,0.1)_60%_)] after:opacity-[0.85] after:hidden fx-item fx-item-${i + 1}`} key={item.caption}>
              <div className="relative overflow-hidden rounded-[6px] after:absolute after:inset-0 after:pointer-events-none after:rounded-[6px] after:[background:linear-gradient(180deg,rgba(11,35,66,0.08)_0%,rgba(11,35,66,0.26)_100%)] after:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                <img className="inset-0 rounded-[6px] block w-full static h-auto object-cover [transition:transform_var(--dur-reveal)] aspect-[16/9] [filter:saturate(0.88)_contrast(0.96)_brightness(0.97)] [.fx-item:hover_&]:[transform:none]" src={item.image} alt={item.caption} loading="lazy" />
              </div>
              <div className="inset-x-[22px] border-t [border-top-style:solid] border-t-white/[0.14] static z-[1] bottom-5 grid items-baseline gap-y-3.5 gap-x-2.5 mt-3.5 pt-3.5 grid-cols-[28px_minmax(0,1fr)]">
                <span className="text-red-on-dark leading-none font-body !font-bold !text-[14px] !tracking-[0.12em]">0{i + 1}</span>
                <p className="m-0 text-white/[0.88] text-[15px] leading-[1.45] font-medium font-body [overflow-wrap:break-word] max-[600px]:text-[14.5px]">{item.caption}</p>
              </div>
            </RfReveal>
          ))}
        </div>
        <p className="mx-0 mt-[22px] mb-0 text-white/[0.62] text-[13.5px] font-normal leading-normal font-body">{facilities.note}</p>
      </div>
    </section>
  );
}
