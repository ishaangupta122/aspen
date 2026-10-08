import { Beaker, HeartPulse, Microscope, Sparkles } from "lucide-react";

// All photos are self-hosted in /public/images (downloaded by scripts/fetch-images.mjs; sources listed in scripts/images.json).
// Number of medical specialties Aspen serves. Single source for every place the
// site quotes it; keep in sync with `specialtyNames` in products-data.js (20 entries).
export const SPECIALTY_COUNT = 20;

export const images = {
  hero: "/images/photos/hero-lab-rotary-evaporator.jpg",
  people: "/images/photos/aspen-analyst-reviewing-results.jpg",
  clinician: "/images/photos/doctor-stethoscope.jpg",
  care: "/images/photos/heart-model-cardiology.jpg",
  patient: "/images/photos/aspen-scientists-lab-discussion.jpg",
  // About / Quality / Trust sections
  about: "/images/photos/lab-pipette-test-tubes.jpg",
  equipment: "/images/photos/lab-beaker-gloved-hand.jpg",
  manufacturing: "/images/photos/lab-bench-microscope.jpg",
  scientist: "/images/photos/aspen-scientist-at-bench.jpg",
  researcher: "/images/photos/aspen-microbiology-hood.jpg",
  // Section-specific photos
  doctorNotes: "/images/photos/aspen-scientists-reviewing-notes.jpg",
  pharmacists: "/images/photos/aspen-stability-chamber-check.jpg",
  // Home hero carousel
  heroTeam: "/images/photos/aspen-analyst-reviewing-results.jpg",
  heroQuality: "/images/photos/hero-aspen-quality-microscopy.jpg",
  heroReach: "/images/photos/hero-aspen-clinician-consultation.jpg",
  warehouse: "/images/photos/distribution-warehouse-aisle.jpg",
  capsuleTray: "/images/photos/capsule-tray-lab.jpg",
  blisterPacks: "/images/photos/blister-packs-closeup.jpg",
  colleagues: "/images/photos/cleanroom-colleagues.jpg",
  documentCheck: "/images/photos/aspen-qc-tablet-measurement.jpg",
};

export const therapeuticAreas = [
  {
    name: "General Medicine",
    href: "/products/general-medicine",
    detail: "Antibiotics, analgesics, everyday therapy",
    className: "area-main",
    image: "/images/photos/doctor-stethoscope.jpg",
  },
  {
    name: "Cardiology",
    href: "/products/cardiology",
    detail: "Antihypertensives and diuretics",
    className: "area-small",
    image: "/images/photos/heart-model-cardiology.jpg",
  },
  {
    name: "Neurology",
    href: "/products/neurology",
    detail: "Antiepileptics and neuro-care",
    className: "area-small",
    image: "/images/photos/neurology-reflex-hammer.jpg",
  },
  {
    name: "Gastro & Hepatology",
    href: "/products/gastroenterology-hepatology",
    detail: "Digestive and liver care",
    className: "area-wide",
    image: "/images/photos/gastro-anatomy-model.jpg",
  },
  {
    name: "Orthopaedics",
    href: "/products/orthopaedics",
    detail: "Pain, joint and bone health",
    className: "area-small",
    image: "/images/photos/orthopaedics-knee-bones.jpg",
  },
  {
    name: "Nutraceuticals",
    href: "/products?q=Nutraceutical",
    detail: "Vitamins, minerals and supplements",
    className: "area-small",
    image: "/images/photos/nutraceutical-supplements.jpg",
  },
  {
    name: "Psychiatry",
    href: "/products/psychiatry",
    detail: "Antidepressants and antipsychotics",
    className: "area-small",
    image: "/images/photos/psychiatry-brain-scan.jpg",
  },
];

export const products = [
  {
    name: "Aspacare",
    category: "Cardiovascular care",
    description: "Thoughtful support for everyday heart health.",
    tone: "product-blue",
    icon: HeartPulse,
  },
  {
    name: "Neurocalm",
    category: "Neurology",
    description: "Reliable formulations for neurological care.",
    tone: "product-sage",
    icon: Microscope,
  },
  {
    name: "Gastrozen",
    category: "Gastroenterology",
    description: "Focused solutions for digestive wellbeing.",
    tone: "product-sand",
    icon: Beaker,
  },
  {
    name: "Nutriwell",
    category: "Nutraceuticals",
    description: "Daily nutrition designed for modern life.",
    tone: "product-teal",
    icon: Sparkles,
  },
];
