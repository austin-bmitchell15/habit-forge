/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
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
      ... on ProgressiveDetails {
        id
        goal
        unit
        currentProgress
        createdAt
        updatedAt
      }
      ... on ActivityDetails {
        id
        sessionsPerWeek
        completedSessions
        createdAt
        updatedAt
      }
      ... on GeneralDetails {
        id
        completed
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
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
      ... on ProgressiveDetails {
        id
        goal
        unit
        currentProgress
        createdAt
        updatedAt
      }
      ... on ActivityDetails {
        id
        sessionsPerWeek
        completedSessions
        createdAt
        updatedAt
      }
      ... on GeneralDetails {
        id
        completed
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
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
      ... on ProgressiveDetails {
        id
        goal
        unit
        currentProgress
        createdAt
        updatedAt
      }
      ... on ActivityDetails {
        id
        sessionsPerWeek
        completedSessions
        createdAt
        updatedAt
      }
      ... on GeneralDetails {
        id
        completed
        createdAt
        updatedAt
      }
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteHabitSubscriptionVariables,
  APITypes.OnDeleteHabitSubscription
>;
export const onCreateProgressiveDetails = /* GraphQL */ `subscription OnCreateProgressiveDetails(
  $filter: ModelSubscriptionProgressiveDetailsFilterInput
) {
  onCreateProgressiveDetails(filter: $filter) {
    id
    goal
    unit
    currentProgress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProgressiveDetailsSubscriptionVariables,
  APITypes.OnCreateProgressiveDetailsSubscription
>;
export const onUpdateProgressiveDetails = /* GraphQL */ `subscription OnUpdateProgressiveDetails(
  $filter: ModelSubscriptionProgressiveDetailsFilterInput
) {
  onUpdateProgressiveDetails(filter: $filter) {
    id
    goal
    unit
    currentProgress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProgressiveDetailsSubscriptionVariables,
  APITypes.OnUpdateProgressiveDetailsSubscription
>;
export const onDeleteProgressiveDetails = /* GraphQL */ `subscription OnDeleteProgressiveDetails(
  $filter: ModelSubscriptionProgressiveDetailsFilterInput
) {
  onDeleteProgressiveDetails(filter: $filter) {
    id
    goal
    unit
    currentProgress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProgressiveDetailsSubscriptionVariables,
  APITypes.OnDeleteProgressiveDetailsSubscription
>;
export const onCreateActivityDetails = /* GraphQL */ `subscription OnCreateActivityDetails(
  $filter: ModelSubscriptionActivityDetailsFilterInput
) {
  onCreateActivityDetails(filter: $filter) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActivityDetailsSubscriptionVariables,
  APITypes.OnCreateActivityDetailsSubscription
>;
export const onUpdateActivityDetails = /* GraphQL */ `subscription OnUpdateActivityDetails(
  $filter: ModelSubscriptionActivityDetailsFilterInput
) {
  onUpdateActivityDetails(filter: $filter) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActivityDetailsSubscriptionVariables,
  APITypes.OnUpdateActivityDetailsSubscription
>;
export const onDeleteActivityDetails = /* GraphQL */ `subscription OnDeleteActivityDetails(
  $filter: ModelSubscriptionActivityDetailsFilterInput
) {
  onDeleteActivityDetails(filter: $filter) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActivityDetailsSubscriptionVariables,
  APITypes.OnDeleteActivityDetailsSubscription
>;
export const onCreateGeneralDetails = /* GraphQL */ `subscription OnCreateGeneralDetails(
  $filter: ModelSubscriptionGeneralDetailsFilterInput
) {
  onCreateGeneralDetails(filter: $filter) {
    id
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGeneralDetailsSubscriptionVariables,
  APITypes.OnCreateGeneralDetailsSubscription
>;
export const onUpdateGeneralDetails = /* GraphQL */ `subscription OnUpdateGeneralDetails(
  $filter: ModelSubscriptionGeneralDetailsFilterInput
) {
  onUpdateGeneralDetails(filter: $filter) {
    id
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGeneralDetailsSubscriptionVariables,
  APITypes.OnUpdateGeneralDetailsSubscription
>;
export const onDeleteGeneralDetails = /* GraphQL */ `subscription OnDeleteGeneralDetails(
  $filter: ModelSubscriptionGeneralDetailsFilterInput
) {
  onDeleteGeneralDetails(filter: $filter) {
    id
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGeneralDetailsSubscriptionVariables,
  APITypes.OnDeleteGeneralDetailsSubscription
>;
