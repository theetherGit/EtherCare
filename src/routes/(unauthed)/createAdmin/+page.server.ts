import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { suRepository, userRepository } from '$lib/Redis/dbRepository';
import { customResponse } from '$lib/utils';
import * as bcrypt from 'bcrypt';

export const actions: Actions = {
	default: async ({ request }) => {
		const check = await suRepository.search().return.first();
		if ((check && check.allow) || check === null) {
			const form = await request.formData();
			const email = form.get('email');
			const password = form.get('password');
			const name = form.get('name');
			const phone = form.get('phone');

			if (
				typeof email !== 'string' ||
				typeof password !== 'string' ||
				typeof name !== 'string' ||
				typeof phone !== 'string'
			) {
				return customResponse(400, false, 'Something went horribly wrong.');
			}
			if (!email || !password || !phone || !name) {
				return customResponse(
					400,
					false,
					'Name, Phone, Email and Password is required to add new admin.'
				);
			}
			const user = await userRepository.search().where('email').equals(email).return.first();
			if (user && user.email) {
				return customResponse(400, false, 'User already exist');
			}

			const newUser = await userRepository.createAndSave({
				name: name,
				email: email,
				phone: phone,
				password: await bcrypt.hash(password, 10),
				active: true,
				user_type: 'su'
			});
			if (!check) {
				const permissionDisabled = await suRepository.createAndSave({ allow: false });
			}
			return customResponse(200, true, 'User successfully created.');
		}
		throw redirect(301, '/login');
	}
};
