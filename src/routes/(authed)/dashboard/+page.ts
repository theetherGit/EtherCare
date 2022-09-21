import type { PageLoad } from './$types';

export const load: PageLoad = async ({ parent }) => {
	const { user } = await parent();
	if (!user) {
		return {
			status: 302,
			redirect: '/login'
		};
	}
};
