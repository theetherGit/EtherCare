import type { PageLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ parent }) => {
	const { isAuthenticated } = await parent();
	if (isAuthenticated) {
		throw redirect(302, '/dashboard');
	}
};
