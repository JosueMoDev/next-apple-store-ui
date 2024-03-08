import { gql } from "@apollo/client";
import apolloClient from "@/lib/apollo-client";
interface LoginInput {
  email: string;
  password: string;
}
const LOGINQUERY = gql`
  query Query($loginInput: LoginInput!) {
    Login(loginInput: $loginInput) {
      user {
        id
        lastName
        firstName
        email
        emailVerified
        role
        isActive
        picture
      }
    }
  }
`;
export  async function loginQuery(loginInput: LoginInput) {
  const { data } = await apolloClient.query({
    query: LOGINQUERY,
    variables: {
      loginInput,
    },
  });
  return { data };
};
