import RfReveal from "@/components/ui/RfReveal";
import Illustration from "@/components/products/Illustration";
import { dosageForms } from "@/data/catalogue";

export default function ProductsOverview() {
  return (
    <section className="rf pr-overview" id="portfolio">
      <div className="rf-container">
        <RfReveal className="pr-ov-head">
          <span className="rf-eyebrow">Our portfolio</span>
          <h2>Six dosage forms, one reliable range</h2>
        </RfReveal>
        <RfReveal className="pr-ov-list">
          {dosageForms.map(({ tag, title, short, art, image }) => (
            <div className="pr-ov-item" key={title}>
              <div className="pr-ov-img"><Illustration name={art} image={image} alt={title} /></div>
              <div>
                <span className="pr-ov-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{short}</p>
              </div>
            </div>
          ))}
        </RfReveal>
      </div>
    </section>
  );
}
