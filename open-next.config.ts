import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// The site is fully prerendered with no revalidation. Reading the prerendered output from Workers
// static assets (read-only) keeps CPU per request low, which the Workers Free 10 ms limit needs.
// Do not enable enableCacheInterception here: it writes to the cache, which this one forbids.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
