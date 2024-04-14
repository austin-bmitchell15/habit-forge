import { generateClient, get } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
import { CreateHabitInput } from '@/API';

class HabitService {
  private client: any;  // Define the type based on what generateClient returns

  constructor() {
    this.client = generateClient();  // Setup the client on instantiation
  }
  
  async createHabit(input : CreateHabitInput): Promise<any> {
    try {
      console.log("test")
      const newHabit = await this.client.graphql({
        query: mutations.createHabit,
        variables: { input }
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating habit', error);
      throw new Error('Failed to create habit');
    }
  }
}

export default new HabitService();
