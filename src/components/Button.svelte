<script lang="ts">
	export let type = 'primary';
	export let onClick: any;
	export let label = '';
	export let size = 'normal';
	export let variant = 'filled';
</script>

<button
	class={`rounded uppercase ${
		type === 'primary'
			? variant === 'filled'
				? 'bg-[#182857] text-white'
				: 'border border-[#182857] text-[#182857] hover:bg-[#182857] hover:text-white transition-colors'
			: variant === 'filled'
			? 'bg-[#D02030] text-white'
			: 'bg-white text-[#D02030] hover:bg-[#D02030] hover:text-white border border-[#D02030] transition-colors'
	} ${size === 'normal' ? 'p-2 text-base' : 'py-1 px-2 text-xs'}`}
	on:click={onClick}
>
	{label}
</button>
