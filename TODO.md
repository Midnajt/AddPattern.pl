# TODO — AddPattern site · prace po pierwszej publikacji

Posortowane według priorytetu. Punkty oznaczone `[v2]` to zmiany w zakresie treści lub funkcji;
`[tech]` to ulepszenia techniczne; `[seo]` to SEO / analityka.

---

## Priorytet wysoki

- [ ] **Własna domena** — zakup domeny (np. addpattern.pl), konfiguracja CNAME w GitHub Pages, aktualizacja `public/CNAME`, `robots.txt` i `sitemap.xml` [v2]
- [ ] **Screenshoty portfolio** — podmień stockowe zdjęcia (`public/assets/`) na prawdziwe screenshoty realizacji; zaktualizuj opisy projektów w `pl.json` / `en.json` [v2]
- [ ] **Numer telefonu** — dodaj w `pl.json` / `en.json` (kontakt w sekcji Contact i Navbar), odblokuj wyświetlanie w `Contact.tsx` i `Footer.tsx` [v2]
- [ ] **Formularz kontaktowy** — zastąp `mailto:` prawdziwym formularzem; opcje: Formspree (szybko, bez backendu), Resend + edge function, własny Node backend [tech]

---

## SEO i analityka

- [ ] **Google Analytics 4** — dodaj GA4 przez `react-ga4` lub bezpośredni tag w `index.html`; skonfiguruj w Google Analytics i wklej Measurement ID [seo]
- [ ] **Google Search Console** — zweryfikuj stronę przez Search Console, wyślij sitemap.xml [seo]
- [ ] **Open Graph images** — wygeneruj og:image (1200×630) dla strony głównej i `/dla-devow`; dodaj `<meta property="og:image">` w Helmet [seo]
- [ ] **Canonical URL** — po dodaniu domeny dodaj `<link rel="canonical">` per route [seo]
- [ ] **Structured data** — dodaj schema.org `LocalBusiness` / `Person` JSON-LD dla lepszego SEO [seo]

---

## Treść i oferta

- [ ] **Case studies** — pod każdą realizacją w Portfolio dodaj krótki opis: problem → rozwiązanie → efekt [v2]
- [ ] **Cennik / pakiety** — gdy zdecydujesz się na cennik, dodaj sekcję z pakietami (Basic / Pro / Custom) [v2]
- [ ] **Referencje / opinie** — dodaj sekcję z krótkimi cytatami od klientów [v2]
- [ ] **Calendly / booking** — dodaj link lub widget do umawiania rozmowy wstępnej [v2]

---

## Techniczne

- [ ] **Optymalizacja obrazów** — przekonwertuj JPG w `public/assets/` do formatu WebP; dodaj `loading="lazy"` i `width`/`height` na `<img>` [tech]
- [ ] **CI: lint + type check** — dodaj krok `npm run lint` i `tsc --noEmit` do workflow GitHub Actions [tech]
- [ ] **Preview deployments** — skonfiguruj preview PR na Netlify lub Vercel (bezpłatny plan) dla testowania przed merge [tech]
- [ ] **BrowserRouter + 404 fallback** — migracja z HashRouter na BrowserRouter po przejściu na własną domenę z możliwością konfiguracji serwera lub Netlify `_redirects` [tech]
- [ ] **Favicon SVG** — zamień PNG favicon na SVG z wariantem dla dark/light mode [tech]
- [ ] **Accessibility audit** — przepuść stronę przez Lighthouse i napraw problemy z contrast ratio i focusable elements [tech]

---

## Przyszłościowe

- [ ] **Blog / Aktualności** — sekcja z wpisami (np. MDX + Vite) do budowania ruchu organicznego
- [ ] **Panel klienta** — prosty panel gdzie klient może zobaczyć raport ruchu lub status prac
- [ ] **Wielojęzyczny routing** — `/en/` zamiast hash-based i18n, lepszy SEO dla EN
