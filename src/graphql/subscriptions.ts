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
` as GeneratedSubscription<
  APITypes.OnDeleteHabitSubscriptionVariables,
  APITypes.OnDeleteHabitSubscription
>;
export const onCreateProgressiveDetails = /* GraphQL */ `subscription OnCreateProgressiveDetails(
  $filter: ModelSubscriptionProgressiveDetailsFilterInput
  $owner: String
) {
  onCreateProgressiveDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProgressiveDetailsSubscriptionVariables,
  APITypes.OnCreateProgressiveDetailsSubscription
>;
export const onUpdateProgressiveDetails = /* GraphQL */ `subscription OnUpdateProgressiveDetails(
  $filter: ModelSubscriptionProgressiveDetailsFilterInput
  $owner: String
) {
  onUpdateProgressiveDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProgressiveDetailsSubscriptionVariables,
  APITypes.OnUpdateProgressiveDetailsSubscription
>;
export const onDeleteProgressiveDetails = /* GraphQL */ `subscription OnDeleteProgressiveDetails(
  $filter: ModelSubscriptionProgressiveDetailsFilterInput
  $owner: String
) {
  onDeleteProgressiveDetails(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProgressiveDetailsSubscriptionVariables,
  APITypes.OnDeleteProgressiveDetailsSubscription
>;
export const onCreateActivityDetails = /* GraphQL */ `subscription OnCreateActivityDetails(
  $filter: ModelSubscriptionActivityDetailsFilterInput
  $owner: String
) {
  onCreateActivityDetails(filter: $filter, owner: $owner) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateActivityDetailsSubscriptionVariables,
  APITypes.OnCreateActivityDetailsSubscription
>;
export const onUpdateActivityDetails = /* GraphQL */ `subscription OnUpdateActivityDetails(
  $filter: ModelSubscriptionActivityDetailsFilterInput
  $owner: String
) {
  onUpdateActivityDetails(filter: $filter, owner: $owner) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateActivityDetailsSubscriptionVariables,
  APITypes.OnUpdateActivityDetailsSubscription
>;
export const onDeleteActivityDetails = /* GraphQL */ `subscription OnDeleteActivityDetails(
  $filter: ModelSubscriptionActivityDetailsFilterInput
  $owner: String
) {
  onDeleteActivityDetails(filter: $filter, owner: $owner) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteActivityDetailsSubscriptionVariables,
  APITypes.OnDeleteActivityDetailsSubscription
>;
export const onCreateGeneralDetails = /* GraphQL */ `subscription OnCreateGeneralDetails(
  $filter: ModelSubscriptionGeneralDetailsFilterInput
  $owner: String
) {
  onCreateGeneralDetails(filter: $filter, owner: $owner) {
    id
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateGeneralDetailsSubscriptionVariables,
  APITypes.OnCreateGeneralDetailsSubscription
>;
export const onUpdateGeneralDetails = /* GraphQL */ `subscription OnUpdateGeneralDetails(
  $filter: ModelSubscriptionGeneralDetailsFilterInput
  $owner: String
) {
  onUpdateGeneralDetails(filter: $filter, owner: $owner) {
    id
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateGeneralDetailsSubscriptionVariables,
  APITypes.OnUpdateGeneralDetailsSubscription
>;
export const onDeleteGeneralDetails = /* GraphQL */ `subscription OnDeleteGeneralDetails(
  $filter: ModelSubscriptionGeneralDetailsFilterInput
  $owner: String
) {
  onDeleteGeneralDetails(filter: $filter, owner: $owner) {
    id
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteGeneralDetailsSubscriptionVariables,
  APITypes.OnDeleteGeneralDetailsSubscription
>;
