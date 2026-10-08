import "./globals.css";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { contact } from "@/data/contact";

const description =
  "Aspen Pharmaceuticals develops responsible pharmaceutical solutions for essential healthcare needs across North India.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Aspen Pharmaceuticals | Driven by science, inspired by life",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Aspen Pharmaceuticals" }],
    siteName: SITE_NAME,
    title: "Aspen Pharmaceuticals | Driven by science, inspired by life",
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: "Aspen Pharmaceuticals",
    description,
  },
};

export const viewport = {
  themeColor: "#082840",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aspen Pharmaceuticals Pvt. Ltd.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-dark.svg`,
  description,
  foundingDate: "2010",
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Site-2, Loni Rd, Block A, Industrial Area, Sahibabad",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201007",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preload" href="/fonts/dm-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/manrope-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
        {children}
      </body>
    </html>
  );
}
