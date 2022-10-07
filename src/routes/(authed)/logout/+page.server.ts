import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { sessionManagerRepository } from '../../../lib/Redis/dbRepository';

export const load: PageServerLoad = async () => {
	throw redirect(302, '/login');
};

export const actions: Actions = {
	default: async ({ cookies, locals }) => {
		if (locals && locals.userAuth && locals.userAuth.isAuthenticated) {
			await sessionManagerRepository.remove(cookies.get('session') as string);
			cookies.delete('session', {
				path: '/'
			});
			return redirect(302, '/login');
		}
		return redirect(302, '/login');
	}
};
