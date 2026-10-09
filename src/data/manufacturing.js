export const process = {
  eyebrow: "Manufacturing process",
  title: "A typical tablet production line",
  caption: "General overview · Actual processes vary by partner and product",
  stages: ["Compression", "Coating", "Blister packing", "Cartoning"],
  // General descriptions of each stage; actual processes vary by partner and product.
  details: [
    "Powder blends are compressed into tablets of a defined weight, size and hardness.",
    "A thin film coat is applied to protect the tablet and make it easier to swallow.",
    "Tablets are sealed into individual cells that protect them from moisture and light.",
    "Sealed strips are placed in cartons with the patient leaflet, then labelled for dispatch.",
  ],
};

// Partner logos and plant photos are self-hosted in /public/images.
export const partners = [
  { name: "Akums Drugs & Pharmaceuticals Ltd.", image: "/images/akums-drugs.jpg" },
  { name: "Gentech Healthcare Pvt. Ltd.", image: "/images/gentech-healthcare.jpg" },
  { name: "Enrico Pharmaceuticals", image: "/images/enrico-pharmaceuticals.jpg" },
  { name: "Ekanthika Pharmaceuticals", image: "/images/ekanthika-pharmaceuticals.jpg" },
  { name: "Medicef Pharma Ltd.", image: "/images/medicef-pharma.jpg" },
  { name: "Antibiotic India" },
];

export const facilities = {
  eyebrow: "Facilities & equipment",
  title: "Inside our partners’ facilities",
  copy: "Clean-room production and automated packing at the plants that make Aspen products.",
  note: "Representative images of partner facilities.",
  items: [
    { caption: "Akums manufacturing campus, Haridwar (aerial view)", image: "/images/akums-haridwar-aerial.jpg" },
    { caption: "Medicef manufacturing facility", image: "/images/medicef-facility.jpg" },
    { caption: "Automated filling line in a clean-room area", image: "/images/cleanroom-filling-line.jpg" },
    { caption: "Automatic sachet packing machine", image: "/images/sachet-packing-machine.jpg" },
  ],
};

// [name, detail, image?]. Add a certificate / mark image path (e.g. "/certs/eu-gmp.png" in /public) as the third item to show it in the badge.
export const certifications = [
  ["EU-GMP", "European Good Manufacturing Practice"],
  ["WHO-GMP", "World Health Organization GMP"],
  ["ISO 9001:2015", "Quality management systems"],
  ["GLP", "Good Laboratory Practice"],
];

export const qc = {
  eyebrow: "Our approach",
  title: "Quality control, from material to medicine",
  tagline: "Precision in testing. Confidence in quality.",
  paragraphs: [
    "At Aspen, quality means scientific evaluation, consistency and patient safety. Quality control supports this through the sampling, inspection and testing of materials and products against approved specifications.",
    "From incoming raw materials to finished dosage forms, testing verifies identity, strength, purity and performance, giving the evidence needed for material acceptance and product release.",
  ],
};

export const stages = {
  eyebrow: "Quality evaluation at every stage",
  title: "From incoming materials to finished product",
  items: [
    {
      title: "Raw & packaging material testing",
      text: "Active ingredients, excipients and packaging components are checked against approved specifications before they are accepted for use.",
      tags: ["Identification", "Assay", "Impurities"],
    },
    {
      title: "In-process quality checks",
      text: "Checks during manufacture catch variation early and confirm the process is producing material with the required characteristics.",
      tags: ["Blend uniformity", "Hardness", "Disintegration"],
    },
    {
      title: "Finished product analysis",
      text: "Each batch is evaluated against approved specifications before a release decision is made through the authorised quality system.",
      tags: ["Assay", "Dosage uniformity", "Dissolution"],
    },
    {
      title: "Microbiological testing",
      text: "Testing is matched to the product and its intended use, as part of a wider contamination-control system.",
      tags: ["Microbial limits", "Sterility", "Bacterial endotoxins"],
    },
    {
      title: "Stability studies",
      text: "Studies track how product quality holds up over time under defined storage conditions, supporting shelf life and storage instructions.",
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
    "The value of a laboratory result depends on the integrity of the process behind it. Effective quality control requires controlled sampling, traceable records, suitable reference standards, equipment calibration and maintenance, and documented review of results.",
    "Unexpected or out-of-specification results require investigation through established procedures. Findings should inform appropriate corrective and preventive actions and support continuous improvement.",
  ],
};

export const qcqa = {
  title: "Quality control and quality assurance",
  cards: [
    ["Quality control", "Provides the testing and inspection evidence used to assess materials and products."],
    ["Quality assurance", "Establishes and oversees the wider system of procedures, documentation, validation, training, investigations and quality review."],
  ],
  closing:
    "Working together, these functions support consistent pharmaceutical quality. Quality Control must remain independent of production so that testing and acceptance decisions can be made objectively.",
};

export const commitment = {
  title: "Responsibility across the product lifecycle",
  image: "/images/hero-lab-rotary-evaporator.jpg",
  imageAlt: "Gloved hands adjusting laboratory process equipment",
  text: "Quality is a responsibility carried from material selection to delivery. Our focus is on scientifically sound evaluation, clear documentation and accountable quality decisions that support confidence in the medicines we supply.",
  tagline: "Aspen Pharmaceuticals Pvt. Ltd.",
};
