export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Our portfolio", href: "/products#portfolio" },
      { label: "Product catalogue", href: "/products#catalogue" },
    ],
  },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Quality", href: "/quality" },
  { label: "R&D", href: "/research-development" },
  { label: "Contact", href: "/contact" },
];
