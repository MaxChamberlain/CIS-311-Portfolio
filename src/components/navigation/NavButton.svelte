<script>
	import { page } from '$app/stores';
	let currentRoute = $page.url.pathname;
	export let href = '';
	export let label = '';
</script>

<a
	{href}
	aria-label={`link to ${label}`}
	class={`b-2 uppercase text-sm ${
		currentRoute === href ? 'opacity-100 border-b border-stone-500' : 'opacity-60'
	} hover:opacity-100 transition-opacity duration-150`}
>
	{label}
</a>
