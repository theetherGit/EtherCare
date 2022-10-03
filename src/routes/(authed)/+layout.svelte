<script>
	import '../../app.css';
	import MainNavbar from '../../lib/components/MainNavbar.svelte';
	import { user } from '$lib/stores/user';

	export let data;
	user.set(data.user);
</script>

<MainNavbar userName={$user.name}>
	<slot />
</MainNavbar>
