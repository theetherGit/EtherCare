<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
	import { permission } from '$lib/stores/suPermission';
	export let data;
	if (data && data.permission) {
		permission.set(data.permission.allow);
	} else permission.set(true);
</script>

<div class="overflow-x-hidden bg-gray-50">
	<Navbar permission={$permission} />
	<slot />
</div>
