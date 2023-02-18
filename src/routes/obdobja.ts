class Obdobje {
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
  new Obdobje("Romantika", "Romantika se zgleduje po antiki.", "11. - 12. stoletje", "Firence, Italija"), // preveri informacije
  new Obdobje("Gotika", "Gotika slabšalno poimenovanje za nekaj barbarskega", "12. - 15. stoletje", "Francija"), // preveri informacije
  new Obdobje("Renesansa", "V renesansi so začeli uporabljati oljne barve. Pred tem so uporabljali beljak kot vezivo.", "15. - 16. stoletje", "Firence, Italija"), // preveri informacije
  new Obdobje("Barok", "", "17. - 18. stoletje", ""),
  new Obdobje("Neoklasicizem", "Neoklasicizem se zgleduje po renesansi, ki se zgleduje po antiki. " +
    "Antična belina je zanje sveta.", "konec 18. stoletja, začetek 19. stoletja", "Francija"),
  new Obdobje("Romantika", "Romantiki se uprejo neoklasicistom, tako da se oddaljijo od tega idealnega sveta, ki ga " +
    "prikazujejo v neoklasicizmu, ter jih bolj zanimajo skrajne čustvene situacije, umske bolezni, ponižnost pred naravo. " +
    "Razum ne prevlada. Izrazi se predvsem v slikarstvu, v kiparstvu in arhitekturi ne toliko.", "konec 18. stoletja, začetek 19. stoletja", "Francija"),
  new Obdobje("Realizem", "V realizmu so se želeli oddaljiti od prejšnjih obdobij, ki so slikale predvsem ekstremne okoliščine oz. idealen svet. " +
    "Zato so zaželi slikati čim bolj realne upodobitve sveta.", "19. stoletje", "Pariz, Francija"),
  new Obdobje("Impresionizem", "Impresionizem je ekstremna oblika realizma. V tem obdobju so umetniki želeli naslikati vse najbolj realno možno. " +
    "Predmeti nimajo več metaforičnih pomenov, kakor so jih imeli v prejšnjih obdobjih. Zanje je pomembno, da ujamejo trenutek. " +
    "Trudijo se, da so kakor fotoaparat. Želeli so izraziti čisti vizualni vtis. " +
    "Prav tako se spremeni trgovanje, saj Evropski narodi niso marali tega naprednega razmišljanja in so zato pošiljali slike " +
    "bogatim in naprednim Američanom, ki so cenili to zvrst umetnosti.", "19. stoletje", "Pariz, Francija"),
];
