import type { LayoutServerLoad } from './$types';
import type { User } from '$lib/utils';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (typeof locals.userAuth.isAuthenticated === 'undefined') {
		return returnCorrectly(false, locals.userAuth.user as User);
	}

	return returnCorrectly(locals.userAuth.isAuthenticated as boolean, locals.userAuth.user as User);
};

const returnCorrectly = async (isAuthenticated: boolean, user: User) => {
	return {
		isAuthenticated: isAuthenticated,
		user: user
	};
};
