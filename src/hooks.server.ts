import type { Handle } from '@sveltejs/kit';
import { sessionManagerRepository, userRepository } from '$lib/Redis/dbRepository';
import { redirect } from '@sveltejs/kit';

const unProtectedRoutes: string[] = [
	'(unauthed)',
	'(unauthed)/',
	'(unauthed)/login',
	'(unauthed)/createAdmin',
	'(unauthed)/features',
	'(unauthed)/docs',
	'(unauthed)/deployment'
];

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (typeof session === ('undefined' || '') || !session) {
		// Using routeId because routes return __data.json file as route
		if (!unProtectedRoutes.includes(event.routeId as string)) {
			return redirect(307, '/login');
		}
		event.locals.userAuth = {
			isAuthenticated: false
		};
		return resolve(event);
	}
	let currentUser;
	const sessionData = await sessionManagerRepository.fetch(session);

	if (sessionData && sessionData.data) {
		currentUser = JSON.parse(sessionData.data);
		event.locals.userAuth = {
			isAuthenticated: true,
			user: currentUser as import('$lib/utils').User
		};
	} else {
		await event.cookies.set('session', '');
		return redirect(307, '/login');
	}

	if (currentUser) {
		event.locals.userAuth = {
			isAuthenticated: true,
			user: currentUser as import('$lib/utils').User
		};
	} else {
		// Using routeId because routes return __data.json file as route
		if (!unProtectedRoutes.includes(event.routeId as string)) return redirect(307, '/login');
	}
	return resolve(event);
};
