import { suRepository } from '../lib/Redis/dbRepository';

export async function load() {
	const superuserPermission = await suRepository.search().return.first();
	return {
		permission: superuserPermission
	};
}
