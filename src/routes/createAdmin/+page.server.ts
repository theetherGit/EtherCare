import type { RequestHandler } from '@sveltejs/kit';
import * as bcrypt from 'bcryptjs';
import { error } from '@sveltejs/kit';
import { userRepository, suRepository } from '$lib/Redis/dbRepository';
import type { PageServerLoad } from './$types';

export const POST: PageServerLoad = async ({ request }) => {
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
			throw error(400, 'Something went horribly wrong.');
		}

		if (!email || !password || !phone || !name) {
			throw error(400, 'name, phone, email and password is required.');
		}
		const user = await userRepository.search().where('email').equals(email).return.first();
		if (user && user.email) {
			throw error(400, 'User already exist');
		}

		const newUser = await userRepository.createAndSave({
			name: name,
			email: email,
			phone: phone,
			password: await bcrypt.hash(password, 10),
			active: true,
			user_type: 'su'
		});

		const permissionDisabled = await suRepository.createAndSave({
			allow: false
		});
		return new Response(
			JSON.stringify({ success: true, status: 201, message: 'User successfully created.' })
		);
	}
	throw error(400, 'You are not allowed to make a super user.');
};
