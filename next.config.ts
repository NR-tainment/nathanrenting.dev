import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // GFM enables: tables, strikethrough, autolinks, task-list-items.
    // Tables are the main reason — without remark-gfm, MDX 3 renders
    // `| col | col |` as literal text.
    // Plugin specified as string (module path) so Turbopack can
    // serialize it; function references break the loader.
    remarkPlugins: [["remark-gfm"]],
  },
});

export default withMDX(nextConfig);
