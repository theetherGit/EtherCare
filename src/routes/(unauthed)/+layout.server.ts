import { suRepository, userRepository } from '../../lib/Redis/dbRepository';
import type { LayoutServerLoad } from './$types';
import * as cookie from 'cookie';

export const load: LayoutServerLoad = async ({ request, locals, cookies }) => {
	const superuserPermission = await suRepository.search().return.first();
	return {
		permission: superuserPermission && superuserPermission.allow,
		user: locals.user
	};
};
