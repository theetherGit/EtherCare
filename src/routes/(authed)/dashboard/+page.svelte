<script>
	import { user } from '$lib/stores/user';
</script>

<div class="flex flex-col">
	<div class="flex flex-1">
		<div class="flex flex-1 flex-col overflow-x-hidden">
			<main>
				<div class="py-6">
					<div class="mx-auto px-4 sm:px-6 md:px-8">
						<div class="md:flex md:items-center">
							<p class="text-base font-bold text-gray-900">Hey {$user.name} -</p>
							<p class="mt-1 text-base font-medium text-gray-500 md:mt-0 md:ml-2">
								here's what you did today
							</p>
						</div>
					</div>

					<div class="mx-auto mt-8 px-4 sm:px-6 md:px-8">
						<div class="space-y-5 sm:space-y-6">
							<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
								<div class="rounded-xl border border-gray-200 bg-white">
									<div class="px-5 py-4">
										<p class="text-xs font-medium uppercase tracking-wider text-gray-500">
											Today's Sale
										</p>
										<div class="mt-3 flex items-center justify-between">
											<p class="text-xl font-bold text-gray-900">$12,426</p>

											<span class="inline-flex items-center text-sm font-semibold text-green-500">
												+ 36%
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="ml-0.5 h-3 w-3"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="3"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M7 11l5-5m0 0l5 5m-5-5v12"
													/>
												</svg>
											</span>
										</div>
									</div>
								</div>

								<div class="rounded-xl border border-gray-200 bg-white">
									<div class="px-5 py-4">
										<p class="text-xs font-medium uppercase tracking-wider text-gray-500">
											Total Sales
										</p>
										<div class="mt-3 flex items-center justify-between">
											<p class="text-xl font-bold text-gray-900">$2,38,485</p>

											<span class="inline-flex items-center text-sm font-semibold text-red-500">
												- 14%
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="ml-0.5 h-3 w-3"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="3"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M17 13l-5 5m0 0l-5-5m5 5V6"
													/>
												</svg>
											</span>
										</div>
									</div>
								</div>

								<div class="rounded-xl border border-gray-200 bg-white">
									<div class="px-5 py-4">
										<p class="text-xs font-medium uppercase tracking-wider text-gray-500">
											Total ORders
										</p>
										<div class="mt-3 flex items-center justify-between">
											<p class="text-xl font-bold text-gray-900">84,382</p>

											<span class="inline-flex items-center text-sm font-semibold text-green-500">
												+ 36%
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="ml-0.5 h-3 w-3"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="3"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M7 11l5-5m0 0l5 5m-5-5v12"
													/>
												</svg>
											</span>
										</div>
									</div>
								</div>

								<div class="rounded-xl border border-gray-200 bg-white">
									<div class="px-5 py-4">
										<p class="text-xs font-medium uppercase tracking-wider text-gray-500">
											Total Customers
										</p>
										<div class="mt-3 flex items-center justify-between">
											<p class="text-xl font-bold text-gray-900">33,493</p>

											<span class="inline-flex items-center text-sm font-semibold text-green-500">
												+ 36%
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="ml-0.5 h-3 w-3"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="3"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M7 11l5-5m0 0l5 5m-5-5v12"
													/>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>

							<div class="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
								<div
									class="overflow-hidden rounded-xl border border-gray-200 bg-white lg:col-span-2"
								>
									<div class="px-4 py-5 sm:p-6">
										<div class="sm:flex sm:items-center sm:justify-between">
											<p class="text-base font-bold text-gray-900">Traffic Sources</p>

											<div class="mt-4 sm:mt-0">
												<div>
													<label for="" class="sr-only"> Duration </label>
													<select
														name=""
														id=""
														class="block w-full rounded-lg border-none py-0 pl-0 pr-10 text-base focus:outline-none focus:ring-0 sm:text-sm"
													>
														<option>Last 7 days</option>
													</select>
												</div>
											</div>
										</div>

										<div class="mt-8 space-y-6">
											<div>
												<div class="flex items-center justify-between">
													<p class="text-sm font-medium text-gray-900">Direct</p>
													<p class="text-sm font-medium text-gray-900">1,43,382</p>
												</div>
												<div class="relative mt-2 h-1.5 rounded-full bg-gray-200">
													<div
														class="absolute inset-y-0 left-0 w-[60%] rounded-full bg-indigo-600"
													/>
												</div>
											</div>

											<div>
												<div class="flex items-center justify-between">
													<p class="text-sm font-medium text-gray-900">Referral</p>
													<p class="text-sm font-medium text-gray-900">87,974</p>
												</div>
												<div class="relative mt-2 h-1.5 rounded-full bg-gray-200">
													<div
														class="absolute inset-y-0 left-0 w-[50%] rounded-full bg-indigo-600"
													/>
												</div>
											</div>

											<div>
												<div class="flex items-center justify-between">
													<p class="text-sm font-medium text-gray-900">Social Media</p>
													<p class="text-sm font-medium text-gray-900">45,211</p>
												</div>
												<div class="relative mt-2 h-1.5 rounded-full bg-gray-200">
													<div
														class="absolute inset-y-0 left-0 w-[30%] rounded-full bg-indigo-600"
													/>
												</div>
											</div>

											<div>
												<div class="flex items-center justify-between">
													<p class="text-sm font-medium text-gray-900">Twitter</p>
													<p class="text-sm font-medium text-gray-900">21,893</p>
												</div>
												<div class="relative mt-2 h-1.5 rounded-full bg-gray-200">
													<div
														class="absolute inset-y-0 left-0 w-[15%] rounded-full bg-indigo-600"
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div class="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-6">
								<div
									class="overflow-hidden rounded-xl border border-gray-200 bg-white lg:col-span-4"
								>
									<div class="px-4 py-5 sm:p-6">
										<div class="sm:flex sm:items-start sm:justify-between">
											<div>
												<p class="text-base font-bold text-gray-900">Transactions</p>
												<p class="mt-1 text-sm font-medium text-gray-500">
													Lorem ipsum dolor sit amet, consectetur adipis.
												</p>
											</div>

											<div class="mt-4 sm:mt-0">
												<a
													href="/dashboard"
													title=""
													class="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-900"
												>
													See all Transactions
													<svg
														class="ml-2 h-4 w-4"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
													>
														<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
													</svg>
												</a>
											</div>
										</div>
									</div>

									<div class="divide-y divide-gray-200">
										<div class="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
											<div class="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
												<span
													class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-900"
												>
													<svg
														class="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
														fill="currentColor"
														viewBox="0 0 8 8"
													>
														<circle cx="4" cy="4" r="3" />
													</svg>
													Completed
												</span>
											</div>

											<div class="px-4 text-right sm:px-6 lg:order-last lg:py-4">
												<button
													type="button"
													class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
														/>
													</svg>
												</button>
											</div>

											<div class="px-4 sm:px-6 lg:col-span-2 lg:py-4">
												<p class="text-sm font-bold text-gray-900">Visa card **** 4831</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Card payment</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="text-sm font-bold text-gray-900">$182.94</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="mt-1 text-sm font-medium text-gray-500">Amazon</p>
											</div>
										</div>

										<div class="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
											<div class="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
												<span
													class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-1 text-xs font-medium text-green-900"
												>
													<svg
														class="-ml-1 mr-1.5 h-2.5 w-2.5 text-green-500"
														fill="currentColor"
														viewBox="0 0 8 8"
													>
														<circle cx="4" cy="4" r="3" />
													</svg>
													Completed
												</span>
											</div>

											<div class="px-4 text-right sm:px-6 lg:order-last lg:py-4">
												<button
													type="button"
													class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
														/>
													</svg>
												</button>
											</div>

											<div class="px-4 sm:px-6 lg:col-span-2 lg:py-4">
												<p class="text-sm font-bold text-gray-900">Mastercard **** 6442</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Card payment</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="text-sm font-bold text-gray-900">$99.00</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="mt-1 text-sm font-medium text-gray-500">Facebook</p>
											</div>
										</div>

										<div class="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
											<div class="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
												<span
													class="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-1 text-xs font-medium text-yellow-900"
												>
													<svg
														class="-ml-1 mr-1.5 h-2.5 w-2.5 text-yellow-400"
														fill="currentColor"
														viewBox="0 0 8 8"
													>
														<circle cx="4" cy="4" r="3" />
													</svg>
													Pending
												</span>
											</div>

											<div class="px-4 text-right sm:px-6 lg:order-last lg:py-4">
												<button
													type="button"
													class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
														/>
													</svg>
												</button>
											</div>

											<div class="px-4 sm:px-6 lg:col-span-2 lg:py-4">
												<p class="text-sm font-bold text-gray-900">Account ****882</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Bank payment</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="text-sm font-bold text-gray-900">$249.94</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="mt-1 text-sm font-medium text-gray-500">Netflix</p>
											</div>
										</div>

										<div class="grid grid-cols-3 gap-y-4 py-4 lg:grid-cols-6 lg:gap-0">
											<div class="col-span-2 px-4 sm:px-6 lg:col-span-1 lg:py-4">
												<span
													class="inline-flex items-center rounded-full bg-red-100 px-2.5 py-1 text-xs font-medium text-red-900"
												>
													<svg
														class="-ml-1 mr-1.5 h-2.5 w-2.5 text-red-500"
														fill="currentColor"
														viewBox="0 0 8 8"
													>
														<circle cx="4" cy="4" r="3" />
													</svg>
													Canceled
												</span>
											</div>

											<div class="px-4 text-right sm:px-6 lg:order-last lg:py-4">
												<button
													type="button"
													class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-gray-400 transition-all duration-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
												>
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke="currentColor"
														stroke-width="2"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
														/>
													</svg>
												</button>
											</div>

											<div class="px-4 sm:px-6 lg:col-span-2 lg:py-4">
												<p class="text-sm font-bold text-gray-900">Amex card **** 5666</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Card payment</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="text-sm font-bold text-gray-900">$199.24</p>
												<p class="mt-1 text-sm font-medium text-gray-500">Jan 17, 2022</p>
											</div>

											<div class="px-4 sm:px-6 lg:py-4">
												<p class="mt-1 text-sm font-medium text-gray-500">Amazon Prime</p>
											</div>
										</div>
									</div>
								</div>

								<div
									class="overflow-hidden rounded-xl border border-gray-200 bg-white lg:col-span-2"
								>
									<div class="px-4 py-5 sm:p-6">
										<div>
											<p class="text-base font-bold text-gray-900">Recent Customers</p>
											<p class="mt-1 text-sm font-medium text-gray-500">
												Lorem ipsum dolor sit ametis.
											</p>
										</div>

										<div class="mt-8 space-y-6">
											<div class="flex items-center justify-between space-x-5">
												<div class="flex min-w-0 flex-1 items-center">
													<img
														class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
														src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male.png"
														alt=""
													/>
													<div class="ml-4 min-w-0 flex-1">
														<p class="text-sm font-bold text-gray-900">Jenny Wilson</p>
														<p class="mt-1 text-sm font-medium text-gray-500">
															w.lawson@example.com
														</p>
													</div>
												</div>

												<div class="text-right">
													<p class="text-sm font-medium text-gray-900">$11,234</p>
													<p class="mt-1 truncate text-sm font-medium text-gray-500">Austin</p>
												</div>
											</div>

											<div class="flex items-center justify-between space-x-5">
												<div class="flex min-w-0 flex-1 items-center">
													<img
														class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
														src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male-2.png"
														alt=""
													/>
													<div class="ml-4 min-w-0 flex-1">
														<p class="text-sm font-bold text-gray-900">Devon Lane</p>
														<p class="mt-1 truncate text-sm font-medium text-gray-500">
															dat.roberts@example.com
														</p>
													</div>
												</div>

												<div class="flex-shrink-0 text-right">
													<p class="text-sm font-medium text-gray-900">$11,159</p>
													<p class="mt-1 truncate text-sm font-medium text-gray-500">New York</p>
												</div>
											</div>

											<div class="flex items-center justify-between space-x-5">
												<div class="flex min-w-0 flex-1 items-center">
													<img
														class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
														src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-female-2.png"
														alt=""
													/>
													<div class="ml-4 min-w-0 flex-1">
														<p class="text-sm font-bold text-gray-900">Jane Cooper</p>
														<p class="mt-1 truncate text-sm font-medium text-gray-500">
															jgraham@example.com
														</p>
													</div>
												</div>

												<div class="text-right">
													<p class="text-sm font-medium text-gray-900">$10,483</p>
													<p class="mt-1 text-sm font-medium text-gray-500">Toledo</p>
												</div>
											</div>

											<div class="flex items-center justify-between space-x-5">
												<div class="flex min-w-0 flex-1 items-center">
													<img
														class="h-10 w-10 flex-shrink-0 rounded-full object-cover"
														src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/previews/dashboards/1/avatar-male-3.png"
														alt=""
													/>
													<div class="ml-4 min-w-0 flex-1">
														<p class="text-sm font-bold text-gray-900">Dianne Russell</p>
														<p class="mt-1 truncate text-sm font-medium text-gray-500">
															curtis.d@example.com
														</p>
													</div>
												</div>

												<div class="text-right">
													<p class="text-sm font-medium text-gray-900">$9,084</p>
													<p class="mt-1 text-sm font-medium text-gray-500">Naperville</p>
												</div>
											</div>
										</div>

										<div class="mt-8">
											<a
												href="/dashboard"
												title=""
												class="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-gray-900"
											>
												See all Customers
												<svg
													class="ml-2 h-4 w-4"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
												>
													<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
												</svg>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	</div>
</div>
