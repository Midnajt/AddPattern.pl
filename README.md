# AddPattern — strona firmowa

> Strona portfolio i ofertowa firmy **AddPattern · Marcin Krzysztoszek**  
> Tworzę nowoczesne strony internetowe dla małych i średnich firm — od projektu po domenę, hosting, reklamy i analitykę.

🔗 **Live:** [https://addpattern.pl](https://addpattern.pl)  
☁️ **Hosting:** OVHcloud (domena + hosting, katalog `www`)

---

## O projekcie

Dwujęzyczna (PL/EN) strona wizytówkowa skierowana do klientów biznesowych oraz rekruterów/partnerów technicznych. Zbudowana jako SPA z routingiem po stronie klienta. Produkcyjnie hostowana na **OVHcloud** pod adresem **[addpattern.pl](https://addpattern.pl)**.

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
| OVHcloud | hosting produkcyjny + domena `addpattern.pl` |

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

## Deploy

Ten sam kod idzie w dwa miejsca — **różne buildy**, bo inna jest ścieżka assetów.

| Gdzie | Jak | Adres |
|---|---|---|
| **Produkcja (OVH / FTP)** | lokalnie `npm run build` → wgraj `dist/` | [https://addpattern.pl](https://addpattern.pl) |
| **Podgląd (GitHub Pages)** | `git push` na `main` | [https://Midnajt.github.io/AddPattern.github.io/](https://Midnajt.github.io/AddPattern.github.io/) |

Lokalnie `npm run build` zostawia `base: '/'`. GitHub Actions woła `npm run build:pages`, które nadpisuje ścieżkę na `/AddPattern.github.io/`.

### OVHcloud / FTP (`addpattern.pl`)

1. Zbuduj projekt: `npm run build` (do `dist/` trafia też `.htaccess` — wymusza HTTPS)
2. Wgraj **zawartość** folderu `dist/` przez FTP do katalogu `www` na hostingu OVH
3. Sprawdź stronę pod [https://addpattern.pl](https://addpattern.pl)

Nie wrzucaj na FTP buildu z GitHub Actions — ten ma inne ścieżki plików.

### GitHub Pages (`git push`)

Każdy push na `main` uruchamia [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**Jednorazowo** w repo na GitHubie: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

Potem wystarczy:

```bash
git add .
git commit -m "opis zmiany"
git push
```

Po 1–3 minutach strona jest pod [https://Midnajt.github.io/AddPattern.github.io/](https://Midnajt.github.io/AddPattern.github.io/).

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
