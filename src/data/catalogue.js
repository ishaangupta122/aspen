// Product catalogue, built from products-data.js (rows) and monographs-data.js (condensed monographs).

export const dosageForms = [
  { tag: "Oral solids", title: "Tablets", short: "Immediate & modified release", text: "Immediate, sustained and modified-release tablets, including film-coated and orally dispersible formats.", art: "tablets", image: "/images/photos/dosage-tablets-white-closeup.jpg" },
  { tag: "Oral solids", title: "Capsules", short: "Hard gelatin & soft-gel", text: "Hard gelatin, HPMC and soft-gel capsules for faster absorption and better patient compliance.", art: "capsules", image: "/images/photos/dosage-capsules-assorted.jpg" },
  { tag: "Sterile", title: "Injectables", short: "Vials & ampoules", text: "Vials, ampoules and dry powder injections made under controlled sterile conditions.", art: "injectables", image: "/images/photos/dosage-injectable-ampoules.jpg" },
  { tag: "Liquids", title: "Oral liquids", short: "Syrups & suspensions", text: "Syrups, suspensions and dry-syrup formulations designed for paediatric and geriatric care.", art: "liquids", image: "/images/photos/dosage-oral-liquid-medicine-bottles.jpg" },
  { tag: "Topicals", title: "Creams & ointments", short: "Creams, gels & ointments", text: "Dermatological creams, gels and ointments for skin, wound and pain management.", art: "topicals", image: "/images/photos/dosage-cream-ointment-jar.jpg" },
  { tag: "Wellness", title: "Nutraceuticals", short: "Vitamins & minerals", text: "Vitamins, minerals and nutritional supplements for everyday health and recovery.", art: "wellness", image: "/images/photos/dosage-nutraceutical-vitamin-bottle.jpg" },
];


import { productRows, specialtyNames } from "@/data/products-data";
import { monographData } from "@/data/monographs-data";

export { specialtyNames };


// Products shown before "Show more":
export const INITIAL_VISIBLE = 8;

// Specialty cards with a photo (stock photos, self-hosted in /public/images/photos). Other specialties go in the "More" select.
const photos = {
  "General Medicine": "/images/photos/doctor-stethoscope.jpg",
  Psychiatry: "/images/photos/psychiatry-brain-scan.jpg",
  Neurology: "/images/photos/neurology-reflex-hammer.jpg",
  Orthopaedics: "/images/photos/orthopaedics-knee-bones.jpg",
  "Gastroenterology & Hepatology": "/images/photos/gastro-anatomy-model.jpg",
  Cardiology: "/images/photos/heart-model-cardiology.jpg",
};
const arts = {
  Psychiatry: "psychiatry", Neurology: "psychiatry", Neurosurgery: "psychiatry", Orthopaedics: "rheumatology", Rheumatology: "rheumatology",
  "Gastroenterology & Hepatology": "gi", Cardiology: "cardio", "General Medicine": "all", Diabetology: "tablets", "Urology & Andrology": "capsules",
  Sexology: "capsules", Gynaecology: "wellness", Pulmonology: "liquids", ENT: "liquids", Dermatology: "topicals", Paediatrics: "liquids",
  Nephrology: "tablets", "General Surgery": "injectables", Dental: "topicals", Haematology: "injectables",
};
const labels = { "Gastroenterology & Hepatology": "Gastro & Hepatology" };
// One card per specialty. Add a photo path to `photos` to give a specialty a photo; otherwise an illustration is shown.
export const categoryCards = [
  { name: "All", label: "All products", art: "all", image: "/images/photos/all-products-supplements.jpg" },
  ...specialtyNames.map((name) => ({ name, label: labels[name] || name, art: arts[name] || "all", image: photos[name] || null })),
];

export const formArt = {
  Tablet: "tablets",
  Capsule: "capsules",
  Injection: "injectables",
  "Syrup & Liquid": "liquids",
  "Gel & Topical": "topicals",
  "Powder & Sachet": "wellness",
};

// Product photos are self-hosted in /public/images/products.
const productImage = (id) => (id ? `/images/products/p-${id}.jpg` : null);

export const catalogue = productRows.map(([brand, composition, pack, form, category, specs, img, mono], i) => ({
  id: i,
  brand,
  composition,
  pack,
  form,
  category,
  specialties: specs.map((n) => specialtyNames[n]),
  image: productImage(img),
  monograph: mono ? monographData[mono] || null : null,
}));
