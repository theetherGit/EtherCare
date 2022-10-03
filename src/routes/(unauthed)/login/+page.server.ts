import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { customResponse, hashPassword } from '$lib/utils';
import type { User } from '$lib/utils';
import { sessionManagerRepository, userRepository } from '$lib/Redis/dbRepository';
import { dev } from '$app/environment';

export const load: PageServerLoad = async ({ parent }) => {
	const { isAuthenticated } = await parent();
	if (isAuthenticated) {
		throw redirect(302, '/dashboard');
	}
};

export const actions: Actions = {
	default: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');

		if (!email || !password) return customResponse(400, false, 'Email and Password are required');

		if (typeof email !== 'string' || typeof password !== 'string')
			return customResponse(400, false, 'Enter a valid email and password.');

		const user = await userRepository.search().where('email').equals(email).return.first();
		const passwordMatch = user && (await hashPassword(password)) === user.password;

		if (!user || !passwordMatch)
			return customResponse(400, false, 'You entered the wrong credentials.');

		const userData: User = {
			id: user.entityId,
			name: user.name,
			email: user.email,
			phone: user.phone,
			type: user.user_type,
			active: user.active
		};

		const sessionToken = await sessionManagerRepository.createAndSave({
			data: JSON.stringify(userData)
		});

		cookies.set('session', sessionToken.entityId, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: 60 * 60 * 24 * 30
		});
		throw redirect(307, '/dashboard');
	}
};
