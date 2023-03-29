<script lang="ts">
	import { PICTURES } from "./slike";
	import { OBDOBJA } from "./obdobja";
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import { PREFIX } from "./slike.js";
	import Switch from '@smui/switch';
  	import FormField from '@smui/form-field';
	import { navigate } from "svelte-navigator";
	import Button, { Icon, Label } from "@smui/button";

	let study = localStorage.getItem("mode") === "study";

	function getRandomInteger(min: number, max: number) {
		return Math.floor(Math.random() * (max - min)) + min;
	} 

	function random() {
		let rand = getRandomInteger(0, PICTURES.length)
		let timestamp = Date.now();
		localStorage.setItem("timestamp", timestamp.toString());
		navigate(`/slike/${rand}`)
	}
</script>

<svelte:head>
	<title>Umetnostna zgodovina</title>
	<meta name="description" content="Umetnostna zgodovina" />
</svelte:head>

<section>
	<h1>
		Umetnostna zgodovina
	</h1>

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

	<h4>Katalog slik, katere obravnavamo pri umetnostni zgodovini na Gimnaziji Bežigrad.</h4>

	{#each OBDOBJA as obdobje}
		<h2>{obdobje.name}</h2>
		{@html obdobje.description}
		<br>
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
						<div style="display: inline-block; position: relative; height: 8vh;"><img src={`${PREFIX}${picture.filename}`} style="object-fit: contain; height: 100%;"></div>
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
	{/each}

	<h2>Dodatni viri in zapiski</h2>
	Učenje umetnostne zgodovine na Gimnaziji Bežigrad je težko. Čez leta so dijaki ustvarili mnogo zapiskov, tukaj pa zbiramo najboljše.

	<h2>Viri</h2>
	<li>dr. Tanja Mastnak - profesorica umetnosti na Gimnaziji Bežigrad</li>
	<li>Zapiski 1.A v letu 2022/2023 za 1. test umetnostne zgodovine</li>

	<h2>O programu</h2>
	Spletna stran je bila spisana kot projektna naloga pri prof. Šuštaršiču za informatiko.
	Spletna stran je popolnoma odprtokodna, licencirana pod AGPLv3 licenco.
	Kdorkoli lahko ureja te zapiske in jih pomaga izboljševati.
	Če želite pomagati pri projektu, pa vendar ne znate ravno programirati, da bi dodali še kaj,
	mi lahko kadarkoli pišete na šolski e-naslov <a href="mailto:mitja.severkar@gimb.org">mitja.severkar@gimb.org</a>.
	Vaše predloge bom poskušal implementirati čim prej.
	<p/>
</section>
