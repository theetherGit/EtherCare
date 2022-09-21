import { invalid } from '@sveltejs/kit';

export const customResponse = (status: number, success: boolean, message: string, data?: any) => {
	if (success) {
		return {
			success: success,
			message: message,
			info: data
		};
	}
	return invalid(status, {
		success: success,
		message: message,
		info: data
	});
};
