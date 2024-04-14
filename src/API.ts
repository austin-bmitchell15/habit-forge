/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateHabitInput = {
  id?: string | null,
  name: string,
  type: HabitType,
  details?: HabitDetailsInput | null,
};

export enum HabitType {
  PROGRESSIVE = "PROGRESSIVE",
  ACTIVITY = "ACTIVITY",
  GENERAL = "GENERAL",
}


export type HabitDetailsInput = {
  progressiveDetails?: ProgressiveDetailsInput | null,
  activityDetails?: ActivityDetailsInput | null,
  generalDetails?: GeneralDetailsInput | null,
};

export type ProgressiveDetailsInput = {
  goal?: number | null,
  unit?: string | null,
  currentProgress?: number | null,
};

export type ActivityDetailsInput = {
  sessionsPerWeek?: number | null,
  completedSessions?: number | null,
};

export type GeneralDetailsInput = {
  completed?: boolean | null,
};

export type ModelHabitConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelHabitTypeInput | null,
  and?: Array< ModelHabitConditionInput | null > | null,
  or?: Array< ModelHabitConditionInput | null > | null,
  not?: ModelHabitConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelHabitTypeInput = {
  eq?: HabitType | null,
  ne?: HabitType | null,
};

export type Habit = {
  __typename: "Habit",
  id: string,
  name: string,
  type: HabitType,
  details?: HabitDetails | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type HabitDetails = {
  __typename: "HabitDetails",
  id: string,
};

export type ProgressiveDetails = {
  __typename: "ProgressiveDetails",
  id: string,
  goal: number,
  unit: string,
  currentProgress?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ActivityDetails = {
  __typename: "ActivityDetails",
  id: string,
  sessionsPerWeek: number,
  completedSessions?: number | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type GeneralDetails = {
  __typename: "GeneralDetails",
  id: string,
  completed?: boolean | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateHabitInput = {
  id: string,
  name?: string | null,
  type?: HabitType | null,
  details?: HabitDetailsInput | null,
};

export type DeleteHabitInput = {
  id: string,
};

export type CreateProgressiveDetailsInput = {
  id?: string | null,
  goal: number,
  unit: string,
  currentProgress?: number | null,
};

export type ModelProgressiveDetailsConditionInput = {
  goal?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  currentProgress?: ModelFloatInput | null,
  and?: Array< ModelProgressiveDetailsConditionInput | null > | null,
  or?: Array< ModelProgressiveDetailsConditionInput | null > | null,
  not?: ModelProgressiveDetailsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateProgressiveDetailsInput = {
  id: string,
  goal?: number | null,
  unit?: string | null,
  currentProgress?: number | null,
};

export type DeleteProgressiveDetailsInput = {
  id: string,
};

export type CreateActivityDetailsInput = {
  id?: string | null,
  sessionsPerWeek: number,
  completedSessions?: number | null,
};

export type ModelActivityDetailsConditionInput = {
  sessionsPerWeek?: ModelIntInput | null,
  completedSessions?: ModelIntInput | null,
  and?: Array< ModelActivityDetailsConditionInput | null > | null,
  or?: Array< ModelActivityDetailsConditionInput | null > | null,
  not?: ModelActivityDetailsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateActivityDetailsInput = {
  id: string,
  sessionsPerWeek?: number | null,
  completedSessions?: number | null,
};

export type DeleteActivityDetailsInput = {
  id: string,
};

export type CreateGeneralDetailsInput = {
  id?: string | null,
  completed?: boolean | null,
};

export type ModelGeneralDetailsConditionInput = {
  completed?: ModelBooleanInput | null,
  and?: Array< ModelGeneralDetailsConditionInput | null > | null,
  or?: Array< ModelGeneralDetailsConditionInput | null > | null,
  not?: ModelGeneralDetailsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGeneralDetailsInput = {
  id: string,
  completed?: boolean | null,
};

export type DeleteGeneralDetailsInput = {
  id: string,
};

export type ModelHabitFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelHabitTypeInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelHabitFilterInput | null > | null,
  or?: Array< ModelHabitFilterInput | null > | null,
  not?: ModelHabitFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelHabitConnection = {
  __typename: "ModelHabitConnection",
  items:  Array<Habit | null >,
  nextToken?: string | null,
};

export type ModelProgressiveDetailsFilterInput = {
  id?: ModelIDInput | null,
  goal?: ModelFloatInput | null,
  unit?: ModelStringInput | null,
  currentProgress?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelProgressiveDetailsFilterInput | null > | null,
  or?: Array< ModelProgressiveDetailsFilterInput | null > | null,
  not?: ModelProgressiveDetailsFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelProgressiveDetailsConnection = {
  __typename: "ModelProgressiveDetailsConnection",
  items:  Array<ProgressiveDetails | null >,
  nextToken?: string | null,
};

export type ModelActivityDetailsFilterInput = {
  id?: ModelIDInput | null,
  sessionsPerWeek?: ModelIntInput | null,
  completedSessions?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelActivityDetailsFilterInput | null > | null,
  or?: Array< ModelActivityDetailsFilterInput | null > | null,
  not?: ModelActivityDetailsFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelActivityDetailsConnection = {
  __typename: "ModelActivityDetailsConnection",
  items:  Array<ActivityDetails | null >,
  nextToken?: string | null,
};

export type ModelGeneralDetailsFilterInput = {
  id?: ModelIDInput | null,
  completed?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelGeneralDetailsFilterInput | null > | null,
  or?: Array< ModelGeneralDetailsFilterInput | null > | null,
  not?: ModelGeneralDetailsFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelGeneralDetailsConnection = {
  __typename: "ModelGeneralDetailsConnection",
  items:  Array<GeneralDetails | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionHabitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionHabitFilterInput | null > | null,
  or?: Array< ModelSubscriptionHabitFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionProgressiveDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  goal?: ModelSubscriptionFloatInput | null,
  unit?: ModelSubscriptionStringInput | null,
  currentProgress?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProgressiveDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionProgressiveDetailsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionActivityDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  sessionsPerWeek?: ModelSubscriptionIntInput | null,
  completedSessions?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionActivityDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionActivityDetailsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionGeneralDetailsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGeneralDetailsFilterInput | null > | null,
  or?: Array< ModelSubscriptionGeneralDetailsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateHabitMutationVariables = {
  input: CreateHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type CreateHabitMutation = {
  createHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    type: HabitType,
    details: ( {
        __typename: "ProgressiveDetails",
        id: string,
        goal: number,
        unit: string,
        currentProgress?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "ActivityDetails",
        id: string,
        sessionsPerWeek: number,
        completedSessions?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "GeneralDetails",
        id: string,
        completed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateHabitMutationVariables = {
  input: UpdateHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type UpdateHabitMutation = {
  updateHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    type: HabitType,
    details: ( {
        __typename: "ProgressiveDetails",
        id: string,
        goal: number,
        unit: string,
        currentProgress?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "ActivityDetails",
        id: string,
        sessionsPerWeek: number,
        completedSessions?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "GeneralDetails",
        id: string,
        completed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteHabitMutationVariables = {
  input: DeleteHabitInput,
  condition?: ModelHabitConditionInput | null,
};

export type DeleteHabitMutation = {
  deleteHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    type: HabitType,
    details: ( {
        __typename: "ProgressiveDetails",
        id: string,
        goal: number,
        unit: string,
        currentProgress?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "ActivityDetails",
        id: string,
        sessionsPerWeek: number,
        completedSessions?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "GeneralDetails",
        id: string,
        completed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateProgressiveDetailsMutationVariables = {
  input: CreateProgressiveDetailsInput,
  condition?: ModelProgressiveDetailsConditionInput | null,
};

export type CreateProgressiveDetailsMutation = {
  createProgressiveDetails?:  {
    __typename: "ProgressiveDetails",
    id: string,
    goal: number,
    unit: string,
    currentProgress?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateProgressiveDetailsMutationVariables = {
  input: UpdateProgressiveDetailsInput,
  condition?: ModelProgressiveDetailsConditionInput | null,
};

export type UpdateProgressiveDetailsMutation = {
  updateProgressiveDetails?:  {
    __typename: "ProgressiveDetails",
    id: string,
    goal: number,
    unit: string,
    currentProgress?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteProgressiveDetailsMutationVariables = {
  input: DeleteProgressiveDetailsInput,
  condition?: ModelProgressiveDetailsConditionInput | null,
};

export type DeleteProgressiveDetailsMutation = {
  deleteProgressiveDetails?:  {
    __typename: "ProgressiveDetails",
    id: string,
    goal: number,
    unit: string,
    currentProgress?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateActivityDetailsMutationVariables = {
  input: CreateActivityDetailsInput,
  condition?: ModelActivityDetailsConditionInput | null,
};

export type CreateActivityDetailsMutation = {
  createActivityDetails?:  {
    __typename: "ActivityDetails",
    id: string,
    sessionsPerWeek: number,
    completedSessions?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateActivityDetailsMutationVariables = {
  input: UpdateActivityDetailsInput,
  condition?: ModelActivityDetailsConditionInput | null,
};

export type UpdateActivityDetailsMutation = {
  updateActivityDetails?:  {
    __typename: "ActivityDetails",
    id: string,
    sessionsPerWeek: number,
    completedSessions?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteActivityDetailsMutationVariables = {
  input: DeleteActivityDetailsInput,
  condition?: ModelActivityDetailsConditionInput | null,
};

export type DeleteActivityDetailsMutation = {
  deleteActivityDetails?:  {
    __typename: "ActivityDetails",
    id: string,
    sessionsPerWeek: number,
    completedSessions?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateGeneralDetailsMutationVariables = {
  input: CreateGeneralDetailsInput,
  condition?: ModelGeneralDetailsConditionInput | null,
};

export type CreateGeneralDetailsMutation = {
  createGeneralDetails?:  {
    __typename: "GeneralDetails",
    id: string,
    completed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateGeneralDetailsMutationVariables = {
  input: UpdateGeneralDetailsInput,
  condition?: ModelGeneralDetailsConditionInput | null,
};

export type UpdateGeneralDetailsMutation = {
  updateGeneralDetails?:  {
    __typename: "GeneralDetails",
    id: string,
    completed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteGeneralDetailsMutationVariables = {
  input: DeleteGeneralDetailsInput,
  condition?: ModelGeneralDetailsConditionInput | null,
};

export type DeleteGeneralDetailsMutation = {
  deleteGeneralDetails?:  {
    __typename: "GeneralDetails",
    id: string,
    completed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetHabitQueryVariables = {
  id: string,
};

export type GetHabitQuery = {
  getHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    type: HabitType,
    details: ( {
        __typename: "ProgressiveDetails",
        id: string,
        goal: number,
        unit: string,
        currentProgress?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "ActivityDetails",
        id: string,
        sessionsPerWeek: number,
        completedSessions?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "GeneralDetails",
        id: string,
        completed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListHabitsQueryVariables = {
  filter?: ModelHabitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHabitsQuery = {
  listHabits?:  {
    __typename: "ModelHabitConnection",
    items:  Array< {
      __typename: "Habit",
      id: string,
      name: string,
      type: HabitType,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetProgressiveDetailsQueryVariables = {
  id: string,
};

export type GetProgressiveDetailsQuery = {
  getProgressiveDetails?:  {
    __typename: "ProgressiveDetails",
    id: string,
    goal: number,
    unit: string,
    currentProgress?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListProgressiveDetailsQueryVariables = {
  filter?: ModelProgressiveDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgressiveDetailsQuery = {
  listProgressiveDetails?:  {
    __typename: "ModelProgressiveDetailsConnection",
    items:  Array< {
      __typename: "ProgressiveDetails",
      id: string,
      goal: number,
      unit: string,
      currentProgress?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetActivityDetailsQueryVariables = {
  id: string,
};

export type GetActivityDetailsQuery = {
  getActivityDetails?:  {
    __typename: "ActivityDetails",
    id: string,
    sessionsPerWeek: number,
    completedSessions?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListActivityDetailsQueryVariables = {
  filter?: ModelActivityDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivityDetailsQuery = {
  listActivityDetails?:  {
    __typename: "ModelActivityDetailsConnection",
    items:  Array< {
      __typename: "ActivityDetails",
      id: string,
      sessionsPerWeek: number,
      completedSessions?: number | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetGeneralDetailsQueryVariables = {
  id: string,
};

export type GetGeneralDetailsQuery = {
  getGeneralDetails?:  {
    __typename: "GeneralDetails",
    id: string,
    completed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListGeneralDetailsQueryVariables = {
  filter?: ModelGeneralDetailsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGeneralDetailsQuery = {
  listGeneralDetails?:  {
    __typename: "ModelGeneralDetailsConnection",
    items:  Array< {
      __typename: "GeneralDetails",
      id: string,
      completed?: boolean | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
  owner?: string | null,
};

export type OnCreateHabitSubscription = {
  onCreateHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    type: HabitType,
    details: ( {
        __typename: "ProgressiveDetails",
        id: string,
        goal: number,
        unit: string,
        currentProgress?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "ActivityDetails",
        id: string,
        sessionsPerWeek: number,
        completedSessions?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "GeneralDetails",
        id: string,
        completed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
  owner?: string | null,
};

export type OnUpdateHabitSubscription = {
  onUpdateHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    type: HabitType,
    details: ( {
        __typename: "ProgressiveDetails",
        id: string,
        goal: number,
        unit: string,
        currentProgress?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "ActivityDetails",
        id: string,
        sessionsPerWeek: number,
        completedSessions?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "GeneralDetails",
        id: string,
        completed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteHabitSubscriptionVariables = {
  filter?: ModelSubscriptionHabitFilterInput | null,
  owner?: string | null,
};

export type OnDeleteHabitSubscription = {
  onDeleteHabit?:  {
    __typename: "Habit",
    id: string,
    name: string,
    type: HabitType,
    details: ( {
        __typename: "ProgressiveDetails",
        id: string,
        goal: number,
        unit: string,
        currentProgress?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "ActivityDetails",
        id: string,
        sessionsPerWeek: number,
        completedSessions?: number | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | {
        __typename: "GeneralDetails",
        id: string,
        completed?: boolean | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      }
    ) | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateProgressiveDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionProgressiveDetailsFilterInput | null,
  owner?: string | null,
};

export type OnCreateProgressiveDetailsSubscription = {
  onCreateProgressiveDetails?:  {
    __typename: "ProgressiveDetails",
    id: string,
    goal: number,
    unit: string,
    currentProgress?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateProgressiveDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionProgressiveDetailsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProgressiveDetailsSubscription = {
  onUpdateProgressiveDetails?:  {
    __typename: "ProgressiveDetails",
    id: string,
    goal: number,
    unit: string,
    currentProgress?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteProgressiveDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionProgressiveDetailsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProgressiveDetailsSubscription = {
  onDeleteProgressiveDetails?:  {
    __typename: "ProgressiveDetails",
    id: string,
    goal: number,
    unit: string,
    currentProgress?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateActivityDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionActivityDetailsFilterInput | null,
  owner?: string | null,
};

export type OnCreateActivityDetailsSubscription = {
  onCreateActivityDetails?:  {
    __typename: "ActivityDetails",
    id: string,
    sessionsPerWeek: number,
    completedSessions?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateActivityDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionActivityDetailsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateActivityDetailsSubscription = {
  onUpdateActivityDetails?:  {
    __typename: "ActivityDetails",
    id: string,
    sessionsPerWeek: number,
    completedSessions?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteActivityDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionActivityDetailsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteActivityDetailsSubscription = {
  onDeleteActivityDetails?:  {
    __typename: "ActivityDetails",
    id: string,
    sessionsPerWeek: number,
    completedSessions?: number | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateGeneralDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralDetailsFilterInput | null,
  owner?: string | null,
};

export type OnCreateGeneralDetailsSubscription = {
  onCreateGeneralDetails?:  {
    __typename: "GeneralDetails",
    id: string,
    completed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateGeneralDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralDetailsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGeneralDetailsSubscription = {
  onUpdateGeneralDetails?:  {
    __typename: "GeneralDetails",
    id: string,
    completed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteGeneralDetailsSubscriptionVariables = {
  filter?: ModelSubscriptionGeneralDetailsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGeneralDetailsSubscription = {
  onDeleteGeneralDetails?:  {
    __typename: "GeneralDetails",
    id: string,
    completed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
