# Google Search Console — instrukcja dla addpattern.pl

Search Console mówi Google’owi: „to moja strona, oto mapa adresów, pokaż błędy indeksowania”.  
Nie zmienia kodu strony (przy weryfikacji przez DNS). Zajmie ok. 15–20 minut + czekanie na DNS (od kilku minut do 48 h).

Użyj **tego samego konta Google**, na którym masz już GA4 (łatwiej potem połączyć analitykę z GSC).

---

## Krok 1. Wejdź do Search Console

1. Otwórz [https://search.google.com/search-console](https://search.google.com/search-console).
2. Zaloguj się kontem Google.
3. Jeśli pojawi się kreator „Witaj w Search Console” — kliknij **Dodaj usługę** / **Add property**.  
   Jeśli masz już inne strony — w lewym górnym rogu wybierz usługę i **Dodaj usługę**.

---

## Krok 2. Dodaj usługę typu „Domena” (nie prefiks URL)

Na ekranie wyboru są dwie opcje. Wybierz lewą:

| Opcja | Czy brać |
|---|---|
| **Domena** → wpisz `addpattern.pl` | **Tak.** Jedna usługa obejmuje `https://`, `http://`, `www` i bez `www`. |
| Prefiks URL → `https://addpattern.pl` | Nie, chyba że DNS nie przejdzie. Wtedy patrz dodatek na dole. |

1. W polu **Domena** wpisz: `addpattern.pl` (bez `https://` i bez `www`).
2. Kliknij **Dalej** / **Continue**.

Google pokaże rekord **TXT** do wklejenia w DNS, w stylu:

```text
google-site-verification=długi_ciąg_znaków
```

**Nie zamykaj tego okna.** Skopiuj cały rekord (albo samą wartość po `=` — OVH czasem chce samo `google-site-verification=...` jako wartość TXT).

---

## Krok 3. Dodaj rekord TXT w DNS (OVH)

Strona stoi na OVH, więc DNS najpewniej jest tam.

1. Zaloguj się do [OVH Manager](https://www.ovh.com/manager/).
2. Wejdź w **Domeny** → **addpattern.pl** → **Strefa DNS** (czasem: Web Cloud → Domeny → strefa DNS).
3. **Dodaj rekord** typu **TXT**.
4. Ustawienia:
   - **Subdomena** / nazwa: zostaw puste albo wpisz `@` (to oznacza samą domenę `addpattern.pl`).
   - **TTL**: domyślny (np. 3600).
   - **Wartość**: wklej cały ciąg z GSC, np. `google-site-verification=abc123...`
5. Zapisz. OVH może prosić o potwierdzenie zmiany strefy — zatwierdź.

Nie usuwaj innych rekordów (A, AAAA, CNAME, MX). Tylko dodajesz jeden TXT.

### Sprawdzenie, czy DNS już „wyszedł”

W PowerShell:

```powershell
nslookup -type=TXT addpattern.pl
```

W wynikach powinna pojawić się linia z `google-site-verification=...`.  
Jeśli jej nie ma — poczekaj 15–60 minut i spróbuj ponownie (rzadko dłużej niż doba).

---

## Krok 4. Dokończ weryfikację w GSC

1. Wróć do okna Search Console (to z kroku 2).
2. Kliknij **Zweryfikuj** / **Verify**.
3. Jeśli Google widzi rekord TXT → zielony komunikat, usługa jest Twoja.
4. Jeśli błąd „rekord nie znaleziony”:
   - poczekaj i spróbuj za 30–60 min,
   - sprawdź, czy rekord jest na `addpattern.pl`, a nie na `www.addpattern.pl`,
   - w wartości nie dodawaj cudzysłowów ani spacji na końcu.

Rekord TXT **zostaw na stałe**. Usunięcie = utrata weryfikacji.

---

## Krok 5. Wyślij sitemap

1. W GSC, w lewym menu: **Indeksowanie** → **Mapy witryn** (Sitemaps).
2. W polu „Dodaj nową mapę witryny” wpisz **tylko**:

```text
sitemap.xml
```

   (pełny adres to `https://addpattern.pl/sitemap.xml` — GSC dopisze domenę samo.)

3. Kliknij **Prześlij**.
4. Status powinien przejść na **Powodzenie** (czasem dopiero po kilku godzinach / następnym dniu).

Najpierw w przeglądarce otwórz [https://addpattern.pl/sitemap.xml](https://addpattern.pl/sitemap.xml) — musi się pokazać XML, nie 404.

---

## Krok 6. Poproś o zindeksowanie strony głównej

1. W GSC u góry jest pasek **Sprawdzenie adresu URL**.
2. Wklej: `https://addpattern.pl/`
3. Enter. Poczekaj na wynik.
4. Jeśli strona nie jest w indeksie — **Poproś o zindeksowanie** / **Request indexing**.
5. Opcjonalnie powtórz dla `https://addpattern.pl/` po większej zmianie treści (nie spamuj tym codziennie).

Sitemap ma już czyste adresy: `https://addpattern.pl/`, `/dla-devow`, `/polityka-cookies`. Możesz poprosić o zindeksowanie każdego z nich. Stare zakładki `#/dla-devow` aplikacja przekierowuje na nowy URL.

---

## Krok 7. Co sprawdzać (raz na tydzień / po publikacji)

W lewym menu:

| Raport | Po co |
|---|---|
| **Przegląd** | Czy Google w ogóle widzi stronę. |
| **Indeksowanie → Strony** | Błędy 404, wykluczenia, „wykryto — nie zindeksowano”. |
| **Mapy witryn** | Czy sitemap jest „Powodzenie”, ile URL-i wykryto. |
| **Skuteczność** (Performance) | Zapytania, kliknięcia, pozycje — pojawi się po kilku dniach / tygodniach. |
| **Ulepszenia / Experience** | Problemy z HTTPS, mobile. |

Na starcie „zero kliknięć” przez 1–2 tygodnie jest normalne.

---

## Krok 8. (Opcja) Połącz GSC z GA4

1. W GA4: **Administracja** → **Połączenia usług** → **Search Console**.
2. Wybierz usługę `addpattern.pl`.
3. Dzięki temu w GA4 zobaczysz frazy z Google, nie tylko sesje.

---

## Na później (nie blokuje startu)

- Sitemap już ma czyste URL-e. Po weryfikacji **prześlij** `sitemap.xml` w GSC (krok 5).
- Gdy pojawią się błędy 404 po zmianie adresów — w GSC **Usunięcia** albo przekierowania 301 w `.htaccess`.
- Nie twórz drugiej usługi „prefiks URL”, jeśli domena już jest zweryfikowana.

---

## Dodatek: weryfikacja tagiem HTML (tylko gdy DNS nie działa)

1. W GSC dodaj usługę **Prefiks URL**: `https://addpattern.pl`.
2. Wybierz metodę **Tag HTML**.
3. Google da coś w stylu:

```html
<meta name="google-site-verification" content="KOD_STĄD" />
```

4. Wklej ten meta do `index.html` w `<head>` (najlepiej wysoko, przed innymi skryptami).
5. Wdróż stronę na produkcję.
6. W GSC kliknij **Zweryfikuj**.

W tym wariancie przyślij mi ten jeden tag — mogę go wstawić w kod. DNS i tak jest lepszy: nie zależy od deployu.
