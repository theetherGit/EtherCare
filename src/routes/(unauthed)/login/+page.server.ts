import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';
import { customResponse } from '$lib/utils';
import { userRepository } from '$lib/Redis/dbRepository';
import * as bcrypt from 'bcrypt';
import { dev } from '$app/environment';

export const load: PageServerLoad = async ({ parent }) => {
	const { user } = await parent();
	if (user?.email) {
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
		const passwordMatch = user && (await bcrypt.compare(password, user.password));

		if (!user || !passwordMatch)
			return customResponse(400, false, 'You entered the wrong credentials.');
		cookies.set('session', user.entityId, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: !dev,
			maxAge: 60 * 60 * 24 * 30
		});
		// return customResponse(200, true, 'User loggedIn successfully');
		throw redirect(307, '/dashboard');
	}
};
