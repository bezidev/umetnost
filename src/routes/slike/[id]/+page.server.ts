/** @type {import('./$types').PageLoad} */
import { to_number } from "svelte/internal";
import { PICTURES } from "../../slike";


export function load({ params }) {
  return {
    picture: PICTURES[to_number(params.id)].toJSON(),
  };
}
