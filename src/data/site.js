import { Beaker, HeartPulse, Microscope, Sparkles } from "lucide-react";

// All photos are self-hosted in /public/images (downloaded by scripts/fetch-images.mjs; sources listed in scripts/images.json).
export const images = {
  hero: "/images/photos/hero-lab-rotary-evaporator.jpg",
  people: "/images/photos/team-collaboration-glassware.jpg",
  clinician: "/images/photos/doctor-stethoscope.jpg",
  care: "/images/photos/heart-model-cardiology.jpg",
  patient: "/images/photos/doctor-patient-consultation.jpg",
  // About / Quality / Trust sections
  about: "/images/photos/lab-pipette-test-tubes.jpg",
  equipment: "/images/photos/lab-beaker-gloved-hand.jpg",
  manufacturing: "/images/photos/lab-bench-microscope.jpg",
  scientist: "/images/photos/scientist-at-lab-bench.jpg",
  researcher: "/images/photos/researcher-microscope.jpg",
  // Section-specific photos
  doctorNotes: "/images/photos/doctor-writing-notes.jpg",
  pharmacists: "/images/photos/pharmacists-with-laptop.jpg",
  // Home hero carousel
  heroTeam: "/images/photos/hero-aspen-team-review.jpg",
  heroQuality: "/images/photos/hero-aspen-quality-microscopy.jpg",
  heroReach: "/images/photos/hero-aspen-clinician-consultation.jpg",
  warehouse: "/images/photos/distribution-warehouse-aisle.jpg",
  capsuleTray: "/images/photos/capsule-tray-lab.jpg",
  blisterPacks: "/images/photos/blister-packs-closeup.jpg",
  colleagues: "/images/photos/cleanroom-colleagues.jpg",
  documentCheck: "/images/photos/checking-documents-gloves.jpg",
};

export const therapeuticAreas = [
  { name: "General Medicine", detail: "Antibiotics, analgesics, everyday therapy", className: "area-main", image: "/images/photos/doctor-stethoscope.jpg" },
  { name: "Cardiology", detail: "Antihypertensives and diuretics", className: "area-small", image: "/images/photos/heart-model-cardiology.jpg" },
  { name: "Neurology", detail: "Antiepileptics and neuro-care", className: "area-small", image: "/images/photos/neurology-reflex-hammer.jpg" },
  { name: "Gastroenterology", detail: "Digestive and liver care", className: "area-wide", image: "/images/photos/gastro-anatomy-model.jpg" },
  { name: "Orthopaedics", detail: "Pain, joint and bone health", className: "area-small", image: "/images/photos/orthopaedics-knee-bones.jpg" },
  { name: "Nutraceuticals", detail: "Vitamins, minerals and supplements", className: "area-small", image: "/images/photos/nutraceutical-supplements.jpg" },
  { name: "Psychiatry", detail: "Antidepressants and antipsychotics", className: "area-small", image: "/images/photos/psychiatry-brain-scan.jpg" },
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
