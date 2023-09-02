<script>
	export let type = 'primary';
	export let onClick = () => {};
	export let label = '';
</script>

<button
	class={`p-2 rounded uppercase ${
		type === 'primary'
			? 'bg-[#182857] text-white'
			: 'bg-white text-[#D02030] hover:bg-[#D02030] hover:text-white border border-[#D02030] transition-colors'
	}`}
	on:click={onClick}
>
	{label}
</button>
