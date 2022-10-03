import { sessionManagerRepository } from '$lib/Redis/dbRepository';
import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const POST: RequestHandler = async ({ cookies, locals }) => {
	if (locals && locals.userAuth && locals.userAuth.isAuthenticated) {
		await sessionManagerRepository.remove(cookies.get('session') as string);
		await cookies.set('session', '', {
			path: '/',
			expires: new Date(0),
		});
		return redirect(302, '/login');
	} else return redirect(307, '/');
};
