/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
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

      ... on ProgressiveDetails {
        goal
        unit
        currentProgress
        createdAt
        updatedAt
        owner
      }
      ... on ActivityDetails {
        sessionsPerWeek
        completedSessions
        createdAt
        updatedAt
        owner
      }
      ... on GeneralDetails {
        completed
        createdAt
        updatedAt
        owner
      }
    }
    createdAt
    updatedAt
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

      ... on ProgressiveDetails {
        goal
        unit
        currentProgress
        createdAt
        updatedAt
        owner
      }
      ... on ActivityDetails {
        sessionsPerWeek
        completedSessions
        createdAt
        updatedAt
        owner
      }
      ... on GeneralDetails {
        completed
        createdAt
        updatedAt
        owner
      }
    }
    createdAt
    updatedAt
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

      ... on ProgressiveDetails {
        goal
        unit
        currentProgress
        createdAt
        updatedAt
        owner
      }
      ... on ActivityDetails {
        sessionsPerWeek
        completedSessions
        createdAt
        updatedAt
        owner
      }
      ... on GeneralDetails {
        completed
        createdAt
        updatedAt
        owner
      }
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteHabitMutationVariables,
  APITypes.DeleteHabitMutation
>;
export const createProgressiveDetails = /* GraphQL */ `mutation CreateProgressiveDetails(
  $input: CreateProgressiveDetailsInput!
  $condition: ModelProgressiveDetailsConditionInput
) {
  createProgressiveDetails(input: $input, condition: $condition) {
    id
    goal
    unit
    currentProgress
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProgressiveDetailsMutationVariables,
  APITypes.CreateProgressiveDetailsMutation
>;
export const updateProgressiveDetails = /* GraphQL */ `mutation UpdateProgressiveDetails(
  $input: UpdateProgressiveDetailsInput!
  $condition: ModelProgressiveDetailsConditionInput
) {
  updateProgressiveDetails(input: $input, condition: $condition) {
    id
    goal
    unit
    currentProgress
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProgressiveDetailsMutationVariables,
  APITypes.UpdateProgressiveDetailsMutation
>;
export const deleteProgressiveDetails = /* GraphQL */ `mutation DeleteProgressiveDetails(
  $input: DeleteProgressiveDetailsInput!
  $condition: ModelProgressiveDetailsConditionInput
) {
  deleteProgressiveDetails(input: $input, condition: $condition) {
    id
    goal
    unit
    currentProgress
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProgressiveDetailsMutationVariables,
  APITypes.DeleteProgressiveDetailsMutation
>;
export const createActivityDetails = /* GraphQL */ `mutation CreateActivityDetails(
  $input: CreateActivityDetailsInput!
  $condition: ModelActivityDetailsConditionInput
) {
  createActivityDetails(input: $input, condition: $condition) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActivityDetailsMutationVariables,
  APITypes.CreateActivityDetailsMutation
>;
export const updateActivityDetails = /* GraphQL */ `mutation UpdateActivityDetails(
  $input: UpdateActivityDetailsInput!
  $condition: ModelActivityDetailsConditionInput
) {
  updateActivityDetails(input: $input, condition: $condition) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActivityDetailsMutationVariables,
  APITypes.UpdateActivityDetailsMutation
>;
export const deleteActivityDetails = /* GraphQL */ `mutation DeleteActivityDetails(
  $input: DeleteActivityDetailsInput!
  $condition: ModelActivityDetailsConditionInput
) {
  deleteActivityDetails(input: $input, condition: $condition) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActivityDetailsMutationVariables,
  APITypes.DeleteActivityDetailsMutation
>;
export const createGeneralDetails = /* GraphQL */ `mutation CreateGeneralDetails(
  $input: CreateGeneralDetailsInput!
  $condition: ModelGeneralDetailsConditionInput
) {
  createGeneralDetails(input: $input, condition: $condition) {
    id
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGeneralDetailsMutationVariables,
  APITypes.CreateGeneralDetailsMutation
>;
export const updateGeneralDetails = /* GraphQL */ `mutation UpdateGeneralDetails(
  $input: UpdateGeneralDetailsInput!
  $condition: ModelGeneralDetailsConditionInput
) {
  updateGeneralDetails(input: $input, condition: $condition) {
    id
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGeneralDetailsMutationVariables,
  APITypes.UpdateGeneralDetailsMutation
>;
export const deleteGeneralDetails = /* GraphQL */ `mutation DeleteGeneralDetails(
  $input: DeleteGeneralDetailsInput!
  $condition: ModelGeneralDetailsConditionInput
) {
  deleteGeneralDetails(input: $input, condition: $condition) {
    id
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGeneralDetailsMutationVariables,
  APITypes.DeleteGeneralDetailsMutation
>;
