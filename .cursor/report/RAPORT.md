# Raport — Google + płynność

**Projekt:** AddPattern  
**Data:** 4 września 2026  
**Zakres:** `TODO.md` sekcja 1, bez Google Search Console (to robisz Ty).

---

## Podsumowanie

W kodzie domknięte są **4 z 5** punktów: obrazy, czyste URL-e, JSON-LD i poprawki Lighthouse/a11y. Search Console zostaje po Twojej stronie — instrukcja w `GOOGLE-SEARCH-CONSOLE.md`. Sitemap jest już bez hash (`/dla-devow` zamiast `#/dla-devow`).

Cel: lepsze indeksowanie (adresy, schema, mapa witryny) i szybsze, stabilniejsze ładowanie (WebP, lazy-load, wymiary obrazów).

---

## Status

| Punkt | Status | Co weszło |
|---|---|---|
| Optymalizacja obrazów | Zrobione | WebP + `<picture>`, `loading="lazy"`, `width`/`height`; hero i awatar eager (LCP) |
| BrowserRouter + 404 | Zrobione | `/dla-devow`, SPA w `.htaccess`, redirect ze starego `#/`, strona 404 w React |
| Structured data | Zrobione | JSON-LD `ProfessionalService` + `Person` |
| Google Search Console | U Ciebie | Wyślij `sitemap.xml` (już bez `#`) |
| Lighthouse (wydajność + a11y) | Zrobione w kodzie | Kontrast muted, `:focus-visible`, skip-link, `prefers-reduced-motion` |

Build produkcyjny (`tsc` + Vite) przeszedł. Powstało **26 plików WebP**.

---

## 1. Obrazy

- Skrypt `npm run optimize-images` (sharp) konwertuje JPG/PNG/JFIF w `public/` do WebP.
- `og-image.jpg` / `og-image.png` **nie** ruszamy — crawler Messenger/Facebook lepiej czyta JPG.
- Komponent `src/components/Picture.tsx`: `<source type="image/webp">` + fallback na oryginał.
- Hero (`pc.jpg`) i tło `/dla-devow` (`pc2.jpg`): `loading="eager"` + `fetchPriority="high"`.
- Reszta (portfolio, kontakt, karuzela, logo w ofercie): `lazy`.

Ponowna konwersja po dodaniu zdjęć: `npm run optimize-images`.

---

## 2. Routing i SEO adresów

- `HashRouter` → `BrowserRouter` (`src/main.tsx`).
- Canonical / OG: `https://addpattern.pl/dla-devow` (bez hash).
- `public/sitemap.xml`: `/`, `/dla-devow`, `/polityka-cookies`.
- `public/.htaccess`: HTTPS, www → apex, **SPA fallback** (nieznana ścieżka → `index.html`).
- Stare zakładki `#/dla-devow` przekierowuje `LegacyHashRedirect` w `App.tsx`.
- Nieznana ścieżka w React: `NotFoundPage` (`noindex`).
- Przy buildzie kopiowane jest też `dist/404.html` (kopia `index.html`, m.in. pod GitHub Pages).

---

## 3. Structured data

`src/lib/jsonld.ts` + `JsonLd` w Helmet:

- **AddPattern** — `ProfessionalService` (Warszawa, `kontakt@addpattern.pl`, logo, opis).
- **Marcin Krzysztoszek** — `Person` (Web Developer, `/dla-devow`).

Po deployu warto wkleić źródło strony do [validator.schema.org](https://validator.schema.org/).

---

## 4. Lighthouse / dostępność

To, co da się poprawić w kodzie bez audytu na produkcji:

- `--text-muted` / Tailwind `text-muted`: `#A8B0C4` (lepszy kontrast na tle `#09090B`).
- Globalne `:focus-visible` (obwódka brand).
- Skip-link „Przejdź do treści” → `#main-content`.
- `prefers-reduced-motion`: wyłącza długie animacje i smooth scroll.
- Hamburger: `aria-expanded`, `aria-controls`, etykieta PL.
- Menu mobilne: poza home linkuje do `/#sekcja` (wcześniej `scrollTo` nic nie robił).

Pełny wynik Lighthouse dopiero na `addpattern.pl` po wrzuceniu plików.

---

## Pliki

| Plik | Rola |
|---|---|
| `src/main.tsx`, `src/App.tsx` | Router, redirect `#/`, skip-link, 404 |
| `src/components/Picture.tsx` | WebP + lazy + wymiary |
| `src/lib/jsonld.ts` | Schema.org |
| `public/.htaccess` | HTTPS, www, SPA |
| `public/sitemap.xml` | Trzy czyste URL-e |
| `scripts/optimize-images.mjs` | Konwersja WebP |

---

## Co zrobić po wrzuceniu na OVH

1. Wgrać cały `dist` (w tym `.htaccess` i pliki `.webp`).
2. Odświeżyć `https://addpattern.pl/dla-devow` — nie może być 404 Apache.
3. Sprawdzić stary link `https://addpattern.pl/#/dla-devow`.
4. W Search Console wysłać `sitemap.xml` i poprosić o indeks `/` oraz `/dla-devow`.
5. Odpal Lighthouse na produkcji; jeśli coś zostanie — wróć z wynikiem.
