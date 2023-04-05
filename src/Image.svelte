<script lang="ts">
  import Tooltip, { Wrapper, Title, Content } from '@smui/tooltip';
  import Button, { Label, Icon } from '@smui/button';
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  import Select, { Option } from '@smui/select';
  import Autocomplete from '@smui-extra/autocomplete';
  import { OBDOBJA, OBDOBJA_NAMES } from "./obdobja";
	import { PICTURES, PREFIX } from './slike';
	import { to_number } from 'svelte/internal';
  import { Obdobje } from "./obdobja";
	import { navigate } from 'svelte-navigator';

  export let id: number;
  let data = {picture: PICTURES[to_number(id)]};

  let title = "";
  let author: string = "";
  let year = "";
  let period: Obdobje;
  let country = "";
  let study = localStorage.getItem("mode") === "study";

  let titleCorrect = false;
  let authorCorrect = false;
  let showResults = false;
  let yearCorrect = false;
  let periodCorrect = false;
  let countryCorrect = false;

  let hours = 0;
  let secs = 0;

  let selected = JSON.parse(localStorage.getItem("exclude") === null ? "[]" : localStorage.getItem("exclude"));

  function load() {
    data = {picture: PICTURES[to_number(id)]};

    title = "";
    author = "";
    year = "";
    period = undefined;
    country = "";
    study = localStorage.getItem("mode") === "study";

    titleCorrect = false;
    authorCorrect = false;
    showResults = false;
    yearCorrect = false;
    periodCorrect = false;
    countryCorrect = false;
  }

  function getRandomInteger(min: number, max: number) {
		return Math.floor(Math.random() * (max - min)) + min;
	} 

	function random() {
    let pictures = PICTURES;
    let t = 0;
    for (let i = 1; i < pictures.length; i++) {
      if (pictures[i].filename === data.picture.filename) {
        t = i;
        break;
      }
    }
    let depth = 0;
    while (true) {
      depth++;
      if (depth > 100) return;
      let rand = getRandomInteger(0, pictures.length);
      if (rand == t) continue;
      let picture = PICTURES[rand];
      if (selected.includes(picture.period)) continue;
      navigate(`/slike/${rand}`);
      id = rand;
      load();
      return;
    }
	}

  function checkAuthor() {
    let k = -1;
    let res = author.trim().split(" ");
    for (let i in res) {
      let found = false;
      for (let n in data.picture.author) {
        let corr = data.picture.author[n];
        let curr = res[i];
        //console.log(corr, curr);
        if (curr.toLowerCase() == corr.toLowerCase()) {
          if (k >= to_number(n)) {
            return false;
          }
          k = to_number(n);
          found = true;
        }
      }
      if (!found) {
        return false;
      }
    }
    return true;
  }

  function getTime() {
    let time = Date.now();
    let start = to_number(localStorage.getItem("timestamp"));
    let diff = time - start;
    let seconds = diff / 1000; // ms to s
    hours = Math.floor(seconds / 60);
    secs = Math.floor(seconds % 60);
  }

  function checkAnswers() {
    showResults = true;
    if (title.trim().toLowerCase() === data.picture.title.trim().toLowerCase()) {
      titleCorrect = true;
    }
    authorCorrect = checkAuthor();

    console.log(period, data.picture.period);
    periodCorrect = period === undefined ? false : period.name === data.picture.period;

    let y = data.picture.year.toLowerCase().split("-")
    let years = year.toLowerCase().split("-");
    console.log(y, years);
    yearCorrect = false;
    for (let i in years) {
      let ye = years[i];
      if (y.includes(ye)) {
        yearCorrect = true;
        break
      }
    }

    let origin = data.picture.origin.toLowerCase().split(", ")
    let og = country.toLowerCase().split(", ");
    console.log(origin, og);
    countryCorrect = false;
    for (let i in og) {
      let ye = og[i];
      if (origin.includes(ye)) {
        countryCorrect = true;
        break
      }
    }
  }

  function solve() {
    if (!showResults) return;
    year = data.picture.year;
    for (let i in OBDOBJA) {
      if (OBDOBJA[i].name !== data.picture.period) continue;
      period = OBDOBJA[i];
      break;
    }
    author = data.picture.author.join(" ");
    title = data.picture.title;
    country = data.picture.origin;
    checkAnswers();
  }

  function update() {
    setTimeout(() => {
      console.log("change")
      if (!showResults) return;
      checkAnswers()
    }, 100);
  }

  setInterval(getTime, 1000);
