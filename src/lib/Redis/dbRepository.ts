import client from './dbClient';
import { suSchema, userSchema } from './dbSchema';

// Repository creation
export const userRepository = client.fetchRepository(userSchema);
export const suRepository = client.fetchRepository(suSchema);

// Indexing for search
await userRepository.createIndex();
await suRepository.createIndex();
