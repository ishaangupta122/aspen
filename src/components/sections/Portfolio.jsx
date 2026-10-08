import { catalogue } from "@/data/catalogue";
import SectionIntro from "@/components/ui/SectionIntro";
import ButtonLink from "@/components/ui/ButtonLink";
import FeaturedTrack from "@/components/sections/FeaturedTrack";

// Featured brands from the real catalogue (matched by brand name).
const featuredBrands = [
  "ASPACOX-60",
  "APXMIN-400",
  "ARIPSON",
  "AVITOR-10",
  "ASPAMOR-30",
  "ASPENGEL",
  "TALYGRAM AM",
  "ATEXPEN-25",
  "CHYMOSIN",
  "COBAZEP 5",
  "TREADY 10",
  "AHALAC",
];
// Long multi-ingredient compositions shortened for the home cards (full detail stays in the catalogue).
const shortComposition = {
  ASPENGEL: "Diclofenac, Methyl salicylate, Menthol, Linseed oil",
  CHYMOSIN: "Trypsin, Bromelain, Rutoside",
};

// Only pass what the card needs (keeps the large monograph data out of the client bundle).
const featured = featuredBrands
  .map((b) => catalogue.find((p) => p.brand === b))
  .filter(Boolean)
  .map(({ id, brand, category, composition, form, image }) => ({
    id,
    brand,
    category,
    composition: shortComposition[brand] || composition,
    form,
    image,
  }));

export default function Portfolio() {
  return (
    <section className="section portfolio-section" id="portfolio">
      <div className="container">
        <div className="portfolio-heading">
          <SectionIntro
            eyebrow="Featured products"
            title="Brands from our portfolio."
            copy="A selection from our range of 250+ products across therapeutic areas."
          />
          <ButtonLink to="/products" variant="text">
            Explore complete portfolio
          </ButtonLink>
        </div>
        <FeaturedTrack products={featured} />
      </div>
    </section>
  );
}
