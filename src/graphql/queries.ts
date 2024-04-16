/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getProgressiveHabit =
  /* GraphQL */ `query GetProgressiveHabit($id: ID!) {
  getProgressiveHabit(id: $id) {
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
` as GeneratedQuery<
    APITypes.GetProgressiveHabitQueryVariables,
    APITypes.GetProgressiveHabitQuery
  >;
export const listProgressiveHabits = /* GraphQL */ `query ListProgressiveHabits(
  $filter: ModelProgressiveHabitFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgressiveHabits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgressiveHabitsQueryVariables,
  APITypes.ListProgressiveHabitsQuery
>;
export const getActivityHabit =
  /* GraphQL */ `query GetActivityHabit($id: ID!) {
  getActivityHabit(id: $id) {
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
` as GeneratedQuery<
    APITypes.GetActivityHabitQueryVariables,
    APITypes.GetActivityHabitQuery
  >;
export const listActivityHabits = /* GraphQL */ `query ListActivityHabits(
  $filter: ModelActivityHabitFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivityHabits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActivityHabitsQueryVariables,
  APITypes.ListActivityHabitsQuery
>;
export const getGeneralHabit = /* GraphQL */ `query GetGeneralHabit($id: ID!) {
  getGeneralHabit(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetGeneralHabitQueryVariables,
  APITypes.GetGeneralHabitQuery
>;
export const listGeneralHabits = /* GraphQL */ `query ListGeneralHabits(
  $filter: ModelGeneralHabitFilterInput
  $limit: Int
  $nextToken: String
) {
  listGeneralHabits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      type
      completed
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGeneralHabitsQueryVariables,
  APITypes.ListGeneralHabitsQuery
>;
