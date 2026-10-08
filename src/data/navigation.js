export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our journey", href: "/about#journey" },
      { label: "Mission & vision", href: "/about#mission-vision" },
      { label: "Core values", href: "/about#values" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Our portfolio", href: "/products#portfolio" },
      { label: "Product catalogue", href: "/products#catalogue" },
    ],
  },
  {
    label: "Manufacturing",
    href: "/manufacturing",
    children: [
      { label: "Production process", href: "/manufacturing#process" },
      { label: "Partners & facilities", href: "/manufacturing#partners" },
      { label: "Certifications", href: "/manufacturing#certifications" },
    ],
  },
  {
    label: "Quality",
    href: "/quality",
    children: [
      { label: "Quality control", href: "/quality#quality" },
      { label: "Testing stages", href: "/quality#quality-stages" },
      { label: "Controlled practices", href: "/quality#practices" },
    ],
  },
  {
    label: "R&D",
    href: "/research-development",
    children: [
      { label: "Focus areas", href: "/research-development#focus" },
      { label: "Dosage forms", href: "/research-development#dosage-forms" },
      { label: "Development approach", href: "/research-development#approach" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
