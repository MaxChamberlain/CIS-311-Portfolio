<script>
	import { properText } from '../utils/proper';

	export let title = '';
	export let credits = 0;
	export let courseNumber = '';
	export let courseDescriptionLink = '';
</script>

<a href={courseDescriptionLink} target="_blank" aria-label={`external link to the page for ${title}`}>
	<li
		class="bg-white rounded border border-stone-100 hover:border-black hover:bg-stone-50 transition-colors w-full p-2 xl:p-4 shadow cursor-pointer"
	>
		<title class="grid w-full">
			<h2 class="text-ellipsis whitespace-nowrap overflow-hidden text-left">{properText(title)}</h2>
			<h2 class="uppercase">{courseNumber}</h2>
			<h2 class="text-end">{parseFloat(credits.toString()).toFixed(1)}</h2>
		</title>
	</li>
</a>

<style>
	.grid {
		grid-template-columns: 4fr 1fr 1fr;
	}
</style>
