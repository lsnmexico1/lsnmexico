# LSN Mexico szabályzat oldal

Ez egy egyszerű, ingyenesen hostolható GitHub Pages weboldal az LSN Mexico FiveM szerver szabályzatához.

## Mit kell szerkeszteni?

A szabályzat rublikáit a `rules.js` fájlban tudod átírni.

Példa:

```js
{
  title: "Általános szabályok",
  tag: "Alap szabályzat",
  rules: [
    "Ide írd az első szabályt.",
    "Ide írd a második szabályt."
  ]
}
```

## Discord link átírása

Az `index.html` fájlban keresd ezt:

```html
https://discord.gg/IDE-IRD-A-DISCORD-LINKET
```

Cseréld ki a saját Discord meghívó linketekre.

## GitHub Pages feltöltés

1. Hozz létre egy új GitHub repositoryt, például: `lsn-mexico-rules`.
2. Töltsd fel ezt a 4 fájlt: `index.html`, `style.css`, `script.js`, `rules.js`.
3. Menj ide: Settings → Pages.
4. Source: Deploy from a branch.
5. Branch: `main`, folder: `/root`.
6. Save.

Pár perc után az oldal elérhető lesz a GitHub Pages linken.
