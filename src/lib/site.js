/** Canonical site URL. Set NEXT_PUBLIC_SITE_URL in production; the fallback is a default. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aspenpharmaceuticals.com";
export const SITE_NAME = "Aspen Pharmaceuticals";
export const LEGAL_NAME = "Aspen Pharmaceuticals Pvt. Ltd.";
/** The seven states Aspen serves (matches the Reach section). */
export const SERVED_STATES = [
  "Delhi",
  "Uttar Pradesh",
  "Punjab",
  "Haryana",
  "Himachal Pradesh",
  "Uttarakhand",
  "Rajasthan",
];
