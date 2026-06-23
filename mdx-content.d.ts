// Augment *.mdx modules with the named exports our content files declare.
// The base @types/mdx only types the `default` component; our article MDX also
// exports a `metadata` object (title/description) consumed by the dynamic
// loader pages' generateMetadata. Re-declaring `default` is required because
// this block overrides the base "*.mdx" declaration (see @types/mdx docs).
declare module "*.mdx" {
  import type { MDXProps } from "mdx/types";

  export default function MDXContent(props: MDXProps): JSX.Element;

  export const metadata: {
    title: string;
    description: string;
    [key: string]: unknown;
  };
}
