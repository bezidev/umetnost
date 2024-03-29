# Umetnostna zgodovina
Umetnostna zgodovina na Bežiju je težka. Dajmo jo skupaj olajšati.

## Dokumentacija

### Način za učenje
![image](https://user-images.githubusercontent.com/52399966/232222982-7c31171d-1c51-4883-8dbe-cc26ed4d452f.png)

Pri načinu za učenje si lahko izberete obdobja, ki jih ne želite (obdobja, ki jih ne pišete na testu). To pomeni, da bo program izločil vse slike, ki sodijo v ta obdobja.

Ob kliku na gumb začni učenje (ki se pojavi takoj, ko aktivirate način učenja), se naključno izbere slika (samo iz obdobij, ki niso izbrana), se začne štoparica in prikaže spletna stran, kjer lahko vpišete ime slike, letnico, ime avtorja, obdobje in mesto ali državo.

![image](https://user-images.githubusercontent.com/52399966/232223046-1ee2a6e8-9ca0-4ede-9814-97ac147eafa4.png)

Program bo ob kliku na gumb `Prikaži rezultate` preveril vaše odgovore.
- če se vsaj en del ujema s tem, kar ima program zapisano, bo dal kljukico
- če zamenjate ime in priimek oz. kaj vpišete ne po vrsti urejeno, bo program dal križec
- vse lahko pišete tudi z malimi začetnicami. Programu je popolnoma vseeno kako napišete ta tekst.
- v načinu učenja se še vedno pojavijo vse anotacije, ki jih lahko uporabite, če si želite pomagati. V prihodnje bom dodal gumb za odstranitev anotacij.

### Generiranje testov
Na začetnem zaslonu bi se vam moralo pojaviti naslednje. Tukaj lahko izberete, kateri test bi želeli generirati.

![slika](https://user-images.githubusercontent.com/52399966/233276794-9996e728-7eb2-440e-84f9-8020379639be.png)

Program vam bo ob kliku na enega izmed gumbov popeljal na stran, na kateri dobite vaš željen, naključno generiran test. Ta modul črpa večino vprašanj iz testov LUM, ampak seveda to niso čisto vsa vprašanja. To je bolj mišljeno kot nek dodatek, da lahko dijaki vidijo kako približno izgleda test in kakšna so vprašanja.

S pritiskom na <b>CTRL+P</b> na tipkovnici, lahko natisnete ta test.

![slika](https://user-images.githubusercontent.com/52399966/233277567-097723a7-415a-4a10-84d3-2ad8a5568fc3.png)

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
Trenutna verzija je in bo vedno na voljo na https://umetnost.beziapp.si. V primeru da verzija ni na voljo, me lahko kontaktirate (najdite me v šoli ali pa mi [pišite na šolski elektronski naslov](mailto:mitja.severkar@gimb.org)). Stran bom poskušal obdržati vsa leta svojega šolanja na Bežigradu, ampak ne morem garantirati, da bodo informacije na tej spletni strani ažurne, ko se bo profesorica Mastnak upokojila in bo prišel nov profesor oz. profesorica.

Ta verzija vsebuje zadnje spremembe in je vedno aktivna. Povezava iz BežiAppa vodi na to verzijo.

## Kaj je še treba popraviti?
- [x] Izboljšati je treba nalagalni čas. Slike so zdaj kar dosti velike in bi se jih dalo zmanjšati.
- [x] Prestavi na lokalni server
- [x] Dodaj še več analiz
- [x] Dopolni van Eyckovo sliko Giovanni Arnolfini
- [x] Naloži zapiske za L'avenir
- [x] Dodaj proper vire
- [x] Migracija na BežiDev organizacijo.
- [x] Dodaj naključni algoritem brez ponavljanja slik

## Razne slikice
![image](https://user-images.githubusercontent.com/52399966/232222942-f7cb07bc-1ae4-4ed1-a061-aa35b13b406e.png)

