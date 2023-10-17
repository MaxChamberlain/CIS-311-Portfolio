<script lang="ts">
	import { properNumber, properText } from '../utils/proper';
	import Button from './Button.svelte';

	export let repo = {
		html_url: '',
		name: '',
		language: '',
		default_branch: '',
		owner: {
			avatar_url: ''
		},
		size: 0
	};
  export let index = 0;

	const colors = new Map();
	colors.set('JavaScript', '#f1e05a');
	colors.set('TypeScript', '#3178c6');
	colors.set('Java', '#b07219');
	colors.set('Go', '#00add8');
	colors.set('Svelte', '#ff3e00');
	colors.set('HTML', '#de4b26');
	colors.set('PHP', '#4f5d95');

	function copyText(e: any) {
		navigator.clipboard.writeText(repo.html_url);
		e.target.innerText = 'Copied!';
		e.target.style.opacity = 0.5;
		e.target.style.pointerEvents = 'none';
		setTimeout(() => {
			e.target.innerText = 'Copy Clone Link';
			e.target.style.opacity = 1;
			e.target.style.pointerEvents = 'all';
		}, 3000);
	}
</script>

<li
	class={`flex flex-col items-start whitespace-nowrap gap-4 bg-white rounded transition-colors w-full p-2 xl:p-4 shadow fade-enter`}
  style={`animation-delay: ${index * 50}ms`}
>
	<div class="w-full flex flex-col xl:flex-row justify-between items-start xl:items-center gap-2">
		<div class="flex gap-2 flex-col xl:flex-row">
			<h2>{properText(repo.name.split('-').join(' '))}</h2>
			<h2 class="opacity-50">@{repo.name}</h2>
		</div>
		<div class="flex gap-2">
			<Button
				type="primary"
				variant="outlined"
				size="small"
				onClick={() => (window.location.href = repo.html_url)}
				label="Visit Repo"
			/>
			<Button
				type="primary"
				size="small"
				variant="outlined"
				onClick={copyText}
				label="Copy Clone Link"
			/>
		</div>
	</div>
	<div class="w-full flex justify-between items-start xl:items-center gap-2 flex-col xl:flex-row">
		<div class="w-full flex justify-start items-center gap-2 opacity-80 text-sm">
			<div class="h-4 w-4 rounded-full" style={`background-color: ${colors.get(repo.language)}`} />
			<h2>{repo.language}</h2>
		</div>
		<div class="flex items-center gap-2 justify-end">
			<h2 class="opacity-20">{properNumber(repo.size)} KB</h2>
			<p class="text-sm opacity-60">{repo.default_branch} branch</p>
			<img src={repo.owner.avatar_url} alt="avatar" class="h-5 w-5 rounded-full" />
		</div>
	</div>
</li>


