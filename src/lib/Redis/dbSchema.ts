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

interface SessionManager {
	data: string;
}

// User Schema
class User extends Entity {}
export const userSchema = new Schema(User, {
	name: { type: 'text' },
	email: { type: 'string' },
	password: { type: 'string' },
	phone: { type: 'string' },
	user_type: { type: 'string' },
	active: { type: 'boolean' }
});

// Super User Creation api Permission
class Su extends Entity {}

export const suSchema = new Schema(Su, {
	allow: { type: 'boolean' }
});

// Redis session manager Schema
// I was thinking to replace it with redis somewhere in future
class SessionManager extends Entity {}
export const sessionManagerSchema = new Schema(SessionManager, {
	data: { type: 'string' }
});
