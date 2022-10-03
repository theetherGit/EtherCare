import { suRepository } from '../../lib/Redis/dbRepository';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const superuserPermission = await suRepository.search().return.first();
	return {
		permission: superuserPermission && superuserPermission.allow,
		isAuthenticated: locals?.userAuth?.isAuthenticated
	};
};
