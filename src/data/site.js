// All photos are self-hosted in /public/images.
// Number of medical specialties Aspen serves. Single source for every place the
// site quotes it; keep in sync with `specialtyNames` in catalogue.js (16 tabs).
export const SPECIALTY_COUNT = 16;

export const images = {
  clinician: "/images/doctor-stethoscope.jpg",
  about: "/images/lab-pipette-test-tubes.jpg",
  manufacturing: "/images/lab-bench-microscope.jpg",
  scientist: "/images/aspen-scientist-at-bench.jpg",
  warehouse: "/images/distribution-warehouse-aisle.jpg",
  capsuleTray: "/images/capsule-tray-lab.jpg",
};

export const therapeuticAreas = [
  {
    name: "General Medicine",
    href: "/products",
    detail: "Antibiotics, analgesics, everyday therapy",
    className: "area-main",
  },
  {
    name: "Cardiology",
    href: "/products/cardiology",
    detail: "Antihypertensives and diuretics",
    className: "area-small",
  },
  {
    name: "Neurology",
    href: "/products/neurology",
    detail: "Antiepileptics and neuro-care",
    className: "area-small",
  },
  {
    name: "Gastro & Hepatology",
    href: "/products/gastroenterology-hepatology",
    detail: "Digestive and liver care",
    className: "area-wide",
  },
  {
    name: "Orthopaedics",
    href: "/products/orthopaedics",
    detail: "Pain, joint and bone health",
    className: "area-small",
  },
  {
    name: "Nutraceuticals",
    href: "/products?q=Nutraceutical",
    detail: "Vitamins, minerals and supplements",
    className: "area-small",
  },
  {
    name: "Psychiatry",
    href: "/products/psychiatry",
    detail: "Antidepressants and antipsychotics",
    className: "area-small",
  },
];

