# Umetnostna zgodovina
Umetnostna zgodovina na Bežiju je težka. Dajmo jo skupaj olajšati.

## Dokumentacija

### Način za učenje
![slika](https://user-images.githubusercontent.com/52399966/228747157-b0723ec1-9c4c-4592-865b-e36b1e5b9147.png)

Pri načinu za učenje si lahko izberete obdobja, ki jih ne želite (obdobja, ki jih ne pišete na testu). To pomeni, da bo program izločil vse slike, ki sodijo v ta obdobja.

Ob kliku na gumb začni učenje (ki se pojavi takoj, ko aktivirate način učenja), se naključno izbere slika (samo iz obdobij, ki niso izbrana), se začne štoparica in prikaže spletna stran, kjer lahko vpišete ime slike, letnico, ime avtorja, obdobje in mesto ali državo.

![slika](https://user-images.githubusercontent.com/52399966/228747679-34733ac6-3a33-41d6-bb5c-b3d4bed48e6b.png)

Program bo ob kliku na gumb `Prikaži rezultate` preveril vaše odgovore.
- če se vsaj en del ujema s tem, kar ima program zapisano, bo dal kljukico
- če zamenjate ime in priimek oz. kaj vpišete ne po vrsti urejeno, bo program dal križec
- vse lahko pišete tudi z malimi začetnicami. Programu je popolnoma vseeno kako napišete ta tekst.
- v načinu učenja se še vedno pojavijo vse anotacije, ki jih lahko uporabite, če si želite pomagati. V prihodnje bom dodal gumb za odstranitev anotacij.

### Programski jezik in rešitve
- Spletna stran je spisana v [JavaScript](https://js.org/)/[TypeScript](https://www.typescriptlang.org/) programskem jeziku, v frameworku, ki se imenuje [Svelte](https://svelte.dev/).
- Koda se poganja z naslednjimi ukazi, ki potrebujejo [npm nameščen](https://www.npmjs.com/): `npm i && npm run dev`
- Koda za slike se nahaja v datoteki `/src/slike.ts`
- Koda za obdobja se nahaja v datoteki `/src/obdobja.ts`
- Slike se nahajajo v direktoriju `/public/images/`
- Rešitev je zasnovana z [Material dizajn sistemom](https://m1.material.io/#) in [knjižico za Svelte](http://sveltematerialui.com/).
- Pri spletni strani sem pobiral slike iz interneta. Večina je v javni domeni, pri vseh sem tudi navedel vir.

Rešitev se poganja v čistem JavaScriptu/TypeScriptu. To pomeni, da se ne da samo klikniti na `index.html` in bo delalo. Treba je slediti prej povedanim navodilom ali pa iti na gosteno rešitev.

### Prva oddaja
Prva oddaja je na voljo na spletni strani: https://umetnost-git-inf-v0-mytja.vercel.app/.

V primeru, da se spodaj pojavi nekaj za komentiranje, lahko to mirne volje zaprete - tega nisem jaz dodal, temveč je ponudnik gostovanja, tj. Vercel.

Za zadnjo oddajo mislim vse skupaj prestaviti tudi na lokalni server.

### Trenutna verzija
Trenutna verzija je vedno na voljo na https://umetnost.beziapp.si.
Ta verzija vsebuje zadnje spremembe in je vedno aktivna. Povezava iz BežiAppa vodi na to verzijo.

## Kaj je še treba popraviti?
- Izboljšati je treba nalagalni čas. Slike so zdaj kar dosti velike in bi se jih dalo zmanjšati.
- Prestavi na lokalni server
- Dodaj še več analiz
- Dopolni van Eyckovo sliko Giovanni Arnolfini
- Naloži zapiske za La Venier
- Dodaj proper vire

