<script lang="ts">
    import { Router, Route } from "svelte-navigator";
	import { to_number } from "svelte/internal";
	import Dashboard from "./Dashboard.svelte";
    import Image from "./Image.svelte";
	import Print from "./Print.svelte";
	import Test from "./Test.svelte";
</script>

<Router>
	<main>
		<Route path="/">
			<Dashboard />
		</Route>
		<Route path="/slike/:id" let:params>
			<Image id={to_number(params.id)} />
		</Route>
	</main>
	<Route path="/test/:id" let:params>
		<Test id={to_number(params.id)} />
	</Route>
	<Route path="/print">
		<Print />
	</Route>
</Router>