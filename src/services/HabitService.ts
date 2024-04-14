import { Habit } from '@/utils/types/habit';
import { Amplify } from 'aws-amplify';
import { get } from 'aws-amplify/api';
import UserService from './UserService';

class HabitService {
  async getAllHabits(): Promise<any> {
    try {
      const user = await UserService.getUserToken();
      const response = await get({
        apiName: 'habitforgeAPI',
        path: '/habits',
        options: {
          headers: {
            Authorization: user ?? '',
          },
        },
      }).response;
      return response;
    } catch (error) {
      console.error('Error fetching habits:', error);
      throw new Error('Failed to fetch habits');
    }
  }
}

export default new HabitService();
