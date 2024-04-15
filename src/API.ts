/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHabitInput = {
  id?: string | null;
  name: string;
  type: HabitType;
  habitDetailsId?: string | null;
};

export enum HabitType {
  PROGRESSIVE = 'PROGRESSIVE',
  ACTIVITY = 'ACTIVITY',
  GENERAL = 'GENERAL',
}

export type ModelHabitConditionInput = {
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  and?: Array<ModelHabitConditionInput | null> | null;
  or?: Array<ModelHabitConditionInput | null> | null;
  not?: ModelHabitConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  habitDetailsId?: ModelIDInput | null;
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

export type Habit = {
  __typename: 'Habit';
  id: string;
  name: string;
  type: HabitType;
  details?: HabitDetails | null;
  createdAt: string;
  updatedAt: string;
  habitDetailsId?: string | null;
  owner?: string | null;
};

export type HabitDetails = {
  __typename: 'HabitDetails';
  id: string;
  goal?: number | null;
  unit?: string | null;
  currentProgress?: number | null;
  sessionsPerWeek?: number | null;
  completedSessions?: number | null;
  completed?: boolean | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateHabitInput = {
  id: string;
  name?: string | null;
  type?: HabitType | null;
  habitDetailsId?: string | null;
};

export type DeleteHabitInput = {
  id: string;
};

export type CreateHabitDetailsInput = {
  id?: string | null;
  goal?: number | null;
  unit?: string | null;
  currentProgress?: number | null;
  sessionsPerWeek?: number | null;
  completedSessions?: number | null;
  completed?: boolean | null;
};

export type ModelHabitDetailsConditionInput = {
  goal?: ModelFloatInput | null;
  unit?: ModelStringInput | null;
  currentProgress?: ModelFloatInput | null;
  sessionsPerWeek?: ModelIntInput | null;
  completedSessions?: ModelIntInput | null;
  completed?: ModelBooleanInput | null;
  and?: Array<ModelHabitDetailsConditionInput | null> | null;
  or?: Array<ModelHabitDetailsConditionInput | null> | null;
  not?: ModelHabitDetailsConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
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

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateHabitDetailsInput = {
  id: string;
  goal?: number | null;
  unit?: string | null;
  currentProgress?: number | null;
  sessionsPerWeek?: number | null;
  completedSessions?: number | null;
  completed?: boolean | null;
};

export type DeleteHabitDetailsInput = {
  id: string;
};

export type ModelHabitFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  type?: ModelHabitTypeInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelHabitFilterInput | null> | null;
  or?: Array<ModelHabitFilterInput | null> | null;
  not?: ModelHabitFilterInput | null;
  habitDetailsId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelHabitConnection = {
  __typename: 'ModelHabitConnection';
  items: Array<Habit | null>;
  nextToken?: string | null;
};

export type ModelHabitDetailsFilterInput = {
  id?: ModelIDInput | null;
  goal?: ModelFloatInput | null;
  unit?: ModelStringInput | null;
  currentProgress?: ModelFloatInput | null;
  sessionsPerWeek?: ModelIntInput | null;
  completedSessions?: ModelIntInput | null;
  completed?: ModelBooleanInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelHabitDetailsFilterInput | null> | null;
  or?: Array<ModelHabitDetailsFilterInput | null> | null;
  not?: ModelHabitDetailsFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelHabitDetailsConnection = {
  __typename: 'ModelHabitDetailsConnection';
  items: Array<HabitDetails | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  name?: ModelSubscriptionStringInput | null;
  type?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHabitFilterInput | null> | null;
  or?: Array<ModelSubscriptionHabitFilterInput | null> | null;
  habitDetailsId?: ModelSubscriptionIDInput | null;
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

export type ModelSubscriptionHabitDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  goal?: ModelSubscriptionFloatInput | null;
  unit?: ModelSubscriptionStringInput | null;
  currentProgress?: ModelSubscriptionFloatInput | null;
  sessionsPerWeek?: ModelSubscriptionIntInput | null;
  completedSessions?: ModelSubscriptionIntInput | null;
  completed?: ModelSubscriptionBooleanInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionHabitDetailsFilterInput | null> | null;
  or?: Array<ModelSubscriptionHabitDetailsFilterInput | null> | null;
  owner?: ModelStringInput | null;
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

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateHabitMutationVariables = {
  input: CreateHabitInput;
  condition?: ModelHabitConditionInput | null;
};

export type CreateHabitMutation = {
  createHabit?: {
    __typename: 'Habit';
    id: string;
    name: string;
    type: HabitType;
    details?: {
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    habitDetailsId?: string | null;
    owner?: string | null;
  } | null;
};

export type UpdateHabitMutationVariables = {
  input: UpdateHabitInput;
  condition?: ModelHabitConditionInput | null;
};

export type UpdateHabitMutation = {
  updateHabit?: {
    __typename: 'Habit';
    id: string;
    name: string;
    type: HabitType;
    details?: {
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    habitDetailsId?: string | null;
    owner?: string | null;
  } | null;
};

export type DeleteHabitMutationVariables = {
  input: DeleteHabitInput;
  condition?: ModelHabitConditionInput | null;
};

export type DeleteHabitMutation = {
  deleteHabit?: {
    __typename: 'Habit';
    id: string;
    name: string;
    type: HabitType;
    details?: {
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    habitDetailsId?: string | null;
    owner?: string | null;
  } | null;
};

export type CreateHabitDetailsMutationVariables = {
  input: CreateHabitDetailsInput;
  condition?: ModelHabitDetailsConditionInput | null;
};

export type CreateHabitDetailsMutation = {
  createHabitDetails?: {
    __typename: 'HabitDetails';
    id: string;
    goal?: number | null;
    unit?: string | null;
    currentProgress?: number | null;
    sessionsPerWeek?: number | null;
    completedSessions?: number | null;
    completed?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateHabitDetailsMutationVariables = {
  input: UpdateHabitDetailsInput;
  condition?: ModelHabitDetailsConditionInput | null;
};

export type UpdateHabitDetailsMutation = {
  updateHabitDetails?: {
    __typename: 'HabitDetails';
    id: string;
    goal?: number | null;
    unit?: string | null;
    currentProgress?: number | null;
    sessionsPerWeek?: number | null;
    completedSessions?: number | null;
    completed?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteHabitDetailsMutationVariables = {
  input: DeleteHabitDetailsInput;
  condition?: ModelHabitDetailsConditionInput | null;
};

export type DeleteHabitDetailsMutation = {
  deleteHabitDetails?: {
    __typename: 'HabitDetails';
    id: string;
    goal?: number | null;
    unit?: string | null;
    currentProgress?: number | null;
    sessionsPerWeek?: number | null;
    completedSessions?: number | null;
    completed?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetHabitQueryVariables = {
  id: string;
};

export type GetHabitQuery = {
  getHabit?: {
    __typename: 'Habit';
    id: string;
    name: string;
    type: HabitType;
    details?: {
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    habitDetailsId?: string | null;
    owner?: string | null;
  } | null;
};

export type ListHabitsQueryVariables = {
  filter?: ModelHabitFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListHabitsQuery = {
  listHabits?: {
    __typename: 'ModelHabitConnection';
    items: Array<{
      __typename: 'Habit';
      id: string;
      name: string;
      type: HabitType;
      createdAt: string;
      updatedAt: string;
      habitDetailsId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetHabitDetailsQueryVariables = {
  id: string;
};

export type GetHabitDetailsQuery = {
  getHabitDetails?: {
    __typename: 'HabitDetails';
    id: string;
    goal?: number | null;
    unit?: string | null;
    currentProgress?: number | null;
    sessionsPerWeek?: number | null;
    completedSessions?: number | null;
    completed?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListHabitDetailsQueryVariables = {
  filter?: ModelHabitDetailsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListHabitDetailsQuery = {
  listHabitDetails?: {
    __typename: 'ModelHabitDetailsConnection';
    items: Array<{
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null;
  owner?: string | null;
};

export type OnCreateHabitSubscription = {
  onCreateHabit?: {
    __typename: 'Habit';
    id: string;
    name: string;
    type: HabitType;
    details?: {
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    habitDetailsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnUpdateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null;
  owner?: string | null;
};

export type OnUpdateHabitSubscription = {
  onUpdateHabit?: {
    __typename: 'Habit';
    id: string;
    name: string;
    type: HabitType;
    details?: {
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    habitDetailsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnDeleteHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null;
  owner?: string | null;
};

export type OnDeleteHabitSubscription = {
  onDeleteHabit?: {
    __typename: 'Habit';
    id: string;
    name: string;
    type: HabitType;
    details?: {
      __typename: 'HabitDetails';
      id: string;
      goal?: number | null;
      unit?: string | null;
      currentProgress?: number | null;
      sessionsPerWeek?: number | null;
      completedSessions?: number | null;
      completed?: boolean | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    habitDetailsId?: string | null;
    owner?: string | null;
  } | null;
};

export type OnCreateHabitDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionHabitDetailsFilterInput | null;
  owner?: string | null;
};

export type OnCreateHabitDetailsSubscription = {
  onCreateHabitDetails?: {
    __typename: 'HabitDetails';
    id: string;
    goal?: number | null;
    unit?: string | null;
    currentProgress?: number | null;
    sessionsPerWeek?: number | null;
    completedSessions?: number | null;
    completed?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateHabitDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionHabitDetailsFilterInput | null;
  owner?: string | null;
};

export type OnUpdateHabitDetailsSubscription = {
  onUpdateHabitDetails?: {
    __typename: 'HabitDetails';
    id: string;
    goal?: number | null;
    unit?: string | null;
    currentProgress?: number | null;
    sessionsPerWeek?: number | null;
    completedSessions?: number | null;
    completed?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteHabitDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionHabitDetailsFilterInput | null;
  owner?: string | null;
};

export type OnDeleteHabitDetailsSubscription = {
  onDeleteHabitDetails?: {
    __typename: 'HabitDetails';
    id: string;
    goal?: number | null;
    unit?: string | null;
    currentProgress?: number | null;
    sessionsPerWeek?: number | null;
    completedSessions?: number | null;
    completed?: boolean | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
