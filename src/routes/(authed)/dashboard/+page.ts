import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { isAuthenticated } = await parent();
	if (!isAuthenticated) {
		return {
			status: 302,
			redirect: '/login'
		};
	}
};
