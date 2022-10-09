<script>
	import '../../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { permission } from '$lib/stores/suPermission';
	import { Toaster } from 'svelte-french-toast';
	import { goto } from '$app/navigation';

	export let data;
	if (data && 'permission' in data && (data.permission !== null || '')) {
		permission.set(data.permission);
	} else permission.set(true);
</script>

<div class="overflow-x-hidden bg-gray-50">
	<Navbar permission={$permission} />
	<Toaster />
	<slot />
</div>
