import NextLink from "next/link";

/**
 * next/link with background prefetching switched off by default.
 * On Cloudflare Workers every prefetch is a Worker invocation, so prefetching every
 * visible link multiplies CPU use and trips the free-plan limit. Pass prefetch to override.
 */
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
