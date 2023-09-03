<script>
	import GithubListItem from '../../components/GithubListItem.svelte';
	export let data;
	const { githubRepositories } = data;
	console.log(githubRepositories);
</script>

<main class="w-full max-w-7xl p-4 mx-auto">
	<h1 class="py-8">GitHub Repositories</h1>
	<section class="max-h-[45rem] relative">
		<div class="absolute bottom-0 right-0 left-0 h-8 bg-gradient-to-t from-[#f7f7f6] to-white/0" />
		<div class="absolute top-0 right-0 left-0 h-8 bg-gradient-to-b from-[#f7f7f6] to-white/0" />
		<ul class="flex flex-col gap-4 max-h-[45rem] border-y overflow-y-auto py-8 px-2">
			{#each githubRepositories as repo}
				<GithubListItem {repo} />
			{/each}
		</ul>
	</section>
</main>
