import { Client } from 'redis-om';
import { createClient } from 'redis';
import { REDIS_URL } from '$env/dynamic/private';

const url = REDIS_URL;
export const connection = await createClient({ url });
await connection.connect();
export const client = await new Client().use(connection);
