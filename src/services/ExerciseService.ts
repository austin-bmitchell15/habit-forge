import { generateClient, get } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import { Exercise } from '@/API';

class ExerciseService {
  private client: any; // Define the type based on what generateClient returns
  constructor() {
    this.client = generateClient(); // Setup the client on instantiation
  }

  async getExercises(): Promise<any> {
    try {
      const result = await this.client.graphql({
        query: queries.listExercises,
        variables: { limit: 800 },
      });

      if (result.errors) {
        console.error('GraphQL errors:', result.errors);
        throw new Error('GraphQL errors occurred while fetching exercises.');
      }

      const exercises: Exercise[] = result.data.listExercises.items; // Assuming 'items' is the correct path; adjust as necessary based on your GraphQL schema

      return exercises;
    } catch (error) {
      console.error('Error getting exercises', error);
      throw new Error('Failed to get exercises');
    }
  }
}

export default new ExerciseService();
