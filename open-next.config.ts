import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// The site is statically generated and uses no ISR/revalidation, so the default (no incremental
// cache) setup is enough. Add an R2 incremental cache here only if you later introduce revalidate.
export default defineCloudflareConfig();
