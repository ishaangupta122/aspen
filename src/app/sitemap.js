import { SITE_URL } from "@/lib/site";
import { specialtyPages } from "@/lib/specialties";

export const dynamic = "force-static";

const routes = [
  "",
  "/about",
  "/products",
  ...specialtyPages.map((s) => s.href),
  "/quality",
  "/research-development",
  "/manufacturing",
  "/contact",
  "/privacy",
];

// lastModified is omitted on purpose: a build-time date would change on every deploy and teach search engines to ignore it.
export default function sitemap() {
  return routes.map((path) => ({ url: `${SITE_URL}${path}` }));
}
