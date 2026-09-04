# TODO — AddPattern

Usunięte / zrobione: domena addpattern.pl, GA4, canonical, OG na home, WebP, BrowserRouter, JSON-LD, Lighthouse w kodzie, **Google Search Console**.

Kolejność: najpierw Lighthouse na produkcji, potem treść, potem konwersja i porządki.

---

## Następnym razem

- [ ] **Lighthouse na produkcji** — odpal Lighthouse na addpattern.pl (Performance + Accessibility). Jeśli zostaną uwagi — wróć z wynikiem.

## 1. Google + płynność (zrobione)

- [x] **Optymalizacja obrazów** — WebP + `<picture>`, `loading="lazy"`, `width`/`height`. Ponowna konwersja: `npm run optimize-images`.
- [x] **BrowserRouter + 404 fallback** — czyste URL-e (`/dla-devow`), SPA rewrite w `.htaccess`, stary `#/…` przekierowywany w aplikacji.
- [x] **Structured data** — JSON-LD ProfessionalService + Person.
- [x] **Google Search Console** — usługa dodana, sitemap wysłany. Po wrzuceniu na FTP (czyste URL-e) warto w GSC jeszcze raz sprawdzić mapę i poprosić o indeks `/dla-devow`.
- [x] **Lighthouse (wydajność + a11y)** — jaśniejszy muted, `:focus-visible`, skip-link, `prefers-reduced-motion`, poprawki menu. Po wrzuceniu na produkcję odpal Lighthouse i daj znać, jeśli coś zostanie.

## 2. Treść pod SEO

- [ ] **Case studies w Realizacjach** — krótki opis: problem → rozwiązanie → efekt. Unikalny tekst na stronie = silniejszy sygnał niż same kafelki.
- [ ] **Screenshoty portfolio** — prawdziwe zrzuty zamiast stocku; uzupełnij brakujące pliki w `public/assets/` i opisy w `pl.json` / `en.json`.
- [ ] **Wielojęzyczny routing** — `/en/` zamiast przełącznika i18n w localStorage. Osobne URL-e EN da się indeksować.
- [ ] **Blog / Aktualności** — wpisy (np. MDX + Vite) pod ruch organiczny. Duży wpływ, ale później niż powyższe.

## 3. Konwersja (nie ranking, ale biznes)

- [ ] **Formularz kontaktowy** — zamiast `mailto:`; Formspree albo Resend / własny backend.
- [ ] **Numer telefonu** — `pl.json` / `en.json`, widoczny w Contact, Navbar i Footer.
- [ ] **Referencje / opinie** — krótkie cytaty od klientów (zaufanie + trochę unikalnej treści).
- [ ] **Cennik / pakiety** — Basic / Pro / Custom, gdy będzie decyzja o stawkach.
- [ ] **Calendly / booking** — link lub widget na rozmowę wstępną.

## 4. Porządki techniczne

- [ ] **CI: lint** — dopisz `npm run lint` do GitHub Actions (`tsc` już jest w buildzie).
- [ ] **Preview PR** — Netlify lub Vercel, podgląd przed merge.
- [ ] **OG dla `/dla-devow`** — osobny obraz 1200×630 (strona główna już ma `og-image.jpg`).
- [ ] **Favicon SVG** — zamiast PNG, wariant light/dark.
- [ ] **Panel klienta** — raport ruchu / status prac. Niski priorytet.
