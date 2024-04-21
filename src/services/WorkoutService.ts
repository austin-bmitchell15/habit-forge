import { generateClient, get } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as customQueries from '../graphql/custom-queries';
import * as subscriptions from '../graphql/subscriptions';
import {
  CreateWorkoutTemplateExerciseInput,
  CreateWorkoutTemplateInput,
  WorkoutTemplate,
} from '@/API';

class ExerciseService {
  private client: any; // Define the type based on what generateClient returns
  constructor() {
    this.client = generateClient(); // Setup the client on instantiation
  }

  async getWorkouts(): Promise<any> {
    try {
      const result = await this.client.graphql({
        query: customQueries.listWorkoutTemplates,
      });

      if (result.errors) {
        console.error('GraphQL errors:', result.errors);
        throw new Error('GraphQL errors occurred while fetching exercises.');
      }

      const workouts: WorkoutTemplate[] =
        result.data.listWorkoutTemplates.items; // Assuming 'items' is the correct path; adjust as necessary based on your GraphQL schema

      return workouts;
    } catch (error) {
      console.error('Error getting workout templates', error);
      throw new Error('Failed to get workout templates');
    }
  }

  async createWorkout(input: CreateWorkoutTemplateInput): Promise<any> {
    try {
      const newWorkout = await this.client.graphql({
        query: mutations.createWorkoutTemplate,
        variables: { input },
      });
      return newWorkout;
    } catch (error) {
      console.error('Error creating progressive habit', error);
      throw new Error('Failed to create progressive habit');
    }
  }

  async createWorkoutExercise(
    input: CreateWorkoutTemplateExerciseInput,
  ): Promise<any> {
    try {
      const newWorkoutExercise = await this.client.graphql({
        query: mutations.createWorkoutTemplateExercise,
        variables: { input },
      });
      return newWorkoutExercise;
    } catch (error) {
      console.error('Error creating progressive habit', error);
      throw new Error('Failed to create progressive habit');
    }
  }

  workoutChangeListener(setHabits: Function) {
    const createWorkoutSub = this.client
      .graphql({ query: subscriptions.onCreateWorkoutTemplate })
      .subscribe({
        next: ({ data }: any) => {
          const workout: WorkoutTemplate = data.onCreateActivityHabit;
          setHabits((prevWorkouts: WorkoutTemplate[]) => [
            ...prevWorkouts,
            workout,
          ]);
        },
        error: (error: any) => console.warn(error),
      });
    return { createWorkoutSub };
  }
}

export default new ExerciseService();