</script>

<div style="position: absolute; top: 0; left: 0;">
  <Button on:click={() => navigate("/")} variant="raised">
    <Icon class="material-icons">home</Icon>
    <Label>Prva stran</Label>
  </Button>
</div>

{#if study}
  <div style="position: absolute; top: 0; right: 0; text-align: right;">
    {#if !showResults}
      <Button on:click={checkAnswers} variant="raised">
        <Icon class="material-icons">check</Icon>
        <Label>Pokaži rezultate</Label>
      </Button>
    {:else}
      {#if !(titleCorrect && authorCorrect && yearCorrect && periodCorrect && countryCorrect)}
        <Button on:click={solve} variant="raised">
          <Icon class="material-icons">check</Icon>
          <Label>Pokaži rešitve</Label>
        </Button>
      {:else}
        <Button on:click={random} variant="raised">
          <Icon class="material-icons">navigate_next</Icon>
          <Label>Naslednja naključna slika</Label>
        </Button>
      {/if}
    {/if}
    <p/>
    <span style="font-size: 40px;">{hours}:{secs}</span>
  </div>
{/if}

<p/>

{#if study}
  <div style="white-space: nowrap;">
    <div style="width: 90%;" class="inline-block">
      <Textfield
        style="width: 100%;"
        helperLine$style="width: 100%;"
        bind:value={title}
        on:keydown={update}
        label="Ime slike"
      >
        <HelperText slot="helper">Sem vpišite ime slike</HelperText>
      </Textfield>
    </div>
    {#if showResults}<div style="width: 5%;" class="inline-block">{#if titleCorrect}✅{:else}❌{/if}</div>{/if}
  </div>
  <div>
    <Textfield bind:value={author} label="Avtor" style="width: 23%;" on:keydown={update} helperLine$style="width: 23%;"></Textfield>
    <Textfield bind:value={year} label="Letnica" style="width: 23%;" on:keydown={update} helperLine$style="width: 23%;"></Textfield>
    <Autocomplete bind:value={period} label="Obdobje ali slog"
      style="width: 23%;" textfield$style="width: 100%;" options={OBDOBJA}
      getOptionLabel={(option) => option ? option.name : ''}
    />
    <Textfield bind:value={country} label="Mesto ali država" on:keydown={update} style="width: 23%;" helperLine$style="width: 23%;"></Textfield>
  </div>
  <div style="white-space: nowrap;">
    {#if showResults}<div class="w25 inline-block"><div class="hcenter">{#if authorCorrect}✅{:else}❌{/if}</div></div>{/if}
    {#if showResults}<div class="w25 inline-block"><div class="hcenter">{#if yearCorrect}✅{:else}❌{/if}</div></div>{/if}
    {#if showResults}<div class="w25 inline-block"><div class="hcenter">{#if periodCorrect}✅{:else}❌{/if}</div></div>{/if}
    {#if showResults}<div class="w25 inline-block"><div class="hcenter">{#if countryCorrect}✅{:else}❌{/if}</div></div>{/if}
  </div>
{:else}
  <h1>{data.picture.title}</h1>
  <span class="center-align">{@html data.picture.description}</span>
  <span class="center-align">{data.picture.author.join(" ")}, {data.picture.year}, {data.picture.period}, {data.picture.method}, {data.picture.origin}, <a href={data.picture.source}>Vir slike</a></span>
{/if}
<div class="image">
  {#each data.picture.annotations as annotation}
    <Wrapper rich style="top: {annotation.y}%; left: {annotation.x}%; width: 100%; position: absolute;">
      <div class="annotation"></div>
      <Tooltip>
        <Title>{annotation.title}</Title>
        <Content>{annotation.description}</Content>
      </Tooltip>
    </Wrapper>
  {/each}
  <img src={`${PREFIX}${data.picture.filename}`} alt={data.picture.description}>
</div>

<style>
  .image {
      position: relative;
      top: 5px;
  }

  img {
      max-height: 75vh;
      width: 100%;
      object-fit: contain;
  }
</style>
