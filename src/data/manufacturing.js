export const process = {
  eyebrow: "Manufacturing process",
  title: "A typical tablet production line",
  caption: "General overview · Actual processes vary by partner and product",
  stages: ["Compression", "Coating", "Blister packing", "Cartoning"],
  details: [
    "Powder blends are compressed into tablets of a defined weight, size and hardness.",
    "A thin film coat is applied to protect the tablet and make it easier to swallow.",
    "Tablets are sealed into individual cells that protect them from moisture and light.",
    "Sealed strips are placed in cartons with the patient leaflet, then labelled for dispatch.",
  ],
};

export const partners = [
  { name: "Akums Drugs & Pharmaceuticals Ltd.", image: "/images/akums-drugs.webp" },
  { name: "Gentech Healthcare Pvt. Ltd.", image: "/images/gentech-healthcare.webp" },
  { name: "Enrico Pharmaceuticals", image: "/images/enrico-pharmaceuticals.webp" },
  { name: "Ekanthika Pharmaceuticals", image: "/images/ekanthika-pharmaceuticals.webp" },
  { name: "Medicef Pharma Ltd.", image: "/images/medicef-pharma.webp" },
  { name: "Antibiotic India" },
];

export const facilities = {
  eyebrow: "Facilities & equipment",
  title: "Inside our partners’ facilities",
  copy: "Clean-room production and automated packing at the plants that make Aspen products.",
  note: "Representative images of partner facilities.",
  items: [
    { caption: "Akums manufacturing campus, Haridwar (aerial view)", image: "/images/akums-haridwar-aerial.webp" },
    { caption: "Medicef manufacturing facility", image: "/images/medicef-facility.webp" },
    { caption: "Automated filling line in a clean-room area", image: "/images/cleanroom-filling-line.webp" },
    { caption: "Automatic sachet packing machine", image: "/images/sachet-packing-machine.webp" },
  ],
};

// [name, detail, image?]; add an image path from /public as the third item to show it.
export const certifications = [
  ["EU-GMP", "European Good Manufacturing Practice"],
  ["WHO-GMP", "World Health Organization GMP"],
  ["ISO 9001:2015", "Quality management systems"],
  ["GLP", "Good Laboratory Practice"],
];

export const qc = {
  eyebrow: "Our approach",
  title: "From material to medicine",
  paragraphs: [
    "Quality at Aspen means scientific evaluation, consistency and patient safety, supported by sampling, inspection and testing against approved specifications.",
    "From incoming raw materials to finished dosage forms, testing verifies identity, strength, purity and performance.",
  ],
};

export const stages = {
  eyebrow: "Quality evaluation at every stage",
  title: "From incoming materials to finished product",
  items: [
    {
      title: "Raw & packaging materials",
      text: "Materials are checked against specifications before use.",
      tags: ["Identification", "Assay", "Impurities"],
    },
    {
      title: "In-process quality checks",
      text: "Checks during manufacture catch variation early.",
      tags: ["Blend uniformity", "Hardness", "Disintegration"],
    },
    {
      title: "Finished product analysis",
      text: "Each batch is tested against specifications before release.",
      tags: ["Assay", "Dosage uniformity", "Dissolution"],
    },
    {
      title: "Microbiological testing",
      text: "Testing is matched to the product and its intended use.",
      tags: ["Microbial limits", "Sterility", "Bacterial endotoxins"],
    },
    {
      title: "Stability studies",
      text: "Quality is tracked over time under defined storage conditions.",
      tags: ["Potency", "Degradation products", "Dissolution"],
    },
  ],
};

export const methods = {
  eyebrow: "Analytical techniques and laboratory methods",
  title: "Suitable methods, qualified equipment, trained people",
  copy: "Reliable testing depends on suitable analytical methods, qualified equipment and trained personnel. Techniques used in pharmaceutical quality control include:",
  rows: [
    ["High-Performance Liquid Chromatography (HPLC)", "Assay of active ingredients and assessment of related substances or degradation products"],
    ["Gas Chromatography (GC)", "Analysis of volatile components and residual solvents, where applicable"],
    ["UV-Visible Spectrophotometry", "Measurement of light absorption for suitable identification and quantitative tests"],
    ["Dissolution Testing", "Evaluation of drug release under specified test conditions"],
    ["Physical Testing", "Assessment of characteristics such as hardness, friability, disintegration, pH and viscosity"],
    ["Microbiological Methods", "Evaluation of microbial limits, sterility or bacterial endotoxins, as applicable"],
  ],
  note: "Methods must be appropriate for their intended purpose, with validation or verification performed as required.",
};

export const practices = {
  title: "Reliable results through controlled practices",
  paragraphs: [
    "Reliable results depend on controlled sampling, traceable records, calibrated equipment and documented review. Unexpected results are investigated through established procedures.",
  ],
};

export const qcqa = {
  title: "Quality control and quality assurance",
  cards: [
    ["Quality control", "Provides the testing and inspection evidence used to assess materials and products."],
    ["Quality assurance", "Establishes and oversees the wider system of procedures, documentation, validation, training, investigations and quality review."],
  ],
  closing:
    "Together, these functions support consistent pharmaceutical quality.",
};

export const commitment = {
  title: "Responsibility across the product lifecycle",
  image: "/images/hero-lab-rotary-evaporator.webp",
  imageAlt: "Gloved hands adjusting laboratory process equipment",
  text: "Quality is carried from material selection to delivery, through sound evaluation, clear documentation and accountable decisions.",
  tagline: "Aspen Pharmaceuticals Pvt. Ltd.",
};
