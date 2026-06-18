import type { MetadataRoute } from "next";

/**
 * Sitemap voor zoek-engines en AI-assistants.
 * Next.js serveert dit op /sitemap.xml — gerefereerd in public/robots.txt.
 * Bij toevoegen van een nieuwe page: voeg pad toe aan ROUTES.
 */
const ROUTES: ReadonlyArray<{ path: string; priority?: number; freq?: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "", priority: 1.0, freq: "weekly" },
  { path: "/hire", priority: 0.95, freq: "monthly" },
  { path: "/about", priority: 0.8, freq: "monthly" },
  { path: "/diensten", priority: 0.85, freq: "monthly" },
  { path: "/diensten/ai-agents-bouwen-nederland", priority: 0.8, freq: "monthly" },
  { path: "/en", priority: 0.75, freq: "monthly" },
  { path: "/patterns", priority: 0.7, freq: "monthly" },
  { path: "/patterns/agentskills-implementation", priority: 0.6, freq: "monthly" },
  { path: "/patterns/cross-arch-android", priority: 0.6, freq: "monthly" },
  { path: "/patterns/eu-first-infrastructure", priority: 0.6, freq: "monthly" },
  { path: "/patterns/multi-brain-routing", priority: 0.6, freq: "monthly" },
  { path: "/patterns/real-time-audio-rust", priority: 0.6, freq: "monthly" },
  { path: "/patterns/three-tier-fallback", priority: 0.6, freq: "monthly" },
  { path: "/projects", priority: 0.75, freq: "monthly" },
  { path: "/projects/audiolab", priority: 0.7, freq: "monthly" },
  { path: "/projects/captioncompass", priority: 0.65, freq: "monthly" },
  { path: "/projects/echo", priority: 0.7, freq: "monthly" },
  { path: "/projects/familykart", priority: 0.65, freq: "monthly" },
  { path: "/projects/photoflow", priority: 0.65, freq: "monthly" },
  { path: "/projects/therapyvault", priority: 0.65, freq: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nathanrenting.dev";
  const lastModified = new Date();
  return ROUTES.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: freq,
    priority,
  }));
}
