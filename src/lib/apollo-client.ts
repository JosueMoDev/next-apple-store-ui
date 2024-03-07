import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQLURI, // Cambia esto por tu URI GraphQL
  cache: new InMemoryCache(),
});

export default apolloClient;
