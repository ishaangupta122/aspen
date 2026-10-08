import ButtonLink from "@/components/ui/ButtonLink";

export default function FinalCta({
  eyebrow = "Start a conversation",
  title = "Let’s build better healthcare together.",
  text = "Whether you are a healthcare professional, partner or distributor, we would be glad to hear from you.",
}) {
  return (
    <section className="final-cta" id="contact">
      <div className="cta-lines" />
      <div className="container cta-inner">
        <div>
          <p className="eyebrow eyebrow-light">{eyebrow}</p>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          <ButtonLink to="/contact">Contact us</ButtonLink>
          <ButtonLink to="/products" variant="light">
            Explore products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
