import { specialtyNames, productsFor } from "@/data/catalogue";
import { slugify } from "@/lib/specialties-slug";

export const specialtyPages = specialtyNames.map((name) => ({
  name,
  slug: slugify(name),
  href: `/products/${slugify(name)}`,
  products: productsFor(name),
}));

export const findSpecialty = (slug) =>
  specialtyPages.find((s) => s.slug === slug);
