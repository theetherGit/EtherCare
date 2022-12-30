<script>
	import { fade } from 'svelte/transition';
	import {app_name} from "$lib/constants";
	let show = false;
	let innerWidth = 0;
	export let permission;
	$: show = show ? innerWidth < 1024 : false;
</script>

<svelte:window bind:innerWidth />

<header class="z-10 py-4 md:py-6">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex items-center justify-between">
			<div class="relative inline-flex sm:inline">
				<span
					class="absolute inset-0 h-full w-full bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-50 blur-lg filter"
				/>
				<span class="relative text-3xl font-bold">{app_name}</span>
			</div>

			<div class="flex lg:hidden">
				<button
					class="relative h-8 w-10 p-6 lg:hidden"
					on:click={() => {
						show = !show;
					}}
				>
					<span class="sr-only">Open main menu</span>
					<div
						class="absolute left-1/2 top-1/2 block w-5   -translate-x-1/2  -translate-y-1/2 transform"
					>
						<span
							aria-hidden="true"
							class="hamburger-line {show === true ? 'rotate-45' : '-translate-y-1.5'}"
						/>
						<span
							aria-hidden="true"
							class="absolute block h-0.5 w-3 transform rounded bg-current transition duration-500 ease-in-out {show ===
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
				class="hidden lg:ml-16 lg:flex lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16"
			>
				<a
					href="/"
					title=""
					class="font-pj rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
				>
					Features
				</a>

				<a
					href="/"
					title=""
					class="font-pj rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
				>
					Docs
				</a>

				<a
					href="/"
					title=""
					class="font-pj rounded text-base font-medium text-gray-900 transition-all duration-200 hover:text-opacity-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
				>
					Deployment
				</a>
			</div>

			<div class="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
				{#if permission}
					<a
						href="/createAdmin"
						title=""
						class="font-pj inline-flex items-center justify-center rounded-xl border border-transparent bg-gray-900 px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
						role="button"
					>
						Create Super Admin
					</a>
				{/if}
				<a
					data-sveltekit-prefetch
					href="/login"
					title=""
					class="font-pj inline-flex items-center justify-center rounded-xl border border-transparent bg-gray-900 px-6 py-2 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
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
								class="font-pj -m-3 flex items-center justify-center rounded-xl p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
							>
								Features
							</a>

							<a
								href="/"
								title=""
								class="font-pj -m-3 flex items-center justify-center rounded-xl p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
							>
								Docs
							</a>

							<a
								href="/"
								title=""
								class="font-pj -m-3 flex items-center justify-center rounded-xl p-3 text-base font-medium text-gray-900 transition-all duration-200 hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
							>
								Deployment
							</a>
							{#if permission}
								<a
									href="/"
									title=""
									class="font-pj -m-3 mx-auto inline-flex rounded-xl border border-transparent bg-gray-900 px-20 py-2 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
									role="button"
								>
									Create Super Admin
								</a>
							{/if}
							<a
								href="/"
								title=""
								class="font-pj mx-auto inline-flex rounded-xl border border-transparent bg-gray-900 px-32 py-2 text-base font-bold leading-7 text-white transition-all duration-200 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
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
		@apply absolute block  h-0.5 w-5 transform rounded bg-current transition duration-500 ease-in-out;
	}
</style>
