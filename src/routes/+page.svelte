<script lang="ts">
	import { PICTURES } from "./slike.ts";
	import { OBDOBJA } from "./obdobja.ts";
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
	import { PREFIX } from "./slike.js";
</script>

<svelte:head>
	<title>Umetnostna zgodovina</title>
	<meta name="description" content="Umetnostna zgodovina" />
</svelte:head>

<section>
	<h1>
		Umetnostna zgodovina
	</h1>

	<h4>Katalog slik, katere obravnavamo pri umetnostni zgodovini na Gimnaziji Bežigrad.</h4>

	{#each OBDOBJA as obdobje}
		<h2>{obdobje.name}</h2>
		{obdobje.description}
		<br>
		{#if obdobje.period !== ""}
			{obdobje.period},
		{/if}
		{#if obdobje.origin !== ""}
			{obdobje.origin}
			<br>
		{/if}
		{#each PICTURES as picture, i}
			{#if picture.period === obdobje.name}
				<div on:click={() => window.location.href = `/slike/${i}`}>
					<Paper>
						<div style="display: inline-block; position: relative; height: 8vh;"><img src={`${PREFIX}${picture.filename}`} style="object-fit: contain; height: 100%;"></div>
						<div style="width: 10px; display: inline-block;"></div>
						<div style="display: inline-block;">
							<Title>{picture.title}</Title>
							<Subtitle>{picture.author.join(" ")}</Subtitle>
							<Content>Klikni za analizo slike.</Content>
						</div>
					</Paper>
				</div>
			{/if}
		{/each}
	{/each}
</section>
