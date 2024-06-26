/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProgressiveHabitInput = {
  id?: string | null;
  name: string;
  type: HabitType;
  goal: number;
  unit: string;
  currentProgress?: number | null;
  lastCompleted?: string | null;
  streak?: number | null;
};

export enum HabitType {
  PROGRESSIVE = 'PROGRESSIVE',
  ACTIVITY = 'ACTIVITY',
  GENERAL = 'GENERAL',
}

export type ModelProgressiveHabitConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  goal?: ModelFloatInput | null;
  unit?: ModelStringInput | null;
  currentProgress?: ModelFloatInput | null;
  lastCompleted?: ModelStringInput | null;
  streak?: ModelIntInput | null;
  and?: Array<ModelProgressiveHabitConditionInput | null> | null;
  or?: Array<ModelProgressiveHabitConditionInput | null> | null;
  not?: ModelProgressiveHabitConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelHabitTypeInput = {
  eq?: HabitType | null;
  ne?: HabitType | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ProgressiveHabit = {
  __typename: 'ProgressiveHabit';
  id: string;
  name: string;
  type: HabitType;
  goal: number;
  unit: string;
  currentProgress?: number | null;
  lastCompleted?: string | null;
  streak?: number | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateProgressiveHabitInput = {
  id: string;
  name?: string | null;
  type?: HabitType | null;
  goal?: number | null;
  unit?: string | null;
  currentProgress?: number | null;
  lastCompleted?: string | null;
  streak?: number | null;
};

export type DeleteProgressiveHabitInput = {
  id: string;
};

export type CreateActivityHabitInput = {
  id?: string | null;
  name: string;
  type: HabitType;
  sessionsPerWeek: number;
  completedSessions?: number | null;
  lastCompleted?: string | null;
  streak?: number | null;
};

export type ModelActivityHabitConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  sessionsPerWeek?: ModelIntInput | null;
  completedSessions?: ModelIntInput | null;
  lastCompleted?: ModelStringInput | null;
  streak?: ModelIntInput | null;
  and?: Array<ModelActivityHabitConditionInput | null> | null;
  or?: Array<ModelActivityHabitConditionInput | null> | null;
  not?: ModelActivityHabitConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type ActivityHabit = {
  __typename: 'ActivityHabit';
  id: string;
  name: string;
  type: HabitType;
  sessionsPerWeek: number;
  completedSessions?: number | null;
  lastCompleted?: string | null;
  streak?: number | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateActivityHabitInput = {
  id: string;
  name?: string | null;
  type?: HabitType | null;
  sessionsPerWeek?: number | null;
  completedSessions?: number | null;
  lastCompleted?: string | null;
  streak?: number | null;
};

export type DeleteActivityHabitInput = {
  id: string;
};

export type CreateGeneralHabitInput = {
  id?: string | null;
  name: string;
  type: HabitType;
  completed?: boolean | null;
  lastCompleted?: string | null;
  streak?: number | null;
};

export type ModelGeneralHabitConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  completed?: ModelBooleanInput | null;
  lastCompleted?: ModelStringInput | null;
  streak?: ModelIntInput | null;
  and?: Array<ModelGeneralHabitConditionInput | null> | null;
  or?: Array<ModelGeneralHabitConditionInput | null> | null;
  not?: ModelGeneralHabitConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type GeneralHabit = {
  __typename: 'GeneralHabit';
  id: string;
  name: string;
  type: HabitType;
  completed?: boolean | null;
  lastCompleted?: string | null;
  streak?: number | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateGeneralHabitInput = {
  id: string;
  name?: string | null;
  type?: HabitType | null;
  completed?: boolean | null;
  lastCompleted?: string | null;
  streak?: number | null;
};

export type DeleteGeneralHabitInput = {
  id: string;
};

export type CreateWorkoutTemplateInput = {
  id?: string | null;
  name: string;
};

export type ModelWorkoutTemplateConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelWorkoutTemplateConditionInput | null> | null;
  or?: Array<ModelWorkoutTemplateConditionInput | null> | null;
  not?: ModelWorkoutTemplateConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type WorkoutTemplate = {
  __typename: 'WorkoutTemplate';
  id: string;
  name: string;
  exercises?: ModelWorkoutTemplateExerciseConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelWorkoutTemplateExerciseConnection = {
  __typename: 'ModelWorkoutTemplateExerciseConnection';
  items: Array<WorkoutTemplateExercise | null>;
  nextToken?: string | null;
};

export type WorkoutTemplateExercise = {
  __typename: 'WorkoutTemplateExercise';
  id: string;
  workoutTemplateId: string;
  exerciseId: string;
  workoutTemplate: WorkoutTemplate;
  exercise: Exercise;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Exercise = {
  __typename: 'Exercise';
  id: string;
  name: string;
  primaryTarget: string;
  equipment: string;
  gifUrl: string;
  instructions: Array<string | null>;
  templates?: ModelWorkoutTemplateExerciseConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateWorkoutTemplateInput = {
  id: string;
  name?: string | null;
};

export type DeleteWorkoutTemplateInput = {
  id: string;
};

export type CreateExerciseInput = {
  id?: string | null;
  name: string;
  primaryTarget: string;
  equipment: string;
  gifUrl: string;
  instructions: Array<string | null>;
};

export type ModelExerciseConditionInput = {
  name?: ModelStringInput | null;
  primaryTarget?: ModelStringInput | null;
  equipment?: ModelStringInput | null;
  gifUrl?: ModelStringInput | null;
  instructions?: ModelStringInput | null;
  and?: Array<ModelExerciseConditionInput | null> | null;
  or?: Array<ModelExerciseConditionInput | null> | null;
  not?: ModelExerciseConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type UpdateExerciseInput = {
  id: string;
  name?: string | null;
  primaryTarget?: string | null;
  equipment?: string | null;
  gifUrl?: string | null;
  instructions?: Array<string | null> | null;
};

export type DeleteExerciseInput = {
  id: string;
};

export type CreateWorkoutTemplateExerciseInput = {
  id?: string | null;
  workoutTemplateId: string;
  exerciseId: string;
};

export type ModelWorkoutTemplateExerciseConditionInput = {
  workoutTemplateId?: ModelIDInput | null;
  exerciseId?: ModelIDInput | null;
  and?: Array<ModelWorkoutTemplateExerciseConditionInput | null> | null;
  or?: Array<ModelWorkoutTemplateExerciseConditionInput | null> | null;
  not?: ModelWorkoutTemplateExerciseConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateWorkoutTemplateExerciseInput = {
  id: string;
  workoutTemplateId?: string | null;
  exerciseId?: string | null;
};

export type DeleteWorkoutTemplateExerciseInput = {
  id: string;
};

export type ModelProgressiveHabitFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  goal?: ModelFloatInput | null;
  unit?: ModelStringInput | null;
  currentProgress?: ModelFloatInput | null;
  lastCompleted?: ModelStringInput | null;
  streak?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelProgressiveHabitFilterInput | null> | null;
  or?: Array<ModelProgressiveHabitFilterInput | null> | null;
  not?: ModelProgressiveHabitFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelProgressiveHabitConnection = {
  __typename: 'ModelProgressiveHabitConnection';
  items: Array<ProgressiveHabit | null>;
  nextToken?: string | null;
};

export type ModelActivityHabitFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  sessionsPerWeek?: ModelIntInput | null;
  completedSessions?: ModelIntInput | null;
  lastCompleted?: ModelStringInput | null;
  streak?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelActivityHabitFilterInput | null> | null;
  or?: Array<ModelActivityHabitFilterInput | null> | null;
  not?: ModelActivityHabitFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelActivityHabitConnection = {
  __typename: 'ModelActivityHabitConnection';
  items: Array<ActivityHabit | null>;
  nextToken?: string | null;
};

export type ModelGeneralHabitFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  completed?: ModelBooleanInput | null;
  lastCompleted?: ModelStringInput | null;
  streak?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelGeneralHabitFilterInput | null> | null;
  or?: Array<ModelGeneralHabitFilterInput | null> | null;
  not?: ModelGeneralHabitFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelGeneralHabitConnection = {
  __typename: 'ModelGeneralHabitConnection';
  items: Array<GeneralHabit | null>;
  nextToken?: string | null;
};

export type ModelWorkoutTemplateFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWorkoutTemplateFilterInput | null> | null;
  or?: Array<ModelWorkoutTemplateFilterInput | null> | null;
  not?: ModelWorkoutTemplateFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelWorkoutTemplateConnection = {
  __typename: 'ModelWorkoutTemplateConnection';
  items: Array<WorkoutTemplate | null>;
  nextToken?: string | null;
};

export type ModelExerciseFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  primaryTarget?: ModelStringInput | null;
  equipment?: ModelStringInput | null;
  gifUrl?: ModelStringInput | null;
  instructions?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelExerciseFilterInput | null> | null;
  or?: Array<ModelExerciseFilterInput | null> | null;
  not?: ModelExerciseFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelExerciseConnection = {
  __typename: 'ModelExerciseConnection';
  items: Array<Exercise | null>;
  nextToken?: string | null;
};

export type ModelWorkoutTemplateExerciseFilterInput = {
  id?: ModelIDInput | null;
  workoutTemplateId?: ModelIDInput | null;
  exerciseId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelWorkoutTemplateExerciseFilterInput | null> | null;
  or?: Array<ModelWorkoutTemplateExerciseFilterInput | null> | null;
  not?: ModelWorkoutTemplateExerciseFilterInput | null;
  owner?: ModelStringInput | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelSubscriptionProgressiveHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  goal?: ModelSubscriptionFloatInput | null;
  unit?: ModelSubscriptionStringInput | null;
  currentProgress?: ModelSubscriptionFloatInput | null;
  lastCompleted?: ModelSubscriptionStringInput | null;
  streak?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProgressiveHabitFilterInput | null> | null;
  or?: Array<ModelSubscriptionProgressiveHabitFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionActivityHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  sessionsPerWeek?: ModelSubscriptionIntInput | null;
  completedSessions?: ModelSubscriptionIntInput | null;
  lastCompleted?: ModelSubscriptionStringInput | null;
  streak?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionActivityHabitFilterInput | null> | null;
  or?: Array<ModelSubscriptionActivityHabitFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionGeneralHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  completed?: ModelSubscriptionBooleanInput | null;
  lastCompleted?: ModelSubscriptionStringInput | null;
  streak?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionGeneralHabitFilterInput | null> | null;
  or?: Array<ModelSubscriptionGeneralHabitFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionWorkoutTemplateFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWorkoutTemplateFilterInput | null> | null;
  or?: Array<ModelSubscriptionWorkoutTemplateFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  primaryTarget?: ModelSubscriptionStringInput | null;
  equipment?: ModelSubscriptionStringInput | null;
  gifUrl?: ModelSubscriptionStringInput | null;
  instructions?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionExerciseFilterInput | null> | null;
  or?: Array<ModelSubscriptionExerciseFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionWorkoutTemplateExerciseFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  workoutTemplateId?: ModelSubscriptionIDInput | null;
  exerciseId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionWorkoutTemplateExerciseFilterInput | null> | null;
  or?: Array<ModelSubscriptionWorkoutTemplateExerciseFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type CreateProgressiveHabitMutationVariables = {
  input: CreateProgressiveHabitInput;
  condition?: ModelProgressiveHabitConditionInput | null;
};

export type CreateProgressiveHabitMutation = {
  createProgressiveHabit?: {
    __typename: 'ProgressiveHabit';
    id: string;
    name: string;
    type: HabitType;
    goal: number;
    unit: string;
    currentProgress?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateProgressiveHabitMutationVariables = {
  input: UpdateProgressiveHabitInput;
  condition?: ModelProgressiveHabitConditionInput | null;
};

export type UpdateProgressiveHabitMutation = {
  updateProgressiveHabit?: {
    __typename: 'ProgressiveHabit';
    id: string;
    name: string;
    type: HabitType;
    goal: number;
    unit: string;
    currentProgress?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteProgressiveHabitMutationVariables = {
  input: DeleteProgressiveHabitInput;
  condition?: ModelProgressiveHabitConditionInput | null;
};

export type DeleteProgressiveHabitMutation = {
  deleteProgressiveHabit?: {
    __typename: 'ProgressiveHabit';
    id: string;
    name: string;
    type: HabitType;
    goal: number;
    unit: string;
    currentProgress?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateActivityHabitMutationVariables = {
  input: CreateActivityHabitInput;
  condition?: ModelActivityHabitConditionInput | null;
};

export type CreateActivityHabitMutation = {
  createActivityHabit?: {
    __typename: 'ActivityHabit';
    id: string;
    name: string;
    type: HabitType;
    sessionsPerWeek: number;
    completedSessions?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateActivityHabitMutationVariables = {
  input: UpdateActivityHabitInput;
  condition?: ModelActivityHabitConditionInput | null;
};

export type UpdateActivityHabitMutation = {
  updateActivityHabit?: {
    __typename: 'ActivityHabit';
    id: string;
    name: string;
    type: HabitType;
    sessionsPerWeek: number;
    completedSessions?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteActivityHabitMutationVariables = {
  input: DeleteActivityHabitInput;
  condition?: ModelActivityHabitConditionInput | null;
};

export type DeleteActivityHabitMutation = {
  deleteActivityHabit?: {
    __typename: 'ActivityHabit';
    id: string;
    name: string;
    type: HabitType;
    sessionsPerWeek: number;
    completedSessions?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateGeneralHabitMutationVariables = {
  input: CreateGeneralHabitInput;
  condition?: ModelGeneralHabitConditionInput | null;
};

export type CreateGeneralHabitMutation = {
  createGeneralHabit?: {
    __typename: 'GeneralHabit';
    id: string;
    name: string;
    type: HabitType;
    completed?: boolean | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateGeneralHabitMutationVariables = {
  input: UpdateGeneralHabitInput;
  condition?: ModelGeneralHabitConditionInput | null;
};

export type UpdateGeneralHabitMutation = {
  updateGeneralHabit?: {
    __typename: 'GeneralHabit';
    id: string;
    name: string;
    type: HabitType;
    completed?: boolean | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteGeneralHabitMutationVariables = {
  input: DeleteGeneralHabitInput;
  condition?: ModelGeneralHabitConditionInput | null;
};

export type DeleteGeneralHabitMutation = {
  deleteGeneralHabit?: {
    __typename: 'GeneralHabit';
    id: string;
    name: string;
    type: HabitType;
    completed?: boolean | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateWorkoutTemplateMutationVariables = {
  input: CreateWorkoutTemplateInput;
  condition?: ModelWorkoutTemplateConditionInput | null;
};

export type CreateWorkoutTemplateMutation = {
  createWorkoutTemplate?: {
    __typename: 'WorkoutTemplate';
    id: string;
    name: string;
    exercises?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateWorkoutTemplateMutationVariables = {
  input: UpdateWorkoutTemplateInput;
  condition?: ModelWorkoutTemplateConditionInput | null;
};

export type UpdateWorkoutTemplateMutation = {
  updateWorkoutTemplate?: {
    __typename: 'WorkoutTemplate';
    id: string;
    name: string;
    exercises?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteWorkoutTemplateMutationVariables = {
  input: DeleteWorkoutTemplateInput;
  condition?: ModelWorkoutTemplateConditionInput | null;
};

export type DeleteWorkoutTemplateMutation = {
  deleteWorkoutTemplate?: {
    __typename: 'WorkoutTemplate';
    id: string;
    name: string;
    exercises?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateExerciseMutationVariables = {
  input: CreateExerciseInput;
  condition?: ModelExerciseConditionInput | null;
};

export type CreateExerciseMutation = {
  createExercise?: {
    __typename: 'Exercise';
    id: string;
    name: string;
    primaryTarget: string;
    equipment: string;
    gifUrl: string;
    instructions: Array<string | null>;
    templates?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateExerciseMutationVariables = {
  input: UpdateExerciseInput;
  condition?: ModelExerciseConditionInput | null;
};

export type UpdateExerciseMutation = {
  updateExercise?: {
    __typename: 'Exercise';
    id: string;
    name: string;
    primaryTarget: string;
    equipment: string;
    gifUrl: string;
    instructions: Array<string | null>;
    templates?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteExerciseMutationVariables = {
  input: DeleteExerciseInput;
  condition?: ModelExerciseConditionInput | null;
};

export type DeleteExerciseMutation = {
  deleteExercise?: {
    __typename: 'Exercise';
    id: string;
    name: string;
    primaryTarget: string;
    equipment: string;
    gifUrl: string;
    instructions: Array<string | null>;
    templates?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateWorkoutTemplateExerciseMutationVariables = {
  input: CreateWorkoutTemplateExerciseInput;
  condition?: ModelWorkoutTemplateExerciseConditionInput | null;
};

export type CreateWorkoutTemplateExerciseMutation = {
  createWorkoutTemplateExercise?: {
    __typename: 'WorkoutTemplateExercise';
    id: string;
    workoutTemplateId: string;
    exerciseId: string;
    workoutTemplate: {
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    exercise: {
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateWorkoutTemplateExerciseMutationVariables = {
  input: UpdateWorkoutTemplateExerciseInput;
  condition?: ModelWorkoutTemplateExerciseConditionInput | null;
};

export type UpdateWorkoutTemplateExerciseMutation = {
  updateWorkoutTemplateExercise?: {
    __typename: 'WorkoutTemplateExercise';
    id: string;
    workoutTemplateId: string;
    exerciseId: string;
    workoutTemplate: {
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    exercise: {
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteWorkoutTemplateExerciseMutationVariables = {
  input: DeleteWorkoutTemplateExerciseInput;
  condition?: ModelWorkoutTemplateExerciseConditionInput | null;
};

export type DeleteWorkoutTemplateExerciseMutation = {
  deleteWorkoutTemplateExercise?: {
    __typename: 'WorkoutTemplateExercise';
    id: string;
    workoutTemplateId: string;
    exerciseId: string;
    workoutTemplate: {
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    exercise: {
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetProgressiveHabitQueryVariables = {
  id: string;
};

export type GetProgressiveHabitQuery = {
  getProgressiveHabit?: {
    __typename: 'ProgressiveHabit';
    id: string;
    name: string;
    type: HabitType;
    goal: number;
    unit: string;
    currentProgress?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListProgressiveHabitsQueryVariables = {
  filter?: ModelProgressiveHabitFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListProgressiveHabitsQuery = {
  listProgressiveHabits?: {
    __typename: 'ModelProgressiveHabitConnection';
    items: Array<{
      __typename: 'ProgressiveHabit';
      id: string;
      name: string;
      type: HabitType;
      goal: number;
      unit: string;
      currentProgress?: number | null;
      lastCompleted?: string | null;
      streak?: number | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetActivityHabitQueryVariables = {
  id: string;
};

export type GetActivityHabitQuery = {
  getActivityHabit?: {
    __typename: 'ActivityHabit';
    id: string;
    name: string;
    type: HabitType;
    sessionsPerWeek: number;
    completedSessions?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListActivityHabitsQueryVariables = {
  filter?: ModelActivityHabitFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListActivityHabitsQuery = {
  listActivityHabits?: {
    __typename: 'ModelActivityHabitConnection';
    items: Array<{
      __typename: 'ActivityHabit';
      id: string;
      name: string;
      type: HabitType;
      sessionsPerWeek: number;
      completedSessions?: number | null;
      lastCompleted?: string | null;
      streak?: number | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetGeneralHabitQueryVariables = {
  id: string;
};

export type GetGeneralHabitQuery = {
  getGeneralHabit?: {
    __typename: 'GeneralHabit';
    id: string;
    name: string;
    type: HabitType;
    completed?: boolean | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListGeneralHabitsQueryVariables = {
  filter?: ModelGeneralHabitFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListGeneralHabitsQuery = {
  listGeneralHabits?: {
    __typename: 'ModelGeneralHabitConnection';
    items: Array<{
      __typename: 'GeneralHabit';
      id: string;
      name: string;
      type: HabitType;
      completed?: boolean | null;
      lastCompleted?: string | null;
      streak?: number | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetWorkoutTemplateQueryVariables = {
  id: string;
};

export type GetWorkoutTemplateQuery = {
  getWorkoutTemplate?: {
    __typename: 'WorkoutTemplate';
    id: string;
    name: string;
    exercises?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListWorkoutTemplatesQueryVariables = {
  filter?: ModelWorkoutTemplateFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListWorkoutTemplatesQuery = {
  listWorkoutTemplates?: {
    __typename: 'ModelWorkoutTemplateConnection';
    items: Array<{
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetExerciseQueryVariables = {
  id: string;
};

export type GetExerciseQuery = {
  getExercise?: {
    __typename: 'Exercise';
    id: string;
    name: string;
    primaryTarget: string;
    equipment: string;
    gifUrl: string;
    instructions: Array<string | null>;
    templates?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListExercisesQueryVariables = {
  filter?: ModelExerciseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListExercisesQuery = {
  listExercises?: {
    __typename: 'ModelExerciseConnection';
    items: Array<{
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetWorkoutTemplateExerciseQueryVariables = {
  id: string;
};

export type GetWorkoutTemplateExerciseQuery = {
  getWorkoutTemplateExercise?: {
    __typename: 'WorkoutTemplateExercise';
    id: string;
    workoutTemplateId: string;
    exerciseId: string;
    workoutTemplate: {
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    exercise: {
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListWorkoutTemplateExercisesQueryVariables = {
  filter?: ModelWorkoutTemplateExerciseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListWorkoutTemplateExercisesQuery = {
  listWorkoutTemplateExercises?: {
    __typename: 'ModelWorkoutTemplateExerciseConnection';
    items: Array<{
      __typename: 'WorkoutTemplateExercise';
      id: string;
      workoutTemplateId: string;
      exerciseId: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type WorkoutTemplateExercisesByWorkoutTemplateIdQueryVariables = {
  workoutTemplateId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelWorkoutTemplateExerciseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type WorkoutTemplateExercisesByWorkoutTemplateIdQuery = {
  workoutTemplateExercisesByWorkoutTemplateId?: {
    __typename: 'ModelWorkoutTemplateExerciseConnection';
    items: Array<{
      __typename: 'WorkoutTemplateExercise';
      id: string;
      workoutTemplateId: string;
      exerciseId: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type WorkoutTemplateExercisesByExerciseIdQueryVariables = {
  exerciseId: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelWorkoutTemplateExerciseFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type WorkoutTemplateExercisesByExerciseIdQuery = {
  workoutTemplateExercisesByExerciseId?: {
    __typename: 'ModelWorkoutTemplateExerciseConnection';
    items: Array<{
      __typename: 'WorkoutTemplateExercise';
      id: string;
      workoutTemplateId: string;
      exerciseId: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateProgressiveHabitSubscriptionVariables = {
  filter?: ModelSubscriptionProgressiveHabitFilterInput | null;
  owner?: string | null;
};

export type OnCreateProgressiveHabitSubscription = {
  onCreateProgressiveHabit?: {
    __typename: 'ProgressiveHabit';
    id: string;
    name: string;
    type: HabitType;
    goal: number;
    unit: string;
    currentProgress?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateProgressiveHabitSubscriptionVariables = {
  filter?: ModelSubscriptionProgressiveHabitFilterInput | null;
  owner?: string | null;
};

export type OnUpdateProgressiveHabitSubscription = {
  onUpdateProgressiveHabit?: {
    __typename: 'ProgressiveHabit';
    id: string;
    name: string;
    type: HabitType;
    goal: number;
    unit: string;
    currentProgress?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteProgressiveHabitSubscriptionVariables = {
  filter?: ModelSubscriptionProgressiveHabitFilterInput | null;
  owner?: string | null;
};

export type OnDeleteProgressiveHabitSubscription = {
  onDeleteProgressiveHabit?: {
    __typename: 'ProgressiveHabit';
    id: string;
    name: string;
    type: HabitType;
    goal: number;
    unit: string;
    currentProgress?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateActivityHabitSubscriptionVariables = {
  filter?: ModelSubscriptionActivityHabitFilterInput | null;
  owner?: string | null;
};

export type OnCreateActivityHabitSubscription = {
  onCreateActivityHabit?: {
    __typename: 'ActivityHabit';
    id: string;
    name: string;
    type: HabitType;
    sessionsPerWeek: number;
    completedSessions?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateActivityHabitSubscriptionVariables = {
  filter?: ModelSubscriptionActivityHabitFilterInput | null;
  owner?: string | null;
};

export type OnUpdateActivityHabitSubscription = {
  onUpdateActivityHabit?: {
    __typename: 'ActivityHabit';
    id: string;
    name: string;
    type: HabitType;
    sessionsPerWeek: number;
    completedSessions?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteActivityHabitSubscriptionVariables = {
  filter?: ModelSubscriptionActivityHabitFilterInput | null;
  owner?: string | null;
};

export type OnDeleteActivityHabitSubscription = {
  onDeleteActivityHabit?: {
    __typename: 'ActivityHabit';
    id: string;
    name: string;
    type: HabitType;
    sessionsPerWeek: number;
    completedSessions?: number | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateGeneralHabitSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralHabitFilterInput | null;
  owner?: string | null;
};

export type OnCreateGeneralHabitSubscription = {
  onCreateGeneralHabit?: {
    __typename: 'GeneralHabit';
    id: string;
    name: string;
    type: HabitType;
    completed?: boolean | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateGeneralHabitSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralHabitFilterInput | null;
  owner?: string | null;
};

export type OnUpdateGeneralHabitSubscription = {
  onUpdateGeneralHabit?: {
    __typename: 'GeneralHabit';
    id: string;
    name: string;
    type: HabitType;
    completed?: boolean | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteGeneralHabitSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralHabitFilterInput | null;
  owner?: string | null;
};

export type OnDeleteGeneralHabitSubscription = {
  onDeleteGeneralHabit?: {
    __typename: 'GeneralHabit';
    id: string;
    name: string;
    type: HabitType;
    completed?: boolean | null;
    lastCompleted?: string | null;
    streak?: number | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateWorkoutTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTemplateFilterInput | null;
  owner?: string | null;
};

export type OnCreateWorkoutTemplateSubscription = {
  onCreateWorkoutTemplate?: {
    __typename: 'WorkoutTemplate';
    id: string;
    name: string;
    exercises?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateWorkoutTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTemplateFilterInput | null;
  owner?: string | null;
};

export type OnUpdateWorkoutTemplateSubscription = {
  onUpdateWorkoutTemplate?: {
    __typename: 'WorkoutTemplate';
    id: string;
    name: string;
    exercises?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteWorkoutTemplateSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTemplateFilterInput | null;
  owner?: string | null;
};

export type OnDeleteWorkoutTemplateSubscription = {
  onDeleteWorkoutTemplate?: {
    __typename: 'WorkoutTemplate';
    id: string;
    name: string;
    exercises?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null;
  owner?: string | null;
};

export type OnCreateExerciseSubscription = {
  onCreateExercise?: {
    __typename: 'Exercise';
    id: string;
    name: string;
    primaryTarget: string;
    equipment: string;
    gifUrl: string;
    instructions: Array<string | null>;
    templates?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null;
  owner?: string | null;
};

export type OnUpdateExerciseSubscription = {
  onUpdateExercise?: {
    __typename: 'Exercise';
    id: string;
    name: string;
    primaryTarget: string;
    equipment: string;
    gifUrl: string;
    instructions: Array<string | null>;
    templates?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionExerciseFilterInput | null;
  owner?: string | null;
};

export type OnDeleteExerciseSubscription = {
  onDeleteExercise?: {
    __typename: 'Exercise';
    id: string;
    name: string;
    primaryTarget: string;
    equipment: string;
    gifUrl: string;
    instructions: Array<string | null>;
    templates?: {
      __typename: 'ModelWorkoutTemplateExerciseConnection';
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateWorkoutTemplateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTemplateExerciseFilterInput | null;
  owner?: string | null;
};

export type OnCreateWorkoutTemplateExerciseSubscription = {
  onCreateWorkoutTemplateExercise?: {
    __typename: 'WorkoutTemplateExercise';
    id: string;
    workoutTemplateId: string;
    exerciseId: string;
    workoutTemplate: {
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    exercise: {
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateWorkoutTemplateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTemplateExerciseFilterInput | null;
  owner?: string | null;
};

export type OnUpdateWorkoutTemplateExerciseSubscription = {
  onUpdateWorkoutTemplateExercise?: {
    __typename: 'WorkoutTemplateExercise';
    id: string;
    workoutTemplateId: string;
    exerciseId: string;
    workoutTemplate: {
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    exercise: {
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteWorkoutTemplateExerciseSubscriptionVariables = {
  filter?: ModelSubscriptionWorkoutTemplateExerciseFilterInput | null;
  owner?: string | null;
};

export type OnDeleteWorkoutTemplateExerciseSubscription = {
  onDeleteWorkoutTemplateExercise?: {
    __typename: 'WorkoutTemplateExercise';
    id: string;
    workoutTemplateId: string;
    exerciseId: string;
    workoutTemplate: {
      __typename: 'WorkoutTemplate';
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    exercise: {
      __typename: 'Exercise';
      id: string;
      name: string;
      primaryTarget: string;
      equipment: string;
      gifUrl: string;
      instructions: Array<string | null>;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
