export enum HabitTypes {
  General = 'general',
  Progressive = 'progressive',
  Activity = 'activity',
}

export interface Habit {
  id: string;
  name: string;
  description: string;
  type: HabitTypes.Progressive | HabitTypes.General | HabitTypes.Activity;
}

export interface ProgressiveHabit extends Habit {
  goal: number;
  unit: string; // e.g., liters, kilometers
  currentProgress: number;
  streakDays: number;
}

export interface ActivityHabit extends Habit {
  sessionsPerWeek: number;
  completedSessions: number;
  streakWeeks: number;
}

export interface GeneralHabit extends Habit {
  completed: boolean;
}
