import { generateClient, get } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import { CreateHabitDetailsInput, CreateHabitInput } from '@/API';

class HabitService {
  private client: any; // Define the type based on what generateClient returns

  constructor() {
    this.client = generateClient(); // Setup the client on instantiation
  }

  async getHabits(): Promise<any> {
    try {
      console.log('test');
      const newHabit = await this.client.graphql({
        query: queries.listHabits,
      });
      return newHabit;
    } catch (error) {
      console.error('Error getting habits', error);
      throw new Error('Failed to get habits');
    }
  }

  async createHabit(input: CreateHabitInput): Promise<any> {
    try {
      console.log('test');
      const newHabit = await this.client.graphql({
        query: mutations.createHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating habit', error);
      throw new Error('Failed to create habit');
    }
  }

  async createHabitDetails(input: CreateHabitDetailsInput): Promise<any> {
    try {
      console.log('test');
      const newHabit = await this.client.graphql({
        query: mutations.createHabitDetails,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating habit details', error);
      throw new Error('Failed to create habit');
    }
  }
}

export default new HabitService();
