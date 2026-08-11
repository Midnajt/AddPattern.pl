# AddPattern — strona firmowa

Strona portfolio / ofertowa firmy **AddPattern · Marcin Krzysztoszek**.

Tech stack: **Vite + React + TypeScript + Tailwind CSS + Framer Motion + react-i18next**

---

## Szybki start (lokalnie)

```bash
npm install
npm run dev
```

Otwórz `http://localhost:5173`.

---

## Checklista publikacji na GitHub Pages

### 1. Utwórz repo na GitHub
- Wejdź na https://github.com/new
- Nazwa repo np. `addpattern-site` (lub `Midnajt.github.io` dla strony głównej użytkownika)
- Ustaw jako **Public**

### 2. Skonfiguruj `base` w Vite

Otwórz `vite.config.ts`:

- **Project page** (adres: `https://midnajt.github.io/addpattern-site/`):
  ```ts
  base: '/addpattern-site/',
  ```
- **User/org page** (repo musi nazywać się `Midnajt.github.io`, adres: `https://midnajt.github.io/`):
  ```ts
  base: '/',
  ```
- **Własna domena** (po późniejszym dodaniu CNAME):
  ```ts
  base: '/',
  ```

### 3. Wypchnij kod

```bash
git add .
git commit -m "Initial release"
git remote add origin https://github.com/Midnajt/NAZWA-REPO.git
git push -u origin main
```

### 4. Włącz GitHub Pages

W ustawieniach repo:
- Settings → Pages → Source → **GitHub Actions**

Przy pierwszym pushu workflow `.github/workflows/deploy.yml` automatycznie zbuduje i opublikuje stronę.

### 5. Sprawdź stronę

- Otwórz `https://midnajt.github.io/NAZWA-REPO/` (lub `https://midnajt.github.io/` dla user page)
- Zweryfikuj: routing (`/#/dla-devow`), zdjęcia, mailto, przełącznik języka

### 6. (Opcjonalnie) Własna domena

1. Kup domenę (np. addpattern.pl)
2. W DNS dodaj rekord CNAME: `www` → `midnajt.github.io`
3. Utwórz plik `public/CNAME` z treścią `addpattern.pl`
4. W `vite.config.ts` ustaw `base: '/'`
5. W Settings → Pages wpisz domenę custom
6. Zaktualizuj `public/robots.txt` i `public/sitemap.xml`

---

## Build produkcyjny

```bash
npm run build     # generuje folder dist/
npm run preview   # lokalne podejrzenie buildu
```

---

## Struktura projektu

```
src/
  components/     Navbar, Footer, LanguageSwitch
  sections/       Hero, Offer, Portfolio, Process, Contact
  pages/          HomePage, ForDevsPage
  i18n/           i18n.ts + locales/pl.json + locales/en.json
  index.css       tokeny CSS + Tailwind
public/
  assets/         stockowe zdjęcia
  logo*.png       logo bez tła
  avatar.png      zdjęcie profilowe
  robots.txt
  sitemap.xml
.github/workflows/deploy.yml  — GitHub Actions CI/CD
```

---

## Aktualizacja treści

Wszystkie teksty są w plikach i18n:
- **Polski:** `src/i18n/locales/pl.json`
- **Angielski:** `src/i18n/locales/en.json`

Zdjęcia portfolio → `public/assets/` (docelowo podmień stocki na screenshoty projektów).

---

Dalsze kroki po publikacji → [`TODO.md`](TODO.md)
