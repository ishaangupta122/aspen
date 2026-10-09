/** @type {import('next').NextConfig} */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  // Tells browsers to always use HTTPS for this domain (ignored on plain-HTTP localhost).
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Hide the dev-only Next.js bubble so review screenshots show the site itself.
  devIndicators: false,
  async redirects() {
    // Specialties merged into others or folded into "All products".
    return [
      { source: "/products/neurosurgery", destination: "/products/neurology", permanent: true },
      { source: "/products/sexology", destination: "/products/urology-andrology", permanent: true },
      { source: "/products/general-medicine", destination: "/products", permanent: true },
      { source: "/products/haematology", destination: "/products", permanent: true },
    ];
  },
  async rewrites() {
    // Browsers and crawlers request /favicon.ico directly; the file lives with the other images.
    return [{ source: "/favicon.ico", destination: "/images/favicon.ico" }];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
