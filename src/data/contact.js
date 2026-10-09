import { SPECIALTY_COUNT } from "@/data/site";

export const contact = {
  address: [
    "Aspen Pharmaceuticals Pvt. Ltd.",
    "Site-2, Loni Rd, Block A,",
    "Industrial Area, Sahibabad",
    "Ghaziabad, Uttar Pradesh - 201007",
  ],
  phone: "+91 84473 91385",
  phoneHref: "tel:+918447391385",
  email: "aspeninfo03@gmail.com",
  hours: "Monday – Saturday: 9:00 AM – 5:00 PM",
  mapSrc:
    "https://www.google.com/maps?q=Aspen+Pharmaceuticals+Pvt+Ltd+Site-2+Loni+Rd+Sahibabad+Ghaziabad&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=Aspen+Pharmaceuticals+Pvt+Ltd+Sahibabad+Ghaziabad",
};

export const enquiryTypes = [
  "General Enquiry",
  "Product Enquiry",
  "Distribution & Partnership",
  "Healthcare Professional Query",
  "Careers",
  "Other",
];

// Copy is drawn from the site's own themes (science, quality, reach). Edit freely.
export const careers = {
  eyebrow: "Careers",
  title: "Want to work with Aspen?",
  copy: "If you would like to be part of the team, tell us about yourself. When your profile matches an opening, our team will get in touch.",
  reasons: [
    {
      title: "Work that reaches patients",
      text: `Our range supports healthcare professionals across ${SPECIALTY_COUNT} medical specialties. Whatever your role, your work helps reliable medicines reach the people who need them.`,
    },
    {
      title: "Exposure across the product lifecycle",
      text: "From quality review and regulatory documentation to distribution and field engagement, you work close to every stage of a product’s journey.",
    },
    {
      title: "A team that values your contribution",
      text: "Based in Ghaziabad since 2010, we serve healthcare professionals across North India. Our teams are close-knit, so your work is seen and your ideas are heard.",
    },
  ],
};
