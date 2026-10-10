import NextLink from "next/link";

// next/link with prefetch off by default: on Cloudflare Workers every prefetch is a Worker invocation and trips the free-plan CPU limit.
export default function Link({ prefetch = false, ...props }) {
  return <NextLink prefetch={prefetch} {...props} />;
}
