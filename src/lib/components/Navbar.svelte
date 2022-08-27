<script>
	import { fade } from 'svelte/transition';
	let show = false;
	let innerWidth = 0;
	export let permission;
	$: show = show ? innerWidth < 1024 : false;
</script>

<svelte:window bind:innerWidth />

<header class="py-4 md:py-6 z-10">
	<div class="container px-4 mx-auto sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<div class="relative inline-flex sm:inline">
				<span
					class="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-50 w-full h-full absolute inset-0"
				/>
				<span class="relative font-bold text-3xl">EtherCare</span>
			</div>

			<div class="flex lg:hidden">
				<button
					class="w-10 h-8 relative lg:hidden p-6"
					on:click={() => {
						show = !show;
					}}
				>
					<span class="sr-only">Open main menu</span>
					<div
						class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2"
					>
						<span
							aria-hidden="true"
							class="hamburger-line {show === true ? 'rotate-45' : '-translate-y-1.5'}"
						/>
						<span
							aria-hidden="true"
							class="block absolute h-0.5 w-3 rounded transform bg-current transition duration-500 ease-in-out {show ===
							true
								? 'opacity-0'
								: ''}"
						/>
						<span
							aria-hidden="true"
							class="hamburger-line {show === true ? '-rotate-45' : 'translate-y-1.5'}"
						/>
					</div>
				</button>
			</div>

			<div
				class="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16"
			>
				<a
					href="/"
					title=""
					class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
				>
					Features
				</a>

				<a
					href="/"
					title=""
					class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
				>
					Docs
				</a>

				<a
					href="/"
					title=""
					class="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
				>
					Deployment
				</a>
			</div>

			<div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
				{#if permission}
					<a
						href="/createAdmin"
						title=""
						class="inline-flex items-center justify-center px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
						role="button"
					>
						Create Super Admin
					</a>
				{/if}
				<a
					href="/login"
					title=""
					class="inline-flex items-center justify-center px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
					role="button"
				>
					Sign in
				</a>
			</div>
		</div>
		<div class="container">
			{#if show}
				<nav
					transition:fade
					class="w-full {show
						? 'block z-10 bg-white bg-opacity-70 backdrop-blur '
						: 'hidden'} fixed"
				>
					<div class="px-1 py-8">
						<div class="grid gap-y-7">
							<a
								href="/"
								title=""
								class="flex items-center justify-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
							>
								Features
							</a>

							<a
								href="/"
								title=""
								class="flex items-center justify-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
							>
								Docs
							</a>

							<a
								href="/"
								title=""
								class="flex items-center justify-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
							>
								Deployment
							</a>
							{#if permission}
								<a
									href="/"
									title=""
									class="inline-flex -m-3 px-20 py-2 mx-auto text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
									role="button"
								>
									Create Super Admin
								</a>
							{/if}
							<a
								href="/"
								title=""
								class="inline-flex px-32 py-2 text-base mx-auto font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
								role="button"
							>
								Login
							</a>
						</div>
					</div>
				</nav>
			{/if}
		</div>
	</div>
</header>

<style>
	.hamburger-line {
		@apply block absolute  h-0.5 w-5 rounded bg-current transform transition duration-500 ease-in-out;
	}
</style>
