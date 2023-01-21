<script lang="ts">
  import Tooltip, { Wrapper, Title, Content } from '@smui/tooltip';
  import { PREFIX } from "../../slike.ts";
  import Button, { Label, Icon } from '@smui/button';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div style="position: absolute; top: 0; left: 0;">
  <Button on:click={() => window.location.href = "/"} variant="raised">
    <Icon class="material-icons">home</Icon>
    <Label>Prva stran</Label>
  </Button>
</div>

<h1>{data.picture.title}</h1>
<span class="center-align">{data.picture.author.join(" ")}, {data.picture.year}, {data.picture.period}, {data.picture.method}, {data.picture.origin}</span>
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
      height: 100%;
      width: 100%;
      object-fit: contain;
  }

  .annotation {
      width: 7px;
      height: 7px;
      background: white;
      border: 3px solid black;
      border-radius: 7px;
  }
</style>
