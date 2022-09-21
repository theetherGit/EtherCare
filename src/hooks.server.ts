import type { Handle } from '@sveltejs/kit';
import { userRepository } from './lib/Redis/dbRepository';

// custom redirect from joy of code `https://github.com/JoysOfCode/sveltekit-auth-cookies/blob/migration/src/hooks.ts`
function redirect(location: string, body?: string) {
	return new Response(body, {
		status: 303,
		headers: { location }
	});
}

const unProtectedRoutes: string[] = [
	'/',
	'/login',
	'/createAdmin',
	'/features',
	'/docs',
	'/deployment'
];

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	if (!session && !unProtectedRoutes.includes(event.url.pathname))
		return redirect('/login', 'No authenticated user.');
	const currentUser = await userRepository.fetch(session as string);

	if (currentUser) {
		event.locals.user = {
			name: currentUser.name,
			email: currentUser.email,
			type: currentUser.user_type,
			active: currentUser.active,
			phone: currentUser.phone
		};
	} else {
		if (!unProtectedRoutes.includes(event.url.pathname)) return redirect('/', 'Not a valid user');
	}

	return resolve(event);
};
