import "./globals.css";
import "./pharma-theme.css";
import { SITE_NAME, SITE_URL, LEGAL_NAME, SERVED_STATES } from "@/lib/site";
import JsonLd from "@/components/ui/JsonLd";
import { contact } from "@/data/contact";

const description =
  "Aspen Pharmaceuticals, established in 2010, serves healthcare professionals across North India with a portfolio of finished dosage forms.";
const homeTitle =
  "Aspen Pharmaceuticals | Medicines for healthcare professionals, North India";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: homeTitle,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aspen Pharmaceuticals – Driven by science, inspired by life",
      },
    ],
    siteName: SITE_NAME,
    title: homeTitle,
    description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
    title: homeTitle,
    description,
  },
};

export const viewport = {
  themeColor: "#082840",
};

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: LEGAL_NAME,
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description,
  foundingDate: "2010",
  email: contact.email,
  telephone: "+918447391385",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Site-2, Loni Rd, Block A, Industrial Area, Sahibabad",
    addressLocality: "Ghaziabad",
    addressRegion: "Uttar Pradesh",
    postalCode: "201007",
    addressCountry: "IN",
  },
  areaServed: SERVED_STATES.map((name) => ({ "@type": "State", name })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+918447391385",
    email: contact.email,
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "17:00",
    },
  },
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <head>
        <link
          rel="preload"
          href="/fonts/dm-sans-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/manrope-latin-wght-normal.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <JsonLd data={organization} />
        <JsonLd data={website} />
        {children}
      </body>
    </html>
  );
}
