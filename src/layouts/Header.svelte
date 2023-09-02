<script>
	import logoImage from '../assets/images/logo.png';
	import burgerIcon from '../assets/icons/burger-menu-svgrepo-com.svg';
	import NavButton from '../components/navigation/NavButton.svelte';
	let navMenuOpen = false;
	const toggleNavMenu = () => {
		navMenuOpen = !navMenuOpen;
	};
</script>

<header
	class="w-screen p-4 h-16 border-b border-stone-200 bg-white/70 backdrop-blur-md flex justify-center items-center z-40 top-0 sticky"
>
	<div class="w-full max-w-7xl flex justify-between h-full">
		<section class="flex justify-start gap-4">
			<a href="/" aria-label="Home Link">
				<img src={logoImage} alt="Logo Image" class="w-11 h-7" aria-hidden="true" />
			</a>
		</section>
		<button on:click={toggleNavMenu} class="block xl:hidden">
			<img src={burgerIcon} alt="Burger Open Menu" class="h-8 w-8" />
		</button>
		<button
			on:click={toggleNavMenu}
			class={`top-0 left-0 right-0 bottom-0 bg-black/10 backdrop-blur-[2px] z-10 transition-opacity duration-300 ${
				navMenuOpen ? 'xl:hidden absolute opacity-100' : 'hidden opacity-0'
			}`}
			aria-controls="toggle nav menu"
		/>

		<nav
			aria-hidden={navMenuOpen}
			class={`z-50 flex justify-start gap-4 items-start bg-white xl:bg-transparent h-screen xl:h-full whitespace-nowrap p-4 xl:p-0 xl:items-center flex-col xl:flex-row fixed xl:relative top-0 xl:left-auto xl:top-0 ${
				navMenuOpen ? 'left-0' : '-left-full'
			} xl:right-0 transition-all duration-200`}
		>
			<h2
				class={`text-lg border-b border-stone-300 text-center w-full ${
					navMenuOpen ? 'visible' : 'invisible'
				}`}
			>
				Menu
			</h2>
			<NavButton href="/" label="Home" />
			<NavButton href="/about" label="About Me" />
			<NavButton href="/education" label="Education" />
			<NavButton href="/projects" label="My Projects" />
		</nav>
	</div>
</header>
