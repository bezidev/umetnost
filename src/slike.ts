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

export const PREFIX = "/static/images/";

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
    "Benetke, Italija",
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
    "1817-1820",
    "Neoklasicizem",
    "Ljubljana, Slovenija",
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
    ["Jan", "Van", "Eyck"],
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
  new Picture(
    "Duchamp_Fontana.jpg",
    "Fontana",
    "",
    "Keramika",
    ["Marcel", "Duchamp"],
    "1917",
    "Dadaizem",
    "Švica",
    [
      (new Annotation(78, 0, "Splošni opis", "Marcel Duchamp je šel v trgovino, kjer je kupil pisoar, katerega je obrnil na glavo in razstavil. " + 
        "To je bilo zelo provokativno, saj je vzpodpujalo mišljenje, da ni vse, kar je razstavljeno v galeriji umetnost.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:%27Fountain%27_by_Marcel_Duchamp_(replica).JPG",
  ),
  new Picture(
    "David_Prisega_Horacijev.jpg",
    "Prisega Horacijev",
    "Na sliki trije bratje zaprisegajo svojo zvestobo Rimu in rimski državi. Kompozicija je trikotna.",
    "Olje na platnu",
    ["Jacques", "Louis", "David"],
    "1784",
    "Neoklasicizem",
    "Rim",
    [],
    "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David,_Le_Serment_des_Horaces.jpg",
  ),
  new Picture(
    "David_Napoleon_na_prelazu_sv_Bernarda.jpg",
    "Napoleon na prelazu sv. Bernarda",
    "Sliko je naslikal J. L. David, ki je bil neoklasicist. Neoklasicisti so bili znani po tem, da so podpirali Napoleona pri svojih osvajanjih in dejanjih.",
    "Olje na platnu",
    ["Jacques", "Louis", "David"],
    "1801-1805",
    "Neoklasicizem",
    "Pariz, Francija",
    [
      (new Annotation(59, 27, "Veličastnost", "Napoleon je zelo očitno naslikan zelo veličastno. Nosi zlate barve in je zelo samozavesten. To nakazuje na zmago na tem predelu, na katero je Napoleon zelo ponosen.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:Jacques-Louis_David,_Le_Serment_des_Horaces.jpg",
  ),
  new Picture(
    "Canova_Amor_in_Psihe.jpg",
    "Amor in Psihe",
    "Na sliki lahko zelo očitno vidimo t.i. antično belino, po kateri se vsi neoklasicisti zglejujejo. Snov je vzeta iz mitologije.",
    "Kip iz marmorja",
    ["Antonio", "Canova"],
    "1787-1793",
    "Neoklasicizem",
    "Louvre, Pariz, Francija",
    [
      (new Annotation(41, 43.5, "Amor poljublja Psihe", "Na sliki Amor poljublja mrtvo Psihe, z namenom, da bi jo obudil.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:0_Psych%C3%A9_ranim%C3%A9e_par_le_baiser_de_l%27Amour_-_Canova_-_Louvre_1.JPG",
  ),
  new Picture(
    "Rubens_Strahote_vojne.jpg",
    "Strahote vojne",
    "",
    "Olje na platnu",
    ["Peter", "Paul", "Rubens"],
    "1637-1638",
    "Barok",
    "Belgija",
    [
      (new Annotation(60, 30, "Vojna", "Na sliki lahko vidimo, kako vojna vedno premaga mir. Avtor s tem nekako želi povedati, da mir ni večen. Strah in trepet sta vedno prisotna.")).toJSON(),
      (new Annotation(60, 40, "Diagonalna kompozicija", "Na sliki je vidna diagonalna kompozicija.")).toJSON(),
    ],
    "https://www.wsj.com/articles/masterpiece-peter-paul-rubens-the-horrors-of-war-justus-susterman-medici-palatine-gallery-pitti-palace-nils-buttner-luc-duerloo-eighty-years-war-thirty-years-war-11657920643",
  ),
  new Picture(
    "Velazques_Predaja_Brede.jpg",
    "Predaja Brede",
    "Breda je nizozemsko mesto, katerega so zavojevali Španci.",
    "Olje na platnu",
    ["Diego", "Velazques"],
    "1634-1635",
    "Barok",
    "Španija",
    [
      (new Annotation(45, 51, "Poražena stran", "Leva, poražena stran se klanja zmagani strani. Sedaj morajo predati mesto z imenom Breda, katerega so branili dolgo časa pred napadalci.")).toJSON(),
      (new Annotation(58, 48, "Zmagana stran", "Španski osvajalci ponosno prevzemajo Bredo.")).toJSON(),
      (new Annotation(60, 5, "Vzvišene sulice", "Sulice so zmagoslavno vzvišene.")).toJSON(),
    ],
    "", // todo fix
  ),
  new Picture(
    "Velazques_Predaja_Brede.jpg",
    "Predaja Brede",
    "Breda je nizozemsko mesto, katerega so zavojevali Španci.",
    "Olje na platnu",
    ["Diego", "Velazques"],
    "1634-1635",
    "Barok",
    "Španija",
    [
      (new Annotation(45, 51, "Poražena stran", "Leva, poražena stran se klanja zmagani strani. Sedaj morajo predati mesto z imenom Breda, katerega so branili dolgo časa pred napadalci.")).toJSON(),
      (new Annotation(58, 48, "Zmagana stran", "Španski osvajalci ponosno prevzemajo Bredo.")).toJSON(),
      (new Annotation(60, 5, "Vzvišene sulice", "Sulice so zmagoslavno vzvišene.")).toJSON(),
    ],
    "", // todo fix
  ),
  new Picture(
    "Tizian_Assunta.jpg",
    "Assunta",
    "Slika predstavlja Marijino vnebovzetje.",
    "Kip iz marmorja",
    ["Tizian"],
    "1634-1635",
    "Renesansa",
    "Benetke, Italija",
    [
      (new Annotation(50, 30, "Marija", "Marijo so vzela nebesa.")).toJSON(),
      (new Annotation(49, 60, "Trikotna kompozicija", "Med moškim (spodaj desno) in drugim moškim (spodaj levo) ter Marijo (zgoraj) vlada trikotna kompozicija.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:Tizian_041.jpg",
  ),
  new Picture(
    "Rafael_Madona_v_zelenju.jpg",
    "Madona v zelenju",
    "Madona je Marijina sestra, ki je pazila na dojenčka Jezusa in dojenčka Janeza Krstnika.",
    "Olje na platnu",
    ["Rafael"],
    "1504-1505",
    "Renesansa",
    "Firence, Italija",
    [],
    "https://sl.wikipedia.org/wiki/Slika:Raphael_-_Madonna_in_the_Meadow_-_Google_Art_Project.jpg",
  ),
];
