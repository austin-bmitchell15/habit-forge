import { Exercise } from '@/API';

export const BODY_PART_CATEGORY_MAPPING = {
  Cardio: ['Cardiovascular System'],
  Back: ['Lats', 'Upper Back'],
  Shoulders: ['Delts', 'Serratus Anterior'],
  Legs: ['Abductors', 'Adductors', 'Calves', 'Glutes', 'Hamstrings', 'Quads'],
  Arms: ['Biceps', 'Forearms', 'Triceps'],
  Abs: ['Abs', 'Spine'],
};

export const BODY_PART_CATEGORIES = [
  'Cardio',
  'Back',
  'Shoulders',
  'Legs',
  'Arms',
  'Abs',
];

export type MyWorkoutTemplate = {
  __typename: 'WorkoutTemplate';
  id: string;
  name: string;
  exercises?: ExerciseList;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ExerciseList = {
  items: [MyExercise];
};

export type MyExercise = {
  exercise: Exercise;
};
