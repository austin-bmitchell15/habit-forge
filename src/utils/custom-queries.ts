import * as APITypes from '../API';
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const listWorkoutTemplates = /* GraphQL */ `query ListWorkoutTemplates(
    $filter: ModelWorkoutTemplateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkoutTemplates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        exercises {
            items {
                exercise {
                    name
                    equipment
                    gifUrl
                    primaryTarget
                }
            }
        }
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
