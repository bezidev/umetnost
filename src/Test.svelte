<script lang="ts">
	import { PICTURES, PREFIX } from "./slike";

    export let id: number;

    const TEST1_PERIODS = ["Gotika", "Renesansa", "Barok", "Neoklasicizem", "Romantika"];

    let waiting = 0;
    const notifyLoaded = () => {
        console.log('loaded!');
        //window.print();
    }
    const onload = el => {
        waiting++
        el.addEventListener('load', () => {
            waiting--
            if (waiting === 0) {
                notifyLoaded()
            }
        })
    }

    function removeNulls(a) {
        let b = [];
        for (let i = 0; i < a.length; i++) if (a[i] !== null) b.push(a[i]);
        return b;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function randomPictures(count: number, available) {
        let a = [];
        while (a.length != count) {
            let i = getRandomInt(available.length);
            console.log("found", available[i], available.length, count, a.length);
            a.push(available[i]);
            available.splice(i, 1);
        }
        return a;
    }

    const IKONOGRAFSKA1 = ["Veronese_Ugrabitev_Evrope.webp", "Kavcic_Salomonova_sodba.webp", "Van_Eyck_Giovanni_Arnolfini_s_soprogo.webp", "David_Prisega_Horacijev.webp", "Velazques_Predaja_Brede.webp", "Rafael_Madona_v_zelenju.webp"];
    let skupne1 = removeNulls(PICTURES.map((e) => TEST1_PERIODS.includes(e.period) && !IKONOGRAFSKA1.includes(e.filename) ? e : null));
    let skupne2 = removeNulls(PICTURES.map((e) => !TEST1_PERIODS.includes(e.period) && !IKONOGRAFSKA1.includes(e.filename) ? e : null));

    const TESTS = [
        {
            1: [
                {
                    id: "Oblikovna analiza",
                    name: "Oblikovno analiziraj spodnjo sliko. Analizo napiši v stavkih, vsak element naj bo smiselno opredeljen.",
                    pictures: skupne1,
                    selectPictures: 1,
                    points: 6,
                },
            ],
            2: [
                {
                    id: "Ikonografska analiza",
                    name: "Ikonografsko analiziraj spodnjo sliko. Navedi tudi avtorja, naslov in umetnostnozgodovinsko obdobje.",
                    pictures: removeNulls(PICTURES.map((e) => IKONOGRAFSKA1.includes(e.filename) ? e : null)),
                    selectPictures: 1,
                    points: 6,
                },
            ],
            3: [
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Obla plastika<br>- Atribut<br>- Jedkanica<br>- Datacija<br>- Akt<br>- Iluminiran rokopis",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Atribut<br>- Provenienca<br>- Jedkanica",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Mozaik<br>- Pigment<br>- Vitraž<br>- Obla plastika<br>- Bakrorez<br>- Provenienca",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Provenienca<br>- Karikatura<br>- Akt<br>- Obla plastika<br>- Linearna perspektiva<br>- Freska",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
            ],
            4: [
                {
                    id: "Arhitektura",
                    name: "Katere arhitekturne naloge poznamo? Katere osnovne konstrukcijske elemente poznaš? Navedi razlike med centralno in longitudinalno arhitekturo.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Zgodnjerenesančno slikarstvo",
                    name: "Opiši zgodnjerenesančno slikarstvo ob primerih.",
                    pictures: [],
                    selectPictures: 0,
                    points: 5,
                },
                {
                    id: "Primerjava",
                    name: "Primerjaj manierizem in barok v kiparstvu ob primerih.",
                    pictures: [],
                    selectPictures: 0,
                    points: 5,
                },
            ],
            5: [
                {
                    id: "Slike",
                    name: "Ob sllikah navedi ime avtorja, naslov dela in obdobje, v katerem je delo nastalo.",
                    pictures: skupne1,
                    selectPictures: 3,
                    points: 6,
                },
            ],
        },
        {
            1: [
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Manifest<br>- Instalacija<br>- Bruitistična poezija/glasba.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Akademsko slikarstvo<br>- Salon zavrnjenih<br>- Dada<br>- Cabaret Voltaire<br>- Manifest<br>- Stroji za hrup.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Suprematizem<br>- Salon zavrnjenih<br>- Nefiguralna umetnost<br>- Konceptualna umetnost<br>- Invencija<br>- Avantgardna umetnost.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Street Art<br>- Objekt<br>- Abstraktni ekspresionizem<br>- Performans<br>- Invencija<br>- Abstrahiranje.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Sprevržena umetnost<br>- Surrealizem<br>- Bruitistična poezija/glasba.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Pojmi",
                    name: "Razloži pojme:<br>- Objekt<br>- Ready made<br>- Psihični avtomatizem.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
            ],
            2: [
                {
                    id: "Obdobje",
                    name: "Navedi značilnosti, avtorje in glavna dela impresionistične umetnosti.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Obdobje",
                    name: "Navedi značilnosti, avtorje in glavna dela postimpresionistične umetnosti.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Obdobje",
                    name: "Navedi značilnosti, avtorje in glavna dela realizma.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Obdobje",
                    name: "Predstavi vse kar veš o realizmu in primerjaj slovenske ter francoske avtorje v realizmu. Predstavi vse ",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
            ],
            3: [
                {
                    id: "Smeri sodobne umetnosti",
                    name: "Katera smer sodobne umetnosti povezuje likovno umetnost in film?",
                    pictures: [],
                    selectPictures: 0,
                    points: 2,
                },
                {
                    id: "Primerjava",
                    name: "Ob primerih primerjaj dadaizem in futurizem. Napiši tudi avtorje in naslove slik.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
                {
                    id: "Primerjava",
                    name: "Ob primerih primerjaj kubizem in futurizem. Napiši tudi avtorje in naslove slik.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
                },
            ],
            4: [
                {
                    id: "Slike",
                    name: "Ob slikah navedi ime avtorja, naslov dela in tehniko/slog/obdobje.",
                    pictures: skupne2,
                    selectPictures: 3,
                    points: 6,
                },
            ],
            5: [
                {
                    id: "Esej",
                    name: "Iz razstave sodobne umetnosti, katero smo obiskali v okviru šole, primerjaj dve umetnini z enim izmed obdobij modernizma. Smiselno utemelji vse primerjave.",
                    pictures: [],
                    selectPictures: 0,
                    points: 10,
                },
            ],
        }
    ];

    let questions = [];
    let total = 0;

    function select() {
        let keys = Object.keys(TESTS[id-1]);
        for (let i = 0; i < keys.length; i++) {
            let q1 = TESTS[id-1][keys[i]];
            let k = getRandomInt(q1.length);
            questions.push(q1[k]);
            total += q1[k].points;
        }
    }

    select();
</script>

<style>
    .obdobje {
        page-break-inside: avoid;
    }
</style>

<svelte:head>
	<title>Umetnostna zgodovina</title>
	<meta name="description" content="Umetnostna zgodovina" />
</svelte:head>

<section>
	<h1>
		{id}. test likovne umetnosti
	</h1>
    Test je bil naključno generiran v aplikaciji <a href="https://umetnost.beziapp.si">BežiApp Umetnost</a>.
    Vprašanja v testu se lahko razlikujejo od teh, podanih v tej aplikaciji. To je generirano samo kot primer vprašanj, ki se teoretično
    lahko pojavijo na testu. Odgovore na vprašanja pišete na prazen list (odgovore, ki se navezujejo na slike, lahko pišete tudi na test), podobno kot na pravem testu. <br>
    Čas pisanja: 40min.
    <p/>
    {#each questions as question, i}
        <div class="obdobje">
            <h2>{i+1}. {question.id} ({question.points})</h2>
            {@html question.name}
            <p/>
            {#if question.selectPictures !== 0}
                {#each randomPictures(question.selectPictures, question.pictures) as picture}
                    <img use:onload src={`${PREFIX}${picture.filename}`} alt={picture.description} style="max-width: 300px; max-height: 300px;">
                {/each}
                <div style="height: 50px;"/>
            {/if}
            <p/>
        </div>
    {/each}

    <h3>Skupaj {total} točk. Doseženih ________ točk.</h3>

	
</section>
