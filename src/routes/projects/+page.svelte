<script>
	export let data;
	const { githubRepositories } = data;
	console.log(githubRepositories);

	const colors = new Map();
	colors.set('JavaScript', '#f1e05a');
	colors.set('TypeScript', '#3178c6');
	colors.set('Java', '#b07219');
	colors.set('Go', '#00add8');
	colors.set('Svelte', '#ff3e00');
	colors.set('HTML', '#de4b26');
	colors.set('PHP', '#4f5d95');
</script>

<main class="w-full max-w-7xl p-4 mx-auto">
	<h1 class="py-8">GitHub Repositories</h1>
	<section class="max-h-[45rem] relative">
		<div class="absolute bottom-0 right-0 left-0 h-8 bg-gradient-to-t from-[#f7f7f6] to-white/0" />
		<div class="absolute top-0 right-0 left-0 h-8 bg-gradient-to-b from-[#f7f7f6] to-white/0" />
		<ul class="flex flex-col gap-4 max-h-[45rem] border-y overflow-y-auto py-8">
			{#each githubRepositories as repo}
				<a
					class="bg-white rounded border border-stone-100 hover:border-black hover:bg-stone-50 transition-colors w-full p-2 xl:p-4 shadow cursor-pointer"
					href={repo.html_url}
					target="_blank"
				>
					<li class="w-full flex justify-between items-center whitespace-nowrap">
						<h2>{repo.name}</h2>
						<div class="w-full flex justify-end items-center gap-4">
							<h2>{repo.language}</h2>
							<div
								class="h-4 w-4 rounded-full"
								style={`background-color: ${colors.get(repo.language)}`}
							/>
						</div>
					</li>
				</a>
			{/each}
		</ul>
	</section>
</main>
