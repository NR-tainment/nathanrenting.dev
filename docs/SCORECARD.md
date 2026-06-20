# SCORECARD — nathanrenting.dev AI-visibility

**Meetlat:** identityfirstmedia.com/scanner · **DoD:** >90 (target ~93). Update elke iteratie (delta, niet alles opnieuw).

## Score
| Datum | Bron | Score | Status |
|---|---|---|---|
| 2026-06-20 | scanner (live) | **60/100** | baseline |
| (na deploy) | scanner | — | te meten door Nathan |

## Per categorie (punten)
| Categorie | Baseline | Target | Lokaal na iter |
|---|---|---|---|
| Technical Accessibility | 17/20 | 19 | 17 |
| Structured Data | 9/23 | 22 | 9 |
| Content Structure | 15/22 | 20 | 15 |
| Entity Clarity | 15/20 | 19 | 15 |
| Citability | 4/10 | 9 | 4 |
| Multilingual | 1/5 | 5 | 1 |
| **Totaal** | **60** | **93** | **60** |

## Structured Data sub-checks (groen-maken)
- [ ] FAQ schema (0/2) — FAQPage op hire/diensten/about
- [ ] page structure clear (0/2) — WebPage/Breadcrumb + heading-hiërarchie
- [ ] products/services (0/1) — Service (diensten) + SoftwareApplication (projects)
- [ ] reviews (0/2) — Review/testimonial-schema
- [x] OG image (iter 2a — portret-ref; upgrade naar branded 1200×630 mogelijk)
- [x] title-lengte (iter 1 — ~53 chars)
- [x] description-lengte (iter 1 — ~147 chars)
- [x] canonical (iter 1 — home; sub-pages nog)
- [x] hreflang language-versions linked (iter 1 — home nl↔en)
- [x] rich data 3+ types (iter 1 — WebSite+Organization+Person @graph)
- [ ] FAQ schema (0/2) — FAQPage + zichtbare FAQ op home
- [ ] page structure clear (0/2) — WebPage/Breadcrumb + heading-hiërarchie
- [ ] products/services (0/1) — Service-schema op home
- [ ] reviews (0/2) — ⚠️ vereist ECHTE testimonials (niet verzinnen)
- [x] machine-readable data (3/3) · person/business (3/3) · OG title/desc (2) · Twitter (1)

## Iteratielog
- _iter 0_ — baseline gemeten (60), PDD+rubric vastgelegd, branch + worktree (C:\nr-sota) op.
- _iter 1_ — `app/layout.tsx`: lang en→nl (Multilingual), title ~53 / desc ~147 chars, @graph WebSite+Organization+Person (rich data 3+). `app/page.tsx`: home canonical + nl/en hreflang. tsc=0.
- _iter 2a_ — OG/Twitter image (portret-ref). tsc=0.
- _volgende_ — home FAQPage+zichtbare FAQ (+2), Service-schema (+1), WebPage/BreadcrumbList (+2); per-page metadata+Article op patterns/projects (Citability/Content + echte crawl-waarde); reviews vereist echte testimonials. Daarna: Nathan deploy → re-scan → >90.
