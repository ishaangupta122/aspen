import { SITE_NAME } from "@/lib/site";

/** Builds per-page metadata with matching canonical, Open Graph and Twitter data. */
export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: SITE_NAME, locale: "en_IN", title, description, url: path, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: SITE_NAME }] },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}
