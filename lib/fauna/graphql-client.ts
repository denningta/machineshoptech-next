import { gql, GraphQLClient } from 'graphql-request';

const CLIENT_SECRET =
  process.env.FAUNA_ADMIN_KEY || process.env.FAUNA_CLIENT_SECRET;
console.log('CLIENT_SECRET: ', CLIENT_SECRET);

const FAUNA_GRAPHQL_BASE_URL = 'https://graphql.fauna.com/graphql';

const graphQLClient = new GraphQLClient(FAUNA_GRAPHQL_BASE_URL, {
  headers: {
    authorization: `Bearer ${CLIENT_SECRET}`,
  },
});

export interface Message {
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

export const createMessage = (newMessage: Message) => {
  const mutation = gql`
    mutation CreateContactMessage($input: ContactMessageInput!) {
      createContactMessage(data: $input) {
        name
        email
        message
        createdAt
      }
    }
  `;

  return graphQLClient.request(mutation, { input: newMessage });
};
