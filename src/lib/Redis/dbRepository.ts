import { client } from './dbClient';
import { suSchema, userSchema, sessionManagerSchema, ProjectSchema } from './dbSchema';

// Repository creation
export const userRepository = client.fetchRepository(userSchema);
export const suRepository = client.fetchRepository(suSchema);
export const sessionManagerRepository = client.fetchRepository(sessionManagerSchema);
export const ProjectRepository = client.fetchRepository(ProjectSchema);

// Indexing for search
await userRepository.createIndex();
await suRepository.createIndex();
await sessionManagerRepository.createIndex();
await ProjectRepository.createIndex();
