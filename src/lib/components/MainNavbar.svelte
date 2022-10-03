<script lang="ts">
	import Modals from './Modals.svelte';
	import { fade } from 'svelte/transition';
	import { user } from '../stores/user';
	import { invalidateAll } from '$app/navigation';

	export let userName;
	let open = false;
	let searchType: 'Tickets' | 'Documents' = 'Tickets';
	let searchValue: string;
	let dropDownOpen = false;
	let searchTypes: string[] = ['Tickets', 'Documents'];

	const logout = async () => {
		const data = await fetch('api/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((r) => r.json());
		user.set(null);
		await invalidateAll();
		console.log(data);
	};
</script>

<div class="flex flex-1 flex-col bg-white">
	<header class="border-b border-gray-200 bg-white">
		<div class="mx-auto px-4">
			<div class="flex h-16 items-center justify-between">
				<div class="-m-2 block lg:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-lg bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
					>
						<svg
							class="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>

				<div class="ml-6 mr-auto flex lg:ml-0">
					<div class="flex flex-shrink-0 items-center">
						<img
							class="block h-8 w-auto lg:hidden"
							src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg"
							alt=""
						/>
						<img
							class="hidden h-8 w-auto lg:block"
							src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg"
							alt=""
						/>
					</div>
				</div>

				<div class="flex items-center justify-end space-x-6 sm:ml-5">
					<div class="relative">
						<button
							type="button"
							on:click={() => (open = true)}
							class="rounded-full bg-white p-1 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-6 w-6"
							>
								<path
									fill-rule="evenodd"
									d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
									clip-rule="evenodd"
								/>
							</svg>
						</button>
					</div>

					<div class="relative">
						<button
							type="button"
							class="rounded-full bg-white p-1 text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 focus:outline-none"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								class="h-6 w-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>
						<span
							class="absolute -top-px -right-1 inline-flex items-center rounded-full bg-indigo-600 px-1.5 py-0.5 text-xs font-semibold text-white"
						>
							6
						</span>
					</div>

					<button
						type="button"
						class="flex max-w-xs items-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
					>
						<img
							class="h-8 w-8 rounded-full bg-gray-300 object-cover"
							src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/1/avatar-male.png"
							alt=""
						/>
						<span class="ml-2 hidden text-sm font-medium text-gray-900 md:block">
							{userName}
						</span>
					</button>
				</div>
			</div>
		</div>
	</header>

	<div class="flex flex-1">
		<div class="hidden border-r border-gray-200 md:flex md:w-64 md:flex-col">
			<div class="flex flex-col overflow-y-auto pt-5">
				<div class="flex h-full flex-1 flex-col justify-between px-4">
					<div class="space-y-4">
						<div>
							<button
								type="button"
								class="inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-indigo-600 px-4 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
							>
								New Issue
							</button>
						</div>

						<nav class="flex-1 space-y-1">
							<a
								href="/dashboard"
								title=""
								class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
							>
								<svg
									class="mr-4 h-5 w-5 flex-shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
									/>
								</svg>
								Dashboard
							</a>
						</nav>

						<div>
							<p class="px-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
								Analytics
							</p>
							<nav class="mt-4 flex-1 space-y-1">
								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
									Performance
								</a>

								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
										/>
									</svg>
									Hotjar
									<span
										class="ml-auto inline-flex items-center rounded-full border border-indigo-300 bg-indigo-50 px-2 py-0.5 text-xs font-semibold uppercase text-indigo-600"
									>
										New
									</span>
								</a>
							</nav>
						</div>

						<div>
							<p class="px-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
								Support
							</p>
							<nav class="mt-4 flex-1 space-y-1">
								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
										/>
									</svg>
									Tickets
									<span
										class="ml-auto inline-flex items-center rounded-full border border-transparent bg-gray-500 px-2 py-0.5 text-xs font-semibold uppercase text-white"
									>
										15
									</span>
								</a>

								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
										/>
									</svg>
									Agents
								</a>

								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
										/>
									</svg>
									Customers
								</a>
							</nav>
						</div>

						<div>
							<p class="px-4 text-xs font-semibold uppercase tracking-widest text-gray-400">Shop</p>
							<nav class="mt-4 flex-1 space-y-1">
								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
										/>
									</svg>
									Products
								</a>

								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										/>
									</svg>
									Orders
								</a>

								<a
									href="/dashboard"
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
										/>
									</svg>
									Reports
								</a>
							</nav>
						</div>
					</div>

					<div class="mt-12 pb-4">
						<nav class="flex-1 space-y-1">
							<a
								href="/dashboard"
								title=""
								class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
							>
								<svg
									class="mr-4 h-5 w-5 flex-shrink-0"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								Settings
							</a>
							<form action="/logout" method="POST">
								<button
									title=""
									class="group flex items-center rounded-lg px-4 py-2.5 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-200"
								>
									<svg
										class="mr-4 h-5 w-5 flex-shrink-0"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
										/>
									</svg>
									Logout
								</button>
							</form>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-1 flex-col">
			<main>
				<div class="py-6">
					<div class="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
						<slot />
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
{#if open}
	<div transition:fade>
		<Modals on:close={() => (open = false)}>
			<span slot="header">
				<div class="flex items-center justify-start	">
					<div class="flex-initial bg-white py-2">
						<div class="mx-auto max-w-7xl pl-2 sm:px-6">
							<div class="mx-auto max-w-lg">
								<div class="relative">
									<div class="mt-2">
										<div
											on:click={() => {
												dropDownOpen = !dropDownOpen;
											}}
											class="block w-full cursor-pointer rounded-lg border border-gray-300 py-2 px-5 focus:border-indigo-600 focus:outline-none focus:ring-indigo-600 sm:text-sm"
										>
											<div class="flex items-center">
												<div class="flex items-center justify-start space-x-2">
													<span>{searchType}</span>
												</div>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="ml-5 h-4 w-4 {!dropDownOpen ? '' : 'transform rotate-180'}"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
												>
													<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
												</svg>
											</div>
										</div>
									</div>
									{#if dropDownOpen}
										<div class="absolute -bottom-10 z-10 w-full">
											<div
												class="block w-full space-y-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm shadow"
											>
												<ul class="flex flex-col">
													{#each searchTypes as type}
														<li
															class="w-full cursor-pointer rounded-md p-2 hover:bg-gray-100"
															on:click={() => {
																searchType = type;
																dropDownOpen = false;
															}}
														>
															{type}
														</li>
													{/each}
												</ul>
											</div>
										</div>
									{/if}
								</div>
							</div>
						</div>
					</div>

					<div class="bg-white py-2">
						<div class="mx-auto max-w-7xl px-2">
							<div class="mx-auto max-w-lg">
								<div class="relative mt-2">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="h-4 w-4 text-gray-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											stroke-width="2"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</div>

									<input
										type="text"
										name=""
										id=""
										placeholder="Search here"
										bind:value={searchValue}
										class="block w-full rounded-lg border border-gray-300 py-2 pl-8 pr-5 placeholder-gray-500 caret-indigo-600 focus:border-indigo-600 focus:ring-indigo-600 sm:text-sm"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</span>
			<hr />
			<div class="bg-white">
				<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div class="mt-2 space-y-8 last:mb-4">
						<div class="flex items-center">
							<img
								class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
								src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/5/avatar-female.png"
								alt=""
							/>
							<div class="ml-4 min-w-0 flex-1">
								<p class="truncate text-sm font-bold text-gray-900">Kristin Watson</p>
								<p class="mt-1 text-xs font-medium text-gray-500">
									Purchased <span class="text-indigo-600"> Clarity Landing UI Kit </span>
								</p>
							</div>
						</div>

						<div class="flex items-center">
							<img
								class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
								src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/table-stacked/5/avatar-female.png"
								alt=""
							/>
							<div class="ml-4 min-w-0 flex-1">
								<p class="truncate text-sm font-bold text-gray-900">Kristin Watson</p>
								<p class="mt-1 text-xs font-medium text-gray-500">
									Purchased <span class="text-indigo-600"> Clarity Landing UI Kit </span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Modals>
	</div>
{/if}
