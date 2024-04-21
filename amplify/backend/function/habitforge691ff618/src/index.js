
/* Amplify Params - DO NOT EDIT
	API_HABITFORGE_GRAPHQLAPIENDPOINTOUTPUT
	API_HABITFORGE_GRAPHQLAPIIDOUTPUT
	API_HABITFORGE_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

import crypto from '@aws-crypto/sha256-js';
import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import { default as fetch, Request } from 'node-fetch';

const GRAPHQL_ENDPOINT = process.env.API_HABITFORGE_GRAPHQLAPIENDPOINTOUTPUT;
const EXERCISEDB_ENDPOINT = process.env.API_EXERCISEDB_ENDPOINT
const EXERCISEDB_HOST = process.env.API_EXERCISEDB_HOST
const EXERCISEDB_KEY = process.env.API_EXERCISEDB_KEY
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const { Sha256 } = crypto;

const EQUIPMENT = [
  "barbell",
  "cable",
  "dumbbell",
  "ez%20barbell",
  "leverage%20machine",
]

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

const createExercise = /* GraphQL */ `mutation CreateExercise($input: CreateExerciseInput!) {
  createExercise(input: $input) {
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
`

function capitalizeWords(input) {
  const words = input.trim().split(" ");

  const capitalizedWords = words.map(word => {
      if (word === "") return word;
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return capitalizedWords.join(" ");
}

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);

  const endpoint = new URL(GRAPHQL_ENDPOINT)

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });

  const exerciseDBOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': EXERCISEDB_KEY,
      'X-RapidAPI-Host': EXERCISEDB_HOST
    }
  };

  let statusCode = 200;
  let getExercisesResponse;
  let body;

  try {
    for (const equipment of EQUIPMENT) {
      const getExercisesURL = new URL(EXERCISEDB_ENDPOINT + equipment + "?limit=400");
      getExercisesResponse = await fetch(getExercisesURL, exerciseDBOptions);
      body = await getExercisesResponse.json()

      for (const object of body) {
        const variables = {
          input: {
            name: capitalizeWords(object.name),
            primaryTarget: capitalizeWords(object.target),
            equipment: capitalizeWords(object.equipment),
            gifUrl: object.gifUrl,
            instructions: object.instructions,
          }
        };
        const createExerciseRequestToBeSigned = new HttpRequest({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            host: endpoint.host
          },
          hostname: endpoint.host,
          body: JSON.stringify({ query: createExercise, variables }),
          path: endpoint.pathname
        });
        const createExerciseSigned = await signer.sign(createExerciseRequestToBeSigned);
        const createExerciseRequest = new Request(GRAPHQL_ENDPOINT, createExerciseSigned);
        const createExerciseResponse = await fetch(createExerciseRequest);
        const createExerciseBody = await createExerciseResponse.json()
        if (createExerciseBody.errors) statusCode = 400;
      };
    }

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
    //  Uncomment below to enable CORS requests
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Headers": "*"
    // }, 
    body: JSON.stringify(body)
  };
};