import { generateClient, get } from 'aws-amplify/api';
import * as mutations from '../graphql/mutations';
import * as queries from '../graphql/queries';
import * as subscriptions from '../graphql/subscriptions';
import {
  ActivityHabit,
  CreateActivityHabitInput,
  CreateGeneralHabitInput,
  CreateProgressiveHabitInput,
  DeleteActivityHabitInput,
  DeleteGeneralHabitInput,
  DeleteProgressiveHabitInput,
  GeneralHabit,
  ProgressiveHabit,
} from '@/API';
import { Habit } from '../utils/types/habits';
import { Dispatch, SetStateAction } from 'react';

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
      console.error('Error deleting general habit', error);
      throw new Error('Failed to delete general habit');
    }
  }

  habitChangeListener(setHabits: Function) {
    const createActivitySub = this.client
      .graphql({ query: subscriptions.onCreateActivityHabit })
      .subscribe({
        next: ({ data }: any) => {
          const habit: Habit = data.onCreateGeneralHabit;
          setHabits((prevHabits: Habit[]) => [...prevHabits, habit]);
        },
        error: (error: any) => console.warn(error),
      });

    const createProgressiveSub = this.client
      .graphql({ query: subscriptions.onCreateProgressiveHabit })
      .subscribe({
        next: ({ data }: any) => {
          const habit: Habit = data.onCreateGeneralHabit;
          setHabits((prevHabits: Habit[]) => [...prevHabits, habit]);
        },
        error: (error: any) => console.warn(error),
      });

    const createGeneralSub = this.client
      .graphql({ query: subscriptions.onCreateGeneralHabit })
      .subscribe({
        next: ({ data }: any) => {
          const habit: Habit = data.onCreateGeneralHabit;
          setHabits((prevHabits: Habit[]) => [...prevHabits, habit]);
        },
        error: (error: any) => console.warn(error),
      });

    const deleteActivitySub = this.client
      .graphql({ query: subscriptions.onDeleteActivityHabit })
      .subscribe({
        next: ({ data }: any) => {
          const habit: Habit = data.onDeleteActivityHabit;
          if (habit && habit.id) {
            setHabits((prevHabits: Habit[]) =>
              prevHabits.filter((h) => h.id !== habit.id),
            );
          }
        },
        error: (error: any) => console.warn(error),
      });

    const deleteProgressiveSub = this.client
      .graphql({ query: subscriptions.onDeleteProgressiveHabit })
      .subscribe({
        next: ({ data }: any) => {
          const habit: Habit = data.onDeleteProgressiveHabit;
          if (habit && habit.id) {
            setHabits((prevHabits: Habit[]) =>
              prevHabits.filter((h) => h.id !== habit.id),
            );
          }
        },
        error: (error: any) => console.warn(error),
      });

    const deleteGeneralSub = this.client
      .graphql({ query: subscriptions.onDeleteGeneralHabit })
      .subscribe({
        next: ({ data }: any) => {
          const habit: Habit = data.onDeleteGeneralHabit;
          if (habit && habit.id) {
            setHabits((prevHabits: Habit[]) =>
              prevHabits.filter((h) => h.id !== habit.id),
            );
          }
        },
        error: (error: any) => console.warn(error),
      });
      const updateActivitySub = this.client
      .graphql({ query: subscriptions.onUpdateActivityHabit })
      .subscribe({
        next: ({ data }: any) => {
          const updatedHabit: Habit = data.onUpdateActivityHabit;
          if (updatedHabit && updatedHabit.id) {
            setHabits((prevHabits: Habit[]) => prevHabits.map(habit => habit.id === updatedHabit.id ? updatedHabit : habit));
          }
        },
        error: (error: any) => console.warn(error),
      });

    const updateProgressiveSub = this.client
      .graphql({ query: subscriptions.onUpdateProgressiveHabit })
      .subscribe({
        next: ({ data }: any) => {
          const updatedHabit: Habit = data.onUpdateProgressiveHabit;
          if (updatedHabit && updatedHabit.id) {
            setHabits((prevHabits: Habit[]) => prevHabits.map(habit => habit.id === updatedHabit.id ? updatedHabit : habit));
          }
        },
        error: (error: any) => console.warn(error),
      });

    const updateGeneralSub = this.client
      .graphql({ query: subscriptions.onUpdateGeneralHabit })
      .subscribe({
        next: ({ data }: any) => {
          const updatedHabit: Habit = data.onUpdateGeneralHabit;
          if (updatedHabit && updatedHabit.id) {
            setHabits((prevHabits: Habit[]) => prevHabits.map(habit => habit.id === updatedHabit.id ? updatedHabit : habit));
          }
        },
        error: (error: any) => console.warn(error),
      });

    return {
      createGeneralSub,
      createActivitySub,
      createProgressiveSub,
      deleteActivitySub,
      deleteGeneralSub,
      deleteProgressiveSub,
      updateActivitySub,
      updateProgressiveSub,
      updateGeneralSub,
    };
  }
}

export default new HabitService();
