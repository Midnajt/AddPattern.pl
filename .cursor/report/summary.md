# AddPattern — Podsumowanie prac (sesja 11.08.2026)

## Co zostało zbudowane

Kompletna strona firmowa **AddPattern · Marcin Krzysztoszek** gotowa do opublikowania na GitHub Pages.

---

## Stack technologiczny

| Technologia | Wersja | Rola |
|---|---|---|
| Vite | 6.x | bundler / dev server |
| React | 18.x | framework UI |
| TypeScript | 5.8 | typowanie |
| Tailwind CSS | 3.4 | style |
| Framer Motion | 11.x | animacje |
| React Router | 6.x | routing (HashRouter) |
| react-i18next | 15.x | i18n PL / EN |
| react-helmet-async | 2.x | SEO meta tags |
| gh-pages | 6.x | deploy helper |

---

## Struktura projektu

```
src/
  components/
    Navbar.tsx          — fixed nav, logo, linki, hamburger mobile, PL|EN switch
    Footer.tsx          — stopka z logo, e-mail, copyright
    LanguageSwitch.tsx  — przełącznik języka PL / EN
  sections/
    Hero.tsx            — pełnoekranowy hero z pc.jpg, word-by-word stagger
    Offer.tsx           — 4 karty usług + extra lista, duże logo marki
    Portfolio.tsx       — 4 projekty z hover overlay i stockowymi zdjęciami
    Process.tsx         — 4 kroki współpracy w siatce
    Contact.tsx         — sekcja z warsaw-sunset.jpg i CTA mailto
  pages/
    HomePage.tsx        — / (klienci)
    ForDevsPage.tsx     — /dla-devow (rekrutacja / networking)
  i18n/
    i18n.ts             — konfiguracja react-i18next
    locales/pl.json     — wszystkie teksty PL
    locales/en.json     — wszystkie teksty EN
  index.css             — CSS tokeny marki + Tailwind
  main.tsx, App.tsx, vite-env.d.ts
public/
  logo.png, logo2.png, logo_icon.png
  avatar.png            — zdjęcie profilowe (docs/test/2.png)
  assets/               — stockowe zdjęcia (pc, flower, mermaid, warsaw-sunset, f1, dart)
  robots.txt, sitemap.xml
.github/workflows/deploy.yml  — GitHub Actions CI/CD
```

---

## Strony i sekcje

### `/` — dla klientów
1. **Hero** — Ken Burns na tle, badge pulse, headline word-by-word z blur, scroll hint
2. **Oferta** — duże logo marki + 4 karty (Landing, Sklep, WordPress, Blog) + extra pills
3. **Portfolio** — 4 realizacje z hover overlay (domweselnyagata, lewandowskipianos, turbofinder, kwiaciarnia)
4. **Proces** — 4 kroki: Brief → Projekt → Wdrożenie → Utrzymanie
5. **Kontakt** — pełnoekranowe tło Warsaw sunset, mailto CTA

### `/dla-devow` — rekrutacja / networking
- Avatar + badge + imię + lokalizacja + opis + linki (e-mail, LinkedIn, GitHub)
- Tech Stack: Frontend / Backend / Bazy danych / Narzędzia / Codzienny workflow (Cursor, VS Code, MySQL Workbench)
- Doświadczenie: Cer Motor (6 bulletów) + Własna działalność (4 bulety)
- Events: 10xDevs (link) + Meetup Cursor BRAVE.courses (link LinkedIn)
- CTA: "Wyślij mi ofertę" → mailto

---

## Animacje (Framer Motion)

| Gdzie | Efekt |
|---|---|
| Hero background | Ken Burns (scale 1.08 → 1, 8s) |
| Hero headline | word-by-word stagger + blur filter |
| Hero scroll hint | pulsujący gradient line |
| Wszystkie sekcje | `whileInView` fade + translateY (raz) |
| Karty oferty | `whileHover` lift + glow box-shadow |
| Portfolio zdjęcia | `whileHover` scale + overlay slide-up |
| CTA przyciski | `whileHover` scale + glow, `whileTap` scale down |
| Navbar | initial slide-in z góry |
| Mobile menu | AnimatePresence fade + slide |

---

## i18n

Wszystkie teksty UI w `src/i18n/locales/pl.json` i `en.json`.
Przełącznik w navbarze — zapisuje wybór w localStorage.

---

## SEO

- `react-helmet-async` — title + description + og:title/description per route
- `public/robots.txt` — Allow: /
- `public/sitemap.xml` — placeholder URLs (zaktualizować po wyborze domeny)

---

## Zmiany iteracyjne w sesji

| Zmiana | Status |
|---|---|
| Usunięcie podwójnego logo w navbarze | ✅ |
| Podmiana logo nav na `logo_icon.png` + rozmiar h-14 | ✅ |
| Duże logo marki w sekcji Oferta (`logo.png`) | ✅ |
| Usunięcie obrazków F1/dart z `/dla-devow` | ✅ |
| Dodanie Cursor, VS Code, MySQL Workbench do stacku | ✅ |
| Usunięcie wzmianek o nauce TS/Next.js | ✅ |
| Rozbudowa Cer Motor (Dashboard, WMS) | ✅ |
| Dodanie Własna działalność jako osobny wpis | ✅ |
| Zmiana "Szkolenia" → "Events" | ✅ |
| Link do 10xdevs.pl i meetupu BRAVE.courses | ✅ |
| Informacja o meetupach w opisie "O mnie" | ✅ |

---

## Build

```
✓ 427 modules transformed
dist/index.html          0.86 kB
dist/assets/index.css   20.52 kB
dist/assets/index.js   386.10 kB
✓ built in 4.43s — 0 błędów TypeScript
```
