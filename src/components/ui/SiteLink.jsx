import NextLink from "next/link";

// Pages are static files, so Next's default viewport prefetch is cheap and makes clicks instant.
export default function Link(props) {
  return <NextLink {...props} />;
}
