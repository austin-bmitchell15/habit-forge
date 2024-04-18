/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createProgressiveHabit = /* GraphQL */ `mutation CreateProgressiveHabit(
  $input: CreateProgressiveHabitInput!
  $condition: ModelProgressiveHabitConditionInput
) {
  createProgressiveHabit(input: $input, condition: $condition) {
    id
    name
    type
    goal
    unit
    currentProgress
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgressiveHabitMutationVariables,
  APITypes.CreateProgressiveHabitMutation
>;
export const updateProgressiveHabit = /* GraphQL */ `mutation UpdateProgressiveHabit(
  $input: UpdateProgressiveHabitInput!
  $condition: ModelProgressiveHabitConditionInput
) {
  updateProgressiveHabit(input: $input, condition: $condition) {
    id
    name
    type
    goal
    unit
    currentProgress
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgressiveHabitMutationVariables,
  APITypes.UpdateProgressiveHabitMutation
>;
export const deleteProgressiveHabit = /* GraphQL */ `mutation DeleteProgressiveHabit(
  $input: DeleteProgressiveHabitInput!
  $condition: ModelProgressiveHabitConditionInput
) {
  deleteProgressiveHabit(input: $input, condition: $condition) {
    id
    name
    type
    goal
    unit
    currentProgress
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgressiveHabitMutationVariables,
  APITypes.DeleteProgressiveHabitMutation
>;
export const createActivityHabit = /* GraphQL */ `mutation CreateActivityHabit(
  $input: CreateActivityHabitInput!
  $condition: ModelActivityHabitConditionInput
) {
  createActivityHabit(input: $input, condition: $condition) {
    id
    name
    type
    sessionsPerWeek
    completedSessions
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActivityHabitMutationVariables,
  APITypes.CreateActivityHabitMutation
>;
export const updateActivityHabit = /* GraphQL */ `mutation UpdateActivityHabit(
  $input: UpdateActivityHabitInput!
  $condition: ModelActivityHabitConditionInput
) {
  updateActivityHabit(input: $input, condition: $condition) {
    id
    name
    type
    sessionsPerWeek
    completedSessions
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActivityHabitMutationVariables,
  APITypes.UpdateActivityHabitMutation
>;
export const deleteActivityHabit = /* GraphQL */ `mutation DeleteActivityHabit(
  $input: DeleteActivityHabitInput!
  $condition: ModelActivityHabitConditionInput
) {
  deleteActivityHabit(input: $input, condition: $condition) {
    id
    name
    type
    sessionsPerWeek
    completedSessions
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActivityHabitMutationVariables,
  APITypes.DeleteActivityHabitMutation
>;
export const createGeneralHabit = /* GraphQL */ `mutation CreateGeneralHabit(
  $input: CreateGeneralHabitInput!
  $condition: ModelGeneralHabitConditionInput
) {
  createGeneralHabit(input: $input, condition: $condition) {
    id
    name
    type
    completed
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGeneralHabitMutationVariables,
  APITypes.CreateGeneralHabitMutation
>;
export const updateGeneralHabit = /* GraphQL */ `mutation UpdateGeneralHabit(
  $input: UpdateGeneralHabitInput!
  $condition: ModelGeneralHabitConditionInput
) {
  updateGeneralHabit(input: $input, condition: $condition) {
    id
    name
    type
    completed
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGeneralHabitMutationVariables,
  APITypes.UpdateGeneralHabitMutation
>;
export const deleteGeneralHabit = /* GraphQL */ `mutation DeleteGeneralHabit(
  $input: DeleteGeneralHabitInput!
  $condition: ModelGeneralHabitConditionInput
) {
  deleteGeneralHabit(input: $input, condition: $condition) {
    id
    name
    type
    completed
    lastCompleted
    streak
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGeneralHabitMutationVariables,
  APITypes.DeleteGeneralHabitMutation
>;
