<script lang='ts'>
	import GithubListItem from '../../components/GithubListItem.svelte';
  import GithubListItemPlaceholder from '../../components/GithubListItemPlaceholder.svelte';
  import { onMount } from 'svelte';

  const githubRepositories: any = [];
  let loading = true;
  const fetchRepos = async () => {
    const res = await fetch('/api/projects');
    const data = await res.text();
    githubRepositories.push(...JSON.parse(data));
    loading = false;
  };

  onMount(() => {
    fetchRepos();
  });
</script>

<main class="w-full max-w-7xl p-4 mx-auto">
	<h1 class="py-8 text-4xl xl:text-6xl">GitHub Repositories</h1>
	<section class="h-[70vh] relative">
		<div class="absolute bottom-0 right-0 left-0 h-8 bg-gradient-to-t from-[#f7f7f6] to-white/0" />
		<div class="absolute top-0 right-0 left-0 h-8 bg-gradient-to-b from-[#f7f7f6] to-white/0" />
		<ul class="flex flex-col gap-4 h-[70vh] border-y overflow-y-auto overflow-x-hidden py-8 px-2">
      {#if loading}
        {#each ['','','','','',''] as placeholder}
          <GithubListItemPlaceholder />
        {/each}
      {:else}
        {#each githubRepositories as repo}
          <GithubListItem {repo} />
        {/each}
      {/if}
		</ul>
	</section>
</main>
