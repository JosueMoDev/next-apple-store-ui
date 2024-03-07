import NextAuth, { type NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { loginQuery } from "./app/auth/login/api/loginQuery";
import { userMapper } from "./app/auth/mapper/user.mapper";

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log({ auth });
      // const isLoggedIn = !!auth?.user;

      // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      // if (isOnDashboard) {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL('/dashboard', nextUrl));
      // }
      return true;
    },

    jwt({ token, user }) {
      if (user) {
        token.data = user;
      }

      return token;
    },

    session({ session, token, user }: any) {
      session.user = token.data;
      return session;
    },
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        try {
          if (!parsedCredentials.success) return null;
          const { email, password } = parsedCredentials.data;
          const { data } = await loginQuery({ email, password });
          const user = userMapper(data);
          if(! user) return null;
          return user;
        } catch (error) {
          console.log(`${error}`);
          return null;
        }
      },
    }),
  ],
};

export const { signIn, signOut, auth, handlers } = NextAuth(authConfig);

