export interface User {
  id: string;
  lastName: string;
  firstName: string;
  email: string;
  emailVerified?: boolean;
  role: string;
  isActive: boolean;
  picture?: string;
}

export interface Login {
  __typename: string;
  user: User;
}