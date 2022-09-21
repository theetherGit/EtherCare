import { Entity, Schema } from 'redis-om';

interface User {
	name: string;
	email: string;
	password: string;
	phone: string;
	user_type: string;
	active: boolean;
}

interface Su {
	allow: boolean;
}

// User Schema
class User extends Entity {}
export let userSchema = new Schema(User, {
	name: { type: 'text' },
	email: { type: 'string' },
	password: { type: 'string' },
	phone: { type: 'string' },
	user_type: { type: 'string' },
	active: { type: 'boolean' }
});

// Super User Creation api Permission
class Su extends Entity {}

export let suSchema = new Schema(Su, {
	allow: { type: 'boolean' }
});

export { Su };
