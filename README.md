# LSN Mexico — Szabályzat oldal

Ez egy letisztult, GitHub Pages-kompatibilis statikus weboldal az LSN Mexico FiveM szerver szabályzatához.

## Fájlok

- `index.html` — az oldal felépítése
- `style.css` — a dizájn
- `script.js` — keresés + szabályzat megjelenítés
- `rules.js` — itt tudod szerkeszteni a szabályokat

## Szabályok szerkesztése

A `rules.js` fájlban minden kategória így néz ki:

```js
{
  title: "Általános szabályok",
  tag: "Alap szabályzat",
  rules: [
    "Első szabály",
    "Második szabály",
    "Harmadik szabály"
  ]
}
```

A `rules` tömbbe annyi új sort adhatsz hozzá, amennyit szeretnél.

## GitHub Pages publikálás

1. Hozz létre egy új publikus repositoryt GitHubon.
2. Töltsd fel az összes fájlt a repo gyökerébe.
3. Menj ide: `Settings` → `Pages`
4. Állítsd be:
   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Mentsd el.
6. 1–3 percen belül megjelenik az oldal linkje.

## Discord link cseréje

Az `index.html` fájlban keresd meg ezt:

```text
https://discord.gg/IDE-IRD-A-DISCORD-LINKET
```

És írd át a saját Discord linkedre.
