// Downloads the site's images into public/images (skips files that already exist).
// Runs automatically before `npm run dev` and `npm run build`; run manually with `npm run images`.
// Never fails the build: if a download fails, a warning is printed and the site still starts.
import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";

const manifest = JSON.parse(readFileSync(process.argv[2] || new URL("./images.json", import.meta.url), "utf8"));
const todo = manifest.filter((m) => {
  const p = join("public/images", m.file);
  return !(existsSync(p) && statSync(p).size > 0);
});

if (todo.length === 0) {
  console.log(`[images] all ${manifest.length} images present.`);
  process.exit(0);
}
console.log(`[images] downloading ${todo.length} of ${manifest.length} images...`);

async function download({ file, url }) {
  const out = join("public/images", file);
  mkdirSync(dirname(out), { recursive: true });
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (aspen-site image fetch)" }, redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 500) throw new Error("empty response");
      writeFileSync(out, buf);
      return null;
    } catch (err) {
      if (attempt === 3) {
        rmSync(out, { force: true });
        return `${file} (${err.message})`;
      }
    }
  }
}

const failed = [];
const queue = [...todo];
await Promise.all(
  Array.from({ length: 6 }, async () => {
    while (queue.length) {
      const err = await download(queue.shift());
      if (err) failed.push(err);
    }
  }),
);

console.log(`[images] downloaded ${todo.length - failed.length}, failed ${failed.length}.`);
failed.forEach((f) => console.warn("[images]   FAILED " + f));
process.exit(0);
