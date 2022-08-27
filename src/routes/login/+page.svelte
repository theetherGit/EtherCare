<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { send } from '$lib/api';
	import { goto } from '$app/navigation';

	export let error: string;
	export let success: string;

	async function register(event: SubmitEvent) {
		error = '';

		const formEl = event.target as HTMLFormElement;
		const response = await send(formEl);
		if (!response.ok) {
			error = response.statusText;
		}
		if (response.redirected) {
			await goto(response.url);
		}

		if (response.ok) {
			success = response.statusText;
		}

		formEl.reset();
	}
</script>

<section class="py-12 sm:py-16 lg:py-20 h-[90vh]">
	<div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
		<div class="max-w-sm mx-auto">
			<div class="text-center">
				<img
					class="w-auto h-12 mx-auto"
					src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg"
					alt=""
				/>
				<h1 class="mt-12 text-3xl font-bold text-gray-900">Sign In</h1>
				<p class="mt-4 text-sm font-medium text-gray-500">Begin your work</p>
			</div>

			<form on:submit|preventDefault={register} method="post" class="mt-4">
				<div class="space-y-4">
					<Input name="email" type="email" placeholder="Type email address here" label="Email" />
					<Input
						name="password"
						type="password"
						placeholder="Type strong password here"
						label="Password"
					/>

					<div>
						<button
							type="submit"
							class="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
						>
							Login
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
