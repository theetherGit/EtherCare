<script>
	import Modals from './Modals.svelte';
	import { fade } from 'svelte/transition';

	let open = false;
</script>

<div class="flex flex-col flex-1 bg-white">
	<header class="bg-white border-b border-gray-200">
		<div class="px-4 mx-auto">
			<div class="flex items-center justify-between h-16">
				<div class="flex items-center -m-2 lg:hidden">
					<button
						type="button"
						class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
					>
						<svg
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

				<div class="flex ml-6 mr-auto lg:ml-0">
					<div class="flex items-center flex-shrink-0">
						<img
							class="block w-auto h-8 lg:hidden"
							src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg"
							alt=""
						/>
						<img
							class="hidden w-auto h-8 lg:block"
							src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo.svg"
							alt=""
						/>
					</div>
				</div>

				<div class="flex items-center justify-end space-x-6 sm:ml-5">
					<div class="relative">
						<button
							type="button"
							on:click={() => {
								open = true;
							}}
							class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="w-6 h-6"
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
							class="p-1 text-gray-700 transition-all duration-200 bg-white rounded-full hover:text-gray-900 focus:outline-none hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
								/>
							</svg>
						</button>
						<span
							class="inline-flex items-center px-1.5 absolute -top-px -right-1 py-0.5 rounded-full text-xs font-semibold bg-indigo-600 text-white"
						>
							6
						</span>
					</div>

					<button
						type="button"
						class="flex items-center max-w-xs rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
					>
						<img
							class="object-cover w-8 h-8 bg-gray-300 rounded-full"
							src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/vertical-menu/1/avatar-male.png"
							alt=""
						/>
						<span class="hidden ml-2 text-sm font-medium text-gray-900 md:block">
							Jacob Jones
						</span>
						<svg
							class="w-4 h-4 ml-3 text-gray-500"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
						</svg>
					</button>
				</div>
			</div>
		</div>
	</header>

	<div class="flex flex-1">
		<div class="hidden border-r border-gray-200 md:flex md:w-64 md:flex-col">
			<div class="flex flex-col pt-5 overflow-y-auto">
				<div class="flex flex-col justify-between flex-1 h-full px-4">
					<div class="space-y-4">
						<div>
							<button
								type="button"
								class="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
							>
								New Issue
							</button>
						</div>

						<nav class="flex-1 space-y-1">
							<a
								href="/dashboard"
								title=""
								class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
							>
								<svg
									class="flex-shrink-0 w-5 h-5 mr-4"
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
							<p class="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
								Analytics
							</p>
							<nav class="flex-1 mt-4 space-y-1">
								<a
									href="/dashboard"
									title=""
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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
										class="text-xs uppercase ml-auto font-semibold text-indigo-600 bg-indigo-50 border border-indigo-300 rounded-full inline-flex items-center px-2 py-0.5"
									>
										New
									</span>
								</a>
							</nav>
						</div>

						<div>
							<p class="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">
								Support
							</p>
							<nav class="flex-1 mt-4 space-y-1">
								<a
									href="/dashboard"
									title=""
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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
										class="text-xs uppercase ml-auto font-semibold text-white bg-gray-500 border border-transparent rounded-full inline-flex items-center px-2 py-0.5"
									>
										15
									</span>
								</a>

								<a
									href="/dashboard"
									title=""
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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
							<p class="px-4 text-xs font-semibold tracking-widest text-gray-400 uppercase">Shop</p>
							<nav class="flex-1 mt-4 space-y-1">
								<a
									href="/dashboard"
									title=""
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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
									class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
								>
									<svg
										class="flex-shrink-0 w-5 h-5 mr-4"
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

					<div class="pb-4 mt-12">
						<nav class="flex-1 space-y-1">
							<a
								href="/dashboard"
								title=""
								class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
							>
								<svg
									class="flex-shrink-0 w-5 h-5 mr-4"
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

							<a
								href="/dashboard"
								title=""
								class="flex items-center px-4 py-2.5 text-sm font-medium transition-all duration-200 text-gray-900 rounded-lg hover:bg-gray-200 group"
							>
								<svg
									class="flex-shrink-0 w-5 h-5 mr-4"
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
							</a>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col flex-1">
			<main>
				<div class="py-6">
					<div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
						<slot />
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
{#if open}
	<div transition:fade>
		<Modals title="Search for Tickets and Docs" bind:open/>
	</div>
{/if}
