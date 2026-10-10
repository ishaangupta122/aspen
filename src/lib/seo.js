import { SITE_NAME } from "@/lib/site";

export function pageMetadata({ title, description, path }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_IN",
      title,
      description,
      url: path,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Aspen Pharmaceuticals – Medicines you can depend on",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/og-image.jpg"],
    },
  };
}
