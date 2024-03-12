import { gql } from "@apollo/client";
import apolloClient from "@/lib/apollo-client";

interface RegisterInput {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  picture?: string;
}

const REGISTER_MUTATION = gql`
  mutation RegisterUser($registerUserInput: CreateUserInput!) {
    registerUser(registerUserInput: $registerUserInput) {
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
`;

export async function RegisterMutation (registerUserInput: RegisterInput) {
  try {
    const { data } = await apolloClient.mutate({
      mutation: REGISTER_MUTATION,
      variables: {
        registerUserInput: registerUserInput,
      },
    });
    return data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
