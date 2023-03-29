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
    "https://commons.wikimedia.org/wiki/File:The_Arnolfini_portrait_(1434).jpg",
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
  new Picture(
    "Aquila_Apostoli_in_donator.png",
    "Apostoli in donator",
    "",
    "Freska",
    ["Johannes", "Aquila"],
    "1392",
    "Gotika",
    "Cerkev sv. Martina, Martjanci, Slovenija",
    [
      (new Annotation(40, 40, "Apostoli", "Na sliki lahko vidimo štiri apostole.")).toJSON(),
      (new Annotation(10, 65, "Donator", "Župnik Erazem oz. donator je majhen, saj se klanja veličastnim apostolom. Zaveda se, da jim ne sega niti do kolen v veličastnosti in dobroti.")).toJSON(),
    ],
    "ABC umetnostne zgodovine: Delovni zvezek za prvi letnik gimnazij. Rokus Klett, 2007.",
  ),
  new Picture(
    "Gericault_Splav_Meduze.jpg",
    "Splav Meduze",
    "Slika povzame resnični dogodek, pri katerem je splav (Meduza) naplavil. Preživelo je malo ljudi, tisti ki pa so, so pa kasneje umrli zaradi dehidracije.",
    "Olje na platnu",
    ["Theodore", "Gericault"],
    "1818-1819",
    "Romantika",
    "Louvre, Pariz, Francija",
    [
      (new Annotation(41, 42, "Kaos", "Na sliki vlada čisti kaos, kar je velik odmik od idealističnega neoklasicizma.")).toJSON(),
      (new Annotation(10, 68, "Preživeli", "Preživeli so se prehranjevali tudi s sopotniki (glej kanibalizem).")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_(Museo_del_Louvre,_1818-19).jpg",
  ),
  new Picture(
    "Delacroix_Svoboda_vodi_ljudstvo.jpg",
    "Svoboda vodi ljudstvo",
    "Slika uprizarja francosko revolucijo, julija 1830.",
    "Olje na platnu",
    ["Eugene", "Delacroix"],
    "1830",
    "Romantika",
    "Louvre, Pariz, Francija",
    [
      (new Annotation(70, 80, "Kaos", "Na sliki še vedno vlada kaos, kar lahko prepoznamo tudi po več mrtvih osebah, ki ležijo na tleh.")).toJSON(),
      (new Annotation(60, 20, "Svoboda", "Ženska na sliki je personifikacija svobode.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:Eug%C3%A8ne_Delacroix_-_Le_28_Juillet._La_Libert%C3%A9_guidant_le_peuple.jpg",
  ),
  new Picture(
    "Delacroix_Sardanapalova_smrt.jpg",
    "Sardanapalova smrt",
    "Na dani sliki še vedno vlada kaos, ki je tako značilen za romantiko.",
    "Olje na platnu",
    ["Eugene", "Delacroix"],
    "1827",
    "Romantika",
    "Louvre, Pariz, Francija",
    [],
    "https://commons.wikimedia.org/wiki/File:Delacroix_-_La_Mort_de_Sardanapale_(1827).jpg",
  ),
  new Picture(
    "Delacroix_Alzirke.jpg",
    "Alžirke",
    "",
    "Olje na platnu",
    ["Eugene", "Delacroix"],
    "1834",
    "Romantika",
    "Louvre, Pariz, Francija",
    [],
    "https://commons.wikimedia.org/wiki/File:WomenofAlgiers.JPG",
  ),
  new Picture(
    "Pernhart_Klansko_jezero_v_nevihti.jpg",
    "Klanško jezero v nevihti",
    "",
    "Olje na platnu",
    ["Marko", "Pernhart"],
    "1871",
    "Romantika",
    "Slovenija",
    [],
    "https://www.ng-slo.si/si/stalna-zbirka/1820-1870/klansko-jezero-v-nevihti-marko-pernhart?workId=1712",
  ),
  new Picture(
    "Courbet_Pogreb_v_Ornansu.jpg",
    "Pogreb v Ornansu",
    "Na sliki se doogaja nek pogreb, upodobljen zelo realistično, kakor fotografija.",
    "Olje na platnu",
    ["Gustave", "Courbet"],
    "1849-1850",
    "Realizem",
    "Pariz, Francija",
    [
      (new Annotation(73, 80, "Pes", "V kontrastu z vsemi prejšnjimi obdobji, nič na tej sliki nima specifičnega metaforičnega pomena. Pes je tudi eden izmed tistih, ki je izgubil svoj pomen in je zdaj samo pes.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg",
  ),
  new Picture(
    "Courbet_Umetnikov_atelje.jpg",
    "Umetnikov atelje",
    "Slika sporoča ljudem, kako bi morali slikati.",
    "Olje na platnu",
    ["Gustave", "Courbet"],
    "1855",
    "Realizem",
    "Pariz, Francija",
    [
      (new Annotation(60, 60, "Ženska", "Ženska tokrat ima pomen in predstavlja golo resnico.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:Courbet_LAtelier_du_peintre.jpg",
  ),
  new Picture(
    "Millet_Zene_ki_pobirajo_klase.jpg",
    "Žene, ki pobirajo klase",
    "Slika predstavlja najnižji sloj, ki pobira ostanke za višjimi sloji. Slika upodablja revščino.",
    "Olje na platnu",
    ["Jean-Francois", "Millet"],
    "1857",
    "Realizem",
    "Pariz, Francija",
    [],
    "https://commons.wikimedia.org/wiki/File:Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg",
  ),
  new Picture(
    "Petkovsek_Doma.jpg",
    "Doma",
    "Slika upodablja dom Jožefa Petkovška. Petkovšek je bil večkrat oklican za slovenskega van Gogha.",
    "Olje na platnu",
    ["Jožef", "Petkovšek"],
    "1889",
    "Realizem",
    "Slovenija",
    [
      (new Annotation(80, 50, "Mati", "")).toJSON(),
      (new Annotation(40, 45, "Sestra", "")).toJSON(),
      (new Annotation(52, 45, "Brat", "")).toJSON(),
      (new Annotation(65, 45, "Jožef Petkovšek", "")).toJSON(),
      (new Annotation(40, 67, "Prazen stol", "Stol na sliki je prazen, kar nakazuje na to, da pogreša eno osebo, najverjetneje svojega mrtvega očeta.")).toJSON(),
      (new Annotation(15, 24, "Prazno ogledalo", "Prazno ogledalo nakazuje na to, da ima z mamo slabe odnose in pogosto prihaja do tesnobe.")).toJSON(),
    ],
    "https://www.ng-slo.si/si/stalna-zbirka/1870-1900/doma-jozef-petkovsek?workId=1749",
  ),
  new Picture(
    "Subic_Pred_lovom.jpg",
    "Pred lovom",
    "Slika upodablja kmeta iz Normandije, ki se odpravlja na lov.",
    "Olje na platnu",
    ["Jurij", "Šubic"],
    "1883",
    "Realizem",
    "Slovenija",
    [
      (new Annotation(68, 50, "Barve", "Za realizem so značilne temačnejše barve, čemur pa tukaj ni tako. To nakazuje na to, da je avtor že deloma v prihajajočih umetniških zvrsteh. Posledično ta slika ni čisto realistična.")).toJSON(),
    ],
    "https://www.ng-slo.si/si/stalna-zbirka/1870-1900/pred-lovom-jurij-subic?workId=1742",
  ),
  new Picture(
    "Monet_Impresija_soncni_vzhod.jpg",
    "Impresija, sončni vzhod",
    "Impresija = vtis. Slika pristanišča zjutraj, po tej sliki dobi impresionizem ime.",
    "Olje na platnu",
    ["Claude", "Monet"],
    "1872",
    "Impresionizem",
    "Pariz, Francija",
    [
      (new Annotation(50, 71, "Trije čolni in pristanišče", "Slika ni jasno narisana, nima jasno začrtanih mej.")).toJSON(),
    ],
    "https://commons.wikimedia.org/wiki/File:Monet_-_Impression,_Sunrise.jpg",
  ),
  new Picture(
    "Renoir_Le_Moulin_de_la_Galete.jpg",
    "Le Moulin de la Galete",
    "Impresija = vtis.",
    "Olje na platnu",
    ["Pierre", "Auguste", "Renoir"],
    "1876",
    "Impresionizem",
    "Pariz, Francija",
    [],
    "https://commons.wikimedia.org/wiki/File:Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_(derivative_work_-_AutoContrast_edit_in_LCH_space).jpg",
  ),
  new Picture(
    "Degas_Baletna_sola.jpg",
    "Baletna šola",
    "Degas je rad slikal baletke. Zanima ga realnost, kako spadajo svetloba, prostor in barva skupaj.",
    "Olje na platnu",
    ["Edgar", "Degas"],
    "1871-1874",
    "Impresionizem",
    "Pariz, Francija",
    [],
    "https://commons.wikimedia.org/wiki/File:Edgar_Degas_-_La_Classe_de_danse.jpg",
  ),
  new Picture(
    "Grohar_Pomlad.jpg",
    "Pomlad",
    "Slika simbolizira pomlad narodov.",
    "Olje na platnu",
    ["Ivan", "Grohar"],
    "1911",
    "Impresionizem",
    "Slovenija",
    [],
    "https://www.ng-slo.si/si/stalna-zbirka/1900-1918/pomlad-ivan-grohar?workId=1780",
  ),
  new Picture(
    "Jakopic_Sava.jpg",
    "Sava",
    "Počasi že prehaja v abstraktno slikarstvo.",
    "Olje na vezani plošči",
    ["Rihard", "Jakopič"],
    "1928-1930",
    "Impresionizem",
    "Slovenija",
    [],
    "https://www.ng-slo.si/si/stalna-zbirka/od-1918-dalje/sava-rihard-jakopic?workId=3732",
  ),
  new Picture(
    "Van_Gogh_Zvezdna_noc.jpg",
    "Zvezdna noč",
    "",
    "Olje na platnu",
    ["Vincent", "van", "Gogh"],
    "1889",
    "Postimpresionizem",
    "Francija",
    [
      (new Annotation(20, 80, "Cipresa", "Cipresa simbolizira smrt. Cipresa poleg cerkve sega do neba.")).toJSON(),
      (new Annotation(30, 10, "Nebo", "Z nebom uničuje perspektivo.")).toJSON(),
      (new Annotation(50, 20, "Črtni nanos", "Na sliki lahko vidimo, da ni uporabil gladkih in ploskatih potez s čopiči, temveč je z debelejšimi nanosi ustvarjal debelejše in črtaste nanose.")).toJSON(),
      (new Annotation(99, 0, "Splošni opis", "Van Gogh naj bi na sliki upodobil svojo vas, kakršno se je je spomnil. Sliko je naslikal v umobolnici, kjer so ga sicer podpirali pri slikanju in so mu dovolili slikati.")).toJSON(),
    ],
    "https://en.wikipedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  ),
  new Picture(
    "Gauguin_Rumeni_Kristus.jpg",
    "Rumeni Kristus",
    "Rumena barva predstavlja njegovo doživljanje sveta. S tem, da pobarva vse z eno barvo izniči telesnost.",
    "Olje na platnu",
    ["Paul", "Gauguin"],
    "1889",
    "Postimpresionizem",
    "Francija",
    [],
    "https://en.wikipedia.org/wiki/File:Gauguin_Il_Cristo_giallo.jpg",
  ),
  new Picture(
    "Gauguin_Rdeci_pes.jpg",
    "Rdeči pes",
    "",
    "Olje na platnu",
    ["Paul", "Gauguin"],
    "1889",
    "Postimpresionizem",
    "Francija",
    [
      (new Annotation(30, 70, "Rdeči pes", "Pes je rdeč, ker si ga avtor tako predstavlja.")).toJSON(),
    ],
    "https://en.wikipedia.org/wiki/File:Gauguin_Il_Cristo_giallo.jpg",
  ),
  new Picture(
    "Kirchner_Avtoportret_z_modelom.jpg",
    "Avtoportret z modelom",
    "",
    "Olje na platnu",
    ["Ernst", "Kirchner"],
    "1910",
    "Ekspresionizem",
    "Nemčija",
    [],
    "https://sl.wikipedia.org/wiki/Slika:Kirchner_-_Selbstbildnis_mit_Modell.jpg",
  ),
  new Picture(
    "Nolde_Ples_okrog_zlatega_teleta.jpg",
    "Ples okrog zlatega teleta",
    "",
    "Olje na platnu",
    ["Emil", "Nolde"],
    "1910",
    "Ekspresionizem",
    "Nemčija",
    [],
    "https://www.wikiart.org/en/emil-nolde/dance-around-the-golden-calf-1910",
  ),
  new Picture(
    "Matisse_Zelena_crta.jpg",
    "Zelena črta (Portret gospe Matisse)",
    "Matisse ni niti malo družbeno kritičen v tej sliki, saj riše samo svojo ženo.",
    "Olje na platnu",
    ["Henri", "Matisse"],
    "1905",
    "Fauvizem",
    "Francija",
    [
      (new Annotation(45, 50, "Nos", "Nos je predstavljal tridimenzionalno obliko, zato ga je sploščil z zeleno črto.")).toJSON(),
    ],
    "https://eucbeniki.sio.si/lum9/2383/index3.html",
  ),
  new Picture(
    "Matisse_Ples.webp",
    "Ples",
    "Slika vsebuje manj barv, ampak so te močne. Robovi so poudarjeni.",
    "Olje na platnu",
    ["Henri", "Matisse"],
    "1910",
    "Fauvizem",
    "Francija",
    [],
    "https://arthive.com/sl/henrimatisse/works/217362~Ples_II",
  ),
  new Picture(
    "Boccioni_Stanje_duha_Slovo.jpg",
    "Stanje duha: Slovo",
    "Okolice na sliki ne vidimo jasno - posledično je možnih več predstav (parna lokomotiva ipd.), fragmentirani vtisi.",
    "Olje na platnu",
    ["Umberto", "Boccioni"],
    "1911",
    "Futurizem",
    "Italija",
    [],
    "https://www.moma.org/collection/works/78648",
  ),
  new Picture(
    "Balla_Pes_na_vrvici.jpg",
    "Pes na vrvici",
    "Na tej sliki se lahko izjemno dobro vidi, kako je avtorja kot futurista zanimalo predvsem gibanje.",
    "Olje na platnu",
    ["Giacomo", "Balla"],
    "1912",
    "Futurizem",
    "Italija",
    [
      (new Annotation(50, 75, "Gibanje", "Pes in sprehajalec se gibata.")).toJSON(),
    ],
    "https://en.wikipedia.org/wiki/File:Giacomo_Balla,_1912,_Dynamism_of_a_Dog_on_a_Leash,_oil_on_canvas,_89.8_x_109.8_cm,_Albright-Knox_Art_Gallery.jpg",
  ),
  new Picture(
    "Boccioni_Edinstvene_oblike_nadaljevanja_v_prostoru.jpg",
    "Edinstvene oblike nadaljevanja v prostoru",
    "Diagonala predstavlja gibanje",
    "Bron",
    ["Umberto", "Boccioni"],
    "1913",
    "Futurizem",
    "Italija",
    [],
    "https://www.moma.org/collection/works/81179",
  ),
  new Picture(
    "Braque_Tihozitje_z_violino_in_vrcem.jpg",
    "Tihožitje z violino in vrčem",
    "Uporablja tri osnovna telesa, valj, stožec in pa kroglo. Nima vsebine, nima čustev in nima simbolike. Samo likovni elementi nakazujejo na slikarsko avtonomijo. Predmeti dodajo telesnost.",
    "Olje na platnu",
    ["Georges", "Braque"],
    "1909",
    "Kubizem",
    "Francija",
    [],
    "https://www.georgesbraque.org/violin-and-palette.jsp#prettyPhoto",
  ),
  new Picture(
    "Picasso_Avignonske_gospodicne.jpg",
    "Avignonske gospodične",
    "Picassova prva kubistična slika, katero je zelo dolgo skrival pred svetom. Ta slika predstavlja preboj v umetnosti, kot nekaj abstraktnega.",
    "Olje na platnu",
    ["Pablo", "Picasso"],
    "1907",
    "Kubizem",
    "Francija",
    [
      (new Annotation(70, 50, "Obraz", "Obraz daje vtis, da ženske gledami iz več strani hkrati.")).toJSON(),
    ],
    "https://en.wikipedia.org/wiki/File:Les_Demoiselles_d%27Avignon.jpg",
  ),
];
