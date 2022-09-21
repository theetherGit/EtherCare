<script>
	import '../../app.css';
	import Navbar from '../../lib/components/Navbar.svelte';
	import { permission } from '$lib/stores/suPermission';
	import { NotificationDisplay } from '@beyonk/svelte-notifications';
	export let data;
	if (data && 'permission' in data && (permission.data !== null || '')) {
		permission.set(data.permission);
	} else permission.set(true);
</script>

<div class="overflow-x-hidden bg-gray-50">
	<Navbar permission={$permission} />
	<NotificationDisplay sessionKey="foo" />
	<slot />
</div>
