import { client } from './dbClient';
import { suSchema, userSchema, sessionManagerSchema } from './dbSchema';

// Repository creation
export const userRepository = client.fetchRepository(userSchema);
export const suRepository = client.fetchRepository(suSchema);
export const sessionManagerRepository = client.fetchRepository(sessionManagerSchema);

// Indexing for search
await userRepository.createIndex();
await suRepository.createIndex();
await sessionManagerRepository.createIndex();
