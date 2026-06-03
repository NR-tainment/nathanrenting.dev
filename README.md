# nathanrenting.dev

Personal portfolio site for Nathan Renting (Jonathan David Renting).
Source is open on purpose — the site is a portfolio, transparency about
how it&apos;s built is part of the point.

> Live: [nathanrenting.dev](https://nathanrenting.dev) (deploying)

## Stack

- **Next.js 16** with App Router and Turbopack
- **React 19**
- **Tailwind CSS v4** (CSS-first config)
- **MDX** for pattern writeups and project deep-dives
- **Geist** font family (sans + mono)
- **Vercel** for hosting + CDN + SSL

## Structure

```
app/
├── layout.tsx          Root layout (Header + Footer + fonts + metadata)
├── page.tsx            Home — hero, project cards, patterns grid
├── globals.css         Tailwind v4 + dark theme variables
│
├── about/page.tsx      Personal bio + skills inventory
├── hire/page.tsx       ZZP engagement details + rate + contact
│
├── projects/
│   ├── page.tsx        Work index
│   └── echo/page.mdx   ECHO deep-dive (agent orchestrator)
│
└── patterns/
    ├── page.tsx        Patterns index
    ├── multi-brain-routing/page.mdx
    ├── three-tier-fallback/page.mdx
    ├── real-time-audio-rust/page.mdx
    ├── cross-arch-android/page.mdx
    ├── eu-first-infrastructure/page.mdx
    └── agentskills-implementation/page.mdx

components/
├── Header.tsx          Sticky top nav
├── Footer.tsx          Footer with brand-voice signature
└── ProjectCard.tsx     Card component for project grid

mdx-components.tsx      Typed MDX components with cyan/dark styling
next.config.ts          MDX wiring
```

## Running locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing content

Most content lives in MDX files under `app/patterns/` and `app/projects/`.
Edit a file, save, the dev server reloads. The styled markdown components
(headings, links, code blocks, etc.) live in `mdx-components.tsx`.

## License

MIT. See [LICENSE](LICENSE).

---

*Side effects of reading this source may include: clearer architectures,
fewer round-trips, occasional pride in shipping fast.*
