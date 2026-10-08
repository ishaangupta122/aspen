// Verifies that every /images/... path referenced in src/ exists in public/. Run: npm run check:images
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? walk(p) : /\.(jsx?|css)$/.test(f) ? [p] : [];
  });

const refs = new Set();
for (const file of walk("src")) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/\/images\/[A-Za-z0-9_\-./]+\.(?:jpe?g|png|webp|svg|avif)/g)) refs.add(m[0]);
  // Product photos are built from ids: /images/products/p-${id}.jpg
  if (file.endsWith("catalogue.js")) {
    const rows = readFileSync("src/data/products-data.js", "utf8");
    for (const m of rows.matchAll(/"([0-9a-f]{10})"/g)) refs.add(`/images/products/p-${m[1]}.jpg`);
  }
}
const missing = [...refs].filter((r) => !existsSync(join("public", r)) || statSync(join("public", r)).size === 0);
console.log(`${refs.size} image references checked, ${missing.length} missing.`);
missing.forEach((m) => console.log("  MISSING " + m));
process.exit(missing.length ? 1 : 0);
