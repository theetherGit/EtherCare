import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { sessionManagerRepository } from '../../../lib/Redis/dbRepository';

export const load: PageServerLoad = async () => {
	// we only use this endpoint for the api
	// and don't need to see the page
	throw redirect(302, '/');
};

export const actions: Actions = {
	default: async ({ cookies, locals }) => {
		if (locals && locals.userAuth && locals.userAuth.isAuthenticated) {
			locals.userAuth.isAuthenticated = false;
			await sessionManagerRepository.remove(cookies.get('session') as string);
			await cookies.set('session', '', {
				path: '/',
				expires: new Date(0)
			});
			return redirect(302, '/login');
		}
		return redirect(302, '/login');
	}
};
