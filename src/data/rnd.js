import { SPECIALTY_COUNT } from "@/data/site";
import {
  Activity,
  ClipboardCheck,
  Droplets,
  FlaskConical,
  GlassWater,
  Hand,
  Leaf,
  Pill,
  Syringe,
  Timer,
} from "lucide-react";

export const hero = {
  eyebrow: "Research & Development",
  title: "Formulation development",
  tagline: "Science-led innovation. Patient-focused design.",
  paragraphs: [
    "Aspen’s formulation development brings together pharmaceutical science and practical patient needs. We aim to develop dosage forms that address drug delivery, stability, palatability and ease of administration, with quality guiding every stage.",
    "From conventional formulations to complex delivery platforms, our priorities centre on translating therapeutic requirements into well-designed products.",
  ],
  highlights: [
    ["250+", "Products in our range"],
    [String(SPECIALTY_COUNT), "Medical specialties"],
    ["6", "Dosage form categories"],
  ],
};

export const focusAreas = [
  {
    title: "Novel drug delivery systems",
    icon: Pill,
    text: "Exploring delivery approaches that optimise how an active ingredient is released, according to its properties and intended use.",
  },
  {
    title: "Taste-masking technologies",
    icon: Droplets,
    text: "Addressing unpleasant taste through suitable formulation techniques, especially for oral liquids and dispersible preparations.",
  },
  {
    title: "Solubility and dissolution enhancement",
    icon: FlaskConical,
    text: "Improving the solubility and dissolution of poorly soluble active ingredients to support product performance.",
  },
  {
    title: "Modified-release formulations",
    icon: Timer,
    text: "Sustained, extended or delayed-release strategies, guided by the active ingredient and the intended dosing profile.",
  },
  {
    title: "Bioequivalence and clinical evaluation",
    icon: ClipboardCheck,
    text: "Planning evidence-generation pathways, including bioequivalence studies and clinical trials where required, with qualified research partners and subject to regulatory requirements.",
  },
];

export const dosageForms = [
  { name: "Oral solids", icon: Pill, focus: "Tablets, capsules, dispersible formulations and modified-release preparations." },
  { name: "Oral liquids", icon: GlassWater, focus: "Solutions, suspensions and emulsions, with attention to palatability and physical stability." },
  { name: "Sterile injectables", icon: Syringe, focus: "Formulation considerations for injectable products, including compatibility, stability and suitability for sterile processing." },
  { name: "Topical preparations", icon: Hand, focus: "Creams, ointments and gels, with attention to consistency, application and drug release." },
  { name: "Hormonal formulations", icon: Activity, focus: "Product-specific considerations for dose uniformity, stability and appropriate manufacturing controls." },
  { name: "Nutraceuticals", icon: Leaf, focus: "Formulations designed around ingredient compatibility, stability and convenient administration." },
];

export const tablets = {
  intro:
    "Our development priorities also include advanced tablet architectures. The choice of platform is guided by scientific feasibility and the needs of the intended product.",
  items: [
    { key: "bilayer", title: "Bilayer tablets", text: "Separate layers that can accommodate different ingredients or release profiles." },
    { key: "nested", title: "Tablet-in-tablet systems", text: "A core tablet within an outer tablet, enabling ingredient separation or tailored release." },
    { key: "combo", title: "Combination formulations", text: "Multiple active ingredients developed with attention to compatibility, stability and dosage requirements." },
  ],
};

export const stages = [
  { title: "Understand the product", text: "Evaluate the active ingredient, intended dosage form, patient needs and target product characteristics." },
  { title: "Design the formulation", text: "Select suitable excipients and explore formulation options through structured development trials." },
  { title: "Evaluate performance", text: "Assess relevant attributes such as dissolution, release behaviour, uniformity, compatibility and stability." },
  { title: "Prepare for scale-up", text: "Consider process reproducibility, manufacturing suitability and technology-transfer requirements." },
  { title: "Build the evidence", text: "Define the analytical, stability and study requirements needed to support the applicable development and regulatory pathway." },
];

export const quality = {
  title: "Practical to manufacture, consistent in performance",
  paragraphs: [
    "A successful formulation must be practical to manufacture and consistent in performance. We emphasise scientifically justified ingredient selection and documented evaluation.",
    "Addressing these points early gives development and commercial manufacture a sound foundation.",
  ],
};

export const cta = {
  title: "Discuss your formulation requirements",
  text: "Whether your requirement is a conventional dosage form or a complex formulation challenge, talk to Aspen about product objectives, technical feasibility and development opportunities.",
};
