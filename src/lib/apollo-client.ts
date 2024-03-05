import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql", // Cambia esto por tu URI GraphQL
  cache: new InMemoryCache(),
});

export default apolloClient;
