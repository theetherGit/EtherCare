<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { applyAction, enhance } from '$app/forms';
	import toast from 'svelte-french-toast';
	import { page } from '$app/stores';
	import { invalidateAll } from '$app/navigation';

	let form = $page.form;
	$: if (form && form.data && !form.data.success && form.data.message) {
		toast.error(form.data.message, {
			style: 'border-radius: 200px; background: #333; color: #fff;'
		});
	}
</script>

<section class="h-[90vh] py-12 sm:py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-sm">
			<div class="text-center">
				<img
					class="mx-auto h-12 w-auto"
					src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg"
					alt=""
				/>
				<h1 class="mt-12 text-3xl font-bold text-gray-900">Sign In</h1>
				<p class="mt-4 text-sm font-medium text-gray-500">Begin your work</p>
			</div>

			<form
				method="POST"
				class="mt-4"
				use:enhance={() => {
					return async ({ result }) => {
						await invalidateAll();
						if (result.type === 'redirect') await applyAction(result);
						else form = result;
					};
				}}
			>
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
							class="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
						>
							Login
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</section>
