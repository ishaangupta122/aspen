// Product catalogue, built from products-data.js (copied from aspenpharmaceuticals.com). Monographs load from /public/monographs.

export const dosageForms = [
  { tag: "Oral solids", title: "Tablets", short: "Immediate & modified release", text: "Immediate, sustained and modified-release tablets, including film-coated and orally dispersible formats.", art: "tablets", image: "/images/dosage-tablets-white-closeup.jpg" },
  { tag: "Oral solids", title: "Capsules", short: "Hard gelatin & soft-gel", text: "Hard gelatin, HPMC and soft-gel capsules for faster absorption and better patient compliance.", art: "capsules", image: "/images/dosage-capsules-assorted.jpg" },
  { tag: "Sterile", title: "Injectables", short: "Vials & ampoules", text: "Vials, ampoules and dry powder injections made under controlled sterile conditions.", art: "injectables", image: "/images/dosage-injectable-ampoules.jpg" },
  { tag: "Liquids", title: "Oral liquids", short: "Syrups & suspensions", text: "Syrups, suspensions and dry-syrup formulations designed for paediatric and geriatric care.", art: "liquids", image: "/images/dosage-oral-liquid-medicine-bottles.jpg" },
  { tag: "Topicals", title: "Creams & ointments", short: "Creams, gels & ointments", text: "Dermatological creams, gels and ointments for skin, wound and pain management.", art: "topicals", image: "/images/dosage-cream-ointment-jar.jpg" },
  { tag: "Wellness", title: "Nutraceuticals", short: "Vitamins & minerals", text: "Vitamins, minerals and nutritional supplements for everyday health and recovery.", art: "wellness", image: "/images/dosage-nutraceutical-vitamin-bottle.jpg" },
];


import { productRows, specialtyNames as allSpecialties, specialtyLists } from "@/data/products-data";
import { formArt } from "@/data/productForms";

export { formArt };

// The live site lists 20 specialties; several are subsets of others, so the filter shows 16.
// Neurosurgery -> Neurology, Sexology -> Urology & Andrology; General Medicine (covers ~73% of the range)
// and Haematology (1 product) have no tab of their own. Every product stays in "All products".
const MERGED_INTO = { Neurosurgery: "Neurology", Sexology: "Urology & Andrology" };
const NO_TAB = new Set(["General Medicine", "Haematology"]);
export const specialtyNames = allSpecialties.filter((n) => !MERGED_INTO[n] && !NO_TAB.has(n));


// Products shown before "Show more":
export const INITIAL_VISIBLE = 8;

const arts = {
  Psychiatry: "psychiatry", Neurology: "psychiatry", Neurosurgery: "psychiatry", Orthopaedics: "rheumatology", Rheumatology: "rheumatology",
  "Gastroenterology & Hepatology": "gi", Cardiology: "cardio", "General Medicine": "all", Diabetology: "tablets", "Urology & Andrology": "capsules",
  Sexology: "capsules", Gynaecology: "wellness", Pulmonology: "liquids", ENT: "liquids", Dermatology: "topicals", Paediatrics: "liquids",
  Nephrology: "tablets", "General Surgery": "injectables", Dental: "topicals", Haematology: "injectables",
};
const labels = { "Gastroenterology & Hepatology": "Gastro & Hepatology" };
// One card per specialty. Each card shows an illustration.
export const categoryCards = [
  { name: "All", label: "All products", art: "all" },
  ...specialtyNames.map((name) => ({ name, label: labels[name] || name, art: arts[name] || "all" })),
];


// Product photos (home page cards only) are self-hosted in /public/images.
const productImage = (id) => (id ? `/images/p-${id}.jpg` : null);

export const catalogue = productRows.map(([brand, composition, pack, form, category, specs, img, mono], i) => ({
  id: i,
  brand,
  composition,
  pack,
  form,
  category,
  specialties: [
    ...new Set(
      specs
        .map((n) => allSpecialties[n])
        .map((n) => MERGED_INTO[n] || n)
        .filter((n) => !NO_TAB.has(n)),
    ),
  ],
  image: productImage(img),
  mono: mono ? String(mono) : null,
}));

/** Products for a specialty tab ("All" = the full list), in the order used on the live site. */
export const productsFor = (name) =>
  name === "All" ? catalogue : specialtyLists[allSpecialties.indexOf(name)].map((i) => catalogue[i]);
