# PDD — nathanrenting.dev → AI-visibility SOTA (>90)

**Versie:** 1.0 · **Datum:** 2026-06-20 · **Branch:** `sota/ai-visibility`
**Doel:** nathanrenting.dev naar **>90** op Paul Veth's AI-visibility scanner (https://identityfirstmedia.com/scanner) — "hoe vindbaar/citeerbaar is je site voor ChatGPT/Claude/Perplexity/Gemini".

## Meet-realiteit (belangrijk)
De scanner scant een **live URL**. Ik verbeter de code op deze branch; de échte >90-meting vereist **deploy + re-scan** (Nathan's actie — ik deploy niet). Daarom: loop optimaliseert tegen de scanner-rubric hieronder (code-inspecteerbaar); de scanner is de finale verificatie na deploy.

## Baseline (gemeten 2026-06-20, live site) — **60/100 "Limited visibility"**
| Categorie | % | Punten | Gewicht |
|---|---|---|---|
| Technical Accessibility | 85% | 17/20 | sterk |
| **Structured Data** | 39% | 9/23 | grootste hefboom |
| Content Structure | 68% | 15/22 | |
| Entity Clarity | 75% | 15/20 | |
| Citability | 40% | 4/10 | |
| **Multilingual** | 20% | 1/5 | "biggest risk" |

### Structured Data sub-checks (exact, van de scanner)
✅ machine-readable data (3/3) · person/business recognizable (3/3) · OG title (1/1) · OG description (1/1) · Twitter preview (1/1)
❌ FAQ schema (0/2) · page structure clear (0/2) · products/services (0/1) · reviews (0/2) · **OG image (0/2)** · title-lengte (0/1) · description-lengte (0/1) · canonical per page (0/1) · **hreflang language-versions linked (0/1)** · rich data 3+ types (0/1)

## SOTA-bar (research, 2026 — één keer, niet her-researchen)
GEO/AEO = geciteerd worden, niet ranken. Wat telt: AI-crawlers toegestaan (✅ al) · SSR-content (✅ al) · brede **structured data** (Person/Organization/WebSite/Article/SoftwareApplication/Service/FAQPage/BreadcrumbList/Review) · heldere heading-hiërarchie, één topic/sectie · entity-density + E-E-A-T (sameAs, NAP) · versheid (datePublished/Modified) · hreflang voor taalversies · correcte title/description-lengte · OG image. llms.txt: marginaal effect (✅ al aanwezig).

## Scope
**IN:** on-page AI-vindbaarheid — JSON-LD-uitbreiding, per-page metadata (title/description/canonical/OG), hreflang nl↔en, OG-image, FAQ-sectie + FAQPage, Review/testimonial-schema, heading-/semantiek-verbeteringen, dates/author op content, title/description-lengtes.
**UIT/uitgesteld:** content herschrijven, nieuwe pagina's, backend, **Duitse versie** (scanner vereist 'm niet; IFM's eigen upsell), **deploy** (Nathan). Echte assets genereren via betaalde MCP (placeholder/bestaand beeld mag).

## Rubric (de meetlat = de 6 scanner-categorieën)
Score elke iteratie per categorie (0-100% → punten). Targets om >90 te halen (~93):
1. Technical Accessibility 17→19 · 2. **Structured Data 9→22** · 3. Content Structure 15→20 · 4. Entity Clarity 15→19 · 5. Citability 4→9 · 6. Multilingual 1→5. **Totaal ≥ 93.**

## Definition of Done
- Lokaal: alle Structured-Data sub-checks groen (code-geverifieerd), lang+hreflang correct, per-page metadata+canonical compleet, Article-schema+dates+author op alle content, FAQPage live, OG-image gezet, titel/desc-lengtes binnen norm, ≥4 schema-types site-breed.
- Finaal (Nathan): deploy → re-scan → **>90**.
- Convergentie: stop als lokale rubric maxed is en restpunten alleen via deploy/content/Nathan kunnen.

## Constraints
Branch-only (live site ongemoeid) · Next.js **16.2.7** (breaking changes — `node_modules/next/dist/docs/` checken + repo-conventies spiegelen) · geen deploy · license-clean assets · tsc-groen per iteratie.
