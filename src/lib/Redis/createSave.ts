import { userRepository } from './dbRepository';
import { hashPassword } from '../utils';

export const createUser = async (
	name: string,
	email: string,
	phone: string,
	password: string,
	active: boolean,
	type: string
) => {
	return await userRepository.createAndSave({
		name: name,
		email: email,
		phone: phone,
		password: await hashPassword(password),
		active: true,
		user_type: type
	});
};
