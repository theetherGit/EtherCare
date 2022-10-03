import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.userAuth.isAuthenticated) {
		return redirect(302, '/login');
	}

	return {
		isAuthenticated: locals.userAuth.isAuthenticated,
		user: locals.userAuth.user
	};
};
