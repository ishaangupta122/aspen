import { catalogue } from "@/data/catalogue";
import SectionIntro from "@/components/ui/SectionIntro";
import Link from "@/components/ui/SiteLink";
import { ArrowRight } from "lucide-react";
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
const norm = (s) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");
const featured = featuredBrands
  .map((b) => catalogue.find((p) => norm(p.brand) === norm(b)))
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
    <section className="px-0 py-[var(--section-y)] [background:var(--c-white)] [&[id]]:scroll-mt-[70px]" id="portfolio">
      <div className="rf-reveal container mx-auto my-0 w-[min(var(--page-max),calc(100%_-_2_*_var(--page-gutter)))]">
        <div className="gap-10 flex justify-between items-end max-[900px]:gap-[5px] max-[900px]:flex-col max-[600px]:gap-3.5 max-[600px]:items-start">
          <SectionIntro
            eyebrow="Featured products"
            title="Brands from our portfolio."
            copy="A selection from our range of 240+ products across therapeutic areas."
          />
          <Link className="ta-all mx-0 px-0 py-2 gap-3 border-b [border-bottom-style:solid] border-b-navy inline-flex items-center mt-0 font-semibold text-[15.5px] leading-[1.2] font-body text-navy [transition:border-color_0.25s_ease] mb-1.5 whitespace-nowrap hover:border-b-red focus-visible:outline-[length:2px] focus-visible:outline focus-visible:outline-[color:var(--c-navy)] focus-visible:outline-offset-[3px]" href="/products">
            Explore complete portfolio <ArrowRight className="text-red [transition:transform_0.25s_ease] [.ta-all:hover_&]:[transform:translateX(4px)]" size={18} />
          </Link>
        </div>
        <FeaturedTrack products={featured} />
      </div>
    </section>
  );
}
