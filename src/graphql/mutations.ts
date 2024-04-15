/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createHabit = /* GraphQL */ `mutation CreateHabit(
  $input: CreateHabitInput!
  $condition: ModelHabitConditionInput
) {
  createHabit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHabitMutationVariables,
  APITypes.CreateHabitMutation
>;
export const updateHabit = /* GraphQL */ `mutation UpdateHabit(
  $input: UpdateHabitInput!
  $condition: ModelHabitConditionInput
) {
  updateHabit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHabitMutationVariables,
  APITypes.UpdateHabitMutation
>;
export const deleteHabit = /* GraphQL */ `mutation DeleteHabit(
  $input: DeleteHabitInput!
  $condition: ModelHabitConditionInput
) {
  deleteHabit(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHabitMutationVariables,
  APITypes.DeleteHabitMutation
>;
export const createHabitDetails = /* GraphQL */ `mutation CreateHabitDetails(
  $input: CreateHabitDetailsInput!
  $condition: ModelHabitDetailsConditionInput
) {
  createHabitDetails(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateHabitDetailsMutationVariables,
  APITypes.CreateHabitDetailsMutation
>;
export const updateHabitDetails = /* GraphQL */ `mutation UpdateHabitDetails(
  $input: UpdateHabitDetailsInput!
  $condition: ModelHabitDetailsConditionInput
) {
  updateHabitDetails(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateHabitDetailsMutationVariables,
  APITypes.UpdateHabitDetailsMutation
>;
export const deleteHabitDetails = /* GraphQL */ `mutation DeleteHabitDetails(
  $input: DeleteHabitDetailsInput!
  $condition: ModelHabitDetailsConditionInput
) {
  deleteHabitDetails(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteHabitDetailsMutationVariables,
  APITypes.DeleteHabitDetailsMutation
>;
