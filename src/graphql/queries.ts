/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getHabit = /* GraphQL */ `query GetHabit($id: ID!) {
  getHabit(id: $id) {
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
` as GeneratedQuery<APITypes.GetHabitQueryVariables, APITypes.GetHabitQuery>;
export const listHabits = /* GraphQL */ `query ListHabits(
  $filter: ModelHabitFilterInput
  $limit: Int
  $nextToken: String
) {
  listHabits(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      type
      createdAt
      updatedAt
      habitDetailsId
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHabitsQueryVariables,
  APITypes.ListHabitsQuery
>;
export const getHabitDetails = /* GraphQL */ `query GetHabitDetails($id: ID!) {
  getHabitDetails(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetHabitDetailsQueryVariables,
  APITypes.GetHabitDetailsQuery
>;
export const listHabitDetails = /* GraphQL */ `query ListHabitDetails(
  $filter: ModelHabitDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listHabitDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHabitDetailsQueryVariables,
  APITypes.ListHabitDetailsQuery
>;
