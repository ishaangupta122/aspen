// Run after `opennextjs-cloudflare build`, before deploy/preview.
// Next.js 16.4 writes .next/server/preview-props.json, but @opennextjs/cloudflare 1.20.x does not
// inline that manifest, so the Worker throws "Unexpected loadManifest(...preview-props.json)" on every
// request. This site never uses Draft/Preview Mode, so a placeholder is safe. Delete this script
// (and its use in package.json) once the adapter handles the file itself.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const file = ".open-next/server-functions/default/handler.mjs";
if (!existsSync(file)) {
  console.error(`[cf-postbuild] ${file} not found. Run "opennextjs-cloudflare build" first.`);
  process.exit(1);
}
const src = readFileSync(file, "utf8");
const marker = "throw new Error(`Unexpected loadManifest";
if (src.includes('endsWith("/server/preview-props.json")')) {
  console.log("[cf-postbuild] already patched.");
} else if (!src.includes(marker)) {
  console.log("[cf-postbuild] adapter no longer needs this patch; nothing to do.");
} else {
  const patch =
    'if(path2.endsWith("/server/preview-props.json"))return{previewModeId:"0".repeat(32),previewModeSigningKey:"0".repeat(64),previewModeEncryptionKey:"0".repeat(64)};';
  writeFileSync(file, src.replace(marker, patch + marker));
  console.log("[cf-postbuild] patched preview-props handling.");
}
