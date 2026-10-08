// Shared content for the home-hero candidates (src/components/hero). The carousel tells a
// three-part story: what we provide, why you can trust us, what we bring to healthcare.
// Every fact below comes from existing site content (about.js, manufacturing.js, contact.js).
export const HERO_DURATION = 3500;

// facts: three short, verified facts shown as quiet floating pills on the right (A).
// image / imagePos / imageFlip: large photo for the full-bleed concept (A).
// photo / photoPos: photo for the circular frame of concept (B).
export const heroSlides = [
  {
    key: "medicines",
    tab: "Medicines",
    eyebrow: "Pharmaceutical healthcare",
    lines: ["Medicines healthcare", "professionals can"],
    accent: "rely on.",
    text: "A dependable portfolio of medicines supporting healthcare professionals across therapeutic needs.",
    cta: { label: "Explore products", href: "/products" },
    link: { label: "About Aspen", href: "/about" },
    fact: { label: "Portfolio", value: "250+ products" },
    facts: ["250+ products", "6 dosage form categories", "Established 2010"],
    image: "/images/photos/hero-medicines.jpg",
    imageAlt: "Assorted medicine blister packs resting on a wooden surface",
    imagePos: "62% 50%",
    photo: "/images/photos/hero-medicines.jpg",
    photoAlt: "Assorted medicine blister packs resting on a wooden surface",
    photoPos: "55% 50%",
  },
  {
    key: "quality",
    tab: "Quality",
    eyebrow: "Quality & standards",
    lines: ["Quality built into"],
    accent: "every step.",
    text: "From partner selection to manufacturing and distribution, quality and accurate product information remain central to our work.",
    cta: { label: "Our quality", href: "/quality" },
    fact: { label: "Quality", value: "EU-GMP · WHO-GMP · ISO 9001" },
    facts: ["EU-GMP", "WHO-GMP", "ISO 9001:2015"],
    image: "/images/photos/hero-quality.jpg",
    imageAlt: "Laboratory analyst pipetting samples into a test-tube rack",
    imagePos: "40% 6%",
    imageFlip: true, // mirrored so the subject sits on the right, clear of the copy
    photo: "/images/photos/hero-quality.jpg",
    photoAlt: "Laboratory analyst pipetting samples into a test-tube rack",
    photoPos: "30% 40%",
  },
  {
    key: "expertise",
    tab: "Expertise",
    eyebrow: "Therapeutic expertise",
    lines: ["Expertise across"],
    accent: "therapeutic areas.",
    text: "A portfolio of 250+ products across cardiology, neurology, gastroenterology and more, with detailed monographs for many products.",
    cta: { label: "Explore our expertise", href: "/products#portfolio" },
    fact: { label: "Expertise", value: "Multiple specialties" },
    facts: ["Multiple specialties", "Cardiology", "Neurology"],
    image: "/images/photos/hero-expertise.png",
    imageAlt: "Pharmacist examining a vial beside shelves of boxed medicines",
    imagePos: "58% 30%",
    photo: "/images/photos/hero-expertise.png",
    photoAlt: "Pharmacist examining a vial beside shelves of boxed medicines",
    photoPos: "50% 35%",
  },
];
