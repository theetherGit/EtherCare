import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	console.log(await parent());
	const { isAuthenticated } = await parent();
	if (!isAuthenticated) {
		throw redirect(302, '/login');
	}
};
