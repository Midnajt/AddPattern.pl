# AddPattern — Podsumowanie prac (sesja 11.08.2026)

## Cel projektu

Dwujęzyczna (PL/EN) strona firmowa **AddPattern · Marcin Krzysztoszek** skierowana do:
- **klientów biznesowych** szukających wykonawcy strony internetowej
- **rekruterów i partnerów technicznych** (zakładka `/dla-devow`)

Strona gotowa do opublikowania na GitHub Pages pod adresem:
`https://midnajt.github.io/AddPattern.github.io/`

---

## Stack technologiczny

| Technologia | Wersja | Rola |
|---|---|---|
| Vite | 6.x | bundler / dev server |
| React | 18.x | framework UI |
| TypeScript | 5.8 | statyczne typowanie |
| Tailwind CSS | 3.4 | stylowanie (utility-first) |
| Framer Motion | 11.x | animacje i przejścia |
| React Router | 6.x | routing (HashRouter) |
| react-i18next + i18next | 15.x / 25.x | i18n PL / EN |
| react-helmet-async | 2.x | SEO meta tags |
| gh-pages | 6.x | deploy helper |
| GitHub Actions | — | CI/CD → GitHub Pages |

---

## Architektura

```
src/
  components/
    Navbar.tsx            fixed nav, logo, hamburger mobile, PL|EN switch
    Footer.tsx            logo, e-mail, copyright
    LanguageSwitch.tsx    toggle PL / EN (zapisuje w localStorage)
  sections/
    Hero.tsx              pełnoekranowy hero z pc.jpg + mocne animacje
    Offer.tsx             4 karty usług + lista extras + duże logo marki
    Portfolio.tsx         4 projekty ze stockowymi zdjęciami + hover overlay
    Process.tsx           4 kroki współpracy w siatce
    Contact.tsx           pełnoekranowe tło warsaw-sunset + CTA mailto
  pages/
    HomePage.tsx          / — strona klientów
    ForDevsPage.tsx       /dla-devow — profil dewelopera
  i18n/
    i18n.ts               konfiguracja react-i18next + language detector
    locales/pl.json       wszystkie teksty PL
    locales/en.json       wszystkie teksty EN
  index.css               CSS tokeny AddPattern + Tailwind directives
  main.tsx, App.tsx, vite-env.d.ts
public/
  assets/                 zdjęcia stockowe (pc, pc2, flower, mermaid, warsaw-sunset, f1, dart)
  logo.png, logo2.png     pełne logo bez tła
  logo_icon.png           sama ikona (użyta w navbarze)
  avatar.png              zdjęcie profilowe (z docs/test/2.png)
  robots.txt, sitemap.xml
.github/workflows/
  deploy.yml              GitHub Actions — build + deploy na każdy push do main
```

---

## Strony i sekcje

### `/` — dla klientów

| Sekcja | Zawartość |
|---|---|
| **Hero** | Ken Burns na tle `pc.jpg`, badge pulse, headline word-by-word stagger, CTA `mailto:` |
| **Oferta** | Duże logo marki + 4 karty (Landing, Sklep, WordPress, Blog) + pills z usługami dodatkowymi |
| **Portfolio** | 4 realizacje: domweselnyagata.pl, lewandowskipianos.pl, turbofinder20, kwiaciarniawwildze.pl |
| **Proces** | Brief → Projekt → Wdrożenie → Utrzymanie |
| **Kontakt** | Tło `warsaw-sunset.jpg`, zachęta + przycisk `mailto:midnajt0@gmail.com` |

### `/#/dla-devow` — rekrutacja / networking

- Avatar + imię + lokalizacja + opis
- Linki: e-mail, LinkedIn, GitHub
- **Tech Stack:** Frontend / Backend / Bazy danych / Narzędzia / Codzienny workflow (Cursor, VS Code, MySQL Workbench)
- **Doświadczenie:** Cer Motor Sp. z o.o. (6 bulletów) + Własna działalność (4 bulety)
- **Events:** 10xDevs (link do 10xdevs.pl) + Meetup Cursor BRAVE.courses (link LinkedIn)
- **CTA:** "Wyślij mi ofertę" → `mailto:midnajt0@gmail.com`

---

## Animacje (Framer Motion)

