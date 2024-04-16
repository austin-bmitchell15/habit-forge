/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateProgressiveHabit =
  /* GraphQL */ `subscription OnCreateProgressiveHabit(
  $filter: ModelSubscriptionProgressiveHabitFilterInput
  $owner: String
) {
  onCreateProgressiveHabit(filter: $filter, owner: $owner) {
    id
    name
    type
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
    APITypes.OnCreateProgressiveHabitSubscriptionVariables,
    APITypes.OnCreateProgressiveHabitSubscription
  >;
export const onUpdateProgressiveHabit =
  /* GraphQL */ `subscription OnUpdateProgressiveHabit(
  $filter: ModelSubscriptionProgressiveHabitFilterInput
  $owner: String
) {
  onUpdateProgressiveHabit(filter: $filter, owner: $owner) {
    id
    name
    type
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
    APITypes.OnUpdateProgressiveHabitSubscriptionVariables,
    APITypes.OnUpdateProgressiveHabitSubscription
  >;
export const onDeleteProgressiveHabit =
  /* GraphQL */ `subscription OnDeleteProgressiveHabit(
  $filter: ModelSubscriptionProgressiveHabitFilterInput
  $owner: String
) {
  onDeleteProgressiveHabit(filter: $filter, owner: $owner) {
    id
    name
    type
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
    APITypes.OnDeleteProgressiveHabitSubscriptionVariables,
    APITypes.OnDeleteProgressiveHabitSubscription
  >;
export const onCreateActivityHabit =
  /* GraphQL */ `subscription OnCreateActivityHabit(
  $filter: ModelSubscriptionActivityHabitFilterInput
  $owner: String
) {
  onCreateActivityHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateActivityHabitSubscriptionVariables,
    APITypes.OnCreateActivityHabitSubscription
  >;
export const onUpdateActivityHabit =
  /* GraphQL */ `subscription OnUpdateActivityHabit(
  $filter: ModelSubscriptionActivityHabitFilterInput
  $owner: String
) {
  onUpdateActivityHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateActivityHabitSubscriptionVariables,
    APITypes.OnUpdateActivityHabitSubscription
  >;
export const onDeleteActivityHabit =
  /* GraphQL */ `subscription OnDeleteActivityHabit(
  $filter: ModelSubscriptionActivityHabitFilterInput
  $owner: String
) {
  onDeleteActivityHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteActivityHabitSubscriptionVariables,
    APITypes.OnDeleteActivityHabitSubscription
  >;
export const onCreateGeneralHabit =
  /* GraphQL */ `subscription OnCreateGeneralHabit(
  $filter: ModelSubscriptionGeneralHabitFilterInput
  $owner: String
) {
  onCreateGeneralHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateGeneralHabitSubscriptionVariables,
    APITypes.OnCreateGeneralHabitSubscription
  >;
export const onUpdateGeneralHabit =
  /* GraphQL */ `subscription OnUpdateGeneralHabit(
  $filter: ModelSubscriptionGeneralHabitFilterInput
  $owner: String
) {
  onUpdateGeneralHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateGeneralHabitSubscriptionVariables,
    APITypes.OnUpdateGeneralHabitSubscription
  >;
export const onDeleteGeneralHabit =
  /* GraphQL */ `subscription OnDeleteGeneralHabit(
  $filter: ModelSubscriptionGeneralHabitFilterInput
  $owner: String
) {
  onDeleteGeneralHabit(filter: $filter, owner: $owner) {
    id
    name
    type
    completed
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteGeneralHabitSubscriptionVariables,
    APITypes.OnDeleteGeneralHabitSubscription
  >;
