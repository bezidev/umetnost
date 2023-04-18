<script lang="ts">
	import { PICTURES, PREFIX } from "./slike";

    export let id: number;

    const TEST1_PERIODS = ["Gotika", "Renesansa", "Barok", "Neoklasicizem", "Romantika"];

    let waiting = 0;
    const notifyLoaded = () => {
        console.log('loaded!');
        window.print();
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
            ],
            4: [
                {
                    id: "Arhitektura",
                    name: "Katere arhitekturne naloge poznamo? Katere osnovne konstrukcijske elemente poznaš? Navedi razlike med centralno in longitudinalno arhitekturo.",
                    pictures: [],
                    selectPictures: 0,
                    points: 6,
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
        }
    ]
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
    lahko pojavijo na testu. Odgovore na vprašanja pišete na prazen list (odgovore, ki se navezujejo na slike, lahko pišete tudi na test), podobno kot na pravem testu.
    <p/>
    {#each Object.keys(TESTS[id-1]) as testKey}
        <div class="obdobje">
            <h2>{testKey}. {TESTS[id-1][testKey][0].id} ({TESTS[id-1][testKey][0].points})</h2>
            {@html TESTS[id-1][testKey][0].name}
            <p/>
            {#if TESTS[id-1][testKey][0].selectPictures !== 0}
                {#each randomPictures(TESTS[id-1][testKey][0].selectPictures, TESTS[id-1][testKey][0].pictures) as picture}
                    <img use:onload src={`${PREFIX}${picture.filename}`} alt={picture.description} style="max-width: 300px; max-height: 300px;">
                {/each}
                <div style="height: 50px;"/>
            {/if}
            <p/>
        </div>
    {/each}

    <h3>Skupaj 30 točk. Doseženih ________ točk.</h3>

	
</section>
