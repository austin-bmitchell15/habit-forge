/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
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
export const getProgressiveDetails = /* GraphQL */ `query GetProgressiveDetails($id: ID!) {
  getProgressiveDetails(id: $id) {
    id
    goal
    unit
    currentProgress
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgressiveDetailsQueryVariables,
  APITypes.GetProgressiveDetailsQuery
>;
export const listProgressiveDetails = /* GraphQL */ `query ListProgressiveDetails(
  $filter: ModelProgressiveDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgressiveDetails(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      goal
      unit
      currentProgress
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgressiveDetailsQueryVariables,
  APITypes.ListProgressiveDetailsQuery
>;
export const getActivityDetails = /* GraphQL */ `query GetActivityDetails($id: ID!) {
  getActivityDetails(id: $id) {
    id
    sessionsPerWeek
    completedSessions
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetActivityDetailsQueryVariables,
  APITypes.GetActivityDetailsQuery
>;
export const listActivityDetails = /* GraphQL */ `query ListActivityDetails(
  $filter: ModelActivityDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivityDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      sessionsPerWeek
      completedSessions
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActivityDetailsQueryVariables,
  APITypes.ListActivityDetailsQuery
>;
export const getGeneralDetails = /* GraphQL */ `query GetGeneralDetails($id: ID!) {
  getGeneralDetails(id: $id) {
    id
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetGeneralDetailsQueryVariables,
  APITypes.GetGeneralDetailsQuery
>;
export const listGeneralDetails = /* GraphQL */ `query ListGeneralDetails(
  $filter: ModelGeneralDetailsFilterInput
  $limit: Int
  $nextToken: String
) {
  listGeneralDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      completed
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGeneralDetailsQueryVariables,
  APITypes.ListGeneralDetailsQuery
>;
