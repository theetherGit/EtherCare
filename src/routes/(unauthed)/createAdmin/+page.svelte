<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/stores';
	import toast from 'svelte-french-toast';
	import { invalidateAll } from '$app/navigation';

	let form = $page.form;
	$: if (form && form.data && !form.data.success && form.data.message) {
		toast.error(form.data.message, {
			style: 'border-radius: 200px; background: #333; color: #fff;'
		});
	} else if (form && form.data && form.data.success && form.data.message) {
		toast.success(form.data.message, {
			style: 'border-radius: 200px; background: #333; color: #fff;'
		});
	}
</script>

<section class="py-12 sm:py-16 lg:py-20">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-sm">
			<div class="text-center">
				<img
					class="mx-auto h-12 w-auto"
					src="https://landingfoliocom.imgix.net/store/collection/clarity-dashboard/images/logo-symbol.svg"
					alt=""
				/>
				<h1 class="mt-12 text-3xl font-bold text-gray-900">Create super admin</h1>
				<p class="mt-4 text-sm font-medium text-gray-500">
					This user going to have all the permissions for the management.
				</p>
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
					<Input name="name" type="text" placeholder="Type your name here" label="Full Name" />
					<Input name="email" type="email" placeholder="Type email address here" label="Email" />
					<Input
						name="phone"
						type="tel"
						placeholder="Type your contact here"
						label="Contact Number"
					/>
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
							Create Super Admin
						</button>
					</div>
				</div>
			</form>

			<div class="mt-6 text-center">
				<p class="text-sm font-medium text-gray-900">
					Already have an account? <a
						href="/createAdmin"
						title=""
						class="font-bold hover:underline"
					>
						Login now
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
