<script lang="ts">
	import { PICTURES } from "./slike";
	import { OBDOBJA, OBDOBJA_NAMES } from "./obdobja";
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import { PREFIX } from "./slike.js";
	import Switch from '@smui/switch';
  	import FormField from '@smui/form-field';
	import { navigate } from "svelte-navigator";
	import Button, { Icon, Label } from "@smui/button";
	import Accordion, { Panel, Header, Content as AccordionContent } from '@smui-extra/accordion';
	import SegmentedButton, { Segment } from '@smui/segmented-button';

	let study = localStorage.getItem("mode") === "study";

	function getRandomInteger(min: number, max: number) {
		return Math.floor(Math.random() * (max - min)) + min;
	} 

	function random() {
		let rand = getRandomInteger(0, PICTURES.length)
		let timestamp = Date.now();
		localStorage.setItem("timestamp", timestamp.toString());
		let picture = PICTURES[rand];
		if (selected.includes(picture.period)) {
			random()
			return;
		}
		navigate(`/slike/${rand}`)
	}

	let selected = JSON.parse(localStorage.getItem("exclude") === null ? "[]" : localStorage.getItem("exclude"));
	let exclude = JSON.parse(localStorage.getItem("excludePrint") === null ? "[]" : localStorage.getItem("excludePrint"));
</script>

<svelte:head>
	<title>Umetnostna zgodovina</title>
	<meta name="description" content="Umetnostna zgodovina" />
</svelte:head>

