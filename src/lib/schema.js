import { SITE_URL } from "@/lib/site";

export function breadcrumbSchema(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [["Home", "/"], ...trail].map(([name, path], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item: `${SITE_URL}${path === "/" ? "" : path}`,
    })),
  };
}

export function pageSchema(type, { name, description, path }) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  };
}
