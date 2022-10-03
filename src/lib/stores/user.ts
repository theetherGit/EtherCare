import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { User } from '../utils';

export const user: Writable<User | null> = writable();
