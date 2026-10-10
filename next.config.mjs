/** @type {import('next').NextConfig} */
// Static export: every page is built to plain HTML in out/ and served by Cloudflare assets.
// Redirects and headers live in public/_redirects and public/_headers.
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  poweredByHeader: false,
  devIndicators: false,
  trailingSlash: false,
  images: { unoptimized: true },
  // `next dev` has no /api; forward it to the local Worker (npm run dev:worker). Ignored in the static build.
  ...(process.env.NODE_ENV === "development" && {
    async rewrites() {
      return [{ source: "/api/:path*", destination: "http://localhost:8787/api/:path*" }];
    },
  }),
};

export default nextConfig;
