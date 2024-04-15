/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateHabit = /* GraphQL */ `subscription OnCreateHabit(
  $filter: ModelSubscriptionHabitFilterInput
  $owner: String
) {
  onCreateHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    details {
      id
      goal
      unit
      currentProgress
      sessionsPerWeek
      completedSessions
      completed
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    habitDetailsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateHabitSubscriptionVariables,
  APITypes.OnCreateHabitSubscription
>;
export const onUpdateHabit = /* GraphQL */ `subscription OnUpdateHabit(
  $filter: ModelSubscriptionHabitFilterInput
  $owner: String
) {
  onUpdateHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    details {
      id
      goal
      unit
      currentProgress
      sessionsPerWeek
      completedSessions
      completed
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    habitDetailsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateHabitSubscriptionVariables,
  APITypes.OnUpdateHabitSubscription
>;
export const onDeleteHabit = /* GraphQL */ `subscription OnDeleteHabit(
  $filter: ModelSubscriptionHabitFilterInput
  $owner: String
) {
  onDeleteHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    details {
      id
      goal
      unit
      currentProgress
      sessionsPerWeek
      completedSessions
      completed
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    habitDetailsId
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHabitSubscriptionVariables,
  APITypes.OnDeleteHabitSubscription
>;
export const onCreateHabitDetails =
  /* GraphQL */ `subscription OnCreateHabitDetails(
  $filter: ModelSubscriptionHabitDetailsFilterInput
  $owner: String
) {
  onCreateHabitDetails(filter: $filter, owner: $owner) {
    id
    goal
    unit
    currentProgress
    sessionsPerWeek
    completedSessions
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateHabitDetailsSubscriptionVariables,
    APITypes.OnCreateHabitDetailsSubscription
  >;
export const onUpdateHabitDetails =
  /* GraphQL */ `subscription OnUpdateHabitDetails(
  $filter: ModelSubscriptionHabitDetailsFilterInput
  $owner: String
) {
  onUpdateHabitDetails(filter: $filter, owner: $owner) {
    id
    goal
    unit
    currentProgress
    sessionsPerWeek
    completedSessions
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateHabitDetailsSubscriptionVariables,
    APITypes.OnUpdateHabitDetailsSubscription
  >;
export const onDeleteHabitDetails =
  /* GraphQL */ `subscription OnDeleteHabitDetails(
  $filter: ModelSubscriptionHabitDetailsFilterInput
  $owner: String
) {
  onDeleteHabitDetails(filter: $filter, owner: $owner) {
    id
    goal
    unit
    currentProgress
    sessionsPerWeek
    completedSessions
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteHabitDetailsSubscriptionVariables,
    APITypes.OnDeleteHabitDetailsSubscription
  >;
