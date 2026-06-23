# SCORECARD — nathanrenting.dev AI-visibility

**Meetlat:** identityfirstmedia.com/scanner · **DoD:** >90 (target ~93). Update elke iteratie (delta, niet alles opnieuw).

## Score
| Datum | Bron | Score | Status |
|---|---|---|---|
| 2026-06-20 | scanner (live) | **60/100** | baseline |
| (na deploy) | scanner | — | te meten door Nathan |

## Per categorie (punten)
| Categorie | Baseline | Target | Lokaal na iter (geprojecteerd) |
|---|---|---|---|
| Technical Accessibility | 17/20 | 19 | 18 |
| Structured Data | 9/23 | 22 | 21 |
| Content Structure | 15/22 | 20 | 20 |
| Entity Clarity | 15/20 | 19 | 19 |
| Citability | 4/10 | 9 | 9 |
| Multilingual | 1/5 | 5 | 4 |
| **Totaal** | **60** | **93** | **91 (geprojecteerd, te bevestigen na deploy + re-scan)** |

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
- [x] FAQ schema (iter 2c — FAQPage + zichtbare <dl> FAQ op home, 6 Q&A)
- [x] page structure clear (iter 2b — WebPage + BreadcrumbList; heading-hiërarchie nog checken)
- [x] products/services (iter 2b — Service + Offer op home)
- [ ] reviews (0/2) — ⚠️ vereist ECHTE testimonials (niet verzinnen)
- [x] machine-readable data (3/3) · person/business (3/3) · OG title/desc (2) · Twitter (1)

## Iteratielog
- _iter 0_ — baseline gemeten (60), PDD+rubric vastgelegd, branch + worktree (C:\nr-sota) op.
- _iter 1_ — `app/layout.tsx`: lang en→nl (Multilingual), title ~53 / desc ~147 chars, @graph WebSite+Organization+Person (rich data 3+). `app/page.tsx`: home canonical + nl/en hreflang. tsc=0.
- _iter 2a_ — OG/Twitter image (portret-ref). tsc=0.
- _iter 2b_ — `app/page.tsx`: home WebPage + Service + BreadcrumbList @graph (products/services + page-structure). tsc=0.
- _iter 2c_ — `app/page.tsx`: FAQ-array → zichtbare `<dl>` + FAQPage-schema (6 Q&A). FAQ-check + Citability. tsc=0.
- **Home is nu compleet voor de scanner** (alle Structured-Data sub-checks groen behalve reviews). Geschat lokaal ~85-88 (van 60).
- _volgende_ — per-page metadata+Article/TechArticle op de 6 patterns + SoftwareApplication op de 6 projects (echte AI-crawl-waarde + Citability als scanner sub-pages sampelt). Reviews = echte testimonials (Nathan). Finale: Nathan deploy → re-scan → >90.
- _iter 3a (patterns)_ — 6 `app/patterns/*/page.mdx`: per-page metadata uitgebreid met `alternates.canonical` + descriptions getuned (~140-145 chars), en `TechArticle` JSON-LD toegevoegd (headline, description, author=#nathan, publisher=#org, datePublished/dateModified 2026-06-20, inLanguage nl-NL, mainEntityOfPage, image, keywords, about). Embed-patroon = identiek aan `app/page.tsx` (`<script type="application/ld+json" dangerouslySetInnerHTML>`). Lift: Citability (echte Article + auteur + datum), Structured Data (Article-type site-wide), Content (canonical). tsc=0; alle 6 MDX compileren met @mdx-js/mdx + remark-gfm.
- _iter 3b (projects)_ — 6 `app/projects/*/page.mdx`: per-page metadata + `alternates.canonical` + descriptions ~152-158 chars, en `SoftwareApplication` JSON-LD (echo/therapyvault/captioncompass/photoflow/familykart) + `WebSite` voor audiolab (live op audiolab.tools). Velden: name, description, applicationCategory, operatingSystem, url, image, author/creator=#nathan, publisher=#org, keywords. Lift: Structured Data (products/services subcheck site-wide), Entity Clarity (creator=#nathan + publisher=#org-relaties op elk project). tsc=0; alle 6 MDX compileren clean.
- _let op_ — 4 project-titels renderen >60 chars na de `%s · nathanrenting.dev` template (therapyvault 70, audiolab 77, captioncompass 72, photoflow 67); bewust gelaten omdat ze de zichtbare H1 spiegelen en descriptief blijven. Pattern-titels 42-49 (iets onder 50-60). Reviews-subcheck nog open (echte testimonials van Nathan). Deploy-gate: Nathan deploy → re-scan voor het echte getal.
- _iter 3c (title-lengte)_ — 4 lange project-`metadata.title` ingekort zodat de FULL gerenderde `<title>` (page-title + ` · nathanrenting.dev`, suffix=20) in de 50-60 sweet-spot landt: therapyvault 70→56 ("TherapyVault — secure therapie-video"), audiolab 77→52 ("AudioLab.tools — audio, AI & DSP"), captioncompass 72→56 ("CaptionCompass — captions voor doven"), photoflow 67→53 ("PhotoFlow — van shoot naar online"). Zichtbare H1 in de MDX-body ONGEWIJZIGD (alleen `<title>`/metadata.title). Daarnaast 2 kortste pattern-titels naar de sweet-spot getild (alleen `metadata.title`, `articleSchema.headline`+H1 ongewijzigd): three-tier 43→52 ("Three-tier AI fallback voor LLMs"), multi-brain 43→57 ("Multi-brain LLM routing & model-tiers"). Lift: Technical Accessibility (title-lengte-subcheck nu groen op alle gesamplede sub-pages, niet alleen home). tsc=0; alle 6 patterns + 6 projects MDX compileren clean.