| Element | Animacja |
|---|---|
| Navbar | initial slide-in z góry przy ładowaniu |
| Hero background | Ken Burns — scale 1.08 → 1 przez 8s |
| Hero headline | word-by-word stagger (delay 0.06s) + blur filter |
| Wszystkie sekcje | `whileInView` fade + translateY(40px → 0), raz |
| Karty oferty | `whileHover` lift -6px + glow box-shadow |
| Portfolio zdjęcia | `whileHover` scale 1.06 + overlay slide-up |
| CTA przyciski | `whileHover` scale 1.04 + glow, `whileTap` scale 0.97 |
| Mobile menu | `AnimatePresence` fade + slide-down |
| Duże logo w Offer | `whileInView` fade + slide z góry |

---

## i18n

- Dwa pliki JSON: `pl.json` (domyślny) i `en.json`
- Wykrywanie języka: przeglądarka → zapis w `localStorage`
- Przełącznik w navbarze (desktop i mobile)
- 100% tekstów UI przetłumaczone

---

## SEO

- `react-helmet-async` — title + description + og:title/description per route
- `public/robots.txt` — Allow: /
- `public/sitemap.xml` — placeholder (zaktualizować po wyborze domeny)

---

## Deploy

**Konfiguracja:**
- `vite.config.ts` → `base: '/AddPattern.github.io/'`
- `.github/workflows/deploy.yml` → automatyczny build + deploy przy każdym `git push` do `main`
- GitHub Pages → Settings → Pages → Source: **GitHub Actions** ✅ (już ustawione)

**URL po publikacji:**
```
https://midnajt.github.io/AddPattern.github.io/
```

**Najbliższy krok — wypchnięcie kodu:**
```powershell
git add .
git commit -m "Initial release — AddPattern site"
git remote add origin https://github.com/midnajt/AddPattern.github.io.git
git branch -M main
git push -u origin main
```

---

## Iteracje w sesji

| # | Zmiana |
|---|---|
| 1 | Scaffold Vite + React + TS + Tailwind + Framer Motion + React Router + react-i18next |
| 2 | Design system z docs.md (CSS tokeny, fonty Sora + DM Sans, gradient marki) |
| 3 | Wszystkie sekcje strony głównej + `/dla-devow` + i18n PL/EN |
| 4 | SEO, robots.txt, sitemap, GitHub Actions workflow, README, TODO.md |
| 5 | Usunięcie podwójnego logo z navbara |
| 6 | Podmiana logo nav na `logo_icon.png`, powiększenie do h-14 |
| 7 | Duże logo `logo.png` w sekcji Oferta (wycentrowane, animowane) |
| 8 | Usunięcie obrazków F1/dart z `/dla-devow` |
| 9 | Dodanie Cursor, VS Code, MySQL Workbench do "Codzienny workflow" |
| 10 | Usunięcie wzmianek o nauce TS/Next.js |
| 11 | Rozbudowa Cer Motor o Dashboard i WMS; usunięcie "Junior IT Specialist" |
| 12 | Dodanie Własna działalność jako osobnego wpisu doświadczenia |
| 13 | Zmiana "Szkolenia" → "Events" + linki do 10xdevs i BRAVE.courses |
| 14 | Informacja o meetupach w opisie "O mnie" |
| 15 | .gitignore + usunięcie node_modules i dist z git index |
| 16 | README zaktualizowany pod GitHub (opis, tech stack, wzmianka o Cursor) |
| 17 | Poprawka `base` w vite.config.ts → `/AddPattern.github.io/` (project page) |
| 18 | Raport i instrukcja publikacji w `.cursor/report/` |

---

## Wynik buildu (ostatni)

```
✓ 427 modules transformed
dist/index.html          0.86 kB
dist/assets/index.css   ~20.5 kB
dist/assets/index.js    ~386 kB
✓ 0 błędów TypeScript
```

---

## Pliki konfiguracyjne

| Plik | Opis |
|---|---|
| `vite.config.ts` | `base: '/AddPattern.github.io/'` |
| `tailwind.config.js` | tokeny kolorów, fontów, gradientu i glow marki |
| `postcss.config.js` | tailwind + autoprefixer |
| `tsconfig.app.json` | strict TypeScript dla src/ |
| `tsconfig.node.json` | TypeScript dla vite.config.ts |
| `eslint.config.js` | ESLint + TypeScript + React hooks |
| `.gitignore` | node_modules/, dist/, .env, logi |
| `.github/workflows/deploy.yml` | CI/CD na GitHub Actions |

---

## Dalsze kroki

Pełna lista → [`TODO.md`](../../TODO.md)  
Instrukcja publikacji → [`todo-github-pages.md`](todo-github-pages.md)
