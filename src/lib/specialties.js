import { specialtyNames } from "@/data/products-data";
import { catalogue } from "@/data/catalogue";
import { slugify } from "@/lib/specialties-slug";

export const specialtyPages = specialtyNames.map((name) => ({
  name,
  slug: slugify(name),
  href: `/products/${slugify(name)}`,
  products: catalogue
    .filter((p) => p.specialties.includes(name))
    .sort((a, b) => a.brand.localeCompare(b.brand) || a.id - b.id),
}));

export const findSpecialty = (slug) =>
  specialtyPages.find((s) => s.slug === slug);
