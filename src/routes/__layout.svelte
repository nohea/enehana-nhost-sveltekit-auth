<script>
	import LoginStatusBox from '$lib/components/LoginStatusBox.svelte';
</script>

<LoginStatusBox />

<div>
	<h1>Nhost Hasura Auth + SvelteKit</h1>
	<main>
		<slot />
	</main>
</div>
<div>
	<section class="nav">
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/login">Login</a></li>
		</ul>
	</section>
</div>
