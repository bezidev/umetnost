export class Obdobje {
  name: string;
  description: string;
  period: string;
  origin: string;

  constructor(name: string, description: string, period: string, origin: string) {
    this.name = name;
    this.description = description;
    this.period = period;
    this.origin = origin;
  }
}

export const OBDOBJA: Obdobje[] = [
  new Obdobje("Prazgodovina", "", "", ""),
  new Obdobje("Antika", "Samo rimski kipi so bili beli.", "4. tisočletje pr.n.št. - 4. stoletje", ""),
  //new Obdobje("Romantika", "", "11. - 12. stoletje", "Firence, Italija"), // preveri informacije
  new Obdobje("Gotika", "Gotika slabšalno poimenovanje za nekaj barbarskega", "12. - 15. stoletje", "Francija"), // preveri informacije
  new Obdobje("Renesansa", "V renesansi so začeli uporabljati oljne barve. Pred tem so uporabljali beljak kot vezivo. Renesansa se zgleduje po antiki.", "15. - 16. stoletje", "Firence, Italija"), // preveri informacije
  new Obdobje("Barok", 'Barok oz. pokvarjeni biser, je obdobje, v katerem je nastopala "slaba", "pokvarjena" in nezaželena umetnost.', "17. - 18. stoletje", "Rim"),
  new Obdobje("Neoklasicizem", "Neoklasicizem se zgleduje po renesansi, ki se zgleduje po antiki. " +
    "Antična belina je zanje sveta.", "konec 18. stoletja, začetek 19. stoletja", "Francija"),
  new Obdobje("Romantika", "Romantiki se uprejo neoklasicistom, tako da se oddaljijo od tega idealnega sveta, ki ga " +
    "prikazujejo v neoklasicizmu, ter jih bolj zanimajo skrajne čustvene situacije, umske bolezni, ponižnost pred naravo. " +
    "Razum ne prevlada. Izrazi se predvsem v slikarstvu, v kiparstvu in arhitekturi ne toliko.", "konec 18. stoletja, začetek 19. stoletja", "Francija"),
  new Obdobje("Realizem", "V realizmu so se želeli oddaljiti od prejšnjih obdobij, ki so slikale predvsem ekstremne okoliščine oz. idealen svet. " +
    'Zato so zaželi slikati čim bolj realne upodobitve sveta. Slike izgledajo kot naključne fotografije. ' +
    'Uporabljajo rjavkasto-zelene barve, brez živahnih barv ter prosto kompozicijo. Courbet: Pokažite mi angela, pa ga bom naslikal.',
    "19. stoletje", "Pariz, Francija"),
  new Obdobje("Impresionizem", "Impresionizem je ekstremna oblika realizma. V tem obdobju so umetniki želeli naslikati vse najbolj realno možno. " +
    "Predmeti nimajo več metaforičnih pomenov, kakor so jih imeli v prejšnjih obdobjih. Zanje je pomembno, da ujamejo trenutek. " +
    "Trudijo se, da so kakor fotoaparat. Želeli so izraziti čisti vizualni vtis. " +
    "Prav tako se spremeni trgovanje, saj Evropski narodi niso marali tega naprednega razmišljanja in so zato pošiljali slike " +
    "bogatim in naprednim Američanom, ki so cenili to zvrst umetnosti.", "19. stoletje", "Pariz, Francija"),
  new Obdobje("Postimpresionizem", "Impresionisti so želeli delati čisti vizualni vtis, postimpresionisti pa želijo zadeti čustva in doseči notranji vtis.", "konec 19. stoletja", "Pariz, Francija"),
  new Obdobje("Modernizem", "Je obdobje, pod katerega spadajo tudi spodaj našteta obdobja. Očetje modernizma so van Gogh, Cezanne in Gauguin. V modernizem sodijo obdobja, kot so:" +
  "<li> ekspresionizem," +
  "<li> fauvizem," +
  "<li> futurizem," +
  "<li> dadaizem," +
  "<li> nadrealizem," +
  "<li> kubizem," +
  "<li> konstruktivizem," +
  "<li> abstraktna umetnost" +
  "<p/> Po 2. sv. vojni pride do vrhunca. V dvajsetem stoletju se življenje premika hitro, zato se tudi umetniške zvrsti zelo hitro menjavajo. <br>" +
  "<li> Umetniki si ves čas izmišljujejo nove stvari, vsaka nova stvar predstavlja nov slog" +
  "<li> Vsakih 20 let nov slog" +
  "<li> Umetnik sam sebi izbira, kaj bo slikal, za razliko od prejšnjih obdobij, kjer so večinoma slikali po naročilu" +
  "<li> Avtonomija likovnega dela - ukvarjajo se s slikarstvom samim, ne s tem, da slika predstavlja neko zgodbo" +
  "<li> Dobivali so se v skupinah, kjer so bili pesniki, slikarji, glasbeniki ... na sploh vsi umetniki" +
  "<li> Veliko obdobij ima svoje manifeste. Manifest je slovesna izjava v kateri povedo, kako bi radi v tem obdobju oz. slogu ustvarjali.", "20. stoletje - 1970", "razno"),
  new Obdobje("Ekspresionizem", "Ekspresionisti so delovali v Nemčiji v času nacizma. Niso podpirali nacizma, so se mu upirali, čemur pa so sledila razna zatiranja in požigi slik s strani nacistov. Z barvami in oblikami izražajo notranje doživljanje, kontrast toplih in hladnih barv. Uprejo se perspektivi, posledično so slike večinoma dvodimenzionalne. Uporabljajo popačene obraze, ki izražajo grozo in strah. Ti obrazi izgledajo kot maske. Skozi barve in oblike izražajo svoja čustva na zelo kritične načine.", "20. stoletje", "Nemčija"),
  new Obdobje("Fauvizem", "", "20. stoletje", "Francija"),
  new Obdobje("Futurizem", "Futuriste zanima predvsem gibanje. Ne ozirajo se v preteklost, temveč v prihodnost. Bili so navdušeni nad vojno, kasneje sicer ne. Imeli so tudi manifest in prirejali razne zabave.", "20. stoletje", "Italija"),
  new Obdobje("Kubizem", "Paul Cezanne je začetnik kubizma. Uporabljajo tri osnovna telesa, valj, stožec in pa kroglo. Barve, kompozicija, čustva, vsebina in simbolika jih ne zanima.", "20. stoletje", "Francija"),
  new Obdobje("Dadaizem", "Ime dadaizma izvira iz otroške govorice DADA. Želijo si videti svet kot otrok, tj. preko otroških oči, kot da ga vidijo popolnoma na novo. Bili so zelo proti vojni, zato so se tudi umaknili v Švico. Bili so zelo kritični do družbe in meščanskega razreda.", "20. stoletje", "lokal Cabaret Voltaire, Zürich, Švica"),
  new Obdobje("Nadrealizem ali surrealizem", "surreal = nadresnično. Takrat so začeli spoznavati psihoanalizo in po zaslugi Sigmunda Freunda so izvedeli, da je razum sestavljen iz zavednega (10%) in nezavednega dela, posledično je surrealiste izjemno zanimal nezavedni del in sanje.", "20. stoletje", "Francija"),
  new Obdobje("Abstraktna umetnost", "Abstraktna umetnost ni zvrst, temveč je način slikanja. Predstavlja vrhunec modernizma. Abstraktno slikarstvo se deli na: " +
  "<li> Geometrijsko abstrakcijo in" +
  "<li> Lirično abstrakcijo" +
  "<p/> Če gremo malo nazaj po obdobjih, do kubizma, lahko vidimo, da je Paul Cezanne prvi, ki uporablja oblike - po njem so se umetniki v abstraktni umetnosti zgledovali.", "20. stoletje", "razno"),
  new Obdobje("Abstraktni ekspresionizem", "Abstraktni ekspresionizem je prva ameriška zvrst.", "20. stoletje", "ZDA"),
  new Obdobje("Sodobna umetnost", "Vse spodaj naštete umetniške zvrsti sodijo v sodobno umetnost.", "1990 do danes", "Svet"),
  new Obdobje("Konceptualna umetnost", "", "", ""),
  new Obdobje("Video", "Film ima zgodbo, video pa je samo slika, ki se premika.", "", ""),
  new Obdobje("Instalacija", "", "", ""),
  new Obdobje("Performans", "Mešanica med likovno umetnostjo in gledališčem", "", ""),
  new Obdobje("Street Art", "oz. ulična umetnost.", "", ""),
  new Obdobje("Fotografija", "Pri fotografiji navadno nekdo drug slika avtorja te fotografije (tj. na sliki je avtor, katerega je slikal nekdo drug).", "", ""),
  new Obdobje("Fotomontaža", "Fotomontaža je slika, katero kasneje tudi dodatno računalniško obdelajo.", "", ""),
  new Obdobje("Objekti", "", "", ""),
];

export let OBDOBJA_NAMES = OBDOBJA.map((e) => e.name);
