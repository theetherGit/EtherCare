import { invalid } from '@sveltejs/kit';

export const customResponse = (status: number, success: boolean, message: string, data = {}) => {
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

function hex(buffer: ArrayBuffer) {
	const hexCodes: string[] = [];
	const view = new DataView(buffer);
	for (let i = 0; i < view.byteLength; i += 4) {
		const value = view.getUint32(i);
		const stringValue = value.toString(16);
		const padding = '00000000';
		const paddedValue = (padding + stringValue).slice(-padding.length);
		hexCodes.push(paddedValue);
	}
	return hexCodes.join('');
}

export async function hashPassword(password: string) {
	const encoder = new TextEncoder();
	return hex(await crypto.subtle.digest('SHA-256', encoder.encode(password)));
}

export interface User {
	id: string;
	name: string;
	email: string;
	phone: string;
	type: string;
	active: boolean;
}
