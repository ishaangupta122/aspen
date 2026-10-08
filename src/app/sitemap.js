import { SITE_URL } from "@/lib/site";

const routes = ["", "/about", "/products", "/quality", "/research-development", "/manufacturing", "/contact"];

export default function sitemap() {
  const lastModified = new Date();
  return routes.map((path) => ({ url: `${SITE_URL}${path}`, lastModified }));
}