<section>
	<h1>
		Umetnostna zgodovina
	</h1>

	<Accordion>
		<Panel>
			<Header>Obdobja in slogi</Header>
			<AccordionContent>
				Tukaj lahko izločite obdobja, ki jih ne pišete na testu. Program vam bo prikazoval samo slike iz obdobij, katerih niste izločili.
				<p/>
				<SegmentedButton segments={OBDOBJA_NAMES} let:segment bind:selected on:change={() => {
					console.log(selected);
					localStorage.setItem("exclude", JSON.stringify(selected));
				}}>
					<Segment segment={segment}>
						<Label>{segment}</Label>
					</Segment>
				</SegmentedButton>
				<p/>
				S klikom na spodnja gumba lahko nastavite, da vidite obdobja, katera pišete samo na enemu izmed testov.
				<b>POMEMBNO! To so samo okvirne smernice, kaj približno pišete v specifičnih testih. Vedno je možno, da kakšen razred ne piše tako, kot je tukaj narejeno, zato še vedno priporočam, da si sami prilagodite izbrana obdobja. Pri prvem testu pišete tudi nekatere slike, ki niso v teh določenih obdobjih (Kandinski: S tremi jezdeci, Abstraktna umetnost). Priporočam, da si ga zapomnete posebej.</b>
				<p/>
				<Button on:click={() => {
					let found = false;
					selected = [];
					for (let i = 0; i < OBDOBJA.length; i++) {
						if (OBDOBJA[i].name === "Realizem") {
							found = true;
						}
						if (!found) continue;
						selected.push(OBDOBJA[i].name);
					}
					localStorage.setItem("exclude", JSON.stringify(selected));
				}} variant="raised">
					<Icon class="material-icons">grading</Icon>
					<Label>1. test</Label>
				</Button>
				<Button on:click={() => {
					selected = [];
					for (let i = 0; i < OBDOBJA.length; i++) {
						if (OBDOBJA[i].name === "Realizem") {
							break;
						}
						selected.push(OBDOBJA[i].name);
					}
					localStorage.setItem("exclude", JSON.stringify(selected));
				}} variant="raised">
					<Icon class="material-icons">grading</Icon>
					<Label>2. test</Label>
				</Button>
				<Button on:click={() => {
					selected = [];
					localStorage.setItem("exclude", JSON.stringify(selected));
				}} variant="raised">
					<Icon class="material-icons">clear</Icon>
					<Label>Počisti izbiro</Label>
				</Button>
			</AccordionContent>
		</Panel>
	</Accordion>
	
	<p/>

	<FormField>
		<Switch bind:checked={study} on:click={() => {
			localStorage.setItem("mode", study ? "" : "study");
		}}/>
		<span slot="label">Način učenja</span>
	</FormField>
	{#if study}
		<p/>
		<Button on:click={random} variant="raised">
			<Icon class="material-icons">school</Icon>
			<Label>Začni učenje</Label>
		</Button>
	{/if}

	<p/>
	Tukaj lahko izločite stvari, ki jih ne želite imeti v tisku.
	<br>
	<SegmentedButton segments={["ime", "avtor", "opis", "anotacije"]} let:segment bind:selected={exclude} on:change={() => {
		localStorage.setItem("excludePrint", JSON.stringify(exclude));
	}}>
		<Segment segment={segment}>
			<Label>{segment}</Label>
		</Segment>
	</SegmentedButton>
	<p/>
	<Button on:click={() => navigate("/print")} variant="raised">
		<Icon class="material-icons">print</Icon>
		<Label>Natisni izbrane slike</Label>
	</Button>

	<h4>Katalog slik, katere obravnavamo pri umetnostni zgodovini na Gimnaziji Bežigrad.</h4>

	<h2>L'avenir</h2>
	V šolskem letu 2022/2023 na Gimnaziji Bežigrad pišemo 2. test iz razstave v Mestni galeriji, L'avenir. Nekaj zapiskov in slik je na naslednjih straneh/povezavah:
	<li><a href="https://cloud.severkar.eu/s/teN43FpyRaiqKbx">Vrhunski zapiski za L'avenir. Najlepša hvala Anji.</a></li>
	<li><a href="https://cloud.severkar.eu/s/dRQpJgW35GJsNer">https://cloud.severkar.eu/s/dRQpJgW35GJsNer</a></li>
	<li><a href="https://drive.google.com/drive/folders/1-0JmbZDgVXD_jOxFSS6-2jGlotqJQf6_">https://drive.google.com/drive/folders/1-0JmbZDgVXD_jOxFSS6-2jGlotqJQf6_</a></li>

	<h2>Zadnje spremembe</h2>
	<b>To je kar pomemben del, saj tukaj objavljam vse spremembe, ki so bile narejene. Tako lahko preprosto vidite, kaj sem spremenil in tudi popravite svoje zapiske v skladu s tem.</b>

	<h3>5. 4. 2023</h3>
	Ob 8.25:
	<li>Dodanih je bilo še nekaj dodatnih opisov za razna obdobja modernizma.</li>

	<h3>5. 4. 2023</h3>
	Ob 22.20:
	<li><b>POMEMBNO: Dodani so bili še eni zapiski za L'avenir.</b></li>

	<p/>

	Ob 21.55:
	<li><b>POMEMBNO: Dodana je bila slika van Gogha, in sicer Pere Tanguy. Ta sodi v postimpresionizem. Očitno sem pri postimpresionizmu manjkal, tako da je nekaj slik manjkalo. To bi moralo biti to.</b></li>
	<li>Spremenil iz Obdobje v Obdobje ali slog</li>
	<li>Dodal še eno anotacijo pri Dalijevi sliki Uganka poželenja.</li>
	<li>Izboljšal UX pri načinu učenja.</li>

	<p/>

	Ob 17.25:
	<li>Dodan je bil gumb za izbiro testa (glejte razdelek Obdobja)</li>

	<p/>

	Ob 17.10:
	<li><b>POMEMBNO: Dodana je bila slika Cezanna, in sicer Tihožitje s košaro jabolk. Ta sodi v postimpresionizem.</b></li>
	<li>Dodana je bila formula impresionizma: umetnost = narava - človeški faktor</li>
	<li>Pri dadaizmu sem spremenil manifest v manifeste</li>
	<li>Dodal sem t.i. dedke modernizma, van Gogh, Cezanne in Gaugin.</li>
	<li>Dodal sem malo boljši opis za fauvizem.</li>

	<h3>4. 4. 2023</h3>
	Ob 22.20:
	<li><b>POMEMBNO: Dodana je bila slika Kandinskega, s tremi jezdeci. Ta sodi v abstraktno umetnost.</b></li>

	<p/>
	
	Ob 22.05:
	<li>V mapo za L'avenir na povezavi <a href="https://cloud.severkar.eu/s/dRQpJgW35GJsNer">https://cloud.severkar.eu/s/dRQpJgW35GJsNer</a> je bilo dodanih še nekaj skenov tistih listov, ki smo si jih lahko vzeli v galeriji.</li>
	<li>Vprašal sem prof. Tanjo Mastnak in dodatno potrdil dejstva: surrealizem se res začne v Franciji, abstraktna umetnost pa je vsepovsod po svetu in nima svojega začetka v kaki specifični lokaciji.</li>
	<li>Dodal sem še opis vrat pri sliki Pred lovom, slikarja Šubica.</li>

	{#each OBDOBJA as obdobje}
		{#if !selected.includes(obdobje.name)}
			<h2>{obdobje.name}</h2>
			{#if obdobje.description !== ""}
				{@html obdobje.description}
				<br>
			{/if}
			{#if obdobje.period !== ""}
				{obdobje.period},
			{/if}
			{#if obdobje.origin !== ""}
				{obdobje.origin}
				<br>
			{/if}
			<p/>
			{#each PICTURES as picture, i}
				{#if picture.period === obdobje.name}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div on:click={() => navigate(`/slike/${i}`)}>
						<Paper>
							<!-- svelte-ignore a11y-missing-attribute -->
							<div style="display: inline-block; position: relative; height: 8vh;"><img src={`${PREFIX}small/${picture.filename}`} style="object-fit: contain; height: 100%;"></div>
							<div style="width: 10px; display: inline-block;"></div>
							<div style="display: inline-block;">
								<Title>{picture.title}</Title>
								<Subtitle>{picture.author.join(" ")}</Subtitle>
								<Content>Klikni za analizo slike. {#if picture.annotations.length !== 0}<Icon class="material-icons">swipe_left</Icon>{/if}</Content>
							</div>
						</Paper>
					</div>
					<br>
				{/if}
			{/each}
		{/if}
	{/each}

	<h2>Dodatni viri in zapiski</h2>
	Učenje umetnostne zgodovine na Gimnaziji Bežigrad je težko. Čez leta so dijaki ustvarili mnogo zapiskov, tukaj pa zbiramo najboljše.

	<h2>Viri</h2>
	<li>dr. Tanja Mastnak - profesorica umetnosti na Gimnaziji Bežigrad</li>
	<li>Zapiski 1.A v letu 2022/2023 za 1. test umetnostne zgodovine</li>

	<h2>Dodatne opombe</h2>
	<li>Pri iskanju slik sem se vedno potrudil poiskati čim večje. Pri sodobni umetnosti je šlo na tesno, saj je večina avtorjev še živih oz. ni minilo 70 let od njihove smrti. To pomeni, da so te slike še vedno pokrite pod zakoni o avtorskih pravicah, posledično jih Wikipedija ne sme naložiti v večjih resolucijah. Menim, da je uporaba trenutnih slik pokrita pod <a href="https://sl.wikipedia.org/wiki/Po%C5%A1tena_uporaba">pošteno rabo</a> (glej <a href="https://en.wikipedia.org/wiki/Fair_use">fair use</a>) z namenom obveščanja javnosti in pouka. Od te spletne strani ne služim denarja in nikoli ne bom, saj je ta spletna stran namenjena izključno uporabi v izobraževalne namene in ne oglaševanju kakršnekoli vrste. Vse avtorske pravice posamičnih slik pripadajo pripadajočim avtorjem.</li>

	<h2>O programu</h2>
	Spletna stran je bila spisana kot projektna naloga pri prof. Šuštaršiču za informatiko.
	Spletna stran je <a href="https://github.com/mytja/umetnost">popolnoma odprtokodna</a>, licencirana pod AGPLv3 licenco.
	Kdorkoli lahko ureja te zapiske in jih pomaga izboljševati.
	Če želite pomagati pri projektu, pa vendar ne znate ravno programirati, da bi dodali še kaj,
	mi lahko kadarkoli pišete na šolski e-naslov <a href="mailto:mitja.severkar@gimb.org">mitja.severkar@gimb.org</a>.
	Vaše predloge bom poskušal implementirati čim prej.
	<p/>
	Vse pravice pridržane. <br>
	Copyright Mitja Ševerkar, 2023.
	<p/>
</section>
