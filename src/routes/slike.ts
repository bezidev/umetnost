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
];
