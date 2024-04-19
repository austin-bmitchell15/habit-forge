import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const { Sha256 } = crypto;
const GRAPHQL_ENDPOINT = process.env.API_HABITFORGE_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

const query = /* GraphQL */ `
  query LIST_TODOS {
    listTodos {
      items {
        id
        name
        description
      }
    }
  }
`;

const listProgressiveHabits = /* GraphQL */ `query ListProgressiveHabits {
  listProgressiveHabits {
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
`;

const updateProgressiveHabit = /* GraphQL */ `mutation UpdateProgressiveHabit($input: UpdateProgressiveHabitInput!) {
  updateProgressiveHabit(input: $input) {
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
`;

function isConsecutiveDay(currentDateString, lastDateString) {
  const dayInMs = 1000 * 60 * 60 * 24;
  const currentDate = new Date(currentDateString);
  const lastDate = new Date(lastDateString);
  currentDate.setHours(0, 0, 0, 0);
  lastDate.setHours(0, 0, 0, 0);
  const difference = currentDate.getTime() - lastDate.getTime();
  return difference === dayInMs || difference === 0;
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT);

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const listHabitsRequestToBeSigned = new HttpRequest({
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      host: endpoint.host
    },
    hostname: endpoint.host,
    body: JSON.stringify({ query: listProgressiveHabits }),
    path: endpoint.pathname
  });

  const listHabitsSigned = await signer.sign(listHabitsRequestToBeSigned);
  const listHabitsRequest = new Request(GRAPHQL_ENDPOINT, listHabitsSigned);

  let statusCode = 200;
  let body;
  let listHabitsResponse;

  try {
    listHabitsResponse = await fetch(listHabitsRequest);

    body = await listHabitsResponse.json();
    let habits = body.data.listProgressiveHabits.items
    habits.forEach(async (object) => {
      const today = (new Date).toISOString().split('T')[0]
      const streak = (object.lastCompleted && isConsecutiveDay(object.lastCompleted, today)) ? object.streak : 0;
      const variables = {
        input: {
          id: object.id,
          name: object.name,
          type: object.type,
          goal: object.goal,
          unit: object.unit,
          currentProgress: 0,
          lastCompleted: object.lastCompleted,
          streak: streak,
        }
      }
      const updateHabitsRequestToBeSigned = new HttpRequest({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          host: endpoint.host
        },
        hostname: endpoint.host,
        body: JSON.stringify({ query: updateProgressiveHabit, variables }),
        path: endpoint.pathname
      });
      const updateHabitsSigned = await signer.sign(updateHabitsRequestToBeSigned);
      const updateHabitsRequest = new Request(GRAPHQL_ENDPOINT, updateHabitsSigned);
      const updateHabitsResponse = await fetch(updateHabitsRequest);
    })
    
    listHabitsResponse = await fetch(listHabitsRequest);
    body = await listHabitsResponse.json();
    if (body.errors) statusCode = 400;
  } catch (error) {
    statusCode = 500;
    body = {
      errors: [
        {
          message: error.message
        }
      ]
    };
  }

  return {
    statusCode,
    body: JSON.stringify(body)
  };
};