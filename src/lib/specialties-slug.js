/** URL slug for a specialty name, e.g. "Gastroenterology & Hepatology" -> "gastroenterology-hepatology". */
export const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
