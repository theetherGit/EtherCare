import type { Handle } from '@sveltejs/kit';
import { sessionManagerRepository, userRepository } from '$lib/Redis/dbRepository';
import { redirect } from '@sveltejs/kit';

// const unProtectedRoutes: string[] = [
// 	'(unauthed)',
// 	'(unauthed)/',
// 	'(unauthed)/login',
// 	'(unauthed)/createAdmin',
// 	'(unauthed)/features',
// 	'(unauthed)/docs',
// 	'(unauthed)/deployment'
// ];

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	event.locals.userAuth = {
		isAuthenticated: false
	};
	if (typeof session === ('undefined' || '') || !session) {
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
	}
	return resolve(event);
};
