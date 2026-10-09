import ButtonLink from "@/components/ui/ButtonLink";

export default function FinalCta({
  eyebrow = "Start a conversation",
  title = "Let’s build better healthcare together.",
  text = "Whether you are a healthcare professional, partner or distributor, we would be glad to hear from you.",
}) {
  return (
    <section className="final-cta px-0 py-[clamp(56px,7vw,80px)] overflow-hidden text-[color:white] [background:var(--grid-dark),var(--c-navy)] relative bg-[linear-gradient(var(--c-navy),var(--c-navy))] bg-[length:100%_100%] bg-no-repeat before:rounded-[50%] before:[content:''] before:absolute before:w-[840px] before:h-[840px] before:right-[-200px] before:top-[-440px] before:[background:radial-gradient(_circle_at_50%_50%,transparent_0_309px,rgba(99,169,162,0.28)_309px_310px,rgba(99,169,162,0.08)_310px_365px,rgba(99,169,162,0.04)_365px_420px,transparent_420px_)] before:hidden min-[1300px]:before:right-[calc(var(--side)_-_150px)] [&[id]]:scroll-mt-[70px]" id="contact">
      <div className="inset-0 absolute opacity-[0.2] [background:linear-gradient(_90deg,transparent_0_72%,var(--c-aqua-strong)_72.1%,transparent_72.2%_),linear-gradient(_0deg,transparent_0_60%,var(--c-aqua-strong)_60.1%,transparent_60.2%_)] hidden min-[1300px]:inset-x-[var(--side)] min-[1300px]:[mask-image:linear-gradient(_90deg,transparent,#000_8%,#000_92%,transparent_)]" />
      <div className="rf-reveal container mx-auto my-0 gap-[50px] w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))] relative flex [align-items:end] justify-between max-[600px]:gap-[22px] max-[600px]:[align-items:start] max-[600px]:flex-col">
        <div>
          <p className="eyebrow-light mx-0 text-[color:var(--c-aqua)] uppercase mt-0 mb-[17px] font-body !text-[14px] !tracking-[0.12em] !font-bold">{eyebrow}</p>
          <h2 className="text-[color:white] text-[length:clamp(30px,3.2vw,40px)] max-w-[610px] mb-[17px] font-semibold tracking-[-0.012em] [word-spacing:0.06em] leading-[1.2] font-body">{title}</h2>
          <p className="last:text-[#b4c4d4] last:max-w-[460px] last:leading-[1.6] last:text-[14px] [&&&]:text-[16.5px] [&&&]:leading-[1.7] font-normal font-body">{text}</p>
        </div>
        <div className="gap-[11px] flex shrink-0 max-[600px]:flex-wrap">
          <ButtonLink to="/contact">Contact us</ButtonLink>
          <ButtonLink to="/products" variant="light">
            Explore products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
