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
    lastCompleted
    streak
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
      lastCompleted
      streak
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
    lastCompleted
    streak
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
      lastCompleted
      streak
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
    lastCompleted
    streak
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
      lastCompleted
      streak
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
export const getWorkoutTemplate =
  /* GraphQL */ `query GetWorkoutTemplate($id: ID!) {
  getWorkoutTemplate(id: $id) {
    id
    name
    exercises {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetWorkoutTemplateQueryVariables,
    APITypes.GetWorkoutTemplateQuery
  >;
export const listWorkoutTemplates = /* GraphQL */ `query ListWorkoutTemplates(
  $filter: ModelWorkoutTemplateFilterInput
  $limit: Int
  $nextToken: String
) {
  listWorkoutTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
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
  APITypes.ListWorkoutTemplatesQueryVariables,
  APITypes.ListWorkoutTemplatesQuery
>;
export const getExercise = /* GraphQL */ `query GetExercise($id: ID!) {
  getExercise(id: $id) {
    id
    name
    primaryTarget
    equipment
    gifUrl
    instructions
    createdAt
    updatedAt
    workoutTemplateExercisesId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExerciseQueryVariables,
  APITypes.GetExerciseQuery
>;
export const listExercises = /* GraphQL */ `query ListExercises(
  $filter: ModelExerciseFilterInput
  $limit: Int
  $nextToken: String
) {
  listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      primaryTarget
      equipment
      gifUrl
      instructions
      createdAt
      updatedAt
      workoutTemplateExercisesId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExercisesQueryVariables,
  APITypes.ListExercisesQuery
>;
