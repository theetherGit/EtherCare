import type { LayoutLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: LayoutLoad = async ({ data }) => {
	const { isAuthenticated } = await data;
	if (!isAuthenticated) {
		throw redirect(302, '/login');
	} else return data;
};
