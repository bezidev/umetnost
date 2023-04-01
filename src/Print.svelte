<script lang="ts">
	import { onMount } from "svelte";
	import { OBDOBJA } from "./obdobja";
	import { PICTURES, PREFIX } from "./slike";

    let selected = JSON.parse(localStorage.getItem("exclude") === null ? "[]" : localStorage.getItem("exclude"));
    let exclude = JSON.parse(localStorage.getItem("excludePrint") === null ? "[]" : localStorage.getItem("excludePrint"));

    let pictures = {};

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

    function sort() {
        for (let i = 0; i < PICTURES.length; i++) {
            let picture = PICTURES[i];
            if (pictures[picture.period] === undefined || pictures[picture.period] === null) {
                pictures[picture.period] = [[]];
            }
            if (pictures[picture.period][pictures[picture.period].length-1].length >= 3) {
                pictures[picture.period].push([]);
            }
            pictures[picture.period][pictures[picture.period].length-1].push(picture);
        }
        console.log(pictures);
    }

    onMount(() => {
        sort();
    });
</script>

<style>
    table.no-spacing {
        border-spacing: 10px; /* Removes the cell spacing via CSS */
    }

    td {
        overflow-wrap: break-word;
    }

    tr {
        text-align: left;
    }

    .main {
        padding: 20px;
    }

    .pagebreak { break-after: always; } /* page-break-after works, as well */

    table { page-break-after:auto }
    tr    { page-break-inside:avoid; page-break-after:auto }
    td    { page-break-inside:avoid; page-break-after:auto }
    .obdobje    { page-break-inside:avoid; }
</style>

<div class="main">
    {#each OBDOBJA as obdobje}
        {#if !selected.includes(obdobje.name)}
            <div class="obdobje">
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
                {#if !(pictures[obdobje.name] === undefined || pictures[obdobje.name] === null)}
                    {#each pictures[obdobje.name] as picturePart}
                        <table class="no-spacing">
                            <tr>
                                <th>Slika</th>
                                {#each picturePart as picture}
                                    {#if picture.period === obdobje.name}
                                        <td>
                                            <div style="position: relative">
                                                <div style="max-width: 27vw; max-height: 50vh;">
                                                    {#if !exclude.includes("anotacije")}
                                                        {#each picture.annotations as annotation, i}
                                                            <div style="top: {annotation.y}%; left: {annotation.x}%; width: 100%; position: absolute; z-index: 1;">
                                                                <div class="big-annotation"><span style="left: 4.5px; font-size: 10px; color: black; position: absolute;">{i+1}</span></div>
                                                            </div>
                                                        {/each}
                                                    {/if}
                                                    <img use:onload src={`${PREFIX}${picture.filename}`} style="position: relative; z-index: 0; max-width: 27vw; max-height: 50vh;">
                                                </div>
                                            </div>
                                        </td>
                                        <!--<td>{picture.title}</td>
                                        <td>{picture.author}</td>-->
                                    {/if}
                                {/each}
                                {#if picturePart.length < 3}<td style="width: 100%;"></td>{/if}
                                {#if picturePart.length < 2}<td style="width: 100%;"></td>{/if}
                            </tr>
                            {#if !exclude.includes("ime")}
                                <tr>
                                    <th>Naslov</th>
                                    {#each picturePart as picture}
                                        {#if picture.period === obdobje.name}
                                            <td>
                                                {picture.title}
                                            </td>
                                            <!--<td>{picture.title}</td>
                                            <td>{picture.author}</td>-->
                                        {/if}
                                    {/each}
                                </tr>
                            {/if}
                            {#if !exclude.includes("avtor")}
                                <tr>
                                    <th>Avtor</th>
                                    {#each picturePart as picture}
                                        {#if picture.period === obdobje.name}
                                            <td>
                                                {picture.author.join(" ")}
                                            </td>
                                            <!--<td>{picture.title}</td>
                                            <td>{picture.author}</td>-->
                                        {/if}
                                    {/each}
                                </tr>
                            {/if}
                            {#if !exclude.includes("opis")}
                                <tr>
                                    <th>Opis</th>
                                    {#each picturePart as picture}
                                        {#if picture.period === obdobje.name}
                                            <td>
                                                {@html picture.description}
                                            </td>
                                        {/if}
                                    {/each}
                                </tr>
                            {/if}
                            {#if !exclude.includes("anotacije")}
                                <tr>
                                    <th>Anotacije</th>
                                    {#each picturePart as picture}
                                        {#if picture.period === obdobje.name}
                                            <td>
                                                {#each picture.annotations as annotation, i}
                                                    {i+1}) <b>{annotation.title}</b>: {annotation.description}<br>
                                                {/each}
                                            </td>
                                        {/if}
                                    {/each}
                                </tr>
                            {/if}
                        </table>
                    {/each}
                {/if}
            </div>
            <!--<div class="pagebreak"></div>-->
        {/if}
    {/each}
</div>