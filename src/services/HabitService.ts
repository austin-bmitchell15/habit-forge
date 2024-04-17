import { generateClient, get } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import {
  ActivityHabit,
  CreateActivityHabitInput,
  CreateGeneralHabitInput,
  CreateProgressiveHabitInput,
  GeneralHabit,
  ProgressiveHabit,
} from '@/API';
import { Habit } from '../utils/types/habits';

class HabitService {
  private client: any; // Define the type based on what generateClient returns
  constructor() {
    this.client = generateClient(); // Setup the client on instantiation
  }

  async getHabits(): Promise<any> {
    try {
      let habits: Habit[] = [];
      const progressiveHabits = await this.client.graphql({
        query: queries.listProgressiveHabits,
      });
      habits = habits.concat(
        progressiveHabits.data.listProgressiveHabits.items,
      );

      const activityHabits = await this.client.graphql({
        query: queries.listActivityHabits,
      });
      habits = habits.concat(activityHabits.data.listActivityHabits.items);

      const generalHabits = await this.client.graphql({
        query: queries.listGeneralHabits,
      });
      habits = habits.concat(generalHabits.data.listGeneralHabits.items);

      return habits;
    } catch (error) {
      console.error('Error getting habits', error);
      throw new Error('Failed to get habits');
    }
  }

  async createProgressiveHabit(
    input: CreateProgressiveHabitInput,
  ): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.createProgressiveHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating progressive habit', error);
      throw new Error('Failed to create progressive habit');
    }
  }

  async createActivityHabit(input: CreateActivityHabitInput): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.createActivityHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating activity habit', error);
      throw new Error('Failed to create activity habit');
    }
  }

  async createGeneralHabit(input: CreateGeneralHabitInput): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.createGeneralHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating general habit', error);
      throw new Error('Failed to create general habit');
    }
  }

  async updateProgressiveHabit(
    input: CreateProgressiveHabitInput,
  ): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.updateProgressiveHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating progressive habit', error);
      throw new Error('Failed to create progressive habit');
    }
  }

  async updateActivityHabit(input: CreateActivityHabitInput): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.updateActivityHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating activity habit', error);
      throw new Error('Failed to create activity habit');
    }
  }

  async updateGeneralHabit(input: CreateGeneralHabitInput): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.updateGeneralHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating general habit', error);
      throw new Error('Failed to create general habit');
    }
  }

  async deleteProgressiveHabit(
    input: DeleteProgressiveHabitInput,
  ): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.deleteProgressiveHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating progressive habit', error);
      throw new Error('Failed to create progressive habit');
    }
  }

  async deleteActivityHabit(input: DeleteActivityHabitInput): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.deleteActivityHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating activity habit', error);
      throw new Error('Failed to create activity habit');
    }
  }

  async deleteGeneralHabit(input: DeleteGeneralHabitInput): Promise<any> {
    try {
      const newHabit = await this.client.graphql({
        query: mutations.deleteGeneralHabit,
        variables: { input },
      });
      return newHabit;
    } catch (error) {
      console.error('Error creating general habit', error);
      throw new Error('Failed to create general habit');
    }
  }
}

export default new HabitService();
