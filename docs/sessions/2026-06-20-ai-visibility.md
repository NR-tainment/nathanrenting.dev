# Sessie 2026-06-20 — AI-visibility SOTA-loop

**Branch:** `sota/ai-visibility` · **Worktree:** `C:\nr-sota` · **Doel:** >90 op identityfirstmedia.com/scanner.

## Meetlat (Paul Veth's scanner, live gemeten)
Baseline **60/100 "Limited visibility"**. 6 categorieën: Technical 17/20 · **Structured Data 9/23** · Content 15/22 · Entity 15/20 · **Citability 4/10** · **Multilingual 1/5**. Target ~93.
Structured Data ❌-checks: FAQ, page-structure, products/services, reviews, OG-image, title-len, desc-len, canonical, hreflang, rich-data-3types. (Volledig in PDD.md.)

## Gedaan deze sessie (tsc=0, op branch, UNMERGED)
- **iter 1** `app/layout.tsx`: `lang` en→**nl** (fixt "biggest risk" Multilingual) · title ~53 / description ~147 chars (lengte-checks) · JSON-LD herstructureerd naar **@graph: WebSite + Organization + Person** (rich-data 3+ types, sterkere entity-graph). `app/page.tsx`: home **canonical** + **nl/en hreflang** (unique-URL + language-versions-linked).
- **iter 2a**: OG/Twitter **image** (portret-ref; banks de check — upgrade naar branded 1200×630 OG via next/og optioneel).

## Resterend (volgorde, hoogste punt eerst)
1. **Home** (scanner scoort de home-URL): `FAQPage` + zichtbare FAQ-sectie (+2) · `Service`-schema (+1) · `WebPage`+`BreadcrumbList` page-structure (+2).
2. **Per-page** (echte AI-crawl-waarde via sitemap): `metadata` (title/desc/canonical) + `Article`/`TechArticle`+datePublished/author op de 6 `patterns/`; `SoftwareApplication` op de 6 `projects/`. Citability + Content Structure.
3. **Reviews** (+2): ⚠️ vereist **echte testimonials** — NIET verzinnen. Nathan aanleveren (bv. LinkedIn-aanbevelingen) → dan Review/AggregateRating.
4. **Finale meting**: Nathan **deploy** (Vercel) → re-scan → bevestig >90. (Agent deployt niet.)

## Constraints
Next 16.2.7 (breaking — repo-conventies spiegelen) · branch-only, live site ongemoeid · geen deploy · license-clean assets.
