# Instrukcja — publikacja na GitHub Pages

Wykonaj poniższe kroki po kolei. Każdy krok jest oznaczony checkboxem — odhaczaj po wykonaniu.

---

## Krok 1 — Utwórz repo na GitHub

- [ ] Wejdź na https://github.com/new
- [ ] Wpisz nazwę repo, np. `addpattern-site`
  - Jeśli chcesz adres `https://Midnajt.github.io/` (bez /repo), nazwij repo **`Midnajt.github.io`**
  - Jeśli chcesz adres `https://Midnajt.github.io/addpattern-site/`, użyj dowolnej nazwy
- [ ] Ustaw widoczność: **Public** (GitHub Pages działa tylko na public dla kont darmowych)
- [ ] **Nie zaznaczaj** "Initialize with README" — repo musi być puste
- [ ] Kliknij **Create repository**
- [ ] Skopiuj URL repo, np. `https://github.com/Midnajt/addpattern-site.git`

---

## Krok 2 — Ustaw `base` w Vite

Otwórz plik `vite.config.ts` i zmień `base` zgodnie z typem repo:

**Wariant A — project page** (adres: `https://Midnajt.github.io/addpattern-site/`):
```ts
base: '/addpattern-site/',
```

**Wariant B — user page** (repo nazywa się `Midnajt.github.io`, adres: `https://Midnajt.github.io/`):
```ts
base: '/',
```

- [ ] Zmieniono `base` w `vite.config.ts`

---

## Krok 3 — Wypchnij kod do GitHub

Uruchom w terminalu w folderze projektu (`c:\Users\CP24\Desktop\Projekty\AP`):

```powershell
git add .
git commit -m "Initial release — AddPattern site"
git remote add origin https://github.com/Midnajt/NAZWA-REPO.git
git branch -M main
git push -u origin main
```

- [ ] Kod wysłany do GitHub

---

## Krok 4 — Włącz GitHub Pages

- [ ] Wejdź na stronę repo na GitHub
- [ ] Kliknij **Settings** → **Pages** (lewy panel)
- [ ] W sekcji **Build and deployment** → Source → wybierz **GitHub Actions**
- [ ] Zapisz

---

## Krok 5 — Poczekaj na deploy

- [ ] Wejdź w zakładkę **Actions** repo
- [ ] Zobaczysz workflow `Deploy to GitHub Pages` — poczekaj aż zmieni status na ✅
- [ ] Czas deployu: zwykle 1–3 minuty

---

## Krok 6 — Sprawdź stronę

- [ ] Otwórz URL podany w Settings → Pages (np. `https://Midnajt.github.io/addpattern-site/`)
- [ ] Zweryfikuj:
  - [ ] Strona główna ładuje się poprawnie
  - [ ] Logo i zdjęcia są widoczne
  - [ ] Link `/#/dla-devow` otwiera stronę dla devów
  - [ ] Przełącznik PL / EN działa
  - [ ] Przycisk "Napisz do mnie" otwiera klienta e-mail

---

## Krok 7 (opcjonalnie) — Własna domena

Gdy wybierzesz domenę (np. `addpattern.pl`):

- [ ] W panelu DNS dostawcy domeny dodaj rekord:
  ```
  Typ: CNAME
  Nazwa: www
  Wartość: Midnajt.github.io
  ```
- [ ] Utwórz plik `public/CNAME` z jedną linią:
  ```
  addpattern.pl
  ```
- [ ] W `vite.config.ts` ustaw `base: '/'`
- [ ] W Settings → Pages wpisz domenę w polu **Custom domain** i kliknij Save
- [ ] Zaznacz **Enforce HTTPS** (pojawi się po propagacji DNS, może zająć do 24h)
- [ ] Zaktualizuj `public/robots.txt` i `public/sitemap.xml` — wpisz nowy adres domeny
- [ ] Zrób nowy commit i push — workflow deploye automatycznie

---

## Krok 8 — Po publikacji

Sprawdź `TODO.md` w folderze projektu — jest tam lista zadań na kolejne etapy:
screenshoty portfolio, formularz kontaktowy, Google Analytics, SEO, numer telefonu i inne.

---

## Szybka ściągawka — ponowny deploy

Każdy `git push` na branch `main` automatycznie uruchamia deploy przez GitHub Actions.
Nie musisz nic robić ręcznie — wystarczy wypchnąć zmiany.

```powershell
git add .
git commit -m "opis zmiany"
git push
```
