class Annotation {
  x: number;
  y: number;
  title: string;
  description: string;

  constructor(x: number, y: number, title: string, description: string) {
    this.x = x;
    this.y = y;
    this.title = title;
    this.description = description;
  }

  toJSON() {
    return {...this}
  }
}

export const PREFIX = "/images/";

class Picture {
  filename: string;
  title: string;
  description: string;
  method: string;
  author: string[];
  year: string;
  period: string;
  origin: string;
  source: string;
  annotations: Annotation[];

  constructor(filename: string, title: string, description: string, method: string, author: string[], year: string, period: string, origin: string, annotations: Annotation[], source: string) {
    this.filename = filename;
    this.title = title;
    this.description = description;
    this.method = method;
    this.author = author;
    this.year = year;
    this.period = period;
    this.origin = origin;
    this.annotations = annotations;
    this.source = source;
  }

  toJSON() {
    return {...this}
  }
}

export const PICTURES: Picture[] = [
  new Picture(
    "Veronese_Ugrabitev_Evrope.webp",
    "Ugrabitev Evrope",
    "",
    "Olje na platnu",
    ["Paolo", "Veronese"],
    "1580",
    "Barok",
    "Benetke",
    [
      (new Annotation(52, 66, "Bik", "Zevs se je spremenil v bika, da bi se lahko približal Evropi.")).toJSON(),
      (new Annotation(13, 82, "Bik leži", "Bik na sliki deloma leži, kar nakazuje na to, da se je pridružil ženskam, ki so se z njim igrale, nato pa se je kar naenkrat odločil ugrabiti Evropo.")).toJSON(),
      (new Annotation(45, 12, "Kupidi", "Kupidi oznanjajo ljubezen med Zevsom in Evropo.")).toJSON(),
      (new Annotation(48, 65, "Venec", "Venec še dodatno podkrepi hipotezo, da so se ženske z bikom prej tudi igrale.")).toJSON(),
      (new Annotation(99, 0, "Splošni opis",
        "Nekega dne je Evropa pobirala rože na travniku, ko jo je zagledal Zevs. " +
        "Nemudoma se je zaljubil vanjo in se zato odločil spremeniti v bika. " +
        "Evropa se bika ni bala, temveč je bila osupljena nad njegovo mirnostjo. " +
        "Zevs jo je ugrabil, kar je razvidno tudi na sliki. " +
        "Avtor je snov črpal iz Grške mitologije.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:Porwanie_Europy.jpg",
  ),
  new Picture(
    "Kavcic_Salomonova_sodba.jpg",
    "Salomonova sodba",
    "",
    "Olje na platnu",
    ["Franc", "Kavčič"],
    "1817−1820",
    "Neoklasicizem",
    "Ljubljana",
    [
      (new Annotation(31, 57, "Nasmeh", "Mati mrtvega sina se nasmiha ob tem, ko bodo usmrtili otroka druge mame.")).toJSON(),
      (new Annotation(69, 50, "Mati", "Prava mati otroka prosi kralja, naj ga ne usmrti.")).toJSON(),
      (new Annotation(40, 36, "Kralj", "Kralj je odločil, da naj otroka ne usmrtijo in ga vrnejo k pravi mami.")).toJSON(),
      (new Annotation(60, 75, "Linearna perspektiva", "Ploščice simbolizirajo linearno perspektivo.")).toJSON(),
      (new Annotation(57, 80, "Mrtvi otrok", "Na tleh leži mrtvi otrok.")).toJSON(),
      (new Annotation(93, 71, "Otrok", "Otrok čaka na usmrtitev.")).toJSON(),
      (new Annotation(30, 70, "Antična belina", "Antična belina je za neoklasiciste sveta.")).toJSON(),
      (new Annotation(99, 0, "Splošni opis",
        "Kralj Salomon je veljal za enega izmed najbolj pravičnih in pametnih ljudi v Bibliji. " +
        "Zgodba govori o tem, kako sta dve ženi, ki živita v isti hiši rodili vsaka svojega otroka. " +
        "Eni je umrl otrok, zato ga je zamenjala z otrokom druge mame. " +
        "Zjutraj je mati ugotovila, da mrtev otrok ni njen in sta obe mami šli pred kralja. " +
        "Ta je predlagal to, da se tudi živega otroka usmrti, za kar je mama mrtvega otroka navijala, " + 
        "mama živega otroka, pa je kralja rotila, naj tega ne naredi. " +
        "Kralj je uvidel, kdo je prava mama, in ji je vrnil živega otroka.")).toJSON(),
    ],
    "https://www.ng-slo.si/si/stalna-zbirka/1800-1820/salomonova-sodba-franc-kavcic-caucig?workId=1689",
  ),
  new Picture(
    "Van_Eyck_Giovanni_Arnolfini_s_soprogo.jpg",
    "Giovanni Arnolfini s soprogo",
    "To je portret Giovannija Arnolfinija in njegove soproge.",
    "Olje na platnu",
    ["Jan", "Van Eyck"],
    "1434",
    "Renesansa",
    "Italija",
    [
      (new Annotation(50, 90, "Pes", "Pes simbolizira večno zvestobo.")).toJSON(),
      (new Annotation(75, 50, "Rdeča postelja", "Rdeča postelja simbolizira ljubezen.")).toJSON(),
      (new Annotation(26, 25, "Okno", "Giovanni Arnolfini je bil trgovec. Okno torej simbolizira, kako je ves čas zapuščal dom, da je lahko trgoval.")).toJSON(),
    ],
    "https://www.ng-slo.si/si/stalna-zbirka/1800-1820/salomonova-sodba-franc-kavcic-caucig?workId=1689",
  ),
];
