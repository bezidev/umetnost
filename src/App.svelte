<script lang="ts">
    import { Router, Link, Route } from "svelte-navigator";
	import Dashboard from "./Dashboard.svelte";
    import Image from "./Image.svelte";
</script>

<Router>
	<main>
		<Route path="/">
			<Dashboard />
		</Route>
		<Route path="/slike/:id" let:params>
			<Image id={params.id} />
		</Route>
	</main>
</Router>