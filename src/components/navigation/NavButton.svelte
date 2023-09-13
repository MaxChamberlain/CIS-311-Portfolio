<script>
	import { page } from '$app/stores';
	export let href = '';
	export let label = '';
</script>

<a
	{href}
	aria-label={`link to ${label}`}
	class={`b-2 uppercase text-sm ${
		$page.url.pathname === href ? 'opacity-100 border-b border-stone-500' : 'opacity-60'
	} hover:opacity-100 transition-opacity duration-150`}
>
	{label}
</a>
