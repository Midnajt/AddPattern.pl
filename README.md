# AddPattern — strona firmowa

> Strona portfolio i ofertowa firmy **AddPattern · Marcin Krzysztoszek**  
> Tworzę nowoczesne strony internetowe dla małych i średnich firm — od projektu po domenę, hosting, reklamy i analitykę.

🔗 **Live:** *(zostanie uzupełnione po publikacji)*

---

## O projekcie

Dwujęzyczna (PL/EN) strona wizytówkowa skierowana do klientów biznesowych oraz rekruterów/partnerów technicznych. Zbudowana jako SPA z routingiem po stronie klienta i deployem na GitHub Pages.

### Strony

| Ścieżka | Opis |
|---|---|
| `/` | Strona główna — oferta, portfolio, proces, kontakt |
| `/#/dla-devow` | Profil dewelopera — CV, tech stack, doświadczenie, events |

### Sekcje strony głównej

- **Hero** — pełnoekranowy, animowany nagłówek z CTA
- **Oferta** — Landing Page, Sklep, WordPress, Blog + usługi dodatkowe (hosting, domeny, Google Ads, raporty)
- **Portfolio** — 4 zrealizowane projekty z linkami
- **Proces** — 4 kroki współpracy: Brief → Projekt → Wdrożenie → Utrzymanie
- **Kontakt** — mailto CTA

---

## Tech Stack

| Technologia | Rola |
|---|---|
| [React 18](https://react.dev/) | framework UI |
| [TypeScript](https://www.typescriptlang.org/) | statyczne typowanie |
| [Vite](https://vitejs.dev/) | bundler i dev server |
| [Tailwind CSS v3](https://tailwindcss.com/) | stylowanie (utility-first) |
| [Framer Motion](https://www.framer.com/motion/) | animacje i przejścia |
| [React Router v6](https://reactrouter.com/) | routing (HashRouter) |
| [react-i18next](https://react.i18next.com/) | internacjonalizacja PL / EN |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | SEO meta tags |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD → GitHub Pages |

---

## Szybki start

```bash
npm install
npm run dev
```

Otwórz `http://localhost:5173`.

---

## Build produkcyjny

```bash
npm run build     # generuje folder dist/
npm run preview   # lokalne podejrzenie buildu
```

---

## Deploy — GitHub Pages

Szczegółowa instrukcja krok po kroku znajduje się w [`.cursor/report/todo-github-pages.md`](.cursor/report/todo-github-pages.md).

**Skrót:**

1. Utwórz repo na GitHub (Public)
2. Ustaw `base` w `vite.config.ts` (`'/'` lub `'/nazwa-repo/'`)
3. Wypchnij kod na branch `main`
4. W Settings → Pages → Source → **GitHub Actions**
5. Każdy kolejny `git push` deploye automatycznie

---

## Struktura projektu

```
src/
  components/     Navbar, Footer, LanguageSwitch
  sections/       Hero, Offer, Portfolio, Process, Contact
  pages/          HomePage, ForDevsPage
  i18n/           i18n.ts + locales/pl.json + locales/en.json
  index.css       tokeny CSS AddPattern + Tailwind directives
public/
  assets/         zdjęcia stockowe
  logo*.png       logo bez tła
  avatar.png      zdjęcie profilowe
  robots.txt, sitemap.xml
.github/
  workflows/
    deploy.yml    GitHub Actions CI/CD
```

---

## Aktualizacja treści

Wszystkie teksty są w plikach i18n:
- `src/i18n/locales/pl.json` — wersja polska
- `src/i18n/locales/en.json` — wersja angielska

Screenshoty portfolio → `public/assets/` (aktualnie stockowe zdjęcia, do podmiany).

---

## Design System

Projekt korzysta z design systemu **AddPattern** zdefiniowanego w `docs/docs.md`:

- **Motyw:** ciemny (`#09090B` background)
- **Gradient marki:** `#32D6D1 → #3E8EFF → #7B5CFF → #D87AFB`
- **Fonty:** Sora (nagłówki) + DM Sans (body)
- **Inspiracje:** Linear, Vercel, Raycast

---

## Narzędzia

Projekt został stworzony z wykorzystaniem **[Cursor](https://cursor.com)** — edytora kodu z wbudowanym AI, który przyspieszył projektowanie architektury, generowanie komponentów i iterowanie nad UI.

---

## Dalsze kroki

Lista zadań powykonawczych → [`TODO.md`](TODO.md)
